"use client";
import { useState } from "react";

export function SearchAndFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");

  return (
    <div className="bg-white/5 rounded-lg p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Hae tuotteita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="md:w-48">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
          >
            <option value="all">Kaikki kategoriat</option>
            <option value="510-patruunat">510-patruunat</option>
            <option value="laitteet">Laitteet</option>
            <option value="tarvikkeet">Tarvikkeet</option>
            <option value="kosmetiikka">Kosmetiikka</option>
            <option value="aromataterapia">Aromaterapia</option>
          </select>
        </div>

        {/* Sort */}
        <div className="md:w-48">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
          >
            <option value="name">Nimi A-Z</option>
            <option value="price-low">Hinta (alhainen)</option>
            <option value="price-high">Hinta (korkea)</option>
            <option value="newest">Uusimmat</option>
            <option value="popular">Suosituimmat</option>
          </select>
        </div>
      </div>

      {/* Active Filters */}
      {(searchTerm || filterCategory !== "all") && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchTerm && (
            <span className="bg-[var(--brand)]/20 text-[var(--brand)] px-3 py-1 rounded-full text-sm">
              Haku: "{searchTerm}"
            </span>
          )}
          {filterCategory !== "all" && (
            <span className="bg-[var(--brand)]/20 text-[var(--brand)] px-3 py-1 rounded-full text-sm">
              Kategoria: {filterCategory}
            </span>
          )}
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterCategory("all");
              setSortBy("name");
            }}
            className="text-white/60 hover:text-white text-sm underline"
          >
            Tyhjennä suodattimet
          </button>
        </div>
      )}
    </div>
  );
}
