(()=>{var e={};e.id=318,e.ids=[318],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2298:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>l});var a=r(7096),i=r(6132),n=r(7284),o=r.n(n),s=r(2564),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);r.d(t,c);let l=["",{children:["p",{children:["[handle]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3509)),"/Applications/herbspot.fi/app/p/[handle]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3651)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],p=["/Applications/herbspot.fi/app/p/[handle]/page.tsx"],d="/p/[handle]/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/p/[handle]/page",pathname:"/p/[handle]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7342:(e,t,r)=>{Promise.resolve().then(r.bind(r,5972)),Promise.resolve().then(r.bind(r,8365)),Promise.resolve().then(r.t.bind(r,7490,23))},5972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CategorySEOHead:()=>c,ProductSEOHead:()=>s,SEOHead:()=>o});var a=r(3854),i=r(5645),n=r(1018);function o({title:e,description:t,keywords:r=[],image:o,type:s="website",price:c,currency:l="EUR",availability:p="in_stock",brand:d="HerbSpot",category:u="510 Cartridges"}){let m=(0,n.usePathname)(),h=`https://herbspot-fi.onrender.com${m}`,g=(0,i.sM)({title:e||"HerbSpot — Premium 510 & Aromatherapy",description:t||"Premium 510-patruunat, AIO-laitteet ja tarvikkeet. L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex ja keraaminen ydin.",keywords:r,image:o,url:h,type:s,price:c,currency:l,availability:p,brand:d,category:u});return(0,a.jsxs)(a.Fragment,{children:[a.jsx("title",{children:g.title}),a.jsx("meta",{name:"description",content:g.description}),a.jsx("meta",{name:"keywords",content:g.keywords}),a.jsx("meta",{property:"og:title",content:g.openGraph.title}),a.jsx("meta",{property:"og:description",content:g.openGraph.description}),a.jsx("meta",{property:"og:url",content:g.openGraph.url}),a.jsx("meta",{property:"og:site_name",content:g.openGraph.siteName}),a.jsx("meta",{property:"og:type",content:g.openGraph.type}),a.jsx("meta",{property:"og:locale",content:g.openGraph.locale}),g.openGraph.images.map((e,t)=>a.jsx("meta",{property:"og:image",content:e.url},t)),a.jsx("meta",{name:"twitter:card",content:g.twitter.card}),a.jsx("meta",{name:"twitter:title",content:g.twitter.title}),a.jsx("meta",{name:"twitter:description",content:g.twitter.description}),a.jsx("meta",{name:"twitter:image",content:g.twitter.images[0]}),a.jsx("meta",{name:"twitter:creator",content:g.twitter.creator}),a.jsx("meta",{name:"twitter:site",content:g.twitter.site}),a.jsx("meta",{name:"robots",content:"index,follow"}),a.jsx("meta",{name:"googlebot",content:"index,follow"}),a.jsx("link",{rel:"canonical",href:g.alternates.canonical}),Object.entries(g.alternates.languages).map(([e,t])=>a.jsx("link",{rel:"alternate",hrefLang:e,href:t},e)),g.other&&Object.entries(g.other).map(([e,t])=>a.jsx("meta",{name:e,content:t},e))]})}function s({product:e}){return a.jsx(o,{title:e.name,description:e.description,keywords:e.tags||[],image:e.image,type:"product",price:e.price,currency:e.currency,availability:e.availability,brand:e.brand,category:e.category})}function c({category:e}){return a.jsx(o,{title:`${e.name} - HerbSpot`,description:`Selaa ${e.name.toLowerCase()} tuotteita HerbSpot.fi:ss\xe4. Premium laatu, nopea toimitus.`,keywords:[e.name,"510-patruunat","aromatherapy","premium"],type:"website"})}},3509:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(4656),i=r(4353),n=r.n(i),o=r(2982),s=r(6283),c=r(3743);async function l({params:e}){let t=await (0,o.Hd)(e.handle);if(!t)return a.jsx("div",{className:"section container",children:a.jsx("p",{children:"Tuotetta ei l\xf6ytynyt."})});let r={name:t.title,description:`Premium ${t.title} - L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex-lasi, keraaminen ydin. Raskasmetallitestattu.`,price:parseFloat(t.price.replace("€","")),currency:"EUR",image:t.image,availability:"in_stock",brand:"HerbSpot",category:"510 Cartridges",sku:e.handle};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.RF,{title:t.title,description:r.description,keywords:["510-patruuna","aromatherapy","premium","l\xe4\xe4kinn\xe4llinen ter\xe4s"],image:t.image,type:"product",price:r.price,currency:r.currency,availability:r.availability,brand:r.brand,category:r.category}),a.jsx(c.v1,{product:r}),a.jsx("div",{className:"section",children:(0,a.jsxs)("div",{className:"container grid md:grid-cols-2 gap-8",children:[a.jsx("div",{className:"card overflow-hidden",children:a.jsx("img",{src:t.image,alt:t.title,className:"w-full h-[420px] object-cover"})}),(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"h2",children:t.title}),a.jsx("p",{className:"text-[var(--brand)] font-extrabold text-2xl mt-2",children:t.price}),(0,a.jsxs)("ul",{className:"mt-4 space-y-2 text-white/80",children:[a.jsx("li",{children:"• Keraaminen kela / 510-kierre (mallista riippuen)"}),a.jsx("li",{children:"• L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex-lasi"}),a.jsx("li",{children:"• 0,5 ml / 1,0 ml vaihtoehdot"})]}),(0,a.jsxs)("div",{id:"buy",className:"mt-6 flex gap-3",children:[a.jsx("button",{className:"btn btn-brand",children:"Lis\xe4\xe4 koriin"}),a.jsx(n(),{href:"/shop",className:"btn btn-ghost",children:"Jatka ostoksia"})]}),a.jsx("div",{className:"mt-8",children:a.jsx("p",{className:"badge",children:"Raskasmetallitestattu"})})]})]})})]})}},6283:(e,t,r)=>{"use strict";r.d(t,{RF:()=>s});var a=r(5153);let i=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let s=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#SEOHead`);(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#ProductSEOHead`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#CategorySEOHead`)},2982:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,Hd:()=>s,ff:()=>o,go:()=>n});var a=r(134);async function i(e=6){let{products:t}=await (0,a.t2)(e);return t}async function n(){let{products:e}=await (0,a.t2)(50);return e}async function o(e){let{products:t}=await (0,a.t2)(50),r={"510-patruunat":"510-patruunat",laitteet:"laitteet",tarvikkeet:"tarvikkeet",pakkaus:"pakkaus",herbal:"herbal"};return t.filter(t=>t.category===r[e])}async function s(e){return await (0,a.MX)(e)}},134:(e,t,r)=>{"use strict";r.d(t,{MX:()=>p,XK:()=>d,t2:()=>l});let a=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",i=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function n(e,t){let r=await fetch(`https://${a}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":i},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!r.ok)throw console.error("Shopify API error:",r.status,r.statusText),Error(`Shopify API error: ${r.status}`);let n=await r.json();if(n.errors)throw console.error("Shopify GraphQL errors:",n.errors),Error(`Shopify GraphQL error: ${n.errors[0]?.message}`);return n.data}let o=`
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
`,s=`
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
`;async function l(e=20,t){try{let r=await n(o,{first:e,after:t});return{products:r?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:r?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:u,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function p(e){try{let t=await n(s,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),u.find(t=>t.handle===e)||null}}async function d(e=10){try{let t=await n(c,{first:e});return t?.collections?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,description:e.node.description,image:e.node.image?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",products:e.node.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"}))||[]}))||[]}catch(e){return console.error("Error fetching collections from Shopify:",e),[]}}let u=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,r)=>{"use strict";let{createProxy:a}=r(5153);e.exports=a("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,r)=>{"use strict";e.exports=r(2300)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,685,153],()=>r(2298));module.exports=a})();