import Link from "next/link";

export function Hero() {
  return (
    <section className="section bg-[radial-gradient(1100px_600px_at_50%_-200px,rgba(57,255,20,0.15),rgba(0,0,0,0))]">
      <div className="container text-center max-w-3xl">
        <h1 className="h1">
          Premium 510 Cartridges & <span className="text-[var(--brand)]">Aromatherapy</span> Devices
        </h1>
        <p className="lead mt-4">
          Lääkinnällinen teräs, pyrex ja keraaminen ydin. White-label & premium-pakkaus valmiina.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/shop" className="btn btn-brand">Osta nyt</Link>
          <Link href="#categories" className="btn btn-ghost">Selaa kategorioita</Link>
        </div>
      </div>
    </section>
  );
}
