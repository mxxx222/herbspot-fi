// Shopify Webhook Handler with HMAC Validation
// API route for processing Shopify webhooks securely

import { NextRequest, NextResponse } from 'next/server';
import { verifyShopifyWebhook } from '@/lib/shopify-webhook';
import { createOrder, updateOrderStatus } from '@/lib/loyalty';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const hmacHeader = request.headers.get('x-shopify-hmac-sha256');
    const webhookSecret = process.env.SHOPIFY_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error('SHOPIFY_WEBHOOK_SECRET not configured');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    // Verify HMAC signature
    const isValid = await verifyShopifyWebhook(body, hmacHeader || '', webhookSecret);
    if (!isValid) {
      console.error('Invalid HMAC signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const webhookData = JSON.parse(body);
    const topic = request.headers.get('x-shopify-topic');

    // Handle different webhook topics
    switch (topic) {
      case 'orders/paid':
        await handleOrderPaid(webhookData);
        break;
      
      case 'orders/fulfilled':
        await handleOrderFulfilled(webhookData);
        break;
      
      case 'orders/cancelled':
        await handleOrderCancelled(webhookData);
        break;
      
      default:
        console.log(`Unhandled webhook topic: ${topic}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Shopify webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleOrderPaid(orderData: any) {
  console.log('Processing paid order:', orderData.id);

  const orderId = orderData.id.toString();
  const customerEmail = orderData.customer?.email;
  const totalAmount = parseFloat(orderData.total_price);
  const currency = orderData.currency;

  if (!customerEmail) {
    console.log('No customer email found');
    return;
  }

  try {
    // For now, we'll use a placeholder user ID
    // In production, you'd look up the user by email
    const userId = `shopify_${orderData.customer?.id || 'guest'}`;

    // Create order record (this will trigger loyalty points automatically)
    await createOrder({
      orderId: orderId,
      userId: userId,
      totalAmount: totalAmount,
      currency: currency,
      metadata: {
        shopify_order_id: orderId,
        customer_email: customerEmail,
        line_items: orderData.line_items,
        financial_status: orderData.financial_status,
        fulfillment_status: orderData.fulfillment_status
      }
    });

    console.log('Order created successfully with loyalty points');
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

async function handleOrderFulfilled(orderData: any) {
  console.log('Processing fulfilled order:', orderData.id);

  const orderId = orderData.id.toString();

  try {
    // Update order status to shipped
    await updateOrderStatus(orderId, 'shipped');
    console.log('Order status updated to shipped');
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
}

async function handleOrderCancelled(orderData: any) {
  console.log('Processing cancelled order:', orderData.id);

  const orderId = orderData.id.toString();

  try {
    // Update order status to cancelled
    await updateOrderStatus(orderId, 'cancelled');
    console.log('Order status updated to cancelled');
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
}
