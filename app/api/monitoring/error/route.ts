import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const errorData = await request.json();
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorData);
    }

    // In production, you would send this to your error monitoring service
    // e.g., Sentry, LogRocket, Bugsnag, etc.
    
    // For now, just log to console
    console.log('Error captured:', {
      message: errorData.message,
      url: errorData.url,
      timestamp: new Date().toISOString(),
      userAgent: errorData.userAgent,
      userId: errorData.userId,
      sessionId: errorData.sessionId
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to process error report:', error);
    return NextResponse.json(
      { error: 'Failed to process error report' },
      { status: 500 }
    );
  }
}
