'use client';

import { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'gray';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'border-blue-600',
    white: 'border-white',
    gray: 'border-gray-300'
  };

  return (
    <div 
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    />
  );
}

export function SkeletonLoader({ 
  className = '', 
  lines = 1 
}: { 
  className?: string; 
  lines?: number;
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded mb-2" />
      ))}
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden">
      <div className="aspect-square bg-gray-200 animate-pulse" />
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
        <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse" />
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}

export function PageLoader({ message = 'Ladataan...' }: { message?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <LoadingSpinner size="lg" color="white" />
        <p className="mt-4 text-white/80">{message}</p>
      </div>
    </div>
  );
}

export function ButtonLoader({ 
  isLoading, 
  children, 
  className = '',
  ...props 
}: {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <button 
      className={`relative ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="white" />
        </div>
      )}
      <span className={isLoading ? 'opacity-0' : ''}>
        {children}
      </span>
    </button>
  );
}

export function ImageLoader({ 
  src, 
  alt, 
  className = '',
  ...props 
}: {
  src: string;
  alt: string;
  className?: string;
  [key: string]: any;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <LoadingSpinner size="md" color="gray" />
        </div>
      )}
      {hasError ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Kuva ei latautunut</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          {...props}
        />
      )}
    </div>
  );
}

export function ProgressBar({ 
  progress, 
  className = '' 
}: { 
  progress: number; 
  className?: string;
}) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}

export function ShimmerEffect({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2" />
      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2" />
      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4" />
    </div>
  );
}

export function useLoadingState(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState<string | null>(null);

  const startLoading = () => {
    setIsLoading(true);
    setError(null);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const setErrorState = (errorMessage: string) => {
    setIsLoading(false);
    setError(errorMessage);
  };

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setErrorState
  };
}
