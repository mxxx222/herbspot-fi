import { getAll } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default async function ShopPage() {
  const products = await getAll();
  return (
    <div className="section">
      <div className="container">
        <h1 className="h2 mb-6">Kaikki tuotteet</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p)=> <ProductCard key={p.handle} product={p} />)}
        </div>
      </div>
    </div>
  );
}
