# 🛍️ VERIFIOINTI-OHJEET - RICH RESULTS + SEO

## 1️⃣ **Rich Results -testi**

### Etusivu:
```bash
curl -s https://www.herbspot.fi | grep -i '"@type":"(FAQPage|Product|Organization|BreadcrumbList)"'
```

**Odotettu tulos:**
- ✅ `"@type":"Organization"`
- ✅ `"@type":"Product"` (jos tuotteita)
- ✅ `"@type":"BreadcrumbList"`

### Tuotesivu:
```bash
curl -s https://www.herbspot.fi/products/[tuote] | grep -i '"@type":"Product"'
```

**Odotettu tulos:**
- ✅ `"@type":"Product"`
- ✅ `"@type":"BreadcrumbList"`

### FAQ-sivu:
```bash
curl -s https://www.herbspot.fi/pages/faq | grep -i '"@type":"FAQPage"'
```

**Odotettu tulos:**
- ✅ `"@type":"FAQPage"`

## 2️⃣ **Kanonisointi ja noindex**

### Peruskokoelma:
```bash
curl -sI https://www.herbspot.fi/collections/all | grep -i '^link:'
```

**Odotettu tulos:**
- ✅ `link: <https://www.herbspot.fi/collections/all>; rel="canonical"`

### Yksittäinen tag:
```bash
curl -sI https://www.herbspot.fi/collections/all/focus | grep -i '^link:'
```

**Odotettu tulos:**
- ✅ `link: <https://www.herbspot.fi/collections/all>; rel="canonical"`

### Yhdistelmäfiltterit (>1 tag):
```bash
curl -sI https://www.herbspot.fi/collections/all/focus+calm | grep -i '^x-robots-tag:\|^link:'
```

**Odotettu tulos:**
- ✅ `x-robots-tag: noindex,follow`
- ✅ `link: <https://www.herbspot.fi/collections/all>; rel="canonical"`

## 3️⃣ **GA4-tapahtumat**

### Browser Console test:
```javascript
// Testaa filter_click event
gtag('event','filter_click',{filter:'focus',collection:'all'});

// Tarkista että event lähti
// Network tab → gtag events
```

### Collection-sivulla:
1. **Avaa** `/collections/all`
2. **Klikkaa** filtteripainiketta (esim. "Focus")
3. **Tarkista** Network tab → gtag events
4. **Varmista** että `filter_click` event lähti

### Locale-vaihdot:
1. **Vaihda kieli** FI → EN → RU
2. **Tarkista** että sivunäkymät eivät rikkoudu
3. **Varmista** että `page_view` pysyy yhtenäisenä

## 4️⃣ **Hreflang-testi**

```bash
curl -s https://www.herbspot.fi | grep -i 'hreflang'
```

**Odotettu tulos:**
- ✅ `hreflang="fi"`
- ✅ `hreflang="en"`
- ✅ `hreflang="ru"`
- ✅ `hreflang="x-default"`

## 5️⃣ **LCP-optimointi**

### Hero-kuvan preload:
```bash
curl -s https://www.herbspot.fi | grep -i 'rel="preload".*hero'
```

**Odotettu tulos:**
- ✅ `rel="preload" as="image" href="...hero.jpg"`

### Performance test:
```bash
# Lighthouse CI
pnpm lighthouse:ci
```

**Odotettu tulos:**
- ✅ LCP ≤ 2.5s
- ✅ CLS ≤ 0.1

## 6️⃣ **Sitemap-testi**

```bash
curl -s https://www.herbspot.fi/sitemap.xml | head -20
```

**Odotettu tulos:**
- ✅ XML-sitemap latautuu
- ✅ Sisältää etusivun ja kokoelmat

## 7️⃣ **Google Search Console**

### URL Inspection:
1. **Mene** GSC → URL Inspection
2. **Testaa** `/collections/all?constraints=`
3. **Tarkista** että canonical on `/collections/all`

### Rich Results:
1. **Mene** GSC → Enhancements → Rich Results
2. **Tarkista** että FAQ, Product, Organization näkyvät
3. **Varmista** että BreadcrumbList on aktiivinen

## 8️⃣ **Troubleshooting**

### Jos Rich Results eivät näy:
1. **Tarkista** että JSON-LD on validia
2. **Varmista** että schema.org on oikein
3. **Odota** 24-48h Google-indeksoinnille

### Jos GA4-eventit eivät lähe:
1. **Tarkista** että gtag on ladattu
2. **Varmista** että onclick-handler on oikein
3. **Testaa** browser consolessa

### Jos kanonisointi ei toimi:
1. **Tarkista** että current_tags.size > 0
2. **Varmista** että collection.url on oikein
3. **Testaa** eri tag-yhdistelmillä

## ✅ **VALMIS!**

**Verifiointi-ohjeet automaattisesti!** 🚀
