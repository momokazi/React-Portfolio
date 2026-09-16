import {
  Certification,
  CommunityRole,
  EducationItem,
  ExperienceItem,
  Project,
  Skill,
} from './types';

export const PERSONAL_INFO = {
  name: 'Husnain Momin',
  tagline: 'Flutter Developer',
  email: 'mominfaraz444@gmail.com',
  github: 'https://github.com/momokazi',
  linkedin: 'https://linkedin.com/in/muhammad-husnain-momin-114503389',
  instagram: 'https://www.instagram.com/mominkazii/',
  pubDev: 'https://pub.dev/packages/gemini_chat_fab',
  bio: 'Computer Science graduate building cross-platform mobile apps in Flutter. At Techscale I work on Dobby, a coffee-service operations platform used by operators across Europe and the UK.',
  location: 'Lahore, Pakistan',
  avatar:
    'https://res.cloudinary.com/dcd8npsql/image/upload/v1773828087/1765906496093_whbt1b.jpg',
};

/** Scrolling strip under the hero. */
export const TICKER_ITEMS = [
  'Flutter',
  'Dart',
  'GetX',
  'Riverpod',
  'Firebase',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'GraphQL',
  'Cross-platform',
];

export const SKILLS: Skill[] = [
  {
    name: 'Flutter',
    iconStr: 'Smartphone',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    tone: 'sky',
    category: 'Mobile & Frontend',
    note: 'Day job and every app here. Custom widgets, animations, and offline-capable architectures.',
  },
  {
    name: 'Dart',
    iconStr: 'Code',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    tone: 'mint',
    category: 'Mobile & Frontend',
    note: 'Async, streams and null safety — plus GetX, Riverpod and Provider for state.',
  },
  {
    name: 'Node.js',
    iconStr: 'Server',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    tone: 'acid',
    category: 'Backend & APIs',
    note: 'REST services and auth for the apps I build, so I am not blocked on a backend.',
  },
  {
    name: 'FastAPI',
    iconStr: 'Zap',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    tone: 'mint',
    category: 'Backend & APIs',
    note: 'Python services with typed request models and generated docs, without much ceremony.',
  },
  {
    name: 'Firebase',
    iconStr: 'Flame',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    tone: 'flame',
    category: 'Backend & APIs',
    note: 'Auth, Firestore, Realtime DB, Cloud Functions and push across most of these projects.',
  },
  {
    name: 'GraphQL',
    iconStr: 'Share2',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    tone: 'rose',
    category: 'Backend & APIs',
    note: 'Querying against GraphQL endpoints alongside REST in client work.',
  },
  {
    name: 'PostgreSQL',
    iconStr: 'Database',
    imagePath:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    tone: 'sky',
    category: 'Databases',
    note: 'Relational schema design, joins and indexing.',
  },
  {
    name: 'MySQL',
    iconStr: 'Database',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    tone: 'acid',
    category: 'Databases',
    note: 'The other relational engine I work in.',
  },
  {
    name: 'MongoDB',
    iconStr: 'Database',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    tone: 'mint',
    category: 'Databases',
    note: 'Document schemas and aggregation behind the Node services.',
  },
  {
    name: 'Python',
    iconStr: 'Code',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tone: 'sky',
    category: 'Languages',
    note: 'Backend services with FastAPI, plus scripting and automation.',
  },
  {
    name: 'C++',
    iconStr: 'Code',
    imagePath:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    tone: 'grape',
    category: 'Languages',
    note: 'University systems work — process and memory management simulations, graph plotting.',
  },
  {
    name: 'Git',
    iconStr: 'GitBranch',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    tone: 'rose',
    category: 'Tools & Systems',
    note: 'Branching, reviews and release tagging on team repos.',
  },
  {
    name: 'Ubuntu',
    iconStr: 'Terminal',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg',
    tone: 'flame',
    category: 'Tools & Systems',
    note: 'Where I do my development work.',
  },
  {
    name: 'Postman',
    iconStr: 'Send',
    imagePath: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    tone: 'grape',
    category: 'Tools & Systems',
    note: 'Collections and environments for everything I integrate against.',
  },
  {
    name: 'Figma',
    iconStr: 'Layout',
    imagePath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    tone: 'sky',
    category: 'Tools & Systems',
    note: 'Reading handoffs and adjusting designs before building them out.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Techscale',
    role: 'Flutter Developer',
    period: 'Nov 2025 — Present',
    type: 'Full-time',
    location: 'Lahore, Pakistan',
    logo: 'https://res.cloudinary.com/dcd8npsql/image/upload/v1773827912/tech_scale_io_logo_cv8idd.jpg',
    description:
      'I build the Flutter app for Dobby (dobby.io), a coffee-service operations platform, and tailor it to individual operators across Europe and the UK — Selecta, Hillewaert, Zepbrook, Stellini, Caffeine and Keisi.',
    highlights: [
      'Cut in-app API loading times by over 50%.',
      'Re-architected app state around GetX with a local caching layer, adding offline availability and background syncing so technicians can keep working on site without a reliable connection.',
      'Built role-based interfaces for five user types — technician, supervisor, salesperson, customer and end user — each with permission-scoped views and workflows.',
      'Set up a local n8n pipeline that delivers builds straight to the QA team.',
    ],
  },
  {
    company: 'Techscale',
    role: 'Flutter Developer Intern',
    period: 'Aug 2025 — Nov 2025',
    type: 'Internship',
    location: 'Lahore, Pakistan',
    logo: 'https://res.cloudinary.com/dcd8npsql/image/upload/v1773827912/tech_scale_io_logo_cv8idd.jpg',
    description: 'My first professional Flutter role, and where both of my published releases came from.',
    highlights: [
      'Built Rizz Up, a Gen-Z chat app, and shipped it to the Google Play Store.',
      'Wrote and published gemini_chat_fab on pub.dev — an MIT-licensed package that drops a Gemini-powered chat assistant into any app through a single widget, with streaming responses and automatic theme adaptation. Maintained across four releases.',
    ],
  },
  {
    company: 'Royal Monarch Industries',
    role: 'Application Developer Intern',
    period: 'Jun 2024 — Dec 2024',
    type: 'Internship',
    location: 'Lahore, Pakistan',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHkP-KKEp2lLQ/company-logo_100_100/B4DZa7qYiWG4AU-/0/1746905173105/corpotech_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=eoTy_Q4ucXr_Pl2vUexvkAHMQpa8nwrQVLLSL1RDKj0',
    description:
      'Built Flutter and Firebase apps as part of an agile internship team, mostly for clients in the Gulf region and the UK.',
  },
  {
    company: 'On The Way',
    role: 'Junior Android Developer',
    period: 'Aug 2024 — Oct 2024',
    type: 'Remote',
    location: 'Lahore, Pakistan',
    logo: 'https://res.cloudinary.com/dcd8npsql/image/upload/v1773827738/1723896865194_m8ooza.jpg',
    description:
      'Designed and built the company mobile app in Flutter and Dart, with Firebase handling authentication and storage, on tight delivery schedules.',
  },
  {
    company: 'Paroi',
    role: 'Social Media Manager and Marketing',
    period: 'Mar 2023 — Jan 2024',
    type: 'Part-time',
    location: 'Lahore, Pakistan',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoQDoZDW94xnpovjr8UUPgtNiaBrevLW9kw&s',
    description:
      'Ran their social platforms and scheduled campaigns, designed product visuals, handled confidential material, and built their website on Google Sites.',
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

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Riphah International University',
    qualification: 'BS, Computer Science',
    period: 'Sep 2021 — Jul 2025',
    location: 'Lahore, Pakistan',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Networking Essentials', issuer: 'Cisco' },
  { name: 'Linux Essentials', issuer: 'NDG' },
  { name: 'Flutter and SRE', issuer: 'Google Cloud' },
  { name: 'HTML and CSS', issuer: 'University of Michigan' },
];

export const COMMUNITY: CommunityRole[] = [
  {
    role: 'President',
    organisation: 'Riphah e-Gaming Club',
    period: 'Jul 2022 — Sep 2024',
    description:
      'Founded the club and grew it into an active community, running events with a student team.',
  },
  {
    role: 'Ambassador',
    organisation: 'RozMarrah',
    period: 'Nov 2024 — Jul 2025',
    description:
      'Grew the community to 500+ students on campus, connecting them with freelancing and remote work, and guiding them through the platforms and career paths.',
  },
  {
    role: 'Ambassador',
    organisation: 'TechVerse',
    period: 'May 2025 — Jun 2025',
    description:
      'Managed event registrations for Riphah students and led promotion to raise participation.',
  },
  {
    role: 'Ambassador',
    organisation: 'AnimayKon',
    period: 'Dec 2023 — Feb 2024',
    description:
      'Supported a large-scale Comic Con — logistics, promotion and on-ground coordination.',
  },
  {
    role: 'Student Volunteer',
    organisation: 'WWF Pakistan',
    period: 'Oct 2024',
    description:
      'Helped organise a children’s camping tour focused on environmental education and the outdoors.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'gemini-chat',
    title: 'gemini_chat_fab',
    subtitle: 'Published on pub.dev',
    category: 'Tool',
    tone: 'sky',
    year: '2025',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
    overview:
      'An MIT-licensed Flutter package that drops a Gemini-powered chat assistant into any app through a single widget. Written after building the same chat UI one time too many, and maintained across four releases.',
    features: [
      'One widget, no other setup',
      'Streaming responses',
      'Adapts to the host app’s theme automatically',
      'Keeps conversation context between messages',
    ],
    techStack: ['Flutter', 'Dart', 'Google GenAI SDK'],
    githubUrl: 'https://github.com/momokazi',
    demoUrl: 'https://pub.dev/packages/gemini_chat_fab',
    demoLabel: 'pub.dev',
  },
  {
    id: 'rizz-up',
    title: 'Rizz Up',
    subtitle: 'On the Google Play Store',
    category: 'Mobile',
    tone: 'rose',
    year: '2025',
    logoUrl: 'https://iili.io/qJvWFHu.png',
    overview:
      'A Gen-Z chat app where you open with a pickup line instead of a blank message box, drawing on separate Desi and Western line sets. Chat unlocks once the other person accepts your opener. Built during my internship at Techscale and published to the Play Store.',
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
    id: 'ev-go',
    title: 'EV-Go',
    subtitle: 'Self-service EV rental',
    category: 'Mobile',
    tone: 'mint',
    year: '2024',
    logoUrl: 'https://iili.io/qJvWqDx.md.png',
    overview:
      'A self-service electric vehicle rental app in Flutter — find an available vehicle nearby on a map, unlock it, and pay for the trip in the app without talking to anyone.',
    features: [
      'Live availability on Google Maps',
      'Self-service unlock and return',
      'Stripe payments per trip',
      'Trip history and usage stats',
    ],
    techStack: ['Flutter', 'Firebase', 'Stripe API', 'Google Maps API'],
    githubUrl: 'https://github.com/momokazi',
  },
  {
    id: 'rizz-admin',
    title: 'Rizz Admin',
    subtitle: 'Moderation dashboard',
    category: 'Web',
    tone: 'grape',
    year: '2025',
    logoUrl: 'https://iili.io/qJvWFHu.png',
    overview:
      'The Flutter Web dashboard behind Rizz Up. Moderators work through a reported-content queue, ban or reinstate accounts, and export activity data.',
    features: [
      'Reported-content moderation queue',
      'Ban and reinstate accounts',
      'Usage charts with FL Chart',
      'CSV and PDF export',
    ],
    techStack: ['Flutter Web', 'Firebase Admin', 'FL Chart', 'GetX'],
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
      'A Flutter music player on top of the Spotify Web API — the browsing experience I wanted for my own account. OAuth sign-in, playlist management, and a visualiser driven by Spotify’s audio analysis data.',
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
      'Prescription tracking that keeps working without a connection, so everything lives in SQLite on the device. Handles awkward schedules — every other day, twice daily with food, tapering doses — and warns before a refill runs out.',
    features: [
      'Irregular and tapering dose schedules',
      'Local notifications, no server needed',
      'Refill countdown per prescription',
      'Offline-first SQLite storage',
    ],
    techStack: ['Flutter', 'SQFlite', 'Local Notifications'],
    githubUrl: 'https://github.com/momokazi',
  },
];
