import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import UrgencyBanner from '@/components/UrgencyBanner';
import RelatedServices from '@/components/RelatedServices';
import Testimonials from '@/components/Testimonials';
import GoogleReviewSummary from '@/components/GoogleReviewSummary';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import BentoImageGrid from '@/components/BentoImageGrid';

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
    answer: 'Ceramic coating is a liquid polymer applied to your vehicle\'s exterior that chemically bonds with the factory paint, creating a permanent protective layer. Unlike wax or sealants that wash away, ceramic coating provides long-term protection (5-7 years) against UV damage, oxidation, chemical stains, bird droppings, and environmental contaminants. It also creates a hydrophobic surface that repels water and makes washing much easier.',
  },
  {
    question: 'How much does ceramic coating cost in Sydney?',
    answer: 'Our ceramic coating packages in Sydney start from $950 for the Professional Ceramic Coating with a 5-year guarantee. The Premium Graphene Coating starts from $1,350 with a 7-year guarantee. Prices vary based on vehicle size and paint condition. All our packages include 2.5 hours of machine polishing to ensure a perfect surface before coating application.',
  },
  {
    question: 'What is the difference between Ceramic and Graphene coatings?',
    answer: 'Graphene coatings contain enhanced graphene nanoparticles that make them significantly more robust and durable than traditional ceramic coatings. They offer superior corrosion resistance, an intense deeper gloss finish, and easier long-term maintenance. Graphene coatings also come with a 7-year guarantee versus the 5-year guarantee for ceramic coatings.',
  },
  {
    question: 'How long does the coating last?',
    answer: 'Our Ceramic Professional coating comes with a 5-year guarantee, while our Graphene Professional coating includes a 7-year guarantee. The actual lifespan can be even longer with proper maintenance and care.',
  },
  {
    question: 'Does the coating protect against scratches?',
    answer: 'While ceramic and graphene coatings significantly improve scratch resistance and protect against minor abrasions, they are not scratch-proof. For maximum protection against stone chips and deeper scratches, we recommend combining the coating with Paint Protection Film (PPF).',
  },
  {
    question: 'How should I maintain my coated vehicle?',
    answer: 'Coated vehicles are much easier to maintain. We recommend regular washing with pH-neutral car wash soap, avoiding automatic car washes with harsh brushes, and periodic application of a ceramic booster spray to maintain the hydrophobic properties.',
  },
  {
    question: 'Can the coating be applied to any vehicle?',
    answer: 'Yes, ceramic and graphene coatings can be applied to any vehicle regardless of age or condition. However, for optimal results and to ensure the coating bonds properly, we include paint preparation and machine polishing with every coating application.',
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

// Featured ceramic coating work
const featuredCeramicWork = {
  featured: {
    src: '/images/blue-amg.png',
    alt: 'Blue Mercedes-Benz AMG with premium ceramic coating',
    title: 'Mercedes-Benz AMG',
    subtitle: 'Premium Graphene Ceramic Coating - 7 Year Protection',
  },
  grid: [
    { src: '/images/red-kia-stinger.png', alt: 'Red Kia Stinger', title: 'Kia Stinger', subtitle: 'Ceramic Coating' },
    { src: '/images/blue-mazda-cx5.png', alt: 'Blue Mazda CX-5', title: 'Mazda CX-5', subtitle: 'New Car Protection' },
    { src: '/images/blue-bmw-m3.png', alt: 'Blue BMW M3', title: 'BMW M3', subtitle: 'Premium Finish' },
    { src: '/images/tesla-white.png', alt: 'White Tesla', title: 'Tesla', subtitle: 'EV Protection' },
  ],
};

// More ceramic coating work
const moreCeramicImages = [
  { src: '/images/silver-pajero.png', alt: 'Silver Pajero', title: 'Mitsubishi Pajero', subtitle: 'Complete Package' },
  { src: '/images/black-minivan.png', alt: 'Black minivan', title: 'Family Vehicle', subtitle: 'Mirror Finish' },
  { src: '/images/blue-subaru-polish.png', alt: 'Polishing Subaru', title: 'Paint Preparation', subtitle: 'Machine Polish' },
  { src: '/images/red-car-roof-polish.png', alt: 'Roof polish', title: 'Detail Work', subtitle: 'Rupes Polish' },
  { src: '/images/coating-application.png', alt: 'Coating application', title: 'Expert Application', subtitle: 'Precision Work' },
  { src: '/images/ram-showroom.png', alt: 'RAM in showroom', title: 'RAM Truck', subtitle: 'Full Coverage' },
];

export default function NewCarProtection() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Ceramic Coating Sydney"
        subtitle="Need Paint Protection for a New Car? Nothing Protects Like Ceramic & Graphene Coatings"
        image="/images/ceramic-coating.webp"
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={false}
        subtitlePosition="below"
        contentOffset="-mt-[10%]"
      />

      {/* Featured Ceramic Coating Work */}
      <FeaturedWorkShowcase
        title="Stunning Results"
        subtitle="Premium ceramic and graphene coatings for lasting protection and showroom shine"
        featuredImage={featuredCeramicWork.featured}
        gridImages={featuredCeramicWork.grid}
      />

      <GoogleReviewSummary />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <UrgencyBanner
            message="Limited spots available this month."
            highlight="Only 4 new car protection slots remaining!"
            icon="clock"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Premium Paint Protection Coatings
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Keep your new car&apos;s paint in perfect condition with Protekt Auto&apos;s premium Ceramic and Graphene paint protection coatings. Our coatings provide maximum durability, a high gloss, and make ongoing care for your vehicle&apos;s paintwork much easier.
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

      {/* More Ceramic Coating Work */}
      <BentoImageGrid
        title="More of Our Work"
        subtitle="From daily drivers to luxury vehicles, we deliver exceptional ceramic coating results"
        images={moreCeramicImages}
        variant="default"
      />

      <section className="relative overflow-hidden">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: 'url(/images/pattern-logo.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
          }}
        />
        <div className="relative z-10">
          <RelatedServices
            services={[
              {
                title: 'Paint Correction Sydney',
                description: 'Remove swirls and scratches with our professional machine polishing service before ceramic coating application.',
                link: '/paint-correction',
              },
              {
                title: 'Paint Protection Film',
                description: 'Add self-healing PPF to high-impact areas for maximum protection against stone chips and road debris.',
                link: '/ppf-car-wrap-sydney',
              },
              {
                title: 'Protection Packages',
                description: 'Save with our complete protection packages combining ceramic coating, PPF, and paint correction.',
                link: '/packages',
              },
            ]}
          />

          <FAQ items={faqItems} title="Ceramic Coating FAQs" />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
