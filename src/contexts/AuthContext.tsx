
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

type UserRole = "admin" | "student" | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  
  // Check localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // In a real app, this would be an API call
    // Mock authentication for demo purposes
    
    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Login failed",
        description: "Please provide both email and password",
        variant: "destructive",
      });
      return false;
    }

    if (email === "admin@slate.com" && password === "admin123" && role === "admin") {
      const adminUser = {
        id: "1",
        name: "Admin User",
        email: "admin@slate.com",
        role: "admin" as UserRole,
      };
      
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      
      toast({
        title: "Welcome back, Admin!",
        description: "You have successfully logged in.",
      });
      
      return true;
    } else if (email === "student@slate.com" && password === "student123" && role === "student") {
      const studentUser = {
        id: "2",
        name: "Student User",
        email: "student@slate.com",
        role: "student" as UserRole,
      };
      
      setUser(studentUser);
      localStorage.setItem("user", JSON.stringify(studentUser));
      
      toast({
        title: "Welcome back, Student!",
        description: "You have successfully logged in.",
      });
      
      return true;
    }
    
    toast({
      title: "Login failed",
      description: "Invalid email, password, or role combination",
      variant: "destructive",
    });
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
