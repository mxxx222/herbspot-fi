import { getByCategory } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default async function CategoryPage({ params }: { params: { handle: string }}) {
  const products = await getByCategory(params.handle);
  return (
    <div className="section">
      <div className="container">
        <h1 className="h2 mb-6">Kategoria: {decodeURIComponent(params.handle)}</h1>
        {products.length === 0 ? (
          <p className="text-white/70">Ei tuotteita.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p: any)=> <ProductCard key={p.handle} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
