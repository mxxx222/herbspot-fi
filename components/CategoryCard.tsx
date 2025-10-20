import Link from "next/link";
import Image from "next/image";

export function CategoryCard({
  title,
  href,
  image,
  badge,
}: { title: string; href: string; image: string; badge?: string; }) {
  return (
    <Link href={href} className="card overflow-hidden group">
      <div className="aspect-[4/3] bg-white/5 relative">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover opacity-90 group-hover:opacity-100 transition" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-[var(--brand)] text-black px-2 py-1 rounded-full text-xs font-bold">
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-black bg-[var(--brand)] px-3 py-1 rounded-full text-sm font-bold">Selaa</span>
      </div>
    </Link>
  );
}
