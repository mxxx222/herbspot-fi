// Performance utilities for HerbSpot.fi

export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return end - start;
}

export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

export function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(srcs.map(preloadImage));
}

export function createImageOptimizer() {
  return {
    getOptimizedSrc: (src: string, width?: number, quality = 75) => {
      if (src.includes('unsplash.com')) {
        const params = new URLSearchParams();
        if (width) params.set('w', width.toString());
        params.set('q', quality.toString());
        params.set('fit', 'crop');
        return `${src}?${params.toString()}`;
      }
      return src;
    },
    
    getResponsiveSrcSet: (src: string, sizes: number[] = [640, 750, 828, 1080, 1200, 1920]) => {
      return sizes
        .map(size => `${src}?w=${size}&q=75&fit=crop ${size}w`)
        .join(', ');
    }
  };
}

export function setupServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

export function setupResourceHints() {
  if (typeof window === 'undefined') return;

  const hints = [
    { rel: 'preconnect', href: 'https://images.unsplash.com' },
    { rel: 'preconnect', href: 'https://cdn.shopify.com' },
    { rel: 'preconnect', href: 'https://checkout.stripe.com' },
    { rel: 'dns-prefetch', href: 'https://herbspot-fi.onrender.com' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    document.head.appendChild(link);
  });
}

export function setupLazyLoading() {
  if (typeof window === 'undefined') return;

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

export function optimizeImages() {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  const optimizer = createImageOptimizer();

  images.forEach(img => {
    if (img.src.includes('unsplash.com')) {
      const optimizedSrc = optimizer.getOptimizedSrc(img.src, 800, 75);
      img.src = optimizedSrc;
      
      if (img.dataset.responsive === 'true') {
        img.srcset = optimizer.getResponsiveSrcSet(img.src);
        img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
      }
    }
  });
}

export function setupPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      console.log(`${entry.name}: ${entry.startTime}ms`);
      
      // Send to analytics if needed
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metric', {
          metric_name: entry.name,
          metric_value: entry.startTime,
        });
      }
    });
  });

  observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function createPerformanceTimer() {
  const timers = new Map<string, number>();
  
  return {
    start: (name: string) => {
      timers.set(name, performance.now());
    },
    end: (name: string) => {
      const start = timers.get(name);
      if (start) {
        const duration = performance.now() - start;
        console.log(`${name}: ${duration.toFixed(2)}ms`);
        timers.delete(name);
        return duration;
      }
      return 0;
    }
  };
}

export function setupCriticalResourcePreloading() {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/images/hero-bg.jpg', as: 'image' },
    { href: '/images/logo.svg', as: 'image' },
    { href: '/fonts/IBMPlexSerif-Text.woff2', as: 'font', type: 'font/woff2' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    document.head.appendChild(link);
  });
}
