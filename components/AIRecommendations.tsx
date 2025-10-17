"use client";
import { useState, useEffect } from "react";

interface Recommendation {
  id: string;
  title: string;
  price: string;
  image: string;
  reason: string;
  confidence: number;
}

export function RecommendationEngine({ currentProduct, userId }: { currentProduct?: any, userId?: string }) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI recommendation engine
    const fetchRecommendations = async () => {
      setIsLoading(true);
      
      // Mock AI recommendations based on current product
      const mockRecommendations: Recommendation[] = [
        {
          id: "1",
          title: "CCELL M3 Plus 510-akku",
          price: "€14.90",
          image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",
          reason: "Asiakkaat jotka ostivat tämän ostivat myös",
          confidence: 0.85
        },
        {
          id: "2", 
          title: "510 USB Laturi",
          price: "€6.90",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
          reason: "Täydellinen yhdistelmä",
          confidence: 0.92
        },
        {
          id: "3",
          title: "Stainless 510-patruuna M4s (1.0 ml)",
          price: "€4.20", 
          image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
          reason: "Suosittu valinta",
          confidence: 0.78
        }
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setRecommendations(mockRecommendations);
      setIsLoading(false);
    };

    fetchRecommendations();
  }, [currentProduct, userId]);

  if (isLoading) {
    return (
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🤖 AI-suositukset</h3>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-white/5 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        🤖 AI-suositukset
        <span className="text-sm text-white/60 ml-2">(85% tarkkuus)</span>
      </h3>
      
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="flex gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <img 
              src={rec.image} 
              alt={rec.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-medium text-white text-sm">{rec.title}</h4>
              <p className="text-[var(--brand)] font-bold text-sm">{rec.price}</p>
              <p className="text-xs text-white/60">{rec.reason}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[var(--brand)] rounded-full"
                    style={{ width: `${rec.confidence * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-white/60">{Math.round(rec.confidence * 100)}%</span>
              </div>
            </div>
            <button className="bg-[var(--brand)] text-black px-3 py-1 rounded text-xs font-semibold hover:opacity-90 transition-opacity">
              Lisää
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PersonalizedPricing({ userId }: { userId?: string }) {
  const [pricing, setPricing] = useState<{
    basePrice: number;
    discount: number;
    finalPrice: number;
    reason: string;
  } | null>(null);

  useEffect(() => {
    // Simulate AI pricing optimization
    const calculatePricing = async () => {
      // Mock user behavior analysis
      const userTier = userId ? "Gold" : "Bronze" as "Gold" | "Silver" | "Bronze";
      const basePrice = 24.90;
      
      let discount = 0;
      let reason = "";
      
      if (userTier === "Gold") {
        discount = 0.15;
        reason = "Kultajäsen - 15% alennus";
      } else if (userTier === "Silver") {
        discount = 0.10;
        reason = "Hopeajäsen - 10% alennus";
      } else {
        discount = 0.05;
        reason = "Uusi asiakas - 5% alennus";
      }
      
      const finalPrice = basePrice * (1 - discount);
      
      setPricing({
        basePrice,
        discount: discount * 100,
        finalPrice,
        reason
      });
    };

    calculatePricing();
  }, [userId]);

  if (!pricing) return null;

  return (
    <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 border border-[var(--brand)]/30 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🎯</span>
        <span className="font-semibold text-white">Henkilökohtainen hinta</span>
      </div>
      
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-bold text-[var(--brand)]">
          €{pricing.finalPrice.toFixed(2)}
        </span>
        <span className="text-sm text-white/60 line-through">
          €{pricing.basePrice.toFixed(2)}
        </span>
        <span className="text-sm text-green-400 font-semibold">
          -{pricing.discount}%
        </span>
      </div>
      
      <p className="text-xs text-white/70">{pricing.reason}</p>
    </div>
  );
}

export function SmartSearch({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    // Simulate AI-powered search suggestions
    const mockSuggestions = [
      "510 patruuna",
      "aromaterapia laite", 
      "keraaminen ydin",
      "pyrex lasi",
      "teräs patruuna"
    ].filter(s => s.toLowerCase().includes(query.toLowerCase()));

    setSuggestions(mockSuggestions);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Hae tuotteita AI:lla..."
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
        />
        <button
          onClick={() => onSearch(query)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        >
          🔍
        </button>
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-black/90 border border-white/20 rounded-lg shadow-xl z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setQuery(suggestion);
                onSearch(suggestion);
                setSuggestions([]);
              }}
              className="w-full text-left px-4 py-2 hover:bg-white/5 transition-colors text-white text-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
