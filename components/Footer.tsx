export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 text-sm text-white/60 flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-between">
        <p>© {new Date().getFullYear()} HerbSpot Oy • Secure Checkout • EU Shipping</p>
        <div className="flex items-center gap-3">
          <span className="badge">EU-toimitus</span>
          <span className="badge">30 pv palautus</span>
          <span className="badge">3-D Secure</span>
        </div>
      </div>
    </footer>
  );
}
