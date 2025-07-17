import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import { aboutMe } from '@/lib/data';

const AboutJourney = () => (
  <div className="container mx-auto mb-10">
    <Card className="shadow-lg border">
      <CardContent className="p-6 sm:p-8 md:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-6 flex items-center gap-3">
          <Trophy className="w-8 h-8" />
          My Journey
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {aboutMe.journey}
        </p>
      </CardContent>
    </Card>
  </div>
);

export default AboutJourney;
