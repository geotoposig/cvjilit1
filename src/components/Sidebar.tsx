import React from 'react';
import { PersonalInfo, LanguageItem, TechSkillSection, WebSigProject } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  CreditCard, 
  CheckCircle2, 
  Globe, 
  Heart, 
  Award,
  Sparkles,
  ExternalLink,
  Cpu
} from 'lucide-react';

interface SidebarProps {
  personalInfo: PersonalInfo;
  coreSkills: string[];
  languages: LanguageItem[];
  softSkills: string[];
  interests: string[];
  techSkills?: TechSkillSection[];
  webSigProjects?: WebSigProject[];
  onCopyText: (text: string, label: string) => void;
}

const WhatsappIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.886-9.886 9.886m0-18.169c-5.748 0-10.424 4.676-10.426 10.426-.001 1.838.48 3.633 1.392 5.213l-1.48 5.405 5.53-1.45a10.377 10.377 0 005.006 1.309h.004c5.747 0 10.424-4.676 10.426-10.427a10.354 10.354 0 00-3.056-7.371A10.357 10.357 0 0012.051 3.615z"/>
  </svg>
);

export const Sidebar: React.FC<SidebarProps> = ({
  personalInfo,
  coreSkills,
  languages,
  softSkills,
  interests,
  techSkills,
  webSigProjects,
  onCopyText,
}) => {
  return (
    <aside className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-6 md:p-8 flex flex-col gap-8 rounded-t-xl md:rounded-l-xl md:rounded-tr-none border-r border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Profile Header & Photo */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative group">
          <div className="w-36 h-36 rounded-full border-4 border-teal-600 dark:border-teal-500 overflow-hidden shadow-md bg-white dark:bg-slate-800 flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback avatar if image fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <span className="absolute bottom-1 right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900" title="Disponible pour projets" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
            {personalInfo.name}
          </h1>
          <p className="text-xs text-teal-700 dark:text-teal-300 font-semibold mt-1 leading-relaxed max-w-xs mx-auto">
            {personalInfo.title}
          </p>
        </div>
      </div>

      <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />

      {/* Contact Information */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Mail className="w-3.5 h-3.5" />
          Coordonnées
        </h3>

        <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
          {/* Phones */}
          <li className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <div className="flex flex-col space-y-1.5">
              {personalInfo.phones.map((phone, idx) => {
                const isWhatsapp = phone.includes("668 09 02 85") || phone.includes("668090285");
                return (
                  <div key={idx} className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => onCopyText(phone, `Téléphone ${phone}`)}
                      className="text-left hover:text-teal-700 dark:hover:text-teal-300 transition-colors flex items-center gap-1 font-medium"
                    >
                      <span>{phone}</span>
                    </button>
                    {isWhatsapp && (
                      <a
                        href="https://wa.me/212668090285"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-950/90 hover:bg-emerald-200 dark:hover:bg-emerald-900 rounded-md border border-emerald-300 dark:border-emerald-700/60 shadow-xs transition-transform hover:scale-105"
                        title="Ouvrir WhatsApp direct (+212 668 09 02 85)"
                      >
                        <WhatsappIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </li>

          {/* Email */}
          <li className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <button
              onClick={() => onCopyText(personalInfo.email, 'Email')}
              className="text-left hover:text-teal-700 dark:hover:text-teal-300 transition-colors break-all font-medium"
            >
              {personalInfo.email}
            </button>
          </li>

          {/* Address */}
          <li className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">{personalInfo.address}</span>
          </li>

          {/* LinkedIn */}
          <li className="flex items-start gap-2.5">
            <Linkedin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <a
              href={personalInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 dark:text-teal-300 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>{personalInfo.linkedin.label}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </li>

          {/* License */}
          <li className="flex items-center gap-2.5 font-medium">
            <CreditCard className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <span>{personalInfo.license}</span>
          </li>
        </ul>
      </div>

      {/* Compétences Clés */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Award className="w-3.5 h-3.5" />
          Compétences Clés
        </h3>
        <ul className="space-y-1.5 text-xs">
          {coreSkills.map((skill, index) => (
            <li
              key={index}
              className="bg-white dark:bg-slate-800/80 hover:bg-teal-50 dark:hover:bg-slate-800 border-l-2 border-teal-600 dark:border-teal-400 px-2.5 py-1.5 rounded-r text-slate-800 dark:text-slate-200 border-t border-b border-r border-slate-200/80 dark:border-transparent shadow-sm transition-colors font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Langues */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" />
          Langues
        </h3>
        <div className="space-y-1.5 text-xs">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white dark:bg-slate-800/50 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-700/50 shadow-sm"
            >
              <span className="text-slate-800 dark:text-slate-300 font-semibold">{lang.name}</span>
              <span className="text-teal-800 dark:text-teal-300 font-bold text-[11px] bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 px-2 py-0.5 rounded">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Soft Skills
        </h3>
        <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
          {softSkills.map((soft, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>{soft}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Compétences et Connaissances Informatiques */}
      {techSkills && techSkills.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            Compétences et Connaissances Informatiques
          </h3>
          <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            {techSkills.map((sec, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-sm">
                <strong className="text-teal-700 dark:text-teal-300 text-[11px] block font-bold mb-1">
                  {sec.numberTitle}
                </strong>
                <ul className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300 pl-1">
                  {sec.bullets.map((b, bIdx) => {
                    const split = b.split(/:(.+)/);
                    return (
                      <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-1.5" />
                        <div>
                          {split.length > 1 ? (
                            <>
                              <strong className="text-slate-900 dark:text-slate-200 font-semibold">{split[0]}:</strong>
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

      {/* Centres d'intérêt */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Heart className="w-3.5 h-3.5" />
          Centres d'intérêt
        </h3>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {interests.map((interest, idx) => (
            <span
              key={idx}
              className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm transition-colors capitalize text-[11px] font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

    </aside>
  );
};
