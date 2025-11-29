export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database';
}
