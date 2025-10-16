type P = { handle:string; title:string; price:string; image:string; badge?:string; category:string; };

const MOCK: P[] = [
  { handle:"m4s-05", title:"Stainless 510 Cartridge M4s (0.5 ml)", price:"€3.90", image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop", badge:"Uutuus", category:"510-patruunat" },
  { handle:"m4s-10", title:"Stainless 510 Cartridge M4s (1.0 ml)", price:"€4.20", image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"ccell-cer-05", title:"Ccell-tyyli Keraaminen (0.5 ml)", price:"€4.60", image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"easy-press-05", title:"Easy-Press Snap-Cap (0.5 ml)", price:"€4.10", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"duo-glasspod", title:"Duo GlassPod AIO", price:"€24.90", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", badge:"AIO", category:"laitteet" },
  { handle:"m3-plus", title:"CCELL M3 Plus 510-akku", price:"€14.90", image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop", category:"laitteet" },
  { handle:"charger-usb", title:"510 USB Laturi", price:"€6.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"tarvikkeet" },
  { handle:"slide-box", title:"Liukukansi-laatikko (CR)", price:"€1.20", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"pakkaus" },
];

export async function getFeatured(n=6){ return MOCK.slice(0,n); }
export async function getAll(){ return MOCK; }
export async function getByCategory(slug:string){ 
  const map: Record<string,string> = {
    "510-patruunat":"510-patruunat",
    "laitteet":"laitteet",
    "tarvikkeet":"tarvikkeet",
    "pakkaus":"pakkaus",
    "herbal":"herbal",
  };
  return MOCK.filter(p=>p.category===map[slug]);
}
export async function getOne(handle:string){ return MOCK.find(p=>p.handle===handle) || null; }
