import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import patternLogo from '@assets/image_1764055702258.png';

interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'James M.',
    vehicle: 'Porsche 911 GT3',
    rating: 5,
    text: 'Exceptional work on my GT3. The ceramic coating looks absolutely stunning and the paint correction removed years of swirls. Highly professional team.',
    service: 'Ceramic Coating & Paint Correction',
  },
  {
    name: 'Sarah T.',
    vehicle: 'Mercedes-Benz AMG',
    rating: 5,
    text: 'Best PPF installation in Sydney. The self-healing film is incredible and the finish is flawless. Worth every dollar to protect my AMG.',
    service: 'Paint Protection Film',
  },
  {
    name: 'Michael R.',
    vehicle: 'BMW M4',
    rating: 5,
    text: 'Outstanding service from start to finish. The graphene coating has made washing so easy and the gloss is deeper than factory. Can\'t recommend enough!',
    service: 'Graphene Coating',
  },
  {
    name: 'David L.',
    vehicle: 'Audi RS6',
    rating: 5,
    text: 'Had the full Track package done. The attention to detail is incredible. Every inch of the car is protected and looks better than new.',
    service: 'Track Package',
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
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                      data-testid={`star-${i}`}
                    />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
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
          <div className="inline-flex items-center gap-4 bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-primary text-primary" />
              <span className="text-3xl font-bold text-foreground">4.9</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Rated on Google</p>
              <p className="text-sm text-foreground/60">Based on 150+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
