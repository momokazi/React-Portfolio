export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  features: string[];
  techStack: string[];
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
