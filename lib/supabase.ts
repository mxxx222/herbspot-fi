import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Loyalty Points System
export async function addLoyaltyPoints(userId: string, points: number, reason: string) {
  const { data, error } = await supabase
    .from('user_loyalty')
    .insert({
      user_id: userId,
      points: points,
      reason: reason,
      created_at: new Date().toISOString()
    });

  if (error) {
    console.error('Error adding loyalty points:', error);
    return { success: false, error };
  }

  return { success: true, data };
}

export async function getUserLoyaltyPoints(userId: string) {
  const { data, error } = await supabase
    .from('user_loyalty')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching loyalty points:', error);
    return { success: false, error };
  }

  const totalPoints = data?.reduce((sum, record) => sum + record.points, 0) || 0;
  
  return { success: true, data, totalPoints };
}

// B2B Lead Management
export async function createB2BLead(email: string, company?: string, refId?: string) {
  const { data, error } = await supabase
    .from('b2b_leads')
    .insert({
      email,
      company,
      ref_id: refId,
      status: 'pending',
      created_at: new Date().toISOString()
    });

  if (error) {
    console.error('Error creating B2B lead:', error);
    return { success: false, error };
  }

  return { success: true, data };
}

// Analytics Data Storage
export async function storeAnalyticsEvent(event: string, data: any) {
  const { error } = await supabase
    .from('analytics_events')
    .insert({
      event_name: event,
      event_data: data,
      created_at: new Date().toISOString()
    });

  if (error) {
    console.error('Error storing analytics event:', error);
    return { success: false, error };
  }

  return { success: true };
}
