import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Shield, Sun, Thermometer, Eye, Zap, Award } from 'lucide-react';

interface TintSpec {
  name: string;
  price: string;
  uvRejection: number;
  heatRejection: number;
  glareReduction: number;
  warranty: string;
  features: string[];
  recommended?: boolean;
}

export default function TintComparison() {
  const [selectedFilm, setSelectedFilm] = useState<string>('ceramic');

  const films: TintSpec[] = [
    {
      name: 'Carbon Film',
      price: 'From $350',
      uvRejection: 99,
      heatRejection: 42,
      glareReduction: 78,
      warranty: 'Lifetime film & labour',
      features: [
        'Non-metallic construction',
        'Won\'t interfere with electronics',
        'Fade-resistant color stability',
        'Good heat rejection',
      ],
    },
    {
      name: 'Ceramic Film',
      price: 'From $650',
      uvRejection: 99,
      heatRejection: 65,
      glareReduction: 78,
      warranty: 'Lifetime film & labour',
      recommended: true,
      features: [
        'Nano-ceramic technology',
        'Superior heat rejection',
        'Maximum UV protection',
        'Exceptional clarity',
        'No signal interference',
      ],
    },
    {
      name: 'Premium Ceramic',
      price: 'From $890',
      uvRejection: 99,
      heatRejection: 71,
      glareReduction: 78,
      warranty: 'Lifetime film & labour',
      features: [
        'Top-tier ceramic film',
        'Highest heat rejection',
        'Maximum clarity',
        'Ultimate IR rejection',
        'Premium warranty coverage',
      ],
    },
  ];

  const renderStatBar = (value: number, label: string) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground/70">{label}</span>
        <span className="font-semibold text-primary">{value}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full" data-testid="tint-comparison">
      <div className="text-center mb-8">
        <h3 className="font-display text-3xl font-bold mb-3">Compare Window Tint Films</h3>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          Choose the right film for your needs. Compare performance specs and features across our
          range of premium window tinting solutions.
        </p>
      </div>

      <Tabs defaultValue="ceramic" className="w-full" onValueChange={setSelectedFilm}>
        <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="film-tabs">
          <TabsTrigger value="carbon" data-testid="tab-carbon">Carbon</TabsTrigger>
          <TabsTrigger value="ceramic" data-testid="tab-ceramic">Ceramic</TabsTrigger>
          <TabsTrigger value="premium" data-testid="tab-premium">Premium</TabsTrigger>
        </TabsList>

        {films.map((film, index) => (
          <TabsContent
            key={film.name}
            value={['carbon', 'ceramic', 'premium'][index]}
            data-testid={`content-${['carbon', 'ceramic', 'premium'][index]}`}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-display text-2xl font-bold mb-2">{film.name}</h4>
                        <p className="text-3xl font-bold text-primary">{film.price}</p>
                      </div>
                      {film.recommended && (
                        <Badge className="bg-primary" data-testid="badge-recommended">
                          <Award className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-4">
                      {renderStatBar(film.uvRejection, 'UV Rejection')}
                      {renderStatBar(film.heatRejection, 'Heat Rejection')}
                      {renderStatBar(film.glareReduction, 'Glare Reduction')}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{film.warranty} warranty</span>
                      </div>
                      <ul className="space-y-2">
                        {film.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card p-8 border-l border-border">
                    <h5 className="font-semibold mb-6">Performance Highlights</h5>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Sun className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h6 className="font-semibold mb-1">UV Protection</h6>
                          <p className="text-sm text-foreground/60">
                            Blocks {film.uvRejection}% of harmful UV rays, protecting your skin and
                            interior from sun damage.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Thermometer className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h6 className="font-semibold mb-1">Solar Energy Rejection</h6>
                          <p className="text-sm text-foreground/60">
                            Rejects up to {film.heatRejection}% of solar energy for increased cabin comfort
                            and reduced A/C load.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Eye className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h6 className="font-semibold mb-1">Glare Control</h6>
                          <p className="text-sm text-foreground/60">
                            Reduces {film.glareReduction}% of glare for safer, more comfortable driving
                            in bright conditions.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h6 className="font-semibold mb-1">Technology</h6>
                          <p className="text-sm text-foreground/60">
                            {film.name === 'Premium Ceramic'
                              ? 'Cutting-edge nano-ceramic particles provide unmatched performance'
                              : film.name === 'Ceramic Film'
                              ? 'Advanced ceramic technology with no signal interference'
                              : 'Non-metallic carbon construction that won\'t affect electronics'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
