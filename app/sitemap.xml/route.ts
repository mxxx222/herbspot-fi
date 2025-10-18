import { generateSitemapData } from '@/lib/seo';

export async function GET() {
  const sitemapData = generateSitemapData();
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapData.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fi" href="${item.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${item.url.replace('herbspot-fi.onrender.com', 'herbspot-fi.onrender.com/en')}" />
  </url>`).join('')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
