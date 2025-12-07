import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { type Post } from '@shared/schema';

export default function FeaturedArticles() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['/api/posts'],
  });

  const featuredPosts = posts?.slice(0, 3) || [];

  if (isLoading || featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-background" data-testid="section-featured-articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Expert advice and tips from our automotive protection specialists
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-featured-${post.slug}`}>
                {post.coverImage && (
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-featured-cover-${post.slug}`}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors line-clamp-2" data-testid={`text-featured-title-${post.slug}`}>
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4 line-clamp-2 text-sm" data-testid={`text-featured-excerpt-${post.slug}`}>
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

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" data-testid="button-view-all-articles">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
