'use client';

import { useEffect } from 'react';
import { trackCoreWebVitals } from '@/lib/analytics';

export function WebVitalsMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        trackCoreWebVitals('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const fid = (entry as any).processingStart - entry.startTime;
          trackCoreWebVitals('FID', fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            trackCoreWebVitals('CLS', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          trackCoreWebVitals('FCP', entry.startTime);
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            trackCoreWebVitals('TTFB', ttfb);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Cleanup observers
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
  }, []);

  return null;
}
