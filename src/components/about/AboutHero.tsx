import { Sparkles } from 'lucide-react';

const AboutHero = () => {
  return (
    <section
      id="about-hero"
      className="w-full bg-muted py-20 md:py-28 border-b"
      aria-labelledby="about-heading"
    >
      <div className="container px-4 mx-auto text-center max-w-4xl">
        <div className="flex justify-center mb-4">
          <Sparkles className="h-8 w-8 text-primary animate-bounce" />
        </div>

        <h1
          id="about-heading"
          className="text-4xl sm:text-5xl font-bold font-headline text-foreground mb-4"
        >
          Get to Know Me
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          I&apos;m a passionate full stack developer driven by curiosity, creativity, and a
          commitment to building meaningful digital experiences. Explore my journey, expertise, and
          the principles that guide my work.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
