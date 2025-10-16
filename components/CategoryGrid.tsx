import { CategoryCard } from "./CategoryCard";

const categories = [
  { title: "510-patruunat", href: "/c/510-patruunat", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop" },
  { title: "Laitteet (AIO/Dual)", href: "/c/laitteet", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop" },
  { title: "Tarvikkeet", href: "/c/tarvikkeet", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" },
  { title: "Pakkaus", href: "/c/pakkaus", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" },
  { title: "Herbal / Dual-Blend", href: "/c/herbal", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=300&fit=crop" },
];

export function CategoryGrid() {
  return (
    <section id="categories" className="section">
      <div className="container">
        <div className="flex items-end justify-between mb-6">
          <h2 className="h2">Kategoriat</h2>
          <a href="/shop" className="text-white/70 hover:text-white">Kaikki tuotteet →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c)=>(
            <CategoryCard key={c.href} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
