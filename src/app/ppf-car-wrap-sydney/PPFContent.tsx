'use client';

import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import UrgencyBanner from '@/components/UrgencyBanner';
import RelatedServices from '@/components/RelatedServices';
import Testimonials from '@/components/Testimonials';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import BentoImageGrid from '@/components/BentoImageGrid';
import SmoothScroll from '@/components/SmoothScroll';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, RefreshCw, Star, Calendar, Car, Sparkles, Check } from 'lucide-react';

interface CoverageOption {
  name: string;
  areas: string[];
  price: string;
  popular?: boolean;
}

interface WorkImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface FeaturedWork {
  featured: WorkImage;
  grid: WorkImage[];
}

interface PPFContentProps {
  faqItems: FAQItem[];
  coverageOptions: CoverageOption[];
  featuredPPFWork: FeaturedWork;
  morePPFImages: WorkImage[];
}

// Benefits defined inside client component to avoid serialization issues
const benefits = [
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

export default function PPFContent({
  faqItems,
  coverageOptions,
  featuredPPFWork,
  morePPFImages,
}: PPFContentProps) {
  return (
    <SmoothScroll>
      <>
        {/* Black spacer to fill the gap above hero (covers main's pt-16 padding) */}
        <div className="h-16 bg-black -mt-16" aria-hidden="true" />
        <Hero
          title="Paint Protection Film (PPF)"
          subtitle="Self-Healing • No Yellowing • XPEL Certified"
          image="/images/ppf.webp"
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

        {/* Benefits Bar */}
        <section className="py-12 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/60">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content wrapper - Batman atmosphere with SILVER animated effects */}
        <div className="relative bg-[#0a0a0a]">
          {/* Continuous Pattern Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'url(/images/pattern-logo.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '80px 80px',
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Animated SILVER/PLATINUM color blobs - Batman silver atmosphere */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Primary silver blob - top - with shimmer animation */}
            <div className="absolute top-[5%] left-[15%] w-[700px] h-[700px] bg-slate-400/12 rounded-full blur-[220px] animate-blob-1" />
            {/* Steel blue blob - middle right */}
            <div className="absolute top-[35%] right-[5%] w-[550px] h-[550px] bg-slate-500/10 rounded-full blur-[200px] animate-blob-2" />
            {/* Cool gray accent blob - bottom left */}
            <div className="absolute top-[55%] left-[0%] w-[450px] h-[450px] bg-zinc-400/8 rounded-full blur-[180px] animate-blob-3" />
            {/* Platinum accent blob - bottom */}
            <div className="absolute top-[75%] right-[25%] w-[600px] h-[600px] bg-neutral-400/10 rounded-full blur-[220px] animate-blob-pulse" />
            {/* Central silver pulse - large */}
            <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-slate-300/6 rounded-full blur-[280px] animate-blob-pulse" />
            {/* Shimmer accent - subtle white */}
            <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[120px] animate-shimmer" />
          </div>

          {/* Animated grain/noise overlay for shader effect */}
          <div
            className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Global dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

          {/* Video Demo Section - Right After Hero */}
          <section className="py-16 relative overflow-hidden">
            {/* Silver glow behind video */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[400px] bg-slate-400/10 rounded-full blur-[150px]" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white/90 mb-6 text-center">
                Watch PPF Protect Your Paint
              </h3>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ixeEho0xSAA?si=43r1ilch7GQh5KLK&controls=0"
                  title="PPF Protection Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-white/50 text-sm text-center mt-4 italic">
                See how PPF absorbs impacts and protects your vehicle&apos;s paint
              </p>
            </div>
          </section>

          {/* Featured PPF Work - Dark variant */}
          <FeaturedWorkShowcase
            title="Professional PPF Installation"
            subtitle="Premium protection for high-performance and luxury vehicles"
            featuredImage={featuredPPFWork.featured}
            gridImages={featuredPPFWork.grid}
            variant="dark"
          />

          {/* Main Content Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Silver neon glow effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[800px] h-[600px] bg-slate-400/12 rounded-full blur-[180px]" />
            </div>

            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)',
              }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <UrgencyBanner
                message="Popular models book 2-3 weeks out"
                highlight="Secure your spot now."
                icon="trending"
              />

              <div className="max-w-4xl mx-auto text-center my-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  Sydney&apos;s Best Paint Protection Film
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Our team are expert applicators of the renowned XPEL Paint Protection Film. Whether
                  you&apos;re a car enthusiast looking to preserve the flawless finish of your prized
                  possession or a daily driver seeking protection from Sydney&apos;s harsh roads, XPEL
                  PPF offers a superior paint protection solution. The film is optically clear, allowing
                  your vehicle&apos;s paint colour and vibrance to shine without distortion.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  <div className="flex items-center gap-2 text-white/70">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <span className="font-medium">Since 2015</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Star className="w-5 h-5 text-slate-400 fill-slate-400" />
                    <span className="font-medium">4.9★ Google Reviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Car className="w-5 h-5 text-slate-400" />
                    <span className="font-medium">XPEL Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Shield className="w-5 h-5 text-slate-400" />
                    <span className="font-medium">10-Year Warranty</span>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {benefits.map((benefit) => (
                  <Card key={benefit.title} className="bg-black/40 border-white/10 backdrop-blur-sm hover:border-slate-400/30 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-400/10 flex items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-slate-400" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-white">{benefit.title}</h3>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* XPEL Video Demo */}
              <div className="mb-16">
                <h3 className="font-display text-2xl font-bold text-white mb-6 text-center">
                  See XPEL PPF in Action
                </h3>
                <div className="max-w-3xl mx-auto">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/FtnQVjDho6M?si=8vIvBaGU0u0CX6ow&controls=0"
                      title="XPEL PPF demonstration"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-white/50 text-sm text-center mt-4 italic">
                    Watch XPEL PPF handle real-world impact and scratch tests
                  </p>
                </div>
              </div>

              {/* Coverage Options */}
              <div className="mb-16">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Coverage Options &amp; Pricing
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coverageOptions.map((option) => (
                    <Card
                      key={option.name}
                      className={`relative bg-black/40 border-white/10 backdrop-blur-sm transition-all hover:border-slate-400/30 ${
                        option.popular ? 'ring-2 ring-slate-400/50' : ''
                      }`}
                    >
                      {option.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-slate-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                            MOST POPULAR
                          </span>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h4 className="font-display text-xl font-bold text-white mb-2">{option.name}</h4>
                        <p className="text-2xl font-bold text-slate-400 mb-4">{option.price}</p>
                        <ul className="space-y-2">
                          {option.areas.map((area, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                              <Check className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-black/40 border-slate-400/20 backdrop-blur-sm">
                <p className="text-sm text-white/50 italic">
                  * Prices quoted above are &quot;Starting From&quot; based on standard vehicles. Prices will vary depending on the size of the vehicle, paint condition, and complexity of installation.
                </p>
              </Card>
            </div>
          </section>

          {/* More PPF Work Gallery */}
          <section className="py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#080808]" />
            <div className="relative z-10">
              <BentoImageGrid
                title="More of Our PPF Work"
                subtitle="Expert installation on vehicles of all types"
                images={morePPFImages}
                theme="dark"
              />
            </div>
          </section>

          {/* Related Services Section */}
          <section className="relative overflow-hidden">
            {/* Silver glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[400px] bg-slate-400/8 rounded-full blur-[150px]" />
            </div>

            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: 'url(/images/pattern-logo.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '100px 100px',
              }}
            />
            <div className="relative z-10">
              <RelatedServices
                services={[
                  {
                    title: 'Ceramic Coating',
                    description: 'Enhance your PPF with ceramic coating for added hydrophobic protection and shine.',
                    link: '/ceramic-coating-sydney',
                  },
                  {
                    title: 'Paint Correction',
                    description: 'Perfect your paint before PPF installation for a flawless finish underneath.',
                    link: '/paint-correction',
                  },
                  {
                    title: 'Window Tinting',
                    description: 'Complete your protection with professional ceramic window tinting.',
                    link: '/window-tinting-sydney',
                  },
                ]}
              />

              <FAQ items={faqItems} title="PPF FAQs" />
            </div>
          </section>

          <Testimonials />

          <ContactSection />
        </div>
      </>
    </SmoothScroll>
  );
}
