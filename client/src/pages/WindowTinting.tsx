import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import TintComparison from '@/components/TintComparison';
import FAQ, { FAQItem } from '@/components/FAQ';
import SEO from '@/components/SEO';
import UrgencyBanner from '@/components/UrgencyBanner';
import Testimonials from '@/components/Testimonials';
import FeaturedArticles from '@/components/FeaturedArticles';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Sun, Thermometer, Eye, Check } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { type Post } from '@shared/schema';
import heroImage from '@assets/Windown tinting_1763343495843.webp';
import teamWorkImage from '@assets/window tint_1764036060927.webp';
import patternLogo from '@assets/image_1764055702258.png';
import ramShowroom from '@assets/image_1764072936497.png';
import teslaWhite from '@assets/image_1764072963008.png';
import workshopAction from '@assets/image_1764072995131.png';
import camrySide from '@assets/image_1764073032097.png';
import camryRear from '@assets/image_1764073128235.png';
import protektSurfaceLogo from '@assets/image_1764615091338.png';

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

  const additionalBenefits = [
    'Prevents interior fading and cracking',
    'Reduces eye strain and fatigue',
    'Increases privacy and security',
    'Enhances vehicle appearance',
    'Helps maintain resale value',
    'Protects against skin damage',
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
        showPhoneCta={false}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <UrgencyBanner
            message="Beat the summer heat!"
            highlight="Book your tinting before December rush."
            icon="trending"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <img
                src={teamWorkImage}
                alt="Professional window tinting application by Protekt Auto team"
                className="w-full h-auto rounded-md shadow-lg"
                loading="lazy"
                decoding="async"
                data-testid="img-team-work"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Expert Precision Application</p>
                <p className="text-xs text-white/80">Our certified technicians ensure flawless results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Window Tinting Gallery */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Window Tinting Work
            </h2>
            <p className="text-foreground/70 text-lg">
              See the quality and precision of our professional window tinting installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-ram"
            >
              <img
                src={ramShowroom}
                alt="RAM 1500 TRX with professional ceramic window tinting"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                                decoding="async"
                              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">RAM 1500 TRX</p>
                <p className="text-xs text-white/80">Premium Ceramic Tint</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-tesla"
            >
              <img
                src={teslaWhite}
                alt="White Tesla Model 3 with ceramic window tinting"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Tesla Model 3</p>
                <p className="text-xs text-white/80">Ceramic Window Tint</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-workshop"
            >
              <img
                src={workshopAction}
                alt="Professional window tinting application in progress"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Expert Application</p>
                <p className="text-xs text-white/80">Our team at work</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-camry-side"
            >
              <img
                src={camrySide}
                alt="Toyota Camry Hybrid with professional window tinting"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Toyota Camry Hybrid</p>
                <p className="text-xs text-white/80">Complete Tint Package</p>
              </div>
            </div>

            <div 
              className="relative group overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid="gallery-img-camry-rear"
            >
              <img
                src={camryRear}
                alt="Toyota Camry showing completed window tint installation"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Finished Installation</p>
                <p className="text-xs text-white/80">NSW Legal Compliant</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="py-16 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Beyond Automotive
            </h3>
            <p className="text-foreground/70 text-lg mb-8">
              We also offer Commercial and Residential Window Tinting, Frosted Glass, and Natural Stone Protection Film services.
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
                <img 
                  src={protektSurfaceLogo} 
                  alt="Protekt Surface Solutions" 
                  className="h-10 w-auto"
                />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <RelatedWindowTintArticles />

      <Testimonials />

      <FAQ items={faqItems} title="Window Tinting FAQs" />

      <ContactSection />
    </div>
  );
}

function RelatedWindowTintArticles() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['/api/posts'],
  });

  const windowTintPosts = posts?.filter(post => 
    post.tags.includes('window tinting') || post.slug.includes('window-tinting')
  ) || [];

  if (isLoading || windowTintPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-background" data-testid="section-window-tint-articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Window Tinting Insights
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Expert advice and tips on window tinting benefits, NSW regulations, and protection solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {windowTintPosts.slice(0, 2).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-window-tint-${post.slug}`}>
                {post.coverImage && (
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-window-tint-cover-${post.slug}`}
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors line-clamp-2 mb-3" data-testid={`text-window-tint-title-${post.slug}`}>
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2 text-sm" data-testid={`text-window-tint-excerpt-${post.slug}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-foreground/50">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
