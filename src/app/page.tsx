import AboutSection from '@/components/home/AboutSection';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import SkillsSection from '@/components/home/SkillSection';

const Home = () => {
  return (
    <main className="w-full h-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
    </main>
  );
};

export default Home;
