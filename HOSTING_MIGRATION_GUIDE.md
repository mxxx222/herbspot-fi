# 🚀 Hosting Migration Guide - HerbSpot.fi

## Current Status
- **Old Hosting:** hostingpalvelu.fi (to be deactivated)
- **New Hosting:** Render.com (active)
- **Domain:** herbspot.fi

## Migration Steps

### 1. DNS Configuration
Update DNS records to point to Render:

```
Type: A
Name: @
Value: 167.99.123.45 (Render IP)

Type: CNAME  
Name: www
Value: herbspot-fi.onrender.com
```

### 2. SSL Certificate
- Render automatically provides SSL certificates
- No manual configuration needed
- HTTPS will be enforced automatically

### 3. Environment Variables
Ensure all environment variables are set in Render dashboard:

```
NEXT_PUBLIC_BASE_URL=https://herbspot.fi
SHOPIFY_STORE_DOMAIN=herbspot.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
STRIPE_SECRET_KEY=your_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=herbspot.fi
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### 4. Domain Verification
- Verify domain ownership in Render dashboard
- Add custom domain: herbspot.fi
- Enable HTTPS redirect

### 5. Old Hosting Cleanup
After DNS propagation (24-48 hours):

1. **Backup old files** (if needed)
2. **Deactivate old hosting** in hostingpalvelu.fi panel
3. **Cancel subscription** to avoid charges
4. **Update any hardcoded URLs** in old files

### 6. Testing Checklist
- [ ] herbspot.fi loads correctly
- [ ] www.herbspot.fi redirects to herbspot.fi
- [ ] HTTPS is working
- [ ] All pages load without errors
- [ ] Stripe checkout works
- [ ] Analytics tracking works
- [ ] Mobile responsiveness
- [ ] Performance scores (Lighthouse)

### 7. Rollback Plan
If issues occur:
1. Revert DNS changes
2. Reactivate old hosting
3. Debug issues
4. Retry migration

## Expected Timeline
- **DNS Propagation:** 24-48 hours
- **Full Migration:** 2-3 days
- **Old Hosting Cleanup:** After verification

## Cost Savings
- **Old Hosting:** ~€20-50/month
- **New Hosting:** $7/month (Render Starter)
- **Annual Savings:** ~€200-500

## Support
- **Render Support:** support@render.com
- **DNS Issues:** Contact domain registrar
- **Technical Issues:** Check Render logs
