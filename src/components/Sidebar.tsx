import React from 'react';
import { PersonalInfo, LanguageItem, TechSkillSection } from '../types';
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
  onCopyText: (text: string, label: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  personalInfo,
  coreSkills,
  languages,
  softSkills,
  interests,
  techSkills,
  onCopyText,
}) => {
  return (
    <aside className="bg-slate-900 text-slate-100 p-6 md:p-8 flex flex-col gap-8 rounded-t-xl md:rounded-l-xl md:rounded-tr-none shadow-inner transition-colors duration-200">
      
      {/* Profile Header & Photo */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative group">
          <div className="w-36 h-36 rounded-full border-4 border-teal-500 overflow-hidden shadow-xl bg-slate-800 flex items-center justify-center transition-transform group-hover:scale-105">
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
          <span className="absolute bottom-1 right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-slate-900" title="Disponible pour projets" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            {personalInfo.name}
          </h1>
          <p className="text-xs text-teal-300 font-medium mt-1 leading-relaxed max-w-xs mx-auto">
            {personalInfo.title}
          </p>
        </div>
      </div>

      <div className="h-px bg-slate-800 w-full" />

      {/* Contact Information */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Mail className="w-3.5 h-3.5" />
          Coordonnées
        </h3>

        <ul className="space-y-2.5 text-xs text-slate-300">
          {/* Phones */}
          <li className="flex items-start gap-2.5 group">
            <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              {personalInfo.phones.map((phone, idx) => (
                <button
                  key={idx}
                  onClick={() => onCopyText(phone, `Téléphone ${phone}`)}
                  className="text-left hover:text-teal-300 transition-colors flex items-center gap-1 group-hover:underline"
                >
                  <span>{phone}</span>
                </button>
              ))}
            </div>
          </li>

          {/* Email */}
          <li className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <button
              onClick={() => onCopyText(personalInfo.email, 'Email')}
              className="text-left hover:text-teal-300 transition-colors break-all"
            >
              {personalInfo.email}
            </button>
          </li>

          {/* Address */}
          <li className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{personalInfo.address}</span>
          </li>

          {/* LinkedIn */}
          <li className="flex items-start gap-2.5">
            <Linkedin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <a
              href={personalInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:underline flex items-center gap-1 font-medium"
            >
              <span>{personalInfo.linkedin.label}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </li>

          {/* License */}
          <li className="flex items-center gap-2.5">
            <CreditCard className="w-4 h-4 text-teal-400 shrink-0" />
            <span>{personalInfo.license}</span>
          </li>
        </ul>
      </div>

      {/* Compétences Clés */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Award className="w-3.5 h-3.5" />
          Compétences Clés
        </h3>
        <ul className="space-y-1.5 text-xs">
          {coreSkills.map((skill, index) => (
            <li
              key={index}
              className="bg-slate-800/80 hover:bg-slate-800 border-l-2 border-teal-400 px-2.5 py-1.5 rounded-r text-slate-200 transition-colors"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Langues */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" />
          Langues
        </h3>
        <div className="space-y-1.5 text-xs">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-slate-800/50 px-2.5 py-1.5 rounded border border-slate-700/50"
            >
              <span className="text-slate-300 font-medium">{lang.name}</span>
              <span className="text-teal-300 font-bold text-[11px] bg-teal-950/80 px-2 py-0.5 rounded">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Soft Skills
        </h3>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {softSkills.map((soft, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{soft}</span>
            </li>
          ))}
        </ul>
      </div>

     

      {/* Centres d'intérêt */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-teal-500/30 pb-1.5 flex items-center gap-2">
          <Heart className="w-3.5 h-3.5" />
          Centres d'intérêt
        </h3>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {interests.map((interest, idx) => (
            <span
              key={idx}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700 transition-colors capitalize text-[11px]"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

    </aside>
  );
};
