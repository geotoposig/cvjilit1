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
  CheckCircle2,
  Printer
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4 my-6">
      {/* Print Control Bar */}
      <div className="no-print max-w-[1250px] mx-auto flex items-center justify-between bg-slate-800 text-slate-200 px-6 py-3 rounded-xl border border-slate-700 shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
            Affiche A3 Professionnelle (Prête à imprimer / Exporter en PDF)
          </span>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-bold transition shadow-md active:scale-95"
        >
          <Printer className="w-4 h-4" />
          Imprimer / Télécharger en PDF (A3)
        </button>
      </div>

      {/* Main A3 Document Wrapper with Sidebar */}
      <div 
        id="a3-cv-document" 
        className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 max-w-[1250px] mx-auto shadow-2xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-12 min-h-[1400px]"
      >
        
        {/* LEFT SIDEBAR (4 Columns out of 12) */}
        <aside className="md:col-span-4 bg-slate-900 text-slate-100 p-6 md:p-8 flex flex-col justify-between border-r border-slate-800 space-y-8">
          
          {/* Header Profile Info */}
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full border-4 border-teal-400 p-1 bg-slate-800 shadow-xl overflow-hidden mb-4 relative group">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h1 className="text-xl md:text-2xl font-black text-white tracking-wide uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-xs md:text-sm text-teal-400 font-semibold mt-1.5 leading-snug">
                {personalInfo.title}
              </p>
              <div className="mt-3 px-3 py-1 rounded-full bg-teal-950/80 text-teal-300 text-[10px] font-bold border border-teal-500/40 uppercase tracking-widest">
                Curriculum Vitae - Format A3
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 pb-1 border-b border-teal-500/20">
                Coordonnées & Contact
              </h3>
              
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Phone className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <span className="font-medium">{personalInfo.phones.join(' / ')}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Mail className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <span className="break-all font-medium">{personalInfo.email}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <span>{personalInfo.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Linkedin className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <a href={personalInfo.linkedin.url} target="_blank" rel="noreferrer" className="text-teal-300 hover:underline flex items-center gap-1 font-semibold">
                    {personalInfo.linkedin.label} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <CreditCard className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <span>Permis : <strong className="text-white">{personalInfo.license}</strong></span>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 pb-1 border-b border-teal-500/20">
                <Award className="w-3.5 h-3.5" />
                Compétences Clés
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {coreSkills.map((sk, i) => (
                  <span key={i} className="text-[11px] bg-slate-800 text-teal-200 px-2.5 py-1 rounded-md border border-slate-700 font-medium">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 pb-1 border-b border-teal-500/20">
                <Globe className="w-3.5 h-3.5" />
                Langues
              </h3>
              <div className="space-y-2">
                {languages.map((l, i) => (
                  <div key={i} className="flex justify-between items-center text-xs text-slate-200 bg-slate-800/60 p-2 rounded-md border border-slate-700/50">
                    <span className="font-semibold">{l.name}</span>
                    <span className="text-teal-300 font-bold bg-slate-900 px-2 py-0.5 rounded text-[10px] border border-teal-500/30">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 pb-1 border-b border-teal-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Qualités & Soft Skills
              </h3>
              <ul className="text-xs text-slate-300 space-y-1.5 pl-1">
                {softSkills.map((ss, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>{ss}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compétences et Connaissances Informatiques */}
            {techSkills && techSkills.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 pb-1 border-b border-teal-500/20">
                  <Cpu className="w-3.5 h-3.5" />
                  Compétences et Connaissances Informatiques
                </h3>
                <div className="space-y-2.5 text-xs text-slate-300">
                  {techSkills.map((sec, idx) => (
                    <div key={idx} className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                      <strong className="text-teal-300 text-[11px] block font-semibold mb-1">
                        {sec.numberTitle}
                      </strong>
                      <ul className="space-y-1 text-[11px] text-slate-300 pl-1">
                        {sec.bullets.map((b, bIdx) => {
                          const split = b.split(/:(.+)/);
                          return (
                            <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
                              <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                              <div>
                                {split.length > 1 ? (
                                  <>
                                    <strong className="text-slate-200 font-medium">{split[0]}:</strong>
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
              </div>
            )}

            {/* Interests */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 pb-1 border-b border-teal-500/20">
                <Heart className="w-3.5 h-3.5" />
                Centres d'intérêt
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-300 capitalize">
                {interests.map((it, i) => (
                  <span key={i} className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 text-[11px]">
                    {it}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center pt-6 border-t border-slate-800 text-[10px] text-slate-500">
            Document format A3 • Portfolio & CV Officiel
          </div>

        </aside>

        {/* RIGHT MAIN CONTENT AREA (8 Columns out of 12) */}
        <main className="md:col-span-8 p-6 md:p-10 space-y-8 bg-white dark:bg-slate-900">
          
          {/* Objectif Section */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
              <Target className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Objectif Professionnel
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify bg-teal-50/50 dark:bg-slate-800/40 p-4 rounded-xl border-l-4 border-teal-600 shadow-sm">
              {objective}
            </p>
          </section>

          {/* Expériences Professionnelles */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
              <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Expériences Professionnelles
              </h2>
            </div>

            <div className="space-y-5 border-l-2 border-teal-600/30 pl-4 md:pl-6 ml-2">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute -left-[23px] md:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-teal-600 border-2 border-white dark:border-slate-900 group-hover:scale-125 transition-transform" />
                  
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-800">
                      {exp.date}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{exp.company}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {exp.title}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-teal-500 font-bold shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Plateformes Web-SIG & Réalisations Digitales */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
              <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                Plateformes Web-SIG & Réalisations Digitales
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {webSigProjects.map((p) => (
                <div key={p.id} className="p-4 rounded-xl border border-teal-500/30 bg-teal-50/20 dark:bg-slate-800/40 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-600 text-white uppercase tracking-wider">
                      {p.tag}
                    </span>
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-xs text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-bold">
                      {p.accessLabel} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {p.title}
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-1.5 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Two Columns: Formation Académique & Ateliers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Formation Académique */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
                <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Formation Académique
                </h2>
              </div>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-4 border-teal-600">
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 block mb-0.5">{edu.date}</span>
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
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-teal-600 pb-2">
                <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Ateliers et Formations
                </h2>
              </div>
              <div className="space-y-3">
                {workshops.map((ws) => (
                  <div key={ws.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-4 border-teal-600">
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 block mb-0.5">{ws.date}</span>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">{ws.title}</h3>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-1">{ws.institution}</div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
                      {ws.bullets.map((b, bi) => (
                        <li key={bi}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </main>

      </div>
    </div>
  );
};
