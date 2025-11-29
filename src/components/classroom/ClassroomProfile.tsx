import { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, Save, X, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialTimetable = [
  { day: "Monday", periods: ["Math", "Physics", "Break", "English", "Chemistry", "History"] },
  { day: "Tuesday", periods: ["English", "Math", "Break", "Physics", "Art", "Chemistry"] },
  { day: "Wednesday", periods: ["Chemistry", "History", "Break", "Math", "Physics", "English"] },
  { day: "Thursday", periods: ["Physics", "English", "Break", "Chemistry", "Math", "History"] },
  { day: "Friday", periods: ["History", "Chemistry", "Break", "English", "Physics", "Math"] },
];

const periodTimes = ["8:00-8:45", "8:50-9:35", "9:40-10:00", "10:05-10:50", "10:55-11:40", "11:45-12:30"];

const ClassroomProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [timetable, setTimetable] = useState(initialTimetable);

  const handlePeriodChange = (dayIndex: number, periodIndex: number, value: string) => {
    const newTimetable = [...timetable];
    newTimetable[dayIndex].periods[periodIndex] = value;
    setTimetable(newTimetable);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Classroom Profile</h1>
        <p className="text-muted-foreground">Class information and timetable management</p>
      </div>

      {/* Class Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 shadow-soft mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Class Name</p>
              <p className="text-xl font-bold text-foreground">Class 10</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">A</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Section</p>
              <p className="text-xl font-bold text-foreground">Section A</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-success/10 rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Class Teacher</p>
              <p className="text-xl font-bold text-foreground">Mrs. Sarah Thompson</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timetable */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl p-6 shadow-soft"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Class Timetable</h3>
          </div>
          <Button
            variant={isEditing ? "ghost" : "outline"}
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </>
            ) : (
              <>
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Timetable
              </>
            )}
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Day / Time</th>
                {periodTimes.map((time, index) => (
                  <th key={index} className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">
                    {time}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((row, dayIndex) => (
                <tr key={row.day} className="border-b border-border/50">
                  <td className="py-4 px-4 font-medium text-foreground">{row.day}</td>
                  {row.periods.map((period, periodIndex) => (
                    <td key={periodIndex} className="py-4 px-4 text-center">
                      {isEditing ? (
                        <Input
                          value={period}
                          onChange={(e) => handlePeriodChange(dayIndex, periodIndex, e.target.value)}
                          className="w-24 h-8 text-center text-sm"
                        />
                      ) : (
                        <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                          period === "Break" 
                            ? "bg-warning/10 text-warning" 
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {period}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isEditing && (
          <div className="mt-6 flex justify-end">
            <Button onClick={() => setIsEditing(false)} variant="gradient">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ClassroomProfile;
