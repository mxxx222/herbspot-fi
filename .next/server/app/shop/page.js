(()=>{var e={};e.id=21,e.ids=[21],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9612:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>p,routeModule:()=>u,tree:()=>l});var r=a(7096),i=a(6132),s=a(7284),o=a.n(s),n=a(2564),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);a.d(t,c);let l=["",{children:["shop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9341)),"/Applications/herbspot.fi/app/shop/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,1041)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"]}],p=["/Applications/herbspot.fi/app/shop/page.tsx"],d="/shop/page",h={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/shop/page",pathname:"/shop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8077:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,7490,23))},9341:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=a(4656),i=a(2982),s=a(9506);async function o(){let e=await (0,i.go)();return r.jsx("div",{className:"section",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx("h1",{className:"h2 mb-6",children:"Kaikki tuotteet"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:e.map(e=>r.jsx(s.I,{product:e},e.handle))})]})})}},9506:(e,t,a)=>{"use strict";a.d(t,{I:()=>o});var r=a(4656),i=a(4353),s=a.n(i);function o({product:e}){return(0,r.jsxs)("div",{className:"card overflow-hidden",children:[(0,r.jsxs)("div",{className:"relative",children:[r.jsx("img",{src:e.image,alt:e.title,className:"w-full h-56 object-cover"}),e.badge&&r.jsx("span",{className:"absolute top-3 left-3 badge",children:e.badge})]}),(0,r.jsxs)("div",{className:"p-5",children:[r.jsx("h4",{className:"font-semibold line-clamp-1",children:e.title}),r.jsx("p",{className:"text-[var(--brand)] font-bold mt-1",children:e.price}),(0,r.jsxs)("div",{className:"mt-3 flex gap-2",children:[r.jsx(s(),{href:`/p/${e.handle}`,className:"btn btn-brand",children:"Katso"}),r.jsx(s(),{href:`/p/${e.handle}#buy`,className:"btn btn-ghost",children:"Lis\xe4\xe4"})]})]})]})}},2982:(e,t,a)=>{"use strict";a.d(t,{$:()=>i,Hd:()=>n,ff:()=>o,go:()=>s});var r=a(134);async function i(e=6){let{products:t}=await (0,r.t2)(e);return t}async function s(){let{products:e}=await (0,r.t2)(50);return e}async function o(e){let{products:t}=await (0,r.t2)(50),a={"510-patruunat":"510-patruunat",yrttiblendit:"yrttiblendit","wellness-packs":"wellness-packs","diy-tarvikkeet":"diy-tarvikkeet",merch:"merch",laitteet:"laitteet",tarvikkeet:"tarvikkeet",pakkaus:"pakkaus",herbal:"herbal"};return t.filter(t=>t.category===a[e])}async function n(e){return await (0,r.MX)(e)}},134:(e,t,a)=>{"use strict";a.d(t,{MX:()=>p,XK:()=>d,t2:()=>l});let r=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",i=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function s(e,t){let a=await fetch(`https://${r}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":i},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!a.ok)throw console.error("Shopify API error:",a.status,a.statusText),Error(`Shopify API error: ${a.status}`);let s=await a.json();if(s.errors)throw console.error("Shopify GraphQL errors:",s.errors),Error(`Shopify GraphQL error: ${s.errors[0]?.message}`);return s.data}let o=`
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
`,c=`
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
`;async function l(e=20,t){try{let a=await s(o,{first:e,after:t});return{products:a?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:a?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:h,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function p(e){try{let t=await s(n,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),h.find(t=>t.handle===e)||null}}async function d(e=10){try{let t=await s(c,{first:e});return t?.collections?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,description:e.node.description,image:e.node.image?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",products:e.node.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"}))||[]}))||[]}catch(e){return console.error("Error fetching collections from Shopify:",e),[]}}let h=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ceramic-core-05",title:"Keraaminen Ydin 510 (0.5 ml)",price:"€4.80",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",badge:"Premium",category:"510-patruunat"},{handle:"glass-tank-10",title:"Pyrex-lasi Tank 510 (1.0 ml)",price:"€5.20",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"calm-blend",title:"Calm Blend™ - Rauhoittava yrttisekoitus",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"focus-blend",title:"Focus Blend™ - Keskittymist\xe4 edist\xe4v\xe4",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"sleep-blend",title:"Sleep Blend™ - Uni-yst\xe4v\xe4llinen sekoitus",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"energy-blend",title:"Energy Blend™ - Energiaa antava",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"calm-pack",title:"Calm Pack™ - Rauhoittava aloituspaketti",price:"€29.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Starter",category:"wellness-packs"},{handle:"smoke-tea-pack",title:"Smoke & Tea Pack™ - Savu ja tee combo",price:"€34.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Combo",category:"wellness-packs"},{handle:"focus-pack",title:"Focus Pack™ - Keskittymisalue paketti",price:"€29.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Starter",category:"wellness-packs"},{handle:"tyhjat-patruunat-5kpl",title:"Tyhj\xe4t 510-patruunat (5 kpl)",price:"€8.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"tayttoruiskut-3kpl",title:"T\xe4ytt\xf6ruiskut (3 kpl)",price:"€4.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"pipetti-set",title:"Pipetti-set DIY t\xe4ytt\xf6\xf6n",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"syringe-kit",title:"Syringe Kit - T\xe4ytt\xf6v\xe4lineet",price:"€12.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"rullausalusta",title:"HerbSpot Rullausalusta",price:"€9.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"zip-pussi",title:"HerbSpot Zip-pussi",price:"€4.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"stickers-pack",title:"HerbSpot Stickers (10 kpl)",price:"€2.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,a)=>{"use strict";let{createProxy:r}=a(5153);e.exports=r("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,a)=>{"use strict";e.exports=a(2300)}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,685,675],()=>a(9612));module.exports=r})();