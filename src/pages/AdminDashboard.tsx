
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Award, BarChart2, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import DashboardHeader from "@/components/DashboardHeader";
import StatCard from "@/components/StatCard";
import AchievementCard from "@/components/AchievementCard";
import ChartCard from "@/components/ChartCard";

const AdminDashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // Redirect if not authenticated or not an admin
    if (!isAuthenticated || user?.role !== "admin") {
      navigate("/login");
    }
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [isAuthenticated, user, navigate]);

  // Mock data for charts
  const achievementData = [
    { name: "Jan", current: 40, previous: 30 },
    { name: "Feb", current: 45, previous: 35 },
    { name: "Mar", current: 55, previous: 40 },
    { name: "Apr", current: 60, previous: 45 },
    { name: "May", current: 75, previous: 55 },
    { name: "Jun", current: 80, previous: 60 },
    { name: "Jul", current: 90, previous: 70 },
  ];
  
  const categoryData = [
    { name: "Academics", value: 35 },
    { name: "Sports", value: 25 },
    { name: "Arts", value: 15 },
    { name: "Leadership", value: 15 },
    { name: "Community", value: 10 },
  ];
  
  // Mock achievement entries
  const recentAchievements = [
    {
      id: 1,
      title: "Math Olympiad Gold Medal",
      date: "May 15, 2023",
      description: "First place in regional mathematics competition",
      category: "Academic",
      points: 150,
      student: "Alex Johnson"
    },
    {
      id: 2,
      title: "Basketball Team Captain",
      date: "April 3, 2023",
      description: "Led team to state championship semifinals",
      category: "Sports",
      points: 120,
      student: "Marcus Chen"
    },
    {
      id: 3,
      title: "Science Fair Winner",
      date: "March 22, 2023",
      description: "Innovative project on renewable energy",
      category: "Academic",
      points: 140,
      student: "Sophia Williams"
    },
    {
      id: 4,
      title: "Community Service Award",
      date: "March 10, 2023",
      description: "100+ hours of volunteer work at local shelter",
      category: "Community",
      points: 110,
      student: "Isabella Rodriguez"
    },
  ];
  
  // Filter achievements based on search query
  const filteredAchievements = recentAchievements.filter(
    achievement => 
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <DashboardHeader title="Admin Dashboard" />
      
      <main className="container py-8">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-2 md:hidden"
          >
            Admin Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400"
          >
            Welcome back, {user?.name || "Admin"}! Here's an overview of student achievements.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Students" 
            value="256" 
            description="Active students" 
            icon={Users} 
            color="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
            trend={{ value: 4, isPositive: true }}
            delay={0.1}
          />
          <StatCard 
            title="Achievements" 
            value="1,892" 
            description="All time" 
            icon={Award} 
            color="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
            trend={{ value: 8, isPositive: true }}
            delay={0.2}
          />
          <StatCard 
            title="Categories" 
            value="12" 
            description="Achievement types" 
            icon={BarChart2} 
            color="bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
            delay={0.3}
          />
          <StatCard 
            title="This Month" 
            value="89" 
            description="New achievements" 
            icon={Clock} 
            color="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
            trend={{ value: 12, isPositive: true }}
            delay={0.4}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ChartCard 
              title="Achievement Growth" 
              subtitle="Current vs. Previous Year" 
              type="area" 
              data={achievementData} 
              dataKey="current" 
              secondaryColor="#94a3b8" 
              color="#4f46e5" 
            />
          </div>
          <div>
            <ChartCard 
              title="Category Distribution" 
              subtitle="Achievements by Type" 
              type="bar" 
              data={categoryData} 
              dataKey="value" 
              color="#8b5cf6" 
            />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <h2 className="text-xl font-bold mb-2 sm:mb-0">Recent Achievements</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Search achievements or students..."
                className="pl-10 max-w-xs w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {filteredAchievements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  title={achievement.title}
                  date={achievement.date}
                  description={`${achievement.student} - ${achievement.description}`}
                  category={achievement.category}
                  points={achievement.points}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">No achievements found matching your search criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
