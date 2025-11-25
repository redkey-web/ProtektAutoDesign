import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import SEO from '@/components/SEO';
import UrgencyBanner from '@/components/UrgencyBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Droplets, Sparkles } from 'lucide-react';
import heroImage from '@assets/Motorcycle ceramic coat protection sydney_1763343837693.webp';
import patternLogo from '@assets/image_1764055702258.png';

export default function MotorcycleProtection() {
  const faqItems: FAQItem[] = [
    {
      question: 'Do you work on all types of motorcycles?',
      answer: 'Yes! We work on all types of motorcycles including sport bikes, cruisers, adventure bikes, touring bikes, and custom builds. Our technicians have experience with various makes and models.',
    },
    {
      question: 'Is ceramic coating safe for motorcycle paint?',
      answer: 'Absolutely! Ceramic coating is completely safe for motorcycle paint and provides excellent protection against road grime, bugs, UV rays, and environmental contaminants. It also makes cleaning much easier and enhances the depth of your paint\'s color.',
    },
    {
      question: 'What areas of my bike should have PPF?',
      answer: 'We typically recommend PPF on high-impact areas such as the fuel tank, front fender, lower fairings, headlight, and instrument cluster. These areas are most vulnerable to stone chips and debris damage. We can customize coverage based on your riding style and preferences.',
    },
    {
      question: 'How long does motorcycle protection take?',
      answer: 'Ceramic coating application typically takes 1-2 days, while PPF installation can take 1-3 days depending on the coverage area. The complete protection package usually requires 2-4 days. We\'ll provide a more accurate timeline after assessing your specific motorcycle.',
    },
    {
      question: 'Can you protect chrome and metal parts?',
      answer: 'Yes! Our ceramic coatings work excellently on chrome, polished aluminum, and other metal surfaces. They help prevent oxidation, make cleaning easier, and maintain that showroom shine on all your bike\'s components.',
    },
  ];

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
      <SEO
        title="Motorcycle Ceramic Coating Sydney | Motorbike PPF | Bike Detailing | Protekt Auto"
        description="Professional motorcycle ceramic coating Sydney. Protect your bike with ceramic coatings & PPF. Sport bikes, cruisers, adventure bikes from $600. Call (02) 8606 2842"
        keywords="motorcycle ceramic coating Sydney, motorbike PPF Sydney, motorcycle detailing Sydney, bike ceramic coating, motorcycle protection Sydney"
        canonical="https://protektauto.com.au/motorcycle-protection"
      />
      <Hero
        title="Motorcycle Protection"
        subtitle="Premium Bike Detailing"
        description="Protect your ride with professional ceramic coatings and PPF"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={true}
      />

      <section className="py-20 bg-background relative overflow-hidden">
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `url(${patternLogo})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
          <UrgencyBanner
            message="Track season approaching!"
            highlight="Protect your bike before the first ride."
            icon="trending"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Motorcycle Protection
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Protect your bike with our Ceramic Coatings and Stone Chip Protection Film from any damage to your paintwork. Whether you ride a sport bike, cruiser, or adventure motorcycle, our specialized protection services will keep your bike looking showroom fresh.
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

      <FAQ items={faqItems} title="Motorcycle Protection FAQs" />

      <ContactSection />
    </div>
  );
}
