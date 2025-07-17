import PortfolioHero from '@/components/portfolio/PortfolioHero';
import ProjectList from '@/components/portfolio/ProjectList';
import { portfolioData } from '@/lib/data/portfolioData';

const categories = ['All', ...Array.from(new Set(portfolioData.map((item) => item.category)))];
const tags = portfolioData.map((project) => project.title);

export const metadata = {
  title: 'Portfolio',
  description:
    'Explore the professional portfolio of Mohammad Farhad, a passionate Full Stack Developer. Browse featured projects in web development, AI, and tools built using modern technologies like Next.js, TypeScript, and Tailwind CSS.',
  keywords: [
    'Portfolio',
    'Full Stack Developer',
    'Mohammad Farhad',
    'Web Development Projects',
    'Next.js Portfolio',
    'Tailwind CSS',
    'TypeScript',
    'AI Projects',
    'Open Source Tools',
    ...categories,
    ...tags,
  ],
};

const PortfolioPage = () => {
  return (
    <main className="w-full">
      <PortfolioHero />
      <ProjectList />
    </main>
  );
};

export default PortfolioPage;
