import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductGrid } from "@/components/ProductGrid";

export default async function Page() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductGrid limit={6} />
      
      {/* FAQ Section */}
      <section className="section bg-white/5">
        <div className="container max-w-4xl">
          <h2 className="h2 text-center mb-12">Usein kysytyt kysymykset</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">
                  Mikä on 510-yhteensopiva kasvihöyrystin?
                </h3>
                <p className="text-white/80">
                  510 on yleisin kierrestandardi, johon kasvipatruunat liitetään. HerbSpotin akut ovat yhteensopivia kaikkien 510-kierteisten kasvipatruunoiden kanssa.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">
                  Myyttekö THC-tuotteita?
                </h3>
                <p className="text-white/80">
                  Emme. Kaikki tuotteemme ovat laillisia ja keskittyvät luonnolliseen hyvinvointiin. Patruunat ovat tyhjiä ja tarkoitettu omiin kasviseoksiin.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">
                  Miksi käyttää Calm Blend™ -seosta?
                </h3>
                <p className="text-white/80">
                  Calm Blend™ on tee- ja savukäyttöön soveltuva kasviseos. Ei sisällä nikotiinia eikä riippuvuutta aiheuttavia aineita.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2">
                  Onko käyttö laillista Suomessa?
                </h3>
                <p className="text-white/80">
                  Kyllä. Kaikki tuotteet ovat rekisteröityjen yrttien ja luonnonainesosien pohjalta koostettuja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA Section */}
      <section className="section">
        <div className="container card p-8 text-center">
          <h3 className="h2">Rakenna oma white-label brändisi</h3>
          <p className="lead mt-2">Premium-pakkaus, nopea EU-logistiikka ja B2B-hinnoittelu saatavilla.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/b2b" className="btn btn-brand">B2B Palvelut</a>
            <a href="/contact" className="btn btn-ghost">Ota yhteyttä</a>
          </div>
        </div>
      </section>
    </>
  );
}