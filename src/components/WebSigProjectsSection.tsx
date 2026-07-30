import React from 'react';
import { WebSigProject } from '../types';
import { Globe, ExternalLink, CheckCircle2 } from 'lucide-react';

interface WebSigProjectsSectionProps {
  webSigProjects: WebSigProject[];
  searchQuery: string;
}

export const WebSigProjectsSection: React.FC<WebSigProjectsSectionProps> = ({
  webSigProjects,
  searchQuery,
}) => {
  return (
    <section id="web-sig" className="scroll-mt-24 space-y-4">
      <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
        <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
          Plateformes Web-SIG & Réalisations Digitales
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {webSigProjects.map((proj) => {
          const isMatched = searchQuery && (
            proj.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
            proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            proj.accessLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
            proj.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          return (
            <div
              key={proj.id}
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all duration-200 ${
                isMatched
                  ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 shadow-md ring-2 ring-amber-400/50'
                  : 'border-teal-500/20 dark:border-teal-500/30 bg-gradient-to-br from-white to-teal-50/30 dark:from-slate-800/80 dark:to-teal-950/20 hover:border-teal-500/60 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-teal-600 text-white shadow-xs">
                    {proj.tag}
                  </span>
                  
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/60 hover:bg-teal-200 dark:hover:bg-teal-800 rounded-lg transition-colors border border-teal-300/50 dark:border-teal-700/50"
                  >
                    <span>{proj.accessLabel}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {proj.title}
                </h3>

                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {proj.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium text-teal-700 dark:text-teal-400 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  Application Web-SIG Live
                </span>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
                >
                  Visiter la plateforme →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
