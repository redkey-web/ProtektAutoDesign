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
    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto" data-testid="trust-badges">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 border border-white/15 backdrop-blur-sm"
          data-testid={`trust-badge-${index}`}
        >
          <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
          <div className="flex items-baseline gap-1.5 min-w-0">
            <span className="text-sm font-bold text-white whitespace-nowrap">{badge.value}</span>
            <span className="text-xs text-white/70 truncate">{badge.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
