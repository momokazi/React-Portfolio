import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Husnain Momin",
  tagline: "Full-Stack Mobile Developer",
  email: "mominfaraz444@gmail.com",
  github: "https://github.com/momokazi",
  linkedin: "https://linkedin.com/in/muhammad-husnain-momin-114503389",
  bio: "Passionate developer specializing in Flutter, Node.js, and cloud technologies. I build high-performance mobile applications and scalable backends. Currently exploring the intersection of AI integration and fluid UI interactions.",
  location: "Pakistan",
  // Using your GitHub avatar as the primary profile image
  avatar: "https://avatars.githubusercontent.com/u/108333333?v=4" 
};

export const SKILLS: Skill[] = [
  // Frontend
  { 
    name: "Flutter", 
    iconStr: "Smartphone", 
    imagePath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", 
    color: "#FEC0B3", 
    textColor: "#9C4221", 
    category: "Mobile & Frontend", 
    level: 98 
  },
  { 
    name: "Dart", 
    iconStr: "Code", 
    imagePath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", 
    color: "#FFD5E9", 
    textColor: "#991B1B", 
    category: "Mobile & Frontend", 
    level: 95 
  },
  
  // Backend
  { 
    name: "Node.js", 
    iconStr: "Server", 
    imagePath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
    color: "#D6BDE4", 
    textColor: "#5B21B6", 
    category: "Backend & Cloud", 
    level: 85 
  },
  { 
    name: "Firebase", 
    iconStr: "Flame", 
    imagePath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
    color: "#FFCA28", 
    textColor: "#E65100", 
    category: "Backend & Cloud", 
    level: 90 
  },
  { 
    name: "MongoDB", 
    iconStr: "Database", 
    imagePath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
    color: "#47A248", 
    textColor: "#1B5E20", 
    category: "Backend & Cloud", 
    level: 80 
  },
  
  // Tools
  { 
    name: "Git", 
    iconStr: "GitBranch", 
    imagePath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032", 
    textColor: "#FFFFFF", 
    category: "Tools & DevOps", 
    level: 85 
  },
  { 
    name: "Postman", 
    iconStr: "Send", 
    imagePath: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    color: "#FF6C37", 
    textColor: "#FFFFFF", 
    category: "Tools & DevOps", 
    level: 80 
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ev-go",
    title: "EV-GO",
    subtitle: "EV Charging Station Finder",
    color: "#00B894",
    // Professional placeholder icons until you upload 'ev_go_logo.png'
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2360/2360205.png", 
    overview: "A comprehensive solution for EV owners to locate charging stations, plan trips, and handle payments. It directly addresses range anxiety by providing real-time availability data.",
    features: [
      "Real-time Google Maps integration",
      "Trip planning & turn-by-turn navigation",
      "Stripe payment gateway",
      "Charging session analytics"
    ],
    techStack: ["Flutter", "Firebase", "Stripe API", "Google Maps API"],
    githubUrl: "https://github.com/momokazi",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "gemini-chat",
    title: "Gemini Chat FAB",
    subtitle: "AI-Powered Flutter Package",
    color: "#4285F4",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    overview: "An open-source Flutter package offering a drop-in 'Floating Action Button' that expands into a full Gemini-powered chat interface. Designed for ease of integration.",
    features: [
      "Zero-config installation",
      "Streaming text responses",
      "Adaptive Theming (Dark/Light)",
      "Context-aware chat history"
    ],
    techStack: ["Flutter", "Dart", "Google GenAI SDK", "Open Source"],
    githubUrl: "https://github.com/momokazi",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "momofy",
    title: "Momofy",
    subtitle: "Ultimate Music Companion",
    color: "#1DB954",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png",
    overview: "A custom music player built with Flutter that integrates seamlessly with the Spotify Web API. It offers a cleaner, ad-free exploration experience for premium users.",
    features: [
      "Spotify Web API Deep Integration",
      "OAuth 2.0 Authentication",
      "Custom Playlist Management",
      "Audio Analysis Visualization"
    ],
    techStack: ["Flutter", "Provider", "Spotify API", "Audioplayers"],
    githubUrl: "https://github.com/momokazi",
    imageUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "pill-tracker",
    title: "Pill Tracker",
    subtitle: "Medication Management",
    color: "#FF6B6B",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/822/822102.png",
    overview: "An accessibility-focused app designed to help users manage prescriptions and track intake. Offline-first architecture ensures reliability without internet.",
    features: [
      "Complex Schedule Management",
      "Local Push Notifications",
      "Inventory Tracking",
      "SQLite Offline Storage"
    ],
    techStack: ["Flutter", "SQFlite", "Local Notifications", "Dart Dates"],
    githubUrl: "https://github.com/momokazi",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "rizz-up",
    title: "Rizz Up",
    subtitle: "Dating & Messaging App",
    color: "#E11D48",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2503/2503508.png",
    overview: "A unique messaging platform that gamifies the dating experience using culturally relevant pickup lines (Desi/Western). It focuses on breaking the ice with humor.",
    features: [
      "Localized Content System",
      "Acceptance-based Chat Unlocking",
      "Gamified Profile Reveals",
      "Real-time Messaging"
    ],
    techStack: ["Flutter", "GetX", "Firebase Realtime DB", "Cloud Functions"],
    githubUrl: "https://github.com/momokazi",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "rizz-admin",
    title: "Rizz Admin",
    subtitle: "Platform Dashboard",
    color: "#8B5CF6",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2329/2329087.png",
    overview: "A powerful web-based admin panel for the Rizz Up platform, allowing moderators to manage users, content, and view system analytics.",
    features: [
      "Data Visualization (Charts)",
      "User Ban/Approve System",
      "Content Moderation Queue",
      "PDF/CSV Data Export"
    ],
    techStack: ["Flutter Web", "Firebase Admin", "FL Chart", "GetX"],
    githubUrl: "https://github.com/momokazi",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  }
];
