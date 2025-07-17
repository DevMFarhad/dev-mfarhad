import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PortfolioHero = () => {
  return (
    <section className="w-full border-b bg-muted/50 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="h-12 w-12 text-primary animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Showcasing My <span className="text-primary">Passion Projects</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6">
          Every project tells a story of problem-solving, design, and technical mastery. Dive into
          the work I’ve built using modern tools and clean code.
        </p>
        <Button asChild size="lg" className="uppercase">
          <Link href="#projects">Explore Projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default PortfolioHero;
