import { FadeIn } from '@/components/Animations';
import { SEOHead } from '@/components/SEOHead';
import { ProductCard } from '@/components/ProductCard';
import { SearchAndFilter } from '@/components/SearchAndFilter';
import { fetchProducts } from '@/lib/shopify';

export default async function RussianShopPage() {
  const products = await fetchProducts();

  return (
    <>
      <SEOHead
        title="Магазин - HerbSpot.ru"
        description="Премиум 510 картриджи, AIO устройства и аксессуары для ароматерапии."
        keywords={['510 картриджи', 'ароматерапия', 'устройства', 'аксессуары']}
        type="website"
      />
      
      <div className="min-h-screen bg-black">
        <div className="container py-16">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Магазин <span className="text-[var(--brand)]">HerbSpot</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Премиум 510 картриджи, AIO устройства и аксессуары для ароматерапии
              </p>
            </div>
          </FadeIn>

          {/* Search and Filter */}
          <FadeIn delay={200}>
            <div className="mb-12">
              <SearchAndFilter />
            </div>
          </FadeIn>

          {/* Products Grid */}
          <FadeIn delay={400}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <FadeIn key={product.handle} delay={index * 100}>
                  <ProductCard 
                    product={{
                      ...product,
                      title: product.title === 'Pre‑Roll Cones — 98 mm Hemp 26 mm filter' ? 'Pre‑Roll Конусы — 98 мм Hemp 26 мм фильтр' :
                             product.title === 'Pre‑Roll Cones — 109 mm Slow Burn 26 mm filter' ? 'Pre‑Roll Конусы — 109 мм Slow Burn 26 мм фильтр' :
                             product.title === 'Pre‑Roll Cones — 70 mm Slow Burn 26 mm filter' ? 'Pre‑Roll Конусы — 70 мм Slow Burn 26 мм фильтр' :
                             product.title === 'Pre‑Roll Cones — 84 mm Ultra‑thin 40 mm long filter' ? 'Pre‑Roll Конусы — 84 мм Ultra‑thin 40 мм длинный фильтр' :
                             product.title === 'Pre‑Roll Cones — 109 mm Slow Burn 40 mm long filter' ? 'Pre‑Roll Конусы — 109 мм Slow Burn 40 мм длинный фильтр' :
                             product.title === 'Pre‑Roll Cones — 98 mm Slow Burn 26 mm filter' ? 'Pre‑Roll Конусы — 98 мм Slow Burn 26 мм фильтр' :
                             product.title
                    }}
                    href={`/ru/p/${product.handle}`}
                  />
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
