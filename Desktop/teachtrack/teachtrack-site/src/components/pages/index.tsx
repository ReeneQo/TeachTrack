import { motion } from "framer-motion";
import { useProgress } from "../hooks/useProgress";
import { lessons } from "../../data/cards";
import { LessonCard } from "../elements/LessonCard";
import { ProgressBar } from "../elements/ProgressBar";
import { useNavigate } from "react-router-dom";
import { Header } from "../navigation/Navigation";
import { SignIn, useAuth } from "@clerk/clerk-react";
import { useState } from "react";

export default function Index() {
  const { progress } = useProgress();
  const navigate = useNavigate();
  const {isSignedIn} = useAuth()
  const htmlCssLessons = lessons.filter(lesson => lesson.category === "HTML/CSS");
  const jsLessons = lessons.filter(lesson => lesson.category === "JavaScript");
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)


  const handleOverlayClick=(e: any)=>{
    if (e.target === e.currentTarget) {
      setIsSignInModalOpen(false)
    }
  }

  return (
    <>
    <div className="min-h-screen bg-gray-50">
    <Header/>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
        
          <h1 className="text-4xl font-bold mb-4">Курс веб-разработки</h1>
          <p className="text-gray-600 mb-8">
            Изучите HTML, CSS и JavaScript с нуля
          </p>
          <div className="max-w-xl mx-auto">
            <ProgressBar progress={progress.totalProgress} />
            <p className="text-sm text-gray-500">
              Пройдено {progress.completedLessons.length} из {lessons.length} уроков
            </p>
          </div>
        </motion.div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">HTML и CSS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {htmlCssLessons.map((lesson, index) => {
            const isLocked = index >=3 && !isSignedIn;
              return (
            <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={progress.completedLessons.includes(lesson.id)}
                onClick={() => {
                  if (isLocked) {
                    setIsSignInModalOpen(true)
                  } else {
                    navigate(`/lesson/${lesson.id}`);
                  }
                }}
                isLocked={isLocked}    
                />
         )})}
          </div>
          
          {isSignInModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70" onClick={handleOverlayClick}>
            <SignIn/>
          </div>
      )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">JavaScript</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jsLessons.map((lesson) => {
            const isLocked = !isSignedIn;
              return (
            <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={progress.completedLessons.includes(lesson.id)}
                onClick={() => {
                  if (isLocked) {
                    setIsSignInModalOpen(true)
                  } else {
                    navigate(`/lesson/${lesson.id}`);
                  }
                }}
                isLocked={isLocked}    
                />
         )})}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}