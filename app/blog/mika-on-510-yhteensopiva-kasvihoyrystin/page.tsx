import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mikä on 510-yhteensopiva kasvihöyrystin ja miten valita oikea? | HerbSpot.fi',
  description: 'Täydellinen opas 510-yhteensopiviin kasvihöyrystimiin. Opit valitsemaan oikean akun, patruunan ja käyttämään turvallisesti.',
  keywords: '510 kasvihöyrystin, kasvipatruuna, yhteensopivuus, valintaopas',
  openGraph: {
    title: 'Mikä on 510-yhteensopiva kasvihöyrystin ja miten valita oikea?',
    description: 'Täydellinen opas 510-yhteensopiviin kasvihöyrystimiin. Opit valitsemaan oikean akun, patruunan ja käyttämään turvallisesti.',
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
              Mikä on 510-yhteensopiva kasvihöyrystin ja miten valita oikea?
            </h1>
            <p className="text-white/70 text-lg">
              Täydellinen opas 510-yhteensopiviin kasvihöyrystimiin. Opit valitsemaan oikean akun, patruunan ja käyttämään turvallisesti.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
              <span>📅 15.12.2024</span>
              <span>⏱️ 8 min lukuaika</span>
              <span>🏷️ Opas</span>
            </div>
          </div>

          <article className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-lg p-6 mb-8 border border-[var(--brand)]/20">
              <h2 className="text-2xl font-semibold text-[var(--brand)] mb-4">
                🔍 Mitä on 510-yhteensopivuus?
              </h2>
              <p className="text-white/80 mb-4">
                510 on maailman yleisin kierrestandardi kasvihöyrystimille. Se tarkoittaa, että kaikki 510-kierteiset osat sopivat yhteen – riippumatta valmistajasta.
              </p>
              <ul className="text-white/80 space-y-2">
                <li>✅ Yleisin standardi markkinoilla</li>
                <li>✅ Kaikki valmistajat tukevat</li>
                <li>✅ Helppo vaihtaa osia</li>
                <li>✅ Edullinen ja luotettava</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">🔋 Akun valinta</h2>
            <p className="text-white/80 mb-4">
              Oikea akku on kasvihöyrystimen sydän. HerbSpotin Slimline 350mAh on erinomainen aloitusvalinta:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Slimline 350mAh</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Kompakti koko</li>
                  <li>• USB-lataus</li>
                  <li>• Automaattinen sammutus</li>
                  <li>• 14,90 €</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">CCELL M3 Plus</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Korkeampi kapasiteetti</li>
                  <li>• Nopea lataus</li>
                  <li>• Pitkä käyttöikä</li>
                  <li>• 14,90 €</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">🧪 Patruunan valinta</h2>
            <p className="text-white/80 mb-4">
              Patruuna sisältää kasviseoksen ja lämmittää sen höyryksi. Valitse oikea tyyppi käyttötarkoituksen mukaan:
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Keraaminen ydin (Ccell-tyyli)</h3>
                <p className="text-white/80 text-sm mb-2">
                  Paras valinta tiheille kasviseoksille. Keraaminen ydin lämmittää tasaisesti ja estää palamisen.
                </p>
                <span className="text-xs bg-[var(--brand)] text-black px-2 py-1 rounded">Suositus</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">Pyrex-lasi tank</h3>
                <p className="text-white/80 text-sm mb-2">
                  Läpinäkyvä tankki, jossa näet kasviseoksen määrän. Helppo täyttää ja puhdistaa.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">⚡ Käyttöohjeet</h2>
            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <ol className="text-white/80 space-y-3">
                <li><strong>1. Lataa akku</strong> - Ensimmäinen lataus täyteen</li>
                <li><strong>2. Kiinnitä patruuna</strong> - Kierrä varovasti kiinni</li>
                <li><strong>3. Odota 30 sekuntia</strong> - Anna patruunan lämmetä</li>
                <li><strong>4. Hengitä varovasti</strong> - Lyhyet, hitaat vedot</li>
                <li><strong>5. Säilytä pystyssä</strong> - Estää vuotoja</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mb-4">⚠️ Turvallisuus</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Tärkeää muistaa:</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Käytä vain laillisia kasviseoksia</li>
                <li>• Älä ylitä suositeltua lämpötilaa</li>
                <li>• Säilytä lasten ulottumattomissa</li>
                <li>• Puhdista säännöllisesti</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">🎯 Suositukset</h2>
              <p className="text-white/80 mb-4">
                Aloittelijalle suosittelemme Calm Pack™ -pakettia, joka sisältää kaiken tarvittavan:
              </p>
              <ul className="text-white/80 space-y-2">
                <li>✅ Slimline 350mAh akku</li>
                <li>✅ 2x tyhjä kasvipatruuna</li>
                <li>✅ Calm Blend™ kasviseos</li>
                <li>✅ Täyttöruisku</li>
                <li>✅ Käyttöohjeet</li>
              </ul>
              <div className="mt-4">
                <a href="/c/wellness-packs" className="btn btn-brand">Tilaa Calm Pack™ - €29.90</a>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold mb-4">Jatka oppimista</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/blog/nain-taytat-tyhjan-kasvipatruunan" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-[var(--brand)]">Näin täytät tyhjän kasvipatruunan turvallisesti</h4>
                  <p className="text-white/70 text-sm mt-2">Vaihe vaiheelta opas täyttämiseen</p>
                </a>
                <a href="/blog/tee-itse-calm-blend" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-[var(--brand)]">Tee itse Calm Blend™ – 4 rauhoittavaa yrttiä</h4>
                  <p className="text-white/70 text-sm mt-2">DIY-kasviseoksen valmistus</p>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
