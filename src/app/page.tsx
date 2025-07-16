import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import HeroSection from '@/components/home/HeroSection';
import HireMeSection from '@/components/home/HireMeSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ServicesSection from '@/components/home/ServicesSection';
import SkillsSection from '@/components/home/SkillSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Home = () => {
  return (
    <main className="w-full h-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <HireMeSection />
    </main>
  );
};

export default Home;
