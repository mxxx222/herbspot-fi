"use client";
import Link from "next/link";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-wide">
          HERB<span className="text-[var(--brand)]">SPOT</span>
        </Link>
         <nav className="hidden md:flex items-center gap-6">
           <Link href="/shop" className="hover:text-[var(--brand)]">Kauppa</Link>
           <Link href="/c/510-patruunat" className="hover:text-[var(--brand)]">510-patruunat</Link>
           <Link href="/c/laitteet" className="hover:text-[var(--brand)]">Laitteet</Link>
           <Link href="/c/tarvikkeet" className="hover:text-[var(--brand)]">Tarvikkeet</Link>
           <Link href="/b2b" className="hover:text-[var(--brand)] bg-[var(--brand)]/10 px-3 py-1 rounded-full text-sm font-medium">
             B2B Service <span className="text-xs opacity-75">Coming Soon</span>
           </Link>
           <LanguageSelector />
         </nav>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="btn btn-ghost">Valikko</button>
        </div>
      </div>
       {open && (
         <div className="md:hidden border-t border-white/10 bg-black/90">
           <div className="container py-4 flex flex-col gap-3">
             <Link href="/shop" onClick={()=>setOpen(false)}>Kauppa</Link>
             <Link href="/c/510-patruunat" onClick={()=>setOpen(false)}>510-patruunat</Link>
             <Link href="/c/laitteet" onClick={()=>setOpen(false)}>Laitteet</Link>
             <Link href="/c/tarvikkeet" onClick={()=>setOpen(false)}>Tarvikkeet</Link>
             <Link href="/b2b" onClick={()=>setOpen(false)} className="bg-[var(--brand)]/10 px-3 py-1 rounded-full text-sm font-medium">
               B2B Service <span className="text-xs opacity-75">Coming Soon</span>
             </Link>
           </div>
         </div>
       )}
    </header>
  );
}
