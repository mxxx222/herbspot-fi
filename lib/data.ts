import { fetchProducts, fetchProduct, fetchCollections } from './shopify';

export async function getFeatured(n=6){ 
  const { products } = await fetchProducts(n);
  return products;
}

export async function getAll(){ 
  const { products } = await fetchProducts(50);
  return products;
}

export async function getByCategory(slug:string){ 
  const { products } = await fetchProducts(50);
  const map: Record<string,string> = {
    "510-patruunat":"510-patruunat",
    "laitteet":"laitteet", 
    "tarvikkeet":"tarvikkeet",
    "pakkaus":"pakkaus",
    "herbal":"herbal",
  };
  return products.filter(p=>p.category===map[slug]);
}

export async function getOne(handle:string){ 
  return await fetchProduct(handle);
}
