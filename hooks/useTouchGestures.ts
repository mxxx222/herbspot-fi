'use client';

import { useEffect, useRef, useState } from 'react';

interface TouchGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onTap?: () => void;
  onDoubleTap?: () => void;
  onPinch?: (scale: number) => void;
  threshold?: number;
  preventDefault?: boolean;
}

export function useTouchGestures(options: TouchGestureOptions) {
  const elementRef = useRef<HTMLElement>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [lastTap, setLastTap] = useState<number>(0);
  const [scale, setScale] = useState(1);
  const [lastDistance, setLastDistance] = useState(0);

  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onDoubleTap,
    onPinch,
    threshold = 50,
    preventDefault = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (preventDefault) e.preventDefault();
      
      const touch = e.touches[0];
      const now = Date.now();
      
      setTouchStart({
        x: touch.clientX,
        y: touch.clientY,
        time: now
      });

      // Double tap detection
      if (now - lastTap < 300) {
        onDoubleTap?.();
        setLastTap(0);
      } else {
        setLastTap(now);
      }

      // Pinch start
      if (e.touches.length === 2) {
        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        setLastDistance(distance);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (preventDefault) e.preventDefault();

      // Pinch gesture
      if (e.touches.length === 2 && lastDistance > 0) {
        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const newScale = scale * (distance / lastDistance);
        setScale(newScale);
        onPinch?.(newScale);
        setLastDistance(distance);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (preventDefault) e.preventDefault();

      if (!touchStart) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStart.x;
      const deltaY = touch.clientY - touchStart.y;
      const deltaTime = Date.now() - touchStart.time;

      // Reset scale
      setScale(1);
      setLastDistance(0);

      // Swipe detection
      if (deltaTime < 300) {
        if (Math.abs(deltaX) > threshold && Math.abs(deltaY) < threshold) {
          if (deltaX > 0) {
            onSwipeRight?.();
          } else {
            onSwipeLeft?.();
          }
        } else if (Math.abs(deltaY) > threshold && Math.abs(deltaX) < threshold) {
          if (deltaY > 0) {
            onSwipeDown?.();
          } else {
            onSwipeUp?.();
          }
        } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
          // Tap detection
          onTap?.();
        }
      }

      setTouchStart(null);
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: !preventDefault });
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventDefault });
    element.addEventListener('touchend', handleTouchEnd, { passive: !preventDefault });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStart, lastTap, scale, lastDistance, threshold, preventDefault, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, onDoubleTap, onPinch]);

  return elementRef;
}

export function useSwipeNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => Math.max(0, prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToIndex = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return {
    currentIndex,
    isTransitioning,
    goToNext,
    goToPrevious,
    goToIndex
  };
}

export function usePullToRefresh(onRefresh: () => Promise<void>) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startY = 0;
    let currentY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
        setIsPulling(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling) return;

      currentY = e.touches[0].clientY;
      const distance = Math.max(0, currentY - startY);
      
      if (distance > 0) {
        e.preventDefault();
        setPullDistance(Math.min(distance, 100));
      }
    };

    const handleTouchEnd = async () => {
      if (!isPulling) return;

      if (pullDistance > 60) {
        setIsRefreshing(true);
        await onRefresh();
        setIsRefreshing(false);
      }

      setPullDistance(0);
      setIsPulling(false);
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: false });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPulling, pullDistance, onRefresh]);

  return {
    elementRef,
    isRefreshing,
    pullDistance,
    isPulling
  };
}
