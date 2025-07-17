import Image from 'next/image';
import { Download, Send } from 'lucide-react'; // more elegant icon
import { aboutMe } from '@/lib/data';
import Link from 'next/link';
import { linkedinLink, resumeLink, typingTitles } from '@/config/siteContent';
import { Button } from '../ui/button';
import AnimatedTyping from '../shared/AnimatedTyping';

const AboutIntro = () => {
  return (
    <section
      id="about-intro"
      className="w-full py-20 md:py-28 bg-background"
      aria-labelledby="who-i-am-heading"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 w-full">
          <div className="relative w-full h-80 md:h-auto md:min-h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={aboutMe.imageUrl}
              alt="Photo of Mohammad Farhad"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline leading-tight w-full md:w-3/4">
              <AnimatedTyping data={typingTitles} delay={3000} />
            </h2>
          </div>

          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed tracking-tight">
            {aboutMe.introduction}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed tracking-tight">
            {aboutMe.mission}
          </p>
          <div
            className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <Button asChild size="lg" variant="outline" className="group uppercase">
              <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
                Download CV
                <Download className="ml-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group uppercase">
              <Link href={linkedinLink}>
                Hire Me
                <Send className="ml-2 h-5 w-5 group-hover:rotate-45 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
