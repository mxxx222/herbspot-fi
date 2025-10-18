import { FadeIn } from '@/components/Animations';
import { SEOHead } from '@/components/SEOHead';

export default function RussianB2BPage() {
  return (
    <>
      <SEOHead
        title="B2B Услуги - HerbSpot.ru"
        description="B2B решения для white-label брендов. Премиум упаковка и быстрая EU логистика."
        keywords={['B2B', 'white-label', 'оптовая торговля', 'логистика']}
        type="website"
      />
      
      <div className="min-h-screen bg-black">
        <div className="container py-16">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                B2B <span className="text-[var(--brand)]">Услуги</span>
              </h1>
              
              <div className="bg-white/5 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Скоро запуск!
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Мы работаем над созданием лучших B2B решений для white-label брендов в сфере ароматерапии.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Что мы предлагаем:</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                        Премиум white-label упаковка
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                        Быстрая EU логистика
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                        Конкурентные B2B цены
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                        Персональная поддержка
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                        Гибкие условия сотрудничества
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Свяжитесь с нами:</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <p className="text-white">b2b@herbspot.ru</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Телефон</p>
                        <p className="text-white">+7 (XXX) XXX-XX-XX</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Telegram</p>
                        <p className="text-white">@herbspot_b2b</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--brand)]/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Хотите быть первыми?
                  </h3>
                  <p className="text-white/80 mb-4">
                    Оставьте свой email, и мы уведомим вас о запуске B2B платформы.
                  </p>
                  <div className="flex max-w-md mx-auto gap-4">
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[var(--brand)]"
                    />
                    <button className="px-6 py-3 bg-[var(--brand)] text-black rounded-lg font-semibold hover:bg-[var(--brand)]/80 transition-colors">
                      Подписаться
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
