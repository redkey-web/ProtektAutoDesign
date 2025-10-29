import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Droplets, Sparkles } from 'lucide-react';
import heroImage from '@assets/generated_images/Motorcycle_protection_hero_image_de67be60.png';

export default function MotorcycleProtection() {
  const services = [
    {
      icon: Sparkles,
      title: 'Ceramic Coating',
      description:
        'Premium ceramic protection for your motorcycle\'s paint, wheels, and components for enhanced gloss and easy maintenance.',
      price: 'From $600',
    },
    {
      icon: Shield,
      title: 'Paint Protection Film',
      description:
        'Strategic PPF application on high-impact areas like tank, fenders, and fairings to prevent chips and scratches.',
      price: 'From $800',
    },
    {
      icon: Droplets,
      title: 'Complete Protection Package',
      description:
        'Full ceramic coating plus PPF on critical areas for maximum protection and showroom finish.',
      price: 'From $1,400',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Motorcycle Protection"
        subtitle="Premium Bike Detailing"
        description="Protect your ride with professional ceramic coatings and PPF"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Motorcycle Protection
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Protect your bike with our Ceramic Coatings and Stone Chip Protection Film from any
              damage to your paintwork. Whether you ride a sport bike, cruiser, or adventure motorcycle,
              our specialized protection services will keep your bike looking showroom fresh.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Card key={service.title} className="hover-elevate active-elevate-2 transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/60 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              What's Included
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-4">Ceramic Coating Service:</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Full bike wash and decontamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Paint enhancement polish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Ceramic coating on all painted surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Wheel and caliper coating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Chrome and metal component protection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">PPF Service:</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Tank coverage (full or partial)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Front fender protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Fairing and panel coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Headlight protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Custom coverage based on riding style</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-foreground/60 italic mt-6 text-center">
              * Pricing varies based on motorcycle size, type, and coverage requirements. Contact us for
              a custom quote for your specific bike.
            </p>
          </Card>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
