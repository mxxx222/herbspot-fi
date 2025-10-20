import { NextRequest, NextResponse } from 'next/server';

// Edge runtime for better performance
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url') || 'https://herbspot.fi';

    // Core Web Vitals thresholds
    const thresholds = {
      LCP: 2500, // Largest Contentful Paint (ms)
      FID: 100,  // First Input Delay (ms)
      CLS: 0.1,  // Cumulative Layout Shift
      FCP: 1800, // First Contentful Paint (ms)
      TTFB: 800  // Time to First Byte (ms)
    };

    // Simulate Lighthouse audit (in production, use actual Lighthouse API)
    const auditResults = {
      url,
      timestamp: new Date().toISOString(),
      performance: {
        score: 95,
        metrics: {
          LCP: {
            value: 1200,
            score: 100,
            threshold: thresholds.LCP,
            status: 'good'
          },
          FID: {
            value: 50,
            score: 100,
            threshold: thresholds.FID,
            status: 'good'
          },
          CLS: {
            value: 0.05,
            score: 100,
            threshold: thresholds.CLS,
            status: 'good'
          },
          FCP: {
            value: 800,
            score: 100,
            threshold: thresholds.FCP,
            status: 'good'
          },
          TTFB: {
            value: 200,
            score: 100,
            threshold: thresholds.TTFB,
            status: 'good'
          }
        }
      },
      accessibility: {
        score: 98,
        issues: []
      },
      bestPractices: {
        score: 92,
        issues: []
      },
      SEO: {
        score: 100,
        issues: []
      },
      recommendations: [
        'Consider implementing service worker for offline functionality',
        'Optimize images with next/image for better LCP',
        'Enable compression for static assets'
      ]
    };

    return NextResponse.json(auditResults);

  } catch (error) {
    console.error('Web Vitals audit error:', error);
    return NextResponse.json(
      { error: 'Failed to perform web vitals audit' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url, metrics } = await request.json();

    if (!url || !metrics) {
      return NextResponse.json(
        { error: 'url and metrics are required' },
        { status: 400 }
      );
    }

    // Store Core Web Vitals data
    const webVitalsData = {
      url,
      timestamp: new Date().toISOString(),
      metrics: {
        LCP: metrics.LCP || 0,
        FID: metrics.FID || 0,
        CLS: metrics.CLS || 0,
        FCP: metrics.FCP || 0,
        TTFB: metrics.TTFB || 0
      },
      userAgent: request.headers.get('user-agent'),
      viewport: request.headers.get('viewport')
    };

    // In production, save to database for analysis
    console.log('Web Vitals data received:', webVitalsData);

    return NextResponse.json({
      success: true,
      message: 'Web Vitals data recorded',
      data: webVitalsData
    });

  } catch (error) {
    console.error('Web Vitals POST error:', error);
    return NextResponse.json(
      { error: 'Failed to record web vitals data' },
      { status: 500 }
    );
  }
}
