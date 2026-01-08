'use client';

import { Star, Award, Users, Shield } from 'lucide-react';

export default function TrustTicker() {
  const items = [
    { icon: Star, text: '4.9/5 Google Rating' },
    { icon: Award, text: '10+ Years Experience' },
    { icon: Users, text: '1000+ Happy Customers' },
    { icon: Shield, text: 'Certified Applicators' },
  ];

  // Create enough duplicates for seamless infinite scroll
  // The animation moves the first set completely out of view, then instantly resets
  // Since both halves are identical, the reset is invisible
  const repeatedItems = [...items, ...items];

  return (
    <div
      className="fixed left-0 right-0 z-40 bg-black/70 backdrop-blur-sm border-t border-primary/20 overflow-hidden"
      style={{ bottom: '3rem' }}
    >
      <div className="flex animate-ticker-scroll">
        {/* First set - scrolls out */}
        {repeatedItems.map((item, index) => (
          <div
            key={`a-${index}`}
            className="flex items-center gap-2 whitespace-nowrap py-[9px] px-[44px] bg-[#0e1729] text-left flex-shrink-0"
          >
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">{item.text}</span>
          </div>
        ))}
        {/* Second set - creates seamless loop */}
        {repeatedItems.map((item, index) => (
          <div
            key={`b-${index}`}
            className="flex items-center gap-2 whitespace-nowrap py-[9px] px-[44px] bg-[#0e1729] text-left flex-shrink-0"
          >
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
