import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import ServiceCard from '../ServiceCard';
import heroImage from '@assets/generated_images/Ceramic_coating_hero_image_2e9cd7e0.png';

export default function ServiceCardExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-sm">
          <ServiceCard
            title="Ceramic Coating"
            description="Protect your paint with our premium ceramic and graphene coatings for maximum durability and gloss"
            image={heroImage}
            link="/new-car-protection"
          />
        </div>
      </div>
    </QueryClientProvider>
  );
}
