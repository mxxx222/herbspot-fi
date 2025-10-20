# ✅ Go-Live Checklist (HerbSpot V1.3)

## 1. Performance
- [ ] Run: `pnpm lighthouse:ci` (staging)
- [ ] Run: `pnpm lighthouse:ci` (prod)
- [ ] LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1

## 2. Payments & Shipping
- [ ] Stripe testit (4242 4242 4242 4242, 3DS: 4000 0027 6000 3184)
- [ ] EU-allowed countries: SE, NO, DK, DE, EE, LT, LV, PL, NL, BE, FR, ES, IT, AT, IE, PT, CZ, SK, SI, HR, RO, BG, HU, EL, CY, MT, LU, FI
- [ ] Webhook OK → tilaus-email lähti

## 3. SEO & Rich Results
- [ ] Product + Organization + AggregateRating näkyvät Rich Results -testissä
- [ ] `sitemap.xml` päivittyy ja on indeksoitavissa
- [ ] Canonical + hreflang (fi, en, ru)

## 4. Release
- [ ] Tag: `v1.3-go-live`
- [ ] Deploy prod
- [ ] Smoke test: cart, checkout, order email, RU/EN käännökset

## 5. Post-Launch
- [ ] Google Search Console: Submit sitemap
- [ ] Google Analytics: Verify tracking
- [ ] Stripe Dashboard: Monitor payments
- [ ] Render.com: Check logs for errors
