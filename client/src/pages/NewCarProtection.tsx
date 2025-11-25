import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import SEO from '@/components/SEO';
import UrgencyBanner from '@/components/UrgencyBanner';
import RelatedServices from '@/components/RelatedServices';
import heroImage from '@assets/Ceramic coating service Sydney - New Car Protection_1763295133288.webp';
import patternLogo from '@assets/image_1764055702258.png';

export default function NewCarProtection() {
  const faqItems: FAQItem[] = [
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

  return (
    <div className="min-h-screen">
      <SEO
        title="Ceramic Coating Sydney | Graphene Coating | New Car Protection | Protekt Auto"
        description="Best ceramic coating Sydney. Premium ceramic & graphene coatings for new cars with 5-7 year guarantees. Professional application from $950. Protect your new car's paint with Protekt Auto. Book now (02) 8606 2842"
        keywords="ceramic coating Sydney, graphene coating Sydney, new car paint protection, ceramic coating near me, car ceramic coating Sydney"
        canonical="https://protektauto.com.au/new-car-protection"
      />
      <Hero
        title="Ceramic Coating Sydney"
        subtitle="Need Paint Protection for a New Car? Nothing Protects Like Ceramic & Graphene Coatings"
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
              Keep your new car's paint in perfect condition with Protekt Auto's premium Ceramic and Graphene paint protection coatings. Our coatings provide maximum durability, a high gloss, and make ongoing care for your vehicle's paintwork much easier.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative w-full rounded-lg overflow-hidden shadow-xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/VnLmuumbiaA?si=NbahIa814vG7dN0Q&amp;start=1"
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
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
            link: '/stonechip-protection',
          },
          {
            title: 'Protection Packages',
            description: 'Save with our complete protection packages combining ceramic coating, PPF, and paint correction.',
            link: '/packages',
          },
        ]}
      />

      <FAQ items={faqItems} title="Ceramic Coating FAQs" />

      <ContactSection />
    </div>
  );
}
