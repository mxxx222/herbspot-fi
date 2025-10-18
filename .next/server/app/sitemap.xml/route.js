"use strict";(()=>{var e={};e.id=717,e.ids=[717],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9119:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>h,originalPathname:()=>y,patchFetch:()=>f,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>m});var a={};t.r(a),t.d(a,{GET:()=>s});var i=t(884),l=t(6132),o=t(1040),n=t(9962);async function s(){let e=(0,n.FV)(),r=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${e.map(e=>`
  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastModified}</lastmod>
    <changefreq>${e.changeFrequency}</changefreq>
    <priority>${e.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fi" href="${e.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${e.url.replace("herbspot-fi.onrender.com","herbspot-fi.onrender.com/en")}" />
  </url>`).join("")}
</urlset>`;return new Response(r,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=3600, s-maxage=3600"}})}let p=new i.AppRouteRouteModule({definition:{kind:l.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"route",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"/Applications/herbspot.fi/app/sitemap.xml/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:d,headerHooks:h,staticGenerationBailout:m}=p,y="/sitemap.xml/route";function f(){return(0,o.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}},9962:(e,r,t)=>{function a(){let e="https://herbspot-fi.onrender.com",r=new Date().toISOString();return[{url:e,lastModified:r,changeFrequency:"daily",priority:1},{url:`${e}/shop`,lastModified:r,changeFrequency:"daily",priority:.9},{url:`${e}/c/510-patruunat`,lastModified:r,changeFrequency:"weekly",priority:.8},{url:`${e}/c/laitteet`,lastModified:r,changeFrequency:"weekly",priority:.8},{url:`${e}/c/tarvikkeet`,lastModified:r,changeFrequency:"weekly",priority:.8},{url:`${e}/b2b`,lastModified:r,changeFrequency:"monthly",priority:.7},{url:`${e}/en`,lastModified:r,changeFrequency:"daily",priority:.8},{url:`${e}/en/shop`,lastModified:r,changeFrequency:"daily",priority:.7}]}function i(){return`User-agent: *
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
Crawl-delay: 1`}t.d(r,{FV:()=>a,xU:()=>i})},884:(e,r,t)=>{e.exports=t(517)}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[271],()=>t(9119));module.exports=a})();