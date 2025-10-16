import Link from "next/link";

export function CategoryCard({
  title,
  href,
  image,
}: { title: string; href: string; image: string; }) {
  return (
    <Link href={href} className="card overflow-hidden group">
      <div className="aspect-[4/3] bg-white/5">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
      </div>
      <div className="p-5 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-black bg-[var(--brand)] px-3 py-1 rounded-full text-sm font-bold">Selaa</span>
      </div>
    </Link>
  );
}
