import React from 'react';
import { WorkshopItem } from '../types';
import { BookOpen, Calendar, MapPin, Award } from 'lucide-react';

interface WorkshopsSectionProps {
  workshops: WorkshopItem[];
  searchQuery: string;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  workshops,
  searchQuery,
}) => {
  return (
    <section id="workshops" className="scroll-mt-24 space-y-4">
      <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
        <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
          Ateliers et Formations
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workshops.map((ws) => {
          const isMatched = searchQuery && (
            ws.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ws.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ws.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ws.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          return (
            <div
              key={ws.id}
              className={`p-4 rounded-xl border transition-all duration-200 ${
                isMatched
                  ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 shadow-md ring-2 ring-amber-400/50'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-teal-500/40'
              }`}
            >
              <div className="mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
                  <Calendar className="w-3 h-3" />
                  {ws.date}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {ws.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-2">
                <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{ws.institution}</span>
              </div>

              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {ws.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
