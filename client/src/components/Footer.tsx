import { Link } from 'wouter';
import logoImage from '@assets/Protekt Logo_1761708306237.webp';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Ceramic Coating', path: '/new-car-protection' },
    { name: 'Paint Correction', path: '/paint-correction' },
    { name: 'Window Tinting', path: '/window-tinting' },
    { name: 'Paint Protection Film', path: '/stonechip-protection' },
    { name: 'Motorcycle Protection', path: '/motorcycle-protection' },
    { name: 'Packages', path: '/packages' },
  ];

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logoImage} alt="Protekt Auto" className="h-10 mb-4" data-testid="img-footer-logo" />
            <p className="text-foreground/60 mb-4 max-w-md" data-testid="text-footer-description">
              Sydney's premier automotive paint protection specialists. We provide professional ceramic
              coatings, paint correction, and paint protection film services.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/protektauto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/protektauto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4" data-testid="text-services-heading">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link href={service.path}>
                    <span
                      className="text-foreground/60 hover:text-primary transition-colors cursor-pointer"
                      data-testid={`link-footer-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4" data-testid="text-contact-heading">Contact</h3>
            <ul className="space-y-2 text-foreground/60">
              <li data-testid="text-footer-phone">
                <a href="tel:0286062842" className="hover:text-primary transition-colors">
                  (02) 8606 2842
                </a>
              </li>
              <li data-testid="text-footer-email">
                <a href="mailto:info@protektauto.com.au" className="hover:text-primary transition-colors">
                  info@protektauto.com.au
                </a>
              </li>
              <li data-testid="text-footer-address">
                24 George Street
                <br />
                Clyde, NSW 2142
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-foreground/60 text-sm">
          <p data-testid="text-copyright">
            © {currentYear} Protekt Auto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
