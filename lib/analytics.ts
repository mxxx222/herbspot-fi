// Analytics utilities for HerbSpot.fi

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface ConversionEvent {
  event_name: string;
  value: number;
  currency: string;
  checkout_country?: string;
  product_brand?: string;
  partner_lead?: boolean;
  items: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity: number;
    price: number;
    brand?: string;
  }>;
}

class Analytics {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics
    if (typeof (window as any).gtag !== 'undefined') {
      this.isInitialized = true;
      this.processQueue();
    } else {
      // Wait for (window as any).gtag to load
      const checkGtag = setInterval(() => {
        if (typeof (window as any).gtag !== 'undefined') {
          this.isInitialized = true;
          this.processQueue();
          clearInterval(checkGtag);
        }
      }, 100);
    }
  }

  private processQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }

  private trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', event.event, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // Also send to Plausible if available
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible(event.event, {
        props: {
          category: event.category,
          action: event.action,
          label: event.label,
          value: event.value,
          ...event.custom_parameters
        }
      });
    }
  }

  // Page view tracking
  trackPageView(pagePath: string, pageTitle: string) {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle
      });
    }
  }

  // E-commerce events
  trackPurchase(conversionEvent: ConversionEvent) {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'purchase', {
        transaction_id: Date.now().toString(),
        value: conversionEvent.value,
        currency: conversionEvent.currency,
        items: conversionEvent.items,
        checkout_country: conversionEvent.checkout_country,
        product_brand: conversionEvent.product_brand,
        partner_lead: conversionEvent.partner_lead
      });
    }

    // Mixpanel tracking for EU sales analysis
    if (typeof (window as any).mixpanel !== 'undefined') {
      (window as any).mixpanel.track('Purchase', {
        value: conversionEvent.value,
        currency: conversionEvent.currency,
        checkout_country: conversionEvent.checkout_country,
        product_brand: conversionEvent.product_brand,
        partner_lead: conversionEvent.partner_lead,
        items: conversionEvent.items,
        eu_sale: conversionEvent.checkout_country ? ['FI', 'SE', 'NO', 'DK', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'PL', 'CZ', 'SK', 'HU', 'RO', 'BG', 'HR', 'SI', 'EE', 'LV', 'LT', 'IE', 'PT', 'LU', 'MT', 'CY', 'GR'].includes(conversionEvent.checkout_country) : false
      });
    }

    this.trackEvent({
      event: 'purchase',
      category: 'ecommerce',
      action: 'purchase',
      label: conversionEvent.event_name,
      value: conversionEvent.value,
      custom_parameters: {
        currency: conversionEvent.currency,
        checkout_country: conversionEvent.checkout_country,
        product_brand: conversionEvent.product_brand,
        partner_lead: conversionEvent.partner_lead,
        items: conversionEvent.items
      }
    });
  }

  trackAddToCart(productId: string, productName: string, price: number, category: string) {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'add_to_cart', {
        currency: 'EUR',
        value: price,
        items: [{
          item_id: productId,
          item_name: productName,
          category: category,
          quantity: 1,
          price: price
        }]
      });
    }

    this.trackEvent({
      event: 'add_to_cart',
      category: 'ecommerce',
      action: 'add_to_cart',
      label: productName,
      value: price,
      custom_parameters: {
        product_id: productId,
        product_name: productName,
        category: category,
        price: price
      }
    });
  }

  trackRemoveFromCart(productId: string, productName: string, price: number) {
    this.trackEvent({
      event: 'remove_from_cart',
      category: 'ecommerce',
      action: 'remove_from_cart',
      label: productName,
      value: price,
      custom_parameters: {
        product_id: productId,
        product_name: productName
      }
    });
  }

  trackViewItem(productId: string, productName: string, price: number, category: string) {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'view_item', {
        currency: 'EUR',
        value: price,
        items: [{
          item_id: productId,
          item_name: productName,
          category: category,
          quantity: 1,
          price: price
        }]
      });
    }

    this.trackEvent({
      event: 'view_item',
      category: 'ecommerce',
      action: 'view_item',
      label: productName,
      value: price,
      custom_parameters: {
        product_id: productId,
        product_name: productName,
        category: category
      }
    });
  }

  trackBeginCheckout(value: number, items: any[]) {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'begin_checkout', {
        currency: 'EUR',
        value: value,
        items: items
      });
    }

    this.trackEvent({
      event: 'begin_checkout',
      category: 'ecommerce',
      action: 'begin_checkout',
      value: value,
      custom_parameters: {
        items: items
      }
    });
  }

  // User engagement events
  trackSearch(searchTerm: string, resultsCount: number) {
    this.trackEvent({
      event: 'search',
      category: 'engagement',
      action: 'search',
      label: searchTerm,
      value: resultsCount
    });
  }

  trackFilter(filterType: string, filterValue: string) {
    this.trackEvent({
      event: 'filter',
      category: 'engagement',
      action: 'filter',
      label: `${filterType}: ${filterValue}`
    });
  }

  trackSort(sortBy: string) {
    this.trackEvent({
      event: 'sort',
      category: 'engagement',
      action: 'sort',
      label: sortBy
    });
  }

  trackLanguageChange(language: string) {
    this.trackEvent({
      event: 'language_change',
      category: 'engagement',
      action: 'language_change',
      label: language
    });
  }

  trackB2BInterest(email?: string, company?: string) {
    // Mixpanel tracking for B2B lead value
    if (typeof (window as any).mixpanel !== 'undefined') {
      (window as any).mixpanel.track('B2B Lead Generated', {
        email: email,
        company: company,
        lead_source: 'partnership_page',
        lead_value: 500, // Estimated B2B lead value
        timestamp: new Date().toISOString()
      });
    }

    this.trackEvent({
      event: 'b2b_interest',
      category: 'lead_generation',
      action: 'b2b_interest',
      custom_parameters: {
        email: email,
        company: company,
        lead_value: 500
      }
    });
  }

  trackContactForm() {
    this.trackEvent({
      event: 'contact_form',
      category: 'lead_generation',
      action: 'contact_form'
    });
  }

  // Performance tracking
  trackPageLoadTime(loadTime: number) {
    this.trackEvent({
      event: 'page_load_time',
      category: 'performance',
      action: 'page_load_time',
      value: loadTime
    });
  }

  trackCoreWebVitals(metric: string, value: number) {
    this.trackEvent({
      event: 'core_web_vitals',
      category: 'performance',
      action: metric,
      value: value
    });
  }

  // Error tracking
  trackError(error: string, errorType: string, errorContext?: string) {
    this.trackEvent({
      event: 'error',
      category: 'error',
      action: errorType,
      label: error,
      custom_parameters: {
        error_context: errorContext
      }
    });
  }

  // Custom events
  trackCustomEvent(eventName: string, parameters: Record<string, any>) {
    this.trackEvent({
      event: eventName,
      category: 'custom',
      action: eventName,
      custom_parameters: parameters
    });
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Helper functions
export function trackPageView(pagePath: string, pageTitle: string) {
  analytics.trackPageView(pagePath, pageTitle);
}

export function trackAddToCart(productId: string, productName: string, price: number, category: string, brand?: string) {
  analytics.trackAddToCart(productId, productName, price, category);
  
  // Track brand-specific cart additions
  if (brand) {
    analytics.trackCustomEvent('add_to_cart_brand', {
      product_id: productId,
      product_name: productName,
      brand: brand,
      price: price
    });
  }
}

export function trackPurchase(conversionEvent: ConversionEvent) {
  analytics.trackPurchase(conversionEvent);
}

export function trackViewItem(productId: string, productName: string, price: number, category: string, brand?: string) {
  analytics.trackViewItem(productId, productName, price, category);
  
  // Track brand-specific product views
  if (brand) {
    analytics.trackCustomEvent('view_item_brand', {
      product_id: productId,
      product_name: productName,
      brand: brand,
      price: price
    });
  }
}

export function trackB2BLead(email?: string, company?: string) {
  analytics.trackB2BInterest(email, company);
}

export function trackEUSale(country: string, value: number, brand?: string) {
  analytics.trackCustomEvent('eu_sale', {
    country: country,
    value: value,
    brand: brand,
    region: 'EU'
  });
}

export function trackCoreWebVitals(metric: string, value: number) {
  analytics.trackCoreWebVitals(metric, value);
}

// Performance monitoring
export function trackPerformance() {
  if (typeof window === 'undefined') return;

  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    analytics.trackPageLoadTime(loadTime);
  });

  // Track Core Web Vitals
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          analytics.trackCoreWebVitals('LCP', entry.startTime);
        } else if (entry.entryType === 'first-input') {
          analytics.trackCoreWebVitals('FID', (entry as any).processingStart - entry.startTime);
        } else if (entry.entryType === 'layout-shift') {
          analytics.trackCoreWebVitals('CLS', (entry as any).value);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
}

// Initialize performance tracking
if (typeof window !== 'undefined') {
  trackPerformance();
}
