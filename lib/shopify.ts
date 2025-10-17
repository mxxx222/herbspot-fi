// Shopify Storefront API client
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'herbspot.myshopify.com';
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

// Mock data fallback
const mockProducts = [
  { handle:"m4s-05", title:"Stainless 510 Cartridge M4s (0.5 ml)", price:"€3.90", image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop", badge:"Uutuus", category:"510-patruunat" },
  { handle:"m4s-10", title:"Stainless 510 Cartridge M4s (1.0 ml)", price:"€4.20", image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"ccell-cer-05", title:"Ccell-tyyli Keraaminen (0.5 ml)", price:"€4.60", image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"easy-press-05", title:"Easy-Press Snap-Cap (0.5 ml)", price:"€4.10", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", category:"510-patruunat" },
  { handle:"duo-glasspod", title:"Duo GlassPod AIO", price:"€24.90", image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", badge:"AIO", category:"laitteet" },
  { handle:"m3-plus", title:"CCELL M3 Plus 510-akku", price:"€14.90", image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop", category:"laitteet" },
  { handle:"charger-usb", title:"510 USB Laturi", price:"€6.90", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"tarvikkeet" },
  { handle:"slide-box", title:"Liukukansi-laatikko (CR)", price:"€1.20", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category:"pakkaus" },
];
