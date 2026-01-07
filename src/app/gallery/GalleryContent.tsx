'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Team at Work
  { src: '/images/window-tint-team.webp', alt: 'Professional window tinting application - Protekt Auto team at work', category: 'Team at Work' },
  { src: '/images/workshop-action.png', alt: 'Expert technician applying window tint in our Sydney workshop', category: 'Team at Work' },
  { src: '/images/blue-subaru-polish.png', alt: 'Technician polishing blue Subaru with professional machine polisher', category: 'Team at Work' },
  { src: '/images/red-car-roof-polish.png', alt: 'Expert polishing red car roof with Rupes machine for ceramic coating prep', category: 'Team at Work' },
  { src: '/images/coating-application.png', alt: 'Professional technician applying ceramic coating to vehicle', category: 'Team at Work' },
  { src: '/images/ppf-red-car-heatgun.png', alt: 'Technician heat-forming PPF on red vehicle', category: 'Team at Work' },
  { src: '/images/ppf-squeegee.png', alt: 'Professional squeegee technique for PPF application', category: 'Team at Work' },
  { src: '/images/ppf-white-porsche.png', alt: 'Expert applying PPF to white Porsche front end', category: 'Team at Work' },
  { src: '/images/ppf-closeup.png', alt: 'Close-up of PPF application process showing wet installation', category: 'Team at Work' },

  // Paint Correction
  { src: '/images/white-lamborghini.png', alt: 'White Lamborghini Huracan showcasing flawless paint correction results', category: 'Paint Correction' },
  { src: '/images/red-ferrari-488.png', alt: 'Red Ferrari 488 paint correction service in professional workshop', category: 'Paint Correction' },
  { src: '/images/black-lamborghini-gallardo.png', alt: 'Black Lamborghini Gallardo with mirror finish outside Protekt Auto', category: 'Paint Correction' },
  { src: '/images/red-porsche-gt2rs.png', alt: 'Red Porsche GT2 RS professional paint correction and detailing', category: 'Paint Correction' },
  { src: '/images/white-subaru-sti.png', alt: 'White Subaru WRX STI paint correction for track-ready finish', category: 'Paint Correction' },
  { src: '/images/taillight-detail.png', alt: 'Precision detail work showcasing perfect paint correction finish', category: 'Paint Correction' },
  { src: '/images/green-amg-gtr.png', alt: 'Green Mercedes-AMG GT R paint correction in workshop', category: 'Paint Correction' },
  { src: '/images/paint-correction.webp', alt: 'Paint correction and polishing service', category: 'Paint Correction' },

  // Motorcycle
  { src: '/images/black-ducati-900.png', alt: 'Black Ducati 900 motorcycle detailing and paint correction', category: 'Motorcycle' },
  { src: '/images/orange-harley.png', alt: 'Harley-Davidson motorcycle receiving premium care at Protekt Auto', category: 'Motorcycle' },
  { src: '/images/moto-white-honda.png', alt: 'White Honda sportbike with professional ceramic coating protection', category: 'Motorcycle' },
  { src: '/images/moto-ducati-side.png', alt: 'Black Ducati 900 SD motorcycle complete protection package', category: 'Motorcycle' },
  { src: '/images/moto-ducati-rear.png', alt: 'Black Ducati 900 SD rear view showcasing premium ceramic finish', category: 'Motorcycle' },
  { src: '/images/moto-harley-burgundy.png', alt: 'Burgundy Harley-Davidson professional detailing in workshop', category: 'Motorcycle' },
  { src: '/images/moto-harley-shop.png', alt: 'Harley-Davidson motorcycle outside Protekt Auto Sydney workshop', category: 'Motorcycle' },
  { src: '/images/motorcycle-protection.webp', alt: 'Motorcycle ceramic coating protection', category: 'Motorcycle' },

  // Ceramic Coating
  { src: '/images/ceramic-coating.webp', alt: 'Premium ceramic coating service for new car protection', category: 'Ceramic Coating' },
  { src: '/images/red-kia-stinger.png', alt: 'Red Kia Stinger with ceramic coating under heat lamps in workshop', category: 'Ceramic Coating' },
  { src: '/images/blue-mazda-cx5.png', alt: 'Blue Mazda CX-5 receiving ceramic coating in modern workshop', category: 'Ceramic Coating' },
  { src: '/images/silver-pajero.png', alt: 'Silver Mitsubishi Pajero with fresh ceramic coating', category: 'Ceramic Coating' },
  { src: '/images/black-minivan.png', alt: 'Black minivan showcasing mirror-like ceramic coating finish', category: 'Ceramic Coating' },
  { src: '/images/blue-amg.png', alt: 'Blue Mercedes-Benz AMG with premium ceramic coating', category: 'Ceramic Coating' },
  { src: '/images/blue-bmw-m3.png', alt: 'Light blue BMW M3 with ceramic coating at night', category: 'Ceramic Coating' },

  // Window Tinting
  { src: '/images/window-tinting.webp', alt: 'Ceramic window tinting installation', category: 'Window Tinting' },
  { src: '/images/ram-showroom.png', alt: 'RAM 1500 TRX with professional ceramic window tinting in modern showroom', category: 'Window Tinting' },
  { src: '/images/tesla-white.png', alt: 'White Tesla Model 3 showcasing premium ceramic window tint', category: 'Window Tinting' },
  { src: '/images/camry-side.png', alt: 'Toyota Camry Hybrid with professional window tinting application', category: 'Window Tinting' },
  { src: '/images/camry-rear.png', alt: 'Toyota Camry showing completed window tint installation', category: 'Window Tinting' },

  // PPF
  { src: '/images/ppf.webp', alt: 'Paint protection film (PPF) application', category: 'PPF' },
  { src: '/images/ppf-blue-hood.png', alt: 'PPF application on blue car hood with wet installation technique', category: 'PPF' },
  { src: '/images/ppf-mercedes-wheel.png', alt: 'Mercedes-Benz wheel detail with PPF protection', category: 'PPF' },
  { src: '/images/ppf-blue-mustang.png', alt: 'Blue Ford Mustang receiving PPF installation on workshop lift', category: 'PPF' },
  { src: '/images/ppf-porsche-gt3.png', alt: 'Porsche GT3 with complete PPF protection package', category: 'PPF' },
  { src: '/images/ppf-bmw-workshop.png', alt: 'BMW receiving PPF installation in premium workshop', category: 'PPF' },
  { src: '/images/ppf-blue-golf-r.png', alt: 'Blue Volkswagen Golf R front bumper PPF detail', category: 'PPF' },
  { src: '/images/ppf-silver-s2000.png', alt: 'Silver Honda S2000 convertible with PPF protection', category: 'PPF' },

  // Full Packages
  { src: '/images/silver-pajero-2.png', alt: 'Mitsubishi Pajero complete detailing and protection package', category: 'Full Packages' },
  { src: '/images/packages.webp', alt: 'Complete protection packages for luxury vehicles', category: 'Full Packages' },
];

export default function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map((img) => img.category)))];

  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/ceramic-coating.webp)' }}
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">OUR WORK</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Showcasing our premium automotive detailing and protection services
          </p>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            See Our Work in Action
          </h2>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/JyqP0x17lvY?si=jWIBgsERnRwR6Np7&controls=0"
              title="Protekt Auto Detailing Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-foreground/60 text-sm text-center mt-4 italic">
            Premium automotive detailing and protection services in Sydney
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className="transition-all"
                data-testid={`button-filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-md cursor-pointer hover-elevate active-elevate-2 transition-all"
                onClick={() => setSelectedImage(image)}
                data-testid={`gallery-image-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium mb-1">{image.category}</p>
                    <p className="text-xs text-white/80 line-clamp-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/60 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-modal"
        >
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:text-white/80 z-10"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="font-medium mb-1">{selectedImage.category}</p>
              <p className="text-sm text-white/80">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
