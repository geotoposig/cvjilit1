import React from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  searchQuery: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  searchQuery,
}) => {
  return (
    <section id="experience" className="scroll-mt-24 space-y-4">
      <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
        <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
          Expériences Professionnelles
        </h2>
      </div>

      <div className="relative pl-6 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-6">
        {experiences.map((exp) => {
          const isMatched = searchQuery && (
            exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exp.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exp.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-teal-600 border-2 border-white dark:border-slate-900 group-hover:scale-125 transition-transform" />

              <div
                className={`p-4 rounded-xl border transition-all duration-200 ${
                  isMatched
                    ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 shadow-md ring-2 ring-amber-400/50'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-teal-500/40 hover:shadow-sm'
                }`}
              >
                {/* Header: Date & Title */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
                    <Calendar className="w-3 h-3" />
                    {exp.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {exp.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{exp.company}</span>
                </div>

                {/* Bullet details */}
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {exp.bullets.map((bullet, idx) => {
                    // Check if bullet contains strong bold prefix (e.g., Supervision et Management de Terrain :)
                    const hasPrefix = bullet.includes(' : ') || bullet.includes(': ');
                    let boldPart = '';
                    let restPart = bullet;

                    if (hasPrefix) {
                      const splitIdx = bullet.indexOf(':');
                      boldPart = bullet.substring(0, splitIdx + 1);
                      restPart = bullet.substring(splitIdx + 1);
                    }

                    return (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <div>
                          {boldPart ? (
                            <>
                              <strong className="text-slate-800 dark:text-slate-200 font-semibold">
                                {boldPart}
                              </strong>
                              <span>{restPart}</span>
                            </>
                          ) : (
                            <span>{bullet}</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
