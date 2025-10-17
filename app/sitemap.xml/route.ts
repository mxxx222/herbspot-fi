import { generateSitemap } from '@/lib/seo';

export async function GET() {
  // Mock data - replace with actual data from your CMS/API
  const products = [
    { handle: "m4s-05" },
    { handle: "m4s-10" },
    { handle: "ccell-cer-05" },
    { handle: "easy-press-05" },
    { handle: "duo-glasspod" },
    { handle: "m3-plus" },
    { handle: "charger-usb" },
    { handle: "slide-box" }
  ];

  const categories = [
    { handle: "510-patruunat" },
    { handle: "laitteet" },
    { handle: "tarvikkeet" },
    { handle: "kosmetiikka" },
    { handle: "aromataterapia" }
  ];

  const sitemap = generateSitemap(products, categories);
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(page => `  <url>
    <loc>https://herbspot.fi${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
