'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
}

interface HyperSpaceIntroProps {
  logoSrc: string;
  onComplete: () => void;
  duration?: number;
}

export default function HyperSpaceIntro({
  logoSrc,
  onComplete,
  duration = 3500
}: HyperSpaceIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const logoEl = logoRef.current;
    const containerEl = containerRef.current;
    if (!canvas || !logoEl || !containerEl) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize stars
      const stars: Star[] = [];
      for (let i = 0; i < 800; i++) {
        stars.push({
          x: (Math.random() - 0.5) * canvas.width * 2,
          y: (Math.random() - 0.5) * canvas.height * 2,
          z: Math.random() * 2000,
          prevZ: 0,
        });
      }
      starsRef.current = stars;
    };

    resize();
    window.addEventListener('resize', resize);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      if (hasCompletedRef.current) return;

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Star speed accelerates
      const speed = 15 + Math.pow(progress, 2) * 150;

      // Update logo scale directly via DOM (no re-render)
      const scaleProgress = Math.pow(progress, 1.5);
      const scale = 0.02 + scaleProgress * 3.5;
      const opacity = progress > 0.9 ? 1 - ((progress - 0.9) / 0.1) : 1;

      logoEl.style.transform = `scale(${scale})`;
      logoEl.style.opacity = String(opacity);

      // Clear with trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star) => {
        star.prevZ = star.z;
        star.z -= speed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.z = 2000;
          star.prevZ = 2000;
        }

        const sx = (star.x / star.z) * 400 + centerX;
        const sy = (star.y / star.z) * 400 + centerY;
        const prevSx = (star.x / star.prevZ) * 400 + centerX;
        const prevSy = (star.y / star.prevZ) * 400 + centerY;
        const size = Math.max(0.5, (1 - star.z / 2000) * 3);

        // Draw trail
        ctx.beginPath();
        ctx.moveTo(prevSx, prevSy);
        ctx.lineTo(sx, sy);

        const brightness = Math.min(255, 150 + (1 - star.z / 2000) * 105);
        const alpha = Math.min(1, (1 - star.z / 2000) * 1.5);

        ctx.strokeStyle = `rgba(${brightness * 0.9}, ${brightness}, ${brightness}, ${alpha})`;
        ctx.lineWidth = size * Math.min(speed / 20, 8) * 0.5;
        ctx.stroke();

        // Draw point
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      // Radial glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height) * 0.5
      );
      gradient.addColorStop(0, 'rgba(0, 188, 212, 0.03)');
      gradient.addColorStop(0.5, 'rgba(0, 100, 150, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Light burst at end
      if (progress > 0.85) {
        const burstProgress = (progress - 0.85) / 0.15;
        const burstRadius = burstProgress * Math.max(canvas.width, canvas.height);
        const burstGradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, burstRadius
        );
        burstGradient.addColorStop(0, `rgba(255, 255, 255, ${0.8 * (1 - burstProgress)})`);
        burstGradient.addColorStop(0.3, `rgba(0, 188, 212, ${0.5 * (1 - burstProgress)})`);
        burstGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = burstGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete - fade out container
        hasCompletedRef.current = true;
        containerEl.style.opacity = '0';
        setTimeout(onComplete, 300);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [duration, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black overflow-hidden transition-opacity duration-300"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: 'scale(0.02)', opacity: 1 }}
      >
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-primary/40 rounded-full scale-[2]" />
          <div className="absolute inset-0 blur-xl bg-white/30 rounded-full scale-150" />
          <Image
            src={logoSrc}
            alt="Logo"
            width={400}
            height={128}
            className="relative z-10 w-auto h-24 md:h-32 drop-shadow-[0_0_30px_rgba(0,188,212,0.8)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
