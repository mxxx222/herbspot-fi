"use strict";exports.id=814,exports.ids=[814],exports.modules={6464:(e,t,a)=>{a.r(t),a.d(t,{SearchAndFilter:()=>s});var r=a(3854),i=a(4218);function s(){let[e,t]=(0,i.useState)(""),[a,s]=(0,i.useState)("name"),[o,n]=(0,i.useState)("all");return(0,r.jsxs)("div",{className:"bg-white/5 rounded-lg p-4 mb-8",children:[(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[r.jsx("div",{className:"flex-1",children:r.jsx("input",{type:"text",placeholder:"Hae tuotteita...",value:e,onChange:e=>t(e.target.value),className:"w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"})}),r.jsx("div",{className:"md:w-48",children:(0,r.jsxs)("select",{value:o,onChange:e=>n(e.target.value),className:"w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent",children:[r.jsx("option",{value:"all",children:"Kaikki kategoriat"}),r.jsx("option",{value:"510-patruunat",children:"510-patruunat"}),r.jsx("option",{value:"laitteet",children:"Laitteet"}),r.jsx("option",{value:"tarvikkeet",children:"Tarvikkeet"}),r.jsx("option",{value:"kosmetiikka",children:"Kosmetiikka"}),r.jsx("option",{value:"aromataterapia",children:"Aromaterapia"})]})}),r.jsx("div",{className:"md:w-48",children:(0,r.jsxs)("select",{value:a,onChange:e=>s(e.target.value),className:"w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent",children:[r.jsx("option",{value:"name",children:"Nimi A-Z"}),r.jsx("option",{value:"price-low",children:"Hinta (alhainen)"}),r.jsx("option",{value:"price-high",children:"Hinta (korkea)"}),r.jsx("option",{value:"newest",children:"Uusimmat"}),r.jsx("option",{value:"popular",children:"Suosituimmat"})]})})]}),(e||"all"!==o)&&(0,r.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[e&&(0,r.jsxs)("span",{className:"bg-[var(--brand)]/20 text-[var(--brand)] px-3 py-1 rounded-full text-sm",children:['Haku: "',e,'"']}),"all"!==o&&(0,r.jsxs)("span",{className:"bg-[var(--brand)]/20 text-[var(--brand)] px-3 py-1 rounded-full text-sm",children:["Kategoria: ",o]}),r.jsx("button",{onClick:()=>{t(""),n("all"),s("name")},className:"text-white/60 hover:text-white text-sm underline",children:"Tyhjenn\xe4 suodattimet"})]})]})}},9506:(e,t,a)=>{a.d(t,{I:()=>o});var r=a(4656),i=a(4353),s=a.n(i);function o({product:e}){return(0,r.jsxs)("div",{className:"card overflow-hidden",children:[(0,r.jsxs)("div",{className:"relative",children:[r.jsx("img",{src:e.image,alt:e.title,className:"w-full h-56 object-cover"}),e.badge&&r.jsx("span",{className:"absolute top-3 left-3 badge",children:e.badge})]}),(0,r.jsxs)("div",{className:"p-5",children:[r.jsx("h4",{className:"font-semibold line-clamp-1",children:e.title}),r.jsx("p",{className:"text-[var(--brand)] font-bold mt-1",children:e.price}),(0,r.jsxs)("div",{className:"mt-3 flex gap-2",children:[r.jsx(s(),{href:`/p/${e.handle}`,className:"btn btn-brand",children:"Katso"}),r.jsx(s(),{href:`/p/${e.handle}#buy`,className:"btn btn-ghost",children:"Lis\xe4\xe4"})]})]})]})}},4566:(e,t,a)=>{a.d(t,{B:()=>n});var r=a(5153);let i=(0,r.createProxy)(String.raw`/Applications/herbspot.fi/components/SearchAndFilter.tsx`),{__esModule:s,$$typeof:o}=i;i.default;let n=(0,r.createProxy)(String.raw`/Applications/herbspot.fi/components/SearchAndFilter.tsx#SearchAndFilter`)},134:(e,t,a)=>{a.d(t,{MX:()=>d,XK:()=>p,t2:()=>c});let r=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",i=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function s(e,t){let a=await fetch(`https://${r}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":i},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!a.ok)throw console.error("Shopify API error:",a.status,a.statusText),Error(`Shopify API error: ${a.status}`);let s=await a.json();if(s.errors)throw console.error("Shopify GraphQL errors:",s.errors),Error(`Shopify GraphQL error: ${s.errors[0]?.message}`);return s.data}let o=`
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
`,n=`
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
`,l=`
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
`;async function c(e=20,t){try{let a=await s(o,{first:e,after:t});return{products:a?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:a?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:h,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function d(e){try{let t=await s(n,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),h.find(t=>t.handle===e)||null}}async function p(e=10){try{let t=await s(l,{first:e});return t?.collections?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,description:e.node.description,image:e.node.image?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",products:e.node.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"}))||[]}))||[]}catch(e){return console.error("Error fetching collections from Shopify:",e),[]}}let h=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ceramic-core-05",title:"Keraaminen Ydin 510 (0.5 ml)",price:"€4.80",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",badge:"Premium",category:"510-patruunat"},{handle:"glass-tank-10",title:"Pyrex-lasi Tank 510 (1.0 ml)",price:"€5.20",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"calm-blend",title:"Calm Blend™ - Rauhoittava yrttisekoitus",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"focus-blend",title:"Focus Blend™ - Keskittymist\xe4 edist\xe4v\xe4",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"sleep-blend",title:"Sleep Blend™ - Uni-yst\xe4v\xe4llinen sekoitus",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"energy-blend",title:"Energy Blend™ - Energiaa antava",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"calm-pack",title:"Calm Pack™ - Rauhoittava aloituspaketti",price:"€29.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Starter",category:"wellness-packs"},{handle:"smoke-tea-pack",title:"Smoke & Tea Pack™ - Savu ja tee combo",price:"€34.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Combo",category:"wellness-packs"},{handle:"focus-pack",title:"Focus Pack™ - Keskittymisalue paketti",price:"€29.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Starter",category:"wellness-packs"},{handle:"tyhjat-patruunat-5kpl",title:"Tyhj\xe4t 510-patruunat (5 kpl)",price:"€8.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"tayttoruiskut-3kpl",title:"T\xe4ytt\xf6ruiskut (3 kpl)",price:"€4.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"pipetti-set",title:"Pipetti-set DIY t\xe4ytt\xf6\xf6n",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"syringe-kit",title:"Syringe Kit - T\xe4ytt\xf6v\xe4lineet",price:"€12.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"rullausalusta",title:"HerbSpot Rullausalusta",price:"€9.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"zip-pussi",title:"HerbSpot Zip-pussi",price:"€4.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"stickers-pack",title:"HerbSpot Stickers (10 kpl)",price:"€2.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,a)=>{let{createProxy:r}=a(5153);e.exports=r("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,a)=>{e.exports=a(2300)}};