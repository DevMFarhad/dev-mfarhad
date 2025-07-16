import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { linkedinLink } from '@/config/siteContent';

const HireMeSection = () => {
  return (
    <section className="border-t bg-muted/60 text-muted-foreground">
      <div className="container mx-auto py-24  flex flex-col items-center text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-headline">
          I know your mind wants to hire me <span aria-hidden="true">👀</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          The button below will make it easy
        </p>
        <Button asChild variant="outline" className="gap-2" aria-label="Hire Me">
          <Link href={linkedinLink}>
            Hire Me <span aria-hidden="true">❤️</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HireMeSection;
