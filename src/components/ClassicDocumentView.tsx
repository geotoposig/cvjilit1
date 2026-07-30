import React from 'react';
import { CVData } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  CreditCard, 
  Award, 
  Globe, 
  Sparkles, 
  Heart, 
  Target, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface ClassicDocumentViewProps {
  data: CVData;
}

export const ClassicDocumentView: React.FC<ClassicDocumentViewProps> = ({ data }) => {
  const { 
    personalInfo, 
    coreSkills, 
    languages, 
    softSkills, 
    interests, 
    objective, 
    techSkills, 
    experiences, 
    education, 
    workshops, 
    webSigProjects 
  } = data;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 max-w-[1400px] mx-auto shadow-2xl rounded-2xl overflow-hidden my-6 border border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* A3 Header Banner */}
      <div className="bg-slate-900 text-white p-6 md:p-8 border-b-4 border-teal-500">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-teal-400 overflow-hidden shrink-0 shadow-lg bg-slate-800">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-teal-600/30 text-teal-300 text-xs font-bold uppercase tracking-widest mb-2 border border-teal-500/30">
                Format Document A3
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-white">
                {personalInfo.name}
              </h1>
              <p className="text-sm md:text-base text-teal-300 font-semibold mt-1">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Contact Bar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200 bg-slate-800/80 p-4 rounded-xl border border-slate-700 max-w-lg w-full">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{personalInfo.phones.join(' / ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="break-all">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{personalInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={personalInfo.linkedin.url} target="_blank" rel="noreferrer" className="text-teal-300 hover:underline flex items-center gap-1 font-semibold">
                {personalInfo.linkedin.label} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <CreditCard className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Permis de conduire : {personalInfo.license}</span>
            </div>
          </div>

        </div>

        {/* Quick Attributes Row (Core Skills, Soft Skills, Languages, Interests) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800">
          
          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 mb-2">
              <Award className="w-3.5 h-3.5" /> Compétences Clés
            </h3>
            <div className="flex flex-wrap gap-1">
              {coreSkills.map((sk, i) => (
                <span key={i} className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700">
                  {sk}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 mb-2">
              <Globe className="w-3.5 h-3.5" /> Langues
            </h3>
            <div className="space-y-1 text-[11px]">
              {languages.map((l, i) => (
                <div key={i} className="flex justify-between items-center text-slate-200">
                  <span>{l.name}</span>
                  <span className="text-teal-300 font-bold bg-slate-800 px-1.5 py-0.5 rounded">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Soft Skills
            </h3>
            <ul className="text-[11px] text-slate-200 space-y-0.5">
              {softSkills.map((ss, i) => (
                <li key={i}>• {ss}</li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 mb-2">
              <Heart className="w-3.5 h-3.5" /> Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-1 text-[10px] text-slate-300 capitalize">
              {interests.map((it, i) => (
                <span key={i} className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {it}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Main A3 3-Column Content Body */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white dark:bg-slate-900">
        
        {/* Column 1: Objectif & Compétences et Connaissances Informatiques */}
        <div className="space-y-6">
          <section>
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2 mb-3">
              <Target className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Objectif
              </h2>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify bg-teal-50/50 dark:bg-slate-800/50 p-3.5 rounded-lg border-l-4 border-teal-600">
              {objective}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2 mb-3">
              <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Compétences et Connaissances Informatiques
              </h2>
            </div>
            <div className="space-y-3">
              {techSkills.map((sec, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                    {sec.numberTitle}
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pl-1">
                    {sec.bullets.map((b, bi) => {
                      const split = b.split(/:(.+)/);
                      return (
                        <li key={bi} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                          <div>
                            {split.length > 1 ? (
                              <>
                                <strong className="text-slate-800 dark:text-slate-200 font-semibold">{split[0]}:</strong>
                                <span>{split[1]}</span>
                              </>
                            ) : (
                              <span>{b}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Column 2: Expériences Professionnelles */}
        <div className="space-y-6">
          <section>
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2 mb-4">
              <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Expériences Professionnelles
              </h2>
            </div>

            <div className="space-y-4 border-l-2 border-teal-500/30 pl-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-600 border-2 border-white dark:border-slate-900" />
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 mb-1">
                    {exp.date}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">{exp.title}</h3>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{exp.company}</div>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-teal-500 font-bold shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Column 3: Web-SIG Projects, Formation Académique, Ateliers */}
        <div className="space-y-6">
          
          {/* Plateformes Web-SIG */}
          <section>
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2 mb-4">
              <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Plateformes Web-SIG & Réalisations Digitales
              </h2>
            </div>
            <div className="space-y-3">
              {webSigProjects.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl border border-teal-500/30 bg-teal-50/30 dark:bg-slate-800/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-600 text-white uppercase">{p.tag}</span>
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-xs text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-semibold">
                      {p.accessLabel} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5">{p.title}</h3>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Formation Académique */}
          <section>
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2 mb-4">
              <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Formation Académique
              </h2>
            </div>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-teal-600/50 pl-3">
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400">{edu.date}</span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">{edu.title}</h3>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-1">{edu.institution}</div>
                  {edu.bullets && (
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
                      {edu.bullets.map((b, bi) => (
                        <li key={bi}>• {b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Ateliers et Formations */}
          <section>
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2 mb-4">
              <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Ateliers et Formations
              </h2>
            </div>
            <div className="space-y-3">
              {workshops.map((ws) => (
                <div key={ws.id} className="border-l-2 border-teal-600/50 pl-3">
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400">{ws.date}</span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">{ws.title}</h3>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{ws.institution}</div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 mt-1 space-y-0.5">
                    {ws.bullets.map((b, bi) => (
                      <li key={bi}>• {b}</li>
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
