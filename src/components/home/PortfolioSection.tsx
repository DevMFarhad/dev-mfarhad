import { portfolioItems } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PortfolioItemCard from '../PortfolioItemCard';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background border-t">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating impactful
            solutions.
          </p>
        </div>
        {portfolioItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <div
                key={item.slug}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
              >
                <PortfolioItemCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No portfolio items to display yet.</p>
        )}
        <div className="text-center mt-16 animate-fade-in">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
