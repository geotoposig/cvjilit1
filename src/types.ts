export interface PersonalInfo {
  name: string;
  title: string;
  photoUrl: string;
  phones: string[];
  email: string;
  address: string;
  linkedin: {
    label: string;
    url: string;
  };
  license: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface TechSkillSection {
  numberTitle: string;
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  date: string;
  title: string;
  company: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  date: string;
  title: string;
  institution: string;
  bullets?: string[];
}

export interface WorkshopItem {
  id: string;
  date: string;
  title: string;
  institution: string;
  bullets: string[];
}

export interface WebSigProject {
  id: string;
  tag: string;
  title: string;
  accessLabel: string;
  url: string;
  bullets: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  coreSkills: string[];
  languages: LanguageItem[];
  softSkills: string[];
  interests: string[];
  objective: string;
  techSkills: TechSkillSection[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  workshops: WorkshopItem[];
  webSigProjects: WebSigProject[];
}
