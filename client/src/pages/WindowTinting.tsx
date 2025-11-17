import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import TintComparison from '@/components/TintComparison';
import SavingsCalculator from '@/components/SavingsCalculator';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Sun, Thermometer, Eye } from 'lucide-react';
import heroImage from '@assets/Windown tinting_1763343495843.webp';

export default function WindowTinting() {
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
      <Hero
        title="Premium Window Tinting"
        subtitle="Window Tinting Solutions"
        description="Protect yourself from harmful UV rays and heat"
        image={heroImage}
        height="large"
        ctaText="Get Quote"
        ctaLink="#contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quality Carbon to Ceramic Grade Films
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Protect yourself from harmful UV rays (block out up to 99% of harmful UV rays), infrared,
              glare, and heat of the sun. Our quality carbon to ceramic grade films provide the perfect
              balance of performance, aesthetics, and protection for your vehicle.
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

      <ContactSection />
    </div>
  );
}
