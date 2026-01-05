'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/new-car-protection', label: 'Ceramic Coating' },
    { path: '/paint-correction', label: 'Paint Correction' },
    { path: '/window-tinting', label: 'Tinting' },
    { path: '/stonechip-protection', label: 'PPF' },
    { path: '/motorcycle-protection', label: 'Motorcycle' },
    { path: '/packages', label: 'Packages' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md backdrop-brightness-50 border-b border-white/10"
      data-testid="navigation-header"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home-logo">
            <Image
              src="/images/protekt-logo.webp"
              alt="Protekt Auto"
              width={200}
              height={64}
              className="h-14 sm:h-16 w-auto -my-2 -ml-2"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link-desktop text-sm font-medium transition-all duration-200 cursor-pointer px-3 py-2 rounded-md ${
                  pathname === link.path
                    ? 'text-primary active'
                    : 'text-white/90 hover:text-white'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              className="hidden xl:flex items-center gap-2 px-6 py-2 bg-primary text-black font-bold text-sm tracking-wide hover:bg-primary/90 transition-all"
              data-testid="button-book-now-desktop"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
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

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/5 border-b border-white/10" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`mobile-menu-text block py-2 px-3 rounded-md text-base font-medium cursor-pointer transition-all ${
                  pathname === link.path ? 'text-primary bg-black/60' : 'text-white/90 hover:text-white hover:bg-black/60 hover:drop-shadow-[0_2px_6px_rgba(0,188,212,0.9)]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="default"
              className="phone-button-glow w-full gap-2 mt-4"
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
