import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">HerbSpot</h3>
            <div className="space-y-2 text-sm text-white/60">
              <Link href="/about" className="block hover:text-[var(--brand)] transition-colors">Tietoa meistä</Link>
              <Link href="/contact" className="block hover:text-[var(--brand)] transition-colors">Yhteystiedot</Link>
              <Link href="/careers" className="block hover:text-[var(--brand)] transition-colors">Työpaikat</Link>
            </div>
          </div>

          {/* Sustainability */}
          <div>
            <h3 className="font-semibold text-white mb-4">Sustainability</h3>
            <div className="space-y-2 text-sm text-white/60">
              <Link href="/sustainability" className="block hover:text-[var(--brand)] transition-colors">Kestävyys</Link>
              <Link href="/ingredients" className="block hover:text-[var(--brand)] transition-colors">Ainesosat</Link>
              <Link href="/certifications" className="block hover:text-[var(--brand)] transition-colors">Sertifikaatit</Link>
              <Link href="/science" className="block hover:text-[var(--brand)] transition-colors">Tiede</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Tuki</h3>
            <div className="space-y-2 text-sm text-white/60">
              <Link href="/faq" className="block hover:text-[var(--brand)] transition-colors">FAQ</Link>
              <Link href="/shipping" className="block hover:text-[var(--brand)] transition-colors">Toimitus</Link>
              <Link href="/returns" className="block hover:text-[var(--brand)] transition-colors">Palautukset</Link>
              <Link href="/warranty" className="block hover:text-[var(--brand)] transition-colors">Takuu</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Oikeudellinen</h3>
            <div className="space-y-2 text-sm text-white/60">
              <Link href="/privacy" className="block hover:text-[var(--brand)] transition-colors">Tietosuoja</Link>
              <Link href="/terms" className="block hover:text-[var(--brand)] transition-colors">Käyttöehdot</Link>
              <Link href="/cookies" className="block hover:text-[var(--brand)] transition-colors">Evästeet</Link>
              <Link href="/gdpr" className="block hover:text-[var(--brand)] transition-colors">GDPR</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} HerbSpot Oy • Secure Checkout • EU Shipping
          </p>
          <div className="flex items-center gap-3">
            <span className="badge">EU-toimitus</span>
            <span className="badge">30 pv palautus</span>
            <span className="badge">3-D Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
