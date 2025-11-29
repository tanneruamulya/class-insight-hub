import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Radio, Users, Activity, AlertTriangle, TrendingUp } from "lucide-react";

const LiveView = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [attentionLevel, setAttentionLevel] = useState(78);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate live attention fluctuation
      setAttentionLevel(prev => Math.min(100, Math.max(50, prev + (Math.random() - 0.5) * 5)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Students Present", value: "30/32", icon: Users, color: "text-success" },
    { label: "Attention Level", value: `${Math.round(attentionLevel)}%`, icon: Activity, color: "text-primary" },
    { label: "Engagement Rate", value: "85%", icon: TrendingUp, color: "text-accent" },
    { label: "Alerts", value: "2", icon: AlertTriangle, color: "text-warning" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Live Classroom</h1>
          <p className="text-muted-foreground">Real-time monitoring and analytics</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-xl">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-success font-medium">Live</span>
          </div>
          <div className="px-4 py-2 bg-card rounded-xl shadow-soft">
            <span className="font-mono text-foreground">
              {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="stat-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Feed Placeholder */}
      <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Radio className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Live Feed</h3>
              <p className="text-muted-foreground">Camera feed would appear here</p>
            </div>
          </div>
          
          {/* Attention Overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Class Attention Level</span>
              <span className="text-sm font-bold text-primary">{Math.round(attentionLevel)}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary rounded-full"
                animate={{ width: `${attentionLevel}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="mt-8 bg-card rounded-2xl p-6 shadow-soft">
        <h3 className="font-semibold text-foreground mb-4">Recent Alerts</h3>
        <div className="space-y-3">
          {[
            { time: "10:23 AM", message: "Student distraction detected - Row 3", type: "warning" },
            { time: "10:15 AM", message: "Attention drop below 70% threshold", type: "info" },
          ].map((alert, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-xl border ${
                alert.type === "warning" 
                  ? "bg-warning/5 border-warning/20" 
                  : "bg-primary/5 border-primary/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-foreground">{alert.message}</span>
                <span className="text-sm text-muted-foreground">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveView;
