(()=>{var e={};e.id=21,e.ids=[21],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9612:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>h,tree:()=>l});var r=a(7096),s=a(6132),i=a(7284),o=a.n(i),n=a(2564),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);a.d(t,c);let l=["",{children:["shop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9341)),"/Applications/herbspot.fi/app/shop/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,3651)),"/Applications/herbspot.fi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"]}],p=["/Applications/herbspot.fi/app/shop/page.tsx"],d="/shop/page",u={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/shop/page",pathname:"/shop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8077:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,7490,23))},9341:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=a(4656),s=a(2982),i=a(9506);async function o(){let e=await (0,s.go)();return r.jsx("div",{className:"section",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx("h1",{className:"h2 mb-6",children:"Kaikki tuotteet"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:e.map(e=>r.jsx(i.I,{product:e},e.handle))})]})})}},9506:(e,t,a)=>{"use strict";a.d(t,{I:()=>o});var r=a(4656),s=a(4353),i=a.n(s);function o({product:e}){return(0,r.jsxs)("div",{className:"card overflow-hidden",children:[(0,r.jsxs)("div",{className:"relative",children:[r.jsx("img",{src:e.image,alt:e.title,className:"w-full h-56 object-cover"}),e.badge&&r.jsx("span",{className:"absolute top-3 left-3 badge",children:e.badge})]}),(0,r.jsxs)("div",{className:"p-5",children:[r.jsx("h4",{className:"font-semibold line-clamp-1",children:e.title}),r.jsx("p",{className:"text-[var(--brand)] font-bold mt-1",children:e.price}),(0,r.jsxs)("div",{className:"mt-3 flex gap-2",children:[r.jsx(i(),{href:`/p/${e.handle}`,className:"btn btn-brand",children:"Katso"}),r.jsx(i(),{href:`/p/${e.handle}#buy`,className:"btn btn-ghost",children:"Lis\xe4\xe4"})]})]})]})}},2982:(e,t,a)=>{"use strict";a.d(t,{$:()=>s,Hd:()=>n,ff:()=>o,go:()=>i});var r=a(134);async function s(e=6){let{products:t}=await (0,r.t2)(e);return t}async function i(){let{products:e}=await (0,r.t2)(50);return e}async function o(e){let{products:t}=await (0,r.t2)(50),a={"510-patruunat":"510-patruunat",laitteet:"laitteet",tarvikkeet:"tarvikkeet",pakkaus:"pakkaus",herbal:"herbal"};return t.filter(t=>t.category===a[e])}async function n(e){return await (0,r.MX)(e)}},134:(e,t,a)=>{"use strict";a.d(t,{MX:()=>l,t2:()=>c});let r=process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN||"4uwt9i-ja.myshopify.com",s=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN||"8e50755fa974275c7eaf6aa8dea13c3d";async function i(e,t){let a=await fetch(`https://${r}/api/2024-10/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":s},body:JSON.stringify({query:e,variables:t}),next:{revalidate:60}});if(!a.ok)throw console.error("Shopify API error:",a.status,a.statusText),Error(`Shopify API error: ${a.status}`);let i=await a.json();if(i.errors)throw console.error("Shopify GraphQL errors:",i.errors),Error(`Shopify GraphQL error: ${i.errors[0]?.message}`);return i.data}let o=`
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
`;async function c(e=20,t){try{let a=await i(o,{first:e,after:t});return{products:a?.products?.edges?.map(e=>({handle:e.node.handle,title:e.node.title,price:`${e.node.priceRange?.minVariantPrice?.amount} ${e.node.priceRange?.minVariantPrice?.currencyCode}`,image:e.node.featuredImage?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:e.node.tags?.includes("new")?"Uutuus":void 0,category:e.node.productType?.toLowerCase()||"tuote"}))||[],pageInfo:a?.products?.pageInfo||{hasNextPage:!1,hasPreviousPage:!1}}}catch(e){return console.error("Error fetching products from Shopify:",e),{products:p,pageInfo:{hasNextPage:!1,hasPreviousPage:!1}}}}async function l(e){try{let t=await i(n,{handle:e});if(!t?.product)return null;return{handle:t.product.handle,title:t.product.title,price:`${t.product.priceRange?.minVariantPrice?.amount} ${t.product.priceRange?.minVariantPrice?.currencyCode}`,image:t.product.images?.edges?.[0]?.node?.url||"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",description:t.product.description,variants:t.product.variants?.edges?.map(e=>e.node)||[]}}catch(t){return console.error("Error fetching product from Shopify:",t),p.find(t=>t.handle===e)||null}}let p=[{handle:"m4s-05",title:"Stainless 510 Cartridge M4s (0.5 ml)",price:"€3.90",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",badge:"Uutuus",category:"510-patruunat"},{handle:"m4s-10",title:"Stainless 510 Cartridge M4s (1.0 ml)",price:"€4.20",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"ccell-cer-05",title:"Ccell-tyyli Keraaminen (0.5 ml)",price:"€4.60",image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"easy-press-05",title:"Easy-Press Snap-Cap (0.5 ml)",price:"€4.10",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",category:"510-patruunat"},{handle:"duo-glasspod",title:"Duo GlassPod AIO",price:"€24.90",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",badge:"AIO",category:"laitteet"},{handle:"m3-plus",title:"CCELL M3 Plus 510-akku",price:"€14.90",image:"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",category:"laitteet"},{handle:"charger-usb",title:"510 USB Laturi",price:"€6.90",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"tarvikkeet"},{handle:"slide-box",title:"Liukukansi-laatikko (CR)",price:"€1.20",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",category:"pakkaus"}]},2300:(e,t,a)=>{"use strict";let{createProxy:r}=a(5153);e.exports=r("/Applications/herbspot.fi/node_modules/next/dist/client/link.js")},4353:(e,t,a)=>{"use strict";e.exports=a(2300)}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,685,153],()=>a(9612));module.exports=r})();