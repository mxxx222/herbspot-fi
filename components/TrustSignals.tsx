// Trust Signals Component
// Displays verification badges and partner logos

"use client";

export function TrustSignals() {
  return (
    <section className="section bg-white/5">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="h2 font-heading mb-4">Luotettava Yhteistyökumppani</h2>
          <p className="text-white/80 font-body">
            Tarjoamme vain laadukkaita tuotteita luotettavilta eurooppalaisilta toimittajilta
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Laillinen</h3>
            <p className="text-sm text-white/70">Suomen lainsäädännön mukainen</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Valtuutettu Myyjä</h3>
            <p className="text-sm text-white/70">Virallinen jälleenmyyjä</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">EU-Sertifioitu</h3>
            <p className="text-sm text-white/70">CE-merkityt tuotteet</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Nopea Toimitus</h3>
            <p className="text-sm text-white/70">24h Suomeen</p>
          </div>
        </div>

        {/* Aggregate Rating */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-white/60">(247 arvostelua)</span>
          </div>
          <p className="text-sm text-white/60">Luotettu kumppani kautta Suomen</p>
        </div>
      </div>
    </section>
  );
}