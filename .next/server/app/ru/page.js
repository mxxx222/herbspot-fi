(()=>{var e={};e.id=487,e.ids=[487],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6663:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>l});var a=r(7096),n=r(6132),s=r(7284),i=r.n(s),o=r(2564),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let l=["",{children:["ru",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3333)),"/Applications/herbspot.fi/app/ru/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3651)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Applications/herbspot.fi/app/ru/page.tsx"],p="/ru/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/ru/page",pathname:"/ru",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3114:(e,t,r)=>{Promise.resolve().then(r.bind(r,3125)),Promise.resolve().then(r.bind(r,5972)),Promise.resolve().then(r.t.bind(r,7490,23))},3125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Bounce:()=>p,CountUp:()=>f,FadeIn:()=>s,Glow:()=>h,HoverScale:()=>l,Parallax:()=>g,Pulse:()=>d,Rotate:()=>m,ScaleIn:()=>o,Shake:()=>u,SlideIn:()=>i,Stagger:()=>c,Typewriter:()=>x});var a=r(3854),n=r(4218);function s({children:e,delay:t=0,duration:r=500,className:s=""}){let[i,o]=(0,n.useState)(!1),c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&setTimeout(()=>o(!0),t)},{threshold:.1});return c.current&&e.observe(c.current),()=>e.disconnect()},[t]),a.jsx("div",{ref:c,className:`transition-opacity duration-${r} ${i?"opacity-100":"opacity-0"} ${s}`,children:e})}function i({children:e,direction:t="up",delay:r=0,duration:s=500,className:i=""}){let[o,c]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&setTimeout(()=>c(!0),r)},{threshold:.1});return l.current&&e.observe(l.current),()=>e.disconnect()},[r]),a.jsx("div",{ref:l,className:`transition-transform duration-${s} ${o?"translate-x-0 translate-y-0":(()=>{switch(t){case"left":return"translateX(-100%)";case"right":return"translateX(100%)";case"up":default:return"translateY(100%)";case"down":return"translateY(-100%)"}})()} ${i}`,children:e})}function o({children:e,delay:t=0,duration:r=500,className:s=""}){let[i,o]=(0,n.useState)(!1),c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&setTimeout(()=>o(!0),t)},{threshold:.1});return c.current&&e.observe(c.current),()=>e.disconnect()},[t]),a.jsx("div",{ref:c,className:`transition-transform duration-${r} ${i?"scale-100":"scale-0"} ${s}`,children:e})}function c({children:e,staggerDelay:t=100,className:r=""}){return a.jsx("div",{className:r,children:e.map((e,r)=>a.jsx(s,{delay:r*t,children:e},r))})}function l({children:e,scale:t=1.05,className:r=""}){return a.jsx("div",{className:`transition-transform duration-200 hover:scale-${t} ${r}`,style:{transform:`scale(${t})`},children:e})}function d({children:e,duration:t=1e3,className:r=""}){return a.jsx("div",{className:`animate-pulse ${r}`,style:{animationDuration:`${t}ms`},children:e})}function p({children:e,className:t=""}){return a.jsx("div",{className:`animate-bounce ${t}`,children:e})}function u({children:e,className:t=""}){return a.jsx("div",{className:`animate-pulse ${t}`,children:e})}function m({children:e,angle:t=360,duration:r=1e3,className:n=""}){return a.jsx("div",{className:`transition-transform duration-${r} hover:rotate-${t} ${n}`,children:e})}function h({children:e,color:t="blue",intensity:r=2,className:n=""}){return a.jsx("div",{className:`transition-shadow duration-300 hover:shadow-${t}-${r}00 ${n}`,children:e})}function x({text:e,speed:t=100,className:r=""}){let[s,i]=(0,n.useState)(""),[o,c]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(o<e.length){let r=setTimeout(()=>{i(t=>t+e[o]),c(e=>e+1)},t);return()=>clearTimeout(r)}},[o,e,t]),(0,a.jsxs)("span",{className:r,children:[s,a.jsx("span",{className:"animate-pulse",children:"|"})]})}function f({end:e,duration:t=2e3,className:r=""}){let[s,i]=(0,n.useState)(0),[o,c]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&c(!0)},{threshold:.1});return l.current&&e.observe(l.current),()=>e.disconnect()},[]),(0,n.useEffect)(()=>{if(o){let r=e/(t/16),a=setInterval(()=>{i(t=>{let n=t+r;return n>=e?(clearInterval(a),e):n})},16);return()=>clearInterval(a)}},[o,e,t]),a.jsx("div",{ref:l,className:r,children:Math.floor(s)})}function g({children:e,speed:t=.5,className:r=""}){let[s,i]=(0,n.useState)(0),o=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=()=>{if(o.current){o.current.getBoundingClientRect();let e=window.pageYOffset;i(e*t)}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]),a.jsx("div",{ref:o,className:r,style:{transform:`translateY(${s}px)`},children:e})}},5972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CategorySEOHead:()=>c,ProductSEOHead:()=>o,SEOHead:()=>i});var a=r(3854),n=r(5645),s=r(1018);function i({title:e,description:t,keywords:r=[],image:i,type:o="website",price:c,currency:l="EUR",availability:d="in_stock",brand:p="HerbSpot",category:u="510 Cartridges"}){let m=(0,s.usePathname)(),h=`https://herbspot-fi.onrender.com${m}`,x=(0,n.sM)({title:e||"HerbSpot — Premium 510 & Aromatherapy",description:t||"Premium 510-patruunat, AIO-laitteet ja tarvikkeet. L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex ja keraaminen ydin.",keywords:r,image:i,url:h,type:o,price:c,currency:l,availability:d,brand:p,category:u});return(0,a.jsxs)(a.Fragment,{children:[a.jsx("title",{children:x.title}),a.jsx("meta",{name:"description",content:x.description}),a.jsx("meta",{name:"keywords",content:x.keywords}),a.jsx("meta",{property:"og:title",content:x.openGraph.title}),a.jsx("meta",{property:"og:description",content:x.openGraph.description}),a.jsx("meta",{property:"og:url",content:x.openGraph.url}),a.jsx("meta",{property:"og:site_name",content:x.openGraph.siteName}),a.jsx("meta",{property:"og:type",content:x.openGraph.type}),a.jsx("meta",{property:"og:locale",content:x.openGraph.locale}),x.openGraph.images.map((e,t)=>a.jsx("meta",{property:"og:image",content:e.url},t)),a.jsx("meta",{name:"twitter:card",content:x.twitter.card}),a.jsx("meta",{name:"twitter:title",content:x.twitter.title}),a.jsx("meta",{name:"twitter:description",content:x.twitter.description}),a.jsx("meta",{name:"twitter:image",content:x.twitter.images[0]}),a.jsx("meta",{name:"twitter:creator",content:x.twitter.creator}),a.jsx("meta",{name:"twitter:site",content:x.twitter.site}),a.jsx("meta",{name:"robots",content:"index,follow"}),a.jsx("meta",{name:"googlebot",content:"index,follow"}),a.jsx("link",{rel:"canonical",href:x.alternates.canonical}),Object.entries(x.alternates.languages).map(([e,t])=>a.jsx("link",{rel:"alternate",hrefLang:e,href:t},e)),x.other&&Object.entries(x.other).map(([e,t])=>a.jsx("meta",{name:e,content:t},e))]})}function o({product:e}){return a.jsx(i,{title:e.name,description:e.description,keywords:e.tags||[],image:e.image,type:"product",price:e.price,currency:e.currency,availability:e.availability,brand:e.brand,category:e.category})}function c({category:e}){return a.jsx(i,{title:`${e.name} - HerbSpot`,description:`Selaa ${e.name.toLowerCase()} tuotteita HerbSpot.fi:ss\xe4. Premium laatu, nopea toimitus.`,keywords:[e.name,"510-patruunat","aromatherapy","premium"],type:"website"})}},3333:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(4656),n=r(4893),s=r(6283),i=r(9506),o=r(9114),c=r(134),l=r(4353),d=r.n(l);async function p(){let e=await (0,c.t2)(),t=await (0,c.XK)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.RF,{title:"HerbSpot — Премиум 510 картриджи и ароматерапия",description:"Премиум 510 картриджи, AIO устройства и аксессуары. Медицинская сталь, пирекс и керамическое ядро.",keywords:["510 картриджи","ароматерапия","премиум","медицинская сталь"],type:"website"}),(0,a.jsxs)("div",{className:"min-h-screen bg-black text-white",children:[a.jsx(n.Uo,{children:(0,a.jsxs)("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[var(--brand)]/20 via-transparent to-blue-500/20"}),(0,a.jsxs)("div",{className:"container relative z-10 text-center",children:[a.jsx("h1",{className:"text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-[var(--brand)] bg-clip-text text-transparent",children:"HerbSpot"}),a.jsx("p",{className:"text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto",children:"Премиум 510 картриджи и устройства для ароматерапии"}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[a.jsx(d(),{href:"/ru/shop",className:"px-8 py-4 bg-[var(--brand)] text-black rounded-lg font-semibold hover:bg-[var(--brand)]/80 transition-colors",children:"Магазин"}),a.jsx(d(),{href:"/ru/b2b",className:"px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors",children:"B2B Услуги"})]})]})]})}),a.jsx(n.Uo,{delay:200,children:a.jsx("section",{className:"py-20",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Категории"}),a.jsx(d(),{href:"/ru/shop",className:"text-[var(--brand)] hover:text-white transition-colors",children:"Все товары →"})]}),a.jsx(n.gn,{children:t.map((e,t)=>a.jsx(n.Uo,{delay:100*t,children:a.jsx(o.p,{title:"510-patruunat"===e.title?"510 картриджи":"Laitteet (AIO/Dual)"===e.title?"Устройства (AIO/Dual)":"Tarvikkeet"===e.title?"Аксессуары":e.title,href:`/ru/c/${e.handle}`,image:e.image||"/placeholder-category.jpg"})},e.handle))})]})})}),a.jsx(n.Uo,{delay:400,children:a.jsx("section",{className:"py-20 bg-white/5",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Популярные"}),a.jsx(d(),{href:"/ru/shop",className:"text-[var(--brand)] hover:text-white transition-colors",children:"Показать все →"})]}),a.jsx(n.gn,{children:e.products.slice(0,6).map((e,t)=>a.jsx(n.Uo,{delay:100*t,children:a.jsx(i.I,{product:e})},e.handle))})]})})}),a.jsx(n.Uo,{delay:600,children:a.jsx("section",{className:"py-20",children:(0,a.jsxs)("div",{className:"container text-center",children:[a.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Готовы начать?"}),a.jsx("p",{className:"text-xl text-white/80 mb-8 max-w-2xl mx-auto",children:"Откройте для себя мир премиум ароматерапии с HerbSpot"}),a.jsx(d(),{href:"/ru/shop",className:"inline-block px-8 py-4 bg-[var(--brand)] text-black rounded-lg font-semibold hover:bg-[var(--brand)]/80 transition-colors",children:"Начать покупки"})]})})})]})]})}},4893:(e,t,r)=>{"use strict";r.d(t,{Uo:()=>o,gn:()=>c});var a=r(5153);let n=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx`),{__esModule:s,$$typeof:i}=n;n.default;let o=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#FadeIn`);(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#SlideIn`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#ScaleIn`);let c=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Stagger`);(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#HoverScale`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Pulse`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Bounce`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Shake`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Rotate`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Glow`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Typewriter`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#CountUp`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/Animations.tsx#Parallax`)},9114:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var a=r(4656),n=r(4353),s=r.n(n);function i({title:e,href:t,image:r}){return(0,a.jsxs)(s(),{href:t,className:"card overflow-hidden group",children:[a.jsx("div",{className:"aspect-[4/3] bg-white/5",children:a.jsx("img",{src:r,alt:e,className:"w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"})}),(0,a.jsxs)("div",{className:"p-5 flex items-center justify-between",children:[a.jsx("h3",{className:"font-semibold",children:e}),a.jsx("span",{className:"text-black bg-[var(--brand)] px-3 py-1 rounded-full text-sm font-bold",children:"Selaa"})]})]})}},9506:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var a=r(4656),n=r(4353),s=r.n(n);function i({product:e}){return(0,a.jsxs)("div",{className:"card overflow-hidden",children:[(0,a.jsxs)("div",{className:"relative",children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-full h-56 object-cover"}),e.badge&&a.jsx("span",{className:"absolute top-3 left-3 badge",children:e.badge})]}),(0,a.jsxs)("div",{className:"p-5",children:[a.jsx("h4",{className:"font-semibold line-clamp-1",children:e.title}),a.jsx("p",{className:"text-[var(--brand)] font-bold mt-1",children:e.price}),(0,a.jsxs)("div",{className:"mt-3 flex gap-2",children:[a.jsx(s(),{href:`/p/${e.handle}`,className:"btn btn-brand",children:"Katso"}),a.jsx(s(),{href:`/p/${e.handle}#buy`,className:"btn btn-ghost",children:"Lis\xe4\xe4"})]})]})]})}},6283:(e,t,r)=>{"use strict";r.d(t,{RF:()=>o});var a=r(5153);let n=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx`),{__esModule:s,$$typeof:i}=n;n.default;let o=(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#SEOHead`);(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#ProductSEOHead`),(0,a.createProxy)(String.raw`/Applications/herbspot.fi/components/SEOHead.tsx#CategorySEOHead`)},134:(e,t,r)=>{"use strict";r.d(t,{MX:()=>d,XK:()=>p,t2:()=>l});let a=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",n=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function s(e,t){let r=await fetch(`https://${a}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":n},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!r.ok)throw console.error("Shopify API error:",r.status,r.statusText),Error(`Shopify API error: ${r.status}`);let s=await r.json();if(s.errors)throw console.error("Shopify GraphQL errors:",s.errors),Error(`Shopify GraphQL error: ${s.errors[0]?.message}`);return s.data}let i=`
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
`;async function l(e=20,t){try{let r=await s(i,{first:e,after:t});return{products:r?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:r?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:u,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function d(e){try{let t=await s(o,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),u.find(t=>t.handle===e)||null}}async function p(e=10){try{let t=await s(c,{first:e});return t?.collections?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,description:e.node.description,image:e.node.image?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",products:e.node.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"}))||[]}))||[]}catch(e){return console.error("Error fetching collections from Shopify:",e),[]}}let u=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,r)=>{"use strict";let{createProxy:a}=r(5153);e.exports=a("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,r)=>{"use strict";e.exports=r(2300)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,685,153],()=>r(6663));module.exports=a})();