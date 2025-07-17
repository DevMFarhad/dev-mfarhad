import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, BriefcaseBusiness } from 'lucide-react';
import { aboutMe } from '@/lib/data';

const AboutPhilosophy = () => (
  <div className="container mx-auto mb-10 p-5">
    <Card className="shadow-lg border">
      <CardContent className="p-6 sm:p-8 md:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-8 flex items-center gap-3">
          <Lightbulb className="w-8 h-8" />
          My Philosophy
        </h2>
        <div className="space-y-6">
          {aboutMe.philosophy.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <BriefcaseBusiness className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AboutPhilosophy;
