export interface IPortfolioItem {
  slug: string;
  title: string;
  description: string;
  details: string;
  imageUrl?: string | null;
  liveLink?: string | null;
  documentationLink?: string | null;
  githubClientLink?: string | null;
  githubServerLink?: string | null;
  category: string;
  technologies: string[];
}

export const portfolioData: IPortfolioItem[] = [
  {
    slug: 'programmer-fashion-ecommerce',
    title: 'Programmer Fashion',
    description:
      'An E-commerce site with a customer shopping and payment system. Includes Firebase auth, profile system, and admin product/order management.',
    details:
      'Programmer Fashion is a full-featured e-commerce platform built from the ground up. It includes a complete customer-facing storefront where users can browse products, add items to their cart, and complete purchases through a secure payment gateway. The backend features robust user authentication powered by Firebase, allowing for customer registration, login, and profile management. A comprehensive admin dashboard provides tools for managing products, viewing customer data, and tracking orders, making it a complete solution for online retail.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveLink: 'https://programmer-fashion.netlify.app',
    documentationLink: 'null',
    githubClientLink: 'https://github.com/mfarhadattari/programmer-fashion-client',
    githubServerLink: 'null',
    category: 'E-commerce',
    technologies: [
      'React',
      'Axios',
      'React Query',
      'Tailwind CSS',
      'Firebase',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    slug: 'plan-perfect-task-manager',
    title: 'Plan Perfect',
    description:
      'A task management app supporting CRUD, private routing, task archiving, secure user access, and deletion.',
    details:
      'Plan Perfect is a productivity tool designed to help users and teams manage their tasks effectively. The core functionality allows for creating, updating, and deleting tasks, as well as changing their status (e.g., To-Do, In Progress, Done). Security is a key feature, with conditional private routing to protect user data and JWT-based authentication to ensure secure access. The application also includes features like task archiving for decluttering the workspace and a secure user deletion process.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveLink: 'https://plan-perfect.vercel.app',
    documentationLink: null,
    githubClientLink: 'https://github.com/mfarhadattari/plan-perfect',
    githubServerLink: null,
    category: 'Productivity Tool',
    technologies: [
      'React',
      'Material Tailwind',
      'Redux Toolkit',
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
  },
  {
    slug: 'shandraw-db-diagramming-tool',
    title: 'Shandraw: Database Diagramming Tool',
    description:
      'A DBML editor with CodeMirror syntax support, real-time React Flow rendering, offline IndexedDB mode, and export capabilities.',
    details:
      'Shandraw is a powerful developer tool for database architects and engineers. It provides a sophisticated DBML (Database Markup Language) code editor featuring live syntax highlighting and intelligent autocompletion, powered by CodeMirror. As you write, a real-time visual diagram is rendered using React Flow, giving immediate feedback on the database schema. The application is secured with JWT authentication, password hashing via bcrypt, and email verification with Nodemailer. A standout feature is its offline capability, using IndexedDB to allow for editing without an internet connection. Users can export their diagrams and code in various formats.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveLink: null,
    documentationLink: null,
    githubClientLink: null,
    githubServerLink: null,
    category: 'Developer Tool',
    technologies: [
      'Next JS',
      'TypeScript',
      'Shadcn UI',
      'React Flow',
      'Prisma',
      'MongoDB',
      'Zustand',
      'CodeMirror',
    ],
  },
  {
    slug: 'travel-buddy-social-platform',
    title: 'Travel Buddy: Social Travel Platform',
    description:
      'A social media-style platform for travelers to find companions, share itineraries, and create travel posts.',
    details:
      'Travel Buddy connects travelers seeking similar destinations and experiences. It features a real-time chat system, travel blog creation, trip matching via filters, and an interactive map view for tracking user-shared destinations. Authentication is secured using Firebase and JWT, with a responsive interface built using Tailwind CSS. Admins can moderate content and manage user reports.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveLink: null,
    documentationLink: null,
    githubClientLink: null,
    githubServerLink: null,
    category: 'Social Platform',
    technologies: ['Next.js', 'Firebase', 'JWT', 'Tailwind CSS', 'MongoDB', 'Zustand'],
  },
  {
    slug: 'snapfolio-portfolio-builder',
    title: 'Snapfolio: Online Portfolio Builder',
    description:
      'A no-code portfolio builder for developers and creatives to generate and publish personal sites.',
    details:
      'Snapfolio lets users create professional portfolios using customizable templates and drag-and-drop components. Features include markdown support, image uploads, dynamic project sections, and instant deployment using Vercel integration. Authenticated users can preview and manage their portfolio pages securely.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveLink: null,
    documentationLink: null,
    githubClientLink: null,
    githubServerLink: null,
    category: 'SaaS Tool',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zod', 'Shadcn UI', 'Prisma', 'Vercel'],
  },
  {
    slug: 'foodiefy-online-ordering',
    title: 'Foodiefy: Online Food Ordering App',
    description:
      'An intuitive food ordering platform with restaurant menus, cart system, order tracking, and payment integration.',
    details:
      'Foodiefy is designed for restaurants and food delivery businesses. Users can browse menus, add items to cart, schedule deliveries, and make secure payments via Stripe. Admin panel allows managing dishes, orders, delivery staff, and daily earnings. Built with a responsive UI, it also supports real-time order status updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveLink: null,
    documentationLink: null,
    githubClientLink: null,
    githubServerLink: null,
    category: 'Food & Delivery',
    technologies: [
      'React',
      'Redux Toolkit',
      'Stripe',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],
  },
  {
    slug: 'devhub-collab-platform',
    title: 'DevHub: Developer Collaboration Platform',
    description:
      'A platform for developers to create projects, find collaborators, and contribute to open-source repositories.',
    details:
      'DevHub promotes collaboration among developers by allowing users to create project listings, search for contributors by skill, and manage tasks. GitHub OAuth integration allows syncing repos and issues. Includes messaging, project updates feed, and tag-based filtering for discovery. Admins can highlight featured projects and moderate submissions.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveLink: null,
    documentationLink: null,
    githubClientLink: null,
    githubServerLink: null,
    category: 'Developer Community',
    technologies: [
      'Next.js',
      'OAuth (GitHub)',
      'Shadcn UI',
      'PostgreSQL',
      'Prisma',
      'Zustand',
      'Node.js',
    ],
  },
];
