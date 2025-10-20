// Stripe Webhook Handler with HMAC Validation
// API route for processing Stripe webhooks securely

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createOrder, updateOrderStatus } from '@/lib/loyalty';
import { verifyShopifyWebhook } from '@/lib/shopify-webhook';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: any) {
  console.log('Processing checkout session completed:', session.id);

  const userId = session.metadata?.user_id;
  const orderTotal = parseFloat(session.metadata?.order_total || '0');
  const loyaltyPoints = parseInt(session.metadata?.loyalty_points || '0');

  if (!userId) {
    console.log('No user_id in session metadata');
    return;
  }

  try {
    // Create order record (this will trigger loyalty points automatically)
    await createOrder({
      orderId: session.id,
      userId: userId,
      totalAmount: orderTotal,
      currency: session.currency?.toUpperCase() || 'EUR',
      stripeSessionId: session.id,
      metadata: {
        stripe_session_id: session.id,
        customer_email: session.customer_details?.email,
        loyalty_points: loyaltyPoints,
        items_count: session.metadata?.items_count
      }
    });

    console.log('Order created successfully with loyalty points');
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: any) {
  console.log('Processing payment intent succeeded:', paymentIntent.id);

  const userId = paymentIntent.metadata?.user_id;
  const orderTotal = parseFloat(paymentIntent.metadata?.order_total || '0');

  if (!userId) {
    console.log('No user_id in payment intent metadata');
    return;
  }

  try {
    // Update order status to paid
    await updateOrderStatus(paymentIntent.id, 'paid');
    console.log('Order status updated to paid');
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
}

async function handlePaymentIntentFailed(paymentIntent: any) {
  console.log('Processing payment intent failed:', paymentIntent.id);

  const userId = paymentIntent.metadata?.user_id;

  if (!userId) {
    console.log('No user_id in payment intent metadata');
    return;
  }

  try {
    // Update order status to failed
    await updateOrderStatus(paymentIntent.id, 'cancelled');
    console.log('Order status updated to cancelled');
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
}