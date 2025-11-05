# 🚀 HerbSpot.fi - Quick Start Guide

## ✅ Mitä On Tehty

1. **✅ Sivusto Suomenkieliseksi**
   - Hero: "Suomen Luotetuin Kasviöljyjen Erikoisliike"
   - FAQ: Täysin suomeksi
   - B2B: "Tukkumyynti Yrityksille"

2. **✅ Deploy Verceliin**
   - Production URL: https://herbspot-fi.vercel.app
   - Status: Ready & Live
   - Build aika: 1 min

3. **✅ Dokumentaatio Luotu**
   - DOMAIN_SETUP.md - Yleinen domain-ohje
   - VERCEL_DOMAIN_MIGRATION.md - Render → Vercel siirto
   - vercel-domain-setup.sh - Automaattinen setup-skripti

---

## 🎯 Seuraavat Vaiheet (15-30 min)

### 1. Lisää Domain Verceliin (5 min)

**URL:** https://vercel.com/maxs-projects-149851b4/herbspot-fi/settings/domains

**Toimenpiteet:**
1. Kirjaudu Verceliin
2. Lisää: `herbspot.fi`
3. Lisää: `www.herbspot.fi`

### 2. Päivitä DNS-asetukset (10 min)

**Nykyinen (Render.com):**
```
A Record: @ → 216.24.57.251
CNAME: www → herbspot-fi.onrender.com
```

**Uusi (Vercel):**
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

### 3. Odota DNS Propagaatiota (1-2h)

**Tarkista:**
- https://dnschecker.org/#A/herbspot.fi
- Kun näkyy 76.76.21.21 → Valmis!

### 4. Testaa Sivusto

**URL:** https://herbspot.fi

**Pitäisi näyttää:**
- "Suomen Luotetuin Kasviöljyjen Erikoisliike"
- SSL-lukko (🔒)
- Suomenkielinen sisältö

---

## 📚 Dokumentaatio

| Tiedosto | Kuvaus |
|----------|--------|
| `DOMAIN_SETUP.md` | Yleinen domain-konfiguraatio ohje |
| `VERCEL_DOMAIN_MIGRATION.md` | Yksityiskohtainen Render → Vercel siirto |
| `vercel-domain-setup.sh` | Automaattinen setup-skripti |
| `QUICK_START.md` | Tämä tiedosto - nopea aloitus |

---

## 🆘 Tuki

**Ongelma?** Katso:
1. `VERCEL_DOMAIN_MIGRATION.md` → "Ongelmatilanteissa"
2. Vercel Support: https://vercel.com/support
3. DNS Checker: https://dnschecker.org

---

## 📊 Status

- ✅ Suomenkielistäminen: 100%
- ✅ Vercel Deploy: 100%
- ⏳ Domain Siirto: Odottaa toimenpiteitä
- ⏳ DNS Propagaatio: Ei aloitettu

**Arvioitu kokonaisaika:** 2-3 tuntia (sisältää DNS propagaation)

