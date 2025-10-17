export default function B2BPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-6">
              B2B <span className="text-[var(--brand)]">Palvelut</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Tulossa pian - Premium White-Label ratkaisut
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Mitä tarjoamme</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  🏭 White-Label valmistus
                </h3>
                <p className="text-white/70 mb-4">
                  Mukautetut 510-patruunat brändilläsi. Lääkinnällinen teräs, 
                  pyrex-lasi, keraaminen ydin. EU-yhteensopiva valmistus.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  📦 Premium-pakkaus
                </h3>
                <p className="text-white/70 mb-4">
                  Mukautetut pakkausratkaisut. Yksittäisistä yksiköistä bulk-tilauksiin. 
                  Ammattimainen esittely vähittäis- ja tukkumyyntiin.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  💼 Bulk-hinnoittelu
                </h3>
                <p className="text-white/70 mb-4">
                  Kilpailukykyiset tukkuhinnat bulk-tilauksille. 
                  Volyymialennukset saatavilla. MOQ alkaen 1000 kpl.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  🚚 EU-jakelu
                </h3>
                <p className="text-white/70 mb-4">
                  Suora toimitus kaikkiin EU-maihin. Nopea toimitus, 
                  tullaus sisältyy. Ammattimainen logistiikka.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 border border-[var(--brand)]/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Saa varhainen pääsy</h2>
            <p className="text-white/70 mb-6">
              Ole ensimmäinen tietämässä kun B2B-palvelumme käynnistyy. 
              Saa eksklusiivinen early-bird hinta ja prioriteettituki.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Yrityksen sähköposti"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[var(--brand)] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Ilmoita minulle
                </button>
              </div>
            </form>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Ota yhteyttä</h3>
            <div className="space-y-2 text-white/70">
              <p>📧 <a href="mailto:b2b@herbspot.fi" className="text-[var(--brand)] hover:underline">b2b@herbspot.fi</a></p>
              <p>📱 +358-XX-XXX-XXXX</p>
              <p>🏢 Helsinki, Suomi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'B2B Palvelut - White-Label 510-patruunat | HerbSpot.fi',
  description: 'Premium B2B-palvelut 510-patruunoille. White-label valmistus, mukautettu pakkaus, bulk-hinnoittelu. Tulossa pian.',
  openGraph: {
    title: 'B2B Palvelut - White-Label 510-patruunat',
    description: 'Premium B2B-palvelut 510-patruunoille. White-label valmistus, mukautettu pakkaus, bulk-hinnoittelu.',
    images: ['/og-b2b.jpg'],
    locale: 'fi_FI',
    type: 'website',
  },
};
