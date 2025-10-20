// Shopify Webhook HMAC Validation Utility
// Client-side validation for webhook security

export class ShopifyWebhookValidator {
  private webhookSecret: string;

  constructor(webhookSecret: string) {
    this.webhookSecret = webhookSecret;
  }

  /**
   * Verify Shopify webhook HMAC signature using Web Crypto API
   */
  async verifyWebhook(
    body: string,
    hmacHeader: string
  ): Promise<boolean> {
    if (!hmacHeader) {
      return false;
    }

    try {
      // Create HMAC using Web Crypto API
      const encoder = new TextEncoder();
      const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(this.webhookSecret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );

      const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(body));
      const computedHmac = btoa(String.fromCharCode(...new Uint8Array(signature)));

      // Compare HMACs using constant-time comparison
      return this.constantTimeCompare(hmacHeader, computedHmac);
    } catch (error) {
      console.error('HMAC verification error:', error);
      return false;
    }
  }

  /**
   * Constant-time string comparison to prevent timing attacks
   */
  private constantTimeCompare(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }

    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }

    return result === 0;
  }

  /**
   * Verify webhook from Request object
   */
  async verifyWebhookFromRequest(request: Request): Promise<boolean> {
    const hmacHeader = request.headers.get('x-shopify-hmac-sha256');
    const body = await request.text();
    
    return this.verifyWebhook(body, hmacHeader || '');
  }
}

/**
 * Utility function to verify Shopify webhook
 */
export async function verifyShopifyWebhook(
  body: string,
  hmacHeader: string,
  webhookSecret: string
): Promise<boolean> {
  const validator = new ShopifyWebhookValidator(webhookSecret);
  return validator.verifyWebhook(body, hmacHeader);
}

/**
 * Middleware for Next.js API routes to verify Shopify webhooks
 */
export function createShopifyWebhookMiddleware(webhookSecret: string) {
  return async (req: Request): Promise<boolean> => {
    const validator = new ShopifyWebhookValidator(webhookSecret);
    return validator.verifyWebhookFromRequest(req);
  };
}

/**
 * Type definitions for Shopify webhook data
 */
export interface ShopifyOrder {
  id: number;
  email: string;
  total_price: string;
  currency: string;
  customer: {
    email: string;
    id: number;
  };
  line_items: Array<{
    id: number;
    title: string;
    quantity: number;
    price: string;
  }>;
  checkout_token?: string;
  financial_status: string;
  fulfillment_status: string;
}

export interface ShopifyWebhookHeaders {
  'x-shopify-topic': string;
  'x-shopify-hmac-sha256': string;
  'x-shopify-shop-domain': string;
  'x-shopify-api-version': string;
}
