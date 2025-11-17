import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ContactSection from '@/components/ContactSection';
import WelcomeVideo from '@/components/WelcomeVideo';
import FAQ, { FAQItem } from '@/components/FAQ';
import heroImage from '@assets/generated_images/Ceramic_coating_hero_image_2e9cd7e0.png';
import ceramicImage from '@assets/Ceramic coating service Sydney - New Car Protection_1763295133288.webp';
import paintCorrectionImage from '@assets/Paint correction_1763294797362.webp';
import windowTintImage from '@assets/Windown tinting_1763343495843.webp';
import ppfImage from '@assets/PPF _1763343626090.webp';
import motorcycleImage from '@assets/Motorcycle ceramic coat protection sydney_1763343837693.webp';
import packagesImage from '@assets/Full packages Protekt Auto_1763295209283.webp';

export default function Home() {
  const faqItems: FAQItem[] = [
    {
      question: 'Why choose Protekt Auto for my vehicle protection?',
      answer: 'Protekt Auto is Sydney\'s premier automotive protection specialist with years of experience in ceramic coatings, PPF, and paint correction. We use only the highest quality products, work in a professional controlled environment, and our technicians are certified applicators. Every service comes with manufacturer-backed guarantees and our commitment to perfection. Our clients choose us for our attention to detail, transparent pricing, and results that speak for themselves.',
    },
    {
      question: 'What makes ceramic coating and PPF worth the investment?',
      answer: 'Premium paint protection is an investment that pays for itself. Ceramic coatings and PPF preserve your vehicle\'s showroom finish, making it easier to clean and maintain while protecting against UV damage, scratches, and environmental contaminants. This protection significantly boosts resale value and saves you money compared to future paint correction or repainting. With our 5-10 year guarantees, your vehicle stays protected for years, maintaining that premium look that sets it apart.',
    },
    {
      question: 'How long does a ceramic coating application take?',
      answer: 'A ceramic coating application typically takes 1-3 days depending on the condition of your vehicle and the package selected. This includes proper paint preparation, correction if needed, and curing time.',
    },
    {
      question: 'Do you offer mobile services?',
      answer: 'All our services are performed at our professional workshop in Clyde to ensure the highest quality results. Our controlled environment allows us to deliver superior finish and longevity for your vehicle protection.',
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by calling us at (02) 8606 2842 or using the contact form on our website. We\'ll discuss your requirements and schedule a convenient time for your service.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, and bank transfers. Payment is typically required upon completion of services.',
    },
  ];

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
    <>
      <Hero
        title="Sydney's #1 Paint Protection & Car Care Workshops"
        subtitle="Premium Automotive Detailing"
        description="The best paint protection coatings & films in Sydney"
        videoUrl="https://player.vimeo.com/video/578269899"
        ctaText="View Services"
        ctaLink="#services"
        secondaryCtaText="Contact Us"
        showLogo={true}
      />

      <section id="services" className="py-20 bg-background mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
              From new cars and motorcycles to existing vehicles that need their paint restored and protected. Browse through our services and select what's right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <WelcomeVideo />

      <FAQ items={faqItems} />

      <ContactSection />
    </>
  );
}
