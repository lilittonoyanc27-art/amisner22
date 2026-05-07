/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lesson } from './types';
import { X, Trophy, AlertCircle, CheckCircle2, Star, ArrowRight } from 'lucide-react';

interface ExerciseViewProps {
  lesson: Lesson;
  onBack: () => void;
}

export default function ExerciseView({ lesson, onBack }: ExerciseViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentExercise = lesson.exercises[currentIndex];
  const isLast = currentIndex === lesson.exercises.length - 1;

  const handleNext = () => {
    if (isLast) {
      setIsGameOver(true);
    } else {
      setCurrentIndex(v => v + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowResult(false);
    }
  };

  const checkAnswer = (option: string) => {
    if (showResult) return;
    
    setSelectedOption(option);
    const isRight = option === currentExercise.answer;
    setIsCorrect(isRight);
    setShowResult(true);
    
    if (isRight) {
      setScore(s => s + 1);
    }

    // Auto-advance after a short delay
    setTimeout(() => {
      handleNext();
    }, 1500);
  };

  if (isGameOver) {
    const percentage = Math.round((score / lesson.exercises.length) * 100);
    
    return (
      <div className="text-center space-y-12 py-12 px-4 max-w-2xl mx-auto">
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="w-48 h-48 bg-white rounded-[40px] flex items-center justify-center mx-auto shadow-2xl border-8 border-slate-50"
        >
          <Trophy className="w-24 h-24 text-brand-indigo" />
        </motion.div>
        
        <div className="space-y-4">
          <h2 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter text-slate-800">
             ԱՎԱՐՏՎԵՑ
          </h2>
          <p className="text-2xl text-slate-400 font-bold">
            Դու պատասխանեցիր հարցերի {percentage}%-ին
          </p>
          <div className="flex justify-center gap-3">
             {[1, 2, 3].map(i => (
               <Star key={i} className="w-10 h-10 text-yellow-400 fill-current animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
             ))}
          </div>
        </div>

        <div className="lesson-card p-10 bg-slate-50/50">
          <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">ՔՈ ԱՐԴՅՈՒՆՔԸ</div>
          <div className="text-8xl font-black text-brand-indigo">{score} / {lesson.exercises.length}</div>
        </div>

        <button onClick={onBack} className="btn-primary w-full py-6 text-2xl flex items-center justify-center gap-4">
          ՎԵՐԱԴԱՌՆԱԼ <ArrowRight className="w-8 h-8" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-4 px-4 space-y-8">
      {/* HUD */}
      <div className="flex items-center justify-between gap-4">
        <button onClick={onBack} className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm">
          <X className="w-8 h-8 text-slate-400" />
        </button>
        
        <div className="flex-1 max-w-md h-4 bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-200">
          <motion.div 
            className="h-full bg-brand-indigo rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            animate={{ width: `${((currentIndex + 1) / lesson.exercises.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl shadow-sm">
           <span className="text-slate-600 font-black text-xl uppercase tracking-tighter">{currentIndex + 1} / {lesson.exercises.length}</span>
        </div>
      </div>

      <div className="relative pt-6">
         <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="lesson-card p-10 md:p-16 relative overflow-hidden"
            >
              <div className="relative z-10 space-y-12">
                 <div className="text-center space-y-4">
                    <span className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-brand-indigo/10 border-brand-indigo text-brand-indigo">
                       ԸՆՏՐԻՐ ՃԻՇՏ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆԸ
                    </span>
                    <h3 className="text-5xl md:text-7xl font-black text-slate-800 italic uppercase tracking-tighter leading-tight">
                       {currentExercise.question}
                    </h3>
                 </div>

                 <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                    {currentExercise.options.map((opt) => (
                      <button
                        key={opt}
                        disabled={showResult}
                        onClick={() => checkAnswer(opt)}
                        className={`p-6 rounded-2xl border-4 text-2xl font-black transition-all flex items-center justify-between group transform active:scale-[0.98] ${
                          selectedOption === opt
                            ? isCorrect 
                              ? 'bg-green-500 border-green-600 text-white shadow-xl shadow-green-200'
                              : 'bg-red-500 border-red-600 text-white shadow-xl shadow-red-200'
                            : 'bg-white border-slate-100 hover:border-brand-indigo text-slate-700 shadow-sm'
                        }`}
                      >
                        <span>{opt}</span>
                        {selectedOption === opt && (
                          isCorrect ? <CheckCircle2 className="w-10 h-10" /> : <AlertCircle className="w-10 h-10" />
                        )}
                      </button>
                    ))}
                 </div>
              </div>
            </motion.div>
         </AnimatePresence>
      </div>

      <AnimatePresence>
         {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center font-black italic text-4xl uppercase tracking-widest ${isCorrect ? 'text-green-500 animate-pulse' : 'text-red-500'}`}
            >
              {isCorrect ? 'ՃԻՇՏ Է! ✨' : 'ՍԽԱԼ Է! 🦾'}
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
