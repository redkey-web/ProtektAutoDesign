'use client';

import { Star } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';

export default function GoogleReviewSummary() {
  const scrollToTestimonials = () => {
    const testimonialsSection = document.querySelector('[data-testid="testimonials-section"]');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-0 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={scrollToTestimonials}
          className="w-full inline-flex flex-col md:flex-row items-center justify-between gap-6 bg-card p-8 rounded-lg border border-border hover-elevate transition-all cursor-pointer group"
          data-testid="button-google-review-summary"
        >
          <div className="flex items-center gap-6">
            <SiGoogle className="w-10 h-10 text-foreground flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm text-foreground/60 mb-1">Rated by customers</p>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">5.0</span>
                <span className="text-foreground/70 font-medium">Based on 160+ reviews</span>
              </div>
            </div>
          </div>
          <div className="text-foreground/70 group-hover:text-foreground transition-colors whitespace-nowrap">
            See what customers say
          </div>
        </button>
      </div>
    </div>
  );
}
