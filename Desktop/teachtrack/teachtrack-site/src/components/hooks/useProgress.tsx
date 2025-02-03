import { useState, useEffect } from 'react';

interface Progress {
  completedLessons: number[];
  totalProgress: number;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem('lessonProgress');
    return saved ? JSON.parse(saved) : { completedLessons: [], totalProgress: 0 };
  });

  useEffect(() => {
    localStorage.setItem('lessonProgress', JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId: number) => {
    if (!progress.completedLessons.includes(lessonId)) {
      const newCompleted = [...progress.completedLessons, lessonId];
      setProgress({
        completedLessons: newCompleted,
        totalProgress: (newCompleted.length / 30) * 100
      });
    }
  };

  return { progress, completeLesson };
}