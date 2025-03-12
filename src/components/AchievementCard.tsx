
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  title: string;
  date: string;
  description: string;
  category: string;
  points: number;
  index: number;
}

const categoryColors: Record<string, string> = {
  academic: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  sports: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
  arts: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  leadership: "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
  community: "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
  default: "bg-slate-100 text-slate-800 dark:bg-slate-900/20 dark:text-slate-400",
};

const AchievementCard = ({ title, date, description, category, points, index }: AchievementCardProps) => {
  const categoryColor = categoryColors[category.toLowerCase()] || categoryColors.default;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card p-5 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <Badge variant="outline" className={cn("font-normal", categoryColor)}>
          {category}
        </Badge>
        <span className="text-sm text-slate-500 dark:text-slate-400">{date}</span>
      </div>
      
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
        {description}
      </p>
      
      <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-slate-700">
        <span className="text-sm text-slate-500 dark:text-slate-400">Points earned</span>
        <span className="font-medium text-primary">{points}</span>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
