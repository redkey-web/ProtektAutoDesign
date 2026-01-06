import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-display text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground/60 text-lg mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/packages">
              <ArrowLeft className="w-5 h-5 mr-2" />
              View Packages
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
