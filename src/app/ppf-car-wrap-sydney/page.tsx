import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import UrgencyBanner from '@/components/UrgencyBanner';
import RelatedServices from '@/components/RelatedServices';
import Testimonials from '@/components/Testimonials';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import BentoImageGrid from '@/components/BentoImageGrid';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, RefreshCw, LucideIcon, Star, Calendar, Car, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PPF Wrap Sydney | XPEL Paint Protection Film | From $1,750',
  description:
    'Expert XPEL PPF installation Sydney. Self-healing paint protection film from $1,750. Standard Front $1,750, Complete Front $2,600, Track Pack $3,500, Full Body $6,800. Call (02) 8606 2842',
  keywords:
    'ppf wrap sydney, xpel ppf sydney, ppf wrap cost, ppf sydney, ppf cost, paint protection film sydney, ppf installer sydney, stone chip protection sydney, clear bra sydney, ppf wrap price',
  alternates: {
    canonical: 'https://protektauto.com.au/ppf-car-wrap-sydney',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'How much does PPF cost in Sydney?',
    answer:
      'PPF pricing in Sydney varies based on coverage area. At Protekt Auto, our Standard Front Kit (bumper, bonnet edge, guards, mirrors) starts from $1,750. Complete Front Kit (full bonnet, full guards) starts from $2,600. Track Pack starts from $3,500, and Full Body PPF wrap starts from $6,800. Prices vary by vehicle size and complexity.',
  },
  {
    question: 'What is Paint Protection Film (PPF)?',
    answer:
      "PPF is a transparent, thermoplastic urethane film applied to your vehicle's painted surfaces. It provides a protective barrier against stone chips, scratches, bug splatter, and environmental damage while maintaining your paint's original appearance.",
  },
  {
    question: 'Does PPF really self-heal?',
    answer:
      'Yes! Our premium PPF features heat-activated self-healing technology. Minor scratches and swirl marks disappear when exposed to heat (from the sun or warm water), keeping your film looking pristine. Deeper cuts or gouges that penetrate through the film cannot self-heal.',
  },
  {
    question: 'How long does PPF last?',
    answer:
      'Quality PPF typically lasts 7-10 years with proper care and maintenance. Our films come with manufacturer warranties and resist yellowing, cracking, and peeling throughout their lifespan.',
  },
  {
    question: 'Can PPF be removed?',
    answer:
      'Yes, PPF can be professionally removed without damaging your paint. In fact, when removed, your paint underneath will look as good as the day it was applied, as it has been protected from the elements.',
  },
  {
    question: 'What coverage option should I choose?',
    answer:
      'It depends on your needs and budget. Partial Front is great for basic protection, Full Front is our most popular choice for comprehensive coverage of high-impact areas, Track Pack is ideal for performance driving, and Full Body provides maximum protection for the entire vehicle. We can help you decide based on your vehicle use.',
  },
];

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Shield,
    title: 'Stone Chip Protection',
    description: 'Absorbs damage from stone chips, road debris, and minor abrasions',
  },
  {
    icon: RefreshCw,
    title: 'Self-Healing',
    description: 'Advanced topcoat repairs minor scuffs and swirl marks automatically',
  },
  {
    icon: Sparkles,
    title: 'No Yellowing',
    description: 'Advanced technology prevents yellowing, maintaining original clarity',
  },
  {
    icon: Zap,
    title: 'Long-Lasting',
    description: 'Resistant to UV rays, discolouration, and degradation for years',
  },
];

const coverageOptions = [
  {
    name: 'Standard Front Kit',
    areas: ['Front bumper bar', 'Bonnet leading edge', 'Front guards', 'Side mirrors'],
    price: 'From $1,750',
  },
  {
    name: 'Complete Front Kit',
    areas: ['Front bumper', 'Full bonnet', 'Full front guards', 'Side mirrors'],
    price: 'From $2,600',
    popular: true,
  },
  {
    name: 'Track Pack',
    areas: [
      'Full front kit coverage',
      'Side sills',
      'A-pillars',
      'Leading edge of roof',
      'Partial lower wheel arch (behind rear wheel)',
    ],
    price: 'From $3,500',
  },
  {
    name: 'Full Sides',
    areas: ['Side doors (x4)', 'Front guards', 'Rocker panels', 'Rear guards', 'Top cant rails'],
    price: 'From $3,800',
  },
  {
    name: 'Wear & Tear Kit',
    areas: ['Door cups', 'Door edges', 'Top of rear bumper strip', 'Inner door sill strips'],
    price: 'From $550',
  },
  {
    name: 'Full Wraps',
    areas: ['All exterior painted panels', 'Complete vehicle coverage', 'Maximum protection'],
    price: 'From $6,800',
  },
];

// Featured PPF work - prominent display
const featuredPPFWork = {
  featured: {
    src: '/images/ppf-porsche-gt3.png',
    alt: 'Porsche GT3 with complete PPF protection',
    title: 'Porsche GT3',
    subtitle: 'Complete PPF Package - Full Body Protection',
  },
  grid: [
    { src: '/images/ppf-white-porsche.png', alt: 'PPF application on white Porsche', title: 'Porsche 911', subtitle: 'Front End Protection' },
    { src: '/images/ppf-blue-mustang.png', alt: 'Blue Ford Mustang PPF installation', title: 'Ford Mustang', subtitle: 'Full Front Kit' },
    { src: '/images/ppf-bmw-workshop.png', alt: 'BMW PPF installation in workshop', title: 'BMW', subtitle: 'Workshop Installation' },
    { src: '/images/ppf-blue-golf-r.png', alt: 'Blue Volkswagen Golf R', title: 'Volkswagen Golf R', subtitle: 'Front Protection' },
  ],
};

// More PPF work - process and detail shots
const morePPFImages = [
  { src: '/images/ppf-blue-hood.png', alt: 'PPF application on blue car hood', title: 'Wet Installation', subtitle: 'Professional Technique' },
  { src: '/images/ppf-red-car-heatgun.png', alt: 'Technician heat-forming PPF', title: 'Heat-Forming', subtitle: 'Expert Application' },
  { src: '/images/ppf-squeegee.png', alt: 'Professional squeegee technique', title: 'Squeegee Work', subtitle: 'Bubble-Free Finish' },
  { src: '/images/ppf-closeup.png', alt: 'Close-up of PPF application', title: 'Precision Detail', subtitle: 'Clean Edges' },
  { src: '/images/ppf-mercedes-wheel.png', alt: 'Mercedes-Benz detail', title: 'Mercedes-Benz', subtitle: 'Premium Protection' },
  { src: '/images/ppf-silver-s2000.png', alt: 'Silver Honda S2000', title: 'Honda S2000', subtitle: 'Classic Protection' },
];

export default function StonechipProtection() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Paint Protection Film (PPF)"
        subtitle="Self-Healing • No Yellowing • XPEL Certified"
        image="/images/ppf.webp"
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={false}
        subtitlePosition="below"
        contentOffset="-mt-[10%]"
      />

      {/* Featured PPF Work - Prominent Showcase */}
      <FeaturedWorkShowcase
        title="Professional PPF Installation"
        subtitle="Premium protection for high-performance and luxury vehicles"
        featuredImage={featuredPPFWork.featured}
        gridImages={featuredPPFWork.grid}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <UrgencyBanner
            message="Popular models book 2-3 weeks out"
            highlight="Secure your spot now."
            icon="trending"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sydney&apos;s Best Paint Protection Film
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Our team are expert applicators of the renowned XPEL Paint Protection Film. Whether
              you&apos;re a car enthusiast looking to preserve the flawless finish of your prized
              possession or a daily driver seeking protection from Sydney&apos;s harsh roads, XPEL
              PPF offers a superior paint protection solution. The film is optically clear, allowing
              your vehicle&apos;s paint colour and vibrance to shine without distortion.
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
                <span className="font-medium">XPEL Certified</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">10-Year Warranty</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover-elevate active-elevate-2 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-foreground/60 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* XPEL Video Demo */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              See XPEL PPF in Action
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/FtnQVjDho6M?si=8vIvBaGU0u0CX6ow&controls=0"
                  title="XPEL PPF demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-foreground/60 text-sm text-center mt-4 italic">
                Watch XPEL&apos;s self-healing technology repair minor scratches
              </p>
            </div>
          </div>

          {/* XPEL Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Digitally Templated Kits
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  We use digitally templated professional kits to ensure a perfect fit for your
                  vehicle&apos;s make and model. This precision-cut approach increases accuracy and
                  cleaner fitment, resulting in a virtually invisible application and extended
                  durability on Sydney&apos;s streets.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Complete Coverage & Protection
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  XPEL PPF features excellent adhesion and edge seal technology. Our professional
                  installers use specialised techniques to ensure the film adheres securely to the
                  curves and contours of your car, providing maximum coverage and protection.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Long-Lasting Performance
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  XPEL PPF offers long-lasting performance with proper maintenance. The film is
                  resistant to UV rays, discolouration, and degradation, protecting against stone
                  chips, bug splatters, bird droppings, and Sydney&apos;s harsh road conditions for
                  years.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Easy to Maintain
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  XPEL PPF is easy to maintain. The film can be washed and treated with ceramic spray
                  sealants and waxes like your vehicle&apos;s paint. It&apos;s also resistant to most
                  common automotive chemicals, making it compatible with regular car care products.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Coverage Options
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageOptions.map((option) => (
                <Card
                  key={option.name}
                  className={`hover-elevate active-elevate-2 transition-all ${
                    option.popular ? 'border-primary border-2' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    {option.popular && (
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-md mb-4">
                        Most Popular
                      </span>
                    )}
                    <h4 className="font-display text-xl font-bold mb-2">{option.name}</h4>
                    <p className="text-2xl font-bold text-primary mb-4">{option.price}</p>
                    <ul className="space-y-2">
                      {option.areas.map((area, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-card rounded-lg">
              <p className="text-foreground/70 text-sm">
                <strong className="text-foreground">Bulk and custom fitting services</strong> are
                also available for maximum coverage. Prices are based on the application required.
              </p>
              <p className="text-foreground/60 text-xs mt-3 italic">
                * Prices quoted above are &quot;Starting From&quot; based on small-size hatch/coupes
                and should only be used as an approximate guide. Prices/packages will vary depending
                on the size and trim level of the vehicle. Additional costs apply for applications
                to plastic, carbon and painted trims.
              </p>
            </div>
          </div>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                  Standard + Front Coverage
                </h3>
                <div className="max-w-full mx-auto">
                  <Image
                    src="/images/ppf-standard-front.webp"
                    alt="Standard + Front PPF coverage diagram showing protected areas: side mirrors, leading edge bonnet, leading edge front guards, and full front bumper"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-md"
                    data-testid="img-standard-front-coverage"
                  />
                  <p className="text-foreground/70 text-sm text-center mt-4 italic">
                    Basic protection for high-impact front areas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                  Track Pack Coverage
                </h3>
                <div className="max-w-full mx-auto">
                  <Image
                    src="/images/ppf-track-pack.webp"
                    alt="Track Pack PPF coverage diagram showing protected areas: side mirrors, A-pillars, leading edge roof, full bonnet, full front guards, side sills, and full front bumper"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-md"
                    data-testid="img-track-pack-coverage"
                  />
                  <p className="text-foreground/70 text-sm text-center mt-4 italic">
                    Enhanced protection for performance driving
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6 bg-card/50">
            <p className="text-sm text-foreground/60 italic text-center">
              * All PPF installations include XPEL Fusion LITE ceramic coating applied to the film
              for enhanced protection and easier maintenance. Prices vary based on vehicle size and
              complexity. Contact us for a custom quote tailored to your vehicle.
            </p>
          </Card>
        </div>
      </section>

      {/* More PPF Work - Process & Detail Shots */}
      <BentoImageGrid
        title="Installation Process"
        subtitle="See the precision and expertise that goes into every PPF application"
        images={morePPFImages}
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
                  'Maximize protection by adding ceramic coating on top of your PPF for enhanced gloss and easier cleaning.',
                link: '/ceramic-coating-sydney',
              },
              {
                title: 'Paint Correction Sydney',
                description:
                  'Prepare your paint surface with professional correction before PPF installation for the best results.',
                link: '/paint-correction',
              },
              {
                title: 'Protection Packages',
                description:
                  'Get the ultimate protection with our packages combining PPF, ceramic coating, and paint correction.',
                link: '/packages',
              },
            ]}
          />

          <FAQ items={faqItems} title="Paint Protection Film FAQs" />
        </div>
      </section>

      <Testimonials />

      <ContactSection />
    </div>
  );
}
