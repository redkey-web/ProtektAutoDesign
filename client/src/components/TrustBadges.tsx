import { Star, Award, Users, Shield } from 'lucide-react';

interface TrustBadge {
  icon: typeof Star;
  value: string;
  label: string;
}

export default function TrustBadges() {
  const badges: TrustBadge[] = [
    {
      icon: Star,
      value: '4.9/5',
      label: 'Google Rating',
    },
    {
      icon: Award,
      value: '10+ Years',
      label: 'Experience',
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Happy Customers',
    },
    {
      icon: Shield,
      value: 'Certified',
      label: 'Applicators',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto" data-testid="trust-badges">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/15 border border-white/20"
          data-testid={`trust-badge-${index}`}
        >
          <badge.icon className="w-8 h-8 text-primary" />
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">{badge.value}</div>
            <div className="text-xs md:text-sm text-white/80">{badge.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
