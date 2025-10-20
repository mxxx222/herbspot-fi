import Link from "next/link";
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";

interface ProductCardProps {
  product: {
    handle: string;
    title: string;
    price: string;
    image: string;
    badge?: string;
    benefits?: string[];
    brand?: {
      name: string;
      country: string;
    };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
             <div className="aspect-[4/3] bg-white/5 relative">
               <Image 
                 src={product.image} 
                 alt={product.title} 
                 fill
                 className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-[var(--brand)] text-black px-2 py-1 rounded-full text-xs font-bold">
              {product.badge}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
        
        {/* Brand Information */}
        {product.brand && (
          <div className="mb-2">
            <span className="text-sm text-white/60">
              {product.brand.name} • {product.brand.country}
            </span>
            <div className="text-xs text-white/50 mt-1">
              Imported & distributed by HerbSpot.fi
            </div>
          </div>
        )}
        
        {/* Benefit Tags */}
        {product.benefits && product.benefits.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.benefits.map((benefit, index) => (
              <span 
                key={index}
                className="bg-[var(--brand)]/20 text-[var(--brand)] px-2 py-1 rounded-full text-xs font-medium"
              >
                {benefit}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[var(--brand)]">{product.price}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}