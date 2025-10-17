/**
 * A/B Testing utilities for CRO optimization
 * ROI: 200-400% through data-driven improvements
 */

export interface ABTest {
  id: string;
  name: string;
  variants: Array<{
    id: string;
    name: string;
    weight: number;
  }>;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
}

export const AB_TESTS: Record<string, ABTest> = {
  'trust-signals-position': {
    id: 'trust-signals-position',
    name: 'Trust Signals Position',
    variants: [
      { id: 'top', name: 'Top of page', weight: 50 },
      { id: 'bottom', name: 'Bottom of page', weight: 50 }
    ],
    isActive: true,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31')
  },
  'checkout-button-color': {
    id: 'checkout-button-color',
    name: 'Checkout Button Color',
    variants: [
      { id: 'green', name: 'Green (current)', weight: 50 },
      { id: 'orange', name: 'Orange', weight: 50 }
    ],
    isActive: true,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31')
  },
  'product-card-layout': {
    id: 'product-card-layout',
    name: 'Product Card Layout',
    variants: [
      { id: 'grid', name: 'Grid layout', weight: 50 },
      { id: 'list', name: 'List layout', weight: 50 }
    ],
    isActive: true,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31')
  }
};

export function getABTestVariant(testId: string, userId?: string): string {
  const test = AB_TESTS[testId];
  
  if (!test || !test.isActive) {
    return 'control';
  }
  
  // Use user ID for consistent assignment, fallback to random
  const seed = userId ? hashString(userId + testId) : Math.random();
  const random = seed % 100;
  
  let cumulativeWeight = 0;
  for (const variant of test.variants) {
    cumulativeWeight += variant.weight;
    if (random < cumulativeWeight) {
      return variant.id;
    }
  }
  
  return test.variants[0].id;
}

export function trackABTestConversion(testId: string, variant: string, conversionType: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_conversion', {
      test_id: testId,
      variant: variant,
      conversion_type: conversionType,
      value: value,
    });
  }
  
  // Also track with Plausible
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('AB Test Conversion', {
      props: {
        test_id: testId,
        variant: variant,
        conversion_type: conversionType,
        value: value
      }
    });
  }
}

export function trackABTestView(testId: string, variant: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_view', {
      test_id: testId,
      variant: variant,
    });
  }
  
  // Also track with Plausible
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('AB Test View', {
      props: {
        test_id: testId,
        variant: variant
      }
    });
  }
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export function getABTestResults(testId: string): Promise<{
  test: ABTest;
  results: Array<{
    variant: string;
    views: number;
    conversions: number;
    conversionRate: number;
    revenue: number;
  }>;
}> {
  // In a real implementation, this would fetch from your analytics API
  return Promise.resolve({
    test: AB_TESTS[testId],
    results: [
      { variant: 'control', views: 1000, conversions: 50, conversionRate: 5.0, revenue: 2500 },
      { variant: 'variant_a', views: 1000, conversions: 60, conversionRate: 6.0, revenue: 3000 }
    ]
  });
}

export function isABTestActive(testId: string): boolean {
  const test = AB_TESTS[testId];
  if (!test) return false;
  
  const now = new Date();
  return test.isActive && now >= test.startDate && now <= test.endDate;
}
