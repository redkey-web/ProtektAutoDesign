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
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/70"
          data-testid="icon-scroll-down"
        >
          {/* Circular shift gate base */}
          <circle
            cx="28"
            cy="28"
            r="20"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
          />
          
          {/* Gear position dots */}
          <circle cx="28" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="44" cy="18" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="44" cy="38" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="28" cy="48" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="38" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" opacity="0.6" />
          
          {/* Gear labels */}
          <text x="28" y="6" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="600">1</text>
          <text x="46" y="20" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="600">2</text>
          <text x="46" y="40" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="600">3</text>
          <text x="28" y="52" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="600">4</text>
          <text x="10" y="40" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="600">5</text>
          <text x="10" y="20" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="600">R</text>
          
          {/* Motion trail from 3rd to 4th (fading line) */}
          <path
            d="M 44 38 L 36 43"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.3"
          />
          
          {/* Shifter stick */}
          <line
            x1="28"
            y1="28"
            x2="36"
            y2="43"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          
          {/* Shifter knob at intermediate position (pulling from 3rd to 4th) */}
          <circle cx="36" cy="43" r="5" fill="currentColor" opacity="0.9" />
          <circle cx="36" cy="43" r="3" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
