import AboutSection from '@/components/home/AboutSection';
import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/home/SkillSection';

const Home = () => {
  return (
    <main className="w-full h-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
  );
};

export default Home;
