import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';

// Placeholder posts - to be replaced with CMS/API data in Phase B
const posts = [
  {
    id: 1,
    slug: 'ceramic-coating-benefits',
    title: 'The Benefits of Ceramic Coating for Your Vehicle',
    excerpt: 'Discover why ceramic coating is the ultimate protection for your car\'s paint and how it can save you money in the long run. Sydney\'s guide to ceramic coating.',
    coverImage: '/images/ceramic-coating.webp',
    author: 'Protekt Auto',
    publishedAt: '2025-01-15',
    tags: ['Ceramic Coating', 'Paint Protection'],
    content: `
      <h2>Introduction</h2>
      <p>When it comes to protecting your vehicle's paintwork, two popular options stand out: ceramic coating and traditional wax. Both offer paint protection, but they work in fundamentally different ways and offer varying levels of durability.</p>

      <h2>What is Ceramic Coating?</h2>
      <p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a permanent or semi-permanent layer of protection. It's typically made from silicon dioxide (SiO2) or titanium dioxide (TiO2).</p>

      <h3>Benefits of Ceramic Coating:</h3>
      <ul>
        <li>Long-lasting protection (2-5+ years)</li>
        <li>Superior hydrophobic properties</li>
        <li>Excellent UV protection</li>
        <li>Enhanced gloss and depth</li>
        <li>Easier cleaning and maintenance</li>
      </ul>

      <h2>What is Car Wax?</h2>
      <p>Car wax is a traditional paint protection product typically made from natural carnauba wax or synthetic polymers. It sits on top of the paint rather than bonding with it.</p>

      <h3>Benefits of Wax:</h3>
      <ul>
        <li>Lower initial cost</li>
        <li>Easy DIY application</li>
        <li>Warm, natural-looking shine</li>
        <li>Can be applied over ceramic coating</li>
      </ul>

      <h2>Our Recommendation</h2>
      <p>For most vehicle owners, ceramic coating offers the best long-term value and protection. While the initial investment is higher, the durability and ease of maintenance make it worthwhile. Contact Protekt Auto to discuss which option is best for your vehicle.</p>
    `,
  },
  {
    id: 2,
    slug: 'ppf-vs-ceramic-coating',
    title: 'PPF vs Ceramic Coating: Which is Right for You?',
    excerpt: 'Understanding the differences between paint protection film and ceramic coating to make the best choice for your vehicle.',
    coverImage: '/images/ppf.webp',
    author: 'Protekt Auto',
    publishedAt: '2025-01-10',
    tags: ['PPF', 'Ceramic Coating'],
    content: `
      <h2>What is Paint Protection Film?</h2>
      <p>Paint Protection Film (PPF) is a thermoplastic urethane film applied to painted surfaces of vehicles to protect from stone chips, bug splatter, and minor abrasions.</p>

      <h2>Key Features of Modern PPF</h2>
      <h3>Self-Healing Technology</h3>
      <p>Premium PPF like XPEL Ultimate Plus features self-healing properties. Minor scratches and swirl marks disappear when exposed to heat, keeping your film looking new.</p>

      <h3>Invisible Protection</h3>
      <p>Quality PPF is virtually invisible, maintaining your vehicle's original appearance while providing maximum protection.</p>

      <h2>Coverage Options</h2>
      <ul>
        <li><strong>Partial Front:</strong> Protects most vulnerable areas</li>
        <li><strong>Full Front:</strong> Complete front-end coverage</li>
        <li><strong>Track Pack:</strong> Extended coverage for performance driving</li>
        <li><strong>Full Body:</strong> Maximum protection for the entire vehicle</li>
      </ul>

      <h2>Maintenance Tips</h2>
      <p>PPF requires minimal maintenance but following these tips will extend its life:</p>
      <ul>
        <li>Wait 7 days before washing after installation</li>
        <li>Use pH-neutral car wash soap</li>
        <li>Avoid automatic car washes with brushes</li>
        <li>Apply ceramic coating on top for enhanced protection</li>
      </ul>
    `,
  },
  {
    id: 3,
    slug: 'window-tinting-guide',
    title: 'Complete Guide to Window Tinting in Sydney',
    excerpt: 'Everything you need to know about window tinting laws, benefits, and options in New South Wales.',
    coverImage: '/images/window-tinting.webp',
    author: 'Protekt Auto',
    publishedAt: '2025-01-05',
    tags: ['Window Tinting', 'Guide'],
    content: `
      <h2>NSW Window Tinting Regulations</h2>
      <p>In New South Wales, window tinting must comply with specific regulations to ensure driver visibility and road safety. Here's what you need to know:</p>

      <h2>Legal VLT (Visible Light Transmission) Limits</h2>
      <h3>Front Side Windows</h3>
      <p>Must allow at least 35% of light through (VLT 35% or higher). This ensures adequate visibility for drivers.</p>

      <h3>Windscreen</h3>
      <p>Only a visor strip on the top 10% of the windscreen is permitted. The visor strip must not extend more than 10% of the total windscreen height.</p>

      <h3>Rear Side Windows & Back Windscreen</h3>
      <p>Can be any darkness, including limo tint (5% VLT). This provides maximum privacy for rear passengers.</p>

      <h2>Benefits of Legal Window Tinting</h2>
      <ul>
        <li>Blocks up to 99% of harmful UV rays</li>
        <li>Reduces cabin temperature significantly</li>
        <li>Minimizes glare for safer driving</li>
        <li>Protects interior from fading</li>
        <li>Enhances privacy and security</li>
      </ul>

      <h2>Our Commitment</h2>
      <p>At Protekt Auto, all our window tinting installations comply with NSW regulations. We use premium ceramic films that provide maximum protection while ensuring you stay legal on the road.</p>
    `,
  },
];

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Protekt Auto Blog',
    };
  }

  return {
    title: `${post.title} | Protekt Auto Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `https://protektauto.com.au/blog/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article>
        {post.coverImage && (
          <div className="w-full h-[400px] overflow-hidden bg-black relative">
            <div
              className="w-full h-full bg-cover bg-center opacity-90"
              style={{ backgroundImage: `url(${post.coverImage})` }}
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" data-testid={`badge-tag-${tag}`}>
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-post-title">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-foreground/60 mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-2" data-testid="text-post-author">
              <User className="w-5 h-5" />
              {post.author}
            </span>
            <span className="flex items-center gap-2" data-testid="text-post-date">
              <Calendar className="w-5 h-5" />
              {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-foreground/80 prose-ol:text-foreground/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
            data-testid="content-post-body"
          />

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold mb-4">Ready to Protect Your Vehicle?</h3>
              <p className="text-foreground/70 mb-6">
                Contact Protekt Auto today to discuss your vehicle protection needs. Our expert team is ready to help you choose the perfect solution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button variant="default" size="lg" data-testid="button-get-quote">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/packages">
                  <Button variant="outline" size="lg" data-testid="button-view-packages">
                    View Packages
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
}
