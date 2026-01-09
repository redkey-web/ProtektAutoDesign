import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import UrgencyBanner from '@/components/UrgencyBanner';
import Testimonials from '@/components/Testimonials';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import BentoImageGrid from '@/components/BentoImageGrid';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Droplets, Sparkles, LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Motorcycle Ceramic Coating Sydney | Motorbike PPF | Bike Detailing | Protekt Auto',
  description:
    'Professional motorcycle ceramic coating Sydney. Protect your bike with ceramic coatings & PPF. Sport bikes, cruisers, adventure bikes from $600. Call (02) 8606 2842',
  keywords:
    'motorcycle ceramic coating Sydney, motorbike PPF Sydney, motorcycle detailing Sydney, bike ceramic coating, motorcycle protection Sydney',
  alternates: {
    canonical: 'https://protektauto.com.au/motorcycle-protection',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'Do you work on all types of motorcycles?',
    answer:
      'Yes! We work on all types of motorcycles including sport bikes, cruisers, adventure bikes, touring bikes, and custom builds. Our technicians have experience with various makes and models.',
  },
  {
    question: 'Is ceramic coating safe for motorcycle paint?',
    answer:
      "Absolutely! Ceramic coating is completely safe for motorcycle paint and provides excellent protection against road grime, bugs, UV rays, and environmental contaminants. It also makes cleaning much easier and enhances the depth of your paint's color.",
  },
  {
    question: 'What areas of my bike should have PPF?',
    answer:
      'We typically recommend PPF on high-impact areas such as the fuel tank, front fender, lower fairings, headlight, and instrument cluster. These areas are most vulnerable to stone chips and debris damage. We can customize coverage based on your riding style and preferences.',
  },
  {
    question: 'How long does motorcycle protection take?',
    answer:
      "Ceramic coating application typically takes 1-2 days, while PPF installation can take 1-3 days depending on the coverage area. The complete protection package usually requires 2-4 days. We'll provide a more accurate timeline after assessing your specific motorcycle.",
  },
  {
    question: 'Can you protect chrome and metal parts?',
    answer:
      "Yes! Our ceramic coatings work excellently on chrome, polished aluminum, and other metal surfaces. They help prevent oxidation, make cleaning easier, and maintain that showroom shine on all your bike's components.",
  },
];

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    icon: Sparkles,
    title: 'Ceramic Coating',
    description:
      "Premium ceramic protection for your motorcycle's paint, wheels, and components for enhanced gloss and easy maintenance.",
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

// Featured motorcycle work - prominent display
const featuredMotoWork = {
  featured: {
    src: '/images/moto-ducati-side.png',
    alt: 'Black Ducati 900 SD motorcycle with full ceramic coating',
    title: 'Ducati 900 SD',
    subtitle: 'Complete Ceramic Coating & PPF Protection Package',
  },
  grid: [
    { src: '/images/moto-white-honda.png', alt: 'White Honda sportbike', title: 'Honda Sportbike', subtitle: 'Ceramic Coating' },
    { src: '/images/moto-harley-burgundy.png', alt: 'Burgundy Harley-Davidson', title: 'Harley-Davidson', subtitle: 'Full Detail' },
    { src: '/images/moto-ducati-rear.png', alt: 'Ducati rear detail', title: 'Ducati 900 SD', subtitle: 'Premium Finish' },
    { src: '/images/orange-harley.png', alt: 'Orange Harley-Davidson', title: 'Harley-Davidson', subtitle: 'Custom Protection' },
  ],
};

// More motorcycle work
const moreMotoImages = [
  { src: '/images/moto-harley-shop.png', alt: 'Harley-Davidson at workshop', title: 'Workshop Ready', subtitle: 'Professional Service' },
  { src: '/images/moto-workshop.png', alt: 'Protekt Auto workshop', title: 'Expert Installation', subtitle: 'Controlled Environment' },
  { src: '/images/black-ducati-900.png', alt: 'Black Ducati 900', title: 'Ducati 900', subtitle: 'Paint Correction' },
];

export default function MotorcycleProtection() {
  return (
    <>
      {/* Black spacer to fill the gap above hero (covers main's pt-16 padding) */}
      <div className="h-16 bg-black -mt-16" aria-hidden="true" />
      <Hero
        title="Motorcycle Protection"
        subtitle="Premium Bike Detailing"
        image="/images/motorcycle-protection.webp"
        height="xlarge"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={false}
        subtitlePosition="below"
        contentOffset="mt-0"
        buttonVariant="metallic"
        titleVariant="metallic"
        subtitleColor="white"
      />

      {/* Featured Motorcycle Work - Prominent Showcase */}
      <FeaturedWorkShowcase
        title="Premium Bike Protection"
        subtitle="From sport bikes to cruisers, we deliver showroom-quality results"
        featuredImage={featuredMotoWork.featured}
        gridImages={featuredMotoWork.grid}
      />

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
              Protect your bike with our Ceramic Coatings and Stone Chip Protection Film from any
              damage to your paintwork. Whether you ride a sport bike, cruiser, or adventure
              motorcycle, our specialized protection services will keep your bike looking showroom
              fresh.
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
              What&apos;s Included
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
              * Pricing varies based on motorcycle size, type, and coverage requirements. Contact us
              for a custom quote for your specific bike.
            </p>
          </Card>
        </div>
      </section>

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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4" data-testid="section-ppf-standard">
              <div className="rounded-md overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all">
                <Image
                  src="/images/moto-ppf-standard.png"
                  alt="Standard PPF Kit coverage areas"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-md">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Standard Kit
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  Perfect for daily riders. Protects all high-impact areas including nose cone,
                  headlights, leading edge of side fairings, wheel guard, main tank wear areas and
                  seat/duck tail.
                </p>
                <p className="text-2xl font-bold text-primary">From $850</p>
              </div>
            </div>

            <div className="space-y-4" data-testid="section-ppf-extended">
              <div className="rounded-md overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all">
                <Image
                  src="/images/moto-ppf-extended.png"
                  alt="Extended PPF Kit coverage areas"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-md">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Extended Kit
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  Comprehensive protection including everything in Standard Kit plus full side
                  fairings (upper and lower) and top tank section. Ideal for sport bike enthusiasts.
                </p>
                <p className="text-2xl font-bold text-primary">From $2,200</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Ceramic Coating Packages by Bike Type
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div
                className="bg-card p-6 rounded-md hover-elevate active-elevate-2 transition-all"
                data-testid="card-sportsbike-ceramic"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Sports Bike</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Premium ceramic coating for high-performance sports bikes
                </p>
                <p className="text-2xl font-bold text-primary">$790</p>
              </div>
              <div
                className="bg-card p-6 rounded-md hover-elevate active-elevate-2 transition-all"
                data-testid="card-cruiser-ceramic"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Cruiser & Naked Bikes
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Full protection for standard and naked motorcycle models
                </p>
                <p className="text-2xl font-bold text-primary">$950</p>
              </div>
              <div
                className="bg-card p-6 rounded-md hover-elevate active-elevate-2 transition-all"
                data-testid="card-largecruiser-ceramic"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Large Cruiser
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Extended coverage for larger motorcycles and touring bikes
                </p>
                <p className="text-2xl font-bold text-primary">$1,100</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-md border border-border/50 text-center">
            <p className="text-foreground/60 text-sm">
              * All prices are starting from and vary based on motorcycle size, type, and specific
              requirements. Contact us for a custom quote tailored to your bike.
            </p>
          </div>
        </div>
      </section>

      {/* More Motorcycle Work */}
      <BentoImageGrid
        title="Our Workshop"
        subtitle="Professional installation in a controlled environment"
        images={moreMotoImages}
        variant="dense"
      />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: 'url(/images/pattern-logo.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
          }}
        />
        <div className="relative z-10">
          <FAQ items={faqItems} title="Motorcycle Protection FAQs" />
        </div>
      </section>

      <Testimonials />

      <ContactSection />
    </>
  );
}
