"use client";
import { useState, useEffect } from "react";

export function TrustSignals() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4">
      <div className="bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white">Turvallinen maksu</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/70">
          <span>🔒 SSL-suojattu</span>
          <span>•</span>
          <span>💳 3D Secure</span>
          <span>•</span>
          <span>🛡️ EU-toimitus</span>
        </div>
      </div>
    </div>
  );
}

export function SecurityBadges() {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className="text-green-400">🔒</span>
        <span>SSL-suojattu</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className="text-blue-400">🛡️</span>
        <span>3D Secure</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className="text-yellow-400">🚚</span>
        <span>EU-toimitus</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className="text-purple-400">↩️</span>
        <span>30pv palautus</span>
      </div>
    </div>
  );
}

export function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  if (timeLeft === 0) return null;

  return (
    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-center">
      <div className="text-sm font-medium text-red-400 mb-1">
        ⏰ Rajallinen tarjous!
      </div>
      <div className="text-lg font-bold text-white">
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </div>
      <div className="text-xs text-red-300">
        Tarjous päättyy pian!
      </div>
    </div>
  );
}

export function StockIndicator({ stock }: { stock: number }) {
  if (stock > 10) return null;

  return (
    <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-2 text-center">
      <div className="text-sm font-medium text-orange-400">
        ⚠️ Vain {stock} kpl jäljellä!
      </div>
    </div>
  );
}

export function CustomerReviews() {
  const reviews = [
    { name: "Mika K.", rating: 5, text: "Erinomainen laatu ja nopea toimitus!" },
    { name: "Anna L.", rating: 5, text: "Suosittelen lämpimästi, hyvä palvelu." },
    { name: "Jukka M.", rating: 5, text: "Nopea ja luotettava kauppa." }
  ];

  return (
    <div className="bg-white/5 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-3">Asiakkaiden arvostelut</h3>
      <div className="space-y-3">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-white/10 pb-3 last:border-b-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-yellow-400">
                {'★'.repeat(review.rating)}
              </div>
              <span className="text-sm font-medium text-white">{review.name}</span>
            </div>
            <p className="text-sm text-white/70">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center">
        <div className="text-2xl font-bold text-white">4.9</div>
        <div className="text-sm text-white/70">Keskiarvo 127 arvostelusta</div>
      </div>
    </div>
  );
}
