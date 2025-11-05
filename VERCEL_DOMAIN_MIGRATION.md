# 🚀 HerbSpot.fi Domain Siirto: Render → Vercel

## 📊 Nykyinen Tilanne

### DNS Status (Tarkistettu juuri äsken):
```
herbspot.fi → 216.24.57.251 (Render.com)
www.herbspot.fi → herbspot-fi.onrender.com (CNAME)
```

### Vercel Deployment:
```
✅ Production URL: https://herbspot-fi.vercel.app
✅ Status: Ready
✅ Suomenkielinen sisältö: 100%
```

---

## 🎯 Tavoite

Siirtää herbspot.fi domain Render.com:sta Verceliin ilman downtime:a.

---

## 📋 Vaihe 1: Lisää Domain Vercel Dashboardiin

### Manuaalinen Konfiguraatio (5 min)

1. **Kirjaudu Verceliin:**
   ```
   URL: https://vercel.com/login
   Käytä: GitHub tai Google kirjautumista
   ```

2. **Avaa Projekti:**
   ```
   Direct Link: https://vercel.com/maxs-projects-149851b4/herbspot-fi/settings/domains
   
   TAI
   
   1. Dashboard → Projects
   2. Valitse: herbspot-fi
   3. Settings → Domains
   ```

3. **Lisää Root Domain:**
   ```
   Input field: herbspot.fi
   Click: "Add" tai "Add Domain"
   ```
   
   Vercel näyttää:
   - ✅ Domain added
   - ⚠️ DNS configuration required

4. **Lisää WWW Subdomain:**
   ```
   Input field: www.herbspot.fi
   Click: "Add"
   ```

5. **Kopioi DNS-ohjeet:**
   
   Vercel näyttää tarkat DNS-asetukset. Yleensä:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

---

## 🌐 Vaihe 2: Päivitä DNS-asetukset

### Missä DNS-asetukset ovat?

Tarkista domain-rekisteröijäsi:
- **Cloudflare** → DNS → Records
- **Namecheap** → Domain List → Manage → Advanced DNS
- **GoDaddy** → My Products → Domains → DNS
- **Google Domains** → DNS → Custom records

### DNS-muutokset:

#### Poista vanhat Render.com recordit:
```
❌ Poista: A Record @ → 216.24.57.251
❌ Poista: CNAME www → herbspot-fi.onrender.com
```

#### Lisää uudet Vercel recordit:
```
✅ Lisää: A Record
   Type: A
   Name: @ (tai root/apex)
   Value: 76.76.21.21
   TTL: 3600 (tai Auto)

✅ Lisää: CNAME Record
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (tai Auto)
```

### ⚠️ TÄRKEÄ: Jos käytät Cloudflare

1. **Proxy Status:**
   - Aseta: "DNS Only" (harmaa pilvi ☁️)
   - EI: "Proxied" (oranssi pilvi 🟠)

2. **SSL/TLS Mode:**
   - Aseta: "Full" tai "Full (strict)"
   - Cloudflare → SSL/TLS → Overview

---

## ⏱️ Vaihe 3: Odota DNS Propagaatiota

### Aikataulu:
- **Minimi:** 5-10 minuuttia
- **Tyypillinen:** 1-2 tuntia
- **Maksimi:** 48 tuntia (harvinainen)

### Seuranta:

#### Tarkista DNS CLI:llä:
```bash
# Root domain
dig herbspot.fi A +short
# Pitäisi näyttää: 76.76.21.21

# WWW subdomain
dig www.herbspot.fi CNAME +short
# Pitäisi näyttää: cname.vercel-dns.com
```

#### Tarkista DNS verkossa:
```
https://dnschecker.org/#A/herbspot.fi
https://dnschecker.org/#CNAME/www.herbspot.fi
```

Kun näet vihreät checkmarkit useimmissa sijainneissa → DNS on propagoitunut!

---

## ✅ Vaihe 4: Varmista Vercel Domain Status

### Vercel Dashboardissa:

1. **Siirry:** Settings → Domains
2. **Tarkista status:**
   ```
   herbspot.fi: ✅ Valid Configuration
   www.herbspot.fi: ✅ Valid Configuration
   ```

3. **SSL-sertifikaatti:**
   - Vercel luo automaattisesti Let's Encrypt sertifikaatin
   - Odota 5-10 minuuttia DNS-päivityksen jälkeen
   - Status: 🔒 SSL Active

### CLI:llä:
```bash
cd /Users/mxjlh/Documents/herbspot/herbspot-fi
vercel domains ls

# Pitäisi näyttää:
# herbspot.fi → herbspot-fi (verified)
# www.herbspot.fi → herbspot-fi (verified)
```

---

## 🧪 Vaihe 5: Testaa Sivusto

### Browser-testit:

1. **Root domain:**
   ```
   https://herbspot.fi
   ```
   Pitäisi näyttää: "Suomen Luotetuin Kasviöljyjen Erikoisliike"

2. **WWW subdomain:**
   ```
   https://www.herbspot.fi
   ```
   Pitäisi redirectata → https://herbspot.fi

3. **SSL-sertifikaatti:**
   - Klikkaa lukkokuvake selaimen osoiterivillä
   - Pitäisi näyttää: "Connection is secure"
   - Issued by: Let's Encrypt

### CLI-testit:
```bash
# HTTP Status
curl -I https://herbspot.fi

# Pitäisi näyttää:
# HTTP/2 200
# server: Vercel

# SSL-sertifikaatti
curl -vI https://herbspot.fi 2>&1 | grep -i "SSL\|TLS"
```

---

## 🔄 Vaihe 6: Poista Vanha Render.com Deploy (Valinnainen)

Kun Vercel domain toimii 100%:

1. **Kirjaudu Render.com:**
   ```
   https://dashboard.render.com/
   ```

2. **Avaa herbspot-fi service**

3. **Settings → Custom Domain:**
   - Poista: herbspot.fi
   - Poista: www.herbspot.fi

4. **Valinnainen: Poista service kokonaan**
   - Settings → Delete Service
   - (Vain jos et tarvitse Render.com:ia enää)

---

## 📊 Tarkistuslista

Käy läpi tämä lista varmistaaksesi onnistuneen siirron:

- [ ] Domain lisätty Vercel dashboardiin (herbspot.fi)
- [ ] WWW subdomain lisätty (www.herbspot.fi)
- [ ] A Record päivitetty: @ → 76.76.21.21
- [ ] CNAME päivitetty: www → cname.vercel-dns.com
- [ ] DNS propagoitunut (tarkista dnschecker.org)
- [ ] Vercel näyttää "Valid Configuration"
- [ ] SSL-sertifikaatti aktiivinen (🔒)
- [ ] https://herbspot.fi toimii
- [ ] https://www.herbspot.fi redirectaa
- [ ] Suomenkielinen sisältö näkyy
- [ ] Render.com domain poistettu (valinnainen)

---

## 🆘 Ongelmatilanteissa

### "Domain already in use"

**Syy:** Domain on vielä Render.com:ssa

**Ratkaisu:**
1. Poista domain Render.com dashboardista ensin
2. Odota 5 minuuttia
3. Lisää domain Verceliin uudelleen

### "Invalid DNS Configuration"

**Syy:** DNS-asetukset eivät ole vielä propagoituneet

**Ratkaisu:**
1. Tarkista DNS-asetukset domain-rekisteröijällä
2. Varmista: A Record = 76.76.21.21
3. Varmista: CNAME = cname.vercel-dns.com
4. Odota 30-60 minuuttia
5. Tarkista: https://dnschecker.org

### "SSL Certificate Error"

**Syy:** Vercel ei ole vielä luonut sertifikaattia

**Ratkaisu:**
1. Varmista DNS on oikein
2. Odota 10-15 minuuttia
3. Vercel luo sertifikaatin automaattisesti
4. Jos ei toimi 30 min jälkeen:
   - Vercel Dashboard → Settings → Domains
   - Klikkaa "Refresh" domain-rivillä

### Cloudflare "Too Many Redirects"

**Syy:** Cloudflare proxy on päällä

**Ratkaisu:**
1. Cloudflare Dashboard → DNS
2. Klikkaa oranssi pilvi → muuta harmaaksi
3. "Proxy Status: DNS Only"
4. Odota 5 minuuttia

---

## 📞 Tuki & Resurssit

### Vercel:
- Docs: https://vercel.com/docs/concepts/projects/domains
- Support: https://vercel.com/support
- Status: https://vercel-status.com

### DNS Tools:
- DNS Checker: https://dnschecker.org
- DNS Propagation: https://www.whatsmydns.net
- SSL Test: https://www.ssllabs.com/ssltest/

### Render.com:
- Dashboard: https://dashboard.render.com
- Docs: https://render.com/docs/custom-domains

---

## 🎉 Onnistumisen Merkit

Kun kaikki toimii, näet:

1. **Vercel Dashboard:**
   ```
   herbspot.fi: ✅ Valid Configuration 🔒
   www.herbspot.fi: ✅ Valid Configuration 🔒
   ```

2. **Selaimessa:**
   ```
   https://herbspot.fi → "Suomen Luotetuin Kasviöljyjen Erikoisliike"
   Lukko-ikoni näkyy (🔒)
   Ei SSL-varoituksia
   ```

3. **CLI:**
   ```bash
   dig herbspot.fi A +short
   # → 76.76.21.21
   
   curl -I https://herbspot.fi | grep server
   # → server: Vercel
   ```

---

**Päivitetty:** $(date)
**Status:** Odottaa domain-konfiguraatiota
**Arvioitu aika:** 15-30 minuuttia + DNS propagaatio (1-2h)

