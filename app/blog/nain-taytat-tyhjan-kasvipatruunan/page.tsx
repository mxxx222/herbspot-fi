import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Näin täytät tyhjän kasvipatruunan turvallisesti | HerbSpot.fi',
  description: 'Vaihe vaiheelta opas tyhjien kasvipatruunoiden täyttämiseen. Turvalliset menetelmät ja välineet.',
  keywords: 'kasvipatruuna täyttö, DIY, turvallisuus, välineet',
  openGraph: {
    title: 'Näin täytät tyhjän kasvipatruunan turvallisesti',
    description: 'Vaihe vaiheelta opas tyhjien kasvipatruunoiden täyttämiseen. Turvalliset menetelmät ja välineet.',
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
              Näin täytät tyhjän kasvipatruunan turvallisesti
            </h1>
            <p className="text-white/70 text-lg">
              Vaihe vaiheelta opas tyhjien kasvipatruunoiden täyttämiseen. Turvalliset menetelmät ja välineet.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
              <span>📅 15.12.2024</span>
              <span>⏱️ 6 min lukuaika</span>
              <span>🏷️ Opas</span>
            </div>
          </div>

          <article className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-lg p-6 mb-8 border border-[var(--brand)]/20">
              <h2 className="text-2xl font-semibold text-[var(--brand)] mb-4">
                🧪 Mitä tarvitset täyttöön?
              </h2>
              <ul className="text-white/80 space-y-2">
                <li>✅ Tyhjä kasvipatruuna</li>
                <li>✅ Kasviseos (esim. Calm Blend™)</li>
                <li>✅ Täyttöruisku tai pipetti</li>
                <li>✅ Lämpötilan säätö</li>
                <li>✅ Kosteuspyyhkeet</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">📋 Vaihe vaiheelta</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--brand)] mb-3">1. Valmistelu</h3>
                <p className="text-white/80 mb-3">
                  Aloita valmistelemalla työpaikka ja välineet. Varmista, että kaikki on puhtaita ja kuivia.
                </p>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Puhdista työpaikka</li>
                  <li>• Valmista kasviseos huoneenlämpöön</li>
                  <li>• Tarkista patruunan kunto</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--brand)] mb-3">2. Kasviseoksen lämmitys</h3>
                <p className="text-white/80 mb-3">
                  Kasviseos täytyy olla tarpeeksi lämmintä, jotta se valuu helposti patruunaan.
                </p>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Lämmitä vesihauteessa 5-10 minuuttia</li>
                  <li>• Tarkista lämpötila sormella (ei liian kuumaa)</li>
                  <li>• Sekoita tasaisesti</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--brand)] mb-3">3. Täyttö</h3>
                <p className="text-white/80 mb-3">
                  Täytä patruuna varovasti ja tasaisesti. Älä täytä liian täyteen.
                </p>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Käytä ruiskua tai pipettiä</li>
                  <li>• Täytä 80-90% täyteen</li>
                  <li>• Anna seoksen asettua 5 minuuttia</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--brand)] mb-3">4. Kiinnitys ja testaus</h3>
                <p className="text-white/80 mb-3">
                  Kiinnitä patruuna akkuun ja testaa toimivuus.
                </p>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Kierrä patruuna varovasti kiinni</li>
                  <li>• Odota 30 sekuntia lämmityksen</li>
                  <li>• Testaa lyhyellä vedolla</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">⚠️ Yleisimmät virheet</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
              <ul className="text-white/80 space-y-2">
                <li>❌ <strong>Liian kylmä seos</strong> - Ei valu patruunaan</li>
                <li>❌ <strong>Liian täyteen täyttö</strong> - Vuotaa ja sotkee</li>
                <li>❌ <strong>Kiirehtiminen</strong> - Seos ei ehdi asettua</li>
                <li>❌ <strong>Liian kuumat vedot</strong> - Palauttaa kasviseoksen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">🛠️ Suositellut välineet</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Täyttöruiskut (3 kpl)</h3>
                <p className="text-white/80 text-sm mb-2">
                  Tarkat ruiskut eri kokoisille patruunoille. Helppo käyttää ja puhdistaa.
                </p>
                <span className="text-xs bg-[var(--brand)] text-black px-2 py-1 rounded">4,90 €</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Pipetti-set DIY</h3>
                <p className="text-white/80 text-sm mb-2">
                  Kattava setti pipettejä ja työkaluja täyttöön. Sisältää myös puhdistusvälineet.
                </p>
                <span className="text-xs bg-[var(--brand)] text-black px-2 py-1 rounded">6,90 €</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">🎯 DIY Starter Kit</h2>
              <p className="text-white/80 mb-4">
                Aloittelijalle suosittelemme DIY Starter Kit -pakettia:
              </p>
              <ul className="text-white/80 space-y-2">
                <li>✅ 5x tyhjää kasvipatruunaa</li>
                <li>✅ Täyttöruiskut</li>
                <li>✅ Pipetti-set</li>
                <li>✅ Käyttöohjeet</li>
                <li>✅ Puhdistusvälineet</li>
              </ul>
              <div className="mt-4">
                <a href="/c/diy-tarvikkeet" className="btn btn-brand">Tilaa DIY Kit - €8.90</a>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold mb-4">Jatka oppimista</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/blog/tee-itse-calm-blend" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-[var(--brand)]">Tee itse Calm Blend™ – 4 rauhoittavaa yrttiä</h4>
                  <p className="text-white/70 text-sm mt-2">DIY-kasviseoksen valmistus</p>
                </a>
                <a href="/blog/tyhjat-kasvipatruunat-kaytto" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-[var(--brand)]">Tyhjät kasvipatruunat: käyttö, puhdistus ja säilytys</h4>
                  <p className="text-white/70 text-sm mt-2">Huolto ja säilytys</p>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
