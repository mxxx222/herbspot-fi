import Link from "next/link";

export function ProductCard({
  product,
}: { product: { handle: string; title: string; price: string; image: string; badge?: string; }}) {
  return (
    <div className="card overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
        {product.badge && (
          <span className="absolute top-3 left-3 badge">{product.badge}</span>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-semibold line-clamp-1">{product.title}</h4>
        <p className="text-[var(--brand)] font-bold mt-1">{product.price}</p>
        <div className="mt-3 flex gap-2">
          <Link href={`/p/${product.handle}`} className="btn btn-brand">Katso</Link>
          <Link href={`/p/${product.handle}#buy`} className="btn btn-ghost">Lisää</Link>
        </div>
      </div>
    </div>
  );
}