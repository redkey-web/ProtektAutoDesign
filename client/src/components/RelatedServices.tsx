import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  link: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-20 bg-muted/30" data-testid="related-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            You Might Also Like
          </h2>
          <p className="text-foreground/70 text-lg">
            Explore our complementary protection services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card
                className="hover-elevate transition-all cursor-pointer group"
                data-testid={`related-service-${index}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm">
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
