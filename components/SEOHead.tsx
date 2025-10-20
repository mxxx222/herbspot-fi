'use client';

import { generateMetaTags } from '@/lib/seo';
import { usePathname } from 'next/navigation';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'product';
  price?: number;
  currency?: string;
  availability?: 'in_stock' | 'out_of_stock' | 'preorder';
  brand?: string;
  category?: string;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  image,
  type = 'website',
  price,
  currency = 'EUR',
  availability = 'in_stock',
  brand = 'HerbSpot',
  category = '510 Cartridges'
}: SEOHeadProps) {
  const pathname = usePathname();
  const url = `https://herbspot-fi.onrender.com${pathname}`;

  const metaData = generateMetaTags({
    title: title || 'HerbSpot.fi | Europe\'s Botanical Wellness Marketplace',
    description: description || 'Shop trusted 510-compatible wellness devices and botanical blends from verified EU suppliers. Authorised distributor of premium botanical wellness technology.',
    keywords,
    image,
    url,
    type,
    price,
    currency,
    availability,
    brand,
    category
  });

  return (
    <>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={metaData.openGraph.title} />
      <meta property="og:description" content={metaData.openGraph.description} />
      <meta property="og:url" content={metaData.openGraph.url} />
      <meta property="og:site_name" content={metaData.openGraph.siteName} />
      <meta property="og:type" content={metaData.openGraph.type} />
      <meta property="og:locale" content={metaData.openGraph.locale} />
      {metaData.openGraph.images && metaData.openGraph.images.map((img, index) => (
        <meta key={index} property="og:image" content={img.url} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content={metaData.twitter.card} />
      <meta name="twitter:title" content={metaData.twitter.title} />
      <meta name="twitter:description" content={metaData.twitter.description} />
      {metaData.twitter.images && metaData.twitter.images[0] && (
        <meta name="twitter:image" content={metaData.twitter.images[0]} />
      )}
      <meta name="twitter:creator" content={metaData.twitter.creator} />
      <meta name="twitter:site" content={metaData.twitter.site} />
      
      {/* Robots */}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      
      {/* Canonical */}
      <link rel="canonical" href={metaData.alternates.canonical} />
      
      {/* Language alternatives */}
      {metaData.alternates.languages && Object.entries(metaData.alternates.languages).map(([lang, href]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={href} />
      ))}
      
      {/* Additional meta tags */}
      {metaData.other && Object.entries(metaData.other).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
    </>
  );
}

export function ProductSEOHead({ product }: { product: any }) {
  return (
    <SEOHead
      title={product.name}
      description={product.description}
      keywords={product.tags || []}
      image={product.image}
      type="product"
      price={product.price}
      currency={product.currency}
      availability={product.availability}
      brand={product.brand}
      category={product.category}
    />
  );
}

export function CategorySEOHead({ category }: { category: any }) {
  return (
    <SEOHead
      title={`${category.name} - HerbSpot.fi | Europe's Botanical Wellness Marketplace`}
      description={`Curated ${category.name.toLowerCase()} from trusted EU suppliers. Authorised distributor of premium botanical wellness technology. Fast EU shipping.`}
      keywords={[category.name, 'botanical wellness', '510-compatible', 'EU suppliers', 'premium quality']}
      type="website"
    />
  );
}
