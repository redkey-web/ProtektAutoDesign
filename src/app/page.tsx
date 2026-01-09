import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ContactSection from '@/components/ContactSection';
import WelcomeVideo from '@/components/WelcomeVideo';
import FAQ, { FAQItem } from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import FeaturedArticles from '@/components/FeaturedArticles';
import GoogleReviewSummary from '@/components/GoogleReviewSummary';

export const metadata: Metadata = {
  title: "Vehicle Paint Protection Sydney | Ceramic Coating & PPF Specialist | Protekt Auto",
  description: "Sydney's #1 vehicle paint protection specialists. Premium ceramic coatings, graphene coatings, paint correction, window tinting & PPF installation. Protect your investment with Protekt Auto. Call (02) 8606 2842",
  keywords: "vehicle paint protection Sydney, ceramic coating specialist Sydney, PPF installer Sydney, paint protection Sydney, car detailing Sydney",
  alternates: {
    canonical: "https://protektauto.com.au/",
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'Why choose Protekt Auto for my vehicle protection?',
    answer: 'Protekt Auto is Sydney\'s premier automotive protection specialist with years of experience in ceramic coatings, PPF, and paint correction. We use only the highest quality products, work in a professional controlled environment, and our technicians are certified applicators. Every service comes with manufacturer-backed guarantees and our commitment to perfection.',
  },
  {
    question: 'What makes ceramic coating and PPF worth the investment?',
    answer: 'Premium paint protection preserves your vehicle\'s showroom finish, making it easier to clean while protecting against UV damage, scratches, and environmental contaminants. This protection significantly boosts resale value and saves money compared to future paint correction or repainting. With our 5-10 year guarantees, your vehicle stays protected for years.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book a consultation by calling us at (02) 8606 2842 or using the contact form below. We\'ll discuss your requirements and schedule a convenient time for your service.',
  },
];

const services = [
  {
    title: 'New Car Protection',
    description:
      'Ceramic coatings protect your paint against environmental contaminants with the added benefit of easier maintenance.',
    image: '/images/ceramic-coating.webp',
    link: '/ceramic-coating-sydney',
  },
  {
    title: 'Paint Protection Film',
    description:
      'Advanced transparent film that protects your paint from stone chips, bug splatter and minor abrasions.',
    image: '/images/ppf.webp',
    link: '/ppf-car-wrap-sydney',
  },
  {
    title: 'Paint Correction',
    description:
      'Enhance the gloss of your car\'s paint or remove unsightly swirls and scratches with our machine polishing services.',
    image: '/images/paint-correction.webp',
    link: '/paint-correction',
  },
  {
    title: 'Window Tinting',
    description:
      'Block out up to 99% of harmful UV rays, infrared, glare, and heat with quality carbon to ceramic grade films.',
    image: '/images/window-tinting.webp',
    link: '/window-tinting-sydney',
  },
];

export default function Home() {
  return (
    <>
      {/* Black spacer to fill the gap above hero (covers main's pt-16 padding) */}
      <div className="h-16 bg-black -mt-16" aria-hidden="true" />
      <Hero
        title="Sydney's #1 Paint Protection & Car Care Specialists"
        subtitle="Premium Automotive Detailing"
        description="The best ceramic coatings & paint protection films in Sydney"
        videoUrl="https://player.vimeo.com/video/578269899"
        ctaText="View Services"
        ctaLink="#services"
        showPhoneCta={false}
        showLogo={false}
        showTrustBadges={false}
        contentOffset="xl:mt-[0vh]"
        hyperSpaceIntro={true}
        hyperSpaceIntroDuration={4000}
      />

      <section className="py-6 bg-background flex items-center justify-center">
        <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <GoogleReviewSummary />
        </div>
      </section>

      <WelcomeVideo variant="dark" />

      <section id="services" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto">
              Professional paint protection and restoration for vehicles of all types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FeaturedArticles />

      <FAQ items={faqItems} variant="dark" />

      <ContactSection />
    </>
  );
}
