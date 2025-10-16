import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductGrid } from "@/components/ProductGrid";

export default async function Page() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductGrid limit={6} />
      <section className="section">
        <div className="container card p-8 text-center">
          <h3 className="h2">Rakenna oma white-label brändisi</h3>
          <p className="lead mt-2">Premium-pakkaus, nopea EU-logistiikka ja B2B-hinnoittelu saatavilla.</p>
          <a href="/contact" className="btn btn-brand mt-6">Ota yhteyttä</a>
        </div>
      </section>
    </>
  );
}