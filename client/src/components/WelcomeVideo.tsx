import { useState } from 'react';
import { Play } from 'lucide-react';
import TypewriterText from '@/components/TypewriterText';

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
          <TypewriterText
            text="Want to keep your car looking as good as new or better? In order to maintain that new car shine, it's important to look after your vehicle's paint job with our paint protection films and ceramic coatings. If you've started to notice any swirls or scratches in the paint, don't worry, we can help you with that too with our paint correction services."
            speed={1}
            delay={0}
            className="text-foreground/70 text-lg max-w-4xl mx-auto leading-relaxed"
          />
          <TypewriterText
            text="At Protekt Auto, we're dedicated to providing excellent customer service and ensuring that you are completely satisfied with the results of our new car protection products and services."
            speed={1}
            delay={200}
            className="text-foreground/70 text-lg max-w-4xl mx-auto leading-relaxed mt-4"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-md overflow-hidden bg-black">
            {!isPlaying ? (
              <>
                <img
                  src="https://img.youtube.com/vi/JyqP0x17lvY/maxresdefault.jpg"
                  alt="Welcome to Protekt Auto"
                  className="w-full h-full object-cover"
                  data-testid="video-thumbnail"
                />
                <div className="absolute inset-0 bg-black/30" />
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center group hover-elevate active-elevate-2"
                  aria-label="Play welcome video"
                  data-testid="button-play-welcome-video"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground fill-primary-foreground ml-1" />
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
        </div>
      </div>
    </section>
  );
}
