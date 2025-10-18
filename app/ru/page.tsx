import { FadeIn, Stagger } from '@/components/Animations';
import { SEOHead } from '@/components/SEOHead';
import { ProductCard } from '@/components/ProductCard';
import { CategoryCard } from '@/components/CategoryCard';
import { fetchProducts, fetchCollections } from '@/lib/shopify';
import Link from 'next/link';

export default async function RussianHomePage() {
  const products = await fetchProducts();
  const categories = await fetchCollections();

  return (
    <>
      <SEOHead
        title="HerbSpot — Премиум 510 картриджи и ароматерапия"
        description="Премиум 510 картриджи, AIO устройства и аксессуары. Медицинская сталь, пирекс и керамическое ядро."
        keywords={['510 картриджи', 'ароматерапия', 'премиум', 'медицинская сталь']}
        type="website"
      />
      
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <FadeIn>
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/20 via-transparent to-blue-500/20" />
            <div className="container relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Премиум 510 картриджи и ароматерапия
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Медицинская сталь, пирекс и керамическое ядро. White-label и премиум упаковка готова.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ru/shop" className="btn btn-brand text-lg px-8 py-4">
                  Купить сейчас
                </Link>
                <Link href="#categories" className="btn btn-ghost text-lg px-8 py-4">
                  Просмотреть категории
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Categories Section */}
        <FadeIn delay={200}>
          <section id="categories" className="py-20">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Категории</h2>
                <Link href="/ru/shop" className="text-[var(--brand)] hover:text-white transition-colors">
                  Все товары →
                </Link>
              </div>
              
              <Stagger>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categories.map((category, index) => (
                    <FadeIn key={category.handle} delay={index * 100}>
                      <CategoryCard 
                        category={{
                          ...category,
                          title: category.title === '510-patruunat' ? '510 картриджи' :
                                 category.title === 'Laitteet (AIO/Dual)' ? 'Устройства (AIO/Dual)' :
                                 category.title === 'Tarvikkeet' ? 'Аксессуары' :
                                 category.title === 'Pakkaus' ? 'Упаковка' :
                                 category.title === 'Herbal / Dual-Blend' ? 'Травяные / Dual-Blend' :
                                 category.title
                        }}
                        href={`/ru/c/${category.handle}`}
                      />
                    </FadeIn>
                  ))}
                </div>
              </Stagger>
            </div>
          </section>
        </FadeIn>

        {/* Featured Products */}
        <FadeIn delay={400}>
          <section className="py-20 bg-white/5">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Популярные</h2>
                <Link href="/ru/shop" className="text-[var(--brand)] hover:text-white transition-colors">
                  Показать все →
                </Link>
              </div>
              
              <Stagger>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {products.slice(0, 8).map((product, index) => (
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
              </Stagger>
            </div>
          </section>
        </FadeIn>

        {/* B2B Section */}
        <FadeIn delay={600}>
          <section className="py-20">
            <div className="container text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Создайте свой white-label бренд
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Премиум упаковка, быстрая EU логистика и B2B ценообразование доступны.
              </p>
              <Link href="/ru/contact" className="btn btn-brand text-lg px-8 py-4">
                Связаться с нами
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
