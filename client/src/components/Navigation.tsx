import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import logoImage from '@assets/Protekt Logo_1761708306237.webp';

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Only apply fade effect on homepage
      if (location === '/') {
        // Calculate logo opacity based on scroll position
        // Hero section is typically 100vh, start fading in at 40vh, fully visible at 100vh
        const heroHeight = window.innerHeight;
        const fadeStartScroll = heroHeight * 0.4; // Start fading at 40% of viewport height
        const fadeEndScroll = heroHeight; // Fully visible at 100% of viewport height
        
        if (scrollY < fadeStartScroll) {
          setLogoOpacity(0);
        } else if (scrollY >= fadeEndScroll) {
          setLogoOpacity(1);
        } else {
          // Calculate opacity between 0 and 1 based on scroll progress
          const opacity = (scrollY - fadeStartScroll) / (fadeEndScroll - fadeStartScroll);
          setLogoOpacity(opacity);
        }
      } else {
        // On other pages, logo is always visible
        setLogoOpacity(1);
      }
    };
    handleScroll(); // Run on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/new-car-protection', label: 'Ceramic Coating' },
    { path: '/paint-correction', label: 'Paint Correction' },
    { path: '/window-tinting', label: 'Window Tinting' },
    { path: '/stonechip-protection', label: 'PPF' },
    { path: '/motorcycle-protection', label: 'Motorcycle' },
    { path: '/packages', label: 'Packages' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/40 backdrop-blur-md backdrop-brightness-50 border-b border-white/10' : 'bg-transparent'
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home-logo">
            <img 
              src={logoImage} 
              alt="Protekt Auto" 
              className="h-14 sm:h-16 -my-2 -ml-2 transition-opacity duration-300" 
              style={{ opacity: logoOpacity }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-sm font-medium transition-all duration-200 cursor-pointer px-3 py-2 rounded-md ${
                    location === link.path 
                      ? 'text-primary !bg-transparent' 
                      : 'text-white/90 hover:text-white hover:!bg-transparent hover:drop-shadow-[0_2px_6px_rgba(0,188,212,0.9)]'
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="icon"
              variant="default"
              className="phone-button-glow hover:!bg-primary/20 hover:border-primary transition-all"
              onClick={() => window.location.href = 'tel:0286062842'}
              data-testid="button-call-desktop"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden text-primary hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/5 border-b border-white/10" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`mobile-menu-text block py-2 px-3 rounded-md text-base font-medium cursor-pointer transition-all ${
                    location === link.path ? 'text-primary bg-black/60' : 'text-white/90 hover:text-white hover:bg-black/60 hover:drop-shadow-[0_2px_6px_rgba(0,188,212,0.9)]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button
              variant="default"
              className="phone-button-glow w-full gap-2 mt-4"
              onClick={() => window.location.href = 'tel:0286062842'}
              data-testid="button-call-mobile"
            >
              <Phone className="w-4 h-4" />
              (02) 8606 2842
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
