'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Shield, Zap, Award } from 'lucide-react';

interface VehiclePricing {
  type: string;
  price: string;
}

interface TintSpec {
  name: string;
  subtitle: string;
  description: string;
  uvRejection: number;
  irRejection: number;
  tser: number;
  warranty: string;
  features: string[];
  pricing: VehiclePricing[];
  recommended?: boolean;
}

interface TintComparisonProps {
  variant?: 'default' | 'dark';
}

export default function TintComparison({ variant = 'default' }: TintComparisonProps) {
  const [, setSelectedFilm] = useState<string>('ceramic');
  const isDark = variant === 'dark';

  const films: TintSpec[] = [
    {
      name: 'XPEL PRIME CS BLACK',
      subtitle: 'Colour Stable Carbon',
      description: 'Our entry-level film that delivers excellent aesthetics with a darker, richer black appearance. Popular choice for those wanting the tinted look while still blocking 99% of harmful UV rays. Provides solid heat rejection for everyday comfort.',
      uvRejection: 99,
      irRejection: 23,
      tser: 42,
      warranty: 'Lifetime film & labour',
      features: [
        'Darker black aesthetic',
        'Signal safe',
        'Scratch resistant top coat',
      ],
      pricing: [
        { type: '2 Front door windows', price: '$160' },
        { type: 'Full vehicle - 3 door hatch/coupe', price: '$300' },
        { type: 'Full vehicle - 5 door hatch/Sedans', price: '$350' },
        { type: 'Full vehicle - Wagons/Medium SUV', price: '$390' },
        { type: 'Full vehicle - Large SUV/4x4/People movers', price: '$420' },
      ],
    },
    {
      name: 'XPEL PRIME XR BLACK',
      subtitle: 'Ceramic IR',
      description: 'Nano-ceramic technology delivers dramatically higher infrared rejection, eliminating that burning sensation on your skin. Keeps your cabin cooler, reduces interior fading, and improves AC efficiency in summer and heater retention in winter.',
      uvRejection: 99,
      irRejection: 83,
      tser: 64,
      warranty: 'Lifetime film & labour',
      recommended: true,
      features: [
        'Eliminates skin burn sensation',
        'Prevents interior fading',
        'Better cabin insulation',
      ],
      pricing: [
        { type: '2 Front door windows', price: '$280' },
        { type: 'Full vehicle - 3 door hatch/coupe', price: '$580' },
        { type: 'Full vehicle - 5 door hatch/Sedans', price: '$650' },
        { type: 'Full vehicle - Wagons/Medium SUV', price: '$730' },
        { type: 'Full vehicle - Large SUV/4x4/People movers', price: '$790' },
      ],
    },
    {
      name: 'XPEL PRIME XR PLUS',
      subtitle: 'Multi-Layer Technology',
      description: 'The ultimate in window tint performance. Multi-layer nanoparticle technology delivers our highest infrared rejection for maximum comfort year-round. Premium protection that keeps you cool in summer and warm in winter.',
      uvRejection: 99,
      irRejection: 96,
      tser: 71,
      warranty: 'Lifetime film & labour',
      features: [
        'Maximum heat rejection',
        'Year-round cabin comfort',
        'Premium performance',
      ],
      pricing: [
        { type: '2 Front door windows', price: '$380' },
        { type: 'Full vehicle - 3 door hatch/coupe', price: '$790' },
        { type: 'Full vehicle - Sedans', price: '$890' },
        { type: 'Full vehicle - Wagons/Medium SUV', price: '$990' },
        { type: 'Full vehicle - Large SUV/4x4/People movers', price: '$1,100' },
      ],
    },
  ];

  const renderStatBar = (value: number, label: string) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className={isDark ? 'text-white/70' : 'text-foreground/70'}>{label}</span>
        <span className="font-semibold text-primary">{value}%</span>
      </div>
      <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-muted'}`}>
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
        <h3 className={`font-display text-3xl font-bold mb-3 ${isDark ? 'text-white' : ''}`}>Compare Window Tint Films</h3>
        <p className={`max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-foreground/60'}`}>
          Choose the right film for your needs. Compare performance specs and features across our
          range of premium window tinting solutions.
        </p>
      </div>

      <Tabs defaultValue="ceramic" className="w-full" onValueChange={setSelectedFilm}>
        <TabsList className={`grid w-full grid-cols-3 mb-8 ${isDark ? 'bg-white/10 border border-white/20' : ''}`} data-testid="film-tabs">
          <TabsTrigger value="carbon" className={isDark ? 'data-[state=active]:bg-primary data-[state=active]:text-black text-white/70 data-[state=active]:text-black' : ''} data-testid="tab-carbon">Carbon</TabsTrigger>
          <TabsTrigger value="ceramic" className={isDark ? 'data-[state=active]:bg-primary data-[state=active]:text-black text-white/70 data-[state=active]:text-black' : ''} data-testid="tab-ceramic">Ceramic</TabsTrigger>
          <TabsTrigger value="premium" className={isDark ? 'data-[state=active]:bg-primary data-[state=active]:text-black text-white/70 data-[state=active]:text-black' : ''} data-testid="tab-premium">Premium</TabsTrigger>
        </TabsList>

        {films.map((film, index) => (
          <TabsContent
            key={film.name}
            value={['carbon', 'ceramic', 'premium'][index]}
            data-testid={`content-${['carbon', 'ceramic', 'premium'][index]}`}
          >
            <Card className={`overflow-hidden ${isDark ? 'bg-black/40 border-white/10 backdrop-blur-sm' : ''}`}>
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className={`font-display text-xl md:text-2xl font-bold mb-1 ${isDark ? 'text-white' : ''}`}>{film.name}</h4>
                        <p className="text-primary font-medium">{film.subtitle}</p>
                      </div>
                      {film.recommended && (
                        <Badge className="bg-primary flex-shrink-0" data-testid="badge-recommended">
                          <Award className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      )}
                    </div>

                    <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>
                      {film.description}
                    </p>

                    <div className="space-y-3">
                      {renderStatBar(film.uvRejection, 'UV Rejection')}
                      {renderStatBar(film.irRejection, 'Infrared Rejection')}
                      {renderStatBar(film.tser, 'Total Solar Energy Rejection')}
                    </div>

                    <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-border'}`}>
                      <div className={`flex items-center gap-2 text-sm mb-4 ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{film.warranty}</span>
                      </div>
                      <ul className="grid grid-cols-2 gap-2">
                        {film.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`p-6 md:p-8 border-t lg:border-t-0 lg:border-l ${isDark ? 'bg-white/5 border-white/10' : 'bg-card border-border'}`}>
                    <h5 className={`font-display text-lg font-bold mb-6 ${isDark ? 'text-white' : ''}`}>Pricing (from)</h5>
                    <div className="space-y-3">
                      {film.pricing.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center justify-between py-3 border-b last:border-0 ${isDark ? 'border-white/10' : 'border-border'}`}
                        >
                          <span className={`text-sm ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{item.type}</span>
                          <span className="font-bold text-primary text-lg">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-8 p-4 rounded-lg border ${isDark ? 'bg-primary/10 border-primary/30' : 'bg-primary/5 border-primary/20'}`}>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : ''}`}>Performance Summary</h6>
                          <p className={`text-xs ${isDark ? 'text-white/60' : 'text-foreground/60'}`}>
                            {film.irRejection}% infrared rejection • {film.tser}% total solar energy rejection • {film.uvRejection}% UV protection
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
