'use client';

import { ReactNode } from 'react';

interface DarkAtmosphereSectionProps {
  children: ReactNode;
  /** Color theme for the animated blobs */
  theme?: 'cyan' | 'gold' | 'silver';
  /** Whether to show animated blobs (can be performance heavy) */
  showBlobs?: boolean;
  /** Whether to show the pattern overlay */
  showPattern?: boolean;
  /** Whether to show vignette effect */
  showVignette?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Section ID for navigation */
  id?: string;
}

/**
 * Dark atmospheric section with "Batman vibe" styling
 * - Dark background with subtle pattern
 * - Optional animated color blobs
 * - Vignette effect for depth
 * - Designed for white text content
 */
export default function DarkAtmosphereSection({
  children,
  theme = 'cyan',
  showBlobs = true,
  showPattern = true,
  showVignette = true,
  className = '',
  id,
}: DarkAtmosphereSectionProps) {
  // Theme-specific blob colors
  const blobColors = {
    cyan: {
      primary: 'bg-primary/12',
      secondary: 'bg-cyan-400/10',
      accent: 'bg-teal-500/8',
      pulse: 'bg-primary/8',
    },
    gold: {
      primary: 'bg-amber-500/15',
      secondary: 'bg-yellow-600/12',
      accent: 'bg-orange-500/8',
      pulse: 'bg-amber-600/10',
    },
    silver: {
      primary: 'bg-slate-400/12',
      secondary: 'bg-slate-500/10',
      accent: 'bg-zinc-400/8',
      pulse: 'bg-neutral-400/10',
    },
  };

  const colors = blobColors[theme];

  return (
    <section id={id} className={`relative overflow-hidden bg-[#0a0a0a] ${className}`}>
      {/* Pattern overlay */}
      {showPattern && (
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
      )}

      {/* Animated color blobs */}
      {showBlobs && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          {/* Primary blob - top left */}
          <div className={`absolute top-[10%] left-[15%] w-[600px] h-[600px] ${colors.primary} rounded-full blur-[200px] animate-blob-1`} />
          {/* Secondary blob - middle right */}
          <div className={`absolute top-[40%] right-[10%] w-[500px] h-[500px] ${colors.secondary} rounded-full blur-[180px] animate-blob-2`} />
          {/* Accent blob - bottom left */}
          <div className={`absolute top-[60%] left-[5%] w-[400px] h-[400px] ${colors.accent} rounded-full blur-[160px] animate-blob-3`} />
          {/* Pulse blob - bottom right */}
          <div className={`absolute top-[75%] right-[25%] w-[500px] h-[500px] ${colors.pulse} rounded-full blur-[200px] animate-blob-pulse`} />
          {/* Central pulse */}
          <div className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${colors.pulse} rounded-full blur-[250px] animate-blob-pulse`} />
        </div>
      )}

      {/* Dark gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-[1]" aria-hidden="true" />

      {/* Vignette effect */}
      {showVignette && (
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

/**
 * Light section wrapper for alternating with dark sections
 * Clean, readable design with subtle styling
 */
export function LightSection({
  children,
  className = '',
  id,
  variant = 'default',
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'subtle' | 'card';
}) {
  const bgClasses = {
    default: 'bg-background',
    subtle: 'bg-muted/30',
    card: 'bg-card/50 border-t border-b border-border',
  };

  return (
    <section id={id} className={`relative ${bgClasses[variant]} ${className}`}>
      {children}
    </section>
  );
}
