import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import SEO from '@/components/SEO';
import UrgencyBanner from '@/components/UrgencyBanner';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Droplets, Sparkles } from 'lucide-react';
import heroImage from '@assets/Motorcycle ceramic coat protection sydney_1763343837693.webp';
import patternLogo from '@assets/image_1764055702258.png';
import whiteHonda from '@assets/image_1764079557269.png';
import blackDucatiSide from '@assets/image_1764079593202.png';
import blackDucatiRear from '@assets/image_1764079603369.png';
import burgundyHarley from '@assets/image_1764079613406.png';
import orangeHarleyShop from '@assets/image_1764079622210.png';
import ppfStandardKit from '@assets/image_1764602606328.png';
import ppfExtendedKit from '@assets/image_1764602635146.png';
import workshopImage from '@assets/image_1764602659202.png';
import bikeSketchesImage from '@assets/image_1764605871930.png';

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

  const ceramicPackages = [
    { name: 'Sports Bike', price: '$790' },
    { name: 'Cruiser/Naked', price: '$950' },
    { name: 'Large Cruiser', price: '$1,100' },
  ];

  const ppfPackages = [
    { name: 'Standard Kit', price: 'From $850', description: 'Nose cone, headlights, leading edge of side fairings, wheel guard, tank wear areas & seat' },
    { name: 'Extended Kit', price: 'From $2,200', description: 'Standard kit plus full side fairings and top tank section' },
    { name: 'Full Custom', price: 'From $2,950', description: 'Complete coverage of all exterior painted surfaces' },
  ];

  const services = [
    {
      icon: Sparkles,
      title: 'Ceramic Coating',
      description:
        'Premium ceramic protection for your motorcycle\'s paint, wheels, and components for enhanced gloss and easy maintenance.',
      price: 'From $790',
    },
    {
      icon: Shield,
      title: 'Paint Protection Film',
      description:
        'Strategic PPF application on high-impact areas like tank, fenders, and fairings to prevent chips and scratches.',
      price: 'From $850',
    },
    {
      icon: Droplets,
      title: 'Complete Protection Package',
      description:
        'Full ceramic coating plus PPF on critical areas for maximum protection and showroom finish.',
      price: 'From $2,600',
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

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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

      {/* PPF Coverage Area Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              PPF Coverage Options
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Choose the coverage level that matches your riding style and protection needs
            </p>
          </div>

          {/* Coverage Diagrams */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4" data-testid="section-ppf-standard">
              <div className="rounded-md overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all">
                <img
                  src={ppfStandardKit}
                  alt="Standard PPF Kit coverage areas"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="bg-card p-6 rounded-md">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Standard Kit</h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  Perfect for daily riders. Protects all high-impact areas including nose cone, headlights, leading edge of side fairings, wheel guard, main tank wear areas and seat/duck tail.
                </p>
                <p className="text-2xl font-bold text-primary">From $850</p>
              </div>
            </div>

            <div className="space-y-4" data-testid="section-ppf-extended">
              <div className="rounded-md overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all">
                <img
                  src={ppfExtendedKit}
                  alt="Extended PPF Kit coverage areas"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="bg-card p-6 rounded-md">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Extended Kit</h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  Comprehensive protection including everything in Standard Kit plus full side fairings (upper and lower) and top tank section. Ideal for sport bike enthusiasts.
                </p>
                <p className="text-2xl font-bold text-primary">From $2,200</p>
              </div>
            </div>
          </div>

          {/* Ceramic Packages with Sketches */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Ceramic Coating Packages by Bike Type
            </h3>
            <div className="rounded-md overflow-hidden bg-background/50 border border-border/30 p-6 hover-elevate active-elevate-2 transition-all">
              <img
                src={bikeSketchesImage}
                alt="Industrial style sketches of sports bike, cruiser, and large cruiser motorcycles"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="bg-card p-6 rounded-md border border-border/50 text-center">
            <p className="text-foreground/60 text-sm">
              * All prices are starting from and vary based on motorcycle size, type, and specific requirements. Contact us for a custom quote tailored to your bike.
            </p>
          </div>
        </div>
      </section>

      {/* Motorcycle Gallery */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `url(${patternLogo})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Motorcycle Protection Work
            </h2>
            <p className="text-foreground/70 text-lg">
              See the stunning results of our professional motorcycle ceramic coating and PPF services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-honda-sportbike"
            >
              <img
                src={whiteHonda}
                alt="White Honda sportbike with ceramic coating protection"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Honda Sportbike</p>
                <p className="text-xs text-white/80">Ceramic Coating Protection</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ducati-side"
            >
              <img
                src={blackDucatiSide}
                alt="Black Ducati 900 SD motorcycle detailing"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Ducati 900 SD</p>
                <p className="text-xs text-white/80">Complete Protection Package</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ducati-rear"
            >
              <img
                src={blackDucatiRear}
                alt="Black Ducati 900 SD rear view showcasing ceramic finish"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Ducati 900 SD</p>
                <p className="text-xs text-white/80">Premium Ceramic Finish</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-harley-burgundy"
            >
              <img
                src={burgundyHarley}
                alt="Burgundy Harley-Davidson in professional workshop"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Harley-Davidson</p>
                <p className="text-xs text-white/80">Professional Detailing Service</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-harley-shop"
            >
              <img
                src={orangeHarleyShop}
                alt="Harley-Davidson motorcycle outside Protekt Auto workshop"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Harley-Davidson</p>
                <p className="text-xs text-white/80">Premium Motorcycle Care</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-workshop-service"
            >
              <img
                src={workshopImage}
                alt="Protekt Auto workshop - professional motorcycle ceramic coating and PPF installation"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Professional Installation</p>
                <p className="text-xs text-white/80">Expert Ceramic Coating & PPF Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="relative overflow-hidden">
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `url(${patternLogo})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
          }}
        />
        <div className="relative z-10">
          <FAQ items={faqItems} title="Motorcycle Protection FAQs" />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
