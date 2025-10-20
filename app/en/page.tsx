import { Hero } from '@/components/Hero';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { TrustSignals } from '@/components/TrustSignals';
import { RecommendationEngine } from '@/components/AIRecommendations';

export default function HomePageEN() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section bg-[radial-gradient(1100px_600px_at_50%_-200px,rgba(57,255,20,0.15),rgba(0,0,0,0))]">
        <div className="container text-center max-w-3xl">
          <h1 className="h1">Premium 510 Cartridges & <span className="text-[var(--brand)]">Aromatherapy</span> Devices</h1>
          <p className="lead mt-4">Medical-grade steel, pyrex glass and ceramic core. White-label & premium packaging ready.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a className="btn btn-brand" href="/en/shop">Shop Now</a>
            <a className="btn btn-ghost" href="#categories">Browse Categories</a>
          </div>
        </div>
      </section>
      
      <section id="categories" className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <h2 className="h2">Categories</h2>
            <a href="/en/shop" className="text-white/70 hover:text-white">All Products →</a>
          </div>
          <CategoryGrid />
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <h2 className="h2">Popular Products</h2>
            <a href="/en/shop" className="text-white/70 hover:text-white">Show All →</a>
          </div>
          <ProductGrid />
        </div>
      </section>
      
      <TrustSignals />
      <RecommendationEngine currentProduct={null} />
    </main>
  );
}

export const metadata = {
  title: 'Shop 510-Compatible Wellness Devices | HerbSpot Europe',
  description: 'Shop trusted 510-compatible wellness devices and botanical blends from verified EU suppliers. Authorised distributor of premium botanical wellness technology.',
  keywords: '510-compatible, botanical wellness, EU suppliers, wellness devices, premium quality, authorised distributor, Europe shipping',
  openGraph: {
    title: 'Shop 510-Compatible Wellness Devices | HerbSpot Europe',
    description: 'Shop trusted 510-compatible wellness devices and botanical blends from verified EU suppliers.',
    images: ['/og-image-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};
