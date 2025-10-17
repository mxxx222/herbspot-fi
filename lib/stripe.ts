import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
  typescript: true,
});

export const STRIPE_CONFIG = {
  currency: 'eur',
  paymentMethods: ['card', 'klarna', 'afterpay_clearpay'],
  successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
  billingAddressCollection: 'required',
  shippingAddressCollection: {
    allowedCountries: ['FI', 'SE', 'NO', 'DK', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH'],
  },
};

export async function createCheckoutSession(items: Array<{
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}>) {
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

  const session = await stripe.checkout.sessions.create({
    payment_method_types: STRIPE_CONFIG.paymentMethods,
    line_items: lineItems,
    mode: 'payment',
    success_url: STRIPE_CONFIG.successUrl,
    cancel_url: STRIPE_CONFIG.cancelUrl,
    billing_address_collection: STRIPE_CONFIG.billingAddressCollection,
    shipping_address_collection: STRIPE_CONFIG.shippingAddressCollection,
    metadata: {
      source: 'herbspot-web',
    },
  });

  return session;
}

export async function createPaymentIntent(amount: number, currency = 'eur') {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency,
    automatic_payment_methods: {
      enabled: true,
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
