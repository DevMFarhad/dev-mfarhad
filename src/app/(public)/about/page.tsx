import AboutEducation from '@/components/about/AboutEducation';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import AboutJourney from '@/components/about/AboutJourney';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import HireMeSection from '@/components/home/HireMeSection';

export const metadata = {
  title: 'About Me',
  description: 'Learn more about my journey, skills, and philosophy as a web developer.',
};

const AboutPage = () => {
  return (
    <main className="w-full">
      <AboutHero />
      <AboutIntro />
      <section className="w-full">
        <AboutJourney />
        <AboutEducation />
        <AboutPhilosophy />
      </section>
      <HireMeSection />
    </main>
  );
};

export default AboutPage;
