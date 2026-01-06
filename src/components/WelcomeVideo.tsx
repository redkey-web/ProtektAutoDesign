'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function WelcomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-card" id="welcome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome to Protekt Auto
          </h2>
          <p className="text-foreground/70 text-lg max-w-4xl mx-auto leading-relaxed">If you want your car to keep that fresh, new-car shine, the right protection matters. We specialise in paint protection film (PPF) and ceramic coating services that help prevent scratches, UV damage, road grime, and long-term wear.</p>
          <p className="text-foreground/70 text-lg max-w-4xl mx-auto leading-relaxed mt-4">Already seeing swirl marks or light scratches? Our professional paint correction restores clarity and gloss before we apply your chosen protection.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-md overflow-hidden bg-black">
            {!isPlaying ? (
              <>
                <Image
                  src="https://img.youtube.com/vi/JyqP0x17lvY/maxresdefault.jpg"
                  alt="Welcome to Protekt Auto"
                  fill
                  className="object-cover"
                  data-testid="video-thumbnail"
                />
                <div className="absolute inset-0 bg-black/30" />
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  aria-label="Play welcome video"
                  data-testid="button-play-welcome-video"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(0,188,212,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(0,188,212,0.8)]">
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </button>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/JyqP0x17lvY?autoplay=1"
                title="Welcome to Protekt Auto"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="youtube-video-player"
              />
            )}
          </div>
          <p className="text-foreground/70 text-lg max-w-4xl mx-auto leading-relaxed mt-8">Whether you're buying a new car or refreshing an older one, Protekt Auto focuses on straightforward service, quality workmanship, and results you'll be happy with long-term. Our new car protection packages give you lasting shine, stronger resale value, and a finish that actually stays cleaner.</p>
        </div>
      </div>
    </section>
  );
}
