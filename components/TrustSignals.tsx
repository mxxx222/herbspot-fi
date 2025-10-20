// Trust Signals Component
// Displays verification badges and partner logos

"use client";

export function TrustSignals() {
  return (
    <section className="section bg-white/5">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="h2 font-heading font-heading mb-4">Verified Partners & Quality Assurance</h2>
          <p className="text-white/80 font-body">
            We curate only the finest botanical wellness devices from trusted EU suppliers
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
            <h3 className="font-semibold text-white mb-1">EU Compliance</h3>
            <p className="text-sm text-white/70">CE Certified Products</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Authorised Distributor</h3>
            <p className="text-sm text-white/70">Official Retail Partner</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Quality Tested</h3>
            <p className="text-sm text-white/70">Rigorous Standards</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand)]/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">EU Shipping</h3>
            <p className="text-sm text-white/70">Fast & Reliable</p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-6">Trusted by Leading Brands</h3>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-white/50 font-bold text-lg">CCELL</div>
            <div className="text-white/50 font-bold text-lg">AVD</div>
            <div className="text-white/50 font-bold text-lg">O2Vape</div>
            <div className="text-white/50 font-bold text-lg">KandyPens</div>
          </div>
          <p className="text-sm text-white/60 mt-4">
            Authorised distributor of premium botanical wellness devices
          </p>
        </div>
      </div>
    </section>
  );
}