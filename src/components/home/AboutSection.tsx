import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { aboutMe } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/50 py-24 md:py-32 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Image column */}
          <div className="relative w-full h-80 md:h-auto md:min-h-[450px] rounded-lg overflow-hidden shadow-xl">
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

          {/* Text column */}
          <div className="space-y-6 h-full flex flex-col justify-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline leading-tight">
                Engineering Meaningful Web Experiences with Purpose
              </h2>
            </div>
            <p className="text-muted-foreground/80 text-base sm:text-lg leading-relaxed">
              {aboutMe.introduction}
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {aboutMe.mission}
            </p>
            <Button asChild size="lg" variant="outline" className="uppercase mt-4">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
