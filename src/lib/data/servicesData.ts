export interface IService {
  icon: string;
  title: string;
  description: string;
}

const servicesData: IService[] = [
  {
    icon: 'Globe',
    title: 'Web Application Development',
    description:
      'Full-stack development of robust, scalable, and secure web applications tailored to your business needs.',
  },
  {
    icon: 'Layout',
    title: 'Frontend Development',
    description:
      'Creating beautiful, responsive, and intuitive user interfaces with modern frameworks like React and Next.js.',
  },
  {
    icon: 'Server',
    title: 'Backend Development',
    description:
      'Building powerful server-side logic, APIs, and database solutions to support your application.',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design Implementation',
    description:
      'Translating complex design mockups into pixel-perfect, interactive user experiences.',
  },
  {
    icon: 'Database',
    title: 'Database Management',
    description:
      'Designing and managing efficient database schemas with both SQL and NoSQL technologies like MongoDB.',
  },
  {
    icon: 'Link',
    title: 'API Integration',
    description:
      'Seamlessly connecting your application with third-party services and APIs to extend functionality.',
  },
];

export default servicesData;
