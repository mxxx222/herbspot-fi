import { getByCategory, getAllCategories } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    handle: category,
  }));
}

export async function generateMetadata({ params }: { params: { handle: string }}) {
  const categoryName = decodeURIComponent(params.handle);
  return {
    title: `${categoryName} | HerbSpot`,
    description: `Selaa ${categoryName} tuotteita HerbSpot:sta. Premium 510-patruunat, AIO-laitteet ja tarvikkeet luonnolliseen hyvinvointiin.`,
  };
}

export default async function CategoryPage({ params }: { params: { handle: string }}) {
  const products = await getByCategory(params.handle);
  const categoryName = decodeURIComponent(params.handle);
  
  const breadcrumbItems = [
    { name: "Etusivu", url: "https://herbspot.fi" },
    { name: "Tuotteet", url: "https://herbspot.fi/shop" },
    { name: categoryName, url: `https://herbspot.fi/c/${params.handle}` }
  ];

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <div className="section">
        <div className="container">
          <h1 className="h2 font-heading font-heading mb-6">Kategoria: {categoryName}</h1>
          {products.length === 0 ? (
            <p className="text-white/70 font-body">Ei tuotteita.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p: any)=> <ProductCard key={p.handle} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
