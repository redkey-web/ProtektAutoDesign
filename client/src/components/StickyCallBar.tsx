import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StickyCallBar() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-primary/50 backdrop-blur-sm border-t border-primary/30"
      data-testid="sticky-call-bar"
    >
      <Button
        variant="ghost"
        className="w-full h-14 rounded-none text-white hover:bg-primary/20 gap-3 text-lg font-semibold"
        onClick={() => window.location.href = 'tel:0286062842'}
        data-testid="button-sticky-call"
      >
        <Phone className="w-5 h-5" />
        Call Now: (02) 8606 2842
      </Button>
    </div>
  );
}
