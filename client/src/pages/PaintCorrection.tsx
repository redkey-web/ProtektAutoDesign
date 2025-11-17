import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';
import ContactSection from '@/components/ContactSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { Card } from '@/components/ui/card';
import heroImage from '@assets/Paint correction_1763294797362.webp';
import ceramicImage from '@assets/generated_images/Ceramic_coating_hero_image_2e9cd7e0.png';

export default function PaintCorrection() {
  const stages = [
    {
      stage: 'Stage 1',
      title: 'Enhancement',
      price: 'From $660',
      description:
        'Recommended for newer vehicles or if you\'re looking to enhance the finish of your car\'s paint. This stage can remove or reduce fine swirls and hazing and restore paint to a slick and smooth finish.',
      items: [
        'Pre foam & full exterior wash',
        'Paint Clayed (to remove paint contaminants)',
        'Trims and rubbers taped up',
        'Stage 1 machine polish',
        'Alcohol wipe down',
        'Windows cleaned',
        'Tyres & Trims treated',
        'Application of ceramic spray sealant',
      ],
    },
    {
      stage: 'Stage 2',
      title: 'Paint Enhancement/Correction',
      price: 'From $1,100',
      description:
        'Stage 2 paint correction can remove or reduce light to mild swirls and scratches by 75-85% and improve the paints gloss and clarity. This is the minimum recommended for dark and solid coloured vehicles.',
      items: [
        'Pre-foam & full exterior wash',
        'Paint Clayed (to remove paint contaminants)',
        'Trims and rubbers taped up',
        'Stage 2 machine polish',
        'Alcohol wipe down',
        'Windows cleaned',
        'Tyres & Trims treated',
        'Application of ceramic spray sealant',
      ],
    },
    {
      stage: 'Full',
      title: 'Full Paint Correction',
      price: 'POA',
      description:
        'Recommended if you are seeking a defect free paint finish and ultimate clarity and reflections. We can remove or reduce as many paint defects as possible (90-95%) whilst still leaving a safe amount of clear coat on the paint. This is achieved through a 3-5 stage machine polishing process with some light wet sanding if required.',
      items: [
        'Pre foam & full exterior wash (2 washes)',
        'Paint Clayed (to remove paint contaminants)',
        'Trims and rubbers taped up',
        '3 – 5 Stage machine polish',
        'Alcohol wipe down',
        'Windows cleaned',
        'Tyres & Trims treated',
        'Application of ceramic spray sealant',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Paint Correction & Enhancement"
        subtitle="Automotive Paint Correction"
        description="Sydney's Premier Paint Correction Specialists"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Professional Paint Correction Services
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Paint correction is the most visually impactful exterior enhancement a detailer can make to a vehicle's exterior. If you want to enhance the gloss of your car's paint or remove unsightly swirls and scratches, then this is achievable with our paint correction and enhancement (machine polishing) services.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We use different grades of abrasive polishes and pads along with our modern-day polishing techniques and equipment to achieve the best finish possible from the packages we offer below.
            </p>
          </div>

          <div className="mb-16">
            <ProcessTimeline steps={stages} />
          </div>

          <Card className="p-6 bg-card/50">
            <p className="text-sm text-foreground/60 italic">
              * Prices quoted above are "Starting From" based on small size hatch/coupes and should only
              be used as an approximate guide. Prices/packages will vary depending on the size of the
              vehicle and paint colour. Due to the different finishes in modern paints, services are
              priced based on application (POA), and an inspection of the vehicle's paint condition is
              required prior to providing a quotation.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            beforeImage={heroImage}
            afterImage={ceramicImage}
            title="See The Difference - Paint Correction Results"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
