"use client";
import { useState } from "react";
import Link from "next/link";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm hover:text-[var(--brand)] transition-colors"
      >
        <span>🇫🇮</span>
        <span>FI</span>
        <span className="text-xs">▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/90 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
          <div className="py-2 min-w-[140px]">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>🇫🇮</span>
              <span>Suomi</span>
            </Link>
            <Link
              href="/en"
              className="flex items-center gap-2 px-4 py-2 hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>🇬🇧</span>
              <span>English</span>
            </Link>
            <Link
              href="/ru"
              className="flex items-center gap-2 px-4 py-2 hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>🇷🇺</span>
              <span>Русский</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
