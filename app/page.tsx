import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustSignals } from "@/components/TrustSignals";

export default async function Page() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <CategoryGrid />
      <ProductGrid limit={6} id="featured-blends" />
      
      {/* FAQ Section */}
      <section className="section bg-white/5">
        <div className="container max-w-4xl">
          <h2 className="h2 text-center mb-12 font-heading font-heading">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading font-heading">
                  What is a 510-compatible botanical device?
                </h3>
                <p className="text-white/80 font-body">
                  510 is the universal threading standard for botanical cartridges. We curate trusted 510-compatible devices from verified EU suppliers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading font-heading">
                  Do you sell THC products?
                </h3>
                <p className="text-white/80 font-body">
                  No. We are an authorised distributor of legal botanical wellness devices and accessories. All products comply with EU regulations.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading font-heading">
                  Why choose HerbSpot.fi?
                </h3>
                <p className="text-white/80 font-body">
                  We curate only premium botanical wellness devices from trusted EU suppliers. Authorised distributor with verified quality standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading font-heading">
                  Is usage legal in the EU?
                </h3>
                <p className="text-white/80 font-body">
                  Yes. All our curated products comply with EU regulations and are sourced from certified suppliers with proper documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA Section */}
      <section className="section">
        <div className="container card p-8 text-center">
          <h3 className="h2 font-heading font-heading">Distribution Partnerships</h3>
          <p className="lead mt-2 font-body">Join our network of authorised retailers. Premium packaging, fast EU logistics, and B2B pricing available.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/b2b" className="btn btn-brand">B2B Services</a>
            <a href="/contact" className="btn btn-ghost">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}