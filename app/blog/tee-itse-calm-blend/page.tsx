import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tee itse Calm Blend™ – 4 rauhoittavaa yrttiä | HerbSpot.fi',
  description: 'Opas DIY-kasviseoksen valmistukseen. Calm Blend™ resepti rauhoittaville yrteille.',
  keywords: 'calm blend, DIY kasviseos, rauhoittavat yrtit, resepti',
  openGraph: {
    title: 'Tee itse Calm Blend™ – 4 rauhoittavaa yrttiä',
    description: 'Opas DIY-kasviseoksen valmistukseen. Calm Blend™ resepti rauhoittaville yrteille.',
    type: 'article',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Tee itse Calm Blend™ – 4 rauhoittavaa yrttiä
            </h1>
            <p className="text-white/70 text-lg">
              Opas DIY-kasviseoksen valmistukseen. Calm Blend™ resepti rauhoittaville yrteille.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
              <span>📅 15.12.2024</span>
              <span>⏱️ 7 min lukuaika</span>
              <span>🏷️ DIY</span>
            </div>
          </div>

          <article className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-lg p-6 mb-8 border border-[var(--brand)]/20">
              <h2 className="text-2xl font-semibold text-[var(--brand)] mb-4">
                🍵 Calm Blend™ resepti
              </h2>
              <p className="text-white/80 mb-4">
                Tämä rauhoittava sekoitus on täydellinen iltakäyttöön. Yhdistää parhaat rauhoittavat yrtit.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Ainesosat:</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• 40% Damiana</li>
                    <li>• 30% Laventeli</li>
                    <li>• 20% Sitruunamelissa</li>
                    <li>• 10% Kamomilla</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Valmistusaika:</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Valmistelu: 15 min</li>
                    <li>• Kuivaus: 2-3 päivää</li>
                    <li>• Säilytys: 6 kuukautta</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">🌿 Yrtit ja niiden vaikutukset</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Damiana (40%)</h3>
                <p className="text-white/80 text-sm mb-2">
                  Luonnollinen rauhoittaja ja mielialan parantaja. Auttaa rentoutumaan ja nukkumaan paremmin.
                </p>
                <span className="text-xs bg-[var(--brand)] text-black px-2 py-1 rounded">Rauhoittava</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Laventeli (30%)</h3>
                <p className="text-white/80 text-sm mb-2">
                  Klassinen rauhoittava yrtti. Vähentää stressiä ja auttaa uneen.
                </p>
                <span className="text-xs bg-[var(--brand)] text-black px-2 py-1 rounded">Uni-ystävällinen</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Sitruunamelissa (20%)</h3>
                <p className="text-white/80 text-sm mb-2">
                  Mieto ja rauhoittava. Auttaa rentoutumaan ilman uneliaisuutta.
                </p>
                <span className="text-xs bg-[var(--brand)] text-black px-2 py-1 rounded">Mieto</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Kamomilla (10%)</h3>
                <p className="text-white/80 text-sm mb-2">
                  Klassinen rauhoittava yrtti. Auttaa rentoutumaan ja nukkumaan.
                </p>
                <span className="text-xs bg-[var(--brand)] text-black px-2 py-1 rounded">Klassinen</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">📋 Valmistusohjeet</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--brand)] mb-3">1. Ainesosien valmistelu</h3>
                <p className="text-white/80 mb-3">
                  Aloita valmistelemalla kaikki yrtit. Varmista, että ne ovat kuivia ja puhdasta laatua.
                </p>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Punnitse yrtit tarkasti</li>
                  <li>• Tarkista laatu ja puhtaus</li>
                  <li>• Valmista työpaikka</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--brand)] mb-3">2. Sekoitus</h3>
                <p className="text-white/80 mb-3">
                  Sekoita yrtit varovasti ja tasaisesti. Älä murskaa liikaa.
                </p>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Sekoita käsin tai varovasti</li>
                  <li>• Varmista tasainen sekoitus</li>
                  <li>• Säilytä kuivassa paikassa</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--brand)] mb-3">3. Säilytys</h3>
                <p className="text-white/80 mb-3">
                  Säilytä sekoitus kuivassa ja viileässä paikassa.
                </p>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Käytä tiivistä säilytysastiaa</li>
                  <li>• Säilytä pimeässä paikassa</li>
                  <li>• Tarkista säilyvyys säännöllisesti</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">🍵 Käyttöohjeet</h2>
            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">Tee-käyttö:</h3>
              <ol className="text-white/80 space-y-2">
                <li><strong>1. Keitä vesi</strong> - 200ml kiehuvaa vettä</li>
                <li><strong>2. Lisää sekoitus</strong> - 1-2 tl Calm Blend™</li>
                <li><strong>3. Hauduta</strong> - 5-7 minuuttia</li>
                <li><strong>4. Nauti</strong> - Hitaasti ja rauhallisesti</li>
              </ol>
              
              <h3 className="text-lg font-semibold text-[var(--brand)] mb-3 mt-6">Savukäyttö:</h3>
              <ol className="text-white/80 space-y-2">
                <li><strong>1. Valmista savuke</strong> - Käytä savukepaperia</li>
                <li><strong>2. Täytä sekoituksella</strong> - 0.5-1g Calm Blend™</li>
                <li><strong>3. Sytytä</strong> - Varovasti ja hitaasti</li>
                <li><strong>4. Hengitä</strong> - Lyhyet, hitaat vedot</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mb-4">⚠️ Turvallisuus</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Tärkeää muistaa:</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Käytä vain laillisia yrttilajeja</li>
                <li>• Älä ylitä suositeltua määrää</li>
                <li>• Testaa ensin pieni määrä</li>
                <li>• Säilytä lasten ulottumattomissa</li>
                <li>• Konsultoi lääkäriä jos olet raskaana</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">🎯 Valmis Calm Blend™</h2>
              <p className="text-white/80 mb-4">
                Etkö halua tehdä itse? Tilaa valmis Calm Blend™ -sekoitus:
              </p>
              <ul className="text-white/80 space-y-2">
                <li>✅ Valmiiksi sekoitettu</li>
                <li>✅ Laadunvalvottu</li>
                <li>✅ Säilytysvalmis</li>
                <li>✅ Käyttöohjeet mukana</li>
              </ul>
              <div className="mt-4">
                <a href="/c/yrttiblendit" className="btn btn-brand">Tilaa Calm Blend™ - €12.90</a>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold mb-4">Jatka oppimista</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/blog/dual-use-blends-uusi-tapa" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-[var(--brand)]">Dual-Use Blends™: uusi tapa nauttia kasveista</h4>
                  <p className="text-white/70 text-sm mt-2">Tee ja savu yhdistettynä</p>
                </a>
                <a href="/blog/luonnollinen-iltarutiini" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-[var(--brand)]">Luonnollinen iltarutiini: tee + höyry = parempi uni</h4>
                  <p className="text-white/70 text-sm mt-2">Rentoutumisrituaalit</p>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
