"use client";
import { CategoryCard } from "./CategoryCard";
import { StaggeredMotion } from "./MotionWrapper";

const wellnessPaths = [
  { 
    title: "Focus", 
    href: "/shop?tag=focus", 
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop", 
    badge: "Concentration",
    description: "Enhance focus and mental clarity",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    title: "Calm", 
    href: "/shop?tag=calm", 
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", 
    badge: "Relaxation",
    description: "Find your inner peace and tranquility",
    color: "from-green-500 to-emerald-600"
  },
  { 
    title: "Sleep", 
    href: "/shop?tag=sleep", 
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", 
    badge: "Rest",
    description: "Support better sleep and recovery",
    color: "from-purple-500 to-violet-600"
  },
  { 
    title: "Recovery", 
    href: "/shop?tag=recovery", 
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop", 
    badge: "Healing",
    description: "Support physical and mental recovery",
    color: "from-orange-500 to-red-600"
  },
];

const categories = [
  { title: "510 Cartridges", href: "/c/510-patruunat", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop", badge: "Premium" },
  { title: "Botanical Blends", href: "/c/yrttiblendit", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", badge: "Curated" },
  { title: "Wellness Packs", href: "/c/wellness-packs", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", badge: "Complete" },
  { title: "DIY Tools", href: "/c/diy-tarvikkeet", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop", badge: "Tools" },
  { title: "Accessories", href: "/c/laitteet", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop", badge: "Essential" },
];

export function CategoryGrid() {
  return (
    <section id="categories" className="section">
      <div className="container">
        {/* Wellness Paths Section */}
        <div className="mb-12">
          <div className="flex items-end justify-between mb-6">
            <h2 className="h2 font-heading font-heading">Wellness Paths</h2>
            <p className="text-white/60 font-body">Choose your wellness journey</p>
          </div>
          
          <StaggeredMotion 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.1}
          >
            {wellnessPaths.map((path) => (
              <div key={path.href} className="group cursor-pointer">
                <a href={path.href} className="block">
                  <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${path.color} p-6 text-white transition-transform group-hover:scale-105`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{path.description}</p>
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {path.badge}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </StaggeredMotion>
        </div>

        {/* Categories Section */}
        <div>
          <div className="flex items-end justify-between mb-6">
            <h2 className="h2 font-heading font-heading">Product Categories</h2>
            <a href="/shop" className="text-white/70 hover:text-white font-body">Browse All →</a>
          </div>
          
          <StaggeredMotion 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.1}
          >
            {categories.map((c) => (
              <CategoryCard key={c.href} {...c} />
            ))}
          </StaggeredMotion>
        </div>
      </div>
    </section>
  );
}
