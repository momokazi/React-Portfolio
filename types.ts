
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  features: string[];
  techStack: string[];
  category: 'Mobile' | 'Web' | 'Tool' | 'Other'; // Added category
  color: string;
  logoUrl: string; // URL for the project logo
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  iconStr: string;
  imagePath?: string; // Optional path for actual logo image
  color: string;
  textColor: string;
  category: string;
  level: number;
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
  logo?: string; // URL for company logo
}
