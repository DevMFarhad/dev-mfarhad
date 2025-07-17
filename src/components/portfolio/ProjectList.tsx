import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PortfolioCard from '../PortfolioItemCard';
import { portfolioData } from '@/lib/data/portfolioData';
import { Button } from '../ui/button';

const categories = ['All', ...Array.from(new Set(portfolioData.map((item) => item.category)))];

const getFilteredProjects = (category: string) => {
  if (category === 'All') return portfolioData;
  return portfolioData.filter((item) => item.category === category);
};

const ProjectList = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="projects">
      <div className="container mx-auto px-4 max-w-6xl space-y-10">
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid gap-2 bg-transparent max-w-4xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8 h-auto flex-wrap">
            {categories.map((category) => (
              <Button variant="outline" key={category} asChild>
                <TabsTrigger
                  value={category}
                  className="py-2 text-xs sm:text-sm cursor-pointer px-5"
                >
                  {category}
                </TabsTrigger>
              </Button>
            ))}
          </TabsList>

          {categories.map((category) => {
            const filtered = getFilteredProjects(category);
            return (
              <TabsContent key={category} value={category} className="mt-10">
                {filtered.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filtered.map((item, index) => (
                      <div
                        key={item.slug}
                        className="animate-slide-up"
                        style={{
                          animationDelay: `${index * 150}ms`,
                          animationFillMode: 'backwards',
                        }}
                      >
                        <PortfolioCard item={item} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">
                      No portfolio items match your criteria.
                    </p>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectList;
