/** Flat palette tokens from tailwind.config.js. Cards and badges key off these. */
export type Tone = 'flame' | 'acid' | 'sky' | 'grape' | 'rose' | 'mint';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  features: string[];
  techStack: string[];
  category: 'Mobile' | 'Web' | 'Tool';
  tone: Tone;
  /** URL for the project logo. */
  logoUrl: string;
  /** Year or range the work happened in. */
  year: string;
  githubUrl?: string;
  demoUrl?: string;
  /** Button text for demoUrl — "Demo" is wrong for a package listing. */
  demoLabel?: string;
  /** Real screenshot, once one exists. Cards fall back to a type-led block. */
  imageUrl?: string;
}

export interface Skill {
  name: string;
  iconStr: string;
  /** Devicon/logo URL. */
  imagePath?: string;
  tone: Tone;
  category: string;
  /** What this is actually used for here — replaces a meaningless percentage. */
  note: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  description: string;
  /** Concrete outcomes for this role. Rendered as a list under the summary. */
  highlights?: string[];
  /** URL for company logo. */
  logo?: string;
}

export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface CommunityRole {
  role: string;
  organisation: string;
  period: string;
  description: string;
}
