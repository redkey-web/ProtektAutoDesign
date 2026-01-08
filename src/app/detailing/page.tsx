import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import RelatedServices from '@/components/RelatedServices';
import Testimonials from '@/components/Testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Shield, Clock, CheckCircle, Star, Calendar, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Detailing Sydney | Maintenance & Full Detail Packages | Protekt Auto',
  description:
    'Professional car detailing Sydney. Maintenance detail from $245, Pre-Sale detail from $650, Rejuvenation detail from $850, Interior detail from $395. Bring back your vehicle\'s finish. Call (02) 8606 2842',
  keywords:
    'car detailing sydney, maintenance detail sydney, pre-sale detail, rejuvenation detail, interior detail sydney, full car detail sydney, automotive detailing',
  alternates: {
    canonical: 'https://protektauto.com.au/detailing',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'What is included in a Maintenance Detail?',
    answer:
      'Our Maintenance Detail includes foam treatment, 2-bucket hand wash, wheels and wheel arches cleaned, door and boot jambs cleaned, general interior vacuum, wipe down of interior trims, interior deodorised, windows cleaned, tyres dressed, ceramic spray sealant application, and inspection of coated surfaces. This service is available only to vehicles with protection coatings applied by Protekt Auto.',
  },
  {
    question: 'How often should I get my car detailed?',
    answer:
      'For vehicles with ceramic coatings or PPF, we recommend a Maintenance Detail every 3-6 months to keep your protection performing optimally. For vehicles without protective coatings, a full detail every 6-12 months helps maintain your paint and interior condition.',
  },
  {
    question: 'What\'s the difference between Pre-Sale and Rejuvenation Detail?',
    answer:
      'Pre-Sale Detail focuses on presenting your car at its best for sale, with a light machine polish to remove minor swirls, paint decontamination, and comprehensive interior cleaning including engine bay detail. Rejuvenation Detail goes further with 2-stage paint decontamination (iron fallout removal + clay bar) and a Stage 1 enhancement polish, plus carpet and fabric shampoo for a more thorough restoration.',
  },
  {
    question: 'Can I get just an interior detail?',
    answer:
      'Yes! Our Interior Detail package focuses solely on your vehicle\'s cabin, including comprehensive vacuum, dash and trim cleaning and treatment, spot stain removal, roof lining cleaned, leather clean and condition, and carpet and fabric shampoo. Prices start from $395 for hatches and sports coupes.',
  },
  {
    question: 'Do you offer mobile detailing?',
    answer:
      'We operate from our fully-equipped workshop in Sydney, which allows us to achieve the best results with proper lighting, tools, and controlled conditions. This ensures consistent, high-quality detailing outcomes for every vehicle.',
  },
  {
    question: 'How long does a full detail take?',
    answer:
      'A Maintenance Detail typically takes 2-3 hours. Pre-Sale and Rejuvenation Details take 1-2 days depending on vehicle size and condition. Interior Details typically take 3-4 hours. We\'ll provide an accurate timeframe when you book.',
  },
];

const detailPackages = [
  {
    name: 'Maintenance Detail',
    subtitle: 'Available only to vehicles with protection coatings applied by Protekt Auto',
    features: [
      'Foam Treatment',
      '2 bucket hand wash',
      'Wheels and wheel arches cleaned',
      'Door and boot jambs cleaned',
      'General interior vacuum',
      'Wipe down of interior trims',
      'Interior deodorised',
      'Windows cleaned',
      'Tyres dressed',
      'Ceramic spray sealant application',
      'Inspection of coated surfaces',
    ],
    pricing: [
      { size: 'Cars & Sports coupes', price: '$245.00' },
      { size: "SUV's & People movers", price: '$295.00' },
    ],
    icon: Shield,
  },
  {
    name: 'Pre-Sale Detail',
    subtitle: 'Includes Maintenance Detail plus (minus coating inspection)',
    features: [
      'Paint decontamination (Clay bar treatment)',
      'Light (All in One) machine polish',
      'Comprehensive interior vacuum',
      'Spot stain removal',
      'Roof lining cleaned',
      'Dash and trim treatment',
      'Exhaust tips polished',
      'Engine bay detail',
    ],
    pricing: [
      { size: 'Hatches & Sports coupes', price: '$650.00' },
      { size: "Large cars - Medium SUV's", price: '$750.00' },
      { size: 'Large SUV/People Movers', price: '$890.00' },
    ],
    optionals: [
      'Leather clean & condition (from $95.00 - $125.00)',
      'Shampoo of fabric seats and carpets (from $195.00)',
    ],
    icon: Sparkles,
    popular: true,
  },
  {
    name: 'Rejuvenation Detail',
    subtitle: 'Includes Maintenance Detail plus (minus inspection coating)',
    features: [
      '2 Stage paint decontamination (Iron fallout removal and clay bar treatment)',
      'Stage 1 enhancement machine polish',
      'Comprehensive interior vacuum',
      'Shampoo of carpets and fabrics',
      'Roof lining cleaned',
      'Dash and trim treatment',
      'Leather clean and conditioned',
      'Exhaust tips polished',
    ],
    pricing: [
      { size: 'Hatches & Sports coupes', price: '$850.00' },
      { size: "Large cars & Medium SUV's", price: '$990.00' },
      { size: 'Large SUV/People Movers', price: '$1,100.00' },
    ],
    icon: Clock,
  },
  {
    name: 'Interior Detail',
    subtitle: 'Complete interior restoration',
    features: [
      'Comprehensive interior vacuum',
      'Dash & trims cleaned',
      'Dash and trim treatment',
      'Spot stain removal',
      'Roof lining cleaned',
      'Leather clean and condition',
      'Carpet & fabric shampoo',
    ],
    pricing: [
      { size: 'Hatches & Sports coupes', price: '$395.00' },
      { size: 'Large car - Medium SUV', price: '$500.00' },
      { size: 'Large SUV/People Movers', price: '$600.00' },
    ],
    icon: CheckCircle,
  },
];

export default function Detailing() {
  return (
    <>
      {/* Black spacer to fill the gap above hero (covers main's pt-16 padding) */}
      <div className="h-16 bg-black -mt-16" aria-hidden="true" />
      <Hero
        title="Maintenance Detailing"
        subtitle="Bring Back the Finish of Your Vehicle"
        image="/images/blue-subaru-polish.png"
        height="xlarge"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={false}
        subtitlePosition="below"
        contentOffset="-mt-[10%]"
        buttonVariant="metallic"
        titleVariant="metallic"
        subtitleColor="white"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sydney&apos;s Premium Automotive Detailing Specialists
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Don&apos;t have time to maintain your vehicle yourself? We can help with our
              maintenance detail packages which will preserve the finish of your vehicle or help
              with maintaining the protective coatings applied. We also offer full detail packages
              to bring back the finish of your vehicle to increase the resale value or simply to
              rejuvenate the surfaces so you can keep your pride and joy looking perfect for years
              to come.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 text-foreground/70">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">Since 2015</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="font-medium">4.9★ Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Car className="w-5 h-5 text-primary" />
                <span className="font-medium">Professional Products</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-medium">Expert Detailers</span>
              </div>
            </div>
          </div>

          {/* YouTube Video Demo */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              See Our Detailing Process
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Hnt3ebpjH8k?si=iV4yGJEMNY8N03Rd&controls=0"
                  title="Protekt Auto detailing process demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-foreground/60 text-sm text-center mt-4 italic">
                Watch our professional detailing process in action
              </p>
            </div>
          </div>

          {/* Detail Packages */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Detailing Packages
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {detailPackages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`hover-elevate active-elevate-2 transition-all ${
                    pkg.popular ? 'border-primary border-2' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    {pkg.popular && (
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-md mb-4">
                        Most Popular
                      </span>
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <pkg.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-bold">{pkg.name}</h4>
                        {pkg.subtitle && (
                          <p className="text-sm text-foreground/60 italic">{pkg.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground/80 mb-2">Includes:</p>
                      <ul className="space-y-1.5">
                        {pkg.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <span className="text-primary mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pkg.optionals && (
                      <div className="mb-6 p-3 bg-card/50 rounded-md">
                        <p className="text-sm font-medium text-foreground/80 mb-2">Optional:</p>
                        <ul className="space-y-1">
                          {pkg.optionals.map((optional, index) => (
                            <li key={index} className="text-sm text-foreground/60 italic">
                              {optional}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="border-t border-border pt-4">
                      <p className="text-sm font-medium text-foreground/80 mb-2">Prices from:</p>
                      <div className="space-y-1">
                        {pkg.pricing.map((price, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-foreground/70">{price.size}</span>
                            <span className="font-semibold text-primary">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-6 bg-card/50">
            <p className="text-sm text-foreground/60 italic text-center">
              * All prices listed are estimates only and extra charges may apply if vehicle is
              heavily contaminated or contains heavy soiling such as sand, pet hair, liquid spills
              or similar that requires additional cleaning time.
            </p>
          </Card>
        </div>
      </section>

      {/* Dark atmosphere section */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'url(/images/pattern-logo.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '80px 80px',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Subtle glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[500px] bg-primary/10 rounded-full blur-[180px]" />
        </div>
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        <div className="relative z-10">
          <RelatedServices
            variant="dark"
            services={[
              {
                title: 'Ceramic Coating Sydney',
                description:
                  'Protect your freshly detailed paint with ceramic coating for long-lasting shine and protection.',
                link: '/ceramic-coating-sydney',
              },
              {
                title: 'Paint Correction Sydney',
                description:
                  'Remove swirl marks, scratches and oxidation with our professional paint correction services.',
                link: '/paint-correction',
              },
              {
                title: 'Protection Packages',
                description:
                  'Combine detailing with PPF and ceramic coating for the ultimate vehicle protection.',
                link: '/packages',
              },
            ]}
          />

          <FAQ items={faqItems} title="Detailing FAQs" variant="dark" />
        </div>
      </section>

      <Testimonials />

      <ContactSection />
    </>
  );
}
