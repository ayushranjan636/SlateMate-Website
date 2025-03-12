
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  color: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  delay?: number;
}

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  color,
  trend,
  delay = 0
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>
          <div className="text-2xl font-bold">{value}</div>
        </div>
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", color)}>
          <Icon size={20} />
        </div>
      </div>
      
      {(description || trend) && (
        <div className="flex items-center justify-between">
          {description && (
            <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
          )}
          
          {trend && (
            <div className={cn(
              "flex items-center text-sm font-medium",
              trend.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
            )}>
              <span className="mr-1">
                {trend.isPositive ? "↑" : "↓"}
              </span>
              {trend.value}%
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default StatCard;
