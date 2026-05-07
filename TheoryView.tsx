/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Info, CheckCircle, MapPin } from 'lucide-react';

interface TheoryViewProps {
  onStart: () => void;
}

export default function TheoryView({ onStart }: TheoryViewProps) {
  const months = [
    { es: 'enero', hy: 'Հունվար' },
    { es: 'febrero', hy: 'Փետրվար' },
    { es: 'marzo', hy: 'Մարտ' },
    { es: 'abril', hy: 'Ապրիլ' },
    { es: 'mayo', hy: 'Մայիս' },
    { es: 'junio', hy: 'Հունիս' },
    { es: 'julio', hy: 'Հուլիս' },
    { es: 'agosto', hy: 'Օգոստոս' },
    { es: 'septiembre', hy: 'Սեպտեմբեր' },
    { es: 'octubre', hy: 'Հոկտեմբեր' },
    { es: 'noviembre', hy: 'Նոյեմբեր' },
    { es: 'diciembre', hy: 'Դեկտեմբեր' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lesson-card p-10 md:p-14"
      >
        <header className="text-center space-y-4 mb-12">
          <div className="w-20 h-20 bg-brand-indigo/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Info className="w-10 h-10 text-brand-indigo" />
          </div>
          <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tight">
            Տարվա Ամիսները
          </h2>
          <p className="text-slate-400 text-xl font-medium italic">
            Los meses del año
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {months.map((m, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center group hover:bg-brand-indigo/5 transition-colors">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{m.hy}</span>
              <span className="text-2xl font-black text-slate-800 group-hover:text-brand-indigo transition-colors">
                {m.es}
              </span>
            </div>
          ))}
        </section>

        <div className="pt-16 text-center">
          <button 
            onClick={onStart}
            className="btn-primary w-full md:w-auto px-16 py-6 text-2xl flex items-center justify-center gap-4 group"
          >
            ՍԿՍԵԼ ԽԱՂԸ <Play className="w-8 h-8 fill-current group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
