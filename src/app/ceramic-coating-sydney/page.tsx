import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery';

export const metadata: Metadata = {
  title: 'Best Ceramic Coating Sydney | Graphene Coating Near Me | From $950',
  description: "Sydney's #1 ceramic coating specialists. Premium ceramic & graphene coatings with 5-7 year guarantees. Best ceramic coating near me from $950. Professional new car paint protection. Call Protekt Auto (02) 8606 2842",
  keywords: 'best ceramic coating sydney, ceramic coating near me, graphene coating sydney, ceramic coating sydney cost, car ceramic coating sydney, new car paint protection sydney, ceramic coating price sydney',
  alternates: {
    canonical: 'https://protektauto.com.au/ceramic-coating-sydney',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'What is ceramic coating for cars?',
    answer: 'Ceramic coating is a liquid polymer that chemically bonds with your paint, creating a permanent protective layer. It provides 5-7 years of protection against UV damage, oxidation, and environmental contaminants, plus creates a hydrophobic surface that makes washing easier.',
  },
  {
    question: 'How much does ceramic coating cost in Sydney?',
    answer: 'Our ceramic coating starts from $950 with a 5-year guarantee. The Premium Graphene Coating starts from $1,250 with a 7-year guarantee. Prices vary by vehicle size. All packages include machine polishing for a perfect surface.',
  },
  {
    question: 'What is the difference between Ceramic and Graphene coatings?',
    answer: 'Graphene coatings contain enhanced nanoparticles that make them more durable than traditional ceramic. They offer superior corrosion resistance, deeper gloss, and easier maintenance. Graphene comes with a 7-year guarantee versus 5 years for ceramic.',
  },
  {
    question: 'Does the coating protect against scratches?',
    answer: 'Ceramic and graphene coatings improve scratch resistance and protect against minor abrasions, but are not scratch-proof. For maximum protection against stone chips, we recommend combining coating with Paint Protection Film (PPF).',
  },
];

const ceramicFeatures = [
  'Silicon Carbide (SiC) main component',
  'Permanent covalent bond to surface',
  'Resistant to acids and alkalis',
  'Super-slick hydrophobic finish',
  'Easy maintenance and cleaning',
  '2.5 hours machine polishing included',
];

const grapheneFeatures = [
  'Enhanced graphene nanoparticle coating',
  'Significantly more robust and durable',
  'Superior corrosion resistance',
  'Intense, deeper gloss finish',
  'Easier long-term maintenance',
  '2.5 hours machine polishing included',
];

const interiorFeatures = [
  'Full interior vacuum',
  'Interior trims cleaned with prep solution',
  'Leather/vinyl coating on all surfaces',
  'Fibre coating on carpets and fabrics',
  'Protects against stains and dye transfer',
  'Maintains factory satin appearance',
];

// Combined gallery images for horizontal scroll
const galleryImages = [
  { src: '/images/blue-amg.png', alt: 'Blue Mercedes-Benz AMG with premium ceramic coating', title: 'Mercedes-Benz AMG', subtitle: '7-Year Graphene Protection' },
  { src: '/images/red-kia-stinger.png', alt: 'Red Kia Stinger', title: 'Kia Stinger', subtitle: 'Ceramic Coating' },
  { src: '/images/blue-mazda-cx5.png', alt: 'Blue Mazda CX-5', title: 'Mazda CX-5', subtitle: 'New Car Protection' },
  { src: '/images/blue-bmw-m3.png', alt: 'Blue BMW M3', title: 'BMW M3', subtitle: 'Premium Finish' },
  { src: '/images/tesla-white.png', alt: 'White Tesla', title: 'Tesla', subtitle: 'EV Protection' },
  { src: '/images/silver-pajero.png', alt: 'Silver Pajero', title: 'Mitsubishi Pajero', subtitle: 'Complete Package' },
  { src: '/images/coating-application.png', alt: 'Coating application', title: 'Expert Application', subtitle: 'Precision Work' },
  { src: '/images/ram-showroom.png', alt: 'RAM in showroom', title: 'RAM Truck', subtitle: 'Full Coverage' },
];

export default function NewCarProtection() {
  return (
    <>
      {/* Black spacer to fill the gap above hero (covers main's pt-16 padding) */}
      <div className="h-16 bg-black -mt-16" aria-hidden="true" />
      <Hero
        title="Ceramic & Graphene Coating Sydney"
        subtitle="Next-Gen Graphene Protection with 7-Year Guarantee"
        image="/images/ceramic-coating.webp"
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

      {/* Gallery - Horizontal Scroll */}
      <HorizontalScrollGallery
        title="Our Work"
        subtitle="Premium ceramic and graphene coatings for lasting protection"
        images={galleryImages}
        variant="dark"
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Premium Paint Protection Coatings
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Protect your vehicle&apos;s paint with Protekt Auto&apos;s premium Graphene and Ceramic coatings. Our advanced graphene technology delivers superior durability, an intense deep gloss, and makes ongoing maintenance effortless—backed by up to 7 years of guaranteed protection.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative w-full rounded-lg overflow-hidden shadow-xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/O4DKBON2hzs?si=NBUCVlrwm2GKTS7b"
                title="Ceramic Coating Application Process"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                data-testid="video-ceramic-coating"
              />
            </div>
            <p className="text-foreground/70 text-sm text-center mt-4 italic">
              Watch our professional ceramic coating application process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <PricingCard
              name="Ceramic Professional"
              price="From $950"
              guarantee="5-year guarantee"
              features={ceramicFeatures}
            />
            <PricingCard
              name="Graphene Professional"
              price="From $1,250"
              guarantee="7-year guarantee"
              features={grapheneFeatures}
              popular={true}
            />
          </div>
          <p className="text-foreground/60 text-xs text-center mb-16 italic max-w-2xl mx-auto">
            * &quot;From&quot; prices listed are based on a small sized vehicle. Price will vary depending on size and colour of the vehicle.
          </p>

          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Interior Protection
            </h3>
            <PricingCard
              name="Interior Fabric/Leather/Vinyl Protection"
              price="From $400"
              features={interiorFeatures}
              ctaText="Add to Quote"
            />

            <div className="mt-12 p-6 bg-card rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Additional Options:</h4>
              <div className="space-y-3 text-foreground/70">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span>Ceramic Wheel Coating (outer face, set of 4)</span>
                  <span className="font-semibold text-primary">From $200</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span>Ceramic Wheel Coating (inner & outer, set of 4)</span>
                  <span className="font-semibold text-primary">From $400</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span>Ceramic Brake Calliper Coating (set of 4)</span>
                  <span className="font-semibold text-primary">$150</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span>Exterior Glass Coating (windscreen only)</span>
                  <span className="font-semibold text-primary">$50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Exterior Glass Coating (all glass)</span>
                  <span className="font-semibold text-primary">$150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ items={faqItems} title="Ceramic Coating FAQs" variant="dark" />

      <ContactSection />
    </>
  );
}
