import { Phone } from 'lucide-react';
import patternLogo from '@assets/image_1764055702258.png';

export default function StickyPhoneButton() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 w-full bg-primary"
    >
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
        className="relative flex items-center justify-center gap-3 w-full text-black font-bold tracking-wide hover:bg-black/10 transition-all"
        style={{ paddingTop: 'calc(0.75rem + 2.5px)', paddingBottom: 'calc(0.75rem + 2.5px)', fontSize: '3rem', margin: '-60px' }}
        data-testid="sticky-phone-bar"
      >
        <Phone style={{ width: '2rem', height: '2rem' }} />
        <span>Call Now: (02) 8606 2842</span>
      </a>
    </div>
  );
}
