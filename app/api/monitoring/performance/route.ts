import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const performanceData = await request.json();
    
    // Log performance data to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metric:', performanceData);
    }

    // In production, you would send this to your analytics service
    // e.g., Google Analytics, Mixpanel, Amplitude, etc.
    
    // For now, just log to console
    console.log('Performance metric captured:', {
      name: performanceData.name,
      value: performanceData.value,
      url: performanceData.url,
      timestamp: new Date().toISOString(),
      userAgent: performanceData.userAgent
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to process performance metric:', error);
    return NextResponse.json(
      { error: 'Failed to process performance metric' },
      { status: 500 }
    );
  }
}
