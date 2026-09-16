import { Project, Skill, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: 'Husnain Momin',
  tagline: 'Flutter & Node.js Developer',
  email: 'mominfaraz444@gmail.com',
  github: 'https://github.com/momokazi',
  linkedin: 'https://linkedin.com/in/muhammad-husnain-momin-114503389',
  instagram: 'https://www.instagram.com/mominkazii/',
  bio: 'I build cross-platform mobile apps in Flutter and the Node.js backends behind them. Currently a Flutter developer in Lahore, shipping production apps for Techscale and Dobby.',
  location: 'Lahore, Pakistan',
  avatar:
    'https://res.cloudinary.com/dcd8npsql/image/upload/v1773828087/1765906496093_whbt1b.jpg',
};

/** Scrolling strip under the hero. */
export const TICKER_ITEMS = [
  'Flutter',
  'Dart',
  'Node.js',
  'Firebase',
  'MongoDB',
  'REST APIs',
  'State Management',
  'Cross-platform',
];

export const SKILLS: Skill[] = [
  {
    name: 'Flutter',
    iconStr: 'Smartphone',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    tone: 'sky',
    category: 'Mobile & Frontend',
    note: 'Day job and every app on this site. Custom widgets, animations, platform channels.',
  },
  {
    name: 'Dart',
    iconStr: 'Code',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    tone: 'mint',
    category: 'Mobile & Frontend',
    note: 'The language underneath all of it — async, streams, null safety.',
  },
  {
    name: 'Node.js',
    iconStr: 'Server',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    tone: 'acid',
    category: 'Backend & Cloud',
    note: 'REST APIs and auth for the apps I build, so I am not blocked on a backend.',
  },
  {
    name: 'Firebase',
    iconStr: 'Flame',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    tone: 'flame',
    category: 'Backend & Cloud',
    note: 'Auth, Firestore, Realtime DB, Cloud Functions and push across four projects here.',
  },
  {
    name: 'MongoDB',
    iconStr: 'Database',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    tone: 'mint',
    category: 'Backend & Cloud',
    note: 'Schema design and aggregation for the Node services.',
  },
  {
    name: 'Git',
    iconStr: 'GitBranch',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    tone: 'rose',
    category: 'Tools & DevOps',
    note: 'Branching, reviews and release tagging on team repos.',
  },
  {
    name: 'Postman',
    iconStr: 'Send',
    imagePath: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    tone: 'grape',
    category: 'Tools & DevOps',
    note: 'Collections and environments for everything I integrate against.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Techscale',
    role: 'Flutter Developer',
    period: 'Nov 2025 — Present',
    type: 'Full-time',
    location: 'Lahore, Punjab, Pakistan',
    logo: 'https://res.cloudinary.com/dcd8npsql/image/upload/v1773827912/tech_scale_io_logo_cv8idd.jpg',
    description:
      'Building and maintaining production Flutter apps, with a focus on app architecture and performance.',
  },
  {
    company: 'Dobby',
    role: 'Flutter Developer',
    period: 'Nov 2025 — Present',
    type: 'Full-time',
    location: 'Lahore',
    logo: 'https://res.cloudinary.com/dcd8npsql/image/upload/v1773827838/dobby_io_logo_cgqxx4.jpg',
    description:
      'Cross-platform app work — UI implementation, state management and API integration.',
  },
  {
    company: 'Techscale',
    role: 'Flutter Developer Intern',
    period: 'Aug 2025 — Nov 2025',
    type: 'Internship',
    location: 'Lahore, Punjab, Pakistan',
    logo: 'https://res.cloudinary.com/dcd8npsql/image/upload/v1773827912/tech_scale_io_logo_cv8idd.jpg',
    description:
      'First professional Flutter role. Shipped features against real APIs and learned the team’s review process.',
  },
  {
    company: 'Royal Monarch Industries',
    role: 'Application Developer Intern',
    period: 'Jun 2024 — Dec 2024',
    type: 'Internship',
    location: 'Lahore, Punjab, Pakistan',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHkP-KKEp2lLQ/company-logo_100_100/B4DZa7qYiWG4AU-/0/1746905173105/corpotech_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=eoTy_Q4ucXr_Pl2vUexvkAHMQpa8nwrQVLLSL1RDKj0',
    description:
      'Worked under Dr. Shahana Ghazal on Flutter and Firebase tasks for internal tooling.',
  },
  {
    company: 'On the Way',
    role: 'Junior Android Developer',
    period: 'Aug 2024 — Oct 2024',
    type: 'Full-time',
    location: 'Lahore, Punjab, Pakistan',
    logo: 'https://res.cloudinary.com/dcd8npsql/image/upload/v1773827738/1723896865194_m8ooza.jpg',
    description:
      'Designed and built their mobile app in Flutter, with Firebase auth and storage, on a tight schedule.',
  },
  {
    company: 'Paroi',
    role: 'Social Media Manager',
    period: 'Mar 2023 — Jan 2024',
    type: 'Part-time',
    location: 'Lahore, Punjab, Pakistan',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoQDoZDW94xnpovjr8UUPgtNiaBrevLW9kw&s',
    description:
      'Ran their social accounts and campaigns, designed product visuals, and built their site on Google Sites.',
  },
  {
    company: 'Freelance',
    role: 'Content Writer',
    period: 'Apr 2022 — Present',
    type: 'Freelance',
    location: 'Remote',
    description:
      'Academic and research writing — Master’s theses and papers for clients in Australia, the UK and the UAE.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ev-go',
    title: 'EV-GO',
    subtitle: 'Electric scooter rental',
    category: 'Mobile',
    tone: 'mint',
    year: '2024',
    logoUrl: 'https://iili.io/qJvWqDx.md.png',
    overview:
      'A Flutter app for EV owners who need to find a charger before the battery runs out. Live station availability and connector types on a map, trip planning around charge stops, and payment for a session in the app.',
    features: [
      'Live station map on Google Maps',
      'Trip planning with charge stops',
      'Stripe payments per session',
      'Session history and usage stats',
    ],
    techStack: ['Flutter', 'Firebase', 'Stripe API', 'Google Maps API'],
    githubUrl: 'https://github.com/momokazi',
  },
  {
    id: 'gemini-chat',
    title: 'Gemini Chat FAB',
    subtitle: 'Open-source Flutter package',
    category: 'Tool',
    tone: 'sky',
    year: '2024',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
    overview:
      'A drop-in floating action button that expands into a Gemini chat sheet. Built because wiring the same chat UI into every app got repetitive — install, pass a key, done.',
    features: [
      'Works with no configuration beyond an API key',
      'Streams responses token by token',
      'Follows the host app’s light/dark theme',
      'Keeps conversation context between messages',
    ],
    techStack: ['Flutter', 'Dart', 'Google GenAI SDK'],
    githubUrl: 'https://github.com/momokazi',
  },
  {
    id: 'momofy',
    title: 'Momofy',
    subtitle: 'Spotify client',
    category: 'Mobile',
    tone: 'acid',
    year: '2024',
    logoUrl: 'https://iili.io/qJvW2Se.png',
    overview:
      'A Flutter music player on top of the Spotify Web API — the browsing experience I wanted, built for my own Premium account. OAuth sign-in, playlist management, and a visualiser driven by Spotify’s audio analysis data.',
    features: [
      'Spotify Web API integration',
      'OAuth 2.0 sign-in flow',
      'Playlist create, edit, reorder',
      'Visualiser from audio analysis data',
    ],
    techStack: ['Flutter', 'Provider', 'Spotify API', 'Audioplayers'],
    githubUrl: 'https://github.com/momokazi',
  },
  {
    id: 'pill-tracker',
    title: 'Pill Tracker',
    subtitle: 'Medication reminders',
    category: 'Mobile',
    tone: 'flame',
    year: '2023',
    logoUrl: 'https://iili.io/qJvweTu.md.png',
    overview:
      'Prescription tracking that has to work whether or not there is signal, so everything lives in SQLite on the device. Handles awkward schedules — every other day, twice daily with food, tapering doses — and warns before a refill runs out.',
    features: [
      'Irregular and tapering dose schedules',
      'Local notifications, no server needed',
      'Refill countdown per prescription',
      'Offline-first SQLite storage',
    ],
    techStack: ['Flutter', 'SQFlite', 'Local Notifications'],
    githubUrl: 'https://github.com/momokazi',
  },
  {
    id: 'rizz-up',
    title: 'Rizz Up',
    subtitle: 'Dating app',
    category: 'Mobile',
    tone: 'rose',
    year: '2024',
    logoUrl: 'https://iili.io/qJvWFHu.png',
    overview:
      'A dating app where you open with a pickup line instead of a blank chat box, drawing on separate Desi and Western line sets. Chat only unlocks once the other person accepts your opener.',
    features: [
      'Separate localised line sets',
      'Chat unlocks on acceptance',
      'Profile details reveal in stages',
      'Realtime messaging',
    ],
    techStack: ['Flutter', 'GetX', 'Firebase Realtime DB', 'Cloud Functions'],
    githubUrl: 'https://github.com/momokazi',
  },
  {
    id: 'rizz-admin',
    title: 'Rizz Admin',
    subtitle: 'Moderation dashboard',
    category: 'Web',
    tone: 'grape',
    year: '2024',
    logoUrl: 'https://iili.io/qJvWFHu.png',
    overview:
      'The Flutter Web dashboard behind Rizz Up. Moderators work through a reported-content queue, ban or reinstate accounts, and export activity data for whoever asks for it.',
    features: [
      'Reported-content moderation queue',
      'Ban and reinstate accounts',
      'Usage charts with FL Chart',
      'CSV and PDF export',
    ],
    techStack: ['Flutter Web', 'Firebase Admin', 'FL Chart', 'GetX'],
    githubUrl: 'https://github.com/momokazi',
  },
];
