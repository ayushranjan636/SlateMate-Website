
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "student">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password, role);
      
      if (success) {
        const url = role === "admin" ? "/admin-dashboard" : "/student-dashboard";
        // Open in new tab
        window.open(url, "_blank");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 max-w-md w-full mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Sign in to continue to your dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <RadioGroup
          defaultValue={role}
          onValueChange={(value) => setRole(value as "admin" | "student")}
          className="flex justify-center space-x-6 mb-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student" className="cursor-pointer">Student</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="admin" id="admin" />
            <Label htmlFor="admin" className="cursor-pointer">Administrator</Label>
          </div>
        </RadioGroup>

        <div className="space-y-4">
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full py-3 px-4 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all peer placeholder-transparent"
              placeholder="Email address"
            />
            <Label
              htmlFor="email"
              className="absolute left-4 -top-2.5 bg-white dark:bg-slate-900 px-1 text-sm text-slate-600 dark:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all"
            >
              Email address
            </Label>
          </div>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-3 px-4 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all peer placeholder-transparent"
              placeholder="Password"
            />
            <Label
              htmlFor="password"
              className="absolute left-4 -top-2.5 bg-white dark:bg-slate-900 px-1 text-sm text-slate-600 dark:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all"
            >
              Password
            </Label>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="rounded border-slate-300 dark:border-slate-600"
            />
            <label htmlFor="remember" className="text-slate-600 dark:text-slate-400">
              Remember me
            </label>
          </div>
          <a href="#" className="text-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full py-6"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>

        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          For demo purposes:
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-500">
            Student: <span className="font-mono">student@slate.com / student123</span>
            <br />
            Admin: <span className="font-mono">admin@slate.com / admin123</span>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
