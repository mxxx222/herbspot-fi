import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const STRIPE_CONFIG = {
  currency: 'eur',
  successUrl: `https://herbspot.fi/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `https://herbspot.fi/checkout/cancel`,
  billingAddressCollection: 'required',
  shippingAddressCollection: {
    allowed_countries: ['FI', 'SE', 'NO', 'DK', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'PL', 'CZ', 'SK', 'HU', 'RO', 'BG', 'HR', 'SI', 'EE', 'LV', 'LT', 'IE', 'PT', 'LU', 'MT', 'CY', 'GR'],
  },
};

export async function createCheckoutSession(items: Array<{
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}>, userId?: string, loyaltyPoints?: number) {
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name,
        images: item.image ? [item.image] : [],
      },
      unit_amount: Math.round(item.price * 100), // Convert to cents
    },
    quantity: item.quantity,
  }));

  // Calculate total amount for loyalty points
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const pointsToAdd = loyaltyPoints || Math.floor(totalAmount * 2); // 2 points per euro

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: STRIPE_CONFIG.successUrl,
    cancel_url: STRIPE_CONFIG.cancelUrl,
    billing_address_collection: STRIPE_CONFIG.billingAddressCollection,
    shipping_address_collection: STRIPE_CONFIG.shippingAddressCollection,
    automatic_tax: {
      enabled: true,
    },
    metadata: {
      source: 'herbspot-web',
      reseller_id: 'herbspot',
      user_id: userId || '',
      loyalty_points: pointsToAdd.toString(),
      order_total: totalAmount.toString(),
      items_count: items.length.toString(),
      shipping_region: 'EU',
      distribution_type: 'retail',
    },
    payment_intent_data: {
      metadata: {
        reseller_id: 'herbspot',
        user_id: userId || '',
        loyalty_points: pointsToAdd.toString(),
        order_total: totalAmount.toString(),
        shipping_region: 'EU',
        distribution_type: 'retail',
      },
    },
  } as any);

  return session;
}

export async function createPaymentIntent(amount: number, currency = 'eur', userId?: string) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      user_id: userId || '',
      loyalty_points: Math.floor(amount * 2).toString(),
    },
  });

  return paymentIntent;
}

export function formatAmountForDisplay(amount: number, currency = 'eur'): string {
  return new Intl.NumberFormat('fi-FI', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount);
}

export function formatAmountForStripe(amount: number): number {
  return Math.round(amount * 100);
}