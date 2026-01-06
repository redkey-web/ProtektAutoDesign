'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WorkImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface FeaturedWorkShowcaseProps {
  title?: string;
  subtitle?: string;
  featuredImage: WorkImage;
  gridImages: WorkImage[];
  className?: string;
}

export default function FeaturedWorkShowcase({
  title = "Our Work",
  subtitle,
  featuredImage,
  gridImages,
  className = "",
}: FeaturedWorkShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<WorkImage | null>(null);

  return (
    <section className={`py-16 bg-card ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Featured Large Image */}
        <div className="mb-4">
          <div
            className="relative w-full aspect-[21/9] rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(featuredImage)}
          >
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {featuredImage.title && (
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-xl font-semibold">{featuredImage.title}</p>
                {featuredImage.subtitle && (
                  <p className="text-white/80 text-sm mt-1">{featuredImage.subtitle}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Grid of smaller images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gridImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {image.title && (
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <p className="text-sm font-medium truncate">{image.title}</p>
                  {image.subtitle && (
                    <p className="text-white/70 text-xs truncate">{image.subtitle}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {selectedImage.title && (
              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <p className="text-xl font-semibold">{selectedImage.title}</p>
                {selectedImage.subtitle && (
                  <p className="text-white/70 mt-1">{selectedImage.subtitle}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
