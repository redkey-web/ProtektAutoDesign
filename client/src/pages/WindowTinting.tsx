import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import TintComparison from '@/components/TintComparison';
import SavingsCalculator from '@/components/SavingsCalculator';
import FAQ, { FAQItem } from '@/components/FAQ';
import SEO from '@/components/SEO';
import UrgencyBanner from '@/components/UrgencyBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Sun, Thermometer, Eye } from 'lucide-react';
import heroImage from '@assets/Windown tinting_1763343495843.webp';

export default function WindowTinting() {
  const faqItems: FAQItem[] = [
    {
      question: 'Is window tinting legal in NSW?',
      answer: 'Yes, window tinting is legal in NSW with specific regulations. The front side windows must allow at least 35% of light through, and the windscreen can only have tint on the top 10% (visor strip). The rear windows and back windscreen can be darker. All our tints comply with NSW regulations.',
    },
    {
      question: 'How long does window tinting take?',
      answer: 'A full vehicle tint typically takes 2-4 hours depending on the vehicle size and complexity. The tint needs to cure for 2-3 days before you can wind down the windows or clean them.',
    },
    {
      question: 'What\'s the difference between carbon and ceramic tint?',
      answer: 'Carbon tint offers excellent heat rejection and UV protection at a great value. Ceramic tint provides superior heat rejection (up to 50% more than carbon), better clarity, no signal interference, and longer-lasting performance. Ceramic is our premium option for maximum comfort and protection.',
    },
    {
      question: 'Will tinting affect my GPS, phone, or radio signals?',
      answer: 'Our ceramic tints are completely signal-friendly and won\'t interfere with GPS, mobile phones, or radio signals. Some metallic tints can cause interference, which is why we recommend ceramic films for the best performance.',
    },
    {
      question: 'How do I maintain my window tint?',
      answer: 'Wait 2-3 days after installation before cleaning. Use a soft cloth with mild soap and water or ammonia-free glass cleaner. Avoid abrasive materials and harsh chemicals. Don\'t wind windows down for the first 2-3 days to allow proper curing.',
    },
  ];

  const benefits = [
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

  return (
    <div className="min-h-screen">
      <SEO
        title="Window Tinting Sydney | Ceramic Tint | Legal NSW Compliant | Protekt Auto"
        description="Premium window tinting Sydney. Block 99% UV rays with ceramic & carbon films. Legal NSW compliant tinting. Heat rejection & privacy. Free quotes (02) 8606 2842"
        keywords="window tinting Sydney, ceramic window tint Sydney, legal window tint NSW, car tinting Sydney, window film Sydney"
        canonical="https://protektauto.com.au/window-tinting"
      />
      <Hero
        title="Premium Window Tinting"
        subtitle="Window Tinting Solutions"
        description="Protect yourself from harmful UV rays and heat"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
        showPhoneCta={true}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <UrgencyBanner
            message="Beat the summer heat!"
            highlight="Book your tinting before December rush."
            icon="trending"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quality Carbon to Ceramic Grade Films
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Protect yourself from harmful UV rays (block out up to 99% of harmful UV rays), infrared, glare, and heat of the sun. Our quality carbon to ceramic grade films provide the perfect balance of performance, aesthetics, and protection for your vehicle.
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

          <TintComparison />
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SavingsCalculator />
        </div>
      </section>

      <FAQ items={faqItems} title="Window Tinting FAQs" />

      <ContactSection />
    </div>
  );
}
