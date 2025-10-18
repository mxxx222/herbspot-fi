import Link from "next/link";
import { getOne } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";
import { ProductStructuredData } from "@/components/StructuredData";

export default async function ProductPage({ params }: { params: { handle: string }}) {
  const p = await getOne(params.handle);
  if (!p) return <div className="section container"><p>Tuotetta ei löytynyt.</p></div>;
  
  const productData = {
    name: p.title,
    description: `Premium ${p.title} - Lääkinnällinen teräs, pyrex-lasi, keraaminen ydin. Raskasmetallitestattu.`,
    price: parseFloat(p.price.replace('€', '')),
    currency: 'EUR',
    image: p.image,
    availability: 'in_stock' as const,
    brand: 'HerbSpot',
    category: '510 Cartridges',
    sku: params.handle,
  };

  return (
    <>
      <SEOHead
        title={p.title}
        description={productData.description}
        keywords={['510-patruuna', 'aromatherapy', 'premium', 'lääkinnällinen teräs']}
        image={p.image}
        type="product"
        price={productData.price}
        currency={productData.currency}
        availability={productData.availability}
        brand={productData.brand}
        category={productData.category}
      />
      <ProductStructuredData product={productData} />
      
      <div className="section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="card overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-[420px] object-cover" />
          </div>
          <div>
            <h1 className="h2">{p.title}</h1>
            <p className="text-[var(--brand)] font-extrabold text-2xl mt-2">{p.price}</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Keraaminen kela / 510-kierre (mallista riippuen)</li>
              <li>• Lääkinnällinen teräs, pyrex-lasi</li>
              <li>• 0,5 ml / 1,0 ml vaihtoehdot</li>
            </ul>
            <div id="buy" className="mt-6 flex gap-3">
              <button className="btn btn-brand">Lisää koriin</button>
              <Link href="/shop" className="btn btn-ghost">Jatka ostoksia</Link>
            </div>
            <div className="mt-8">
              <p className="badge">Raskasmetallitestattu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
