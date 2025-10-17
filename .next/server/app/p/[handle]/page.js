(()=>{var e={};e.id=318,e.ids=[318],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2298:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>l});var r=a(7096),i=a(6132),s=a(7284),n=a.n(s),o=a(2564),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);a.d(t,c);let l=["",{children:["p",{children:["[handle]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,3509)),"/Applications/herbspot.fi/app/p/[handle]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,8009)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Applications/herbspot.fi/app/p/[handle]/page.tsx"],p="/p/[handle]/page",u={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/p/[handle]/page",pathname:"/p/[handle]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8077:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,7490,23))},3509:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=a(4656),i=a(4353),s=a.n(i),n=a(2798);async function o({params:e}){let t=await (0,n.Hd)(e.handle);return t?r.jsx("div",{className:"section",children:(0,r.jsxs)("div",{className:"container grid md:grid-cols-2 gap-8",children:[r.jsx("div",{className:"card overflow-hidden",children:r.jsx("img",{src:t.image,alt:t.title,className:"w-full h-[420px] object-cover"})}),(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"h2",children:t.title}),r.jsx("p",{className:"text-[var(--brand)] font-extrabold text-2xl mt-2",children:t.price}),(0,r.jsxs)("ul",{className:"mt-4 space-y-2 text-white/80",children:[r.jsx("li",{children:"• Keraaminen kela / 510-kierre (mallista riippuen)"}),r.jsx("li",{children:"• L\xe4\xe4kinn\xe4llinen ter\xe4s, pyrex-lasi"}),r.jsx("li",{children:"• 0,5 ml / 1,0 ml vaihtoehdot"})]}),(0,r.jsxs)("div",{id:"buy",className:"mt-6 flex gap-3",children:[r.jsx("button",{className:"btn btn-brand",children:"Lis\xe4\xe4 koriin"}),r.jsx(s(),{href:"/shop",className:"btn btn-ghost",children:"Jatka ostoksia"})]}),r.jsx("div",{className:"mt-8",children:r.jsx("p",{className:"badge",children:"Raskasmetallitestattu"})})]})]})}):r.jsx("div",{className:"section container",children:r.jsx("p",{children:"Tuotetta ei l\xf6ytynyt."})})}},2798:(e,t,a)=>{"use strict";a.d(t,{go:()=>u,ff:()=>h,$:()=>p,Hd:()=>m});let r=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"herbspot.myshopify.com",i=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function s(e,t){let a=await fetch(`https://${r}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":i},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!a.ok)throw console.error("Shopify API error:",a.status,a.statusText),Error(`Shopify API error: ${a.status}`);let s=await a.json();if(s.errors)throw console.error("Shopify GraphQL errors:",s.errors),Error(`Shopify GraphQL error: ${s.errors[0]?.message}`);return s.data}let n=`
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
`;async function c(e=20,t){try{let a=await s(n,{first:e,after:t});return{products:a?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:a?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:d,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function l(e){try{let t=await s(o,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),d.find(t=>t.handle===e)||null}}let d=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}];async function p(e=6){let{products:t}=await c(e);return t}async function u(){let{products:e}=await c(50);return e}async function h(e){let{products:t}=await c(50),a={"510-patruunat":"510-patruunat",laitteet:"laitteet",tarvikkeet:"tarvikkeet",pakkaus:"pakkaus",herbal:"herbal"};return t.filter(t=>t.category===a[e])}async function m(e){return await l(e)}},2300:(e,t,a)=>{"use strict";let{createProxy:r}=a(5153);e.exports=r("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,a)=>{"use strict";e.exports=a(2300)}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,52,656],()=>a(2298));module.exports=r})();