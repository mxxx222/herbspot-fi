const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouseAudit() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
    port: chrome.port,
  };

  const runnerResult = await lighthouse('http://localhost:3000', options);
  
  // Close chrome
  await chrome.kill();
  
  // Extract scores
  const scores = {
    performance: runnerResult.lhr.categories.performance.score * 100,
    accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    bestPractices: runnerResult.lhr.categories['best-practices'].score * 100,
    seo: runnerResult.lhr.categories.seo.score * 100,
    pwa: runnerResult.lhr.categories.pwa.score * 100,
  };
  
  console.log('Lighthouse Scores:');
  console.log(`Performance: ${scores.performance.toFixed(0)}/100`);
  console.log(`Accessibility: ${scores.accessibility.toFixed(0)}/100`);
  console.log(`Best Practices: ${scores.bestPractices.toFixed(0)}/100`);
  console.log(`SEO: ${scores.seo.toFixed(0)}/100`);
  console.log(`PWA: ${scores.pwa.toFixed(0)}/100`);
  
  // Check if scores meet requirements
  const requirements = {
    performance: 90,
    accessibility: 90,
    bestPractices: 90,
    seo: 90,
    pwa: 80,
  };
  
  let allPassed = true;
  for (const [category, score] of Object.entries(scores)) {
    const required = requirements[category];
    if (score < required) {
      console.log(`❌ ${category}: ${score.toFixed(0)}/100 (required: ${required})`);
      allPassed = false;
    } else {
      console.log(`✅ ${category}: ${score.toFixed(0)}/100`);
    }
  }
  
  if (allPassed) {
    console.log('\n🎉 All Lighthouse requirements met!');
  } else {
    console.log('\n⚠️  Some requirements not met. Check the scores above.');
  }
  
  return scores;
}

runLighthouseAudit().catch(console.error);
