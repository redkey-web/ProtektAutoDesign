import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import logoImage from '@assets/Protekt Logo_1761708306237.webp';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  height?: 'full' | 'large' | 'medium';
  showPlayButton?: boolean;
  showLogo?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  ctaText = 'Get Started',
  ctaLink = '#contact',
  secondaryCtaText,
  height = 'full',
  showPlayButton = false,
  showLogo = false,
}: HeroProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[70vh]',
    medium: 'h-[60vh]',
  };

  return (
    <div
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      data-testid="hero-section"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          data-testid="hero-background-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {showLogo && (
          <div className="mb-8 flex justify-center" data-testid="hero-logo">
            <img 
              src={logoImage} 
              alt="Protekt Auto" 
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl"
            />
          </div>
        )}
        {subtitle && (
          <p
            className="text-primary text-sm sm:text-base font-semibold tracking-wider uppercase mb-4"
            data-testid="hero-subtitle"
          >
            {subtitle}
          </p>
        )}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          data-testid="hero-title"
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light"
            data-testid="hero-description"
          >
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            className="gap-2 text-base px-8"
            onClick={() => {
              if (ctaLink.startsWith('#')) {
                document.querySelector(ctaLink)?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = ctaLink;
              }
            }}
            data-testid="button-hero-cta"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </Button>
          {secondaryCtaText && (
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-hero-secondary-cta"
            >
              {secondaryCtaText}
            </Button>
          )}
          {showPlayButton && (
            <Button
              size="icon"
              variant="outline"
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
              data-testid="button-play-video"
            >
              <Play className="w-6 h-6 text-white fill-white" />
            </Button>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/70"
          data-testid="icon-scroll-down"
        >
          {/* H-pattern gate */}
          <path
            d="M 12 12 L 12 36 M 24 12 L 24 36 M 36 12 L 36 36 M 12 16 L 36 16 M 12 32 L 36 32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Gear position labels */}
          <text x="12" y="11" fontSize="7" fill="currentColor" textAnchor="middle" fontWeight="600">1</text>
          <text x="12" y="44" fontSize="7" fill="currentColor" textAnchor="middle" fontWeight="600">2</text>
          <text x="24" y="11" fontSize="7" fill="currentColor" textAnchor="middle" fontWeight="600">3</text>
          <text x="24" y="44" fontSize="7" fill="currentColor" textAnchor="middle" fontWeight="600">4</text>
          <text x="36" y="11" fontSize="7" fill="currentColor" textAnchor="middle" fontWeight="600">5</text>
          <text x="36" y="44" fontSize="7" fill="currentColor" textAnchor="middle" fontWeight="600">R</text>
          {/* Shifter knob in neutral position */}
          <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}
