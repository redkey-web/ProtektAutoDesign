'use client';

import Image from 'next/image';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import TintComparison from '@/components/TintComparison';
import FAQ, { FAQItem } from '@/components/FAQ';
import UrgencyBanner from '@/components/UrgencyBanner';
import Testimonials from '@/components/Testimonials';
import RelatedServices from '@/components/RelatedServices';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import SmoothScroll from '@/components/SmoothScroll';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Sun, Thermometer, Eye, Check, LucideIcon, Star, Calendar, Car } from 'lucide-react';
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem, ParallaxSlideIn, ParallaxFade, ParallaxScale } from '@/components/ScrollAnimations';

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

// All window tinting work - combined gallery
const allTintWork = {
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

interface WindowTintingContentProps {
  faqItems: FAQItem[];
}

export default function WindowTintingContent({ faqItems }: WindowTintingContentProps) {
  return (
    <SmoothScroll>
    <div className="min-h-screen">
      {/* Black spacer to fill the gap above hero (covers main's pt-16 padding) */}
      <div className="h-16 bg-black -mt-16" aria-hidden="true" />

      <Hero
        title="Premium Window Tinting"
        subtitle="Block 99% UV • Stay Cool • Stay Legal"
        image="/images/window-tinting.webp"
        height="xlarge"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={false}
        subtitlePosition="below"
        contentOffset="mt-[5%]"
        overlayStyle="light"
        titleVariant="metallic"
        buttonVariant="metallic"
        subtitleColor="white"
      />

      {/* Main content wrapper - Batman atmosphere with animated blobs */}
      <div className="relative bg-[#080808]">
        {/* Continuous Pattern Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: 'url(/images/pattern-logo.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '80px 80px',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Animated color blobs - subtle color shifts */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Primary cyan blob - top */}
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[200px] animate-blob-1" />
          {/* Deep blue blob - middle right */}
          <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] animate-blob-2" />
          {/* Subtle purple blob - bottom left */}
          <div className="absolute top-[60%] left-[5%] w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[160px] animate-blob-3" />
          {/* Warm accent blob - bottom */}
          <div className="absolute top-[80%] right-[30%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px] animate-blob-pulse" />
          {/* Secondary cyan pulse - center */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[250px] animate-blob-pulse" />
        </div>

        {/* Global dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      {/* Intro Section with Video */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        {/* Dark dramatic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

        {/* Neon glow effect - bright and vivid */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[900px] h-[700px] bg-primary/30 rounded-full blur-[200px]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/25 blur-[150px]" />
        {/* Additional neon accent */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-primary/20 blur-[120px]" />

        {/* Pattern Overlay - stronger for dark section */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'url(/images/pattern-logo.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '80px 80px',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Vignette effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* Headline slides in from left - parallax scroll-linked */}
            <ParallaxSlideIn direction="left" speed={1.2}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 relative">
                <span className="absolute inset-0 blur-2xl bg-black/60 -z-10 scale-150" />
                Quality Carbon to Ceramic Grade Films
              </h2>
            </ParallaxSlideIn>

            {/* Description fades up with parallax */}
            <ParallaxFade speed={0.8}>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Protect yourself from harmful UV rays (block out up to 99% of harmful UV rays),
                infrared, glare, and heat of the sun. Our quality carbon to ceramic grade films
                provide the perfect balance of performance, aesthetics, and protection for your
                vehicle.
              </p>
            </ParallaxFade>

            {/* Trust Signals stagger in */}
            <StaggerContainer className="flex flex-wrap justify-center gap-6 md:gap-10" staggerDelay={0.08}>
              <StaggerItem className="flex items-center gap-2 text-white/70">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">Since 2015</span>
              </StaggerItem>
              <StaggerItem className="flex items-center gap-2 text-white/70">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="font-medium">4.9★ Google Reviews</span>
              </StaggerItem>
              <StaggerItem className="flex items-center gap-2 text-white/70">
                <Car className="w-5 h-5 text-primary" />
                <span className="font-medium">1000+ Vehicles Tinted</span>
              </StaggerItem>
              <StaggerItem className="flex items-center gap-2 text-white/70">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">Lifetime Warranty</span>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* YouTube Video Demo - parallax scale */}
          <ParallaxScale speed={0.5}>
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/VnLmuumbiaA?si=soch1xI664nBi_LZ&controls=1"
                  title="Window tinting demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-white/50 text-sm text-center mt-4 italic">
                Watch our professional window tinting process
              </p>
            </div>
          </ParallaxScale>
        </div>
      </section>

      {/* Featured Window Tinting Work - Combined Horizontal Gallery */}
      <FeaturedWorkShowcase
        title="Our Recent Work"
        subtitle="Premium ceramic and carbon window tinting for all vehicle types"
        featuredImage={allTintWork.featured}
        gridImages={allTintWork.grid}
        variant="metallic"
        layout="pinned-horizontal"
        testimonials={[
          {
            quote: "Best tint job in Sydney. The ceramic tint keeps my Tesla so much cooler, even in peak summer.",
            author: "Michael T.",
            vehicle: "Tesla Model 3",
            rating: 5,
          },
          {
            quote: "Professional service from start to finish. My RAM looks incredible with the 20% all round.",
            author: "David K.",
            vehicle: "RAM 1500",
            rating: 5,
          },
        ]}
      />

      {/* XPEL Authorised Dealer Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/xpel-logo.webp"
                  alt="XPEL Authorised Dealer"
                  width={120}
                  height={40}
                  className="h-10 w-auto brightness-110"
                />
                <Badge variant="outline" className="text-primary border-primary/50">
                  Authorised Dealer
                </Badge>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Car Window Tinting in Sydney & Parramatta
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Protekt Auto is an authorised XPEL dealer and one of the few businesses in Sydney that
                utilises a <strong className="text-primary">computer cut machine</strong> to digitally cut out the shape of the window tint
                films for your car.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                The advantage of this is that films are cut to precision and <strong className="text-primary">no cuts are done on the
                vehicle</strong> which eliminates the risk of damaging exterior trims and mouldings. Our carbon
                graphite and ceramic films ensure colour stability while offering a high standard of UV and
                infrared protection.
              </p>
            </SlideInLeft>
            <SlideInRight>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  Why Choose XPEL Window Films?
                </h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  <StaggerItem className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Durable construction with scratch-resistant top coat</span>
                  </StaggerItem>
                  <StaggerItem className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Signal safe - won&apos;t interfere with GPS or mobile</span>
                  </StaggerItem>
                  <StaggerItem className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Blocks 99% of harmful UV rays</span>
                  </StaggerItem>
                  <StaggerItem className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Up to 96% infrared heat rejection</span>
                  </StaggerItem>
                  <StaggerItem className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">Lifetime warranty on film & labour</span>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {/* Brand Logos */}
          <FadeUp className="mb-12">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <Image
                src="/images/nxtzen-logo.png"
                alt="NXTZEN"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/xpel-logo.webp"
                alt="XPEL"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/ultimate-plus-logo.png"
                alt="Ultimate Plus"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <UrgencyBanner
              message="Summer wait times up to 2 weeks"
              highlight="Book now to secure your spot."
              icon="trending"
              variant="dark"
            />
          </FadeUp>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="hover-elevate active-elevate-2 transition-all h-full bg-black/30 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-white">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp>
            <TintComparison variant="dark" />
          </FadeUp>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <SlideInLeft delay={0.1}>
              <Card className="bg-black/30 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
                    ADDITIONAL BENEFITS
                  </h3>
                  <StaggerContainer className="grid gap-4" staggerDelay={0.06}>
                    {additionalBenefits.map((benefit, index) => (
                      <StaggerItem
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{benefit}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </SlideInLeft>
            <SlideInRight delay={0.1}>
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
            </SlideInRight>
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactSection />

      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Beyond Automotive
            </h3>
            <p className="text-white/70 text-lg mb-8">
              We also offer Commercial and Residential Window Tinting, Frosted Glass, and Natural
              Stone Protection Film services.
            </p>
            <a
              href="https://www.protektsurfacesolutions.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              data-testid="button-protekt-surface-solutions"
            >
              <Image
                src="/images/protekt-surface-logo.png"
                alt="Protekt Surface Solutions"
                width={240}
                height={60}
                className="h-14 md:h-16 w-auto brightness-0 invert"
              />
            </a>
          </FadeUp>
        </div>
      </section>

      <section className="relative z-10">
        <div className="relative">
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
            variant="dark"
          />

          <FAQ items={faqItems} title="Window Tinting FAQs" />
        </div>
      </section>

      </div>{/* End of pattern background wrapper */}
    </div>
    </SmoothScroll>
  );
}
