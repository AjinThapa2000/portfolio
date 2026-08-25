export const profile = {
  name: 'Dinesh Thapa',
  roles: ['Full-Stack Developer', 'React & Node.js Engineer', 'WordPress / PHP Developer'],
  location: 'Exeter, Devon, United Kingdom',
  email: 'dineshthapa2000@gmail.com',
  phone: '+44 7917 674654',
  links: {
    linkedin: 'https://bit.ly/3Pq74Xe',
    github: 'https://bit.ly/3Pohu9Q',
  },
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years experience' },
  { value: 15, suffix: '+', label: 'Projects shipped' },
  { value: 2, suffix: '', label: 'Countries worked in' },
]

export const facts = [
  { value: '5+ yrs', label: 'Professional work' },
  { value: '15+', label: 'Projects completed' },
  { value: 'BSc', label: 'Computer Science & IT' },
]

export const techStack = [
  'React', 'TypeScript', 'Node.js', 'PHP', 'WordPress', 'Django',
  'MySQL', 'MongoDB', 'REST APIs', 'Git/GitHub', 'CI/CD', 'Agile/Scrum',
]

export const experience = [
  {
    id: 'bigwave',
    role: 'Full Stack Developer',
    company: 'Bigwave Marketing',
    companyUrl: null,
    date: 'Aug 2026 — Present',
    current: true,
    bullets: [
      'Develop and maintain client WordPress websites using PHP, HTML5, CSS3, JavaScript and MySQL.',
      'Customise WordPress themes and plugins to meet client and business requirements.',
      'Integrate third-party APIs, contact forms and payment gateways into live sites.',
      'Manage and query MySQL databases via phpMyAdmin — schema updates, data migrations and PHP/MySQL back-end logic.',
      'Perform maintenance, bug fixes, security updates and backups; support deployed applications.',
    ],
    tags: ['PHP', 'WordPress', 'MySQL', 'phpMyAdmin', 'JavaScript'],
  },
  {
    id: 'cornerstone',
    role: 'Web Developer / Designer & Content Creator',
    company: 'Cornerstone Academy Trust',
    companyUrl: 'https://tcat.education/',
    date: 'Aug 2024 — Feb 2026',
    current: false,
    bullets: [
      'Built custom WordPress hooks, shortcodes and theme functions to safely extend CMS functionality and automate workflows such as job applications.',
      'Designed and built custom themes and plugins, plus RESTful form, event and content-automation API integrations.',
      'Applied CI/CD workflows (GitHub/GitLab) for automated testing and deployment, with GDPR-compliant, secure front-end flows.',
      'Owned the full development cycle: requirements, build, test, deploy, support and maintenance.',
    ],
    tags: ['WordPress', 'REST APIs', 'CI/CD', 'GDPR'],
  },
  {
    id: 'opportumeety',
    role: 'Front-End Developer',
    company: 'Opportumeety · Remote / Barcelona, Spain',
    companyUrl: null,
    date: 'Sep 2023 — Apr 2024',
    current: false,
    bullets: [
      'Built and optimised front-end features with React (TypeScript, hooks, custom hooks) for a location-based social networking platform.',
      'Helped migrate and maintain Angular modules for cross-framework compatibility during a platform transition.',
      'Used Flexbox/Grid and responsive patterns for a consistent, accessible UI; collaborated on Node.js/MongoDB integrations.',
    ],
    tags: ['React', 'TypeScript', 'Angular', 'Node.js', 'MongoDB'],
  },
  {
    id: 'amazon',
    role: 'Problem Solver',
    company: 'Amazon · Exeter, UK',
    companyUrl: null,
    date: 'Nov 2022 — Aug 2024',
    current: false,
    bullets: [
      'Ran data analysis and problem-solving tasks that improved operational efficiency.',
      'Coordinated with cross-functional teams, cutting operational bottlenecks by 30%.',
    ],
    tags: ['Process Improvement', 'Data Analysis'],
  },
  {
    id: 'freelance',
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    companyUrl: null,
    date: 'Aug 2021 — Sep 2022',
    current: false,
    bullets: [
      'Delivered tailored web solutions for 20+ clients, from wireframes through to launch.',
      'Built custom WordPress themes and plugins, cutting development costs by 40% while improving functionality and security.',
    ],
    tags: ['WordPress', 'Client Work'],
  },
  {
    id: 'bihani',
    role: 'Intern Django Developer',
    company: 'Bihani Tech · Kathmandu, Nepal',
    companyUrl: null,
    date: 'Mar 2021 — Jul 2021',
    current: false,
    bullets: [
      'Contributed to a full-stack Django application built on MVC architecture for scalable design.',
      'Built RESTful API endpoints and wired them into the front end; reviewed pull requests to improve code quality.',
    ],
    tags: ['Django', 'REST APIs', 'Git'],
  },
  {
    id: 'nid',
    role: 'Junior System Analyst',
    company: 'Department of National ID, Nepal',
    companyUrl: null,
    date: 'Feb 2020 — Feb 2021',
    current: false,
    bullets: [
      'Led a company-wide system upgrade supporting 10% yearly growth in data management capacity.',
      'Streamlined cross-platform data synchronisation, removing redundant tasks across departments.',
    ],
    tags: ['Systems Analysis', 'Data Management'],
  },
]

export const skills = [
  {
    id: 'frontend',
    title: 'Front-End',
    blurb: 'Interfaces people enjoy using',
    items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Vue.js', 'Angular', 'WordPress'],
  },
  {
    id: 'backend',
    title: 'Back-End',
    blurb: 'APIs, data and business logic',
    items: ['Node.js', 'PHP', 'Django', 'Express.js', 'REST APIs', 'MySQL', 'phpMyAdmin', 'MongoDB'],
  },
  {
    id: 'practice',
    title: 'Practice & tools',
    blurb: 'How the work actually ships',
    items: ['Git / GitHub / GitLab', 'CI/CD', 'Agile / Scrum', 'Jira · Trello', 'WCAG Accessibility', 'GDPR Compliance', 'Performance Tuning'],
  },
]

export const projectFilters = ['All', 'Client Site', 'JavaScript', 'API']

export const projects = [
  {
    id: 'cornerstone',
    name: 'Cornerstone Academy Trust',
    description: 'Full school website built and customised in WordPress — an online hub for students, parents and teachers with automated workflows and third-party API integrations.',
    image: 'proj-cornerstone.jpg',
    tags: ['WordPress', 'PHP', 'REST APIs', 'CI/CD'],
    categories: ['Client Site', 'API'],
    featured: true,
    chip: 'Client site',
    live: 'https://tcat.education/',
    code: null,
  },
  {
    id: 'Travel_Management',
    name: 'Travel Management',
    description: 'A mobile-first, installable travel companion PWA for a Spain trip: Málaga and Barcelona.',
    image: 'tm.png',
    tags: ['JavaScript', 'LocalStorage'],
    categories: ['JavaScript'],
    live: 'https://ajinthapa2000.github.io/travelManagement/',
    code: 'https://github.com/AjinThapa2000/travelManagement',
  },
  {
    id: 'password',
    name: 'Password Generator',
    description: 'Generates unique, strong passwords up to 64 characters long for maximum security.',
    image: 'proj-password.jpg',
    tags: ['JavaScript', 'Front-End'],
    categories: ['JavaScript'],
    live: 'https://ajinthapa2000.github.io/Unique-Password-Generetor/',
    code: 'https://github.com/AjinThapa2000/Unique-Password-Generetor',
  },
  {
    id: 'weather',
    name: 'Weather Forecast',
    description: '5-day weather forecasts for any city, powered by the OpenWeather and Google Maps APIs.',
    image: 'proj-weather.jpg',
    tags: ['OpenWeather API', 'Maps API'],
    categories: ['API', 'JavaScript'],
    live: 'https://ajinthapa2000.github.io/WeatherForecast/',
    code: 'https://github.com/AjinThapa2000/WeatherForecast',
  },
  {
    id: 'quiz',
    name: 'Time Quiz',
    description: 'Play time-based quizzes and score points before the clock runs out.',
    image: 'proj-quiz.jpg',
    tags: ['JavaScript', 'Timers'],
    categories: ['JavaScript'],
    live: 'https://ajinthapa2000.github.io/Play-Time-Quiz/',
    code: 'https://github.com/AjinThapa2000/Play-Time-Quiz',
  },
  {
    id: 'cocktails',
    name: 'Food & Cocktails API',
    description: 'Look up step-by-step instructions for making food and cocktails at home.',
    image: 'proj-cocktails.jpg',
    tags: ['Public APIs', 'LocalStorage'],
    categories: ['API', 'JavaScript'],
    live: 'https://ajinthapa2000.github.io/Food-Cocktails-API/',
    code: 'https://github.com/AjinThapa2000/Food-Cocktails-API',
  },
]
