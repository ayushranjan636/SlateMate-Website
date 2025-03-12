import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 z-50">
      <div className="w-full max-w-md px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Replace the Logo component with an image (your GIF) */}
          <img
            src="./whitegif.gif" 
            alt="Loading..."
            className="w-50 h-50"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full glass rounded-lg overflow-hidden h-2 mb-3"
        >
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-primary"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-slate-500 dark:text-slate-400 text-sm font-medium"
        >
          Loading your slate experience...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
