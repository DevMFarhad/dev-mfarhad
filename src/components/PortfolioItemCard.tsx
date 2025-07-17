import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IPortfolioItem } from '@/lib/data/portfolioData';
import { BookOpen, Globe } from 'lucide-react';
import { Button } from './ui/button';

type Props = {
  item: IPortfolioItem;
};

const PortfolioCard = async ({ item }: Props) => {
  const docsLink =
    item.documentationLink ||
    item.githubClientLink ||
    item.githubServerLink ||
    `/portfolio/${item.slug}`;

  return (
    <Card className="group h-full overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-0 pb-4">
      <Link
        href={`/portfolio/${item.slug}`}
        className="block relative w-full aspect-[16/9] sm:aspect-video overflow-hidden"
      >
        <Image
          src={item.imageUrl || 'https://placehold.co/600x400.png'}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </Link>

      <Link href={`/portfolio/${item.slug}`} className="block px-5 pt-4 m-0">
        <CardContent className="space-y-3 px-0 pb-0">
          <Badge variant="outline" className="text-xs w-fit">
            {item.category}
          </Badge>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
        </CardContent>
      </Link>

      <CardFooter className="space-x-3">
        <Link href={item.liveLink || docsLink} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline">
            Live Site
            <Globe className="ml-1 h-4 w-4" />
          </Button>
        </Link>

        <Link href={docsLink} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline">
            Docs
            <BookOpen className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
