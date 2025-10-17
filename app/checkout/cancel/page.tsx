"use client";
import Link from "next/link";

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/5 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">⚠</span>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">
          Maksu peruutettu
        </h1>
        
        <p className="text-white/70 mb-6">
          Maksu on peruutettu. Voit jatkaa ostoksia tai yrittää maksua uudelleen.
        </p>
        
        <div className="space-y-3">
          <Link
            href="/shop"
            className="block w-full bg-[var(--brand)] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Jatka ostoksia
          </Link>
          
          <Link
            href="/cart"
            className="block w-full bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            Tarkastele ostoskorin
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-white/60">
            Tarvitsetko apua? Ota yhteyttä:{" "}
            <a href="mailto:info@herbspot.fi" className="text-[var(--brand)] hover:underline">
              info@herbspot.fi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
