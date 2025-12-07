import { Star, Award, Users, Shield } from 'lucide-react';

export default function TrustTicker() {
  const items = [
    { icon: Star, text: '4.9/5 Google Rating' },
    { icon: Award, text: '10+ Years Experience' },
    { icon: Users, text: '1000+ Happy Customers' },
    { icon: Shield, text: 'Certified Applicators' },
  ];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="sticky top-[72px] z-40 bg-black/80 backdrop-blur-sm border-b border-primary/20 overflow-hidden -mb-[36px]">
      <div className="flex animate-scroll">
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-8 py-2 whitespace-nowrap"
          >
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
