import{s as I,n as M,c as q,d as X,u as Y,g as G,e as J,r as K}from"../chunks/scheduler.c358b412.js";import{S as R,i as V,g as y,h as k,x as C,k as _,a as j,f as z,s as $,j as E,c as L,y as v,z as A,A as Q,m as Z,n as ee,o as te,r as U,u as F,v as N,d as D,t as O,w as P}from"../chunks/index.8b0acd97.js";import{e as S}from"../chunks/each.e59479a4.js";function se(l){let e,s=`<p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b> mohrazzak7@gmail.com</p> <p><b class="pr-2">WhatsApp</b> <a href="http://wa.me/+963995587028" target="_blank" class="text-violet-400">+963995587028<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/mohrazzak7" target="_blank" class="text-violet-400">mohrazzak7<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">Phone Number</b>
 +963-995587-028</p></div>`;return{c(){e=y("footer"),e.innerHTML=s,this.h()},l(n){e=k(n,"FOOTER",{id:!0,class:!0,"data-svelte-h":!0}),C(e)!=="svelte-1245wvd"&&(e.innerHTML=s),this.h()},h(){_(e,"id","touch"),_(e,"class","py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center")},m(n,a){j(n,e,a)},p:M,i:M,o:M,d(n){n&&z(e)}}}class ae extends R{constructor(e){super(),V(this,e,null,se,I,{})}}function W(l,e,s){const n=l.slice();return n[4]=e[s],n[6]=s,n}function B(l){let e,s,n=l[4].name+"",a,r,f;return{c(){e=y("a"),s=y("p"),a=Z(n),r=$(),this.h()},l(t){e=k(t,"A",{href:!0,class:!0,target:!0});var d=E(e);s=k(d,"P",{});var p=E(s);a=ee(p,n),p.forEach(z),r=L(d),d.forEach(z),this.h()},h(){_(e,"href",f=l[4].link),_(e,"class","duration-200 hover:text-violet-400"),_(e,"target",l[6]===2?"_blank":"")},m(t,d){j(t,e,d),v(e,s),v(s,a),v(e,r)},p(t,d){d&2&&n!==(n=t[4].name+"")&&te(a,n),d&2&&f!==(f=t[4].link)&&_(e,"href",f)},d(t){t&&z(e)}}}function le(l){let e,s,n='<b class="font-bold poppins">Mohammad</b> <span class="">Abdalrazzak</span>',a,r,f,t,d='<div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <p class="relative z-9">Download CV</p>',p,b,T,w=S(l[1]),i=[];for(let o=0;o<w.length;o+=1)i[o]=B(W(l,w,o));return{c(){e=y("header"),s=y("h1"),s.innerHTML=n,a=$(),r=y("div");for(let o=0;o<i.length;o+=1)i[o].c();f=$(),t=y("button"),t.innerHTML=d,this.h()},l(o){e=k(o,"HEADER",{class:!0});var m=E(e);s=k(m,"H1",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-1usa8l"&&(s.innerHTML=n),a=L(m),r=k(m,"DIV",{class:!0});var c=E(r);for(let x=0;x<i.length;x+=1)i[x].l(c);c.forEach(z),f=L(m),t=k(m,"BUTTON",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-1p17vu8"&&(t.innerHTML=d),m.forEach(z),this.h()},h(){_(s,"class","font-medium"),_(r,"class","sm:flex items-center gap-4 hidden"),_(t,"class","blueShadow relative overflow-hidden px-5 py-2 group rounded-full cursor-pointer bg-white text-slate-950"),_(e,"class",p="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(l[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))},m(o,m){j(o,e,m),v(e,s),v(e,a),v(e,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,null);v(e,f),v(e,t),b||(T=A(t,"click",l[2]),b=!0)},p(o,[m]){if(m&2){w=S(o[1]);let c;for(c=0;c<w.length;c+=1){const x=W(o,w,c);i[c]?i[c].p(x,m):(i[c]=B(x),i[c].c(),i[c].m(r,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=w.length}m&1&&p!==(p="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(o[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))&&_(e,"class",p)},i:M,o:M,d(o){o&&z(e),Q(i,o),b=!1,T()}}}const ne="../../Mohammad-Abdalrazzak.pdf";function oe(l,e,s){let{y:n}=e,{tabs:a=[{name:"Projects",link:"#projects"},{name:"About me",link:"#about"}]}=e,r=!1;function f(){r||(r=!0,fetch(ne).then(t=>t.blob()).then(t=>{const d=window.URL.createObjectURL(t),p=document.createElement("a");p.href=d,p.setAttribute("download","Mohammad-Abdalrazzak-Resume-2024-04-23.pdf"),document.body.appendChild(p),p.click(),document.body.removeChild(p)}).catch(t=>console.error("Download failed:",t)))}return l.$$set=t=>{"y"in t&&s(0,n=t.y),"tabs"in t&&s(1,a=t.tabs)},[n,a,f]}class re extends R{constructor(e){super(),V(this,e,oe,le,I,{y:0,tabs:1})}}function ie(l){let e=!1,s=()=>{e=!1},n,a,r,f,t='<i class="fa-solid fa-arrow-up"></i>',d,p,b,T,w,i,o,m,c;q(l[5]),q(l[6]),b=new re({props:{y:l[0],innerHeight:l[2]}});const x=l[4].default,g=X(x,l,l[3],null);return i=new ae({}),{c(){a=y("div"),r=y("div"),f=y("button"),f.innerHTML=t,p=$(),U(b.$$.fragment),T=$(),g&&g.c(),w=$(),U(i.$$.fragment),this.h()},l(u){a=k(u,"DIV",{class:!0});var h=E(a);r=k(h,"DIV",{class:!0});var H=E(r);f=k(H,"BUTTON",{class:!0,"data-svelte-h":!0}),C(f)!=="svelte-i4zgfz"&&(f.innerHTML=t),H.forEach(z),p=L(h),F(b.$$.fragment,h),T=L(h),g&&g.l(h),w=L(h),F(i.$$.fragment,h),h.forEach(z),this.h()},h(){_(f,"class","ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"),_(r,"class",d="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(l[0]>0?" opacity-full pointer-events-auto":" pointer-events-none opacity-0")),_(a,"class","container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen")},m(u,h){j(u,a,h),v(a,r),v(r,f),v(a,p),N(b,a,null),v(a,T),g&&g.m(a,null),v(a,w),N(i,a,null),o=!0,m||(c=[A(window,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(s,100),l[5]()}),A(window,"resize",l[6]),A(f,"click",ce)],m=!0)},p(u,[h]){h&1&&!e&&(e=!0,clearTimeout(n),scrollTo(window.pageXOffset,u[0]),n=setTimeout(s,100)),(!o||h&1&&d!==(d="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(u[0]>0?" opacity-full pointer-events-auto":" pointer-events-none opacity-0")))&&_(r,"class",d);const H={};h&1&&(H.y=u[0]),h&4&&(H.innerHeight=u[2]),b.$set(H),g&&g.p&&(!o||h&8)&&Y(g,x,u,u[3],o?J(x,u[3],h,null):G(u[3]),null)},i(u){o||(D(b.$$.fragment,u),D(g,u),D(i.$$.fragment,u),o=!0)},o(u){O(b.$$.fragment,u),O(g,u),O(i.$$.fragment,u),o=!1},d(u){u&&z(a),P(b),g&&g.d(u),P(i),m=!1,K(c)}}}function ce(){document.body.scrollIntoView()}function ue(l,e,s){let{$$slots:n={},$$scope:a}=e,r,f=0,t=0;function d(){s(0,r=window.pageYOffset)}function p(){s(2,t=window.innerHeight),s(1,f=window.innerWidth)}return l.$$set=b=>{"$$scope"in b&&s(3,a=b.$$scope)},[r,f,t,a,n,d,p]}class he extends R{constructor(e){super(),V(this,e,ue,ie,I,{})}}export{he as component};
