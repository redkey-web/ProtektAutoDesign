import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import ContactSection from '@/components/ContactSection';
import QuoteCalculator from '@/components/QuoteCalculator';
import Testimonials from '@/components/Testimonials';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';

export const metadata: Metadata = {
  title: 'Car Protection Packages Sydney | Ceramic Coating & PPF Packages | Protekt Auto',
  description:
    'Complete car protection packages Sydney. Ceramic coating, PPF & paint correction bundles. Enthusiast, Street, Track & Complete packages from $2,500. Save with package deals. Call (02) 8606 2842',
  keywords:
    'car protection packages Sydney, ceramic coating packages, PPF packages Sydney, vehicle protection bundles, car detailing packages Sydney',
  alternates: {
    canonical: 'https://protektauto.com.au/packages',
  },
};

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

export default function Packages() {
  return (
    <>
      {/* Black spacer to fill the gap above hero (covers main's pt-16 padding) */}
      <div className="h-16 bg-black -mt-16" aria-hidden="true" />
      <Hero
        title="Protection Packages"
        subtitle="Complete Vehicle Protection"
        image="/images/packages.webp"
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

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Protection Level
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Give your vehicle the best protection with our package options or tailor it to your
              requirements. Each package is designed to provide comprehensive protection while
              fitting different needs and budgets.
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
                tailored to your specific needs, vehicle type, and budget. Our team will work with
                you to design the perfect solution.
              </p>
              <p className="text-sm text-foreground/60 italic text-center">
                * Prices quoted above are &quot;Starting From&quot; based on small size hatch/coupes
                and should only be used as an approximate guide. Prices/packages will vary depending
                on the size and trim level of vehicle.
              </p>
            </div>
          </div>

          <QuoteCalculator />
        </div>
      </section>

      <FeaturedWorkShowcase
        title="Package Results"
        subtitle="See the difference our complete protection packages make"
        featuredImage={{
          src: '/images/ram-showroom.png',
          alt: 'RAM 1500 TRX with complete protection package in modern showroom',
          title: 'RAM 1500 TRX',
          subtitle: 'Complete protection package with PPF, ceramic coating & window tint',
        }}
        gridImages={[
          {
            src: '/images/tesla-white.png',
            alt: 'White Tesla Model 3 with ceramic coating and window tinting',
            title: 'Tesla Model 3',
            subtitle: 'Street Package',
          },
          {
            src: '/images/ppf-porsche-gt3.png',
            alt: 'Porsche GT3 with track pack PPF protection',
            title: 'Porsche GT3',
            subtitle: 'Track Package',
          },
          {
            src: '/images/green-amg-gtr.png',
            alt: 'Mercedes-AMG GT R with paint correction and ceramic coating',
            title: 'AMG GT R',
            subtitle: 'Enthusiast Package',
          },
          {
            src: '/images/white-lamborghini.png',
            alt: 'White Lamborghini Huracan with complete PPF protection',
            title: 'Lamborghini Huracán',
            subtitle: 'Complete Package',
          },
        ]}
      />

      <Testimonials />

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
          <ContactSection />
        </div>
      </section>
    </>
  );
}
