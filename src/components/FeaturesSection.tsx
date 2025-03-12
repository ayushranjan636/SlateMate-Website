
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BarChart2, Award, Bookmark, Clock } from "lucide-react";

const features = [
  {
    title: "All-in-One Dashboard",
    description: "Keep track of every milestone like academics, sports, cultural events, and personal growth—all in a beautifully designed, intuitive interface.",
    icon: Award,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    title: "Real-Time Progress Tracking",
    description: "Stay ahead with dynamic progress charts, automated achievement logs, and personalized insights to monitor growth over time.",
    icon: BarChart2,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  },
  {
    title: "Goal-Oriented Success Planning",
    description: "Set goals, track your journey, and stay motivated with structured reminders and milestone celebrations.",
    icon: Bookmark,
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  },
  {
    title: " Smart Time Managementt",
    description: "Optimize schedules with in-app calendars, event reminders, and productivity tools tailored for students.",
    icon: Clock,
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" />
      </div>
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-wide mb-3"
          >
            What Makes Slate Special ?
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            A Smarter Way to Track and Showcase Achievements
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            Everything you need to track, analyze, and showcase your accomplishments
            all in one beautiful, intuitive platform.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-5", feature.color)}>
                <feature.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
