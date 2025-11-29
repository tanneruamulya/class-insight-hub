import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Users,
  GraduationCap,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SchoolProfile = () => {
  const navigate = useNavigate();

  const schoolInfo = {
    name: "Springfield High School",
    branch: "Main Campus",
    id: "SCH-2024-001",
    address: "1234 Education Boulevard, Springfield, IL 62701",
    phone: "+1 (217) 555-0100",
    email: "info@springfieldhigh.edu",
    website: "www.springfieldhigh.edu",
    principal: "Dr. Margaret Williams",
    totalStudents: 1250,
    totalTeachers: 85,
    established: 1965
  };

  const stats = [
    { label: "Total Students", value: schoolInfo.totalStudents, icon: Users, color: "text-primary" },
    { label: "Total Teachers", value: schoolInfo.totalTeachers, icon: GraduationCap, color: "text-accent" },
    { label: "Years of Excellence", value: new Date().getFullYear() - schoolInfo.established, icon: Award, color: "text-success" },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Header Card */}
        <div className="bg-card rounded-3xl p-8 shadow-soft mb-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center flex-shrink-0">
              <Building className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">{schoolInfo.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{schoolInfo.branch}</p>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl w-fit">
                <span className="text-sm text-muted-foreground">School ID:</span>
                <span className="font-mono font-semibold text-foreground">{schoolInfo.id}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value.toLocaleString()}</p>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl p-6 shadow-soft"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="font-medium text-foreground">{schoolInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium text-foreground">{schoolInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium text-foreground">{schoolInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Website</p>
                <p className="font-medium text-foreground">{schoolInfo.website}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Principal</p>
                <p className="font-medium text-foreground">{schoolInfo.principal}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SchoolProfile;
