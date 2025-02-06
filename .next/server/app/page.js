(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7951:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>p,routeModule:()=>u,tree:()=>d});var i=a(3137),r=a(4647),s=a(4183),o=a.n(s),n=a(1775),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);a.d(t,l);let c=i.AppPageRouteModule,d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7283)),"/home/sumit/portfolioWebsite/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,9958)),"/home/sumit/portfolioWebsite/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,1918,23)),"next/dist/client/components/not-found-error"]}],p=["/home/sumit/portfolioWebsite/app/page.tsx"],m="/page",x={require:a,loadChunk:()=>Promise.resolve()},u=new c({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3524:(e,t,a)=>{Promise.resolve().then(a.bind(a,5865)),Promise.resolve().then(a.bind(a,4999)),Promise.resolve().then(a.bind(a,3501)),Promise.resolve().then(a.bind(a,5801))},5865:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Gallery});var i=a(80),r=a(4571),s=a(9885),o=a(4378);function Gallery(){let e=(0,s.useRef)(null),t=(0,o.Y)(e,{once:!0});return i.jsx("section",{className:"relative py-20",id:"upcoming",children:(0,i.jsxs)("div",{ref:e,className:"container mx-auto px-4",children:[i.jsx(r.E.h2,{className:"mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl",initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{duration:.8},children:"Upcoming Projects"}),i.jsx("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:[{src:"https://i.postimg.cc/RZ0ZHWvZ/piclumen-1738647859780.png",alt:"Art piece 1",title:"School ERP System"},{src:"https://i.postimg.cc/85N376Vy/freepik-the-style-is-candid-image-photography-with-natural-35255.jpg",alt:"Art piece 2",title:"Free Music App"},{src:"https://i.postimg.cc/mZdqrkpw/defense.jpg",alt:"Art piece 3",title:"DefensIQTech App"},{src:"https://i.postimg.cc/WzffYYqK/piclumen-1738647901973.png",alt:"Art piece 4",title:"AR App"}].map((e,a)=>(0,i.jsxs)(r.E.div,{className:"group relative overflow-hidden rounded-lg",initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8,delay:.2*a},children:[i.jsx("div",{className:"aspect-[2/3] overflow-hidden",children:i.jsx("img",{src:e.src||"/placeholder.svg",alt:e.alt,className:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"})}),i.jsx("div",{className:"absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:i.jsx("h3",{className:"text-xl font-semibold text-white",children:e.title})})]},a))})]})})}},4999:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>BackgroundPaths});var i=a(80),r=a(4571),s=a(8384);function FloatingPaths({position:e}){let t=Array.from({length:36},(t,a)=>({id:a,d:`M-${380-5*a*e} -${189+6*a}C-${380-5*a*e} -${189+6*a} -${312-5*a*e} ${216-6*a} ${152-5*a*e} ${343-6*a}C${616-5*a*e} ${470-6*a} ${684-5*a*e} ${875-6*a} ${684-5*a*e} ${875-6*a}`,color:`rgba(15,23,42,${.1+.03*a})`,width:.5+.03*a}));return i.jsx("div",{className:"absolute inset-0 pointer-events-none",children:(0,i.jsxs)("svg",{className:"w-full h-full text-slate-950 dark:text-white",viewBox:"0 0 696 316",fill:"none",children:[i.jsx("title",{children:"Sumit Yadav"}),i.jsx(r.E.p,{className:"max-w-[600px] text-lg text-gray-400 sm:text-xl",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Visual Artist & Creative Director"}),t.map(e=>i.jsx(r.E.path,{d:e.d,stroke:"currentColor",strokeWidth:e.width,strokeOpacity:.1+.03*e.id,initial:{pathLength:.3,opacity:.6},animate:{pathLength:1,opacity:[.3,.6,.3],pathOffset:[0,1,0]},transition:{duration:20+10*Math.random(),repeat:Number.POSITIVE_INFINITY,ease:"linear"}},e.id))]})})}function BackgroundPaths({title:e="Sumit Yadav"}){let t=e.split(" ");return(0,i.jsxs)("div",{className:"relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950",children:[(0,i.jsxs)("div",{className:"absolute inset-0",children:[i.jsx(FloatingPaths,{position:1}),i.jsx(FloatingPaths,{position:-1})]}),i.jsx("div",{className:"relative z-10 container mx-auto px-4 md:px-6 text-center",children:(0,i.jsxs)(r.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2},className:"max-w-4xl mx-auto",children:[i.jsx("h1",{className:"text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter",children:t.map((e,t)=>i.jsx("span",{className:"inline-block mr-4 last:mr-0",children:e.split("").map((e,a)=>i.jsx(r.E.span,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1*t+.03*a,type:"spring",stiffness:150,damping:25},className:"inline-block text-transparent bg-clip-text  bg-gradient-to-r from-neutral-900 to-neutral-700/80  dark:from-white dark:to-white/80",children:e},`${t}-${a}`))},t))}),i.jsx("h1",{className:"text-3xl sm:text-3xl md:text-3xl font-bold mb-3 tracking-tighter ",children:i.jsx(r.E.span,{className:"inline-block text-transparent bg-clip-text  bg-gradient-to-r from-neutral-900 to-neutral-700/80  dark:from-white dark:to-white/80",children:"Mobile Application Developer"})}),i.jsx("p",{className:"text-3xl sm:text-3xl md:text-3xl font-bold mb-3 tracking-tighter "}),i.jsx("div",{className:"inline-block group relative bg-gradient-to-b from-black/10 to-white/10  dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300",children:i.jsx(s.z,{variant:"ghost",className:"rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md  bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100  text-black dark:text-white transition-all duration-300  group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50",children:(0,i.jsxs)("a",{href:"#portfolio",className:"text-black",children:[i.jsx("span",{className:"opacity-90 group-hover:opacity-100 transition-opacity",children:"Upcoming Projects"}),i.jsx("span",{className:"ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5  transition-all duration-300",children:"→"})]})})})]})})]})}},3501:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Portfolio});var i=a(80),r=a(9885),s=a(4571),o=a(569),n=a(2723),l=a(8384),c=a(3161);let d=r.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,c.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));d.displayName="Card";let p=r.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,c.cn)("flex flex-col space-y-1.5 p-6",e),...t}));p.displayName="CardHeader";let m=r.forwardRef(({className:e,...t},a)=>i.jsx("h3",{ref:a,className:(0,c.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));m.displayName="CardTitle";let x=r.forwardRef(({className:e,...t},a)=>i.jsx("p",{ref:a,className:(0,c.cn)("text-sm text-muted-foreground",e),...t}));x.displayName="CardDescription";let u=r.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,c.cn)("p-6 pt-0",e),...t}));u.displayName="CardContent";let h=r.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,c.cn)("flex items-center p-6 pt-0",e),...t}));function Portfolio(){let[e,t]=(0,r.useState)("all"),a=[{id:1,title:"Free Book Reading App",category:"mobile",images:["https://i.ibb.co/pBCY2dLw/Whats-App-Image-2025-02-04-at-11-42-11-AM.jpg","https://i.ibb.co/xS6z8Cjj/Whats-App-Image-2025-02-04-at-11-42-16-AM.jpg","https://i.ibb.co/SXDtr2LW/Whats-App-Image-2025-02-04-at-11-42-00-AM.jpg"],year:"2024"},{id:2,title:"QrScanner App",category:"mobile",images:["https://i.ibb.co/twDM8GkV/Whats-App-Image-2025-02-04-at-9-46-52-PM.jpg","https://i.ibb.co/mFMf6dq0/Whats-App-Image-2025-02-04-at-11-01-05-AM.jpg","https://i.ibb.co/B52N7LRk/Whats-App-Image-2025-02-04-at-9-46-52-PM.jpg","https://i.ibb.co/ynP9dFYt/Whats-App-Image-2025-02-04-at-11-01-04-AM.jpg"],year:"2023"}].filter(t=>"all"===e||t.category===e),c={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3};return i.jsx("section",{className:"bg-black py-20",id:"portfolio",children:(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[i.jsx("div",{className:"mb-12 flex flex-wrap justify-center gap-4",children:["all","mobile","web","software"].map(a=>i.jsx(l.z,{variant:e===a?"default":"outline",onClick:()=>t(a),className:"text-sm capitalize",children:a},a))}),i.jsx(s.E.div,{layout:!0,className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3",children:i.jsx(o.M,{children:a.map(e=>i.jsx(s.E.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:i.jsx(d,{className:"overflow-hidden bg-zinc-900",children:i.jsx(u,{className:"p-0",children:(0,i.jsxs)("div",{className:"group relative",children:[i.jsx(n.Z,{...c,children:e.images.map((t,a)=>i.jsx("div",{className:"relative",children:i.jsx("img",{src:t||"/placeholder.svg",alt:`${e.title} screenshot ${a+1}`,className:"h-[700px] w-full object-cover"})},a))}),(0,i.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:[i.jsx("h3",{className:"text-xl font-semibold text-white",children:e.title}),i.jsx("p",{className:"mt-2 text-sm text-gray-300",children:e.year}),i.jsx("p",{className:"mt-2 text-sm text-gray-300 capitalize",children:e.category})]})]})})})},e.id))})})]})})}h.displayName="CardFooter",a(5404),a(6332)},5801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Social});var i=a(80),r=a(4571),s=a(3500);let o=[{name:"Instagram",icon:s.Zf_,url:"https://www.instagram.com/lord_own_acc?igsh=YnBsZnk2dHQwYnpi"},{name:"Twitter",icon:s.xpo,url:"https://wa.link/3pu81p"},{name:"LinkedIn",icon:s.ltd,url:"https://www.linkedin.com/in/sumit-yadav-83899a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},{name:"GitHub",icon:s.hJX,url:"https://github.com/LordsOwnAcc"}];function Social(){return i.jsx("section",{id:"contact",className:"bg-gradient-to-b from-black to-zinc-900 py-20",children:(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[i.jsx(r.E.h2,{className:"mb-12 text-center text-4xl font-bold tracking-tighter sm:text-5xl",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:i.jsx("span",{className:"bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent",children:"Connect With Me"})}),i.jsx("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:o.map((e,t)=>(0,i.jsxs)(r.E.a,{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"group relative overflow-hidden rounded-lg bg-zinc-800 p-6 transition-all hover:bg-zinc-700 hover:shadow-lg hover:shadow-purple-500/20",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},viewport:{once:!0},children:[(0,i.jsxs)("div",{className:"relative z-10 flex flex-col items-center justify-center",children:[i.jsx(e.icon,{className:"mb-4 text-4xl text-white transition-transform group-hover:scale-110"}),i.jsx("span",{className:"text-sm font-medium text-gray-300 transition-colors group-hover:text-white",children:e.name})]}),i.jsx("div",{className:"absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-50"})]},e.name))})]})})}},8384:(e,t,a)=>{"use strict";a.d(t,{z:()=>c});var i=a(80),r=a(9885),s=a(6637),o=a(1971),n=a(3161);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef(({className:e,variant:t,size:a,asChild:r=!1,...o},c)=>{let d=r?s.g7:"button";return i.jsx(d,{className:(0,n.cn)(l({variant:t,size:a,className:e})),ref:c,...o})});c.displayName="Button"},3161:(e,t,a)=>{"use strict";a.d(t,{cn:()=>cn});var i=a(566),r=a(9610);function cn(...e){return(0,r.m)((0,i.W)(e))}},7283:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Page});var i=a(8144);a(3830);var r=a(7536);let s=(0,r.createProxy)(String.raw`/home/sumit/portfolioWebsite/app/components/gallery.tsx`),{__esModule:o,$$typeof:n}=s,l=s.default,c=(0,r.createProxy)(String.raw`/home/sumit/portfolioWebsite/app/components/portfolio.tsx`),{__esModule:d,$$typeof:p}=c,m=c.default,x=(0,r.createProxy)(String.raw`/home/sumit/portfolioWebsite/app/components/social.tsx`),{__esModule:u,$$typeof:h}=x,g=x.default;function Footer(){return i.jsx("footer",{className:"border-t border-zinc-800 bg-black py-8",children:i.jsx("div",{className:"container mx-auto px-4",children:i.jsx("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsxs)("p",{className:"text-sm text-gray-400",children:["\xa9 ",new Date().getFullYear()," Sumit Yadav. All rights reserved."]})})})})}let f=(0,r.createProxy)(String.raw`/home/sumit/portfolioWebsite/app/components/hero2.tsx`),{__esModule:b,$$typeof:v}=f,y=f.default;function Page(){return(0,i.jsxs)("main",{className:"min-h-screen bg-black text-white",children:[i.jsx(y,{title:"Sumit Yadav"}),(0,i.jsxs)("section",{id:"featured-works",children:[i.jsx(l,{}),i.jsx(m,{})]}),i.jsx(g,{}),i.jsx(Footer,{})]})}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[255,124,821],()=>__webpack_exec__(7951));module.exports=a})();