'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BentoImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface BentoImageGridProps {
  images: BentoImage[];
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'dense' | 'asymmetric';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function BentoImageGrid({
  images,
  title,
  subtitle,
  variant = 'default',
  theme = 'light',
  className = '',
}: BentoImageGridProps) {
  const isDark = theme === 'dark';
  const [selectedImage, setSelectedImage] = useState<BentoImage | null>(null);

  // Ensure we have enough images
  const displayImages = images.slice(0, 6);

  return (
    <section className={`py-16 ${isDark ? 'bg-transparent' : 'bg-muted/30'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white/90' : 'text-foreground'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-foreground/70'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Bento Grid - Asymmetric Layout */}
        {variant === 'asymmetric' && displayImages.length >= 5 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {/* Large image - spans 2 cols and 2 rows */}
            <div
              className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(displayImages[0])}
            >
              <Image
                src={displayImages[0].src}
                alt={displayImages[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {displayImages[0].title && (
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-lg font-semibold">{displayImages[0].title}</p>
                  {displayImages[0].subtitle && (
                    <p className="text-white/70 text-sm">{displayImages[0].subtitle}</p>
                  )}
                </div>
              )}
            </div>

            {/* Right column - 2 stacked images */}
            {displayImages.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
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
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium truncate">{image.title}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom row - 2 wide images */}
            {displayImages.slice(3, 5).map((image, index) => (
              <div
                key={index + 3}
                className="col-span-2 md:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {image.title && (
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium">{image.title}</p>
                    {image.subtitle && (
                      <p className="text-white/70 text-xs">{image.subtitle}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Dense Grid - More uniform */}
        {variant === 'dense' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {displayImages.map((image, index) => (
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
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {image.title && (
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium truncate">{image.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Default Grid - Balanced */}
        {variant === 'default' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {image.title && (
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className={`font-semibold ${index === 0 ? 'text-lg' : 'text-sm'}`}>{image.title}</p>
                    {image.subtitle && (
                      <p className="text-white/70 text-sm mt-1">{image.subtitle}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
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
