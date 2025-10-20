// Shopify Storefront API client
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '4uwt9i-ja.myshopify.com';
const SHOPIFY_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || '8e50755fa974275c7eaf6aa8dea13c3d';

export async function shopifyQuery<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/api/2024-10/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    console.error('Shopify API error:', response.status, response.statusText);
    throw new Error(`Shopify API error: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    console.error('Shopify GraphQL errors:', data.errors);
    throw new Error(`Shopify GraphQL error: ${data.errors[0]?.message}`);
  }

  return data.data;
}

// GraphQL queries
export const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
                availableForSale
                quantityAvailable
              }
            }
          }
          tags
          productType
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const GET_PRODUCT_QUERY = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      images(first: 10) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 100) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            quantityAvailable
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      tags
      productType
      vendor
    }
  }
`;

export const GET_COLLECTIONS_QUERY = `
  query getCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image {
            url
            altText
          }
          products(first: 4) {
            edges {
              node {
                id
                title
                handle
                featuredImage {
                  url
                  altText
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Helper functions
export async function fetchProducts(first: number = 20, after?: string) {
  try {
    const data = await shopifyQuery(GET_PRODUCTS_QUERY, { first, after });
    
    return {
      products: (data as any)?.products?.edges?.map((edge: any) => ({
        handle: edge.node.handle,
        title: edge.node.title,
        price: `${edge.node.priceRange?.minVariantPrice?.amount} ${edge.node.priceRange?.minVariantPrice?.currencyCode}`,
        image: edge.node.featuredImage?.url || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
        badge: edge.node.tags?.includes('new') ? 'Uutuus' : undefined,
        category: edge.node.productType?.toLowerCase() || 'tuote',
      })) || [],
      pageInfo: (data as any)?.products?.pageInfo || { hasNextPage: false, hasPreviousPage: false }
    };
  } catch (error) {
    console.error('Error fetching products from Shopify:', error);
    // Fallback to mock data
    return {
      products: mockProducts,
      pageInfo: { hasNextPage: false, hasPreviousPage: false }
    };
  }
}

export async function fetchProduct(handle: string) {
  try {
    const data = await shopifyQuery(GET_PRODUCT_QUERY, { handle });
    
    if (!(data as any)?.product) return null;
    
    return {
      handle: (data as any).product.handle,
      title: (data as any).product.title,
      price: `${(data as any).product.priceRange?.minVariantPrice?.amount} ${(data as any).product.priceRange?.minVariantPrice?.currencyCode}`,
      image: (data as any).product.images?.edges?.[0]?.node?.url || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
      description: (data as any).product.description,
      variants: (data as any).product.variants?.edges?.map((edge: any) => edge.node) || [],
    };
  } catch (error) {
    console.error('Error fetching product from Shopify:', error);
    // Fallback to mock data
    return mockProducts.find(p => p.handle === handle) || null;
  }
}

export async function fetchCollections(first: number = 10) {
  try {
    const data = await shopifyQuery(GET_COLLECTIONS_QUERY, { first });
    
    return (data as any)?.collections?.edges?.map((edge: any) => ({
      handle: edge.node.handle,
      title: edge.node.title,
      description: edge.node.description,
      image: edge.node.image?.url || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop',
      products: edge.node.products?.edges?.map((productEdge: any) => ({
        handle: productEdge.node.handle,
        title: productEdge.node.title,
        price: `${productEdge.node.priceRange?.minVariantPrice?.amount} ${productEdge.node.priceRange?.minVariantPrice?.currencyCode}`,
        image: productEdge.node.featuredImage?.url || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
      })) || [],
    })) || [];
  } catch (error) {
    console.error('Error fetching collections from Shopify:', error);
    return [];
  }
}

// Wellness tag mapping
export const WELLNESS_TAGS = {
  focus: ['focus', 'concentration', 'mental-clarity', 'energy'],
  calm: ['calm', 'relaxation', 'stress-relief', 'tranquility'],
  sleep: ['sleep', 'rest', 'recovery', 'nighttime'],
  recovery: ['recovery', 'healing', 'wellness', 'therapeutic']
};

// Filter products by wellness tag
export function filterProductsByTag(products: any[], tag: string) {
  if (!tag || !WELLNESS_TAGS[tag as keyof typeof WELLNESS_TAGS]) {
    return products;
  }
  
  const tagKeywords = WELLNESS_TAGS[tag as keyof typeof WELLNESS_TAGS];
  return products.filter(product => {
    const searchText = `${product.title} ${product.category} ${product.badge || ''}`.toLowerCase();
    return tagKeywords.some(keyword => searchText.includes(keyword));
  });
}

// Mock data fallback - Updated MVP Categories
const mockProducts = [
  // 🔴 510-yhteensopivat osat (Fokus)
  { handle:"m4s-05", title:"Stainless 510 Cartridge M4s (0.5 ml)", price:"€3.90", image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop", badge:"Uutuus", category:"510-patruunat" },
  { handle:"m4s-10", title:"Stainless 510 Cartridge M4s (1.0 ml)", price:"€4.20", image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"ccell-cer-05", title:"Ccell-tyyli Keraaminen (0.5 ml)", price:"€4.60", image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"easy-press-05", title:"Easy-Press Snap-Cap (0.5 ml)", price:"€4.10", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"ceramic-core-05", title:"Keraaminen Ydin 510 (0.5 ml)", price:"€4.80", image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", badge:"Premium", category:"510-patruunat" },
  { handle:"glass-tank-10", title:"Pyrex-lasi Tank 510 (1.0 ml)", price:"€5.20", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", category:"510-patruunat" },
  
  // 🔴 Dual-Use Yrttiblendit™ (Erotteleva tekijä)
  { handle:"calm-blend", title:"Calm Blend™ - Rauhoittava yrttisekoitus", price:"€12.90", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", badge:"Dual-Use", category:"yrttiblendit" },
  { handle:"focus-blend", title:"Focus Blend™ - Keskittymistä edistävä", price:"€12.90", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", badge:"Dual-Use", category:"yrttiblendit" },
  { handle:"sleep-blend", title:"Sleep Blend™ - Uni-ystävällinen sekoitus", price:"€12.90", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", badge:"Dual-Use", category:"yrttiblendit" },
  { handle:"energy-blend", title:"Energy Blend™ - Energiaa antava", price:"€12.90", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", badge:"Dual-Use", category:"yrttiblendit" },
  
  // 🟡 Wellness Starter Packs
  { handle:"calm-pack", title:"Calm Pack™ - Rauhoittava aloituspaketti", price:"€29.90", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", badge:"Starter", category:"wellness-packs" },
  { handle:"smoke-tea-pack", title:"Smoke & Tea Pack™ - Savu ja tee combo", price:"€34.90", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", badge:"Combo", category:"wellness-packs" },
  { handle:"focus-pack", title:"Focus Pack™ - Keskittymisalue paketti", price:"€29.90", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", badge:"Starter", category:"wellness-packs" },
  
  // 🟢 Täyttövälineet + DIY
  { handle:"tyhjat-patruunat-5kpl", title:"Tyhjät 510-patruunat (5 kpl)", price:"€8.90", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", category:"diy-tarvikkeet" },
  { handle:"tayttoruiskut-3kpl", title:"Täyttöruiskut (3 kpl)", price:"€4.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"diy-tarvikkeet" },
  { handle:"pipetti-set", title:"Pipetti-set DIY täyttöön", price:"€6.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"diy-tarvikkeet" },
  { handle:"syringe-kit", title:"Syringe Kit - Täyttövälineet", price:"€12.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"diy-tarvikkeet" },
  
  // 🟢 HerbSpot Merch™ (tuleva)
  { handle:"rullausalusta", title:"HerbSpot Rullausalusta", price:"€9.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", badge:"Merch", category:"merch" },
  { handle:"zip-pussi", title:"HerbSpot Zip-pussi", price:"€4.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", badge:"Merch", category:"merch" },
  { handle:"stickers-pack", title:"HerbSpot Stickers (10 kpl)", price:"€2.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", badge:"Merch", category:"merch" },
  
  // Laitteet ja tarvikkeet
  { handle:"duo-glasspod", title:"Duo GlassPod AIO", price:"€24.90", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", badge:"AIO", category:"laitteet" },
  { handle:"m3-plus", title:"CCELL M3 Plus 510-akku", price:"€14.90", image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop", category:"laitteet" },
  { handle:"charger-usb", title:"510 USB Laturi", price:"€6.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"tarvikkeet" },
  { handle:"slide-box", title:"Liukukansi-laatikko (CR)", price:"€1.20", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"pakkaus" },
];
