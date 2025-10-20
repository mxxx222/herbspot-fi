import { NextRequest, NextResponse } from 'next/server';
import { trackB2BLead } from '@/lib/analytics';

// Edge runtime for better performance
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { ref_id, email, company, source, metadata } = await request.json();

    if (!ref_id || !email) {
      return NextResponse.json(
        { error: 'ref_id and email are required' },
        { status: 400 }
      );
    }

    // Validate ref_id format (should be partner identifier)
    const refIdPattern = /^[A-Z0-9_-]{3,20}$/;
    if (!refIdPattern.test(ref_id)) {
      return NextResponse.json(
        { error: 'Invalid ref_id format' },
        { status: 400 }
      );
    }

    // Track affiliate/partner lead
    trackB2BLead(email, company);

    // Store affiliate data (in production, this would go to database)
    const affiliateData = {
      ref_id,
      email,
      company,
      source: source || 'affiliate_api',
      metadata: metadata || {},
      timestamp: new Date().toISOString(),
      lead_value: 500, // Estimated B2B lead value
      status: 'pending'
    };

    // In production, save to Supabase or database
    console.log('Affiliate lead generated:', affiliateData);

    return NextResponse.json({
      success: true,
      message: 'Affiliate lead tracked successfully',
      ref_id,
      lead_value: 500
    });

  } catch (error) {
    console.error('Affiliate API error:', error);
    return NextResponse.json(
      { error: 'Failed to process affiliate lead' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ref_id = searchParams.get('ref_id');

    if (!ref_id) {
      return NextResponse.json(
        { error: 'ref_id parameter is required' },
        { status: 400 }
      );
    }

    // In production, fetch from database
    const affiliateData = {
      ref_id,
      status: 'active',
      commission_rate: 0.05, // 5% commission
      total_leads: 0,
      total_sales: 0,
      last_activity: new Date().toISOString()
    };

    return NextResponse.json(affiliateData);

  } catch (error) {
    console.error('Affiliate GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch affiliate data' },
      { status: 500 }
    );
  }
}
