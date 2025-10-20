import Link from "next/link";

export function Hero() {
  return (
    <section className="section bg-[radial-gradient(1100px_600px_at_50%_-200px,rgba(57,255,20,0.15),rgba(0,0,0,0))]">
      <div className="container text-center max-w-4xl">
        <h1 className="h1">
          Luonnollinen tapa hidastaa – HerbSpot yhdistää kasvit, rituaalit ja <span className="text-[var(--brand)]">älykkäät välineet</span>
        </h1>
        <p className="lead mt-4">
          510-yhteensopivat osat, kaksikäyttöyrtit ja DIY-paketit rentoutumiseen. Toimitus Suomesta, nopeasti.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/shop" className="btn btn-brand">Osta nyt</Link>
          <Link href="/c/wellness-packs" className="btn btn-ghost">Testaa Calm Pack™</Link>
          <Link href="#categories" className="btn btn-ghost">Selaa kategorioita</Link>
        </div>
      </div>
    </section>
  );
}
