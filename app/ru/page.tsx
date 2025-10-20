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
        title="Магазин 510-совместимых устройств для велнеса | HerbSpot Европа"
        description="Магазин проверенных 510-совместимых устройств для велнеса и ботанических смесей от проверенных поставщиков ЕС. Авторизованный дистрибьютор премиальных технологий ботанического велнеса."
        keywords={['510-совместимые', 'ботанический велнес', 'поставщики ЕС', 'устройства велнеса', 'премиум качество', 'авторизованный дистрибьютор', 'доставка по Европе']}
        type="website"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <FadeIn>
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/20 via-transparent to-blue-500/20"></div>
            <div className="container relative z-10 text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-[var(--brand)] bg-clip-text text-transparent">
                HerbSpot
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Премиум 510 картриджи и устройства для ароматерапии
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ru/shop"
                  className="px-8 py-4 bg-[var(--brand)] text-black rounded-lg font-semibold hover:bg-[var(--brand)]/80 transition-colors"
                >
                  Магазин
                </Link>
                <Link
                  href="/ru/b2b"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  B2B Услуги
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Categories */}
        <FadeIn delay={200}>
          <section className="py-20">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Категории</h2>
                <Link href="/ru/shop" className="text-[var(--brand)] hover:text-white transition-colors">
                  Все товары →
                </Link>
              </div>
              
              <Stagger>
                {categories.map((category: any, index: number) => (
                    <FadeIn key={category.handle} delay={index * 100}>
                      <CategoryCard 
                        title={category.title === '510-patruunat' ? '510 картриджи' :
                               category.title === 'Laitteet (AIO/Dual)' ? 'Устройства (AIO/Dual)' :
                               category.title === 'Tarvikkeet' ? 'Аксессуары' : category.title}
                        href={`/ru/c/${category.handle}`}
                        image={category.image || '/placeholder-category.jpg'}
                      />
                    </FadeIn>
                  ))}
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
                {products.products.slice(0, 6).map((product: any, index: number) => (
                    <FadeIn key={product.handle} delay={index * 100}>
                      <ProductCard product={product} />
                    </FadeIn>
                  ))}
              </Stagger>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={600}>
          <section className="py-20">
            <div className="container text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Готовы начать?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Откройте для себя мир премиум ароматерапии с HerbSpot
              </p>
              <Link
                href="/ru/shop"
                className="inline-block px-8 py-4 bg-[var(--brand)] text-black rounded-lg font-semibold hover:bg-[var(--brand)]/80 transition-colors"
              >
                Начать покупки
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}