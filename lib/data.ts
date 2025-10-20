import { fetchProducts, fetchProduct, fetchCollections } from './shopify';
import { unstable_cache } from 'next/cache';

// Cache products for 1 hour
const getCachedProducts = unstable_cache(
  async (limit: number) => {
    const { products } = await fetchProducts(limit);
    return products;
  },
  ['products'],
  { 
    tags: ['products'],
    revalidate: 3600 // 1 hour
  }
);

const getCachedProduct = unstable_cache(
  async (handle: string) => {
    return await fetchProduct(handle);
  },
  ['product'],
  { 
    tags: ['products'],
    revalidate: 3600 // 1 hour
  }
);

export async function getFeatured(n=6){ 
  const products = await getCachedProducts(n);
  return products;
}

export async function getAll(){ 
  const products = await getCachedProducts(50);
  return products;
}

export async function getAllProducts(){ 
  const products = await getCachedProducts(50);
  return products;
}

export async function getAllCategories(){ 
  return [
    "510-patruunat",
    "yrttiblendit", 
    "wellness-packs",
    "diy-tarvikkeet",
    "merch",
    "laitteet",
    "tarvikkeet", 
    "pakkaus",
    "herbal"
  ];
}

export async function getByCategory(slug:string){ 
  const products = await getCachedProducts(50);
  const map: Record<string,string> = {
    "510-patruunat":"510-patruunat",
    "yrttiblendit":"yrttiblendit",
    "wellness-packs":"wellness-packs", 
    "diy-tarvikkeet":"diy-tarvikkeet",
    "merch":"merch",
    "laitteet":"laitteet", 
    "tarvikkeet":"tarvikkeet",
    "pakkaus":"pakkaus",
    "herbal":"herbal",
  };
  return products.filter((p: any)=>p.category===map[slug]);
}

export async function getOne(handle:string){ 
  return await getCachedProduct(handle);
}
