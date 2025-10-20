import Image from "next/image";

import { useTouchGestures, useSwipeNavigation } from '@/hooks/useTouchGestures';
import { useState, useEffect } from 'react';

interface SwipeableProduct {
  id: string;
  title: string;
  image: string;
  price: string;
  description: string;
}

interface MobileSwipeNavigationProps {
  products: SwipeableProduct[];
  onProductChange?: (product: SwipeableProduct) => void;
  onAddToCart?: (product: SwipeableProduct) => void;
}

export function MobileSwipeNavigation({ 
  products, 
  onProductChange, 
  onAddToCart 
}: MobileSwipeNavigationProps) {
  const { currentIndex, isTransitioning, goToNext, goToPrevious } = useSwipeNavigation();
  const [isVisible, setIsVisible] = useState(false);

  // Touch gestures
  const swipeRef = useTouchGestures({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
    onTap: () => {
      // Handle product tap
      console.log('Product tapped');
    },
    onDoubleTap: () => {
      // Add to cart on double tap
      onAddToCart?.(products[currentIndex]);
    }
  });

  // Update current product
  useEffect(() => {
    if (products[currentIndex]) {
      onProductChange?.(products[currentIndex]);
    }
  }, [currentIndex, products, onProductChange]);

  // Show/hide navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (products.length === 0) return null;

  const currentProduct = products[currentIndex];

  return (
    <div className="md:hidden">
      {/* Swipeable product area */}
      <div 
        ref={swipeRef}
        className="relative overflow-hidden bg-black/50 backdrop-blur-sm rounded-lg"
      >
        <div 
          className={`flex transition-transform duration-300 ease-out ${
            isTransitioning ? 'transform-gpu' : ''
          }`}
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${products.length * 100}%`
          }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / products.length}%` }}
            >
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{product.description}</p>
                  <div className="text-xl font-bold text-yellow-400">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe indicators */}
        <div className="absolute top-4 right-4 flex space-x-1">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white disabled:opacity-30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          disabled={currentIndex === products.length - 1}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white disabled:opacity-30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile action buttons */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onAddToCart?.(currentProduct)}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold active:scale-95 transition-transform"
        >
          Lisää koriin
        </button>
        <button
          onClick={() => window.location.href = `/p/${currentProduct.id}`}
          className="flex-1 bg-white/10 text-white py-3 rounded-lg font-semibold active:scale-95 transition-transform"
        >
          Katso tarkemmin
        </button>
      </div>

      {/* Swipe instructions */}
      <div className="mt-4 text-center text-white/60 text-sm">
        <p>Pyyhkäise vasemmalle/oikealle vaihtaaksesi tuotetta</p>
        <p>Kaksoisnapauta lisätäksesi koriin</p>
      </div>
    </div>
  );
}

export function MobileProductGallery({ products }: { products: SwipeableProduct[] }) {
  const { currentIndex, goToIndex } = useSwipeNavigation();
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Thumbnail strip */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => goToIndex(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={64}
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="mt-4 relative">
        <Image
          src={products[currentIndex]?.image}
          alt={products[currentIndex]?.title}
          width={400}
          height={400}
          className="w-full aspect-square object-cover rounded-lg"
          onClick={() => setIsFullscreen(true)}
          priority
        />
        
        {/* Zoom button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </button>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <Image
            src={products[currentIndex]?.image}
            alt={products[currentIndex]?.title}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
            priority
          />
        </div>
      )}
    </div>
  );
}
