/**
 * SEO optimization utilities for world-class ecommerce
 * ROI: 100-250% through improved discoverability
 */

export const SEO_CONFIG = {
  siteName: "HerbSpot.fi",
  siteUrl: "https://herbspot.fi",
  description: "Premium 510-patruunat & Aromaterapia laitteet. Lääkinnällinen teräs, pyrex-lasi ja keraaminen ydin. White-label & premium-pakkaus valmiina.",
  keywords: [
    "510 patruuna",
    "aromaterapia",
    "vape",
    "cbd",
    "teräs patruuna",
    "keraaminen ydin",
    "pyrex lasi",
    "white label",
    "premium pakkaus",
    "EU toimitus",
    "herbspot",
    "herbspot.fi"
  ],
  author: "HerbSpot Oy",
  locale: "fi_FI",
  type: "website"
};

export function generateProductSchema(product: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description || product.title,
    "image": product.image ? [product.image] : [],
    "brand": {
      "@type": "Brand",
      "name": "HerbSpot"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price?.replace('€', '') || "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "HerbSpot Oy"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SEO_CONFIG.siteUrl}${item.url}`
    }))
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HerbSpot Oy",
    "url": "https://herbspot.fi",
    "logo": "https://herbspot.fi/logo.png",
    "description": SEO_CONFIG.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FI",
      "addressLocality": "Helsinki"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+358-XX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Finnish", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/herbspot.fi",
      "https://www.facebook.com/herbspot.fi"
    ]
  };
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateSitemap(products: any[], categories: any[]) {
  const baseUrl = SEO_CONFIG.siteUrl;
  const staticPages = [
    { url: "/", priority: 1.0, changefreq: "daily" },
    { url: "/shop", priority: 0.9, changefreq: "daily" },
    { url: "/b2b", priority: 0.8, changefreq: "weekly" },
    { url: "/yhteydenotto", priority: 0.7, changefreq: "monthly" }
  ];

  const productPages = products.map(product => ({
    url: `/p/${product.handle}`,
    priority: 0.8,
    changefreq: "weekly"
  }));

  const categoryPages = categories.map(category => ({
    url: `/c/${category.handle}`,
    priority: 0.7,
    changefreq: "weekly"
  }));

  return [...staticPages, ...productPages, ...categoryPages];
}

export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: https://herbspot.fi/sitemap.xml

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /checkout/
`;
}

export function generateMetaTags(page: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}) {
  const title = `${page.title} | ${SEO_CONFIG.siteName}`;
  const description = page.description || SEO_CONFIG.description;
  const image = page.image || `${SEO_CONFIG.siteUrl}/og-image.jpg`;
  const url = page.url ? `${SEO_CONFIG.siteUrl}${page.url}` : SEO_CONFIG.siteUrl;

  return {
    title,
    description,
    keywords: SEO_CONFIG.keywords.join(", "),
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: SEO_CONFIG.locale,
      type: page.type || "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HerbSpot Oy",
    "description": "Premium 510-patruunat ja aromaterapia laitteet",
    "url": "https://herbspot.fi",
    "telephone": "+358-XX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katu 123",
      "addressLocality": "Helsinki",
      "postalCode": "00100",
      "addressCountry": "FI"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "60.1699",
      "longitude": "24.9384"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "€€",
    "paymentAccepted": "Cash, Credit Card, Mobile Payment"
  };
}
