import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';
import ContactSection from '@/components/ContactSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import FAQ, { FAQItem } from '@/components/FAQ';
import SEO from '@/components/SEO';
import RelatedServices from '@/components/RelatedServices';
import { Card } from '@/components/ui/card';
import heroImage from '@assets/Paint correction_1763294797362.webp';
import ceramicImage from '@assets/generated_images/Ceramic_coating_hero_image_2e9cd7e0.png';
import patternLogo from '@assets/image_1764055702258.png';
import whiteLamborghini from '@assets/image_1764079097517.png';
import greenAMGGTR from '@assets/image_1764079112946.png';
import redFerrari488 from '@assets/image_1764079158599.png';
import blackLamborghiniGallardo from '@assets/image_1764079173185.png';
import redPorscheGT2RS from '@assets/image_1764079188912.png';
import blackDucati900 from '@assets/image_1764079206025.png';
import orangeHarley from '@assets/image_1764079222888.png';
import taillightDetail from '@assets/image_1764079236797.png';
import silverPajero2 from '@assets/image_1764079248918.png';
import whiteSubaruSTI from '@assets/image_1764079281717.png';

export default function PaintCorrection() {
  const faqItems: FAQItem[] = [
    {
      question: 'What stage of paint correction do I need?',
      answer: 'The appropriate stage depends on your vehicle\'s paint condition and your expectations. Stage 1 is ideal for newer vehicles or light enhancement, Stage 2 is recommended for most vehicles with light to mild swirls and scratches, and Full Correction is for those seeking a defect-free finish. We recommend an inspection to determine the best option for your vehicle.',
    },
    {
      question: 'Will paint correction remove all scratches?',
      answer: 'Paint correction can remove or significantly reduce 75-95% of swirls and scratches depending on the stage selected. However, very deep scratches that have penetrated through the clear coat cannot be fully removed without repainting. We assess each vehicle individually to set realistic expectations.',
    },
    {
      question: 'How long does paint correction take?',
      answer: 'The duration varies based on the stage selected and vehicle size. Stage 1 typically takes 1 day, Stage 2 takes 1-2 days, and Full Correction can take 2-4 days depending on the paint\'s condition and complexity.',
    },
    {
      question: 'Should I get paint correction before ceramic coating?',
      answer: 'Yes, we highly recommend paint correction before applying ceramic coating. The coating will lock in the current condition of your paint, so correcting imperfections first ensures you get the best possible result and maximum gloss from your coating.',
    },
    {
      question: 'How long will the results last?',
      answer: 'With proper care and maintenance, paint correction results can last a long time. However, without protection like ceramic coating or regular waxing, environmental factors and washing can gradually reintroduce defects. We recommend protecting the corrected paint with our ceramic or graphene coatings for long-lasting results.',
    },
  ];

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
      <SEO
        title="Paint Correction Sydney | Cut & Polish | Machine Polishing | Protekt Auto"
        description="Professional paint correction Sydney. Remove swirls, scratches & restore gloss with our machine polishing services. 3-stage correction from $660. Call (02) 8606 2842 for a quote."
        keywords="paint correction Sydney, cut and polish Sydney, machine polishing Sydney, swirl removal Sydney, car polishing Sydney"
        canonical="https://protektauto.com.au/paint-correction"
      />
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

      <section className="py-20 bg-card relative overflow-hidden">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BeforeAfterSlider
              beforeImage={heroImage}
              afterImage={ceramicImage}
              title="See The Difference - Paint Correction Results"
            />
          </div>
        </div>
      </section>

      {/* Paint Correction Gallery */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `url(${patternLogo})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Paint Correction Work
            </h2>
            <p className="text-foreground/70 text-lg">
              See the stunning results of our professional paint correction services on premium vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-lamborghini-huracan"
            >
              <img
                src={whiteLamborghini}
                alt="White Lamborghini Huracan after paint correction"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Lamborghini Huracan</p>
                <p className="text-xs text-white/80">Premium Paint Correction</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-amg-gtr"
            >
              <img
                src={greenAMGGTR}
                alt="Green Mercedes-AMG GT R paint correction in workshop"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Mercedes-AMG GT R</p>
                <p className="text-xs text-white/80">Full Paint Correction</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ferrari-488"
            >
              <img
                src={redFerrari488}
                alt="Red Ferrari 488 paint correction service"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Ferrari 488</p>
                <p className="text-xs text-white/80">Stage 2 Paint Correction</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-lamborghini-gallardo"
            >
              <img
                src={blackLamborghiniGallardo}
                alt="Black Lamborghini Gallardo detailed at Protekt Auto"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Lamborghini Gallardo</p>
                <p className="text-xs text-white/80">Showroom-Ready Finish</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-porsche-gt2rs"
            >
              <img
                src={redPorscheGT2RS}
                alt="Red Porsche GT2 RS paint correction"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Porsche GT2 RS</p>
                <p className="text-xs text-white/80">Professional Detailing</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-subaru-sti"
            >
              <img
                src={whiteSubaruSTI}
                alt="White Subaru WRX STI paint correction"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Subaru WRX STI</p>
                <p className="text-xs text-white/80">Track-Ready Detail</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-taillight-detail"
            >
              <img
                src={taillightDetail}
                alt="Perfect paint correction detail work on taillight"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Precision Detail Work</p>
                <p className="text-xs text-white/80">Flawless Finish</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ducati-900"
            >
              <img
                src={blackDucati900}
                alt="Ducati 900 motorcycle detailing"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Ducati 900</p>
                <p className="text-xs text-white/80">Motorcycle Paint Correction</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-harley-davidson"
            >
              <img
                src={orangeHarley}
                alt="Harley-Davidson motorcycle at Protekt Auto"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Harley-Davidson</p>
                <p className="text-xs text-white/80">Premium Motorcycle Care</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-pajero"
            >
              <img
                src={silverPajero2}
                alt="Mitsubishi Pajero complete detailing package"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Mitsubishi Pajero</p>
                <p className="text-xs text-white/80">Complete Detail Package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices
        services={[
          {
            title: 'Ceramic Coating Sydney',
            description: 'Protect your freshly corrected paint with our premium ceramic or graphene coating for long-lasting shine.',
            link: '/new-car-protection',
          },
          {
            title: 'Window Tinting',
            description: 'Complement your paint correction with professional ceramic window tinting for heat rejection and UV protection.',
            link: '/window-tinting',
          },
          {
            title: 'Protection Packages',
            description: 'Save with our complete packages that include paint correction, ceramic coating, and PPF installation.',
            link: '/packages',
          },
        ]}
      />

      <FAQ items={faqItems} title="Paint Correction FAQs" />

      <ContactSection />
    </div>
  );
}
