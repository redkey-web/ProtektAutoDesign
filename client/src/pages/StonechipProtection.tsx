import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import FAQ, { FAQItem } from '@/components/FAQ';
import SEO from '@/components/SEO';
import UrgencyBanner from '@/components/UrgencyBanner';
import RelatedServices from '@/components/RelatedServices';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Droplets, RefreshCw } from 'lucide-react';
import heroImage from '@assets/PPF _1763343626090.webp';
import standardFrontImage from '@assets/Standard+Front.png_1764037467188.webp';
import trackPackImage from '@assets/Track+pack.png_1764037523863.webp';
import patternLogo from '@assets/image_1764055702258.png';
import ppfBlueHood from '@assets/image_1764078701691.png';
import ppfMercedesWheel from '@assets/image_1764078688742.png';
import ppfRedCarHeatGun from '@assets/image_1764078670534.png';
import ppfBlueMustangLift from '@assets/image_1764078653120.png';
import ppfBlackCarSqueegee from '@assets/image_1764078620864.png';
import ppfWhitePorsche from '@assets/image_1764078599443.png';
import ppfPorscheGT3 from '@assets/image_1764078577631.png';
import ppfApplicationCloseup from '@assets/image_1764078535126.png';
import ppfBMWWorkshop from '@assets/image_1764078523774.png';
import ppfBlueGolfR from '@assets/image_1764078505288.png';
import ppfSilverS2000 from '@assets/image_1764078467974.png';

export default function StonechipProtection() {
  const faqItems: FAQItem[] = [
    {
      question: 'What is Paint Protection Film (PPF)?',
      answer: 'PPF is a transparent, thermoplastic urethane film applied to your vehicle\'s painted surfaces. It provides a protective barrier against stone chips, scratches, bug splatter, and environmental damage while maintaining your paint\'s original appearance.',
    },
    {
      question: 'Does PPF really self-heal?',
      answer: 'Yes! Our premium PPF features heat-activated self-healing technology. Minor scratches and swirl marks disappear when exposed to heat (from the sun or warm water), keeping your film looking pristine. Deeper cuts or gouges that penetrate through the film cannot self-heal.',
    },
    {
      question: 'How long does PPF last?',
      answer: 'Quality PPF typically lasts 7-10 years with proper care and maintenance. Our films come with manufacturer warranties and resist yellowing, cracking, and peeling throughout their lifespan.',
    },
    {
      question: 'Can PPF be removed?',
      answer: 'Yes, PPF can be professionally removed without damaging your paint. In fact, when removed, your paint underneath will look as good as the day it was applied, as it has been protected from the elements.',
    },
    {
      question: 'What coverage option should I choose?',
      answer: 'It depends on your needs and budget. Partial Front is great for basic protection, Full Front is our most popular choice for comprehensive coverage of high-impact areas, Track Pack is ideal for performance driving, and Full Body provides maximum protection for the entire vehicle. We can help you decide based on your vehicle use.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Stone Chip Protection',
      description: 'Advanced protection against rock chips, road debris, and impact damage',
    },
    {
      icon: RefreshCw,
      title: 'Self-Healing',
      description: 'Heat-activated self-healing technology removes minor scratches and swirls',
    },
    {
      icon: Droplets,
      title: 'Stain Resistant',
      description: 'Repels bugs, bird droppings, and environmental contaminants',
    },
    {
      icon: Zap,
      title: 'Clear & Durable',
      description: 'Virtually invisible protection with exceptional optical clarity',
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

  return (
    <div className="min-h-screen">
      <SEO
        title="Paint Protection Film Sydney | PPF Installer | Stone Chip Protection | Protekt Auto"
        description="Expert PPF installer Sydney. Self-healing paint protection film protects against stone chips, scratches & road debris. Full body from $5,500. Call (02) 8606 2842"
        keywords="paint protection film Sydney, PPF installer Sydney, stone chip protection, PPF Sydney, clear bra Sydney"
        canonical="https://protektauto.com.au/stonechip-protection"
      />
      <Hero
        title="Paint Protection Film (PPF)"
        subtitle="Stone Chip Protection"
        description="Advanced transparent film for ultimate paint protection"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={true}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <UrgencyBanner
            message="Premium XPEL installation."
            highlight="Book early for high-demand models."
            icon="trending"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <TrustBadges />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              XPEL Ultimate Plus Paint Protection Film
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Paint Protection Films are an advanced transparent film that is used to protect your paint from damage caused by stone chips, bug splatter and minor abrasions. Our premium XPEL films feature self-healing technology and maintain the factory finish of your vehicle while providing invisible, industry-leading protection.
            </p>
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
                <strong className="text-foreground">Bulk and custom fitting services</strong> are also available for maximum coverage. Prices are based on the application required.
              </p>
              <p className="text-foreground/60 text-xs mt-3 italic">
                * Prices quoted above are "Starting From" based on small-size hatch/coupes and should only be used as an approximate guide. Prices/packages will vary depending on the size and trim level of the vehicle. Additional costs apply for applications to plastic, carbon and painted trims.
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
                  <img
                    src={standardFrontImage}
                    alt="Standard + Front PPF coverage diagram showing protected areas: side mirrors, leading edge bonnet, leading edge front guards, and full front bumper"
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
                  <img
                    src={trackPackImage}
                    alt="Track Pack PPF coverage diagram showing protected areas: side mirrors, A-pillars, leading edge roof, full bonnet, full front guards, side sills, and full front bumper"
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
              * All PPF installations include XPEL Fusion LITE ceramic coating applied to the film for
              enhanced protection and easier maintenance. Prices vary based on vehicle size and
              complexity. Contact us for a custom quote tailored to your vehicle.
            </p>
          </Card>
        </div>
      </section>

      {/* PPF Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Paint Protection Film Work
            </h2>
            <p className="text-foreground/70 text-lg">
              See the precision and quality of our professional PPF installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-blue-hood"
            >
              <img
                src={ppfBlueHood}
                alt="PPF application on blue car hood"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Wet Installation Technique</p>
                <p className="text-xs text-white/80">Professional PPF Application</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-mercedes"
            >
              <img
                src={ppfMercedesWheel}
                alt="Mercedes-Benz wheel with PPF protection"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Mercedes-Benz</p>
                <p className="text-xs text-white/80">Premium Detail Protection</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-heat-gun"
            >
              <img
                src={ppfRedCarHeatGun}
                alt="Technician heat-forming PPF"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Heat-Forming Process</p>
                <p className="text-xs text-white/80">Expert Installation Technique</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-mustang"
            >
              <img
                src={ppfBlueMustangLift}
                alt="Blue Ford Mustang PPF installation"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Ford Mustang</p>
                <p className="text-xs text-white/80">Full Workshop Installation</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-squeegee"
            >
              <img
                src={ppfBlackCarSqueegee}
                alt="Professional squeegee technique"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Squeegee Technique</p>
                <p className="text-xs text-white/80">Bubble-Free Application</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-porsche-app"
            >
              <img
                src={ppfWhitePorsche}
                alt="PPF application on white Porsche"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Porsche</p>
                <p className="text-xs text-white/80">Front End PPF Installation</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-gt3"
            >
              <img
                src={ppfPorscheGT3}
                alt="Porsche GT3 with complete PPF"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Porsche GT3</p>
                <p className="text-xs text-white/80">Complete PPF Package</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-closeup"
            >
              <img
                src={ppfApplicationCloseup}
                alt="Close-up of PPF application"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Installation Detail</p>
                <p className="text-xs text-white/80">Wet Installation Process</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-bmw"
            >
              <img
                src={ppfBMWWorkshop}
                alt="BMW PPF installation in workshop"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">BMW</p>
                <p className="text-xs text-white/80">Premium Workshop Installation</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-golf"
            >
              <img
                src={ppfBlueGolfR}
                alt="Blue Volkswagen Golf R front bumper detail"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Volkswagen Golf R</p>
                <p className="text-xs text-white/80">Front Bumper Protection</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ppf-s2000"
            >
              <img
                src={ppfSilverS2000}
                alt="Silver Honda S2000 with PPF protection"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Honda S2000</p>
                <p className="text-xs text-white/80">Classic Sports Car Protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="relative overflow-hidden">
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
          <RelatedServices
            services={[
          {
            title: 'Ceramic Coating Sydney',
            description: 'Maximize protection by adding ceramic coating on top of your PPF for enhanced gloss and easier cleaning.',
            link: '/new-car-protection',
          },
          {
            title: 'Paint Correction Sydney',
            description: 'Prepare your paint surface with professional correction before PPF installation for the best results.',
            link: '/paint-correction',
          },
          {
            title: 'Protection Packages',
            description: 'Get the ultimate protection with our packages combining PPF, ceramic coating, and paint correction.',
            link: '/packages',
          },
            ]}
          />

          <FAQ items={faqItems} title="Paint Protection Film FAQs" />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
