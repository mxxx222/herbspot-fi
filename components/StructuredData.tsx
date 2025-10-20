"use client";

interface StructuredDataProps {
  type: 'product' | 'organization' | 'breadcrumb' | 'faq' | 'blog';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let jsonLd;

  switch (type) {
    case 'product':
      jsonLd = generateProductStructuredData(data);
      break;
    case 'organization':
      jsonLd = generateOrganizationStructuredData();
      break;
    case 'breadcrumb':
      jsonLd = generateBreadcrumbStructuredData(data);
      break;
    case 'faq':
      jsonLd = generateFAQStructuredData(data);
      break;
    case 'blog':
      jsonLd = generateBlogStructuredData(data);
      break;
    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Product Structured Data
function generateProductStructuredData(product: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description || `${product.title} - Curated botanical wellness device from trusted EU suppliers.`,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": product.brand?.name || "HerbSpot"
    },
    "offers": {
      "@type": "Offer",
      "price": String(product.price || '0').replace(/[€$]/g, '').trim() || "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "HerbSpot.fi",
        "url": "https://herbspot.fi",
        "description": "Europe's trusted destination for botanical wellness devices"
      },
      "url": `https://herbspot.fi/p/${product.handle}`,
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "EUR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "EU"
        }
      }
    },
    "category": product.category,
    "sku": product.handle,
    "url": `https://herbspot.fi/p/${product.handle}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };
}

// Organization Structured Data
function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HerbSpot.fi",
    "url": "https://herbspot.fi",
    "logo": "https://herbspot.fi/logo.png",
    "description": "Europe's trusted destination for botanical wellness devices. Authorised distributor of premium 510-compatible wellness technology from verified EU suppliers.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FI",
      "addressLocality": "Helsinki"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+358-XX-XXX-XXXX",
      "contactType": "customer service",
      "email": "info@herbspot.fi"
    },
    "sameAs": [
      "https://www.instagram.com/herbspot.fi",
      "https://www.facebook.com/herbspot.fi"
    ]
  };
}

// Breadcrumb Structured Data
function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// FAQ Structured Data
function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
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

// Blog Structured Data
function generateBlogStructuredData(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": post.image || "/og-default.jpg",
    "author": {
      "@type": "Organization",
      "name": "HerbSpot Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HerbSpot Oy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://herbspot.fi/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://herbspot.fi/blog/${post.slug}`
    },
    "articleSection": post.category || "Wellness",
    "keywords": post.tags || ["wellness", "aromaterapia", "luonnollinen hyvinvointi"]
  };
}

// Component exports
export function ProductStructuredData({ product }: { product: any }) {
  if (!product) return null;
  return <StructuredData type="product" data={product} />;
}

export function OrganizationStructuredData() {
  return <StructuredData type="organization" data={null} />;
}

export function BreadcrumbStructuredData({ items }: { items: Array<{name: string, url: string}> }) {
  return <StructuredData type="breadcrumb" data={items} />;
}

export function FAQStructuredData({ faqs }: { faqs: Array<{question: string, answer: string}> }) {
  return <StructuredData type="faq" data={faqs} />;
}

export function BlogStructuredData({ post }: { post: any }) {
  return <StructuredData type="blog" data={post} />;
}
