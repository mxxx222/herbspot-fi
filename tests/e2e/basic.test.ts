import { test, expect } from '@playwright/test';

test.describe('HerbSpot.fi Basic Functionality', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/HerbSpot/);
    
    // Check main navigation
    await expect(page.locator('nav')).toBeVisible();
    
    // Check hero section
    await expect(page.locator('h1')).toContainText('Premium 510');
    
    // Check category grid
    await expect(page.locator('[data-testid="category-grid"]')).toBeVisible();
  });

  test('shop page loads and displays products', async ({ page }) => {
    await page.goto('/shop');
    
    // Check page title
    await expect(page).toHaveTitle(/Kauppa/);
    
    // Check products are displayed
    await expect(page.locator('[data-testid="product-card"]')).toHaveCount.greaterThan(0);
  });

  test('product page loads correctly', async ({ page }) => {
    await page.goto('/p/m4s-05');
    
    // Check product title
    await expect(page.locator('h1')).toContainText('M4s');
    
    // Check price is displayed
    await expect(page.locator('[data-testid="price"]')).toBeVisible();
    
    // Check add to cart button
    await expect(page.locator('[data-testid="add-to-cart"]')).toBeVisible();
  });

  test('language selector works', async ({ page }) => {
    await page.goto('/');
    
    // Click language selector
    await page.click('[data-testid="language-selector"]');
    
    // Select English
    await page.click('text=English');
    
    // Check URL changed
    await expect(page).toHaveURL('/en');
    
    // Check content is in English
    await expect(page.locator('h1')).toContainText('Premium 510');
  });

  test('B2B page loads correctly', async ({ page }) => {
    await page.goto('/b2b');
    
    // Check page title
    await expect(page).toHaveTitle(/B2B/);
    
    // Check coming soon message
    await expect(page.locator('text=Tulossa pian')).toBeVisible();
    
    // Check contact form
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

  test('checkout flow works', async ({ page }) => {
    await page.goto('/p/m4s-05');
    
    // Add to cart
    await page.click('[data-testid="add-to-cart"]');
    
    // Go to checkout
    await page.goto('/checkout');
    
    // Check checkout form
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
  });

  test('mobile menu works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Click mobile menu button
    await page.click('[data-testid="mobile-menu-button"]');
    
    // Check menu is visible
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
    
    // Check menu items
    await expect(page.locator('text=Kauppa')).toBeVisible();
    await expect(page.locator('text=B2B Service')).toBeVisible();
  });

  test('search functionality works', async ({ page }) => {
    await page.goto('/shop');
    
    // Type in search
    await page.fill('[data-testid="search-input"]', '510');
    
    // Check results
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
  });

  test('trust signals are displayed', async ({ page }) => {
    await page.goto('/');
    
    // Check security badges
    await expect(page.locator('text=SSL-suojattu')).toBeVisible();
    await expect(page.locator('text=EU-toimitus')).toBeVisible();
    await expect(page.locator('text=30pv palautus')).toBeVisible();
  });

  test('AI recommendations are shown', async ({ page }) => {
    await page.goto('/');
    
    // Wait for AI recommendations to load
    await page.waitForSelector('[data-testid="ai-recommendations"]', { timeout: 5000 });
    
    // Check recommendations are visible
    await expect(page.locator('[data-testid="ai-recommendations"]')).toBeVisible();
  });
});
