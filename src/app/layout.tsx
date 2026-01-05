import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import TrustTicker from '@/components/layout/TrustTicker'
import StickyPhoneButton from '@/components/layout/StickyPhoneButton'

export const metadata: Metadata = {
  title: {
    default: "Protekt Auto Design | Sydney's #1 Paint Protection & Car Care",
    template: '%s | Protekt Auto Design'
  },
  description: "Sydney's premier automotive protection specialists. Ceramic coatings, paint protection film (PPF), window tinting, and paint correction. Protect your investment today.",
  keywords: ['paint protection', 'ceramic coating', 'PPF', 'window tinting', 'paint correction', 'Sydney', 'car care', 'automotive protection'],
  authors: [{ name: 'Protekt Auto Design' }],
  creator: 'Protekt Auto Design',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Protekt Auto Design',
    title: "Protekt Auto Design | Sydney's #1 Paint Protection & Car Care",
    description: "Sydney's premier automotive protection specialists. Ceramic coatings, paint protection film (PPF), window tinting, and paint correction.",
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
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
