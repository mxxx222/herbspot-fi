'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackPerformance } from '@/lib/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    trackPageView(pathname, document.title);
  }, [pathname]);

  useEffect(() => {
    // Initialize performance tracking
    trackPerformance();
  }, []);

  return <>{children}</>;
}
