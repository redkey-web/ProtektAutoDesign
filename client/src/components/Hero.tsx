import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

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
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  );
}
