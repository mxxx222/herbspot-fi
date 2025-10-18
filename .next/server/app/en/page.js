(()=>{var e={};e.id=479,e.ids=[479],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4497:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=s(7096),r=s(6132),i=s(7284),n=s.n(i),l=s(2564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["en",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3294)),"/Applications/herbspot.fi/app/en/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3651)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Applications/herbspot.fi/app/en/page.tsx"],p="/en/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/en/page",pathname:"/en",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1211:(e,t,s)=>{Promise.resolve().then(s.bind(s,5945)),Promise.resolve().then(s.bind(s,6347)),Promise.resolve().then(s.t.bind(s,7490,23))},5945:(e,t,s)=>{"use strict";s.r(t),s.d(t,{PersonalizedPricing:()=>n,RecommendationEngine:()=>i,SmartSearch:()=>l});var a=s(3854),r=s(4218);function i({currentProduct:e,userId:t}){let[s,i]=(0,r.useState)([]),[n,l]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{let e=async()=>{l(!0),await new Promise(e=>setTimeout(e,1e3)),i([{id:"1",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",reason:"Asiakkaat jotka ostivat t\xe4m\xe4n ostivat my\xf6s",confidence:.85},{id:"2",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",reason:"T\xe4ydellinen yhdistelm\xe4",confidence:.92},{id:"3",title:"Stainless 510-patruuna M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",reason:"Suosittu valinta",confidence:.78}]),l(!1)};e()},[e,t]),n)?(0,a.jsxs)("div",{className:"bg-white/5 rounded-lg p-6",children:[a.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"\uD83E\uDD16 AI-suositukset"}),a.jsx("div",{className:"space-y-3",children:[1,2,3].map(e=>(0,a.jsxs)("div",{className:"animate-pulse",children:[a.jsx("div",{className:"h-4 bg-white/10 rounded w-3/4 mb-2"}),a.jsx("div",{className:"h-3 bg-white/5 rounded w-1/2"})]},e))})]}):(0,a.jsxs)("div",{className:"bg-white/5 rounded-lg p-6",children:[(0,a.jsxs)("h3",{className:"text-lg font-semibold text-white mb-4",children:["\uD83E\uDD16 AI-suositukset",a.jsx("span",{className:"text-sm text-white/60 ml-2",children:"(85% tarkkuus)"})]}),a.jsx("div",{className:"space-y-4",children:s.map(e=>(0,a.jsxs)("div",{className:"flex gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors",children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-16 h-16 object-cover rounded"}),(0,a.jsxs)("div",{className:"flex-1",children:[a.jsx("h4",{className:"font-medium text-white text-sm",children:e.title}),a.jsx("p",{className:"text-[var(--brand)] font-bold text-sm",children:e.price}),a.jsx("p",{className:"text-xs text-white/60",children:e.reason}),(0,a.jsxs)("div",{className:"flex items-center gap-2 mt-1",children:[a.jsx("div",{className:"w-16 h-1 bg-white/20 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-[var(--brand)] rounded-full",style:{width:`${100*e.confidence}%`}})}),(0,a.jsxs)("span",{className:"text-xs text-white/60",children:[Math.round(100*e.confidence),"%"]})]})]}),a.jsx("button",{className:"bg-[var(--brand)] text-black px-3 py-1 rounded text-xs font-semibold hover:opacity-90 transition-opacity",children:"Lis\xe4\xe4"})]},e.id))})]})}function n({userId:e}){let[t,s]=(0,r.useState)(null);return((0,r.useEffect)(()=>{let t=async()=>{let t=e?"Gold":"Bronze",a=0,r="";"Gold"===t?(a=.15,r="Kultaj\xe4sen - 15% alennus"):"Silver"===t?(a=.1,r="Hopeaj\xe4sen - 10% alennus"):(a=.05,r="Uusi asiakas - 5% alennus");let i=24.9*(1-a);s({basePrice:24.9,discount:100*a,finalPrice:i,reason:r})};t()},[e]),t)?(0,a.jsxs)("div",{className:"bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 border border-[var(--brand)]/30 rounded-lg p-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("span",{className:"text-lg",children:"\uD83C\uDFAF"}),a.jsx("span",{className:"font-semibold text-white",children:"Henkil\xf6kohtainen hinta"})]}),(0,a.jsxs)("div",{className:"flex items-baseline gap-2 mb-1",children:[(0,a.jsxs)("span",{className:"text-2xl font-bold text-[var(--brand)]",children:["€",t.finalPrice.toFixed(2)]}),(0,a.jsxs)("span",{className:"text-sm text-white/60 line-through",children:["€",t.basePrice.toFixed(2)]}),(0,a.jsxs)("span",{className:"text-sm text-green-400 font-semibold",children:["-",t.discount,"%"]})]}),a.jsx("p",{className:"text-xs text-white/70",children:t.reason})]}):null}function l({onSearch:e}){let[t,s]=(0,r.useState)(""),[i,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{if(t.length<2){n([]);return}let e=["510 patruuna","aromaterapia laite","keraaminen ydin","pyrex lasi","ter\xe4s patruuna"].filter(e=>e.toLowerCase().includes(t.toLowerCase()));n(e)},[t]),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"relative",children:[a.jsx("input",{type:"text",value:t,onChange:e=>s(e.target.value),placeholder:"Hae tuotteita AI:lla...",className:"w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"}),a.jsx("button",{onClick:()=>e(t),className:"absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors",children:"\uD83D\uDD0D"})]}),i.length>0&&a.jsx("div",{className:"absolute top-full left-0 right-0 mt-1 bg-black/90 border border-white/20 rounded-lg shadow-xl z-50",children:i.map((t,r)=>a.jsx("button",{onClick:()=>{s(t),e(t),n([])},className:"w-full text-left px-4 py-2 hover:bg-white/5 transition-colors text-white text-sm",children:t},r))})]})}},6347:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CustomerReviews:()=>c,SecurityBadges:()=>n,StockIndicator:()=>o,TrustSignals:()=>i,UrgencyTimer:()=>l});var a=s(3854),r=s(4218);function i(){let[e,t]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let e=setTimeout(()=>t(!0),2e3);return()=>clearTimeout(e)},[]),e)?a.jsx("div",{className:"fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4",children:(0,a.jsxs)("div",{className:"bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-sm",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[a.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),a.jsx("span",{className:"text-sm font-medium text-white",children:"Turvallinen maksu"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-xs text-white/70",children:[a.jsx("span",{children:"\uD83D\uDD12 SSL-suojattu"}),a.jsx("span",{children:"•"}),a.jsx("span",{children:"\uD83D\uDCB3 3D Secure"}),a.jsx("span",{children:"•"}),a.jsx("span",{children:"\uD83D\uDEE1️ EU-toimitus"})]})]})}):null}function n(){return(0,a.jsxs)("div",{className:"flex items-center gap-4 py-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm text-white/70",children:[a.jsx("span",{className:"text-green-400",children:"\uD83D\uDD12"}),a.jsx("span",{children:"SSL-suojattu"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm text-white/70",children:[a.jsx("span",{className:"text-blue-400",children:"\uD83D\uDEE1️"}),a.jsx("span",{children:"3D Secure"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm text-white/70",children:[a.jsx("span",{className:"text-yellow-400",children:"\uD83D\uDE9A"}),a.jsx("span",{children:"EU-toimitus"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm text-white/70",children:[a.jsx("span",{className:"text-purple-400",children:"↩️"}),a.jsx("span",{children:"30pv palautus"})]})]})}function l(){let[e,t]=(0,r.useState)(3600);return((0,r.useEffect)(()=>{let e=setInterval(()=>{t(e=>e>0?e-1:0)},1e3);return()=>clearInterval(e)},[]),0===e)?null:(0,a.jsxs)("div",{className:"bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-center",children:[a.jsx("div",{className:"text-sm font-medium text-red-400 mb-1",children:"⏰ Rajallinen tarjous!"}),(0,a.jsxs)("div",{className:"text-lg font-bold text-white",children:[Math.floor(e/3600).toString().padStart(2,"0"),":",Math.floor(e%3600/60).toString().padStart(2,"0"),":",(e%60).toString().padStart(2,"0")]}),a.jsx("div",{className:"text-xs text-red-300",children:"Tarjous p\xe4\xe4ttyy pian!"})]})}function o({stock:e}){return e>10?null:a.jsx("div",{className:"bg-orange-500/20 border border-orange-500/30 rounded-lg p-2 text-center",children:(0,a.jsxs)("div",{className:"text-sm font-medium text-orange-400",children:["⚠️ Vain ",e," kpl j\xe4ljell\xe4!"]})})}function c(){return(0,a.jsxs)("div",{className:"bg-white/5 rounded-lg p-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-white mb-3",children:"Asiakkaiden arvostelut"}),a.jsx("div",{className:"space-y-3",children:[{name:"Mika K.",rating:5,text:"Erinomainen laatu ja nopea toimitus!"},{name:"Anna L.",rating:5,text:"Suosittelen l\xe4mpim\xe4sti, hyv\xe4 palvelu."},{name:"Jukka M.",rating:5,text:"Nopea ja luotettava kauppa."}].map((e,t)=>(0,a.jsxs)("div",{className:"border-b border-white/10 pb-3 last:border-b-0",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-1",children:[a.jsx("div",{className:"flex text-yellow-400",children:"★".repeat(e.rating)}),a.jsx("span",{className:"text-sm font-medium text-white",children:e.name})]}),a.jsx("p",{className:"text-sm text-white/70",children:e.text})]},t))}),(0,a.jsxs)("div",{className:"mt-3 text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-white",children:"4.9"}),a.jsx("div",{className:"text-sm text-white/70",children:"Keskiarvo 127 arvostelusta"})]})]})}},3294:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>g});var a=s(4656),r=s(5600),i=s(1212),n=s(5153);let l=(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/TrustSignals.tsx`),{__esModule:o,$$typeof:c}=l;l.default;let d=(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/TrustSignals.tsx#TrustSignals`);(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/TrustSignals.tsx#SecurityBadges`),(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/TrustSignals.tsx#UrgencyTimer`),(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/TrustSignals.tsx#StockIndicator`),(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/TrustSignals.tsx#CustomerReviews`);let p=(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/AIRecommendations.tsx`),{__esModule:h,$$typeof:m}=p;p.default;let u=(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/AIRecommendations.tsx#RecommendationEngine`);function x(){return(0,a.jsxs)("main",{className:"min-h-screen bg-black text-white",children:[a.jsx("section",{className:"section bg-[radial-gradient(1100px_600px_at_50%_-200px,rgba(57,255,20,0.15),rgba(0,0,0,0))]",children:(0,a.jsxs)("div",{className:"container text-center max-w-3xl",children:[(0,a.jsxs)("h1",{className:"h1",children:["Premium 510 Cartridges & ",a.jsx("span",{className:"text-[var(--brand)]",children:"Aromatherapy"})," Devices"]}),a.jsx("p",{className:"lead mt-4",children:"Medical-grade steel, pyrex glass and ceramic core. White-label & premium packaging ready."}),(0,a.jsxs)("div",{className:"mt-8 flex items-center justify-center gap-3",children:[a.jsx("a",{className:"btn btn-brand",href:"/en/shop",children:"Shop Now"}),a.jsx("a",{className:"btn btn-ghost",href:"#categories",children:"Browse Categories"})]})]})}),a.jsx("section",{id:"categories",className:"section",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"flex items-end justify-between mb-6",children:[a.jsx("h2",{className:"h2",children:"Categories"}),a.jsx("a",{href:"/en/shop",className:"text-white/70 hover:text-white",children:"All Products →"})]}),a.jsx(r.g,{})]})}),a.jsx("section",{className:"section",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"flex items-end justify-between mb-6",children:[a.jsx("h2",{className:"h2",children:"Popular Products"}),a.jsx("a",{href:"/en/shop",className:"text-white/70 hover:text-white",children:"Show All →"})]}),a.jsx(i.e,{})]})}),a.jsx(d,{}),a.jsx(u,{currentProduct:null})]})}(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/AIRecommendations.tsx#PersonalizedPricing`),(0,n.createProxy)(String.raw`/Applications/herbspot.fi/components/AIRecommendations.tsx#SmartSearch`);let g={title:"HerbSpot.fi - Premium 510 Cartridges & Aromatherapy Devices",description:"Premium 510 cartridges & aromatherapy devices. Medical-grade steel, pyrex glass and ceramic core. White-label & premium packaging ready.",keywords:"510 cartridge, aromatherapy, vape, cbd, steel cartridge, ceramic core, pyrex glass, white label, premium packaging, EU shipping, herbspot, herbspot.fi",openGraph:{title:"HerbSpot.fi - Premium 510 Cartridges",description:"Premium 510 cartridges & aromatherapy devices. Medical-grade steel, pyrex glass and ceramic core.",images:["/og-image-en.jpg"],locale:"en_US",type:"website"}}},9114:(e,t,s)=>{"use strict";s.d(t,{p:()=>n});var a=s(4656),r=s(4353),i=s.n(r);function n({title:e,href:t,image:s}){return(0,a.jsxs)(i(),{href:t,className:"card overflow-hidden group",children:[a.jsx("div",{className:"aspect-[4/3] bg-white/5",children:a.jsx("img",{src:s,alt:e,className:"w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"})}),(0,a.jsxs)("div",{className:"p-5 flex items-center justify-between",children:[a.jsx("h3",{className:"font-semibold",children:e}),a.jsx("span",{className:"text-black bg-[var(--brand)] px-3 py-1 rounded-full text-sm font-bold",children:"Selaa"})]})]})}},5600:(e,t,s)=>{"use strict";s.d(t,{g:()=>n});var a=s(4656),r=s(9114);let i=[{title:"510-patruunat",href:"/c/510-patruunat",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"},{title:"Laitteet (AIO/Dual)",href:"/c/laitteet",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop"},{title:"Tarvikkeet",href:"/c/tarvikkeet",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"},{title:"Pakkaus",href:"/c/pakkaus",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"},{title:"Herbal / Dual-Blend",href:"/c/herbal",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=300&fit=crop"}];function n(){return a.jsx("section",{id:"categories",className:"section",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"flex items-end justify-between mb-6",children:[a.jsx("h2",{className:"h2",children:"Kategoriat"}),a.jsx("a",{href:"/shop",className:"text-white/70 hover:text-white",children:"Kaikki tuotteet →"})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:i.map(e=>a.jsx(r.p,{...e},e.href))})]})})}},9506:(e,t,s)=>{"use strict";s.d(t,{I:()=>n});var a=s(4656),r=s(4353),i=s.n(r);function n({product:e}){return(0,a.jsxs)("div",{className:"card overflow-hidden",children:[(0,a.jsxs)("div",{className:"relative",children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-full h-56 object-cover"}),e.badge&&a.jsx("span",{className:"absolute top-3 left-3 badge",children:e.badge})]}),(0,a.jsxs)("div",{className:"p-5",children:[a.jsx("h4",{className:"font-semibold line-clamp-1",children:e.title}),a.jsx("p",{className:"text-[var(--brand)] font-bold mt-1",children:e.price}),(0,a.jsxs)("div",{className:"mt-3 flex gap-2",children:[a.jsx(i(),{href:`/p/${e.handle}`,className:"btn btn-brand",children:"Katso"}),a.jsx(i(),{href:`/p/${e.handle}#buy`,className:"btn btn-ghost",children:"Lis\xe4\xe4"})]})]})]})}},1212:(e,t,s)=>{"use strict";s.d(t,{e:()=>n});var a=s(4656),r=s(9506),i=s(2982);async function n({limit:e=6}){let t=await (0,i.$)(e);return a.jsx("section",{className:"section",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"flex items-end justify-between mb-6",children:[a.jsx("h2",{className:"h2",children:"Suosituimmat"}),a.jsx("a",{href:"/shop",className:"text-white/70 hover:text-white",children:"N\xe4yt\xe4 kaikki →"})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:t.map(e=>a.jsx(r.I,{product:e},e.handle))})]})})}},2982:(e,t,s)=>{"use strict";s.d(t,{$:()=>r,Hd:()=>l,ff:()=>n,go:()=>i});var a=s(134);async function r(e=6){let{products:t}=await (0,a.t2)(e);return t}async function i(){let{products:e}=await (0,a.t2)(50);return e}async function n(e){let{products:t}=await (0,a.t2)(50),s={"510-patruunat":"510-patruunat",laitteet:"laitteet",tarvikkeet:"tarvikkeet",pakkaus:"pakkaus",herbal:"herbal"};return t.filter(t=>t.category===s[e])}async function l(e){return await (0,a.MX)(e)}},134:(e,t,s)=>{"use strict";s.d(t,{MX:()=>d,XK:()=>p,t2:()=>c});let a=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",r=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function i(e,t){let s=await fetch(`https://${a}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":r},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!s.ok)throw console.error("Shopify API error:",s.status,s.statusText),Error(`Shopify API error: ${s.status}`);let i=await s.json();if(i.errors)throw console.error("Shopify GraphQL errors:",i.errors),Error(`Shopify GraphQL error: ${i.errors[0]?.message}`);return i.data}let n=`
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
`,l=`
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
`,o=`
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
`;async function c(e=20,t){try{let s=await i(n,{first:e,after:t});return{products:s?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:s?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:h,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function d(e){try{let t=await i(l,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),h.find(t=>t.handle===e)||null}}async function p(e=10){try{let t=await i(o,{first:e});return t?.collections?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,description:e.node.description,image:e.node.image?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",products:e.node.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"}))||[]}))||[]}catch(e){return console.error("Error fetching collections from Shopify:",e),[]}}let h=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,s)=>{"use strict";let{createProxy:a}=s(5153);e.exports=a("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,s)=>{"use strict";e.exports=s(2300)}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[271,685,153],()=>s(4497));module.exports=a})();