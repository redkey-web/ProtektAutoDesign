import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import ContactSection from '@/components/ContactSection';
import heroImage from '@assets/Ceramic coating service Sydney - New Car Protection_1763295133288.webp';

export default function NewCarProtection() {
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
      <Hero
        title="Ceramic & Graphene Coating"
        subtitle="Sydney's Best Applicators"
        description="The ultimate new car paint protection"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Premium Paint Protection Coatings
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Keep your new car's paint in perfect condition with Protekt Auto's premium Ceramic and
              Graphene paint protection coatings. Our coatings provide maximum durability, a high
              gloss, and make ongoing care for your vehicle's paintwork much easier.
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

      <ContactSection />
    </div>
  );
}
