import { portfolioItems } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Laptop, ServerCog, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import config from '@/config';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) {
    return { title: 'Portfolio Item Not Found' };
  }
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      url: `${config.base_url}/portfolio/${item.slug}`,
      images: [{ url: item.imageUrl, width: 1200, height: 630, alt: item.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.description,
      images: [item.imageUrl],
    },
  };
};

const PortfolioDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);

  if (!item) notFound();

  return (
    <main className="w-full">
      <section className="bg-muted/80 py-20 md:py-28 border-b">
        <div className="container px-4 mx-auto max-w-6xl text-center">
          <header className="space-y-2 animate-fade-in-up duration-700">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-12 w-12 text-primary animate-bounce" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline uppercase">
              {item.title}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {item.category}
            </p>
          </header>
          <div className="flex justify-center items-center gap-5 mt-6 flex-wrap">
            {item.liveLink && (
              <Link href={item.liveLink} target="_blank">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full hover:scale-110 transition-transform duration-200 group"
                >
                  <Globe className="h-6 w-6 group-hover:text-primary" />
                </Button>
              </Link>
            )}
            {item.githubClientLink && (
              <Link href={item.githubClientLink} target="_blank">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full hover:scale-110 transition-transform duration-200 group"
                >
                  <Laptop className="h-6 w-6 group-hover:text-primary" />
                </Button>
              </Link>
            )}
            {item.githubServerLink && (
              <Link href={item.githubServerLink} target="_blank">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full hover:scale-110 transition-transform duration-200 group"
                >
                  <ServerCog className="h-6 w-6 group-hover:text-primary" />
                </Button>
              </Link>
            )}
            {item.documentationLink && (
              <Link href={item.documentationLink} target="_blank">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full hover:scale-110 transition-transform duration-200 group"
                >
                  <BookOpen className="h-6 w-6 group-hover:text-primary" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <article className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border shadow-md animate-fade-in duration-700">
                <Image
                  src={item.imageUrl!}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-muted-foreground whitespace-pre-line text-md leading-relaxed animate-fade-in-up duration-700">
                {item.details}
              </p>
            </div>

            <div className="md:col-span-2 space-y-6 animate-fade-in-up duration-700">
              <Card>
                <CardHeader>
                  <CardTitle className="uppercase text-primary text-md font-semibold tracking-wide">
                    About Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {item.category}
                  </p>
                  <h2 className="text-xl font-bold font-headline uppercase text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground whitespace-pre-line text-sm sm:text-base">
                    {item.description}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="uppercase text-primary text-md font-semibold tracking-wide">
                    Technologies Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-3 py-1 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="uppercase text-primary text-md font-semibold tracking-wide">
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  {item.liveLink && (
                    <Link href={item.liveLink} target="_blank">
                      <Button variant="link" className="w-full justify-start gap-2">
                        <Globe className="w-5 h-5" /> Live Demo
                      </Button>
                    </Link>
                  )}
                  {item.githubClientLink && (
                    <Link href={item.githubClientLink} target="_blank">
                      <Button variant="link" className="w-full justify-start gap-2">
                        <Laptop className="w-5 h-5" /> Client Repo
                      </Button>
                    </Link>
                  )}
                  {item.githubServerLink && (
                    <Link href={item.githubServerLink} target="_blank">
                      <Button variant="link" className="w-full justify-start gap-2">
                        <ServerCog className="w-5 h-5" /> Server Repo
                      </Button>
                    </Link>
                  )}
                  {item.documentationLink && (
                    <Link href={item.documentationLink} target="_blank">
                      <Button variant="link" className="w-full justify-start gap-2">
                        <BookOpen className="w-5 h-5" /> Read Docs
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetailsPage;
