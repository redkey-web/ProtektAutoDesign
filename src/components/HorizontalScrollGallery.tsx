'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface HorizontalScrollGalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
  variant?: 'light' | 'dark';
}

export default function HorizontalScrollGallery({
  title = 'Our Work',
  subtitle,
  images,
  variant = 'light',
}: HorizontalScrollGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const isDark = variant === 'dark';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section
        className={`py-24 md:py-32 relative overflow-hidden ${
          isDark ? 'bg-[#0a0a0a]' : 'bg-background'
        }`}
      >
        {/* Dark variant decorations */}
        {isDark && (
          <>
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: 'url(/images/pattern-logo.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '80px 80px',
                backgroundAttachment: 'fixed',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)',
              }}
              aria-hidden="true"
            />
          </>
        )}

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex items-end justify-between">
              <div>
                <h2
                  className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {title}
                </h2>
                {subtitle && (
                  <p
                    className={`text-lg max-w-2xl ${
                      isDark ? 'text-white/60' : 'text-foreground/60'
                    }`}
                  >
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Navigation Arrows */}
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-black/5 hover:bg-black/10 text-foreground'
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-black/5 hover:bg-black/10 text-foreground'
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Left spacer for alignment */}
            <div className="flex-shrink-0 w-[calc((100vw-80rem)/2)] hidden xl:block" />

            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="relative flex-shrink-0 w-[320px] md:w-[400px] lg:w-[480px] aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer snap-start"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {(image.title || image.subtitle) && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.title && (
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {image.title}
                      </h3>
                    )}
                    {image.subtitle && (
                      <p className="text-white/80 text-sm">{image.subtitle}</p>
                    )}
                  </div>
                )}
              </button>
            ))}

            {/* Right spacer for alignment */}
            <div className="flex-shrink-0 w-[calc((100vw-80rem)/2)] hidden xl:block" />
          </div>

          {/* Mobile scroll hint */}
          <p
            className={`text-center text-sm mt-6 md:hidden ${
              isDark ? 'text-white/40' : 'text-foreground/40'
            }`}
          >
            Swipe to see more
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          {(selectedImage.title || selectedImage.subtitle) && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              {selectedImage.title && (
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {selectedImage.title}
                </h3>
              )}
              {selectedImage.subtitle && (
                <p className="text-white/70">{selectedImage.subtitle}</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
