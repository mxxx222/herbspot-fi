# 🛍️ LIVE-VALMIS VARMISTUKSET + VIIMEISTELYT

## 1️⃣ **Verifiointi (15-30 min)**

### Rich Results testit:
```bash
# Etusivu - Organization + Product
curl -s https://www.herbspot.fi | grep -i '"@type":"(Organization|Product)"'

# Tuotesivu - Product + BreadcrumbList
curl -s https://www.herbspot.fi/products/[tuote] | grep -i '"@type":"(Product|BreadcrumbList)"'

# FAQ-sivu - FAQPage
curl -s https://www.herbspot.fi/pages/faq | grep -i '"@type":"FAQPage"'

# Kaikki yhteen
curl -s https://www.herbspot.fi | grep -i '"@type":"(FAQPage|Product|Organization|BreadcrumbList)"'
```

### Kanonisointi + noindex:
```bash
# Yksittäinen tag - canonical peruskokoelmaan
curl -sI https://www.herbspot.fi/collections/all?constraints=focus | grep -i '^link:'

# Yhdistelmäfiltterit - noindex,follow
curl -sI https://www.herbspot.fi/collections/all?constraints=focus%2Bcalm | grep -i '^x-robots-tag:'

# Tag-URL - canonical peruskokoelmaan
curl -sI https://www.herbspot.fi/collections/all/focus | grep -i '^link:'
```

### GA4-tapahtumat:
1. **Avaa** `/collections/all`
2. **Klikkaa** filtteripainiketta → Realtime Events: `filter_click`
3. **Vaihda kieli** FI → EN → RU → Realtime Events: `locale_switch`
4. **Varmista** että `page_view` ei tuplaannu

## 2️⃣ **Organization.json-ld** - theme.liquid <head>

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HerbSpot",
  "url": "{{ shop.url }}",
  "logo": {
    "@type": "ImageObject",
    "url": "{{ 'logo.png' | asset_url }}",
    "width": 112,
    "height": 112
  },
  "description": "{% case localization.language.iso_code %}{% when 'fi' %}Euroopan luotetuin kasvipohjaisen hyvinvoinnin kohde{% when 'ru' %}Надёжный европейский центр ботанического велнеса{% else %}Europe's trusted destination for botanical wellness{% endcase %}",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+358-40-1234567",
    "contactType": "customer service",
    "areaServed": "EU"
  },
  "sameAs": [
    "https://www.instagram.com/herbspotfi",
    "https://www.linkedin.com/company/herbspot",
    "https://www.facebook.com/herbspotfi"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FI",
    "addressLocality": "Helsinki"
  }
}
</script>
```

## 3️⃣ **Hero-kuvan optimointi** - theme.liquid <head>

```liquid
<!-- Hero-kuvan preload -->
<link rel="preload" as="image" href="{{ 'hero.jpg' | asset_url }}" imagesrcset="{{ 'hero.jpg' | image_url: width:1200 }} 1200w" imagesizes="100vw">

<!-- Hero-kuva -->
<img src="{{ 'hero.jpg' | asset_url }}" 
     width="1200" 
     height="700" 
     fetchpriority="high" 
     decoding="async" 
     alt="{% case localization.language.iso_code %}{% when 'fi' %}HerbSpot - Euroopan luotetuin kasvipohjaisen hyvinvoinnin kohde{% when 'ru' %}HerbSpot - Надёжный европейский центр ботанического велнеса{% else %}HerbSpot - Europe's trusted destination for botanical wellness{% endcase %}">
```

## 4️⃣ **RU-locale hreflang** - snippets/seo-snippets.liquid

```liquid
{%- comment -%} hreflang kokoelmaan (perus-URL) {%- endcomment -%}
<link rel="alternate" hreflang="fi" href="{{ shop.locale_urls.fi }}{{ collection.url }}">
<link rel="alternate" hreflang="en" href="{{ shop.locale_urls.en }}{{ collection.url }}">
<link rel="alternate" hreflang="ru" href="{{ shop.locale_urls.ru }}{{ collection.url }}">
<link rel="alternate" hreflang="x-default" href="{{ shop.url }}{{ collection.url }}">
```

## 5️⃣ **Tagit yhdenmukaisesti** - Shopify Admin

**Lisää nämä tagit tuotteille:**
- `focus` - Focus & Energy tuotteet
- `calm` - Calm & Balance tuotteet  
- `sleep` - Sleep & Recovery tuotteet
- `accessories` - Botanical Accessories

**Käytä samoja tageja:**
- Collection-filttereissä
- GA4-eventissä
- URL-rakenteessa

## 6️⃣ **GA4 DebugView-ohjeet**

### DebugView käyttöönotto:
1. **Mene** GA4 → Configure → DebugView
2. **Lisää** debug_mode: true
3. **Testaa** sivustolla
4. **Tarkista** DebugView → Events

### Debug-koodi:
```javascript
// Lisää theme.liquid <head>
gtag('config', 'GA_MEASUREMENT_ID', {
  debug_mode: true
});
```

### Testaa eventit:
```javascript
// Browser console
gtag('event','filter_click',{filter:'focus',collection:'all'});
gtag('event','locale_switch',{locale:'en'});
```

## 7️⃣ **Search Console setup**

### Sitemap lähetys:
1. **Mene** Google Search Console
2. **Sitemaps** → Add sitemap
3. **Lisää** `sitemap.xml`
4. **Submit**

### URL Inspection:
1. **URL Inspection** → Test live URL
2. **Testaa** tärkeimmät sivut:
   - `/` (etusivu)
   - `/collections/all` (kokoelmat)
   - `/products/[tuote]` (tuotesivu)
   - `/pages/faq` (FAQ-sivu)

## 8️⃣ **Viimeistelyt checklist**

- [ ] **Organization logo** 112×112 PNG/SVG lisätty
- [ ] **sameAs linkit** Instagram, LinkedIn, Facebook
- [ ] **RU-locale** julkaistu Shopify Marketsissa
- [ ] **Hero-kuva** preload + fetchpriority="high"
- [ ] **Tagit** yhdenmukaisesti: focus, calm, sleep, accessories
- [ ] **Sitemap.xml** lähetetty Search Consoleen
- [ ] **URL Inspection** tärkeimmille sivuille
- [ ] **GA4 DebugView** testattu

## ✅ **LIVE-VALMIS!**

**Kaikki varmistukset + viimeistelyt valmis!** 🚀
