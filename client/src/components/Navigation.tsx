import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import logoImage from '@assets/Protekt Logo_1761708306237.webp';

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home-logo">
            <img src={logoImage} alt="Protekt Auto" className="h-10 sm:h-12 -my-2" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.path ? 'text-primary' : isScrolled ? 'text-white/90' : 'text-white/80'
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
              variant="default"
              className="gap-2"
              onClick={() => window.location.href = 'tel:0286062842'}
              data-testid="button-call-desktop"
            >
              <Phone className="w-4 h-4" />
              (02) 8606 2842
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
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-b border-white/10" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`block py-2 text-base font-medium cursor-pointer ${
                    location === link.path ? 'text-primary' : 'text-white/90'
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
              className="w-full gap-2 mt-4"
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
