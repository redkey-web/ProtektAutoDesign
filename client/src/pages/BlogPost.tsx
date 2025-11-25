import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { type Post } from '@shared/schema';

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const { data: post, isLoading } = useQuery<Post>({
    queryKey: ['/api/posts', slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 animate-pulse bg-card rounded-lg" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-foreground/60 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button variant="default" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | Protekt Auto Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`https://protektauto.com.au/blog/${post.slug}`}
      />

      <article>
        {post.coverImage && (
          <div className="w-full h-[400px] overflow-hidden bg-black">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover opacity-90"
              data-testid="img-post-hero"
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
