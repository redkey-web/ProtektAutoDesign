import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import RelatedServices from '@/components/RelatedServices';
import Testimonials from '@/components/Testimonials';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import BentoImageGrid from '@/components/BentoImageGrid';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Paint Correction Sydney | Cut & Polish | Machine Polishing | Protekt Auto',
  description:
    "Professional paint correction Sydney. Remove swirls, scratches & restore gloss with our machine polishing services. 3-stage correction from $660. Call (02) 8606 2842 for a quote.",
  keywords:
    'paint correction Sydney, cut and polish Sydney, machine polishing Sydney, swirl removal Sydney, car polishing Sydney',
  alternates: {
    canonical: 'https://protektauto.com.au/paint-correction',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'What stage of paint correction do I need?',
    answer:
      "The appropriate stage depends on your vehicle's paint condition and your expectations. Stage 1 is ideal for newer vehicles or light enhancement, Stage 2 is recommended for most vehicles with light to mild swirls and scratches, and Full Correction is for those seeking a defect-free finish. We recommend an inspection to determine the best option for your vehicle.",
  },
  {
    question: 'Will paint correction remove all scratches?',
    answer:
      'Paint correction can remove or significantly reduce 75-95% of swirls and scratches depending on the stage selected. However, very deep scratches that have penetrated through the clear coat cannot be fully removed without repainting. We assess each vehicle individually to set realistic expectations.',
  },
  {
    question: 'How long does paint correction take?',
    answer:
      "The duration varies based on the stage selected and vehicle size. Stage 1 typically takes 1 day, Stage 2 takes 1-2 days, and Full Correction can take 2-4 days depending on the paint's condition and complexity.",
  },
  {
    question: 'Should I get paint correction before ceramic coating?',
    answer:
      "Yes, we highly recommend paint correction before applying ceramic coating. The coating will lock in the current condition of your paint, so correcting imperfections first ensures you get the best possible result and maximum gloss from your coating.",
  },
  {
    question: 'How long will the results last?',
    answer:
      'With proper care and maintenance, paint correction results can last a long time. However, without protection like ceramic coating or regular waxing, environmental factors and washing can gradually reintroduce defects. We recommend protecting the corrected paint with our ceramic or graphene coatings for long-lasting results.',
  },
];

const stages = [
  {
    stage: 'Stage 1',
    title: 'Enhancement',
    price: 'From $660',
    description:
      "Recommended for newer vehicles or if you're looking to enhance the finish of your car's paint. This stage can remove or reduce fine swirls and hazing and restore paint to a slick and smooth finish.",
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

// Featured work images - prominent display
const featuredWork = {
  featured: {
    src: '/images/green-amg-gtr.png',
    alt: 'Green Mercedes-AMG GT R after full paint correction',
    title: 'Mercedes-AMG GT R',
    subtitle: 'Full Paint Correction & Ceramic Coating',
  },
  grid: [
    {
      src: '/images/red-ferrari-488.png',
      alt: 'Red Ferrari 488 paint correction',
      title: 'Ferrari 488',
      subtitle: 'Stage 2 Correction',
    },
    {
      src: '/images/red-porsche-gt2rs.png',
      alt: 'Red Porsche GT2 RS detailed',
      title: 'Porsche GT2 RS',
      subtitle: 'Full Correction',
    },
    {
      src: '/images/white-lamborghini.png',
      alt: 'White Lamborghini detailed',
      title: 'Lamborghini',
      subtitle: 'Showroom Finish',
    },
    {
      src: '/images/blue-bmw-m3.png',
      alt: 'Blue BMW M3 paint correction',
      title: 'BMW M3',
      subtitle: 'Stage 2 Correction',
    },
  ],
};

// More work gallery
const moreWorkImages = [
  {
    src: '/images/black-lamborghini-gallardo.png',
    alt: 'Black Lamborghini Gallardo detailed at Protekt Auto',
    title: 'Lamborghini Gallardo',
    subtitle: 'Showroom-Ready Finish',
  },
  {
    src: '/images/white-subaru-sti.png',
    alt: 'White Subaru WRX STI paint correction',
    title: 'Subaru WRX STI',
    subtitle: 'Track-Ready Detail',
  },
  {
    src: '/images/blue-subaru-polish.png',
    alt: 'Blue Subaru being polished',
    title: 'Machine Polishing',
    subtitle: 'Precision Technique',
  },
  {
    src: '/images/red-car-roof-polish.png',
    alt: 'Polishing car roof',
    title: 'Roof Correction',
    subtitle: 'Attention to Detail',
  },
  {
    src: '/images/coating-application.png',
    alt: 'Ceramic coating application',
    title: 'Coating Application',
    subtitle: 'Final Protection',
  },
  {
    src: '/images/taillight-detail.png',
    alt: 'Perfect paint correction detail work on taillight',
    title: 'Detail Work',
    subtitle: 'Flawless Finish',
  },
];

export default function PaintCorrection() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Paint Correction Sydney"
        subtitle="Professional Swirl Removal & Gloss Restoration"
        image="/images/paint-correction.webp"
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={false}
        subtitlePosition="below"
        contentOffset="-mt-[10%]"
      />

      {/* Featured Work - Prominent Showcase Right After Hero */}
      <FeaturedWorkShowcase
        title="Premium Results"
        subtitle="See the stunning transformations we achieve on high-end vehicles"
        featuredImage={featuredWork.featured}
        gridImages={featuredWork.grid}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Professional Paint Correction Services
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Paint correction is the most visually impactful exterior enhancement a detailer can
              make to a vehicle&apos;s exterior. If you want to enhance the gloss of your
              car&apos;s paint or remove unsightly swirls and scratches, then this is achievable
              with our paint correction and enhancement (machine polishing) services.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We use different grades of abrasive polishes and pads along with our modern-day
              polishing techniques and equipment to achieve the best finish possible from the
              packages we offer below.
            </p>
          </div>

          <div className="mb-16">
            <ProcessTimeline steps={stages} />
          </div>

          <Card className="p-6 bg-card/50">
            <p className="text-sm text-foreground/60 italic">
              * Prices quoted above are &quot;Starting From&quot; based on small size hatch/coupes
              and should only be used as an approximate guide. Prices/packages will vary depending
              on the size of the vehicle and paint colour. Due to the different finishes in modern
              paints, services are priced based on application (POA), and an inspection of the
              vehicle&apos;s paint condition is required prior to providing a quotation.
            </p>
          </Card>
        </div>
      </section>

      {/* More Work - Bento Grid */}
      <BentoImageGrid
        title="More of Our Work"
        subtitle="From everyday vehicles to exotic supercars, we deliver exceptional results"
        images={moreWorkImages}
        variant="default"
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
          <RelatedServices
            services={[
              {
                title: 'Ceramic Coating Sydney',
                description:
                  'Protect your freshly corrected paint with our premium ceramic or graphene coating for long-lasting shine.',
                link: '/ceramic-coating-sydney',
              },
              {
                title: 'Window Tinting',
                description:
                  'Complement your paint correction with professional ceramic window tinting for heat rejection and UV protection.',
                link: '/window-tinting-sydney',
              },
              {
                title: 'Protection Packages',
                description:
                  'Save with our complete packages that include paint correction, ceramic coating, and PPF installation.',
                link: '/packages',
              },
            ]}
          />

          <FAQ items={faqItems} title="Paint Correction FAQs" />
        </div>
      </section>

      <Testimonials />

      <ContactSection />
    </div>
  );
}
