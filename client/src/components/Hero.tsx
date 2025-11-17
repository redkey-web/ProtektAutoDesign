import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import logoImage from '@assets/Protekt Logo_1761708306237.webp';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  videoUrl?: string;
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
  videoUrl,
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoUrl ? (
          <>
            <div className="absolute inset-0 scale-110 -mt-16 -mb-20">
              <iframe
                src={`${videoUrl}?background=1&autoplay=1&loop=1&muted=1&quality=720p`}
                className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
                frameBorder="0"
                allow="autoplay; fullscreen"
                title="Hero background video"
                data-testid="hero-background-video"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          </>
        ) : image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              data-testid="hero-background-image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </>
        ) : null}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-10">
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
            className="gap-2 text-base px-8 transition-all duration-300 hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,188,212,0.6)] hover:border-primary"
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
              className="gap-2 text-base px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 hover:!bg-transparent hover:backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:border-white"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
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

      <div className="absolute bottom-[57px] left-1/2 -translate-x-1/2 z-10 animate-bounce -mt-20">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/80"
          data-testid="icon-scroll-down"
        >
          {/* Outer knob circle */}
          <circle
            cx="20"
            cy="20"
            r="18.5"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.6"
          />
          
          {/* Inner gate background */}
          <circle
            cx="20"
            cy="20"
            r="13"
            fill="currentColor"
            opacity="0.12"
          />
          
          {/* H-pattern gate lines - cleaner design */}
          {/* Left vertical (R-2) */}
          <line x1="11" y1="13" x2="11" y2="27" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          {/* Middle vertical (1-4) */}
          <line x1="20" y1="13" x2="20" y2="27" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          {/* Right vertical (3-5) */}
          <line x1="29" y1="13" x2="29" y2="27" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          {/* Top horizontal */}
          <line x1="11" y1="16" x2="29" y2="16" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          {/* Bottom horizontal */}
          <line x1="11" y1="24" x2="29" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          
          {/* Gear position labels - Top row: R 1 3 */}
          <text x="11" y="11.5" fontSize="5.5" fill="currentColor" textAnchor="middle" fontWeight="700" fontFamily="system-ui">R</text>
          <text x="20" y="11.5" fontSize="5.5" fill="currentColor" textAnchor="middle" fontWeight="700" fontFamily="system-ui">1</text>
          <text x="29" y="11.5" fontSize="5.5" fill="currentColor" textAnchor="middle" fontWeight="700" fontFamily="system-ui">3</text>
          
          {/* Bottom row: 2 4 5 */}
          <text x="11" y="31" fontSize="5.5" fill="currentColor" textAnchor="middle" fontWeight="700" fontFamily="system-ui">2</text>
          <text x="20" y="31" fontSize="5.5" fill="currentColor" textAnchor="middle" fontWeight="700" fontFamily="system-ui">4</text>
          <text x="29" y="31" fontSize="5.5" fill="currentColor" textAnchor="middle" fontWeight="700" fontFamily="system-ui">5</text>
          
          {/* Shifter stick pointing up (1st gear position) */}
          <line
            x1="20"
            y1="20"
            x2="20"
            y2="14.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.95"
          />
          
          {/* Shifter knob at top (1st gear) */}
          <circle cx="20" cy="14.5" r="3.5" fill="currentColor" opacity="0.95" />
          <circle cx="20" cy="14.5" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
