'use client';

import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import RelatedServices from '@/components/RelatedServices';
import Testimonials from '@/components/Testimonials';
import FeaturedWorkShowcase from '@/components/FeaturedWorkShowcase';
import BentoImageGrid from '@/components/BentoImageGrid';
import SmoothScroll from '@/components/SmoothScroll';
import { Card } from '@/components/ui/card';

interface Stage {
  stage: string;
  title: string;
  price: string;
  description: string;
  items: string[];
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

interface PaintCorrectionContentProps {
  faqItems: FAQItem[];
  stages: Stage[];
  featuredWork: FeaturedWork;
  moreWorkImages: WorkImage[];
}

export default function PaintCorrectionContent({
  faqItems,
  stages,
  featuredWork,
  moreWorkImages,
}: PaintCorrectionContentProps) {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        {/* Fixed black strip behind header */}
        <div className="fixed top-0 left-0 right-0 h-20 bg-black z-0" />

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
          buttonVariant="metallic"
          titleVariant="metallic"
          subtitleColor="white"
        />

        {/* Main content wrapper - Batman atmosphere with GOLD animated blobs */}
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

          {/* Animated GOLD/AMBER color blobs - Batman gold atmosphere */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Primary gold blob - top */}
            <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[200px] animate-blob-1" />
            {/* Deep gold blob - middle right */}
            <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-yellow-600/12 rounded-full blur-[180px] animate-blob-2" />
            {/* Warm orange accent blob - bottom left */}
            <div className="absolute top-[60%] left-[5%] w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[160px] animate-blob-3" />
            {/* Bronze accent blob - bottom */}
            <div className="absolute top-[80%] right-[30%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[200px] animate-blob-pulse" />
            {/* Central gold pulse */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/8 rounded-full blur-[250px] animate-blob-pulse" />
          </div>

          {/* Global dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

          {/* Featured Work - Prominent Showcase with GOLD variant */}
          <FeaturedWorkShowcase
            title="Premium Results"
            subtitle="See the stunning transformations we achieve on high-end vehicles"
            featuredImage={featuredWork.featured}
            gridImages={featuredWork.grid}
            variant="dark"
          />

          {/* Content Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Dark dramatic background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

            {/* Gold neon glow effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[800px] h-[600px] bg-amber-500/15 rounded-full blur-[180px]" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-yellow-500/10 blur-[150px]" />

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: 'url(/images/pattern-logo.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '60px 60px',
                backgroundAttachment: 'fixed',
              }}
            />

            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)',
              }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                  Sydney&apos;s Premier Paint Correction &amp; Enhancement Specialists
                </h2>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                  <p>
                    Paint correction is the most visually impactful exterior enhancement a detailer
                    can make to a vehicle&apos;s exterior. If you want to enhance the gloss of your
                    car&apos;s paint or remove unsightly swirls and scratches, then this is
                    achievable with our paint correction and enhancement (machine polishing)
                    services.
                  </p>
                  <p>
                    We use different grades of abrasive polishes and pads along with our modern-day
                    polishing techniques and equipment to achieve the best finish possible from the
                    packages we offer below.
                  </p>
                  <p>
                    Due to the different finishes in modern paints, paint correction and enhancement
                    services are priced based on application (POA), and an inspection of the
                    vehicle&apos;s paint condition is required prior to providing a quotation.
                  </p>
                  <p>
                    Paints that are soft (Japanese cars) tend to correct easier but take time to
                    refine, whereas some vehicles with hard ceramic clear coats (European) will take
                    more time to penetrate the clear coat. Dark or solid coloured paints require
                    more time as more refinement is needed to achieve a hologram-free finish than
                    lighter metallic paints.
                  </p>
                  <p>
                    Below is an approximate price guide required to carry out each paint correction
                    service based on a standard-size car with light to moderate-grade paint defects.
                  </p>
                </div>
              </div>

              {/* YouTube Video Demo */}
              <div className="mb-16">
                <h3 className="font-display text-2xl font-bold text-white mb-6 text-center">
                  See Paint Correction in Action
                </h3>
                <div className="max-w-3xl mx-auto">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-amber-500/20">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/3wLZG0JO7Vc?si=KbUdFmbIQzlwlqSy&controls=0"
                      title="Paint correction demonstration"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-white/50 text-sm text-center mt-4 italic">
                    Watch our professional machine polishing technique restore paint clarity
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <ProcessTimeline steps={stages} variant="gold" />
              </div>

              <Card className="p-6 bg-black/40 border-amber-500/20 backdrop-blur-sm">
                <p className="text-sm text-white/50 italic">
                  * Prices quoted above are &quot;Starting From&quot; based on small size
                  hatch/coupes and should only be used as an approximate guide. Prices will vary
                  depending on the size of the vehicle, paint colour, and condition.
                </p>
              </Card>
            </div>
          </section>

          {/* More Work - Bento Grid */}
          <section className="py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#080808]" />
            <div className="relative z-10">
              <BentoImageGrid
                title="More of Our Work"
                subtitle="From everyday vehicles to exotic supercars, we deliver exceptional results"
                images={moreWorkImages}
                theme="dark"
              />
            </div>
          </section>

          {/* Related Services Section */}
          <section className="relative overflow-hidden">
            {/* Gold glow for related services */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[150px]" />
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
      </div>
    </SmoothScroll>
  );
}
