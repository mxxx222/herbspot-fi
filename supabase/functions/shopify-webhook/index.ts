-- Shopify Webhook HMAC Validation
-- Edge Function for secure webhook handling

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-shopify-hmac-sha256',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Verify HMAC signature
    const isValid = await verifyShopifyWebhook(req)
    if (!isValid) {
      return new Response('Unauthorized', { status: 401 })
    }

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body = await req.text()
    const webhookData = JSON.parse(body)

    // Process different webhook types
    switch (req.headers.get('x-shopify-topic')) {
      case 'orders/paid':
        await handleOrderPaid(webhookData, supabaseClient)
        break
      case 'orders/fulfilled':
        await handleOrderFulfilled(webhookData, supabaseClient)
        break
      case 'orders/cancelled':
        await handleOrderCancelled(webhookData, supabaseClient)
        break
      default:
        console.log('Unhandled webhook topic:', req.headers.get('x-shopify-topic'))
    }

    return new Response('OK', { status: 200 })

  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

async function verifyShopifyWebhook(req: Request): Promise<boolean> {
  const hmacHeader = req.headers.get('x-shopify-hmac-sha256')
  if (!hmacHeader) {
    return false
  }

  const webhookSecret = Deno.env.get('SHOPIFY_WEBHOOK_SECRET')
  if (!webhookSecret) {
    console.error('SHOPIFY_WEBHOOK_SECRET not set')
    return false
  }

  const body = await req.text()
  
  // Create HMAC using Web Crypto API
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(webhookSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(body))
  const computedHmac = btoa(String.fromCharCode(...new Uint8Array(signature)))

  // Compare HMACs
  return hmacHeader === computedHmac
}

async function handleOrderPaid(orderData: any, supabaseClient: any) {
  console.log('Processing paid order:', orderData.id)

  // Extract order information
  const orderId = orderData.id.toString()
  const customerEmail = orderData.customer?.email
  const totalAmount = parseFloat(orderData.total_price)
  const currency = orderData.currency

  // Find user by email
  const { data: user } = await supabaseClient.auth.admin.getUserByEmail(customerEmail)
  
  if (!user) {
    console.log('User not found for email:', customerEmail)
    return
  }

  // Create order record
  const { error: orderError } = await supabaseClient
    .from('orders')
    .insert({
      order_id: orderId,
      user_id: user.id,
      total_amount: totalAmount,
      currency: currency,
      status: 'paid',
      stripe_session_id: orderData.checkout_token,
      metadata: {
        shopify_order_id: orderId,
        customer_email: customerEmail,
        line_items: orderData.line_items
      }
    })

  if (orderError) {
    console.error('Error creating order:', orderError)
    throw orderError
  }

  console.log('Order created successfully, loyalty points will be added automatically')
}

async function handleOrderFulfilled(orderData: any, supabaseClient: any) {
  console.log('Processing fulfilled order:', orderData.id)

  const orderId = orderData.id.toString()

  // Update order status
  const { error } = await supabaseClient
    .from('orders')
    .update({ 
      status: 'shipped',
      updated_at: new Date().toISOString()
    })
    .eq('order_id', orderId)

  if (error) {
    console.error('Error updating order status:', error)
    throw error
  }

  console.log('Order status updated to shipped')
}

async function handleOrderCancelled(orderData: any, supabaseClient: any) {
  console.log('Processing cancelled order:', orderData.id)

  const orderId = orderData.id.toString()

  // Update order status
  const { error } = await supabaseClient
    .from('orders')
    .update({ 
      status: 'cancelled',
      updated_at: new Date().toISOString()
    })
    .eq('order_id', orderId)

  if (error) {
    console.error('Error updating order status:', error)
    throw error
  }

  // Remove loyalty points for cancelled order
  const { error: pointsError } = await supabaseClient
    .from('loyalty_points')
    .update({ is_active: false })
    .eq('order_id', orderId)

  if (pointsError) {
    console.error('Error deactivating loyalty points:', pointsError)
    throw pointsError
  }

  console.log('Order cancelled and loyalty points deactivated')
}
