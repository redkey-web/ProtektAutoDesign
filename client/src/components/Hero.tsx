import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Phone } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
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
  showPhoneCta?: boolean;
  height?: 'full' | 'large' | 'medium';
  showPlayButton?: boolean;
  showLogo?: boolean;
  showTrustBadges?: boolean;
  subtitlePosition?: 'above' | 'below';
  contentOffset?: string;
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
  showPhoneCta = false,
  height = 'full',
  showPlayButton = false,
  showLogo = false,
  showTrustBadges = false,
  subtitlePosition = 'above',
  contentOffset,
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
            <div className="absolute inset-0 scale-[1.40] -mt-8 -mb-30">
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
              loading="eager"
              data-testid="hero-background-image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </>
        ) : null}
      </div>

      <div className={`relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-center ${contentOffset || 'xl:mt-[20vh]'}`}>
        {showLogo && (
          <div className="mb-8 flex justify-center" data-testid="hero-logo">
            <img 
              src={logoImage} 
              alt="Protekt Auto" 
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl"
              loading="eager"
            />
          </div>
        )}
        {subtitle && subtitlePosition === 'above' && (
          <p
            className="text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest uppercase mb-8 max-w-[80%] mx-auto"
            data-testid="hero-subtitle"
          >
            {subtitle}
          </p>
        )}
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold text-white leading-none tracking-normal mb-8"
          data-testid="hero-title"
        >
          {title}
        </h1>
        {subtitle && subtitlePosition === 'below' && (
          <p
            className="text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest uppercase mb-8 max-w-[80%] mx-auto"
            data-testid="hero-subtitle"
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto mb-12 font-light" data-testid="hero-description">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold tracking-wide skew-x-[-8deg] hover:bg-primary/90 transition-all"
            onClick={() => {
              if (ctaLink.startsWith('#')) {
                document.querySelector(ctaLink)?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = ctaLink;
              }
            }}
            data-testid="button-hero-cta"
          >
            <span className="skew-x-[8deg]">{ctaText}</span>
            <ArrowRight className="w-5 h-5 skew-x-[8deg]" />
          </button>
          {showPhoneCta && (
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 bg-white/10 border-white/20 text-white transition-all duration-300 hover:!bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              onClick={() => window.location.href = 'tel:0286062842'}
              data-testid="button-hero-phone-cta"
            >
              <Phone className="w-5 h-5" />
              (02) 8606 2842
            </Button>
          )}
          {secondaryCtaText && (
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 bg-white/10 border-white/20 text-white transition-all duration-300 hover:!bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
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
              className="w-16 h-16 rounded-full bg-white/10 border-white/20 hover:bg-white/20"
              data-testid="button-play-video"
            >
              <Play className="w-6 h-6 text-white fill-white" />
            </Button>
          )}
        </div>
        
        {showTrustBadges && (
          <div className="mt-16">
            <TrustBadges />
          </div>
        )}
      </div>
    </div>
  );
}
