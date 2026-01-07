'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Phone } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import Image from 'next/image';

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
  /** When true, subtitle becomes H1 (SEO-focused, small eyebrow) and title becomes visual text (big, conversion-focused) */
  eyebrowAsH1?: boolean;
  /** Button style variant */
  buttonVariant?: 'spray' | 'metallic';
  /** Title style variant */
  titleVariant?: 'default' | 'metallic';
  /** Subtitle color variant */
  subtitleColor?: 'primary' | 'white';
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
  eyebrowAsH1 = false,
  buttonVariant = 'spray',
  titleVariant = 'default',
  subtitleColor = 'primary',
}: HeroProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[70vh]',
    medium: 'h-[60vh]',
  };

  const handleCtaClick = () => {
    if (ctaLink.startsWith('#')) {
      document.querySelector(ctaLink)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = ctaLink;
    }
  };

  const handleSecondaryClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      data-testid="hero-section"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
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
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
              data-testid="hero-background-image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </>
        ) : null}
      </div>

      <div className={`relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-center ${contentOffset || 'xl:mt-[20vh]'}`}>
        {showLogo && (
          <div className="mb-8 flex justify-center" data-testid="hero-logo">
            <Image
              src="/images/protekt-logo.webp"
              alt="Protekt Auto"
              width={448}
              height={144}
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl"
              priority
            />
          </div>
        )}
        {subtitle && subtitlePosition === 'above' && (
          eyebrowAsH1 ? (
            <h1
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest uppercase mb-8 max-w-[80%] mx-auto ${
                subtitleColor === 'white' ? 'text-white' : 'text-primary'
              }`}
              data-testid="hero-subtitle"
            >
              {subtitle}
            </h1>
          ) : (
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest uppercase mb-8 max-w-[80%] mx-auto ${
                subtitleColor === 'white' ? 'text-white' : 'text-primary'
              }`}
              data-testid="hero-subtitle"
            >
              {subtitle}
            </p>
          )
        )}
        {eyebrowAsH1 ? (
          <p
            className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold leading-none tracking-normal mb-8 ${
              titleVariant === 'metallic' ? 'text-metallic-paint' : 'text-white'
            }`}
            data-testid="hero-title"
          >
            {title}
          </p>
        ) : (
          <h1
            className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold leading-none tracking-normal mb-8 ${
              titleVariant === 'metallic' ? 'text-metallic-paint' : 'text-white'
            }`}
            data-testid="hero-title"
          >
            {title}
          </h1>
        )}
        {subtitle && subtitlePosition === 'below' && (
          eyebrowAsH1 ? (
            <h1
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest uppercase mb-8 max-w-[80%] mx-auto ${
                subtitleColor === 'white' ? 'text-white' : 'text-primary'
              }`}
              data-testid="hero-subtitle"
            >
              {subtitle}
            </h1>
          ) : (
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest uppercase mb-8 max-w-[80%] mx-auto ${
                subtitleColor === 'white' ? 'text-white' : 'text-primary'
              }`}
              data-testid="hero-subtitle"
            >
              {subtitle}
            </p>
          )
        )}
        {description && (
          <p className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto mb-12 font-light" data-testid="hero-description">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className={`flex items-center gap-2 px-6 py-3 text-black font-bold tracking-wide skew-x-[-8deg] transition-all ${
              buttonVariant === 'metallic' ? 'btn-metallic-paint' : 'btn-spray-edge bg-primary'
            }`}
            onClick={handleCtaClick}
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
              asChild
              data-testid="button-hero-phone-cta"
            >
              <a href="tel:0286062842">
                <Phone className="w-5 h-5" />
                (02) 8606 2842
              </a>
            </Button>
          )}
          {secondaryCtaText && (
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 bg-white/10 border-white/20 text-white transition-all duration-300 hover:!bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              onClick={handleSecondaryClick}
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
