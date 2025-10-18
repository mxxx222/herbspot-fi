"use strict";(()=>{var e={};e.id=703,e.ids=[703],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},489:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>y,originalPathname:()=>w,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>u,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>h});var o={};r.r(o),r.d(o,{GET:()=>s});var a=r(884),i=r(6132),n=r(1040),l=r(9962);async function s(){let e=(0,l.xU)();return new Response(e,{headers:{"Content-Type":"text/plain","Cache-Control":"public, max-age=86400, s-maxage=86400"}})}let u=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/robots.txt/route",pathname:"/robots.txt",filename:"route",bundlePath:"app/robots.txt/route"},resolvedPagePath:"/Applications/herbspot.fi/app/robots.txt/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:c,headerHooks:y,staticGenerationBailout:h}=u,w="/robots.txt/route";function g(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}},9962:(e,t,r)=>{function o(){let e="https://herbspot-fi.onrender.com",t=new Date().toISOString();return[{url:e,lastModified:t,changeFrequency:"daily",priority:1},{url:`${e}/shop`,lastModified:t,changeFrequency:"daily",priority:.9},{url:`${e}/c/510-patruunat`,lastModified:t,changeFrequency:"weekly",priority:.8},{url:`${e}/c/laitteet`,lastModified:t,changeFrequency:"weekly",priority:.8},{url:`${e}/c/tarvikkeet`,lastModified:t,changeFrequency:"weekly",priority:.8},{url:`${e}/b2b`,lastModified:t,changeFrequency:"monthly",priority:.7},{url:`${e}/en`,lastModified:t,changeFrequency:"daily",priority:.8},{url:`${e}/en/shop`,lastModified:t,changeFrequency:"daily",priority:.7}]}function a(){return`User-agent: *
Allow: /

Sitemap: https://herbspot-fi.onrender.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /checkout/

# Allow important pages
Allow: /shop
Allow: /c/
Allow: /p/
Allow: /b2b
Allow: /en

# Crawl delay
Crawl-delay: 1`}r.d(t,{FV:()=>o,xU:()=>a})},884:(e,t,r)=>{e.exports=r(517)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[271],()=>r(489));module.exports=o})();