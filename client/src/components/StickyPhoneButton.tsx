import { Phone, Star, Award, Users, Shield } from 'lucide-react';
import patternLogo from '@assets/image_1764055702258.png';

export default function StickyPhoneButton() {
  const trustItems = [
    { icon: Star, text: '4.9/5 Google Rating' },
    { icon: Award, text: '10+ Years Experience' },
    { icon: Users, text: '1000+ Happy Customers' },
    { icon: Shield, text: 'Certified Applicators' },
  ];

  const repeatedItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 w-full">
      {/* Trust Ticker - on top */}
      <div className="bg-black/70 backdrop-blur-sm border-t border-primary/20 overflow-hidden">
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

      {/* Call Button - below */}
      <div className="bg-primary">
        {/* Pattern overlay - very subtle */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${patternLogo})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '60px 60px',
            opacity: 0.12,
          }}
        />
        {/* Text content on top */}
        <a
          href="tel:0286062842"
          className="relative flex items-center justify-center gap-3 w-full text-black font-bold text-base tracking-wide hover:bg-black/10 transition-all"
          style={{ paddingTop: 'calc(0.75rem + 2.5px)', paddingBottom: 'calc(0.75rem + 2.5px)' }}
          data-testid="sticky-phone-bar"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now: (02) 8606 2842</span>
        </a>
      </div>
    </div>
  );
}
