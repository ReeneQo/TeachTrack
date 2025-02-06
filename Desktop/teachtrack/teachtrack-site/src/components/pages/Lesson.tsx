import { useParams, useNavigate } from "react-router-dom";
import { lessons } from "../../data/cards";
import { useProgress } from "../hooks/useProgress";
import { LessonContent } from "../elements/LessonContent";
import { Button } from "../elements/Buttons";
import { ArrowLeft } from "lucide-react";

export default function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { progress, completeLesson } = useProgress();
  
  const lesson = lessons.find(l => l.id === Number(id));
  
  if (!lesson) {
    return <div>Урок не найден</div>;
  }

  const isCompleted = progress.completedLessons.includes(lesson.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к урокам
        </Button>
        
        <LessonContent
          lesson={lesson}
          onComplete={() => completeLesson(lesson.id)}
          isCompleted={isCompleted}/>
      </div>
    </div>
  );
}