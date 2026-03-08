import { Project, Skill, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Husnain Momin",
  tagline: "Full-Stack Mobile Developer",
  email: "mominfaraz444@gmail.com",
  github: "https://github.com/momokazi",
  linkedin: "https://linkedin.com/in/muhammad-husnain-momin-114503389",
  instagram: "https://www.instagram.com/mominkazii/",
  bio: "Passionate developer specializing in Flutter, Node.js, and cloud technologies. I build high-performance mobile applications and scalable backends. Currently exploring the intersection of AI integration and fluid UI interactions.",
  location: "Pakistan",
  // Updated avatar from LinkedIn
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQFoF0U1x26mug/profile-displayphoto-scale_400_400/B56ZsoOrGGIYAg-/0/1765906496093?e=1774483200&v=beta&t=4zscZYsSUE-1PH9-A2qyONK8tx-QYiFem9HPnLB8OMw" 
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

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Techscale",
    role: "Flutter Developer",
    period: "Nov 2025 - Present",
    type: "Full-time",
    location: "Lahore, Punjab, Pakistan",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEkMo1pDtz-ng/company-logo_200_200/company-logo_200_200/0/1721909756163/tech_scale_io_logo?e=1772668800&v=beta&t=5-_loOQriSSwbwzoXaVHFwAY6dKiDfhd8fXHK6guFUE",
    description: "Contributing to high-impact mobile solutions, focusing on scalable architecture and performance optimization."
  },
  {
    company: "Dobby",
    role: "Flutter Developer",
    period: "Nov 2025 - Present",
    type: "Full-time",
    location: "Lahore",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEz05NYJLZgNg/company-logo_200_200/B4EZweVpF8KoAI-/0/1770035516134/dobby_io_logo?e=1772668800&v=beta&t=TlVtuFpXtdyyFNgWB4RdEEeCNtWQigZ-z9DFapgzMJg",
    description: "Developing cross-platform mobile applications with a focus on seamless user experience and robust state management."
  },
  {
    company: "Techscale",
    role: "Flutter Developer Intern",
    period: "Aug 2025 - Nov 2025",
    type: "Internship",
    location: "Lahore, Punjab, Pakistan",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEkMo1pDtz-ng/company-logo_200_200/company-logo_200_200/0/1721909756163/tech_scale_io_logo?e=1772668800&v=beta&t=5-_loOQriSSwbwzoXaVHFwAY6dKiDfhd8fXHK6guFUE",
    description: "Gained hands-on experience in mobile application development, working with Flutter and integrating complex APIs."
  },
  {
    company: "Royal Monarch Industries",
    role: "Application Developer Intern",
    period: "Jun 2024 - Dec 2024",
    type: "Internship",
    location: "Lahore, Punjab, Pakistan",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHkP-KKEp2lLQ/company-logo_100_100/B4DZa7qYiWG4AU-/0/1746905173105/corpotech_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=eoTy_Q4ucXr_Pl2vUexvkAHMQpa8nwrQVLLSL1RDKj0",
    description: "Worked under the mentorship of Dr. Shahana Ghazal. Utilized Firebase with Flutter for assigned tasks and improved business ethics understanding."
  },
  {
    company: "On the Way",
    role: "Junior Android Developer",
    period: "Aug 2024 - Oct 2024",
    type: "Full-time",
    location: "Lahore, Punjab, Pakistan",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE2fJB4fDDyOg/company-logo_200_200/company-logo_200_200/0/1723896865194?e=1772668800&v=beta&t=oJUG_n9e8kfq1Cu9_sJZ3gbSg7wx5EtiJJ_wbz0etYk",
    description: "Designed their mobile app using Flutter and Dart. Integrated Firebase for authentication and data storage. Delivered features on tight schedules."
  },
  {
    company: "Paroi",
    role: "Social Media Manager",
    period: "Mar 2023 - Jan 2024",
    type: "Part-time",
    location: "Lahore, Punjab, Pakistan",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoQDoZDW94xnpovjr8UUPgtNiaBrevLW9kw&s",
    description: "Managed social platforms and scheduled campaigns. Designed product visuals, handled confidential materials, and built their website using Google Sites."
  },
  {
    company: "Freelance",
    role: "Content Writer",
    period: "Apr 2022 - Present",
    type: "Freelance",
    location: "Remote",
    description: "Freelance academic writer working on Master's thesis and research writing for clients from Australia, UK and UAE."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ev-go",
    title: "EV-GO",
    subtitle: "Electric Scooter Rental Service",
    category: "Mobile",
    color: "#00B894",
    logoUrl: "https://iili.io/qJvWqDx.md.png", 
    overview: "EV-GO is your ultimate companion for Electric Vehicle (EV) journeys. Born from the need to simplify the EV charging experience, this Flutter-based application helps EV owners effortlessly locate nearby charging stations, plan their trips efficiently, and manage their charging sessions with ease. The app aims to reduce range anxiety by providing accurate, real-time data on station availability and connector types.",
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
    category: "Tool",
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
    category: "Mobile",
    color: "#1DB954",
    logoUrl: "https://iili.io/qJvW2Se.png",
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
    category: "Mobile",
    color: "#FF6B6B",
    logoUrl: "https://iili.io/qJvweTu.md.png",
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
    category: "Mobile",
    color: "#E11D48",
    logoUrl: "https://iili.io/qJvWFHu.png",
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
    category: "Web",
    color: "#8B5CF6",
    logoUrl: "https://iili.io/qJvWFHu.png",
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
