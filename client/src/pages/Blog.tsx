import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Calendar, User } from 'lucide-react';
import { type Post } from '@shared/schema';

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['/api/posts'],
  });

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    if (!posts) return [];
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (!posts || selectedTag === 'all') return posts || [];
    return posts.filter(post => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Car Detailing Blog | Expert Tips & Guides | Protekt Auto Sydney"
        description="Expert car detailing advice, ceramic coating guides, paint protection tips, and automotive care insights from Sydney's premium detailing specialists."
        keywords="car detailing blog, ceramic coating tips, PPF guides, paint correction advice, car care Sydney"
        canonical="https://protektauto.com.au/blog"
      />

      <div className="bg-gradient-to-b from-black to-background py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Car Detailing Insights
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Expert guides, tips, and industry insights from Sydney's premium automotive protection specialists
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!posts || posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/60 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <>
              {/* Tag Filter */}
              <div className="mb-12">
                <h3 className="text-sm font-medium text-foreground/70 mb-4">Filter by Topic</h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant={selectedTag === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedTag('all')}
                    data-testid="button-filter-all"
                  >
                    All Posts
                  </Button>
                  {allTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? 'default' : 'outline'}
                      onClick={() => setSelectedTag(tag)}
                      data-testid={`button-filter-${tag}`}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Posts Grid */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-foreground/60 text-lg">No posts found for this topic.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-blog-${post.slug}`}>
                    {post.coverImage && (
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          data-testid={`img-blog-cover-${post.slug}`}
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
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
