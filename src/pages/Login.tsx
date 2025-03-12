
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const { isAuthenticated, user } = useAuth();
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <header className="container py-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none -z-10"
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
          </motion.div>
          
          <LoginForm />
        </div>
      </main>
    </div>
  );
};

export default Login;
