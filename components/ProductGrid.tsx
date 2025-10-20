import { ProductCard } from "./ProductCard";
import { getFeatured } from "@/lib/data";

export async function ProductGrid({ limit = 6, id }: { limit?: number; id?: string }) {
  const products = await getFeatured(limit);
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="flex items-end justify-between mb-6">
          <h2 className="h2">Suosituimmat</h2>
          <a href="/shop" className="text-white/70 hover:text-white">Näytä kaikki →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p: any)=>(
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
