"use strict";(()=>{var e={};e.id=717,e.ids=[717],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9119:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>m,originalPathname:()=>y,patchFetch:()=>g,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>h,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>c});var r={};a.r(r),a.d(r,{GET:()=>s});var n=a(884),i=a(6132),l=a(1040),o=a(9962);async function s(){let e=(0,o.NI)([{handle:"m4s-05"},{handle:"m4s-10"},{handle:"ccell-cer-05"},{handle:"easy-press-05"},{handle:"duo-glasspod"},{handle:"m3-plus"},{handle:"charger-usb"},{handle:"slide-box"}],[{handle:"510-patruunat"},{handle:"laitteet"},{handle:"tarvikkeet"},{handle:"kosmetiikka"},{handle:"aromataterapia"}]),t=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${e.map(e=>`  <url>
    <loc>https://herbspot.fi${e.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n")}
</urlset>`;return new Response(t,{headers:{"Content-Type":"application/xml"}})}let p=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"route",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"/Applications/herbspot.fi/app/sitemap.xml/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:h,headerHooks:m,staticGenerationBailout:c}=p,y="/sitemap.xml/route";function g(){return(0,l.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:d})}},9962:(e,t,a)=>{a.d(t,{NI:()=>r,xU:()=>n});function r(e,t){let a=e.map(e=>({url:`/p/${e.handle}`,priority:.8,changefreq:"weekly"})),r=t.map(e=>({url:`/c/${e.handle}`,priority:.7,changefreq:"weekly"}));return[{url:"/",priority:1,changefreq:"daily"},{url:"/shop",priority:.9,changefreq:"daily"},{url:"/b2b",priority:.8,changefreq:"weekly"},{url:"/yhteydenotto",priority:.7,changefreq:"monthly"},...a,...r]}function n(){return`User-agent: *
Allow: /

Sitemap: https://herbspot.fi/sitemap.xml

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /checkout/
`}},884:(e,t,a)=>{e.exports=a(517)}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271],()=>a(9119));module.exports=r})();