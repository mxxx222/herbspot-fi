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
      type: type,
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
      "product:price:amount": product.price,
      "product:price:currency": "EUR",
      "product:availability": product.availability || "in stock",
      "product:category": product.category,
    };
  }

  // Add article-specific metadata
  if (article) {
    metadata.other = {
      "article:published_time": article.publishedTime,
      "article:modified_time": article.modifiedTime,
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
  type = "website"
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      url,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
      siteName: "HerbSpot.fi"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined
    }
  };
}