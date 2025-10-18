(()=>{var e={};e.id=417,e.ids=[417],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5843:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=r(7096),n=r(6132),i=r(7284),s=r.n(i),o=r(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["ru",{children:["shop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9931)),"/Applications/herbspot.fi/app/ru/shop/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3651)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Applications/herbspot.fi/app/ru/shop/page.tsx"],p="/ru/shop/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/ru/shop/page",pathname:"/ru/shop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5148:(e,t,r)=>{Promise.resolve().then(r.bind(r,3125)),Promise.resolve().then(r.bind(r,6464)),Promise.resolve().then(r.bind(r,5972)),Promise.resolve().then(r.t.bind(r,7490,23))},3125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Bounce:()=>p,CountUp:()=>g,FadeIn:()=>i,Glow:()=>h,HoverScale:()=>c,Parallax:()=>f,Pulse:()=>d,Rotate:()=>m,ScaleIn:()=>o,Shake:()=>u,SlideIn:()=>s,Stagger:()=>l,Typewriter:()=>x});var a=r(3854),n=r(4218);function i({children:e,delay:t=0,duration:r=500,className:i=""}){let[s,o]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&setTimeout(()=>o(!0),t)},{threshold:.1});return l.current&&e.observe(l.current),()=>e.disconnect()},[t]),a.jsx("div",{ref:l,className:`transition-opacity duration-${r} ${s?"opacity-100":"opacity-0"} ${i}`,children:e})}function s({children:e,direction:t="up",delay:r=0,duration:i=500,className:s=""}){let[o,l]=(0,n.useState)(!1),c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&setTimeout(()=>l(!0),r)},{threshold:.1});return c.current&&e.observe(c.current),()=>e.disconnect()},[r]),a.jsx("div",{ref:c,className:`transition-transform duration-${i} ${o?"translate-x-0 translate-y-0":(()=>{switch(t){case"left":return"translateX(-100%)";case"right":return"translateX(100%)";case"up":default:return"translateY(100%)";case"down":return"translateY(-100%)"}})()} ${s}`,children:e})}function o({children:e,delay:t=0,duration:r=500,className:i=""}){let[s,o]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&setTimeout(()=>o(!0),t)},{threshold:.1});return l.current&&e.observe(l.current),()=>e.disconnect()},[t]),a.jsx("div",{ref:l,className:`transition-transform duration-${r} ${s?"scale-100":"scale-0"} ${i}`,children:e})}function l({children:e,staggerDelay:t=100,className:r=""}){return a.jsx("div",{className:r,children:e.map((e,r)=>a.jsx(i,{delay:r*t,children:e},r))})}function c({children:e,scale:t=1.05,className:r=""}){return a.jsx("div",{className:`transition-transform duration-200 hover:scale-${t} ${r}`,style:{transform:`scale(${t})`},children:e})}function d({children:e,duration:t=1e3,className:r=""}){return a.jsx("div",{className:`animate-pulse ${r}`,style:{animationDuration:`${t}ms`},children:e})}function p({children:e,className:t=""}){return a.jsx("div",{className:`animate-bounce ${t}`,children:e})}function u({children:e,className:t=""}){return a.jsx("div",{className:`animate-pulse ${t}`,children:e})}function m({children:e,angle:t=360,duration:r=1e3,className:n=""}){return a.jsx("div",{className:`transition-transform duration-${r} hover:rotate-${t} ${n}`,children:e})}function h({children:e,color:t="blue",intensity:r=2,className:n=""}){return a.jsx("div",{className:`transition-shadow duration-300 hover:shadow-${t}-${r}00 ${n}`,children:e})}function x({text:e,speed:t=100,className:r=""}){let[i,s]=(0,n.useState)(""),[o,l]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(o<e.length){let r=setTimeout(()=>{s(t=>t+e[o]),l(e=>e+1)},t);return()=>clearTimeout(r)}},[o,e,t]),(0,a.jsxs)("span",{className:r,children:[i,a.jsx("span",{className:"animate-pulse",children:"|"})]})}function g({end:e,duration:t=2e3,className:r=""}){let[i,s]=(0,n.useState)(0),[o,l]=(0,n.useState)(!1),c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&l(!0)},{threshold:.1});return c.current&&e.observe(c.current),()=>e.disconnect()},[]),(0,n.useEffect)(()=>{if(o){let r=e/(t/16),a=setInterval(()=>{s(t=>{let n=t+r;return n>=e?(clearInterval(a),e):n})},16);return()=>clearInterval(a)}},[o,e,t]),a.jsx("div",{ref:c,className:r,children:Math.floor(i)})}function f({children:e,speed:t=.5,className:r=""}){let[i,s]=(0,n.useState)(0),o=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=()=>{if(o.current){o.current.getBoundingClientRect();let e=window.pageYOffset;s(e*t)}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]),a.jsx("div",{ref:o,className:r,style:{transform:`translateY(${i}px)`},children:e})}},5972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CategorySEOHead:()=>l,ProductSEOHead:()=>o,SEOHead:()=>s});var a=r(3854),n=r(5645),i=r(1018);function s({title:e,description:t,keywords:r=[],image:s,type:o="website",price:l,currency:c="EUR",availability:d="in_stock",brand:p="HerbSpot",category:u="510 Cartridges"}){let m=(0,i.usePathname)(),h=`https://herbspot-fi.onrender.com${m}`,x=(0,n.sM)({title:e||"HerbSpot — Premium 510 & Aromatherapy",description:t||"Premium 510-patruunat, AIO-laitteet ja tarvikkeet. L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex ja keraaminen ydin.",keywords:r,image:s,url:h,type:o,price:l,currency:c,availability:d,brand:p,category:u});return(0,a.jsxs)(a.Fragment,{children:[a.jsx("title",{children:x.title}),a.jsx("meta",{name:"description",content:x.description}),a.jsx("meta",{name:"keywords",content:x.keywords}),a.jsx("meta",{property:"og:title",content:x.openGraph.title}),a.jsx("meta",{property:"og:description",content:x.openGraph.description}),a.jsx("meta",{property:"og:url",content:x.openGraph.url}),a.jsx("meta",{property:"og:site_name",content:x.openGraph.siteName}),a.jsx("meta",{property:"og:type",content:x.openGraph.type}),a.jsx("meta",{property:"og:locale",content:x.openGraph.locale}),x.openGraph.images.map((e,t)=>a.jsx("meta",{property:"og:image",content:e.url},t)),a.jsx("meta",{name:"twitter:card",content:x.twitter.card}),a.jsx("meta",{name:"twitter:title",content:x.twitter.title}),a.jsx("meta",{name:"twitter:description",content:x.twitter.description}),a.jsx("meta",{name:"twitter:image",content:x.twitter.images[0]}),a.jsx("meta",{name:"twitter:creator",content:x.twitter.creator}),a.jsx("meta",{name:"twitter:site",content:x.twitter.site}),a.jsx("meta",{name:"robots",content:"index,follow"}),a.jsx("meta",{name:"googlebot",content:"index,follow"}),a.jsx("link",{rel:"canonical",href:x.alternates.canonical}),Object.entries(x.alternates.languages).map(([e,t])=>a.jsx("link",{rel:"alternate",hrefLang:e,href:t},e)),x.other&&Object.entries(x.other).map(([e,t])=>a.jsx("meta",{name:e,content:t},e))]})}function o({product:e}){return a.jsx(s,{title:e.name,description:e.description,keywords:e.tags||[],image:e.image,type:"product",price:e.price,currency:e.currency,availability:e.availability,brand:e.brand,category:e.category})}function l({category:e}){return a.jsx(s,{title:`${e.name} - HerbSpot`,description:`Selaa ${e.name.toLowerCase()} tuotteita HerbSpot.fi:ss\xe4. Premium laatu, nopea toimitus.`,keywords:[e.name,"510-patruunat","aromatherapy","premium"],type:"website"})}},6464:(e,t,r)=>{"use strict";r.r(t),r.d(t,{SearchAndFilter:()=>i});var a=r(3854),n=r(4218);function i(){let[e,t]=(0,n.useState)(""),[r,i]=(0,n.useState)("name"),[s,o]=(0,n.useState)("all");return(0,a.jsxs)("div",{className:"bg-white/5 rounded-lg p-4 mb-8",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[a.jsx("div",{className:"flex-1",children:a.jsx("input",{type:"text",placeholder:"Hae tuotteita...",value:e,onChange:e=>t(e.target.value),className:"w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"})}),a.jsx("div",{className:"md:w-48",children:(0,a.jsxs)("select",{value:s,onChange:e=>o(e.target.value),className:"w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent",children:[a.jsx("option",{value:"all",children:"Kaikki kategoriat"}),a.jsx("option",{value:"510-patruunat",children:"510-patruunat"}),a.jsx("option",{value:"laitteet",children:"Laitteet"}),a.jsx("option",{value:"tarvikkeet",children:"Tarvikkeet"}),a.jsx("option",{value:"kosmetiikka",children:"Kosmetiikka"}),a.jsx("option",{value:"aromataterapia",children:"Aromaterapia"})]})}),a.jsx("div",{className:"md:w-48",children:(0,a.jsxs)("select",{value:r,onChange:e=>i(e.target.value),className:"w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent",children:[a.jsx("option",{value:"name",children:"Nimi A-Z"}),a.jsx("option",{value:"price-low",children:"Hinta (alhainen)"}),a.jsx("option",{value:"price-high",children:"Hinta (korkea)"}),a.jsx("option",{value:"newest",children:"Uusimmat"}),a.jsx("option",{value:"popular",children:"Suosituimmat"})]})})]}),(e||"all"!==s)&&(0,a.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[e&&(0,a.jsxs)("span",{className:"bg-[var(--brand)]/20 text-[var(--brand)] px-3 py-1 rounded-full text-sm",children:['Haku: "',e,'"']}),"all"!==s&&(0,a.jsxs)("span",{className:"bg-[var(--brand)]/20 text-[var(--brand)] px-3 py-1 rounded-full text-sm",children:["Kategoria: ",s]}),a.jsx("button",{onClick:()=>{t(""),o("all"),i("name")},className:"text-white/60 hover:text-white text-sm underline",children:"Tyhjenn\xe4 suodattimet"})]})]})}},9931:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(4656),n=r(4893),i=r(6283),s=r(9506),o=r(4566),l=r(134);async function c(){let e=await (0,l.t2)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(i.RF,{title:"Магазин - HerbSpot.ru",description:"Премиум 510 картриджи, AIO устройства и аксессуары для ароматерапии.",keywords:["510 картриджи","ароматерапия","устройства","аксессуары"],type:"website"}),a.jsx("div",{className:"min-h-screen bg-black",children:(0,a.jsxs)("div",{className:"container py-16",children:[a.jsx(n.Uo,{children:(0,a.jsxs)("div",{className:"text-center mb-12",children:[(0,a.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6",children:["Магазин ",a.jsx("span",{className:"text-[var(--brand)]",children:"HerbSpot"})]}),a.jsx("p",{className:"text-xl text-white/80 max-w-2xl mx-auto",children:"Премиум 510 картриджи, AIO устройства и аксессуары для ароматерапии"})]})}),a.jsx(n.Uo,{delay:200,children:a.jsx("div",{className:"mb-12",children:a.jsx(o.B,{})})}),a.jsx(n.Uo,{delay:400,children:a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:e.products.map((e,t)=>a.jsx(n.Uo,{delay:100*t,children:a.jsx(s.I,{product:{...e,title:"Pre‑Roll Cones — 98 mm Hemp 26 mm filter"===e.title?"Pre‑Roll Конусы — 98 мм Hemp 26 мм фильтр":"Pre‑Roll Cones — 109 mm Slow Burn 26 mm filter"===e.title?"Pre‑Roll Конусы — 109 мм Slow Burn 26 мм фильтр":"Pre‑Roll Cones — 70 mm Slow Burn 26 mm filter"===e.title?"Pre‑Roll Конусы — 70 мм Slow Burn 26 мм фильтр":"Pre‑Roll Cones — 84 mm Ultra‑thin 40 mm long filter"===e.title?"Pre‑Roll Конусы — 84 мм Ultra‑thin 40 мм длинный фильтр":"Pre‑Roll Cones — 109 mm Slow Burn 40 mm long filter"===e.title?"Pre‑Roll Конусы — 109 мм Slow Burn 40 мм длинный фильтр":"Pre‑Roll Cones — 98 mm Slow Burn 26 mm filter"===e.title?"Pre‑Roll Конусы — 98 мм Slow Burn 26 мм фильтр":e.title}})},e.handle))})})]})})]})}},4893:(e,t,r)=>{"use strict";r.d(t,{Uo:()=>o,gn:()=>l});var a=r(5153);let n=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx`),{__esModule:i,$$typeof:s}=n;n.default;let o=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#FadeIn`);(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#SlideIn`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#ScaleIn`);let l=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Stagger`);(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#HoverScale`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Pulse`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Bounce`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Shake`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Rotate`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Glow`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Typewriter`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#CountUp`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Parallax`)},9506:(e,t,r)=>{"use strict";r.d(t,{I:()=>s});var a=r(4656),n=r(4353),i=r.n(n);function s({product:e}){return(0,a.jsxs)("div",{className:"card overflow-hidden",children:[(0,a.jsxs)("div",{className:"relative",children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-full h-56 object-cover"}),e.badge&&a.jsx("span",{className:"absolute top-3 left-3 badge",children:e.badge})]}),(0,a.jsxs)("div",{className:"p-5",children:[a.jsx("h4",{className:"font-semibold line-clamp-1",children:e.title}),a.jsx("p",{className:"text-[var(--brand)] font-bold mt-1",children:e.price}),(0,a.jsxs)("div",{className:"mt-3 flex gap-2",children:[a.jsx(i(),{href:`/p/${e.handle}`,className:"btn btn-brand",children:"Katso"}),a.jsx(i(),{href:`/p/${e.handle}#buy`,className:"btn btn-ghost",children:"Lis\xe4\xe4"})]})]})]})}},6283:(e,t,r)=>{"use strict";r.d(t,{RF:()=>o});var a=r(5153);let n=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx`),{__esModule:i,$$typeof:s}=n;n.default;let o=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#SEOHead`);(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#ProductSEOHead`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#CategorySEOHead`)},4566:(e,t,r)=>{"use strict";r.d(t,{B:()=>o});var a=r(5153);let n=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SearchAndFilter.tsx`),{__esModule:i,$$typeof:s}=n;n.default;let o=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SearchAndFilter.tsx#SearchAndFilter`)},134:(e,t,r)=>{"use strict";r.d(t,{MX:()=>d,XK:()=>p,t2:()=>c});let a=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",n=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function i(e,t){let r=await fetch(`https://${a}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":n},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!r.ok)throw console.error("Shopify API error:",r.status,r.statusText),Error(`Shopify API error: ${r.status}`);let i=await r.json();if(i.errors)throw console.error("Shopify GraphQL errors:",i.errors),Error(`Shopify GraphQL error: ${i.errors[0]?.message}`);return i.data}let s=`
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
`;async function c(e=20,t){try{let r=await i(s,{first:e,after:t});return{products:r?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:r?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:u,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function d(e){try{let t=await i(o,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),u.find(t=>t.handle===e)||null}}async function p(e=10){try{let t=await i(l,{first:e});return t?.collections?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,description:e.node.description,image:e.node.image?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",products:e.node.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"}))||[]}))||[]}catch(e){return console.error("Error fetching collections from Shopify:",e),[]}}let u=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,r)=>{"use strict";let{createProxy:a}=r(5153);e.exports=a("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,r)=>{"use strict";e.exports=r(2300)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,685,153],()=>r(5843));module.exports=a})();