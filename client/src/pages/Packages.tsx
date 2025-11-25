import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import ContactSection from '@/components/ContactSection';
import QuoteCalculator from '@/components/QuoteCalculator';
import SEO from '@/components/SEO';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import heroImage from '@assets/Full packages Protekt Auto_1763295209283.webp';
import patternLogo from '@assets/image_1764055702258.png';

export default function Packages() {
  const enthusiastFeatures = [
    'Full exterior snow foam wash',
    'Chemical & clay bar decontamination',
    '2 Stage paint enhancement/correction',
    'Ceramic professional coating (single layer)',
    'Exterior glass coating',
    'Wheel face coating (set of 4)',
  ];

  const streetFeatures = [
    'Everything in Enthusiast Package',
    'Full front PPF (XPEL Ultimate Plus)',
    'Front bumper bar coverage',
    'Full bonnet protection',
    'Full front guards',
    'Side mirrors & headlights',
    'XPEL Fusion LITE ceramic on PPF',
  ];

  const trackFeatures = [
    'Everything in Enthusiast Package',
    'Track Pack PPF (XPEL Ultimate Plus)',
    'Full front coverage',
    'Lower side sills protection',
    'A-pillars coverage',
    'Leading edge of roof',
    'Partial rear wheel arch',
    'XPEL Fusion LITE ceramic on PPF',
  ];

  const completeFeatures = [
    'Full exterior snow foam wash',
    'Chemical & clay bar decontamination',
    '2 Stage paint enhancement/correction',
    'Full body PPF application',
    'All exterior painted panels',
    'Headlights protected',
    'XPEL Fusion LITE ceramic on PPF',
    'All exterior glass coated',
    'Wheel face coating (set of 4)',
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Car Protection Packages Sydney | Ceramic Coating & PPF Packages | Protekt Auto"
        description="Complete car protection packages Sydney. Ceramic coating, PPF & paint correction bundles. Enthusiast, Street, Track & Complete packages from $2,500. Save with package deals. Call (02) 8606 2842"
        keywords="car protection packages Sydney, ceramic coating packages, PPF packages Sydney, vehicle protection bundles, car detailing packages Sydney"
        canonical="https://protektauto.com.au/packages"
      />
      <Hero
        title="Protection Packages"
        subtitle="Complete Vehicle Protection"
        description="Packages to care for all types of vehicles and budgets"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={true}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <TrustBadges />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Protection Level
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Give your vehicle the best protection with our package options or tailor it to your requirements. Each package is designed to provide comprehensive protection while fitting different needs and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <PricingCard
              name="Enthusiast Coating Package"
              price="From $1,600"
              features={enthusiastFeatures}
              ctaText="Select Package"
            />
            <PricingCard
              name="Signature Street Package"
              price="From $4,100"
              features={streetFeatures}
              popular={true}
              ctaText="Select Package"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <PricingCard
              name="Signature Track Package"
              price="From $4,950"
              features={trackFeatures}
              ctaText="Select Package"
            />
            <PricingCard
              name="Complete PPF Package"
              price="From $7,500"
              features={completeFeatures}
              ctaText="Select Package"
            />
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Custom Packages Available
              </h3>
              <p className="text-foreground/70 text-center mb-6">
                Not sure which package is right for you? We can create a custom protection package
                tailored to your specific needs, vehicle type, and budget. Our team will work with you
                to design the perfect solution.
              </p>
              <p className="text-sm text-foreground/60 italic text-center">
                * Prices quoted above are "Starting From" based on small size hatch/coupes and should
                only be used as an approximate guide. Prices/packages will vary depending on the size
                and trim level of vehicle.
              </p>
            </div>
          </div>

          <QuoteCalculator />
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
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
