import { motion } from "framer-motion";
import { Lesson } from "../../data/cards";
import { CheckCircle } from "lucide-react";

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  onClick: () => void;
}

export function LessonCard({ lesson, isCompleted, onClick }: LessonCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-emerald-500 font-medium">
          Урок {lesson.id}
        </span>
        {isCompleted && (
          <CheckCircle className="w-5 h-5 text-emerald-500" />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>{lesson.duration}</span>
      </div>
    </motion.div>
  );
}