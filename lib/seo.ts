import type { Metadata } from "next";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  product?: {
    title: string;
    category: string;
    price?: string;
    availability?: string;
    image?: string;
  };
  article?: {
    title: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = "website",
  product,
  article
}: SEOHeadProps): Metadata {
  // Generate dynamic title and description
  let finalTitle = title || "HerbSpot — Premium 510 & Aromatherapy";
  let finalDescription = description || "Premium 510-patruunat, AIO-laitteet ja tarvikkeet luonnolliseen hyvinvointiin.";

  if (product) {
    finalTitle = `${product.title} | HerbSpot`;
    finalDescription = `${product.title} - ${product.category} | Luonnolliset yrttisekoitukset ja älykkäät välineet rentoutumiseen. Toimitus Suomesta.`;
  }

  if (article) {
    finalTitle = `${article.title} | HerbSpot Blog`;
    finalDescription = `${article.title} - Asiantuntijavinkit luonnolliseen hyvinvointiin ja aromaterapiaan.`;
  }

  const metadata: Metadata = {
    title: finalTitle,
    description: finalDescription,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      type: type === 'product' ? 'website' : type, // Map 'product' to 'website' for OpenGraph
      url: url,
      images: [
        {
          url: image || product?.image || "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      siteName: "HerbSpot",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [image || product?.image || "/og-default.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };

  // Add product-specific metadata
  if (product) {
    metadata.other = {
      ...(product.price && { "product:price:amount": product.price }),
      "product:price:currency": "EUR",
      "product:availability": product.availability || "in stock",
      ...(product.category && { "product:category": product.category }),
    };
  }

  // Add article-specific metadata
  if (article) {
    metadata.other = {
      ...(article.publishedTime && { "article:published_time": article.publishedTime }),
      ...(article.modifiedTime && { "article:modified_time": article.modifiedTime }),
      "article:author": article.author || "HerbSpot Team",
      "article:section": article.section || "Wellness",
    };
  }

  return metadata;
}

// Helper function for product pages
export function generateProductMetadata(product: {
  title: string;
  category: string;
  price?: string;
  availability?: string;
  image?: string;
  handle: string;
}) {
  return generateMetadata({
    title: product.title,
    description: `${product.title} - ${product.category} | Luonnolliset yrttisekoitukset ja älykkäät välineet rentoutumiseen. Toimitus Suomesta.`,
    image: product.image,
    url: `https://herbspot.fi/p/${product.handle}`,
    type: "product",
    product: {
      title: product.title,
      category: product.category,
      price: product.price,
      availability: product.availability,
      image: product.image,
    },
  });
}

// Generate robots.txt content
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /checkout/
Disallow: /cart/

Sitemap: https://herbspot.fi/sitemap.xml
`;
}

// Generate sitemap data
export function generateSitemapData() {
  return {
    url: "https://herbspot.fi",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 1,
    pages: [
      { url: "/", priority: 1, changeFrequency: "daily" },
      { url: "/shop", priority: 0.9, changeFrequency: "daily" },
      { url: "/blog", priority: 0.8, changeFrequency: "weekly" },
      { url: "/b2b", priority: 0.7, changeFrequency: "monthly" },
      { url: "/contact", priority: 0.6, changeFrequency: "monthly" },
    ]
  };
}

// Generate meta tags for dynamic pages
export function generateMetaTags({
  title,
  description,
  image,
  url,
  type = "website",
  keywords,
  price,
  currency,
  availability,
  brand,
  category
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
  price?: number;
  currency?: string;
  availability?: string;
  brand?: string;
  category?: string;
}) {
  return {
    title,
    description,
    keywords: keywords?.join(', ') || '',
    openGraph: {
      title,
      description,
      type: type === 'product' ? 'website' : type, // Map 'product' to 'website' for OpenGraph
      url,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
      siteName: "HerbSpot.fi",
      locale: "fi_FI"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
      creator: "@herbspotfi",
      site: "@herbspotfi"
    },
    alternates: {
      canonical: url,
      languages: {
        'fi': url,
        'en': url?.replace('herbspot.fi', 'herbspot.fi/en')
      }
    },
    other: {
      ...(price && { 'product:price:amount': price.toString() }),
      ...(currency && { 'product:price:currency': currency }),
      ...(availability && { 'product:availability': availability }),
      ...(brand && { 'product:brand': brand }),
      ...(category && { 'product:category': category })
    }
  };
}