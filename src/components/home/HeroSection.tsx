import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import LucideIcon from '@/components/shared/LucideIcon';
import AnimatedTyping from '../shared/AnimatedTyping';
import { heroDescription, resumeLink, typingTitles } from '@/config/siteContent';

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl animate-blob" />
        <div className="absolute top-10 right-0 w-72 h-72 bg-gradient-to-tr from-indigo-500 to-transparent rounded-full blur-3xl animate-blob delay-2000" />
        <div className="absolute bottom-16 left-10 w-64 h-64 bg-gradient-to-tl from-purple-500 to-transparent rounded-full blur-3xl animate-blob delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-foreground font-headline animate-fade-in mb-4">
            <span className="block mb-2">Hello, I&apos;m</span>
            <span className="font-bold" aria-label="Animated typing text">
              <AnimatedTyping data={typingTitles} />
            </span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            {heroDescription}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <Button asChild size="lg" className="group">
              <Link href={resumeLink} target="_blank">
                Download CV{' '}
                <Download className="ml-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="#contact">
                Contact Info{' '}
                <Send className="ml-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 sm:gap-6 animate-fade-in" style={{ animationDelay: '900ms' }}>
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <LucideIcon name={icon} className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
