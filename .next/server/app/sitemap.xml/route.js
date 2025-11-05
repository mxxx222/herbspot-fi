"use strict";(()=>{var e={};e.id=6717,e.ids=[6717],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9913:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>m,originalPathname:()=>c,requestAsyncStorage:()=>s,routeModule:()=>n,serverHooks:()=>u,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>h});var a={};t.r(a),t.d(a,{GET:()=>GET});var l=t(884),o=t(6132),i=t(9962);async function GET(){let e=(0,i.FV)(),r=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastModified}</lastmod>
    <changefreq>${e.changeFrequency}</changefreq>
    <priority>${e.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fi" href="${e.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${e.url.replace("herbspot.fi","herbspot.fi/en")}" />
  </url>
${e.pages.map(r=>`
  <url>
    <loc>${e.url}${r.url}</loc>
    <lastmod>${e.lastModified}</lastmod>
    <changefreq>${r.changeFrequency}</changefreq>
    <priority>${r.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fi" href="${e.url}${r.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${e.url.replace("herbspot.fi","herbspot.fi/en")}${r.url}" />
  </url>`).join("")}
</urlset>`;return new Response(r,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=3600, s-maxage=3600"}})}let n=new l.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"route",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"/Users/mxjlh/Documents/herbspot/herbspot-fi/app/sitemap.xml/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:s,staticGenerationAsyncStorage:p,serverHooks:u,headerHooks:m,staticGenerationBailout:h}=n,c="/sitemap.xml/route"}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[729,9962],()=>__webpack_exec__(9913));module.exports=t})();