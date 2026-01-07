'use client';

import { Star } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  service: string;
  timeAgo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Tran',
    vehicle: 'Porsche 911 GT3',
    rating: 5,
    text: 'This is the second time I came to see these guys, they are professionals at what they do, they talk to you let you know what\'s going on, and they are very friendly, my time with them has always been pleasant, and I\'m very happy with the result for a second time, so thank you to you Dave and the team',
    service: 'Return Customer',
    timeAgo: '8 weeks ago',
  },
  {
    name: 'liftytim',
    vehicle: 'BMW M2',
    rating: 5,
    text: 'Absolutely amazing attention to detail with service to match. I get a heap of comments about the satin PPF on my BMW M2. Probably because it doesn\'t look like a wrap at all. Mint condition over 2 years later. Both cars ceramic coated as well, making them incredibly easy to maintain. Highly recommend.',
    service: 'Satin PPF & Ceramic Coating',
    timeAgo: '19 weeks ago',
  },
  {
    name: 'Hieu Nguyen',
    vehicle: 'Mitsubishi Pajero',
    rating: 5,
    text: 'Absolutely recommend Protekt Auto! I\'ve had multiple vehicles tinted here and the quality is always top-notch. David and the team are legends — their product knowledge, attention to detail, and passion for what they do really shine through. Most recently, they did a Stage 1 detail on my Pajero and it came out looking like a million bucks.',
    service: 'Window Tinting & Detailing',
    timeAgo: '20 weeks ago',
  },
  {
    name: 'Peter Lynden',
    vehicle: 'Local Guide',
    rating: 5,
    text: 'Thank you to David and his staff for an outstanding job on our new car. It looks amazing. I would recommend ProTekt for attention to detail, customer service and communication and a first rate facility. I will use them again in the future. Conveniently located as well near train station and major roads.',
    service: 'New Car Protection',
    timeAgo: '25 weeks ago',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden" data-testid="testimonials-section">
      {/* Dark dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Branded glow from behind - Batman signal style */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[150px]" />

      {/* Pattern Overlay - darker */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'url(/images/pattern-logo.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Sydney's car enthusiasts have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all bg-black/40 border-white/10 backdrop-blur-sm"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        data-testid={`star-${i}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/40">{testimonial.timeAgo}</span>
                </div>

                <p className="text-white/70 mb-4 text-sm leading-relaxed line-clamp-5">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.vehicle}</p>
                  <p className="text-xs text-primary font-medium mt-1">
                    {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=protekt+auto+clyde+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-black/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm hover:border-primary/50 hover:bg-black/60 transition-all cursor-pointer"
            data-testid="link-google-reviews"
          >
            <SiGoogle className="w-8 h-8 text-white" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">5.0</span>
            </div>
            <div className="text-left border-l border-white/20 pl-4">
              <p className="font-semibold text-white">Google Reviews</p>
              <p className="text-sm text-white/50">Based on 160+ reviews</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
