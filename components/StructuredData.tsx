"use client";
import { generateProductStructuredData, generateOrganizationStructuredData, generateBreadcrumbStructuredData, generateWebSiteStructuredData, generateLocalBusinessStructuredData } from '@/lib/seo';

interface StructuredDataProps {
  type: 'product' | 'organization' | 'breadcrumb';
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
