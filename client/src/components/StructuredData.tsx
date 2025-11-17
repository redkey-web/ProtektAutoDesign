interface StructuredDataProps {
  type?: 'LocalBusiness' | 'AutomotiveBusiness';
}

export default function StructuredData({ type = 'LocalBusiness' }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Protekt Auto',
    image: 'https://protektauto.com.au/logo.webp',
    '@id': 'https://protektauto.com.au',
    url: 'https://protektauto.com.au',
    telephone: '0286062842',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24 George Street',
      addressLocality: 'Clyde',
      addressRegion: 'NSW',
      postalCode: '2142',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8362,
      longitude: 151.0164,
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
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/protektauto',
      'https://www.instagram.com/protektauto',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vehicle Protection Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceramic Coating',
            description: 'Premium ceramic and graphene coating application',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paint Protection Film',
            description: 'Self-healing PPF installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paint Correction',
            description: 'Professional paint correction and polishing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Tinting',
            description: 'Ceramic and carbon window tinting',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
