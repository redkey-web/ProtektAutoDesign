import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import TrustTicker from '@/components/layout/TrustTicker'
import StickyPhoneButton from '@/components/layout/StickyPhoneButton'
import ScrollToTop from '@/components/ScrollToTop'

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

        {/* DNS Prefetch & Preconnect for third-party resources */}
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://f.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fresnel.vimeocdn.com" />

        {/* Google Fonts - preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical font weights */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3bWuYMBYw.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Font stylesheet with display=swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />

        {/* Preload critical images */}
        <link
          rel="preload"
          href="/images/protekt-logo.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Fixed black strip behind header */}
        <div className="fixed top-0 left-0 right-0 h-20 bg-black z-0" />
        <ScrollToTop />
        <Navigation />
        <main className="pt-20 pb-28">
          {children}
        </main>
        <TrustTicker />
        <StickyPhoneButton />
        <Footer />
      </body>
    </html>
  )
}
