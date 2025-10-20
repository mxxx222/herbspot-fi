# 💳 STRIPE PAYMENT TESTING - ASIAKAS VALMIS

## ✅ Mitä on tehty:
- **Stripe Checkout:** Konfiguroitu ja toimii
- **EU Shipping:** Kaikki EU-maat tuettu
- **Guest Checkout:** Ei kirjautumista tarvita
- **Test Mode:** Turvallinen testaus

## 🧪 Testaa maksuja:

### 1. Test-kortit:
```
Visa: 4242 4242 4242 4242
Mastercard: 5555 5555 5555 4444
American Express: 3782 822463 10005
```

### 2. Test-datalla:
- **Expiry:** Mikä tahansa tulevaisuuden päivämäärä
- **CVC:** Mikä tahansa 3-numeroinen koodi
- **ZIP:** Mikä tahansa postinumero

### 3. Test-tilaukset:
- **Email:** test@example.com
- **Nimi:** Test Customer
- **Osoite:** Mikä tahansa EU-osoite

## 🎯 Live-maksut:

### 1. Stripe Dashboard:
1. Mene: `https://dashboard.stripe.com`
2. **Settings** → **API keys**
3. Vaihda **Test mode** → **Live mode**
4. Kopioi **Publishable key** ja **Secret key**

### 2. Environment Variables:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

### 3. Deploy:
- Render.com deploy uudelleen
- Live-maksut toimivat heti

## 🔒 Turvallisuus:
- **PCI Compliance:** Stripe hoitaa
- **Fraud Protection:** Automaattinen
- **Chargeback Protection:** Sisäänrakennettu

**Asiakas voi vaihtaa live-maksut yhdellä klikkauksella!**
