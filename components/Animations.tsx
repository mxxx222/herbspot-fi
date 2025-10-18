'use client';

import { useState, useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 500, 
  className = '' 
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-${duration} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 500, 
  className = '' 
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-100%)';
      case 'right': return 'translateX(100%)';
      case 'up': return 'translateY(100%)';
      case 'down': return 'translateY(-100%)';
      default: return 'translateY(100%)';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-${duration} ${
        isVisible ? 'translate-x-0 translate-y-0' : getTransform()
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 500, 
  className = '' 
}: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-${duration} ${
        isVisible ? 'scale-100' : 'scale-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export function Stagger({ 
  children, 
  staggerDelay = 100, 
  className = '' 
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeIn key={index} delay={index * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
}

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export function HoverScale({ 
  children, 
  scale = 1.05, 
  className = '' 
}: HoverScaleProps) {
  return (
    <div 
      className={`transition-transform duration-200 hover:scale-${scale} ${className}`}
      style={{ transform: `scale(${scale})` }}
    >
      {children}
    </div>
  );
}

interface PulseProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export function Pulse({ 
  children, 
  duration = 1000, 
  className = '' 
}: PulseProps) {
  return (
    <div 
      className={`animate-pulse ${className}`}
      style={{ animationDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

interface BounceProps {
  children: React.ReactNode;
  className?: string;
}

export function Bounce({ children, className = '' }: BounceProps) {
  return (
    <div className={`animate-bounce ${className}`}>
      {children}
    </div>
  );
}

interface ShakeProps {
  children: React.ReactNode;
  className?: string;
}

export function Shake({ children, className = '' }: ShakeProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
}

interface RotateProps {
  children: React.ReactNode;
  angle?: number;
  duration?: number;
  className?: string;
}

export function Rotate({ 
  children, 
  angle = 360, 
  duration = 1000, 
  className = '' 
}: RotateProps) {
  return (
    <div 
      className={`transition-transform duration-${duration} hover:rotate-${angle} ${className}`}
    >
      {children}
    </div>
  );
}

interface GlowProps {
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}

export function Glow({ 
  children, 
  color = 'blue', 
  intensity = 2, 
  className = '' 
}: GlowProps) {
  return (
    <div 
      className={`transition-shadow duration-300 hover:shadow-${color}-${intensity}00 ${className}`}
    >
      {children}
    </div>
  );
}

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export function Typewriter({ 
  text, 
  speed = 100, 
  className = '' 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
}

export function CountUp({ 
  end, 
  duration = 2000, 
  className = '' 
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          if (next >= end) {
            clearInterval(timer);
            return end;
          }
          return next;
        });
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={className}>
      {Math.floor(count)}
    </div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
