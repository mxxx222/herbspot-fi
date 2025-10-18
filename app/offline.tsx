'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (isOnline) {
      // Redirect to home when back online
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [isOnline, router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Offline Icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
          </svg>
        </div>

        {/* Status Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          {isOnline ? 'Yhteys palautettu!' : 'Ei internetyhteyttä'}
        </h1>
        
        <p className="text-white/80 mb-8">
          {isOnline 
            ? 'Palataan takaisin sivustolle...' 
            : 'Tarkista internetyhteytesi ja yritä uudelleen.'
          }
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          {!isOnline && (
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Yritä uudelleen
            </button>
          )}

          <button
            onClick={() => router.push('/')}
            className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            Etusivulle
          </button>
        </div>

        {/* Offline Features */}
        {!isOnline && (
          <div className="mt-12 text-left">
            <h2 className="text-lg font-semibold text-white mb-4">
              Offline-tilassa saatavilla:
            </h2>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tuotekatalogin selaus
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ostoskorin tarkastelu
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Yhteystietojen tarkastelu
              </li>
            </ul>
          </div>
        )}

        {/* Connection Status Indicator */}
        <div className="mt-8 flex items-center justify-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`} />
          <span className="text-sm text-white/60">
            {isOnline ? 'Yhteys aktiivinen' : 'Ei yhteyttä'}
          </span>
        </div>
      </div>
    </div>
  );
}
