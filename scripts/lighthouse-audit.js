import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const urls = [
  process.env.AUDIT_URL_STAGING || 'https://staging.herbspot.fi',
  process.env.AUDIT_URL_PROD || 'https://www.herbspot.fi'
];

const budgets = {
  resourceSizes: [{ resourceType: 'total', budget: 250 }], // KB
  resourceCounts: [{ resourceType: 'third-party', budget: 15 }]
};

const run = async (url) => {
  const chrome = await launch({ chromeFlags: ['--headless'] });
  const opts = { port: chrome.port, budgets: [budgets] };
  
  const { lhr } = await lighthouse(url, opts, {
    extends: 'lighthouse:default',
    settings: { 
      formFactor: 'desktop', 
      screenEmulation: { disabled: true } 
    }
  });
  
  const { metrics } = lhr.audits;
  const LCP = metrics?.details?.items?.[0]?.largestContentfulPaint;
  const INP = lhr.audits['interactive'].numericValue; // fallback
  const CLS = lhr.audits['cumulative-layout-shift'].numericValue;
  
  if (LCP > 2500 || CLS > 0.1) {
    console.error(`❌ Perf fail @ ${url}`, { LCP, CLS });
    process.exit(1);
  }
  
  console.log(`✅ Perf ok @ ${url}`, { LCP, CLS });
  await chrome.kill();
};

for (const u of urls) await run(u);