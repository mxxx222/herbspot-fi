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
          <h2 className="h2 text-center mb-12 font-heading">Usein Kysyttyä</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading">
                  Mitä ovat 510-yhteensopivat laitteet?
                </h3>
                <p className="text-white/80 font-body">
                  510 on yleismaailmallinen kierrestandardi kasviöljypatruunoille. Myymme vain laadukkaita, EU-sertifioituja laitteita luotettavilta toimittajilta.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading">
                  Onko käyttö laillista Suomessa?
                </h3>
                <p className="text-white/80 font-body">
                  Kyllä. Kaikki tuotteemme ovat täysin laillisia aromaterapeuttiseen käyttöön ja noudattavat Suomen ja EU:n lainsäädäntöä.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading">
                  Miksi valita HerbSpot.fi?
                </h3>
                <p className="text-white/80 font-body">
                  Tarjoamme vain premium-laatua luotettavilta EU-toimittajilta. Nopea toimitus, varma maksu ja erinomainen asiakaspalvelu suomeksi.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand)] mb-2 font-heading">
                  Kuinka nopeasti saan tilaukseni?
                </h3>
                <p className="text-white/80 font-body">
                  Toimitamme tilaukset 24 tunnin kuluessa Suomeen. Ilmainen toimitus yli 50€ tilauksiin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA Section */}
      <section className="section">
        <div className="container card p-8 text-center">
          <h3 className="h2 font-heading">Tukkumyynti Yrityksille</h3>
          <p className="lead mt-2 font-body">Liity jälleenmyyjäverkostoomme. Kilpailukykyinen hinnoittelu, nopea toimitus ja kattava tuotevalikoima.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/b2b" className="btn btn-brand">B2B-Palvelut</a>
            <a href="/contact" className="btn btn-ghost">Ota Yhteyttä</a>
          </div>
        </div>
      </section>
    </>
  );
}