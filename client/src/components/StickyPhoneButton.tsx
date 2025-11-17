import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StickyPhoneButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="sticky-phone-button">
      <Button
        size="icon"
        variant="default"
        className="w-14 h-14 rounded-full shadow-lg phone-button-glow hover:!bg-primary/20 hover:shadow-[0_0_30px_rgba(0,188,212,0.8)] transition-all duration-300 hover:scale-110"
        onClick={() => window.location.href = 'tel:0286062842'}
        aria-label="Call us at (02) 8606 2842"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
}
