import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ContactSection from '@/components/ContactSection';
import heroImage from '@assets/generated_images/Ceramic_coating_hero_image_2e9cd7e0.png';
import ceramicImage from '@assets/Ceramic coating service Sydney - New Car Protection_1763295133288.webp';
import paintCorrectionImage from '@assets/Paint correction_1763294797362.webp';
import windowTintImage from '@assets/Windown tinting_1763343495843.webp';
import ppfImage from '@assets/PPF _1763343626090.webp';
import motorcycleImage from '@assets/Motorcycle ceramic coat protection sydney_1763343837693.webp';
import packagesImage from '@assets/Full packages Protekt Auto_1763295209283.webp';

export default function Home() {
  const services = [
    {
      title: 'New Car Protection',
      description:
        'Ceramic coatings protect your paint against environmental contaminants with the added benefit of easier maintenance.',
      image: ceramicImage,
      link: '/new-car-protection',
    },
    {
      title: 'Paint Correction',
      description:
        'Enhance the gloss of your car\'s paint or remove unsightly swirls and scratches with our machine polishing services.',
      image: paintCorrectionImage,
      link: '/paint-correction',
    },
    {
      title: 'Window Tinting',
      description:
        'Block out up to 99% of harmful UV rays, infrared, glare, and heat with quality carbon to ceramic grade films.',
      image: windowTintImage,
      link: '/window-tinting',
    },
    {
      title: 'Paint Protection Film',
      description:
        'Advanced transparent film that protects your paint from stone chips, bug splatter and minor abrasions.',
      image: ppfImage,
      link: '/stonechip-protection',
    },
    {
      title: 'Motorcycle Protection',
      description:
        'Protect your bike with our Ceramic Coatings and Stone Chip Protection Film from any damage to your paintwork.',
      image: motorcycleImage,
      link: '/motorcycle-protection',
    },
    {
      title: 'Full Packages',
      description:
        'Give your vehicle the best protection with our package options or tailor it to your requirements.',
      image: packagesImage,
      link: '/packages',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Sydney's #1 Paint Protection & Car Care Workshops"
        subtitle="Premium Automotive Detailing"
        description="The best paint protection coatings & films in Sydney"
        image={heroImage}
        ctaText="View Services"
        ctaLink="#services"
        secondaryCtaText="Contact Us"
        showPlayButton={true}
        showLogo={true}
      />

      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
              From new cars and motorcycles to existing vehicles that need their paint restored and
              protected. Browse through our services and select what's right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Welcome to Protekt Auto
          </h2>
          <p className="text-foreground/70 text-lg max-w-4xl mx-auto leading-relaxed">
            Want to keep your car looking as good as new or better? In order to maintain that new car
            shine, it's important to look after your vehicle's paint job with our paint protection
            films and ceramic coatings. If you've started to notice any swirls or scratches in the
            paint, don't worry, we can help you with that too with our paint correction services.
          </p>
          <p className="text-foreground/70 text-lg max-w-4xl mx-auto leading-relaxed mt-4">
            At Protekt Auto, we're dedicated to providing excellent customer service and ensuring that
            you are completely satisfied with the results of our new car protection products and
            services.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
