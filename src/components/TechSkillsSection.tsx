import React from 'react';
import { TechSkillSection } from '../types';
import { Cpu, Layers, Radio, Globe2, Building2, BarChart3, Palette } from 'lucide-react';

interface TechSkillsSectionProps {
  techSkills: TechSkillSection[];
  searchQuery: string;
}

export const TechSkillsSection: React.FC<TechSkillsSectionProps> = ({
  techSkills,
  searchQuery,
}) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 1: return <Radio className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 2: return <Globe2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 3: return <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 4: return <BarChart3 className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 5: return <Palette className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      default: return <Cpu className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="tech-skills" className="scroll-mt-24 space-y-4">
      <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
        <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
          Compétences et Connaissances Informatiques
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techSkills.map((sec, idx) => {
          const matches = searchQuery && (
            sec.numberTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sec.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all duration-200 ${
                matches
                  ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 shadow-md ring-2 ring-amber-400/50'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-teal-500/50'
              }`}
            >
              <div className="flex items-start gap-2.5 mb-2.5">
                <div className="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/50 shrink-0 mt-0.5">
                  {getIcon(idx)}
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 leading-snug">
                  {sec.numberTitle}
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pl-2">
                {sec.bullets.map((bullet, bIdx) => {
                  // Format bold prefix if string contains colon or bold format
                  const parts = bullet.split(/:(.+)/);
                  return (
                    <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      <div>
                        {parts.length > 1 ? (
                          <>
                            <strong className="text-slate-800 dark:text-slate-200 font-semibold">
                              {parts[0]}:
                            </strong>
                            <span>{parts[1]}</span>
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
          );
        })}
      </div>
    </section>
  );
};
