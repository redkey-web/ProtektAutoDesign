import { Star } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import patternLogo from '@assets/image_1764055702258.png';

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
    <section className="py-20 bg-muted/30 relative overflow-hidden" data-testid="testimonials-section">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url(${patternLogo})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Sydney's car enthusiasts have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all"
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
                  <span className="text-xs text-foreground/50">{testimonial.timeAgo}</span>
                </div>
                
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed line-clamp-5">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.vehicle}</p>
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
            className="inline-flex items-center gap-4 bg-card p-6 rounded-lg border border-border hover-elevate transition-all cursor-pointer"
            data-testid="link-google-reviews"
          >
            <SiGoogle className="w-8 h-8 text-foreground" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.9</span>
            </div>
            <div className="text-left border-l border-border pl-4">
              <p className="font-semibold text-foreground">Google Reviews</p>
              <p className="text-sm text-foreground/60">Based on 150+ reviews</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
