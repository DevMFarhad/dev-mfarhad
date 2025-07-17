import { aboutMe } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const AboutEducation = () => {
  const educationHistory = aboutMe.education;
  return (
    <div className="container mx-auto mb-10 p-5">
      <Card className="border shadow-lg ">
        <CardHeader className="px-6 sm:px-8 md:px-10 pt-10 pb-0">
          <CardTitle className="text-3xl sm:text-4xl font-bold font-headline text-primary flex items-center gap-3">
            <GraduationCap className="w-8 h-8 sm:w-9 sm:h-9" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 sm:px-8 md:px-10 pb-10 pt-0">
          <ul className="space-y-8">
            {educationHistory.map((edu, index) => (
              <li key={index} className="relative pl-10">
                <div className="absolute left-0 top-1.5 h-full flex items-start">
                  <svg
                    className="w-5 h-full text-border"
                    viewBox="0 0 20 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="10"
                      y1="12"
                      x2="10"
                      y2="100"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                    />
                    <circle cx="10" cy="10" r="6" className="fill-primary" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/80">{edu.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutEducation;
