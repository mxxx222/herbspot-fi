"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // In a real app, you'd fetch the session details from your backend
      setSession({ id: sessionId, amount_total: 2490 });
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-[var(--brand)] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-white">Vahvistetaan maksua...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/5 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">✓</span>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">
          Maksu onnistui!
        </h1>
        
        <p className="text-white/70 mb-6">
          Kiitos ostoksestasi! Tilausvahvistus on lähetetty sähköpostiisi.
        </p>
        
        {session && (
          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-white/60 mb-1">Tilausnumero</p>
            <p className="font-mono text-[var(--brand)]">{session.id}</p>
          </div>
        )}
        
        <div className="space-y-3">
          <Link
            href="/shop"
            className="block w-full bg-[var(--brand)] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Jatka ostoksia
          </Link>
          
          <Link
            href="/account"
            className="block w-full bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            Tarkastele tilauksia
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-white/60">
            Onko kysymyksiä? Ota yhteyttä:{" "}
            <a href="mailto:info@herbspot.fi" className="text-[var(--brand)] hover:underline">
              info@herbspot.fi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
