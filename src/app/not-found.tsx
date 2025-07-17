import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Not Found',
  description: 'Sorry, the page you are looking for does not exist or has been moved.',
};

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <Card className="w-full max-w-md text-center shadow-xl border-muted">
        <CardHeader className="flex flex-col items-center gap-2">
          <AlertCircle className="w-12 h-12 text-destructive" />
          <CardTitle className="text-4xl font-bold text-foreground">404</CardTitle>
          <p className="text-base text-muted-foreground font-medium">Page Not Found</p>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/">Go Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFoundPage;
