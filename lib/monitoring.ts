// Error monitoring and performance tracking for HerbSpot.fi

interface ErrorReport {
  message: string;
  stack?: string;
  url: string;
  line?: number;
  column?: number;
  userAgent: string;
  timestamp: number;
  userId?: string;
  sessionId?: string;
  context?: Record<string, any>;
}

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  url: string;
  userAgent: string;
  context?: Record<string, any>;
}

class Monitoring {
  private sessionId: string;
  private userId?: string;
  private errorQueue: ErrorReport[] = [];
  private performanceQueue: PerformanceMetric[] = [];
  private isOnline = true;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Set up error handlers
    this.setupErrorHandlers();
    
    // Set up performance monitoring
    this.setupPerformanceMonitoring();
    
    // Set up online/offline detection
    this.setupConnectivityMonitoring();
    
    // Set up heartbeat
    this.setupHeartbeat();
  }

  private setupErrorHandlers() {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename || window.location.href,
        line: event.lineno,
        column: event.colno,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
        userId: this.userId,
        sessionId: this.sessionId,
        context: {
          type: 'javascript_error',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
        userId: this.userId,
        sessionId: this.sessionId,
        context: {
          type: 'unhandled_promise_rejection',
          reason: event.reason
        }
      });
    });

    // React Error Boundary support
    window.addEventListener('react-error', (event: any) => {
      this.captureError({
        message: event.detail.error?.message || 'React Error',
        stack: event.detail.error?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
        userId: this.userId,
        sessionId: this.sessionId,
        context: {
          type: 'react_error',
          componentStack: event.detail.componentStack,
          errorInfo: event.detail.errorInfo
        }
      });
    });
  }

  private setupPerformanceMonitoring() {
    // Track page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.capturePerformanceMetric('page_load_time', navigation.loadEventEnd - navigation.fetchStart);
        this.capturePerformanceMetric('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
        this.capturePerformanceMetric('first_paint', navigation.responseEnd - navigation.fetchStart);
      }
    });

    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            this.capturePerformanceMetric('LCP', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            this.capturePerformanceMetric('FID', fid);
          } else if (entry.entryType === 'layout-shift') {
            this.capturePerformanceMetric('CLS', (entry as any).value);
          }
        });
      });

      observer.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      });
    }

    // Track resource loading
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            this.capturePerformanceMetric('resource_load_time', resource.duration, {
              resource_type: resource.initiatorType,
              resource_url: resource.name,
              resource_size: resource.transferSize
            });
          }
        });
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }

  private setupConnectivityMonitoring() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushQueues();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  private setupHeartbeat() {
    // Send heartbeat every 30 seconds
    setInterval(() => {
      this.capturePerformanceMetric('heartbeat', Date.now(), {
        online: this.isOnline,
        memory_usage: (performance as any).memory?.usedJSHeapSize,
        connection_type: (navigator as any).connection?.effectiveType
      });
    }, 30000);
  }

  captureError(error: ErrorReport) {
    this.errorQueue.push(error);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Captured Error:', error);
    }

    // Send immediately for critical errors
    if (this.isOnline) {
      this.sendErrorReport(error);
    }
  }

  capturePerformanceMetric(name: string, value: number, context?: Record<string, any>) {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      context
    };

    this.performanceQueue.push(metric);

    // Send immediately for critical metrics
    if (this.isOnline && this.isCriticalMetric(name)) {
      this.sendPerformanceMetric(metric);
    }
  }

  private isCriticalMetric(name: string): boolean {
    const criticalMetrics = ['LCP', 'FID', 'CLS', 'page_load_time'];
    return criticalMetrics.includes(name);
  }

  private async sendErrorReport(error: ErrorReport) {
    try {
      await fetch('/api/monitoring/error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(error)
      });
    } catch (err) {
      console.error('Failed to send error report:', err);
    }
  }

  private async sendPerformanceMetric(metric: PerformanceMetric) {
    try {
      await fetch('/api/monitoring/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metric)
      });
    } catch (err) {
      console.error('Failed to send performance metric:', err);
    }
  }

  private async flushQueues() {
    // Send queued errors
    while (this.errorQueue.length > 0) {
      const error = this.errorQueue.shift();
      if (error) {
        await this.sendErrorReport(error);
      }
    }

    // Send queued performance metrics
    while (this.performanceQueue.length > 0) {
      const metric = this.performanceQueue.shift();
      if (metric) {
        await this.sendPerformanceMetric(metric);
      }
    }
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  captureUserAction(action: string, context?: Record<string, any>) {
    this.capturePerformanceMetric('user_action', Date.now(), {
      action,
      ...context
    });
  }

  capturePageView(page: string, context?: Record<string, any>) {
    this.capturePerformanceMetric('page_view', Date.now(), {
      page,
      ...context
    });
  }

  captureConversion(event: string, value: number, context?: Record<string, any>) {
    this.capturePerformanceMetric('conversion', value, {
      event,
      ...context
    });
  }
}

// Export singleton instance
export const monitoring = new Monitoring();

// Helper functions
export function captureError(error: Error, context?: Record<string, any>) {
  monitoring.captureError({
    message: error.message,
    stack: error.stack,
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: Date.now(),
    context
  });
}

export function captureUserAction(action: string, context?: Record<string, any>) {
  monitoring.captureUserAction(action, context);
}

export function capturePageView(page: string, context?: Record<string, any>) {
  monitoring.capturePageView(page, context);
}

export function captureConversion(event: string, value: number, context?: Record<string, any>) {
  monitoring.captureConversion(event, value, context);
}

// React Error Boundary integration
export function withErrorBoundary<T extends React.ComponentType<any>>(
  Component: T,
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
) {
  return class extends React.Component<React.ComponentProps<T>> {
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      // Dispatch custom event for global error handler
      window.dispatchEvent(new CustomEvent('react-error', {
        detail: { error, errorInfo }
      }));
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}

// Import React for Error Boundary
import React from 'react';
