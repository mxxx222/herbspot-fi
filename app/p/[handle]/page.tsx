import Link from "next/link";
import Image from "next/image";
import { getOne, getAllProducts } from "@/lib/data";
import { generateProductMetadata } from "@/lib/seo";
import { ProductStructuredData } from "@/components/StructuredData";

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product: any) => ({
    handle: product.handle,
  }));
}

export async function generateMetadata({ params }: { params: { handle: string }}) {
  const product = await getOne(params.handle);
  if (!product) {
    return {
      title: "Tuotetta ei löytynyt | HerbSpot",
      description: "Tuotetta ei löytynyt.",
    };
  }

  return generateProductMetadata({
    title: product.title,
    category: product.category || "510-patruunat",
    price: product.price,
    availability: "in stock",
    image: product.image,
    handle: params.handle,
  });
}

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
      <ProductStructuredData product={productData} />
      
      <div className="section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="card overflow-hidden">
            <Image 
              src={p.image} 
              alt={p.title} 
              width={600}
              height={420}
              className="w-full h-[420px] object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <div>
            <h1 className="h2 font-heading font-heading">{p.title}</h1>
            <p className="text-[var(--brand)] font-extrabold text-2xl mt-2">{p.price}</p>
            <ul className="mt-4 space-y-2 text-white/80 font-body">
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
