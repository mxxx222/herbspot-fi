"use client";
import { useState } from "react";

interface AddToCartButtonProps {
  product: {
    handle: string;
    title: string;
    price: string;
  };
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false);
      // You could add toast notification here
    }, 1000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="bg-[var(--brand)] text-black px-3 py-1 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}
