
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900" />
      </div>
      
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 order-2 lg:order-1"
          >
            <div className="glass-card p-6 md:p-8 relative overflow-hidden">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2940&auto=format&fit=crop"
                  alt="Students collaborating" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium">Empowering students to achieve more</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">N/A</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Schools using Slate</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">N/A</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Students tracking achievements</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">N/A</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Achievements recorded</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">N/A</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Student satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-primary uppercase tracking-wide mb-3"
            >
              About Slate
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why We Built Slate
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 mb-6"
            >
              Our platform empowers schools, parents, and students with a secure, AI-driven solution that simplifies achievement tracking, personalized learning, and school management. By leveraging advanced technology, we enhance efficiency, engagement, and communication within the education ecosystem.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-600 dark:text-slate-300 mb-8"
            >
              For schools, the platform streamlines academic tracking, improves student engagement, and facilitates seamless communication. For students, it provides tools to monitor achievements, set goals, and boost productivity. For parents, it offers real-time insights into their child’s progress, enabling them to provide informed support for their educational journey.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Join Slate Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
