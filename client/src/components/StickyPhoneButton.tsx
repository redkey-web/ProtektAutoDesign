import { Phone } from 'lucide-react';

export default function StickyPhoneButton() {
  return (
    <div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      data-testid="sticky-phone-button-container"
    >
      <a
        href="tel:0286062842"
        className="relative flex flex-col items-center justify-center w-40 h-40 rounded-full text-white font-bold transition-all duration-300 group"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #ef4444, #b91c1c)',
          boxShadow: '0 0 40px rgba(220, 38, 38, 0.6), inset 0 2px 8px rgba(255, 255, 255, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.3)',
        }}
        data-testid="sticky-phone-button"
      >
        {/* Blinking border light */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '3px solid rgba(34, 197, 94, 0.8)',
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)',
            animation: 'engine-blink 1.5s ease-in-out infinite',
          }}
        />
        
        {/* Glossy top highlight - like a shiny button */}
        <div className="absolute top-4 left-12 w-16 h-16 rounded-full bg-white/25 blur-lg pointer-events-none" />
        
        {/* Outer ring effect */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1), transparent 70%)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          <Phone className="w-10 h-10 drop-shadow-lg" />
          <span className="text-lg font-bold leading-tight whitespace-nowrap tracking-tight drop-shadow-md">(02) 8606 2842</span>
        </div>
        
        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(220, 38, 38, 0.5)',
          }}
        />
      </a>
    </div>
  );
}
