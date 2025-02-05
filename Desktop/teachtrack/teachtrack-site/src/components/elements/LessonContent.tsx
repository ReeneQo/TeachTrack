import { motion } from "framer-motion";
import { Button } from "./Buttons";
import { Lesson } from "../../data/cards";
import { useNavigate } from "react-router-dom";
interface LessonContentProps {
  lesson: Lesson;
  onComplete?: () => void;
  isCompleted: boolean;
}

export function LessonContent({
  lesson,
  onComplete,
  isCompleted,
}: LessonContentProps) {
  const navigate = useNavigate();
  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
    navigate("/");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>
      <div className="prose prose-gray max-w-none mb-8">{lesson.content}</div>
      {!isCompleted && (
        <Button
          onClick={handleComplete}
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Завершить урок
        </Button>
      )}
    </motion.div>
  );
}
