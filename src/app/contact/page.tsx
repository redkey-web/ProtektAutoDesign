import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Protekt Auto | Book Your Paint Protection Service Sydney',
  description:
    'Contact Protekt Auto for ceramic coating, PPF, paint correction & window tinting in Sydney. Call (02) 8606 2842 or visit us at 24 George Street, Clyde NSW 2142.',
  keywords:
    'contact protekt auto, ceramic coating quote sydney, ppf quote sydney, paint protection booking, car detailing sydney contact',
  alternates: {
    canonical: 'https://protektauto.com.au/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-black to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to protect your vehicle? Get in touch for a quote or to book your service.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ContactSection />

      {/* Google Maps Section */}
      <section className="py-16 bg-card/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Visit Our Workshop
            </h2>
            <p className="text-foreground/60">
              24 George Street, Clyde NSW 2142
            </p>
          </div>
          <div className="rounded-lg overflow-hidden h-[350px] md:h-[450px] shadow-xl">
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
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=24+George+Street+Clyde+NSW+2142+Australia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spray-edge inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-md transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
