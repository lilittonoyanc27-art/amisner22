/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ExerciseView from './ExerciseView';
import TheoryView from './TheoryView';
import { MONTHS_LESSON } from './lessons';
import { Trophy, Gamepad2, UserCircle2, Swords, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { GameMode } from './types';

export default function App() {
  const [screen, setScreen] = useState<GameMode>(GameMode.THEORY);
  const [showMenu, setShowMenu] = useState(true);

  const startCompetition = () => {
    setScreen(GameMode.COMPETE);
    setShowMenu(false);
  };

  const startTheory = () => {
    setScreen(GameMode.THEORY);
    setShowMenu(false);
  };

  return (
    <div className="min-h-screen w-full relative">
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <AnimatePresence mode="wait">
          {showMenu && (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <header className="text-center space-y-4 pt-12">
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                   className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-[40px] shadow-2xl relative border-4 border-white/50"
                 >
                    <Calendar className="w-16 h-16 text-brand-blue" />
                 </motion.div>
                 <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-xl">
                    ԻՍՊԱՆԵՐԵՆԻ <br/> <span className="text-brand-yellow">ԱԿԱԴԵՄԻԱ</span>
                 </h1>
                 <p className="text-white/80 text-2xl font-black uppercase tracking-[0.3em] italic drop-shadow-md">
                    Տարվա Ամիսները
                 </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <button 
                  onClick={startTheory}
                  className="lesson-card p-10 flex flex-col items-center gap-6 group hover:scale-[1.05] active:scale-95 transition-all text-center"
                >
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <BookOpen className="w-10 h-10 text-brand-blue" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-800 uppercase leading-none mb-2">ՏԵՍՈՒԹՅՈՒՆ</h2>
                    <p className="text-slate-400 font-bold">Սովորիր ամիսները</p>
                  </div>
                </button>

                <button 
                  onClick={startCompetition}
                  className="lesson-card p-10 flex flex-col items-center gap-6 group hover:scale-[1.05] active:scale-95 transition-all text-center"
                >
                  <div className="w-20 h-20 bg-brand-indigo/10 rounded-3xl flex items-center justify-center group-hover:-rotate-6 transition-transform">
                    <Gamepad2 className="w-10 h-10 text-brand-indigo" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-800 uppercase leading-none mb-2">ԽԱՂ</h2>
                    <p className="text-slate-400 font-bold">Ստուգիր գիտելիքներդ</p>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {!showMenu && screen === GameMode.THEORY && (
            <motion.div key="theory" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <TheoryView onStart={() => setScreen(GameMode.COMPETE)} />
              <button 
                onClick={() => setShowMenu(true)}
                className="mt-8 text-white font-black uppercase text-xs tracking-widest hover:text-brand-yellow transition-colors block mx-auto py-4 drop-shadow-md"
              >
                ← ՀԵՏ ԴԵՊԻ ԳԼԽԱՎՈՐ
              </button>
            </motion.div>
          )}

          {!showMenu && screen === GameMode.COMPETE && (
            <motion.div key="compete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
              <ExerciseView 
                lesson={MONTHS_LESSON} 
                onBack={() => setShowMenu(true)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="py-12 text-center opacity-60">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-2 text-white">
            <Gamepad2 className="w-4 h-4" /> &copy; 2024 LEARNING LAB • SPANISH EDITION
         </p>
      </footer>
    </div>
  );
}
