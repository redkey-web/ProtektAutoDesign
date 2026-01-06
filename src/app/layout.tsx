import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import TrustTicker from '@/components/layout/TrustTicker'
import StickyPhoneButton from '@/components/layout/StickyPhoneButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://protektautodesign.com.au'),
  title: {
    default: "Protekt Auto Design | Sydney's #1 Paint Protection & Car Care",
    template: '%s | Protekt Auto Design'
  },
  description: "Sydney's premier automotive protection specialists. Ceramic coatings, paint protection film (PPF), window tinting, and paint correction. Protect your investment today.",
  keywords: ['paint protection', 'ceramic coating', 'PPF', 'window tinting', 'paint correction', 'Sydney', 'car care', 'automotive protection'],
  authors: [{ name: 'Protekt Auto Design' }],
  creator: 'Protekt Auto Design',
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Protekt Auto Design',
    title: "Protekt Auto Design | Sydney's #1 Paint Protection & Car Care",
    description: "Sydney's premier automotive protection specialists. Ceramic coatings, paint protection film (PPF), window tinting, and paint correction.",
    images: ['/images/protekt-logo.webp'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://protektautodesign.com.au',
  name: 'Protekt Auto Design',
  description: "Sydney's premier automotive protection specialists. Ceramic coatings, paint protection film (PPF), window tinting, and paint correction.",
  url: 'https://protektautodesign.com.au',
  telephone: '+61-2-XXXX-XXXX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8688,
    longitude: 151.2093,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  image: 'https://protektautodesign.com.au/images/protekt-logo.webp',
  sameAs: [
    'https://www.instagram.com/protektautodesign/',
    'https://www.facebook.com/protektautodesign/',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Sydney',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automotive Protection Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ceramic Coating',
          description: 'Professional ceramic coating for ultimate paint protection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Paint Protection Film (PPF)',
          description: 'Clear bra and stone chip protection film installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Window Tinting',
          description: 'Premium window tinting with ceramic and carbon films',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Paint Correction',
          description: 'Professional paint correction and polishing services',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Barlow Condensed font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <main className="pt-16 pb-28">
          {children}
        </main>
        <TrustTicker />
        <StickyPhoneButton />
        <Footer />
      </body>
    </html>
  )
}
