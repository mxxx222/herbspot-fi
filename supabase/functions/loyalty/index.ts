// Supabase Loyalty Points API Functions
// Edge Functions for loyalty system

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const { method } = req
    const url = new URL(req.url)
    const path = url.pathname

    // Route handling
    switch (path) {
      case '/loyalty/points':
        return await handleLoyaltyPoints(req, supabaseClient)
      case '/loyalty/redeem':
        return await handleRedeemPoints(req, supabaseClient)
      case '/loyalty/history':
        return await handleLoyaltyHistory(req, supabaseClient)
      default:
        return new Response('Not Found', { status: 404 })
    }

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

async function handleLoyaltyPoints(req: Request, supabaseClient: any) {
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { data: { user } } = await supabaseClient.auth.getUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  // Get user's total loyalty points
  const { data, error } = await supabaseClient
    .rpc('get_user_loyalty_points', { p_user_id: user.id })

  if (error) {
    throw error
  }

  return new Response(
    JSON.stringify({ points: data }),
    { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    }
  )
}

async function handleRedeemPoints(req: Request, supabaseClient: any) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { data: { user } } = await supabaseClient.auth.getUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { points_to_redeem, description } = await req.json()

  if (!points_to_redeem || points_to_redeem <= 0) {
    return new Response('Invalid points amount', { status: 400 })
  }

  // Redeem loyalty points
  const { data, error } = await supabaseClient
    .rpc('redeem_loyalty_points', {
      p_user_id: user.id,
      p_points_to_redeem: points_to_redeem,
      p_description: description || 'Points redeemed'
    })

  if (error) {
    throw error
  }

  if (!data) {
    return new Response('Insufficient points', { status: 400 })
  }

  return new Response(
    JSON.stringify({ success: true, redeemed: points_to_redeem }),
    { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    }
  )
}

async function handleLoyaltyHistory(req: Request, supabaseClient: any) {
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { data: { user } } = await supabaseClient.auth.getUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const url = new URL(req.url)
  const limit = parseInt(url.searchParams.get('limit') || '50')
  const offset = parseInt(url.searchParams.get('offset') || '0')

  // Get user's loyalty points history
  const { data, error } = await supabaseClient
    .from('loyalty_points')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) {
    throw error
  }

  return new Response(
    JSON.stringify({ history: data }),
    { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    }
  )
}
