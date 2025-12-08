import { Phone } from 'lucide-react';
import patternLogo from '@assets/image_1764055702258.png';

export default function StickyPhoneButton() {
  return (
    <a
      href="tel:0286062842"
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 w-full py-3 bg-primary text-black font-bold text-base tracking-wide hover:bg-primary/90 transition-all relative overflow-hidden"
      data-testid="sticky-phone-bar"
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url(${patternLogo})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="relative z-10 flex items-center justify-center gap-3">
        <Phone className="w-5 h-5" />
        <span>Call Now: (02) 8606 2842</span>
      </div>
    </a>
  );
}
