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
    <div className="flex flex-wrap justify-center gap-4 md:gap-8" data-testid="trust-badges">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-black/40 border border-white/15 backdrop-blur-sm"
          data-testid={`trust-badge-${index}`}
        >
          <badge.icon className="w-6 h-6 text-primary" />
          <div className="flex items-baseline gap-2">
            <span className="text-base md:text-lg font-bold text-white">{badge.value}</span>
            <span className="text-xs md:text-sm text-white/70">{badge.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
