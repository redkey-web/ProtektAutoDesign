'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title = 'Paint Correction Results',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    handleMove(touch.clientX, rect);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="w-full max-w-4xl mx-auto" data-testid="before-after-slider">
      <h3 className="font-display text-2xl font-bold mb-4 text-center">{title}</h3>
      <Card className="overflow-hidden">
        <div
          className="relative w-full aspect-[16/9] select-none cursor-ew-resize"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          onClick={handleClick}
          data-testid="slider-container"
        >
          {/* After Image (Background) */}
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            data-testid="after-image"
          />

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={beforeImage}
              alt="Before"
              fill
              className="object-cover"
              data-testid="before-image"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize">
              <div className="flex gap-1">
                <div className="w-0.5 h-6 bg-foreground/50" />
                <div className="w-0.5 h-6 bg-foreground/50" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-sm font-semibold rounded">
            BEFORE
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 text-white text-sm font-semibold rounded">
            AFTER
          </div>
        </div>
      </Card>
      <p className="text-center text-sm text-foreground/60 mt-3">
        Drag the slider to compare before and after results
      </p>
    </div>
  );
}
