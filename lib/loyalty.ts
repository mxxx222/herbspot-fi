// Supabase Loyalty Points Client
// Client-side functions for loyalty system

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface LoyaltyPoint {
  id: string
  user_id: string
  order_id: string
  points: number
  points_type: 'purchase' | 'bonus' | 'referral' | 'review' | 'redemption'
  description: string | null
  created_at: string
  expires_at: string
  is_active: boolean
}

export interface Order {
  id: string
  order_id: string
  user_id: string
  total_amount: number
  currency: string
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  stripe_session_id: string | null
  stripe_payment_intent_id: string | null
  metadata: Record<string, any>
  created_at: string
  updated_at: string
}

/**
 * Get user's total loyalty points
 */
export async function getUserLoyaltyPoints(userId: string): Promise<number> {
  const { data, error } = await supabase
    .rpc('get_user_loyalty_points', { p_user_id: userId })

  if (error) {
    console.error('Error getting loyalty points:', error)
    throw error
  }

  return data || 0
}

/**
 * Get user's loyalty points history
 */
export async function getLoyaltyHistory(
  userId: string,
  limit = 50,
  offset = 0
): Promise<LoyaltyPoint[]> {
  const { data, error } = await supabase
    .from('loyalty_points')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) {
    console.error('Error getting loyalty history:', error)
    throw error
  }

  return data || []
}

/**
 * Redeem loyalty points
 */
export async function redeemLoyaltyPoints(
  userId: string,
  pointsToRedeem: number,
  description?: string
): Promise<boolean> {
  const { data, error } = await supabase
    .rpc('redeem_loyalty_points', {
      p_user_id: userId,
      p_points_to_redeem: pointsToRedeem,
      p_description: description || 'Points redeemed'
    })

  if (error) {
    console.error('Error redeeming loyalty points:', error)
    throw error
  }

  return data || false
}

/**
 * Add loyalty points (admin function)
 */
export async function addLoyaltyPoints(
  userId: string,
  orderId: string,
  points: number,
  pointsType: 'purchase' | 'bonus' | 'referral' | 'review' = 'purchase',
  description?: string
): Promise<string> {
  const { data, error } = await supabase
    .rpc('add_loyalty_points', {
      p_user_id: userId,
      p_order_id: orderId,
      p_points: points,
      p_points_type: pointsType,
      p_description: description
    })

  if (error) {
    console.error('Error adding loyalty points:', error)
    throw error
  }

  return data
}

/**
 * Create order record
 */
export async function createOrder(orderData: {
  orderId: string
  userId: string
  totalAmount: number
  currency?: string
  stripeSessionId?: string
  stripePaymentIntentId?: string
  metadata?: Record<string, any>
}): Promise<Order> {
  const { data, error } = await supabase
    .from('orders')
    .insert({
      order_id: orderData.orderId,
      user_id: orderData.userId,
      total_amount: orderData.totalAmount,
      currency: orderData.currency || 'EUR',
      stripe_session_id: orderData.stripeSessionId,
      stripe_payment_intent_id: orderData.stripePaymentIntentId,
      metadata: orderData.metadata || {}
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating order:', error)
    throw error
  }

  return data
}

/**
 * Get user's orders
 */
export async function getUserOrders(
  userId: string,
  limit = 50,
  offset = 0
): Promise<Order[]> {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) {
    console.error('Error getting user orders:', error)
    throw error
  }

  return data || []
}

/**
 * Update order status
 */
export async function updateOrderStatus(
  orderId: string,
  status: Order['status']
): Promise<void> {
  const { error } = await supabase
    .from('orders')
    .update({ 
      status,
      updated_at: new Date().toISOString()
    })
    .eq('order_id', orderId)

  if (error) {
    console.error('Error updating order status:', error)
    throw error
  }
}

/**
 * Calculate loyalty points for order amount
 */
export function calculateLoyaltyPoints(orderAmount: number): number {
  return Math.floor(orderAmount * 2) // 2 points per euro
}

/**
 * Format loyalty points for display
 */
export function formatLoyaltyPoints(points: number): string {
  return `${points.toLocaleString('fi-FI')} pistettä`
}