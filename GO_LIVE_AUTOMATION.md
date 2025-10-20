# 🚀 GO-LIVE AUTOMAATIO JA TESTIT

## 1️⃣ **Yksi komento ennen julkaisua:**

```bash
# Staging + Prod audit
AUDIT_URL_STAGING=https://staging.herbspot.fi AUDIT_URL_PROD=https://www.herbspot.fi pnpm go-live
```

## 2️⃣ **Stripe testit:**

### Testikortit:
- **Perus:** `4242 4242 4242 4242` | päivä tulevaisuuteen | CVC 123
- **3DS pakollinen:** `4000 0027 6000 3184`

### Webhook testi:
```bash
# .env.local: STRIPE_WEBHOOK_SECRET=whsec_...
pnpm dev
pnpm stripe:listen
pnpm test:stripe
```

## 3️⃣ **EU-maat (Shopify Admin):**

**Settings → Markets → Europe → Countries:**
SE, NO, DK, DE, EE, LT, LV, PL, NL, BE, FR, ES, IT, AT, IE, PT, CZ, SK, SI, HR, RO, BG, HU, EL, CY, MT, LU, FI

**Shipping rates:** 2–5 arkipäivää

## 4️⃣ **Rich Results JSON-LD:**

### Organization (theme.liquid):
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"HerbSpot",
  "url":"https://www.herbspot.fi",
  "logo":"https://www.herbspot.fi/cdn/logo.png",
  "sameAs":["https://www.instagram.com/herbspotfi"]
}
</script>
```

### Product + AggregateRating (product.liquid):
```html
<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"Product",
 "name":"{{ product.title }}",
 "image":["{{ product.featured_image | img_url: '1024x' }}"],
 "sku":"{{ product.selected_or_first_available_variant.sku }}",
 "brand":{"@type":"Brand","name":"HerbSpot"},
 "offers":{
   "@type":"Offer",
   "priceCurrency":"EUR",
   "price":"{{ product.price | money_without_currency | replace:',','.' }}",
   "availability":"https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}",
   "url":"{{ shop.url }}{{ product.url }}"
 },
 "aggregateRating":{
   "@type":"AggregateRating",
   "ratingValue":"4.8",
   "reviewCount":"127"
 }
}
</script>
```

## 5️⃣ **Hreflang (theme.liquid):**

```html
<link rel="alternate" hreflang="fi" href="{{ shop.locale_urls.fi }}" />
<link rel="alternate" hreflang="en" href="{{ shop.locale_urls.en }}" />
<link rel="alternate" hreflang="ru" href="{{ shop.locale_urls.ru }}" />
<link rel="alternate" hreflang="x-default" href="{{ routes.root_url }}" />
```

## 6️⃣ **Deploy komennot:**

```bash
# Staging
pnpm deploy:staging

# Production
pnpm deploy:prod
```

## 7️⃣ **Post-Launch:**

1. **Google Search Console:** Submit sitemap
2. **Google Analytics:** Verify tracking  
3. **Stripe Dashboard:** Monitor payments
4. **Render.com:** Check logs for errors

## ✅ **VALMIS!**

**Automaattinen audit + deploy pipeline!** 🚀
