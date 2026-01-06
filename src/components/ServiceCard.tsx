import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <Link href={link}>
      <Card
        className="group relative overflow-hidden border-0 bg-card hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
        data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-testid={`img-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3
            className="font-display text-2xl font-bold text-white mb-2"
            data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h3>
          <p
            className="text-white/80 text-sm mb-4 line-clamp-2"
            data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {description}
          </p>
          <div
            className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
            data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
