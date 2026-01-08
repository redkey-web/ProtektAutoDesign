'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Main nav links (DETAILING first)
  const mainNavLinks = [
    { path: '/detailing', label: 'DETAILING' },
    { path: '/ceramic-coating-sydney', label: 'CERAMIC COATING' },
    { path: '/paint-correction', label: 'PAINT CORRECTION' },
    { path: '/window-tinting-sydney', label: 'TINTING' },
    { path: '/ppf-car-wrap-sydney', label: 'PPF' },
    { path: '/contact', label: 'CONTACT' },
  ];

  // More dropdown links
  const moreLinks = [
    { path: '/motorcycle-protection', label: 'MOTORCYCLE' },
    { path: '/packages', label: 'PACKAGES' },
    { path: '/gallery', label: 'GALLERY' },
  ];

  // All links for mobile menu
  const allNavLinks = [
    ...mainNavLinks.slice(0, -1), // All except CONTACT
    ...moreLinks,
    mainNavLinks[mainNavLinks.length - 1], // CONTACT last
  ];

  // Scroll listener for header expand/shrink
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] bg-black/20 backdrop-blur-md backdrop-brightness-50 border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" data-testid="link-home-logo">
            <Image
              src="/images/protekt-logo.webp"
              alt="Protekt Auto"
              width={200}
              height={64}
              className={`w-auto -my-4 transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-14'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-base font-medium tracking-wider px-3 py-2 transition-colors duration-200 hover:text-white group ${
                  pathname === link.path
                    ? 'text-primary'
                    : 'text-white/80'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
                {/* Underline hover effect */}
                <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary transition-transform duration-300 origin-left ${
                  pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}

            {/* More Dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`relative text-base font-medium tracking-wider px-3 py-2 transition-colors duration-200 hover:text-white flex items-center gap-1 group ${
                  moreLinks.some(l => pathname === l.path)
                    ? 'text-primary'
                    : 'text-white/80'
                }`}
              >
                MORE
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary transition-transform duration-300 origin-left ${
                  moreLinks.some(l => pathname === l.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>

              {/* Dropdown Menu */}
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg min-w-[160px] shadow-xl">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setIsMoreOpen(false)}
                      className={`block px-4 py-2 text-base font-medium tracking-wider transition-colors duration-200 hover:text-white hover:bg-white/10 ${
                        pathname === link.path
                          ? 'text-primary'
                          : 'text-white/80'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden xl:flex items-center gap-2 px-5 py-2 bg-primary text-black font-bold text-sm tracking-wide skew-x-[-8deg] hover:bg-primary/90 hover:scale-105 transition-all"
              data-testid="button-book-now-desktop"
            >
              <span className="skew-x-[8deg]">Get a Quote</span>
            </Link>
            <Button
              asChild
              size="icon"
              variant="default"
              className="xl:hidden phone-button-glow hover:!bg-primary/20 hover:border-primary transition-all"
              data-testid="button-book-now-icon"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5" />
              </Link>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md border-b border-white/10 mobile-menu-animate" data-testid="mobile-menu">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {allNavLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={`mobile-menu-text block py-3 px-3 rounded-md text-base font-medium tracking-wide transition-all mobile-item-animate ${
                  pathname === link.path ? 'text-primary bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
                style={{ animationDelay: `${0.05 + index * 0.04}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="default"
              className="phone-button-glow w-full gap-2 mt-4 mobile-item-animate"
              style={{ animationDelay: `${0.05 + allNavLinks.length * 0.04}s` }}
              data-testid="button-call-mobile"
            >
              <a href="tel:0286062842">
                <Phone className="w-4 h-4" />
                (02) 8606 2842
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
