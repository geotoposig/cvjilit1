import React from 'react';
import { CVData } from '../types';
import { ExternalLink } from 'lucide-react';

interface ClassicDocumentViewProps {
  data: CVData;
}

export const ClassicDocumentView: React.FC<ClassicDocumentViewProps> = ({ data }) => {
  const { personalInfo, coreSkills, languages, softSkills, interests, objective, techSkills, experiences, education, workshops, webSigProjects } = data;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden my-6 border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
        
        {/* Left Sidebar */}
        <div className="bg-slate-900 text-slate-100 p-8 flex flex-col gap-6">
          
          <div className="text-center">
            <div className="w-36 h-36 mx-auto rounded-full border-4 border-teal-500 overflow-hidden mb-4 bg-slate-800">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold tracking-wide text-white">{personalInfo.name}</h1>
            <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed">{personalInfo.title}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold text-teal-400 border-b border-teal-500/40 pb-1 mb-3 tracking-wider">
              Coordonnées
            </h3>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>📞 {personalInfo.phones.join(' / ')}</li>
              <li className="break-all">✉️ {personalInfo.email}</li>
              <li>📍 {personalInfo.address}</li>
              <li>
                🔗 <a href={personalInfo.linkedin.url} target="_blank" rel="noreferrer" className="text-teal-300 hover:underline">{personalInfo.linkedin.label}</a>
              </li>
              <li>🚗 {personalInfo.license}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold text-teal-400 border-b border-teal-500/40 pb-1 mb-3 tracking-wider">
              Compétences Clés
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {coreSkills.map((sk, i) => (
                <li key={i} className="bg-slate-800 px-2 py-1 rounded border-l-2 border-teal-400">
                  {sk}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold text-teal-400 border-b border-teal-500/40 pb-1 mb-3 tracking-wider">
              Langues
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {languages.map((l, i) => (
                <li key={i} className="flex justify-between bg-slate-800/60 px-2 py-1 rounded">
                  <span>{l.name}</span>
                  <strong className="text-teal-300">{l.level}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold text-teal-400 border-b border-teal-500/40 pb-1 mb-3 tracking-wider">
              Soft Skills
            </h3>
            <ul className="space-y-1 text-xs text-slate-200">
              {softSkills.map((ss, i) => (
                <li key={i}>• {ss}</li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-xs uppercase font-bold text-teal-400 border-b border-teal-500/40 pb-1 mb-3 tracking-wider">
              Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
              {interests.map((it, i) => (
                <span key={i} className="bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                  {it}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Content */}
        <div className="p-8 space-y-8 bg-white dark:bg-slate-900">
          
          {/* Objectif */}
          <section>
            <h2 className="text-base font-bold uppercase text-slate-900 dark:text-white border-b-2 border-teal-600 pb-1 mb-3">
              Objectif
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              {objective}
            </p>
          </section>

          

          {/* Expériences */}
          <section>
            <h2 className="text-base font-bold uppercase text-slate-900 dark:text-white border-b-2 border-teal-600 pb-1 mb-4">
              Expériences Professionnelles
            </h2>
            <div className="space-y-4 border-l-2 border-slate-200 dark:border-slate-800 pl-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-600 border-2 border-white dark:border-slate-900" />
                  <div className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase">
                    {exp.date}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{exp.title}</h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">{exp.company}</div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Formation */}
          <section>
            <h2 className="text-base font-bold uppercase text-slate-900 dark:text-white border-b-2 border-teal-600 pb-1 mb-4">
              Formation Académique
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-teal-600/50 pl-3">
                  <div className="text-[11px] font-bold text-teal-600 dark:text-teal-400">{edu.date}</div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">{edu.title}</h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">{edu.institution}</div>
                  {edu.bullets && (
                    <ul className="list-disc pl-4 text-xs text-slate-600 dark:text-slate-300">
                      {edu.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Ateliers */}
          <section>
            <h2 className="text-base font-bold uppercase text-slate-900 dark:text-white border-b-2 border-teal-600 pb-1 mb-4">
              Ateliers et Formations
            </h2>
            <div className="space-y-3">
              {workshops.map((ws) => (
                <div key={ws.id} className="border-l-2 border-teal-600/50 pl-3">
                  <div className="text-[11px] font-bold text-teal-600 dark:text-teal-400">{ws.date}</div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">{ws.title}</h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{ws.institution}</div>
                  <ul className="list-disc pl-4 text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {ws.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Web SIG */}
          <section>
            <h2 className="text-base font-bold uppercase text-slate-900 dark:text-white border-b-2 border-teal-600 pb-1 mb-4">
              Plateformes Web-SIG & Réalisations Digitales
            </h2>
            <div className="space-y-4">
              {webSigProjects.map((p) => (
                <div key={p.id} className="p-3 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-xs font-bold text-teal-700 dark:text-teal-400">{p.tag} - {p.title}</strong>
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-xs text-teal-600 hover:underline flex items-center gap-1">
                      {p.accessLabel} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    {p.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
