"use client";
import Link from "next/link";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { usePathname } from "next/navigation";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const categories = [
    {
      name: 'Tuotteet',
      href: '/shop',
      items: [
        { name: 'Kaikki Tuotteet', href: '/shop' },
        { name: '510-Laitteet', href: '/c/510-patruunat' },
        { name: 'Aromitarvikkeet', href: '/c/yrttiblendit' },
        { name: 'Aloituspaketit', href: '/c/wellness-packs' },
        { name: 'DIY-Tarvikkeet', href: '/c/diy-tarvikkeet' },
        { name: 'Lisävarusteet', href: '/c/tarvikkeet' },
        { name: 'Pakkausmateriaalit', href: '/c/pakkaus' }
      ]
    },
    {
      name: 'Käyttökohteet',
      href: '/wellness',
      items: [
        { name: 'Keskittyminen', href: '/shop?tag=focus', highlight: pathname.includes('focus') },
        { name: 'Uni & Lepo', href: '/shop?tag=sleep', highlight: pathname.includes('sleep') },
        { name: 'Rentoutuminen', href: '/shop?tag=calm', highlight: pathname.includes('calm') },
        { name: 'Palautuminen', href: '/shop?tag=recovery', highlight: pathname.includes('recovery') }
      ]
    },
    {
      name: 'Oppaat',
      href: '/blog',
      items: [
        { name: 'Kaikki Artikkelit', href: '/blog' },
        { name: 'Käyttöoppaat', href: '/blog?category=opas' },
        { name: 'Huolto-ohjeet', href: '/blog?category=huolto' },
        { name: 'B2B-Info', href: '/blog?category=b2b' }
      ]
    },
    {
      name: 'Tuki',
      href: '/support',
      items: [
        { name: 'Ota Yhteyttä', href: '/contact' },
        { name: 'UKK', href: '/faq' },
        { name: 'Toimitus', href: '/shipping' },
        { name: 'Palautukset', href: '/returns' },
        { name: 'Tietosuoja', href: '/privacy' }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-wide">
          HERB<span className="text-[var(--brand)]">SPOT</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(category.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={category.href}
                className="hover:text-[var(--brand)] transition-colors flex items-center gap-1"
              >
                {category.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              {activeDropdown === category.name && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  <div className="py-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-white/10 hover:text-[var(--brand)] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Link 
            href="/b2b" 
            className="hover:text-[var(--brand)] bg-[var(--brand)]/10 px-3 py-1 rounded-full text-sm font-medium"
          >
            B2B Services <span className="text-xs opacity-75">Coming Soon</span>
          </Link>
          
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)} 
            className="btn btn-ghost"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm">
          <div className="container py-4">
            {categories.map((category) => (
              <div key={category.name} className="mb-4">
                <Link 
                  href={category.href} 
                  onClick={() => setOpen(false)}
                  className="block text-lg font-semibold text-white mb-2"
                >
                  {category.name}
                </Link>
                <div className="ml-4 space-y-1">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 text-white/80 hover:text-[var(--brand)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10">
              <Link 
                href="/b2b" 
                onClick={() => setOpen(false)}
                className="block bg-[var(--brand)]/10 px-3 py-2 rounded-lg text-sm font-medium text-white"
              >
                B2B Services <span className="text-xs opacity-75">Coming Soon</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}