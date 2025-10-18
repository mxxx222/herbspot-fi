// SEO utilities for HerbSpot.fi

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  price?: number;
  currency?: string;
  availability?: 'in_stock' | 'out_of_stock' | 'preorder';
  brand?: string;
  category?: string;
}

export function generateMetaTags(data: SEOData) {
  const {
    title,
    description,
    keywords = [],
    image = 'https://herbspot-fi.onrender.com/images/og-image.jpg',
    url = 'https://herbspot-fi.onrender.com',
    type = 'website',
    price,
    currency = 'EUR',
    availability = 'in_stock',
    brand = 'HerbSpot',
    category = '510 Cartridges'
  } = data;

  const baseTitle = 'HerbSpot — Premium 510 & Aromatherapy';
  const fullTitle = title === baseTitle ? title : `${title} | ${baseTitle}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'HerbSpot.fi',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fi_FI',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@herbspot_fi',
      site: '@herbspot_fi',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'fi-FI': url,
        'en-US': url.replace('herbspot-fi.onrender.com', 'herbspot-fi.onrender.com/en'),
      },
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
      'msvalidate.01': 'your-bing-verification-code',
    },
  };
}

export function generateProductStructuredData(product: {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  availability: string;
  brand: string;
  category: string;
  sku?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: product.category,
    sku: product.sku || product.name.toLowerCase().replace(/\s+/g, '-'),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
      seller: {
        '@type': 'Organization',
        name: 'HerbSpot Oy',
        url: 'https://herbspot-fi.onrender.com',
      },
    },
    aggregateRating: product.rating && product.reviewCount ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    } : undefined,
  };
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HerbSpot Oy',
    url: 'https://herbspot-fi.onrender.com',
    logo: 'https://herbspot-fi.onrender.com/images/logo.svg',
    description: 'Premium 510-patruunat, AIO-laitteet ja tarvikkeet. Lääkinnällinen teräs, pyrex ja keraaminen ydin.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FI',
      addressLocality: 'Helsinki',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+358-XX-XXX-XXXX',
      contactType: 'customer service',
      email: 'info@herbspot.fi',
    },
    sameAs: [
      'https://www.instagram.com/herbspot_fi',
      'https://www.facebook.com/herbspot.fi',
      'https://twitter.com/herbspot_fi',
    ],
  };
}

export function generateBreadcrumbStructuredData(items: Array<{
  name: string;
  url: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQStructuredData(faqs: Array<{
  question: string;
  answer: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HerbSpot Oy',
    description: 'Premium 510-patruunat ja aromatherapy-laitteet',
    url: 'https://herbspot-fi.onrender.com',
    telephone: '+358-XX-XXX-XXXX',
    email: 'info@herbspot.fi',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Helsinki',
      addressLocality: 'Helsinki',
      addressCountry: 'FI',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '60.1699',
      longitude: '24.9384',
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    priceRange: '€€',
    paymentAccepted: 'Cash, Credit Card, PayPal',
    currenciesAccepted: 'EUR',
  };
}

export function generateWebSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HerbSpot.fi',
    url: 'https://herbspot-fi.onrender.com',
    description: 'Premium 510-patruunat, AIO-laitteet ja tarvikkeet',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://herbspot-fi.onrender.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HerbSpot Oy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://herbspot-fi.onrender.com/images/logo.svg',
      },
    },
  };
}

export function generateSitemapData() {
  const baseUrl = 'https://herbspot-fi.onrender.com';
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/c/510-patruunat`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/c/laitteet`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/c/tarvikkeet`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/b2b`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/shop`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
}

export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: https://herbspot-fi.onrender.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /checkout/

# Allow important pages
Allow: /shop
Allow: /c/
Allow: /p/
Allow: /b2b
Allow: /en

# Crawl delay
Crawl-delay: 1`;
}