import { generateSitemapData } from '@/lib/seo';

export async function GET() {
  const sitemapData = generateSitemapData();
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${sitemapData.url}</loc>
    <lastmod>${sitemapData.lastModified}</lastmod>
    <changefreq>${sitemapData.changeFrequency}</changefreq>
    <priority>${sitemapData.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fi" href="${sitemapData.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${sitemapData.url.replace('herbspot.fi', 'herbspot.fi/en')}" />
  </url>
${sitemapData.pages.map(item => `
  <url>
    <loc>${sitemapData.url}${item.url}</loc>
    <lastmod>${sitemapData.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fi" href="${sitemapData.url}${item.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${sitemapData.url.replace('herbspot.fi', 'herbspot.fi/en')}${item.url}" />
  </url>`).join('')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
