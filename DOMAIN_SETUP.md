# HerbSpot.fi Domain Siirto Verceliin

## 🎯 Tavoite
Siirtää herbspot.fi domain osoittamaan Vercel-deploymenttiin

## 📋 Nykyinen Tilanne
- ✅ Projekti: herbspot-fi
- ✅ Production URL: https://herbspot-fi.vercel.app
- ⏳ Custom Domain: herbspot.fi (ei vielä konfiguroitu)

## 🔧 Vaihe 1: Lisää Domain Vercel Dashboardissa

### Manuaalinen Konfiguraatio (Suositeltu)

1. **Kirjaudu Verceliin:**
   - URL: https://vercel.com/login
   - Käytä GitHub/Google-kirjautumista

2. **Avaa Projekti:**
   - Siirry: https://vercel.com/maxs-projects-149851b4/herbspot-fi
   - Klikkaa: **Settings** → **Domains**

3. **Lisää Domain:**
   ```
   Syötä: herbspot.fi
   Klikkaa: "Add"
   ```

4. **Lisää WWW-subdomain:**
   ```
   Syötä: www.herbspot.fi
   Klikkaa: "Add"
   ```

## 🌐 Vaihe 2: Päivitä DNS-asetukset

### Vercel DNS Records (Kopioi nämä domain-rekisteröijällesi)

```dns
# Root Domain (herbspot.fi)
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

# WWW Subdomain
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Jos käytät Cloudflare:

1. Kirjaudu Cloudflare dashboardiin
2. Valitse domain: herbspot.fi
3. DNS → Records
4. Lisää/Päivitä:
   - A Record: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com
5. **TÄRKEÄ:** Aseta Proxy Status = DNS Only (harmaa pilvi)

### Jos käytät Namecheap/GoDaddy:

1. Kirjaudu domain-rekisteröijän hallintapaneeliin
2. Domain Management → DNS Settings
3. Lisää/Päivitä:
   - A Record: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com

## ⏱️ Vaihe 3: Odota DNS Propagaatiota

- **Aika:** 5 minuutista 48 tuntiin
- **Keskimäärin:** 1-2 tuntia
- **Tarkista status:** https://dnschecker.org/#A/herbspot.fi

## ✅ Vaihe 4: Varmista Toimivuus

### Testaa Vercel CLI:llä:
```bash
vercel domains ls
# Pitäisi näyttää: herbspot.fi → herbspot-fi
```

### Testaa Selaimella:
```
https://herbspot.fi
https://www.herbspot.fi
```

## 🔒 Vaihe 5: SSL-sertifikaatti

Vercel luo automaattisesti Let's Encrypt SSL-sertifikaatin kun:
1. DNS-asetukset on päivitetty
2. Domain on verifioitu
3. Odota 5-10 minuuttia

## 📊 Tarkistuslista

- [ ] Domain lisätty Vercel dashboardissa
- [ ] A Record päivitetty (@ → 76.76.21.21)
- [ ] CNAME päivitetty (www → cname.vercel-dns.com)
- [ ] DNS propagoitunut (tarkista dnschecker.org)
- [ ] SSL-sertifikaatti aktiivinen
- [ ] Sivusto toimii osoitteessa herbspot.fi

## 🆘 Ongelmatilanteissa

### "Domain already assigned to another project"
```bash
# Poista domain vanhasta projektista ensin
vercel domains rm herbspot.fi --yes
# Lisää uudelleen oikeaan projektiin
cd /path/to/herbspot-fi
vercel domains add herbspot.fi
```

### "DNS not configured"
- Tarkista DNS-asetukset: `dig herbspot.fi`
- Odota propagaatiota: 1-2 tuntia
- Tarkista Cloudflare proxy: Pitää olla "DNS Only"

### "SSL Certificate Error"
- Odota 10 minuuttia DNS-päivityksen jälkeen
- Vercel luo sertifikaatin automaattisesti
- Tarkista Vercel dashboard: Settings → Domains

## 📞 Tuki

- Vercel Docs: https://vercel.com/docs/concepts/projects/domains
- Vercel Support: https://vercel.com/support
- DNS Checker: https://dnschecker.org

---

**Päivitetty:** $(date)
**Status:** Domain odottaa konfiguraatiota
