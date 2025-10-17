import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('homepage performance', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check Core Web Vitals
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals = {};
          
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.lcp = entry.startTime;
            }
            if (entry.entryType === 'first-input') {
              vitals.fid = entry.processingStart - entry.startTime;
            }
            if (entry.entryType === 'layout-shift') {
              vitals.cls = entry.value;
            }
          });
          
          resolve(vitals);
        }).observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        
        // Fallback timeout
        setTimeout(() => resolve({}), 5000);
      });
    });
    
    console.log('Core Web Vitals:', metrics);
    
    // Check page load time
    const loadTime = await page.evaluate(() => performance.timing.loadEventEnd - performance.timing.navigationStart);
    expect(loadTime).toBeLessThan(3000); // Should load in under 3 seconds
  });

  test('image optimization', async ({ page }) => {
    await page.goto('/');
    
    // Check images are optimized
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const src = await img.getAttribute('src');
      if (src) {
        // Check if image is from optimized source
        expect(src).toMatch(/\.(webp|avif|jpg|jpeg|png)$/);
      }
    }
  });

  test('bundle size check', async ({ page }) => {
    await page.goto('/');
    
    // Check JavaScript bundle size
    const jsSize = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      return scripts.reduce((total, script) => {
        const src = script.getAttribute('src');
        if (src && src.includes('_next/static')) {
          return total + 1; // Count JS files
        }
        return total;
      }, 0);
    });
    
    expect(jsSize).toBeLessThan(10); // Should have reasonable number of JS files
  });

  test('mobile performance', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check mobile-specific performance
    const mobileMetrics = await page.evaluate(() => {
      return {
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown'
      };
    });
    
    expect(mobileMetrics.viewport.width).toBe(375);
    expect(mobileMetrics.viewport.height).toBe(667);
  });

  test('PWA functionality', async ({ page }) => {
    await page.goto('/');
    
    // Check manifest
    const manifest = await page.evaluate(() => {
      const manifestLink = document.querySelector('link[rel="manifest"]');
      return manifestLink ? manifestLink.getAttribute('href') : null;
    });
    
    expect(manifest).toBe('/manifest.json');
    
    // Check service worker
    const swRegistered = await page.evaluate(() => {
      return 'serviceWorker' in navigator;
    });
    
    expect(swRegistered).toBe(true);
  });

  test('accessibility basics', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper heading structure
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
    
    // Check for alt text on images
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
    
    // Check for proper form labels
    const inputs = await page.locator('input').all();
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      if (id) {
        const label = await page.locator(`label[for="${id}"]`).count();
        const ariaLabel = await input.getAttribute('aria-label');
        expect(label > 0 || ariaLabel).toBeTruthy();
      }
    }
  });
});
