export default function B2BPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-6">
              B2B <span className="text-[var(--brand)]">Distribution Partnerships</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Partner with Europe's trusted botanical wellness marketplace
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Distribution & Retail Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  🏭 Authorised Distribution
                </h3>
                <p className="text-white/70 mb-4">
                  Become an authorised distributor of premium 510-compatible devices. 
                  Access to trusted EU suppliers and verified quality standards.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  📦 Retail Collaboration
                </h3>
                <p className="text-white/70 mb-4">
                  Partner with HerbSpot for retail expansion. White-label solutions, 
                  custom packaging, and professional presentation for B2B markets.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  💼 Bulk Pricing & MOQ
                </h3>
                <p className="text-white/70 mb-4">
                  Competitive wholesale pricing for bulk orders. Volume discounts available. 
                  Minimum order quantity starting from 1000 units.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  🚚 EU Logistics Network
                </h3>
                <p className="text-white/70 mb-4">
                  Direct shipping to all EU countries. Fast delivery, customs clearance included. 
                  Professional logistics and supply chain management.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 border border-[var(--brand)]/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">🚀 Early Access Partnership Program</h2>
            <p className="text-white/70 mb-6">
              Join our exclusive distribution partnership program. Get early access to new products, 
              priority support, and exclusive wholesale pricing.
            </p>
            
            {/* Partnership Benefits */}
            <div className="bg-black/30 rounded-lg p-6 mb-6 border border-[var(--brand)]/20">
              <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                💎 Partnership Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <span className="text-[var(--brand)] font-bold">✓</span>
                  <span><strong>50% discount</strong> on first wholesale order</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--brand)] font-bold">✓</span>
                  <span><strong>Priority support</strong> and dedicated account manager</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--brand)] font-bold">✓</span>
                  <span><strong>Exclusive products</strong> for distribution partners only</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--brand)] font-bold">✓</span>
                  <span><strong>Limited spots</strong> - only 50 distribution partners</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--brand)] font-bold">✓</span>
                  <span><strong>Free consultation</strong> on market expansion strategy</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--brand)] font-bold">✓</span>
                  <span><strong>Beta access</strong> to new product launches</span>
                </div>
              </div>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Business email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[var(--brand)] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Join Program
                </button>
              </div>
              <p className="text-xs text-white/60 mt-2 text-center">
                🔒 Your email is secure. We only send B2B partnership updates.
              </p>
            </form>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Partnership Team</h3>
            <div className="space-y-2 text-white/70">
              <p>📧 <a href="mailto:partnerships@herbspot.fi" className="text-[var(--brand)] hover:underline">partnerships@herbspot.fi</a></p>
              <p>📱 +358-XX-XXX-XXXX</p>
              <p>🏢 Helsinki, Finland</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'B2B Distribution Partnerships | HerbSpot.fi',
  description: 'Partner with Europe\'s trusted botanical wellness marketplace. Authorised distribution, retail collaboration, bulk pricing, EU logistics.',
  openGraph: {
    title: 'B2B Distribution Partnerships - HerbSpot.fi',
    description: 'Partner with Europe\'s trusted botanical wellness marketplace. Authorised distribution, retail collaboration, bulk pricing.',
    images: ['/og-b2b.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};
