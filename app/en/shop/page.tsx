import { ProductGrid } from '@/components/ProductGrid';
import { SearchAndFilter } from '@/components/SearchAndFilter';

export default function ShopPageEN() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-white/70 text-lg">
            Premium 510 cartridges & aromatherapy devices
          </p>
        </div>
        
        <SearchAndFilter />
        <ProductGrid />
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Shop - Premium 510 Cartridges | HerbSpot.fi',
  description: 'Browse our premium collection of 510 cartridges, devices, and accessories. Medical-grade steel, pyrex glass, ceramic core.',
  openGraph: {
    title: 'Shop - Premium 510 Cartridges',
    description: 'Browse our premium collection of 510 cartridges, devices, and accessories.',
    images: ['/og-shop-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};
