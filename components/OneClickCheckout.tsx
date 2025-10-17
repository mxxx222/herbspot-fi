"use client";
import { useState } from "react";

export function OneClickCheckout() {
  const [isLoading, setIsLoading] = useState(false);

  const handleApplePay = async () => {
    setIsLoading(true);
    // Simulate Apple Pay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Apple Pay checkout (mock)");
  };

  const handleGooglePay = async () => {
    setIsLoading(true);
    // Simulate Google Pay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Google Pay checkout (mock)");
  };

  const handleShopPay = async () => {
    setIsLoading(true);
    // Simulate Shop Pay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Shop Pay checkout (mock)");
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white mb-4">Pikamaksu</h3>
      
      <button
        onClick={handleApplePay}
        disabled={isLoading}
        className="w-full bg-black text-white rounded-lg p-3 flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        <span className="text-xl">🍎</span>
        <span>Apple Pay</span>
        {isLoading && <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>}
      </button>

      <button
        onClick={handleGooglePay}
        disabled={isLoading}
        className="w-full bg-blue-600 text-white rounded-lg p-3 flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        <span className="text-xl">G</span>
        <span>Google Pay</span>
        {isLoading && <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>}
      </button>

      <button
        onClick={handleShopPay}
        disabled={isLoading}
        className="w-full bg-green-600 text-white rounded-lg p-3 flex items-center justify-center gap-3 hover:bg-green-700 transition-colors disabled:opacity-50"
      >
        <span className="text-xl">🛍️</span>
        <span>Shop Pay</span>
        {isLoading && <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>}
      </button>

      <div className="text-center text-sm text-white/70">
        tai
      </div>

      <button className="w-full bg-[var(--brand)] text-black rounded-lg p-3 font-semibold hover:opacity-90 transition-opacity">
        Maksu kortilla
      </button>
    </div>
  );
}

export function ExpressCheckout({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleExpressCheckout = async () => {
    setIsLoading(true);
    // Simulate express checkout
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert(`Express checkout for product ${productId} (mock)`);
  };

  return (
    <button
      onClick={handleExpressCheckout}
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-[var(--brand)] to-green-400 text-black rounded-lg p-4 font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <>
          <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full"></div>
          <span>Käsitellään...</span>
        </>
      ) : (
        <>
          <span>⚡</span>
          <span>Osta nyt - 1 klikkaus</span>
        </>
      )}
    </button>
  );
}
