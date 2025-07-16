export interface ISkill {
  category: string;
  icon: string;
  items: string[];
}

export type ISkills = ISkill[];

const skillsData: ISkills = [
  {
    category: 'frontend',
    icon: 'Code',
    items: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Shadcn',
      'Material UI',
      'Bootstrap',
      'SASS',
      'jQuery',
      'Redux',
      'Zustand',
    ],
  },
  {
    category: 'backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'Firebase', 'REST APIs', 'Prisma', 'Mongoose'],
  },
  {
    category: 'database',
    icon: 'Database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase Firestore'],
  },
  {
    category: 'tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Docker', 'Webpack', 'Vite', 'ESLint', 'Prettier', 'Postman', 'Figma'],
  },
  {
    category: 'other',
    icon: 'Package',
    items: ['Agile', 'Scrum', 'JIRA', 'CI/CD', 'Problem Solving'],
  },
];

export default skillsData;
