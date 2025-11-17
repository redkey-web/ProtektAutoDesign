import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StickyCallBar() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40"
      data-testid="sticky-call-bar"
    >
      {/* White translucent underlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      
      {/* Cyan bar on top */}
      <div className="relative bg-primary/50 border-t border-primary/30">
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
    </div>
  );
}
