'use client';

import { Phone } from 'lucide-react';

export default function StickyPhoneButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 w-full bg-primary overflow-hidden">
      {/* Pattern overlay with infinite scroll */}
      <div
        className="absolute inset-0 pointer-events-none animate-pattern-scroll"
        style={{
          backgroundImage: 'url(/images/pattern-logo.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          opacity: 0.12,
        }}
        aria-hidden="true"
      />
      {/* Shimmer sweep effect */}
      <div
        className="absolute inset-0 pointer-events-none animate-sticky-shimmer"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
          transform: 'translateX(-100%) skewX(-25deg)',
        }}
        aria-hidden="true"
      />
      {/* Text content on top */}
      <a
        href="tel:0286062842"
        className="relative flex items-center justify-center gap-3 w-full text-black font-bold hover:bg-black/10 transition-all"
        style={{
          paddingTop: 'calc(0.73rem + 2.4px)',
          paddingBottom: 'calc(0.73rem + 2.4px)',
          fontSize: '1.344rem',
          margin: '-5px 0',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
        }}
        data-testid="sticky-phone-bar"
      >
        <Phone style={{ width: '2rem', height: '2rem' }} />
        <span>(02) 8606 2842</span>
      </a>
    </div>
  );
}
