import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skills } from '@/lib/data';
import LucideIcon from '../shared/LucideIcon';
import { ISkill } from '@/lib/data/skillsData';

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const SkillTabList = () => {
  return (
    <TabsList className="grid gap-2 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8 h-auto flex-wrap">
      {skills.map(({ category, icon }) => {
        return (
          <TabsTrigger key={category} value={category} className="py-2 text-xs sm:text-sm">
            <LucideIcon name={icon} />
            {capitalize(category)}
          </TabsTrigger>
        );
      })}
    </TabsList>
  );
};

const SkillCard = ({ skill }: { skill: ISkill }) => {
  const { category, icon, items } = skill;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-headline font-semibold">
          <LucideIcon name={icon} className="h-7 w-7 text-primary" />
          {capitalize(category)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {items.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-transform hover:scale-105"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32 bg-background border-t">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16 animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Technical Stack
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2 mb-4">
          Tools & Technologies I Work With
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here’s a categorized overview of the modern frameworks, libraries, tools, and
          methodologies I use to deliver performant, scalable, and maintainable software.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-card p-4 sm:p-8 rounded-lg shadow-xl border animate-slide-up">
        <Tabs defaultValue={skills[0].category} className="w-full">
          <SkillTabList />
          {skills.map((skill) => (
            <TabsContent key={skill.category} value={skill.category}>
              <SkillCard skill={skill} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  </section>
);

export default SkillsSection;
