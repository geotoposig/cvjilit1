import React from 'react';
import { EducationItem } from '../types';
import { GraduationCap, Calendar, Landmark, CheckCircle } from 'lucide-react';

interface EducationSectionProps {
  education: EducationItem[];
  searchQuery: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  searchQuery,
}) => {
  return (
    <section id="education" className="scroll-mt-24 space-y-4">
      <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
        <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
          Formation Académique
        </h2>
      </div>

      <div className="space-y-4">
        {education.map((edu) => {
          const isMatched = searchQuery && (
            edu.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            edu.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
            edu.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (edu.bullets && edu.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())))
          );

          return (
            <div
              key={edu.id}
              className={`p-4 rounded-xl border transition-all duration-200 ${
                isMatched
                  ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 shadow-md ring-2 ring-amber-400/50'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-teal-500/40'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
                  <Calendar className="w-3 h-3" />
                  {edu.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {edu.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5 mb-2">
                <Landmark className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{edu.institution}</span>
              </div>

              {edu.bullets && edu.bullets.length > 0 && (
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {edu.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
