import { Phone } from 'lucide-react';
import patternLogo from '@assets/image_1764055702258.png';

export default function StickyPhoneButton() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 w-full bg-primary"
      style={{
        backgroundImage: `url(${patternLogo})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '60px 60px',
        backgroundBlendMode: 'multiply',
      }}
    >
      <a
        href="tel:0286062842"
        className="relative flex items-center justify-center gap-3 w-full py-3 text-black font-bold text-base tracking-wide hover:bg-black/10 transition-all"
        data-testid="sticky-phone-bar"
      >
        <Phone className="w-5 h-5" />
        <span>Call Now: (02) 8606 2842</span>
      </a>
    </div>
  );
}
