import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  link: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  variant?: 'default' | 'dark';
}

export default function RelatedServices({ services, variant = 'default' }: RelatedServicesProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-20 ${isDark ? 'bg-[#0a0a0a]' : 'bg-muted/30'}`} data-testid="related-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-foreground'}`}>
            You Might Also Like
          </h2>
          <p className={`text-lg ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>
            Explore our complementary protection services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card
                className={`hover-elevate transition-all cursor-pointer group ${isDark ? 'bg-black/40 border-white/10' : ''}`}
                data-testid={`related-service-${index}`}
              >
                <CardContent className="p-6">
                  <h3 className={`font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-4 text-sm ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
