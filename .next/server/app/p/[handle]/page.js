(()=>{var e={};e.id=318,e.ids=[318],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2298:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>l});var r=a(7096),i=a(6132),n=a(7284),s=a.n(n),o=a(2564),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);a.d(t,c);let l=["",{children:["p",{children:["[handle]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,3509)),"/Applications/herbspot.fi/app/p/[handle]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,1041)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"]}],p=["/Applications/herbspot.fi/app/p/[handle]/page.tsx"],d="/p/[handle]/page",u={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/p/[handle]/page",pathname:"/p/[handle]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7342:(e,t,a)=>{Promise.resolve().then(a.bind(a,5972)),Promise.resolve().then(a.bind(a,8365)),Promise.resolve().then(a.t.bind(a,7490,23))},5972:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CategorySEOHead:()=>c,ProductSEOHead:()=>o,SEOHead:()=>s});var r=a(3854),i=a(5645),n=a(1018);function s({title:e,description:t,keywords:a=[],image:s,type:o="website",price:c,currency:l="EUR",availability:p="in_stock",brand:d="HerbSpot",category:u="510 Cartridges"}){let m=(0,n.usePathname)(),h=`https://herbspot-fi.onrender.com${m}`,g=(0,i.sM)({title:e||"HerbSpot — Premium 510 & Aromatherapy",description:t||"Premium 510-patruunat, AIO-laitteet ja tarvikkeet. L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex ja keraaminen ydin.",keywords:a,image:s,url:h,type:o,price:c,currency:l,availability:p,brand:d,category:u});return(0,r.jsxs)(r.Fragment,{children:[r.jsx("title",{children:g.title}),r.jsx("meta",{name:"description",content:g.description}),r.jsx("meta",{name:"keywords",content:g.keywords}),r.jsx("meta",{property:"og:title",content:g.openGraph.title}),r.jsx("meta",{property:"og:description",content:g.openGraph.description}),r.jsx("meta",{property:"og:url",content:g.openGraph.url}),r.jsx("meta",{property:"og:site_name",content:g.openGraph.siteName}),r.jsx("meta",{property:"og:type",content:g.openGraph.type}),r.jsx("meta",{property:"og:locale",content:g.openGraph.locale}),g.openGraph.images.map((e,t)=>r.jsx("meta",{property:"og:image",content:e.url},t)),r.jsx("meta",{name:"twitter:card",content:g.twitter.card}),r.jsx("meta",{name:"twitter:title",content:g.twitter.title}),r.jsx("meta",{name:"twitter:description",content:g.twitter.description}),r.jsx("meta",{name:"twitter:image",content:g.twitter.images[0]}),r.jsx("meta",{name:"twitter:creator",content:g.twitter.creator}),r.jsx("meta",{name:"twitter:site",content:g.twitter.site}),r.jsx("meta",{name:"robots",content:"index,follow"}),r.jsx("meta",{name:"googlebot",content:"index,follow"}),r.jsx("link",{rel:"canonical",href:g.alternates.canonical}),Object.entries(g.alternates.languages).map(([e,t])=>r.jsx("link",{rel:"alternate",hrefLang:e,href:t},e)),g.other&&Object.entries(g.other).map(([e,t])=>r.jsx("meta",{name:e,content:t},e))]})}function o({product:e}){return r.jsx(s,{title:e.name,description:e.description,keywords:e.tags||[],image:e.image,type:"product",price:e.price,currency:e.currency,availability:e.availability,brand:e.brand,category:e.category})}function c({category:e}){return r.jsx(s,{title:`${e.name} - HerbSpot`,description:`Selaa ${e.name.toLowerCase()} tuotteita HerbSpot.fi:ss\xe4. Premium laatu, nopea toimitus.`,keywords:[e.name,"510-patruunat","aromatherapy","premium"],type:"website"})}},3509:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(4656),i=a(4353),n=a.n(i),s=a(2982),o=a(6283),c=a(3743);async function l({params:e}){let t=await (0,s.Hd)(e.handle);if(!t)return r.jsx("div",{className:"section container",children:r.jsx("p",{children:"Tuotetta ei l\xf6ytynyt."})});let a={name:t.title,description:`Premium ${t.title} - L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex-lasi, keraaminen ydin. Raskasmetallitestattu.`,price:parseFloat(t.price.replace("€","")),currency:"EUR",image:t.image,availability:"in_stock",brand:"HerbSpot",category:"510 Cartridges",sku:e.handle};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o.RF,{title:t.title,description:a.description,keywords:["510-patruuna","aromatherapy","premium","l\xe4\xe4kinn\xe4llinen ter\xe4s"],image:t.image,type:"product",price:a.price,currency:a.currency,availability:a.availability,brand:a.brand,category:a.category}),r.jsx(c.v1,{product:a}),r.jsx("div",{className:"section",children:(0,r.jsxs)("div",{className:"container grid md:grid-cols-2 gap-8",children:[r.jsx("div",{className:"card overflow-hidden",children:r.jsx("img",{src:t.image,alt:t.title,className:"w-full h-[420px] object-cover"})}),(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"h2",children:t.title}),r.jsx("p",{className:"text-[var(--brand)] font-extrabold text-2xl mt-2",children:t.price}),(0,r.jsxs)("ul",{className:"mt-4 space-y-2 text-white/80",children:[r.jsx("li",{children:"• Keraaminen kela / 510-kierre (mallista riippuen)"}),r.jsx("li",{children:"• L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex-lasi"}),r.jsx("li",{children:"• 0,5 ml / 1,0 ml vaihtoehdot"})]}),(0,r.jsxs)("div",{id:"buy",className:"mt-6 flex gap-3",children:[r.jsx("button",{className:"btn btn-brand",children:"Lis\xe4\xe4 koriin"}),r.jsx(n(),{href:"/shop",className:"btn btn-ghost",children:"Jatka ostoksia"})]}),r.jsx("div",{className:"mt-8",children:r.jsx("p",{className:"badge",children:"Raskasmetallitestattu"})})]})]})})]})}},6283:(e,t,a)=>{"use strict";a.d(t,{RF:()=>o});var r=a(5153);let i=(0,r.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx`),{__esModule:n,$$typeof:s}=i;i.default;let o=(0,r.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#SEOHead`);(0,r.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#ProductSEOHead`),(0,r.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#CategorySEOHead`)},2982:(e,t,a)=>{"use strict";a.d(t,{$:()=>i,Hd:()=>o,ff:()=>s,go:()=>n});var r=a(134);async function i(e=6){let{products:t}=await (0,r.t2)(e);return t}async function n(){let{products:e}=await (0,r.t2)(50);return e}async function s(e){let{products:t}=await (0,r.t2)(50),a={"510-patruunat":"510-patruunat",yrttiblendit:"yrttiblendit","wellness-packs":"wellness-packs","diy-tarvikkeet":"diy-tarvikkeet",merch:"merch",laitteet:"laitteet",tarvikkeet:"tarvikkeet",pakkaus:"pakkaus",herbal:"herbal"};return t.filter(t=>t.category===a[e])}async function o(e){return await (0,r.MX)(e)}},134:(e,t,a)=>{"use strict";a.d(t,{MX:()=>p,XK:()=>d,t2:()=>l});let r=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",i=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function n(e,t){let a=await fetch(`https://${r}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":i},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!a.ok)throw console.error("Shopify API error:",a.status,a.statusText),Error(`Shopify API error: ${a.status}`);let n=await a.json();if(n.errors)throw console.error("Shopify GraphQL errors:",n.errors),Error(`Shopify GraphQL error: ${n.errors[0]?.message}`);return n.data}let s=`
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
`,o=`
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
`;async function l(e=20,t){try{let a=await n(s,{first:e,after:t});return{products:a?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:a?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:u,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function p(e){try{let t=await n(o,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),u.find(t=>t.handle===e)||null}}async function d(e=10){try{let t=await n(c,{first:e});return t?.collections?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,description:e.node.description,image:e.node.image?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",products:e.node.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"}))||[]}))||[]}catch(e){return console.error("Error fetching collections from Shopify:",e),[]}}let u=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ceramic-core-05",title:"Keraaminen Ydin 510 (0.5 ml)",price:"€4.80",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",badge:"Premium",category:"510-patruunat"},{handle:"glass-tank-10",title:"Pyrex-lasi Tank 510 (1.0 ml)",price:"€5.20",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"calm-blend",title:"Calm Blend™ - Rauhoittava yrttisekoitus",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"focus-blend",title:"Focus Blend™ - Keskittymist\xe4 edist\xe4v\xe4",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"sleep-blend",title:"Sleep Blend™ - Uni-yst\xe4v\xe4llinen sekoitus",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"energy-blend",title:"Energy Blend™ - Energiaa antava",price:"€12.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Dual-Use",category:"yrttiblendit"},{handle:"calm-pack",title:"Calm Pack™ - Rauhoittava aloituspaketti",price:"€29.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Starter",category:"wellness-packs"},{handle:"smoke-tea-pack",title:"Smoke & Tea Pack™ - Savu ja tee combo",price:"€34.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Combo",category:"wellness-packs"},{handle:"focus-pack",title:"Focus Pack™ - Keskittymisalue paketti",price:"€29.90",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",badge:"Starter",category:"wellness-packs"},{handle:"tyhjat-patruunat-5kpl",title:"Tyhj\xe4t 510-patruunat (5 kpl)",price:"€8.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"tayttoruiskut-3kpl",title:"T\xe4ytt\xf6ruiskut (3 kpl)",price:"€4.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"pipetti-set",title:"Pipetti-set DIY t\xe4ytt\xf6\xf6n",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"syringe-kit",title:"Syringe Kit - T\xe4ytt\xf6v\xe4lineet",price:"€12.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"diy-tarvikkeet"},{handle:"rullausalusta",title:"HerbSpot Rullausalusta",price:"€9.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"zip-pussi",title:"HerbSpot Zip-pussi",price:"€4.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"stickers-pack",title:"HerbSpot Stickers (10 kpl)",price:"€2.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",badge:"Merch",category:"merch"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,a)=>{"use strict";let{createProxy:r}=a(5153);e.exports=r("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,a)=>{"use strict";e.exports=a(2300)}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,685,675],()=>a(2298));module.exports=r})();