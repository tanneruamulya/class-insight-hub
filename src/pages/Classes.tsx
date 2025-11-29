import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronDown, 
  ChevronRight, 
  GraduationCap,
  Users,
  Building
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const classesData = [
  {
    id: "1",
    name: "Class 10",
    sections: [
      { id: "10-a", name: "Section A", students: 32 },
      { id: "10-b", name: "Section B", students: 30 },
      { id: "10-c", name: "Section C", students: 28 },
    ]
  },
  {
    id: "2",
    name: "Class 11",
    sections: [
      { id: "11-a", name: "Section A", students: 35 },
      { id: "11-b", name: "Section B", students: 33 },
    ]
  },
  {
    id: "3",
    name: "Class 12",
    sections: [
      { id: "12-a", name: "Section A", students: 30 },
      { id: "12-b", name: "Section B", students: 28 },
      { id: "12-c", name: "Section C", students: 32 },
    ]
  },
];

const Classes = () => {
  const navigate = useNavigate();
  const [expandedClass, setExpandedClass] = useState<string | null>("1");

  const handleSectionClick = (classId: string, sectionId: string) => {
    navigate(`/classroom/${classId}/${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">EduMonitor</h1>
              <p className="text-xs text-muted-foreground">Classroom Monitoring</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate("/school-profile")}
            className="flex items-center gap-3 hover:bg-secondary px-4 py-2 rounded-xl transition-colors"
          >
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Springfield High School</p>
              <p className="text-xs text-muted-foreground">Main Branch</p>
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building className="w-5 h-5 text-primary" />
            </div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Classes</h2>
            <p className="text-muted-foreground">Select a class and section to view the classroom dashboard</p>
          </div>

          <div className="grid gap-4">
            {classesData.map((cls, index) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card rounded-2xl shadow-soft overflow-hidden"
              >
                {/* Class Header */}
                <button
                  onClick={() => setExpandedClass(expandedClass === cls.id ? null : cls.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">{cls.name}</h3>
                      <p className="text-sm text-muted-foreground">{cls.sections.length} Sections</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                      {cls.sections.reduce((acc, sec) => acc + sec.students, 0)} Students
                    </span>
                    {expandedClass === cls.id ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Sections Dropdown */}
                <AnimatePresence>
                  {expandedClass === cls.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {cls.sections.map((section) => (
                          <button
                            key={section.id}
                            onClick={() => handleSectionClick(cls.id, section.id)}
                            className="p-4 bg-secondary/50 hover:bg-secondary rounded-xl transition-all hover:shadow-soft group text-left"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                  {section.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {section.students} Students
                                </p>
                              </div>
                              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Classes;
