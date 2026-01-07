import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import TintComparison from '@/components/TintComparison';
import FAQ, { FAQItem } from '@/components/FAQ';
import UrgencyBanner from '@/components/UrgencyBanner';
import Testimonials from '@/components/Testimonials';
import RelatedServices from '@/components/RelatedServices';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import BentoImageGrid from '@/components/BentoImageGrid';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Sun, Thermometer, Eye, Check, LucideIcon, Star, Calendar, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'XPEL Window Tinting Sydney | Ceramic Tint Parramatta | From $160',
  description:
    'Authorised XPEL dealer for car window tinting in Sydney & Parramatta. PRIME CS, XR & XR PLUS ceramic films. Computer-cut precision, 99% UV block, lifetime warranty. From $160. Call (02) 8606 2842',
  keywords:
    'xpel window tinting sydney, window tinting sydney, ceramic tint sydney, xpel prime xr, car window tinting parramatta, darkest legal window tint nsw, xpel authorised dealer sydney',
  alternates: {
    canonical: 'https://protektauto.com.au/window-tinting-sydney',
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'What is the darkest legal window tint in NSW?',
    answer:
      'In NSW, the darkest legal tint for front side windows is 35% VLT (Visible Light Transmission), meaning at least 35% of light must pass through. Rear side windows and the back windscreen can be any darkness, including 5% (limo tint). The windscreen can only have a visor strip on the top 10%. We offer 35% ceramic tint for front windows and darker options for rear windows while keeping you fully road legal.',
  },
  {
    question: 'Is window tinting legal in NSW?',
    answer:
      'Yes, window tinting is legal in NSW with specific regulations. The front side windows must allow at least 35% of light through, and the windscreen can only have tint on the top 10% (visor strip). The rear windows and back windscreen can be darker. All our tints comply with NSW regulations.',
  },
  {
    question: 'How long does window tinting take?',
    answer:
      'A full vehicle tint typically takes 2-4 hours depending on the vehicle size and complexity. The tint needs to cure for 2-3 days before you can wind down the windows or clean them.',
  },
  {
    question: "What's the difference between carbon and ceramic tint?",
    answer:
      'Carbon tint offers excellent heat rejection and UV protection at a great value. Ceramic tint provides superior heat rejection (up to 50% more than carbon), better clarity, no signal interference, and longer-lasting performance. Ceramic is our premium option for maximum comfort and protection.',
  },
  {
    question: 'Will tinting affect my GPS, phone, or radio signals?',
    answer:
      "Our ceramic tints are completely signal-friendly and won't interfere with GPS, mobile phones, or radio signals. Some metallic tints can cause interference, which is why we recommend ceramic films for the best performance.",
  },
  {
    question: 'How do I maintain my window tint?',
    answer:
      "Wait 2-3 days after installation before cleaning. Use a soft cloth with mild soap and water or ammonia-free glass cleaner. Avoid abrasive materials and harsh chemicals. Don't wind windows down for the first 2-3 days to allow proper curing.",
  },
];

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Sun,
    title: 'UV Protection',
    description: 'Block out up to 99% of harmful UV rays protecting you and your interior',
  },
  {
    icon: Thermometer,
    title: 'Heat Rejection',
    description: 'Reduce cabin temperature and improve comfort with superior heat rejection',
  },
  {
    icon: Eye,
    title: 'Glare Reduction',
    description: 'Minimize glare for safer, more comfortable driving in all conditions',
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Enhanced privacy and added security for your vehicle and belongings',
  },
];

const additionalBenefits = [
  'Prevents interior fading and cracking',
  'Reduces eye strain and fatigue',
  'Increases privacy and security',
  'Enhances vehicle appearance',
  'Helps maintain resale value',
  'Protects against skin damage',
];

// Featured window tinting work
const featuredTintWork = {
  featured: {
    src: '/images/ram-showroom.png',
    alt: 'RAM 1500 TRX with professional ceramic window tinting',
    title: 'RAM 1500 TRX',
    subtitle: 'Premium Ceramic Window Tint - Full Vehicle',
  },
  grid: [
    { src: '/images/tesla-white.png', alt: 'White Tesla', title: 'Tesla Model 3', subtitle: 'Ceramic Tint' },
    { src: '/images/camry-side.png', alt: 'Toyota Camry', title: 'Toyota Camry', subtitle: 'Complete Package' },
    { src: '/images/window-tint-team.webp', alt: 'Tinting team', title: 'Expert Team', subtitle: 'Professional Install' },
    { src: '/images/camry-rear.png', alt: 'Camry rear', title: 'Finished Work', subtitle: 'NSW Legal' },
  ],
};

// More tinting work
const moreTintImages = [
  { src: '/images/workshop-action.png', alt: 'Workshop', title: 'Expert Application', subtitle: 'Precision Work' },
  { src: '/images/black-minivan.png', alt: 'Black minivan', title: 'Family Vehicle', subtitle: 'Privacy Tint' },
  { src: '/images/silver-pajero.png', alt: 'Silver Pajero', title: 'Mitsubishi Pajero', subtitle: 'UV Protection' },
];

export default function WindowTinting() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Premium Window Tinting"
        subtitle="Block 99% UV • Stay Cool • Stay Legal"
        image="/images/window-tinting.webp"
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={false}
        subtitlePosition="below"
        contentOffset="-mt-[10%]"
        overlayStyle="light"
        titleVariant="deep-metallic"
      />

      {/* Intro Section with Video */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quality Carbon to Ceramic Grade Films
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Protect yourself from harmful UV rays (block out up to 99% of harmful UV rays),
              infrared, glare, and heat of the sun. Our quality carbon to ceramic grade films
              provide the perfect balance of performance, aesthetics, and protection for your
              vehicle.
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
                <span className="font-medium">1000+ Vehicles Tinted</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">Lifetime Warranty</span>
              </div>
            </div>
          </div>

          {/* YouTube Video Demo */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              See Window Tinting in Action
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/VnLmuumbiaA?si=soch1xI664nBi_LZ&controls=1"
                  title="Window tinting demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-foreground/60 text-sm text-center mt-4 italic">
                Watch our professional window tinting process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Window Tinting Work */}
      <FeaturedWorkShowcase
        title="Our Recent Work"
        subtitle="Premium ceramic and carbon window tinting for all vehicle types"
        featuredImage={featuredTintWork.featured}
        gridImages={featuredTintWork.grid}
      />

      {/* XPEL Authorised Dealer Section */}
      <section className="py-16 bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/xpel-logo.webp"
                  alt="XPEL Authorised Dealer"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <Badge variant="outline" className="text-primary border-primary">
                  Authorised Dealer
                </Badge>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Car Window Tinting in Sydney & Parramatta
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Protekt Auto is an authorised XPEL dealer and one of the few businesses in Sydney that
                utilises a <strong>computer cut machine</strong> to digitally cut out the shape of the window tint
                films for your car.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                The advantage of this is that films are cut to precision and <strong>no cuts are done on the
                vehicle</strong> which eliminates the risk of damaging exterior trims and mouldings. Our carbon
                graphite and ceramic films ensure colour stability while offering a high standard of UV and
                infrared protection.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Why Choose XPEL Window Films?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Durable construction with scratch-resistant top coat</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Signal safe - won&apos;t interfere with GPS or mobile</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Blocks 99% of harmful UV rays</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Up to 96% infrared heat rejection</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Lifetime warranty on film & labour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <UrgencyBanner
            message="Summer wait times up to 2 weeks"
            highlight="Book now to secure your spot."
            icon="trending"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <TintComparison />

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-card/50">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                    ADDITIONAL BENEFITS
                  </h3>
                  <div className="grid gap-4">
                    {additionalBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                        data-testid={`additional-benefit-${index}`}
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <Image
                src="/images/window-tint-team.webp"
                alt="Professional window tinting application by Protekt Auto team"
                width={600}
                height={400}
                className="w-full h-auto rounded-md shadow-lg"
                data-testid="img-team-work"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Expert Precision Application</p>
                <p className="text-xs text-white/80">
                  Our certified technicians ensure flawless results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Window Tinting Work */}
      <BentoImageGrid
        title="More Installations"
        subtitle="Quality window tinting for every vehicle type"
        images={moreTintImages}
        variant="dense"
      />

      <section className="py-16 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Beyond Automotive
            </h3>
            <p className="text-foreground/70 text-lg mb-8">
              We also offer Commercial and Residential Window Tinting, Frosted Glass, and Natural
              Stone Protection Film services.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-testid="button-protekt-surface-solutions"
            >
              <a
                href="https://www.protektsurfacesolutions.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/protekt-surface-logo.png"
                  alt="Protekt Surface Solutions"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </Button>
          </div>
        </div>
      </section>

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
                  'Protect your vehicle with our premium ceramic or graphene coating for long-lasting shine.',
                link: '/ceramic-coating-sydney',
              },
              {
                title: 'Paint Correction',
                description:
                  'Restore your paint to perfection with our professional machine polishing services.',
                link: '/paint-correction',
              },
              {
                title: 'Protection Packages',
                description:
                  'Save with our complete packages that include window tinting, ceramic coating, and PPF.',
                link: '/packages',
              },
            ]}
          />

          <FAQ items={faqItems} title="Window Tinting FAQs" />
        </div>
      </section>

      <Testimonials />

      <ContactSection />
    </div>
  );
}
