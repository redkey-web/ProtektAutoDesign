'use client';

import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface WorkImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  vehicle?: string;
  rating?: number;
}

interface FeaturedWorkShowcaseProps {
  title?: string;
  subtitle?: string;
  featuredImage: WorkImage;
  gridImages: WorkImage[];
  className?: string;
  variant?: 'default' | 'dark' | 'metallic';
  layout?: 'default' | 'horizontal-scroll' | 'pinned-horizontal';
  testimonials?: Testimonial[];
}

// Default testimonials for the scroll section
const defaultTestimonials: Testimonial[] = [
  {
    quote: "Best tint job in Sydney. The ceramic tint keeps my Tesla so much cooler, even in peak summer.",
    author: "Michael T.",
    vehicle: "Tesla Model 3",
    rating: 5,
  },
  {
    quote: "Professional service from start to finish. My RAM looks incredible with the 20% all round.",
    author: "David K.",
    vehicle: "RAM 1500",
    rating: 5,
  },
  {
    quote: "They took their time to get it perfect. No bubbles, no dust - just flawless work.",
    author: "Sarah M.",
    vehicle: "Toyota Camry",
    rating: 5,
  },
  {
    quote: "Lifetime warranty gave me confidence. Worth every dollar for the heat rejection alone.",
    author: "James R.",
    vehicle: "Mitsubishi Pajero",
    rating: 5,
  },
];

export default function FeaturedWorkShowcase({
  title = "Our Work",
  subtitle,
  featuredImage,
  gridImages,
  className = "",
  variant = 'default',
  layout = 'default',
  testimonials = defaultTestimonials,
}: FeaturedWorkShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<WorkImage | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstImageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isPinnedActive, setIsPinnedActive] = useState(false);
  const isDark = variant === 'dark';
  const isMetallic = variant === 'metallic';
  const isHorizontal = layout === 'horizontal-scroll';
  const isPinned = layout === 'pinned-horizontal';

  // Combine all images for horizontal scroll
  const allImages = [featuredImage, ...gridImages];

  // GSAP ScrollTrigger for pinned horizontal scroll with intro zoom
  useEffect(() => {
    if (!isPinned || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const container = pinnedContainerRef.current;
    const track = trackRef.current;
    const firstImage = firstImageRef.current;

    if (!container || !track) return;

    // Get all image cards for parallax effects
    const imageCards = track.querySelectorAll('.gallery-card');

    // Calculate total scroll distance
    const getScrollDistance = () => track.scrollWidth + window.innerWidth * 0.5;
    const getScrollAmount = () => -track.scrollWidth;

    // Create main timeline with smoother scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        scrub: 2,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnter: () => setIsPinnedActive(true),
        onLeave: () => setIsPinnedActive(false),
        onEnterBack: () => setIsPinnedActive(true),
        onLeaveBack: () => setIsPinnedActive(false),
      },
    });

    // Phase 1: Zoom in on first image (RAM 1500) - first 10% of scroll (faster zoom)
    if (firstImage) {
      tl.fromTo(
        firstImage,
        { scale: 0.9, opacity: 0.95 },
        { scale: 1, opacity: 1, duration: 0.1, ease: 'power3.out' },
        0
      );
    }

    // Phase 2: Horizontal scroll with easing (remaining 90%)
    tl.to(
      track,
      { x: getScrollAmount, duration: 0.9, ease: 'power1.inOut' },
      0.1
    );

    // Parallax effect - images at different depths/speeds (no fade)
    imageCards.forEach((card, index) => {
      if (index === 0) return; // Skip first image (has zoom effect)

      // Alternate parallax speeds for depth
      const startX = index % 2 === 0 ? -40 : 25;

      gsap.fromTo(card,
        { x: startX, scale: 0.96 },
        {
          x: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl,
            start: 'left 95%',
            end: 'left 50%',
            scrub: 1.5,
          },
        }
      );
    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, [isPinned]);

  // Mouse tracking for metallic sparkle effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  }, []);

  useEffect(() => {
    if (isMetallic && sectionRef.current) {
      const section = sectionRef.current;
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMetallic, handleMouseMove]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${isPinned ? 'py-0' : 'py-16'} relative overflow-hidden ${
        isMetallic ? 'bg-[#2a2a2a]' : isDark ? 'bg-[#0a0a0a]' : 'bg-card'
      } ${className}`}
    >
      {isMetallic && (
        <>
          {/* Smooth metallic silver base */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(160deg,
                  #404040 0%,
                  #606060 25%,
                  #787878 50%,
                  #606060 75%,
                  #404040 100%
                )
              `,
            }}
          />

          {/* Subtle sheen layer */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                linear-gradient(120deg,
                  transparent 0%,
                  rgba(255,255,255,0.1) 40%,
                  rgba(255,255,255,0.15) 50%,
                  rgba(255,255,255,0.1) 60%,
                  transparent 100%
                )
              `,
            }}
          />

          {/* Soft mouse-following glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  ellipse 60% 50% at ${mousePos.x}% ${mousePos.y}%,
                  rgba(255,255,255,0.12) 0%,
                  rgba(255,255,255,0.05) 40%,
                  transparent 70%
                )
              `,
              transition: 'background 0.3s ease-out',
            }}
          />

          {/* Subtle edge shading */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.15) 100%)',
            }}
          />
        </>
      )}

      {isDark && (
        <>
          {/* Dark dramatic background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

          {/* Branded glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[800px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />
          </div>

          {/* Pattern Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: 'url(/images/pattern-logo.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '60px 60px',
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)'
          }} />
        </>
      )}

      <div className={`relative z-10 ${isHorizontal || isPinned ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {/* Section Header - hidden for pinned layout */}
        {(title || subtitle) && !isPinned && (
          <div className={`text-center mb-10 ${isHorizontal ? 'px-4 sm:px-6 lg:px-8' : ''}`}>
            {title && (
              <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${
                isMetallic ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]' :
                isDark ? 'text-white' : 'text-foreground'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${
                isMetallic ? 'text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]' :
                isDark ? 'text-white/60' : 'text-foreground/70'
              }`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {isPinned ? (
          /* Pinned Horizontal Scroll Layout - GSAP ScrollTrigger with Testimonials */
          <div ref={pinnedContainerRef} className="relative overflow-hidden">
            {/* Horizontal track - contained within viewport */}
            <div
              ref={trackRef}
              className="flex items-center h-screen px-4 md:px-8 will-change-transform"
              style={{ gap: '0' }} // No gap - we'll use negative margins for overlap
            >
              {allImages.map((image, index) => {
                // Custom sizing for each image - all larger
                const sizePatterns = [
                  { width: 'w-[92vw] md:w-[75vw] lg:w-[65vw]', aspect: 'aspect-[16/9]', objPos: 'object-center' },    // 0: RAM 1500 - hero big
                  { width: 'w-[85vw] md:w-[65vw] lg:w-[55vw]', aspect: 'aspect-[16/10]', objPos: 'object-center' },   // 1: Tesla Model 3 - wider
                  { width: 'w-[80vw] md:w-[58vw] lg:w-[48vw]', aspect: 'aspect-[4/3]', objPos: 'object-center' },     // 2: Toyota Camry
                  { width: 'w-[75vw] md:w-[52vw] lg:w-[42vw]', aspect: 'aspect-[4/3]', objPos: 'object-center' },     // 3: Expert Team
                  { width: 'w-[82vw] md:w-[60vw] lg:w-[50vw]', aspect: 'aspect-[4/3]', objPos: 'object-bottom' },     // 4: Finished Work - show bottom
                  { width: 'w-[78vw] md:w-[55vw] lg:w-[45vw]', aspect: 'aspect-[4/3]', objPos: 'object-center' },     // 5: Expert Application
                  { width: 'w-[90vw] md:w-[70vw] lg:w-[60vw]', aspect: 'aspect-[21/9]', objPos: 'object-center' },    // 6: Family Vehicle - ultra wide / zoomed out
                  { width: 'w-[75vw] md:w-[52vw] lg:w-[42vw]', aspect: 'aspect-[4/3]', objPos: 'object-center' },     // 7: Mitsubishi Pajero
                ];
                const pattern = sizePatterns[index % sizePatterns.length];

                // Vertical offset for staggered look - more dramatic
                const verticalOffsets = [
                  'translate-y-0',
                  '-translate-y-8 md:-translate-y-16',
                  'translate-y-6 md:translate-y-12',
                  '-translate-y-4 md:-translate-y-8',
                  'translate-y-10 md:translate-y-20',
                  '-translate-y-6 md:-translate-y-12',
                  'translate-y-4 md:translate-y-8',
                  '-translate-y-10 md:-translate-y-20',
                ];
                const vOffset = verticalOffsets[index % verticalOffsets.length];

                // Z-index pattern for overlap effect - images stay below testimonials
                const zIndexes = [30, 20, 25, 15, 22, 18, 28, 16];
                const zIndex = zIndexes[index % zIndexes.length];

                // Margin for overlap (negative on left side except first)
                const overlapMargin = index === 0 ? 'ml-0' : '-ml-8 md:-ml-16 lg:-ml-24';

                // Testimonial placement - show BEFORE specific images so they layer on top
                // Michael T before Toyota Camry (index 2), David K before Finished Work (index 4),
                // Sarah M before Family Vehicle (index 6), James R after Pajero (index 7)
                const testimonialMap: Record<number, number> = {
                  2: 0,  // Michael T appears before Toyota Camry
                  4: 1,  // David K appears before Finished Work
                  6: 2,  // Sarah M appears before Family Vehicle
                  8: 3,  // James R appears at the end (after all images)
                };
                const showTestimonialBefore = testimonialMap[index] !== undefined && testimonials[testimonialMap[index]];
                const testimonialBefore = showTestimonialBefore ? testimonials[testimonialMap[index]] : null;

                // Show James R at the end after all images
                const showTestimonialAfter = index === allImages.length - 1 && testimonials[3];
                const testimonialAfter = showTestimonialAfter ? testimonials[3] : null;

                // Custom text positions per image
                // 0: RAM - default (bottom left), 1: Tesla - top right, 6: Van - middle bottom, 7: Pajero - top left
                const textPositions: Record<number, string> = {
                  0: 'bottom-4 md:bottom-5 left-4 md:left-5 right-4 md:right-5', // RAM - bottom
                  1: 'top-4 md:top-5 right-4 md:right-5 left-auto text-right',   // Tesla - top right
                  6: 'bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 text-center w-[90%]', // Van - middle bottom center
                  7: 'top-4 md:top-5 left-4 md:left-5 right-auto',               // Pajero - top left
                };
                const textPosition = textPositions[index] || 'bottom-4 md:bottom-5 left-4 md:left-5 right-4 md:right-5';

                // Testimonial vertical offsets - alternate positions
                const testimonialOffsets = [
                  'translate-y-16 md:translate-y-24',
                  '-translate-y-12 md:-translate-y-20',
                  'translate-y-20 md:translate-y-28',
                  '-translate-y-16 md:-translate-y-24',
                ];

                const renderTestimonial = (t: Testimonial, offsetIndex: number) => (
                  <div
                    className="gallery-card flex-shrink-0 -ml-4 md:-ml-8 lg:-ml-12"
                    style={{ zIndex: 50 }}
                  >
                    <div className={`
                      w-[70vw] md:w-[45vw] lg:w-[35vw]
                      p-6 md:p-8 lg:p-10
                      rounded-xl md:rounded-2xl
                      backdrop-blur-xl
                      ${isMetallic
                        ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20'
                        : 'bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30'
                      }
                      shadow-2xl
                      transform ${testimonialOffsets[offsetIndex % testimonialOffsets.length]}
                    `}>
                      {/* Quote icon */}
                      <div className={`text-4xl md:text-5xl mb-3 ${isMetallic ? 'text-white/40' : 'text-primary/50'}`}>
                        "
                      </div>

                      {/* Quote text */}
                      <p className={`text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6 ${
                        isMetallic ? 'text-white/90' : 'text-white/90'
                      }`}>
                        {t.quote}
                      </p>

                      {/* Stars */}
                      {t.rating && (
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <svg key={i} className={`w-5 h-5 ${isMetallic ? 'text-amber-300' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      )}

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                          isMetallic ? 'bg-white/20 text-white' : 'bg-primary/30 text-white'
                        }`}>
                          {t.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{t.author}</p>
                          {t.vehicle && (
                            <p className={`text-sm ${isMetallic ? 'text-white/60' : 'text-white/60'}`}>
                              {t.vehicle}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <div key={index} className="flex items-center" style={{ zIndex }}>
                    {/* Testimonial BEFORE image - layers on top of next image */}
                    {testimonialBefore && renderTestimonial(testimonialBefore, testimonialMap[index])}

                    {/* Image Card */}
                    <div
                      className={`gallery-card flex-shrink-0 cursor-pointer ${vOffset} ${testimonialBefore ? '-ml-4 md:-ml-8 lg:-ml-12' : overlapMargin}`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <div
                        ref={index === 0 ? firstImageRef : undefined}
                        className={`relative ${pattern.width} ${pattern.aspect} rounded-xl md:rounded-2xl overflow-hidden group shadow-xl md:shadow-2xl transition-all duration-500`}
                        style={index === 0 ? { transformOrigin: 'center center' } : undefined}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${pattern.objPos}`}
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 65vw, 55vw"
                          priority={index < 3}
                        />
                        {/* Gradient - adjust based on text position */}
                        <div className={`absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity ${
                          index === 1 || index === 7
                            ? 'bg-gradient-to-b from-black/80 via-black/10 to-transparent'
                            : 'bg-gradient-to-t from-black/80 via-black/10 to-transparent'
                        }`} />
                        {image.title && (
                          <div className={`absolute ${textPosition} text-white transform group-hover:translate-y-0 transition-transform duration-300`}>
                            <p className={`font-display font-bold ${index === 0 ? 'text-xl md:text-2xl lg:text-3xl' : 'text-sm md:text-base lg:text-xl'}`}>
                              {image.title}
                            </p>
                            {image.subtitle && (
                              <p className="text-white/70 text-xs md:text-sm mt-1">{image.subtitle}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Testimonial AFTER last image (James R) */}
                    {testimonialAfter && renderTestimonial(testimonialAfter, 3)}
                  </div>
                );
              })}
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 text-xs md:text-sm z-30">
              <span>Scroll to explore</span>
              <div className="mt-2 animate-bounce">↓</div>
            </div>
          </div>
        ) : isHorizontal ? (
          /* Horizontal Scroll Layout */
          <div className="relative group/scroll">
            {/* Scroll buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/scroll:opacity-100 transition-opacity hover:bg-black/80 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/scroll:opacity-100 transition-opacity hover:bg-black/80 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Gradient fade edges */}
            <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r z-10 pointer-events-none ${
              isMetallic ? 'from-[#4a4a4a]' : 'from-[#0a0a0a]'
            } to-transparent`} />
            <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l z-10 pointer-events-none ${
              isMetallic ? 'from-[#4a4a4a]' : 'from-[#0a0a0a]'
            } to-transparent`} />

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-8 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {allImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 snap-center cursor-pointer ${
                    index === 0 ? 'w-[70vw] md:w-[50vw]' : 'w-[45vw] md:w-[30vw]'
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={`relative ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'} rounded-xl overflow-hidden group`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={index === 0 ? '70vw' : '45vw'}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {image.title && (
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className={`font-semibold ${index === 0 ? 'text-xl' : 'text-sm'}`}>{image.title}</p>
                        {image.subtitle && (
                          <p className="text-white/70 text-xs mt-1">{image.subtitle}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-4">
              {allImages.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/30"
                />
              ))}
            </div>
          </div>
        ) : (
          /* Default Grid Layout */
          <>
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
          </>
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
