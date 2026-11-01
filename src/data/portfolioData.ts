export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface QuickFacts {
  location: string;
  email: string;
  phone: string;
  timeZone: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: 'tools' | 'users' | 'brain';
}

export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  highlightName: string;
  tagline: string;
  availability: string;
  resumeUrl: string;
  socials: SocialLinks;
  quickFacts: QuickFacts;
  aboutMe: string;
  aboutHighlights: Highlight[];
}

export interface TopSkill {
  name: string;
  icon: 'react' | 'nextjs' | 'nodejs' | 'typescript' | 'postgresql' | 'tailwindcss';
  color: string;
}

export type ProjectBadgeColor = 'pink' | 'green' | 'coral' | 'blue';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryType: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  badgeColor: ProjectBadgeColor;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TechnicalSkill {
  category: string;
  icon: 'code' | 'server' | 'database' | 'terminal' | 'layers';
  color: string;
  bgColor: string;
  skills: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  icon: 'graduation' | 'badge';
}

export const personalInfo: PersonalInfo = {
  name: "John Ugbewi",
  role: "SOFTWARE Developer",
  headline: "Hello, I'm",
  highlightName: "John Ugbewi",
  tagline: "I build modern, scalable web applications with React, Next.js, Node.js and other technologies. I'm passionate about creating solutions that solve real problems and deliver great user experiences.",
  availability: "Available for Remote Opportunities",
  resumeUrl: "mailto:ugbewijc@gmail.com?subject=Resume%20Request&body=Hi%20John,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!",
  socials: {
    github: "https://github.com/ugbewijc",
    linkedin: "https://linkedin.com/in/ugbewijc",
    twitter: "https://x.com/ugbewijc",
    email: "mailto:ugbewijc@gmail.com"
  },
  quickFacts: {
    location: "Lagos, Nigeria (Open to Remote)",
    email: "johnchioma@example.com",
    phone: "+234 801 234 5678",
    timeZone: "WAT (GMT+1)"
  },
  aboutMe: "I'm a frontend and full-stack Software developer with over 6 years of experience building web applications using modern technologies like React, Next.js, Node.js and TypeScript. I enjoy working on complex problems, collaborating with great teams, and continuously learning new tools and technologies.",
  aboutHighlights: [
    {
      title: "Problem Solver",
      description: "Turn ideas into scalable solutions",
      icon: "tools"
    },
    {
      title: "Team Player",
      description: "Collaborate and build together",
      icon: "users"
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies",
      icon: "brain"
    }
  ]
};

export const topSkills: TopSkill[] = [
  { name: "React", icon: "react", color: "#00d8ff" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff" },
  { name: "Node.js", icon: "nodejs", color: "#22c55e" },
  { name: "TypeScript", icon: "typescript", color: "#3178c6" },
  { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#38bdf8" }
];

export const projectCategories: string[] = [
  "All",
  "Website",
  "Client",
  "SaaS",
  "Side Project"
];

export const projects: Project[] = [
  {
    id: "salon-ng",
    title: "Salon.ng",
    category: "Website",
    categoryType: "Website",
    description: "Customer-focused platform for beauty and wellness services with storefront and customer dashboard experiences.",
    longDescription: "Salon.ng is a robust appointment booking and marketplace web application designed for salons, spas, and freelance stylists. It features a seamless consumer booking flow, calendar synchronization, real-time availability updates, and an intuitive customer dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    features: [
      "Real-time salon service browsing and instant seat reservation",
      "Dynamic booking calendar with customer notifications",
      "Comprehensive merchant portal with sales analytics and employee management",
      "Responsive design with optimized mobile web performance"
    ],
    badgeColor: "pink",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/salon",
    githubUrl: "https://github.com/example/salon-ng"
  },
  {
    id: "wefulfil",
    title: "WeFulfil",
    category: "SaaS",
    categoryType: "SaaS",
    description: "Multi-tenant ecommerce and dropshipping platform with vendor and customer portals.",
    longDescription: "WeFulfil streamlines end-to-end dropshipping logistics and multi-vendor product listings. Vendors can monitor order tracking, fulfillment pipelines, and inventory sync in real time across multiple regional warehouses.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Multi-tenant vendor authentication and storefront configuration",
      "Automated order routing, fulfillment webhooks, and invoice generation",
      "Real-time stock inventory level monitoring and low-stock alerts",
      "Custom analytics dashboard with revenue charts and KPI tracking"
    ],
    badgeColor: "green",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/wefulfil",
    githubUrl: "https://github.com/example/wefulfil"
  },
  {
    id: "joyce-bakery",
    title: "Joyce Bakery",
    category: "Website",
    categoryType: "Website",
    description: "Ecommerce website and admin dashboard for a bakery business.",
    longDescription: "A bakery storefront allowing customers to customize pastry assortments, pre-order cakes, select delivery slots, and pay securely online. Includes an admin portal for order fulfillment and stock inventory.",
    technologies: ["Next.js", "React", "PostgreSQL"],
    features: [
      "Custom pastry builder and event pre-order checkout",
      "Delivery window selector with automated SMS order confirmation",
      "Kitchen receipt printing and order status display board",
      "Secure payment processing via Stripe and Paystack"
    ],
    badgeColor: "coral",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/joyce-bakery",
    githubUrl: "https://github.com/example/joyce-bakery"
  },
  {
    id: "risk-manager-nigeria",
    title: "Risk Manager Nigeria",
    category: "Website",
    categoryType: "Website",
    description: "Security services company website with service listings and client information.",
    longDescription: "Corporate web portal for a premier security intelligence and risk management firm in Nigeria. Features enterprise client case studies, incident advisory blogs, and corporate consultation scheduling.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive threat advisory and security news bulletin",
      "Secure corporate lead generation and consultation booking forms",
      "Smooth micro-interactions and high-performance animations",
      "Full WCAG accessibility compliance and multi-device responsiveness"
    ],
    badgeColor: "blue",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/risk-manager",
    githubUrl: "https://github.com/example/risk-manager"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Website",
    categoryType: "Website",
    description: "My personal portfolio website built with React, TypeScript, and Tailwind CSS.",
    longDescription: "Modern single-page portfolio engineered with clean architecture, fluid responsive layouts, theme switching, fast loading speeds, and interactive project discovery showcases.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    features: [
      "Light and dark mode with persistent user preference",
      "Interactive category filtering and modal views",
      "Semantic HTML5 structure and SEO-optimized metadata",
      "Zero-latency deployment on GitHub Pages"
    ],
    badgeColor: "blue",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio"
  },
  {
    id: "payflow-africa",
    title: "PayFlow Africa",
    category: "Client",
    categoryType: "Client",
    description: "High-throughput payment gateway and merchant settlement engine for African businesses.",
    longDescription: "Engineered scalable checkout components and merchant billing workflows processing cross-border transactions with multi-currency conversion and instant settlement.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "Direct bank debit and mobile money payment integrations",
      "Real-time exchange rate calculation and automated fees breakdown",
      "Enterprise audit logging and PCI-DSS compliance verification"
    ],
    badgeColor: "green",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/payflow",
    githubUrl: "https://github.com/example/payflow"
  },
  {
    id: "devsprint-cloud",
    title: "DevSprint Cloud",
    category: "SaaS",
    categoryType: "SaaS",
    description: "Developer sprint tracking and continuous release management suite.",
    longDescription: "Cloud platform assisting remote engineering teams in prioritizing backlog tickets, managing pull request reviews, and automating staging deployment previews.",
    technologies: ["Next.js", "TypeScript", "Docker"],
    features: [
      "GitHub & GitLab OAuth and webhook synchronization",
      "Automated sprint burndown charts and velocity estimation",
      "Kanban board with drag-and-drop ticket reordering"
    ],
    badgeColor: "coral",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/devsprint",
    githubUrl: "https://github.com/example/devsprint"
  },
  {
    id: "codesnippet-studio",
    title: "CodeSnippet Studio",
    category: "Side Project",
    categoryType: "Side Project",
    description: "Open-source developer utility for creating beautiful syntax-highlighted code snippets.",
    longDescription: "Lightweight tool that lets developers generate shareable social cards and markdown documentation snippets with custom gradients, themes, and font pairings.",
    technologies: ["React", "Vite", "Canvas API"],
    features: [
      "Over 40 syntax highlighting languages with instant preview",
      "One-click PNG and SVG export with adjustable resolution",
      "Local storage history for quickly referencing past snippets"
    ],
    badgeColor: "pink",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://example.com/codesnippet",
    githubUrl: "https://github.com/example/codesnippet"
  }
];

export const technicalSkills: TechnicalSkill[] = [
  {
    category: "Frontend",
    icon: "code",
    color: "#2563eb",
    bgColor: "#eff6ff",
    skills: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, CSS"
  },
  {
    category: "Backend",
    icon: "server",
    color: "#10b981",
    bgColor: "#ecfdf5",
    skills: "Node.js, Express.js, Python"
  },
  {
    category: "Databases",
    icon: "database",
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
    skills: "PostgreSQL, MongoDB, MySQL, SQLite"
  },
  {
    category: "Tools & DevOps",
    icon: "terminal",
    color: "#f97316",
    bgColor: "#fff7ed",
    skills: "Git, GitHub, Docker, Vercel, AWS, CI/CD"
  },
  {
    category: "Other",
    icon: "layers",
    color: "#06b6d4",
    bgColor: "#ecfeff",
    skills: "REST APIs, GraphQL, Agile, Jira, Postman"
  }
];
