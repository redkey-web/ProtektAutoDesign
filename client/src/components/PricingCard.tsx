import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  guarantee?: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
}

export default function PricingCard({
  name,
  price,
  guarantee,
  features,
  popular = false,
  ctaText = 'Get Quote',
}: PricingCardProps) {
  return (
    <Card
      className={`relative overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 ${
        popular ? 'border-primary border-2' : ''
      }`}
      data-testid={`card-pricing-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {popular && (
        <Badge
          className="absolute top-4 right-4 bg-primary text-primary-foreground"
          data-testid="badge-popular"
        >
          Most Popular
        </Badge>
      )}

      <CardHeader className="space-y-4">
        <div>
          <h3
            className="font-display text-2xl font-bold text-foreground mb-2"
            data-testid={`text-package-name-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span
              className="text-4xl font-bold text-primary"
              data-testid={`text-price-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {price}
            </span>
          </div>
          {guarantee && (
            <p className="text-sm text-muted-foreground mt-1" data-testid="text-guarantee">
              {guarantee}
            </p>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
              data-testid={`list-feature-${index}`}
            >
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          variant={popular ? 'default' : 'outline'}
          className="w-full"
          data-testid="button-get-quote"
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}
