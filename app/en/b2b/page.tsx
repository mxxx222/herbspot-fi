export default function B2BPageEN() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-6">
              B2B <span className="text-[var(--brand)]">Services</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Coming Soon - Premium White-Label Solutions
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  🏭 White-Label Manufacturing
                </h3>
                <p className="text-white/70 mb-4">
                  Custom 510 cartridges with your branding. Medical-grade steel, 
                  pyrex glass, ceramic core. EU-compliant manufacturing.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  📦 Premium Packaging
                </h3>
                <p className="text-white/70 mb-4">
                  Custom packaging solutions. From individual units to bulk orders. 
                  Professional presentation for retail and wholesale.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  💼 Bulk Pricing
                </h3>
                <p className="text-white/70 mb-4">
                  Competitive wholesale pricing for bulk orders. 
                  Volume discounts available. MOQ starting from 1000 units.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-3">
                  🚚 EU Distribution
                </h3>
                <p className="text-white/70 mb-4">
                  Direct shipping to all EU countries. Fast delivery, 
                  customs handling included. Professional logistics.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 border border-[var(--brand)]/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Get Early Access</h2>
            <p className="text-white/70 mb-6">
              Be the first to know when our B2B services launch. 
              Get exclusive early-bird pricing and priority support.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[var(--brand)] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Notify Me
                </button>
              </div>
            </form>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-white/70">
              <p>📧 <a href="mailto:b2b@herbspot.fi" className="text-[var(--brand)] hover:underline">b2b@herbspot.fi</a></p>
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
  title: 'B2B Services - White-Label 510 Cartridges | HerbSpot.fi',
  description: 'Premium B2B services for 510 cartridges. White-label manufacturing, custom packaging, bulk pricing. Coming soon.',
  openGraph: {
    title: 'B2B Services - White-Label 510 Cartridges',
    description: 'Premium B2B services for 510 cartridges. White-label manufacturing, custom packaging, bulk pricing.',
    images: ['/og-b2b-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};
