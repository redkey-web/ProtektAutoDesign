import { Phone } from 'lucide-react';

export default function StickyPhoneButton() {
  return (
    <div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      data-testid="sticky-phone-button-container"
    >
      <a
        href="tel:0286062842"
        className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
        style={{
          boxShadow: '0 8px 16px rgba(220, 38, 38, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
          background: 'radial-gradient(circle at 30% 30%, #ef4444, #dc2626)',
        }}
        data-testid="sticky-phone-button"
      >
        {/* Glossy highlight effect */}
        <div className="absolute top-2 left-8 w-12 h-12 rounded-full bg-white/20 blur-md pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          <Phone className="w-8 h-8" />
          <span className="text-sm font-bold leading-tight whitespace-nowrap">(02) 8606 2842</span>
        </div>
      </a>
    </div>
  );
}
