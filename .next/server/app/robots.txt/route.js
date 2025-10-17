"use strict";(()=>{var e={};e.id=703,e.ids=[703],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},489:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>h,originalPathname:()=>x,patchFetch:()=>m,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>y});var o={};r.r(o),r.d(o,{GET:()=>l});var a=r(884),n=r(6132),i=r(1040),s=r(9962);async function l(){let e=(0,s.xU)();return new Response(e,{headers:{"Content-Type":"text/plain"}})}let p=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/robots.txt/route",pathname:"/robots.txt",filename:"route",bundlePath:"app/robots.txt/route"},resolvedPagePath:"/Applications/herbspot.fi/app/robots.txt/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:d,headerHooks:h,staticGenerationBailout:y}=p,x="/robots.txt/route";function m(){return(0,i.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}},9962:(e,t,r)=>{r.d(t,{NI:()=>o,xU:()=>a});function o(e,t){let r=e.map(e=>({url:`/p/${e.handle}`,priority:.8,changefreq:"weekly"})),o=t.map(e=>({url:`/c/${e.handle}`,priority:.7,changefreq:"weekly"}));return[{url:"/",priority:1,changefreq:"daily"},{url:"/shop",priority:.9,changefreq:"daily"},{url:"/b2b",priority:.8,changefreq:"weekly"},{url:"/yhteydenotto",priority:.7,changefreq:"monthly"},...r,...o]}function a(){return`User-agent: *
Allow: /

Sitemap: https://herbspot.fi/sitemap.xml

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /checkout/
`}},884:(e,t,r)=>{e.exports=r(517)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[271],()=>r(489));module.exports=o})();