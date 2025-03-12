
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ArrowUpRight } from "lucide-react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  type: "area" | "bar";
  data: any[];
  dataKey: string;
  color: string;
  secondaryColor?: string;
  xAxisDataKey?: string;
  height?: number;
}

const ChartCard = ({
  title,
  subtitle,
  type,
  data,
  dataKey,
  color,
  secondaryColor,
  xAxisDataKey = "name",
  height = 300,
}: ChartCardProps) => {
  const [chartData, setChartData] = useState(data);
  
  // Animation for data changes
  useEffect(() => {
    setChartData(data);
  }, [data]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
          <span className="mr-1">12%</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
      
      <div style={{ height, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          {type === "area" ? (
            <AreaChart
              data={chartData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id={`color-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey={xAxisDataKey}
                axisLine={false}
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#888" }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#888" }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                fillOpacity={1}
                fill={`url(#color-${dataKey})`}
              />
              {secondaryColor && (
                <Area
                  type="monotone"
                  dataKey="previous"
                  stroke={secondaryColor}
                  fillOpacity={0}
                />
              )}
            </AreaChart>
          ) : (
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey={xAxisDataKey}
                axisLine={false}
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#888" }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#888" }}
              />
              <Tooltip />
              <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
              {secondaryColor && <Bar dataKey="previous" fill={secondaryColor} radius={[4, 4, 0, 0]} />}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChartCard;
