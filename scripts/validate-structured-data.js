import { JSDOM } from 'jsdom';

const urls = [
  process.env.AUDIT_URL_STAGING || 'https://staging.herbspot.fi',
  process.env.AUDIT_URL_PROD || 'https://www.herbspot.fi'
];

const validateStructuredData = async (url) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Check for JSON-LD scripts
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    let hasOrganization = false;
    let hasProduct = false;
    let hasAggregateRating = false;
    
    jsonLdScripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        
        if (data['@type'] === 'Organization') {
          hasOrganization = true;
          console.log(`✅ Organization schema found @ ${url}`);
        }
        
        if (data['@type'] === 'Product') {
          hasProduct = true;
          console.log(`✅ Product schema found @ ${url}`);
          
          if (data.aggregateRating) {
            hasAggregateRating = true;
            console.log(`✅ AggregateRating schema found @ ${url}`);
          }
        }
      } catch (e) {
        console.warn(`⚠️ Invalid JSON-LD @ ${url}:`, e.message);
      }
    });
    
    // Check for hreflang
    const hreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    const hreflangCount = hreflangLinks.length;
    
    if (hreflangCount >= 3) {
      console.log(`✅ Hreflang tags found (${hreflangCount}) @ ${url}`);
    } else {
      console.warn(`⚠️ Missing hreflang tags @ ${url} (found ${hreflangCount})`);
    }
    
    // Check for canonical
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      console.log(`✅ Canonical link found @ ${url}`);
    } else {
      console.warn(`⚠️ Missing canonical link @ ${url}`);
    }
    
    // Summary
    const score = (hasOrganization ? 1 : 0) + (hasProduct ? 1 : 0) + (hasAggregateRating ? 1 : 0) + (hreflangCount >= 3 ? 1 : 0) + (canonicalLink ? 1 : 0);
    
    if (score >= 4) {
      console.log(`✅ SEO validation passed @ ${url} (${score}/5)`);
    } else {
      console.error(`❌ SEO validation failed @ ${url} (${score}/5)`);
      process.exit(1);
    }
    
  } catch (error) {
    console.error(`❌ Error validating ${url}:`, error.message);
    process.exit(1);
  }
};

for (const url of urls) {
  await validateStructuredData(url);
}
