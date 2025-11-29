import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, User, Calendar, Activity, Award, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

const attendanceData = [
  { month: "Jan", present: 20, absent: 2 },
  { month: "Feb", present: 19, absent: 1 },
  { month: "Mar", present: 21, absent: 1 },
  { month: "Apr", present: 18, absent: 4 },
  { month: "May", present: 22, absent: 0 },
];

const attentionData = [
  { week: "Week 1", attention: 75 },
  { week: "Week 2", attention: 82 },
  { week: "Week 3", attention: 78 },
  { week: "Week 4", attention: 85 },
  { week: "Week 5", attention: 88 },
];

const behaviorData = [
  { name: "Excellent", value: 60, color: "hsl(142, 71%, 45%)" },
  { name: "Good", value: 30, color: "hsl(199, 89%, 48%)" },
  { name: "Needs Improvement", value: 10, color: "hsl(38, 92%, 50%)" },
];

const engagementData = [
  { subject: "Math", score: 85 },
  { subject: "Physics", score: 78 },
  { subject: "Chemistry", score: 82 },
  { subject: "English", score: 90 },
  { subject: "History", score: 75 },
];

const misconductData = [
  { month: "Jan", incidents: 1 },
  { month: "Feb", incidents: 0 },
  { month: "Mar", incidents: 2 },
  { month: "Apr", incidents: 0 },
  { month: "May", incidents: 1 },
];

const StudentDetails = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();

  const studentInfo = {
    id: studentId,
    name: "Alex Johnson",
    class: "10-A",
    rollNo: "15",
    parentContact: "+1 234 567 8900",
    email: "alex.johnson@school.edu"
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Student Metrics
        </Button>

        {/* Student Header */}
        <div className="bg-card rounded-2xl p-6 shadow-soft mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-1">{studentInfo.name}</h1>
              <p className="text-muted-foreground">Student ID: {studentInfo.id}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Class</p>
                <p className="font-semibold text-foreground">{studentInfo.class}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Roll No</p>
                <p className="font-semibold text-foreground">{studentInfo.rollNo}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Parent Contact</p>
                <p className="font-semibold text-foreground">{studentInfo.parentContact}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">{studentInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {[
            { label: "Attendance", value: "95%", icon: Calendar, color: "text-success" },
            { label: "Avg Attention", value: "82%", icon: Activity, color: "text-primary" },
            { label: "Behavior Score", value: "88%", icon: Award, color: "text-accent" },
            { label: "Engagement", value: "85%", icon: Activity, color: "text-warning" },
            { label: "Misconducts", value: "4", icon: AlertTriangle, color: "text-destructive" },
          ].map((stat, index) => (
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
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Attendance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-success" />
              Attendance Overview
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px"
                  }} 
                />
                <Legend />
                <Bar dataKey="present" fill="hsl(142, 71%, 45%)" name="Present" radius={[4, 4, 0, 0]} />
                <Bar dataKey="absent" fill="hsl(0, 84%, 60%)" name="Absent" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Attention Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Attention Span Trend
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={attentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px"
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="attention" 
                  stroke="hsl(199, 89%, 48%)" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(199, 89%, 48%)", strokeWidth: 2 }}
                  name="Attention %"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Behavior Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Behavior Analytics
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={behaviorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
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

          {/* Engagement by Subject */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-warning" />
              Engagement by Subject
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={engagementData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                <Radar 
                  name="Engagement" 
                  dataKey="score" 
                  stroke="hsl(38, 92%, 50%)" 
                  fill="hsl(38, 92%, 50%)" 
                  fillOpacity={0.3} 
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Misconduct Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card rounded-2xl p-6 shadow-soft lg:col-span-2"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Misconduct History
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={misconductData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px"
                  }} 
                />
                <Bar dataKey="incidents" fill="hsl(0, 84%, 60%)" name="Incidents" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentDetails;
