export interface Project {
  id: number;
  title: string;
  description: string;

  image: string;

  images?: string[];

  tech: string[];

  features: string[];

  github: string;

  live: string;

  architecture?: string;

  duration?: string;

  role?: string;

  status?: string;

  challenges?: string[];

  solutions?: string[];

  achievements?: string[];

  category?: string;
year?: string;
featured?: boolean;
metrics?: string[];

teamSize?: string;

responsibilities?: string[];

learning?: string[];
}

export const projects: Project[] = [
  {
    id: 1,

    title: "FinWise AI • Smart Expense Tracker",

    description:
      "A production-ready AI-powered finance platform that enables secure expense management, AI insights, analytics dashboards and intelligent financial tracking.",

    image: "/projects/finwise.png",

    images: [
      "/projects/finwise.png",
      "/projects/finwise-dashboard.png",
      "/projects/finwise-analytics.png",
    ],

    architecture: "/projects/finwise-architecture.png",

    duration: "2026",

    role: "Full Stack Developer",

    status: "In Progress",

    tech: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "MySQL",
      "JWT",
      "REST API",
    ],

    features: [
      "JWT Authentication",
      "Expense Tracking",
      "AI Insights",
      "Analytics Dashboard",
      "Monthly Reports",
      "REST APIs",
    ],

    challenges: [
      "Secure JWT Authentication",
      "Role-based authorization",
      "Expense analytics",
      "Responsive dashboard",
    ],

    solutions: [
      "Spring Security + JWT",
      "Reusable React Components",
      "REST API Architecture",
      "Interactive Charts",
    ],

    achievements: [
      "Enterprise Folder Structure",
      "Reusable Components",
      "Modern UI",
      "AI Powered Features",
    ],
    metrics: [
"99.9% JWT Auth Success",
"REST API Response <120ms",
"Lighthouse Score: 95+",
"100% Responsive"
],
category: "Full Stack",

year: "2026",

featured: true,

teamSize: "Solo Project",



responsibilities: [
  "Designed backend architecture",
  "Implemented JWT authentication",
  "Developed responsive React frontend",
  "Integrated AI-powered expense insights",
  "Designed MySQL database schema",
],

learning: [
  "Spring Security",
  "REST API Design",
  "System Architecture",
  "Performance Optimization",
],

    github: "https://github.com/ayushh-17",

    live: "#",
  },

  {
    id: 2,

    title: "Driver Alertness & AI Assistant",

    description:
      "AI-based computer vision system capable of detecting drowsiness, distraction and fatigue using OpenCV and MediaPipe.",

    image: "/projects/driver.png",

    images: [
      "/projects/driver.png",
    ],

    architecture: "/projects/driver-architecture.png",

    duration: "2026",

    role: "AI Developer",

    status: "Completed",

    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Machine Learning",
    ],

    features: [
      "Drowsiness Detection",
      "Face Tracking",
      "Blink Detection",
      "AI Alerts",
      "Driver Monitoring",
    ],

    challenges: [
      "Real-time detection",
      "Low latency",
      "Lighting conditions",
    ],

    solutions: [
      "MediaPipe Face Mesh",
      "OpenCV Optimization",
      "Efficient Frame Processing",
    ],

    achievements: [
      "Real-time AI",
      "Computer Vision",
      "Safety Monitoring",
    ],
    category:
"AI / Computer Vision",

year: "2026",

featured: false,

teamSize: "Solo Project",

metrics: [
  "Real-time Face Detection",
  "Low Latency Processing",
  "MediaPipe Face Mesh",
  "Computer Vision",
],

responsibilities: [
  "Developed computer vision pipeline",
  "Implemented drowsiness detection",
  "Integrated MediaPipe Face Mesh",
  "Optimized frame processing",
],

learning: [
  "OpenCV",
  "MediaPipe",
  "Real-time AI",
  "Computer Vision",
],

    github: "https://github.com/ayushh-17",

    live: "#",
  },

  {
    id: 3,

    title: "Premium Portfolio 2026",

    description:
      "Modern Apple-inspired developer portfolio with premium animations, smooth scrolling, responsive UI and recruiter-focused design.",

    image: "/projects/portfolio.png",

    images: [
      "/projects/portfolio.png",
    ],

    architecture: "/projects/portfolio-architecture.png",

    duration: "2026",

    role: "Frontend Developer",

    status: "Live",

    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],

    features: [
      "Glassmorphism",
      "Responsive UI",
      "Smooth Animations",
      "SEO Ready",
      "Contact Form",
    ],

    challenges: [
      "Premium UX",
      "Animation Performance",
    ],

    solutions: [
      "Lazy Loading",
      "Reusable Components",
      "Optimized Rendering",
    ],

    achievements: [
      "Lighthouse Score: 95+",
      "Fully Responsive",
      "Modern Design",
    ],

    category: "Frontend Engineering",

year: "2026",

featured: true,

teamSize: "Solo Project",

metrics: [
  "Lighthouse Score: 95+",
  "Responsive Design",
  "Framer Motion Animations",
  "SEO Optimized",
],

responsibilities: [
  "Designed complete UI/UX",
  "Built reusable React components",
  "Implemented premium animations",
  "Optimized performance",
],

learning: [
  "Advanced React",
  "UI/UX Design",
  "Performance Optimization",
  "Accessibility",
],

    github:
"https://github.com/ayushh-17/finwise-ai",

    live: "#",
  },
];