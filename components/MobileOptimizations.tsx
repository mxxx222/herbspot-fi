"use client";
import { useState, useEffect } from "react";
import { useTouchGestures, useSwipeNavigation, usePullToRefresh } from '@/hooks/useTouchGestures';

export function TouchOptimizations() {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      console.log('Left swipe detected');
      // Handle left swipe (e.g., next product)
    }
    if (isRightSwipe) {
      console.log('Right swipe detected');
      // Handle right swipe (e.g., previous product)
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="touch-pan-x"
    >
      {/* Your content here */}
    </div>
  );
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-4 right-4 w-14 h-14 bg-[var(--brand)] text-black rounded-full shadow-lg z-50 flex items-center justify-center"
        aria-label="Avaa valikko"
      >
        <span className="text-xl">☰</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-black border-l border-white/10 p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Valikko</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            
            <nav className="space-y-4">
              <a href="/shop" className="block py-3 text-white hover:text-[var(--brand)] transition-colors">
                🛍️ Kauppa
              </a>
              <a href="/c/510-patruunat" className="block py-3 text-white hover:text-[var(--brand)] transition-colors">
                🔋 510-patruunat
              </a>
              <a href="/c/laitteet" className="block py-3 text-white hover:text-[var(--brand)] transition-colors">
                ⚡ Laitteet
              </a>
              <a href="/c/tarvikkeet" className="block py-3 text-white hover:text-[var(--brand)] transition-colors">
                🔧 Tarvikkeet
              </a>
              <a href="/b2b" className="block py-3 text-white hover:text-[var(--brand)] transition-colors">
                🏢 B2B Service
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export function MobileProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden touch-manipulation">
      <div className="aspect-square relative">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <span className="text-white/40">Ei kuvaa</span>
          </div>
        )}
        {product.badge && (
          <div className="absolute top-2 left-2 bg-[var(--brand)] text-black px-2 py-1 rounded-full text-xs font-bold">
            {product.badge}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2">
          {product.title}
        </h3>
        <div className="text-[var(--brand)] font-bold text-lg mb-3">
          {product.price}
        </div>
        
        <button className="w-full bg-[var(--brand)] text-black py-3 rounded-lg font-semibold text-sm touch-manipulation active:scale-95 transition-transform">
          Lisää koriin
        </button>
      </div>
    </div>
  );
}

export function MobileCheckout() {
  const [step, setStep] = useState(1);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 p-4 md:hidden">
      <div className="flex gap-3">
        <button className="flex-1 bg-white/10 text-white py-3 rounded-lg font-semibold">
          Lisää koriin
        </button>
        <button className="flex-1 bg-[var(--brand)] text-black py-3 rounded-lg font-semibold">
          Osta nyt
        </button>
      </div>
    </div>
  );
}
