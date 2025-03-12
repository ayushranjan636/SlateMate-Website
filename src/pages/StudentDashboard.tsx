
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Calendar, GraduationCap, Medal, Trophy } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import AchievementCard from "@/components/AchievementCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const StudentDashboard = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Welcome toast
    toast({
      title: "Welcome back!",
      description: "You have new achievements to unlock.",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <DashboardHeader 
        title="Student Dashboard"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Current GPA"
            value="3.8"
            description="Top 10% in your grade"
            icon={GraduationCap}
            color="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
            trend={{
              value: 5,
              isPositive: true
            }}
            delay={0.1}
          />
          <StatCard
            title="Achievements"
            value="24"
            description="4 new since last month"
            icon={Trophy}
            color="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
            trend={{
              value: 12,
              isPositive: true
            }}
            delay={0.2}
          />
          <StatCard
            title="Attendance"
            value="98%"
            description="Last 30 days"
            icon={Calendar}
            color="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
            trend={{
              value: 2,
              isPositive: true
            }}
            delay={0.3}
          />
          <StatCard
            title="Class Rank"
            value="5th"
            description="Out of 120 students"
            icon={Medal}
            color="bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
            trend={{
              value: 2,
              isPositive: true
            }}
            delay={0.4}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard 
            title="Academic Performance" 
            data={[
              { name: 'Math', score: 92 },
              { name: 'Science', score: 88 },
              { name: 'English', score: 95 },
              { name: 'History', score: 85 },
              { name: 'Art', score: 98 },
            ]}
            delay={0.5}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card overflow-hidden"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Overall Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Academic</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Extracurricular</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Sports</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Community Service</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </CardContent>
          </motion.div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AchievementCard 
            title="Science Fair Winner"
            date="May 15, 2023"
            category="Academic"
            points={500}
            delay={0.7}
          />
          <AchievementCard 
            title="Perfect Attendance"
            date="April 30, 2023"
            category="Participation"
            points={300}
            delay={0.8}
          />
          <AchievementCard 
            title="Math Competition Finalist"
            date="March 22, 2023"
            category="Academic"
            points={450}
            delay={0.9}
          />
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
