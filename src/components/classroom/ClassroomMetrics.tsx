import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";

const weeklyAttentionData = [
  { day: "Mon", attention: 75, engagement: 80 },
  { day: "Tue", attention: 82, engagement: 85 },
  { day: "Wed", attention: 78, engagement: 78 },
  { day: "Thu", attention: 85, engagement: 88 },
  { day: "Fri", attention: 72, engagement: 75 },
];

const subjectAttendanceData = [
  { subject: "Mathematics", attendance: 95 },
  { subject: "Physics", attendance: 92 },
  { subject: "Chemistry", attendance: 88 },
  { subject: "English", attendance: 96 },
  { subject: "History", attendance: 90 },
];

const behaviorData = [
  { name: "Excellent", value: 45, color: "hsl(142, 71%, 45%)" },
  { name: "Good", value: 35, color: "hsl(199, 89%, 48%)" },
  { name: "Average", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "Needs Improvement", value: 5, color: "hsl(0, 84%, 60%)" },
];

const misconductData = [
  { week: "Week 1", incidents: 3 },
  { week: "Week 2", incidents: 5 },
  { week: "Week 3", incidents: 2 },
  { week: "Week 4", incidents: 4 },
];

const chartColors = ["hsl(199, 89%, 48%)", "hsl(173, 58%, 39%)", "hsl(142, 71%, 45%)", "hsl(38, 92%, 50%)"];

const ClassroomMetrics = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Classroom Metrics</h1>
        <p className="text-muted-foreground">Comprehensive class-level analytics and insights</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Avg Attention", value: "78%", change: "+2.5%" },
          { label: "Avg Attendance", value: "92%", change: "+1.2%" },
          { label: "Behavior Score", value: "85%", change: "+3.1%" },
          { label: "Engagement", value: "81%", change: "-0.8%" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="stat-card"
          >
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attention & Engagement Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-semibold text-foreground mb-4">Weekly Attention & Engagement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyAttentionData}>
              <defs>
                <linearGradient id="colorAttention" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors[0]} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={chartColors[0]} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors[1]} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={chartColors[1]} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px"
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="attention" stroke={chartColors[0]} fillOpacity={1} fill="url(#colorAttention)" name="Attention %" />
              <Area type="monotone" dataKey="engagement" stroke={chartColors[1]} fillOpacity={1} fill="url(#colorEngagement)" name="Engagement %" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Subject-wise Attendance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-semibold text-foreground mb-4">Subject-wise Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectAttendanceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
              <YAxis dataKey="subject" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px"
                }} 
              />
              <Bar dataKey="attendance" fill={chartColors[2]} radius={[0, 8, 8, 0]} name="Attendance %" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Behavior Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-semibold text-foreground mb-4">Behavior Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={behaviorData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {behaviorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Misconduct Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-semibold text-foreground mb-4">Misconduct Incidents</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={misconductData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="incidents" 
                stroke="hsl(0, 84%, 60%)" 
                strokeWidth={3}
                dot={{ fill: "hsl(0, 84%, 60%)", strokeWidth: 2 }}
                name="Incidents"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default ClassroomMetrics;
