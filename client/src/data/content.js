export const profile = {
  name: 'Maharshi Vyas',
  role: 'FULL-STACK DEVELOPER',
  headline: 'Full-Stack Developer building AI and data-driven web apps',
  bio: "Hi, I'm Maharshi Vyas. I'm a Computer Science student in Ahmedabad who builds web apps with React, Node.js and Python, from the interface to the database.",
  summary: "I build full-stack web apps and enjoy projects that mix AI, data and security. I'm looking for a Software Development or Full-Stack internship.",
  location: 'Ahmedabad, Gujarat, India',
  email: 'maharshiv30@gmail.com',
  github: 'https://github.com/maharshiv7',
  linkedin: 'https://www.linkedin.com/in/maharshi-vyas-822444350/',
  languages: ['Hindi', 'English', 'Gujarati']
};

export const projects = [
  {
    featured: true,
    title: 'Nebula',
    label: 'AI CHATBOT PLATFORM',
    subtitle: 'AI chatbot platform',
    cover: '/images/nebula-cover.png',
    alt: 'Nebula AI chatbot platform with streaming responses and reasoning engine',
    description: 'A full-stack AI chat app with a MERN backend and a Python FastAPI service running on the Groq inference engine. Replies stream in token by token, show their reasoning, and can use live web search. It remembers earlier conversations with RAG and can analyze documents and images.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'Groq', 'RAG', 'SSE'],
    demo: 'https://nebula-ruby-zeta.vercel.app/',
    github: 'https://github.com/maharshiv7/Nebula'
  },
  {
    featured: true,
    title: 'OrbitX',
    label: 'SPACE TRACKING PLATFORM',
    subtitle: 'Space exploration and tracking platform',
    cover: '/images/orbitx-cover.png',
    alt: 'OrbitX space exploration platform tracking ISS and NASA telemetry',
    description: 'Tracks the ISS, near-Earth asteroids, solar storms and confirmed exoplanets using live NASA data. Includes a space-weather dashboard, celestial atlases, bookmarks and detailed anomaly pages.',
    tags: ['Flask', 'MySQL', 'NASA APIs', 'JavaScript', 'CSS'],
    demo: 'https://orbitx7-1.onrender.com/',
    note: 'Hosted on a free server, so the first load can take up to a minute.',
    github: 'https://github.com/maharshiv7/ORBITX7'
  },
  {
    title: 'The Cashier',
    cover: '/images/cashier-cover.png',
    alt: 'The Cashier POS and retail store inventory management system',
    description: 'A point-of-sale app for small retail stores with fast checkout, stock tracking and sales analytics. A lightweight web frontend talks to a Flask REST API backed by MySQL.',
    tags: ['Flask', 'REST API', 'MySQL', 'JavaScript'],
    github: 'https://github.com/maharshiv7/The-Cashier'
  },
  {
    title: 'SiteSentinel',
    category: 'Security',
    cover: '/images/sitesentinel-cover.png',
    alt: 'SiteSentinel website security grader and recon scanner report',
    description: 'Grades a website on its HTTP security headers and flags risks such as clickjacking, XSS and protocol downgrades. Also does WHOIS lookups and a terminal-style TCP port scan, and exports a text report.',
    tags: ['Python', 'Flask', 'python-whois', 'sockets', 'Tailwind CSS'],
    github: 'https://github.com/maharshiv7/SiteSentinel'
  },
  {
    title: 'Net-Sentry',
    category: 'Security',
    cover: '/images/netsentry-cover.png',
    alt: 'Net-Sentry network reconnaissance and vulnerability audit toolkit',
    description: 'A Python and Flask toolkit with an ARP network scanner, multi-threaded port scanning, WebRTC IP leak detection and DNS record lookups, plus a one-click audit report. It needs admin rights to send raw packets, so it runs locally.',
    tags: ['Python', 'Flask', 'scapy', 'dnspython', 'Tailwind CSS'],
    notice: 'Built for education and ethical network administration only. Only scan networks you have permission to test.',
    github: 'https://github.com/maharshiv7/Net-Sentry'
  }
];

export const skillGroups = [
  ['Languages', ['JavaScript', 'Python', 'Java']],
  ['Frontend', ['React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3']],
  ['Backend', ['Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'Flask']],
  ['Data and auth', ['MongoDB', 'Mongoose', 'MySQL', 'JWT', 'Google OAuth 2.0']],
  ['Tools', ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'VS Code']]
];

export const certifications = [
  { title: 'Exploratory Data Analysis for Machine Learning, IBM on Coursera', date: 'JUN 2026' },
  { title: 'Canva Master Class, Ahmedabad', date: 'MAR 2026' },
  { title: 'Introduction to HTML, CSS and JavaScript, IBM on Coursera', date: 'DEC 2025' },
  { title: 'Ethical Hacking Seminar, H2 Infosec', date: 'NOV 2025' },
  { title: 'Hex Hunt 2025, cybersecurity workshop and CTF, Lok Jagruti Kendra University', date: '2025' },
  { title: 'Introduction to Java, LearnQuest on Coursera', date: 'JAN 2025' }
];

export const education = {
  degree: 'B.E./B.Tech in Computer Science and Engineering',
  institution: 'Lok Jagruti Institute of Engineering and Technology, Ahmedabad',
  gpa: 'CGPA 7.43'
};

export const contactIntro = "I'm looking for a Software Development or Full-Stack internship. Send me a message below.";
