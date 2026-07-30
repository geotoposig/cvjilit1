import React from 'react';
import { Target, Compass } from 'lucide-react';

interface ObjectiveSectionProps {
  objective: string;
}

export const ObjectiveSection: React.FC<ObjectiveSectionProps> = ({ objective }) => {
  return (
    <section id="objective" className="scroll-mt-24">
      <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2 mb-4">
        <Target className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
          Objectif
        </h2>
      </div>
      <div className="bg-teal-50/50 dark:bg-slate-800/60 border-l-4 border-teal-600 p-4 rounded-r-lg text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify shadow-sm">
        <p>{objective}</p>
      </div>
    </section>
  );
};
