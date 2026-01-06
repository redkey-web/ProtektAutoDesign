import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Detailing Blog | Expert Tips & Guides | Protekt Auto Sydney',
  description:
    "Expert car detailing advice, ceramic coating guides, paint protection tips, and automotive care insights from Sydney's premium detailing specialists.",
  keywords: 'car detailing blog, ceramic coating tips, PPF guides, paint correction advice, car care Sydney',
  alternates: {
    canonical: 'https://protektauto.com.au/blog',
  },
};

// Placeholder posts - to be replaced with CMS/API data in Phase B
const placeholderPosts = [
  {
    id: 1,
    slug: 'ceramic-coating-vs-wax',
    title: 'Ceramic Coating vs Wax: Which is Better for Your Car?',
    excerpt: 'A comprehensive guide comparing ceramic coating and traditional wax protection. Learn the pros, cons, and which option is best for your vehicle.',
    coverImage: '/images/ceramic-coating.webp',
    author: 'Protekt Auto',
    publishedAt: '2024-12-15',
    tags: ['Ceramic Coating', 'Car Care'],
  },
  {
    id: 2,
    slug: 'ppf-complete-guide',
    title: 'The Complete Guide to Paint Protection Film (PPF)',
    excerpt: 'Everything you need to know about PPF - from how it works to installation and maintenance tips for long-lasting protection.',
    coverImage: '/images/ppf.webp',
    author: 'Protekt Auto',
    publishedAt: '2024-12-10',
    tags: ['PPF', 'Paint Protection'],
  },
  {
    id: 3,
    slug: 'window-tinting-nsw-laws',
    title: 'Window Tinting Laws in NSW: What You Need to Know',
    excerpt: 'Understanding the legal requirements for window tinting in New South Wales. Stay compliant while enjoying the benefits of tinted windows.',
    coverImage: '/images/window-tinting.webp',
    author: 'Protekt Auto',
    publishedAt: '2024-12-05',
    tags: ['Window Tinting', 'NSW Laws'],
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-black to-background py-24 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="relative inline-block">
            <div className="absolute -inset-x-8 inset-y-2 bg-primary/20 -skew-x-12 transform" />
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white relative tracking-tight">
              CAR DETAILING
              <span className="block text-primary">INSIGHTS</span>
            </h1>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 bg-primary -skew-x-12 transform" />
          </div>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mt-8">
            Expert guides, tips, and industry insights from Sydney&apos;s premium automotive protection specialists
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-blog-${post.slug}`}>
                  {post.coverImage && (
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg relative">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.coverImage})` }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs" data-testid={`badge-tag-${tag}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors" data-testid={`text-blog-title-${post.slug}`}>
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 mb-4 line-clamp-3" data-testid={`text-blog-excerpt-${post.slug}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span className="flex items-center gap-1" data-testid={`text-blog-author-${post.slug}`}>
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1" data-testid={`text-blog-date-${post.slug}`}>
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                          year: 'numeric',
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
    </div>
  );
}
