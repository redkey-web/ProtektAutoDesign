import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Ceramic Coating', path: '/ceramic-coating-sydney' },
    { name: 'Paint Correction', path: '/paint-correction' },
    { name: 'Window Tinting', path: '/window-tinting-sydney' },
    { name: 'Paint Protection Film', path: '/ppf-car-wrap-sydney' },
    { name: 'Detailing', path: '/detailing' },
    { name: 'Motorcycle Protection', path: '/motorcycle-protection' },
    { name: 'Packages', path: '/packages' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-black/90 border-t border-white/10" data-testid="footer">
      {/* Brands We Use Section - Above Footer Content */}
      <div className="bg-black/70 py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-white mb-8 text-center text-xl" data-testid="text-brands-heading">
            Brands We Use
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image
              src="/images/ultimate-plus-logo.png"
              alt="Ultimate Plus Paint Protection Film"
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              data-testid="img-brand-ultimate-plus"
            />
            <Image
              src="/images/xpel-logo.webp"
              alt="XPEL Paint Protection Film"
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              data-testid="img-brand-xpel"
            />
            <Image
              src="/images/nxtzen-logo.png"
              alt="NXTZEN Ceramic Coating"
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              data-testid="img-brand-nxtzen"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/protekt-logo.webp"
              alt="Protekt Auto"
              width={200}
              height={52}
              className="h-[3.25rem] w-auto mb-4"
              data-testid="img-footer-logo"
            />
            <p className="text-white/70 mb-4 max-w-md" data-testid="text-footer-description">
              Sydney&apos;s premier automotive paint protection specialists. We provide professional ceramic coatings, paint correction, and paint protection film services.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/protektauto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-colors text-white/80 hover:text-white"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/protektauto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-colors text-white/80 hover:text-white"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4" data-testid="text-services-heading">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    href={service.path}
                    className="text-white/70 hover:text-primary transition-colors cursor-pointer"
                    data-testid={`link-footer-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4" data-testid="text-contact-heading">Contact</h3>
            <ul className="space-y-2 text-white/70">
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

        {/* Google Maps */}
        <div className="py-8 border-t border-white/10">
          <h3 className="font-semibold text-white mb-4 text-center" data-testid="text-location-heading">
            Visit Our Workshop
          </h3>
          <div className="rounded-lg overflow-hidden h-[250px] md:h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7876548234!2d151.0147!3d-33.8367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a4b7c9df8b05%3A0x1234567890abcdef!2s24%20George%20St%2C%20Clyde%20NSW%202142%2C%20Australia!5e0!3m2!1sen!2sau!4v1704500000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Protekt Auto Location - 24 George Street, Clyde NSW 2142"
              className=""
            />
          </div>
          <p className="text-white/60 text-sm text-center mt-3">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=24+George+Street+Clyde+NSW+2142+Australia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Get Directions to Protekt Auto
            </a>
          </p>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm pb-28">
          <p data-testid="text-copyright">
            &copy; {currentYear} Protekt Auto. All rights reserved.
          </p>
          <p className="mt-2">
            SEO &amp; Website by{' '}
            <a
              href="https://redkey.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Red Key
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
