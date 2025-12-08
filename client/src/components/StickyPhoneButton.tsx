import { Phone } from 'lucide-react';

export default function StickyPhoneButton() {
  return (
    <a
      href="tel:0286062842"
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 w-full py-3 bg-primary text-black font-bold text-base tracking-wide hover:bg-primary/90 transition-all"
      data-testid="sticky-phone-bar"
    >
      <Phone className="w-5 h-5" />
      <span>Call Now: (02) 8606 2842</span>
    </a>
  );
}
