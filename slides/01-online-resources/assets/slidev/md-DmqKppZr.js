import{d as p,z as f,f as m,o as u,g as a,j as v,k as _,b as x,w as g,C as r,v as k,x as y}from"../modules/vue-ap-fauR2.js";import{u as c,f as b}from"./context-BKfmFGfk.js";import"../index-En4YyKkr.js";import"../modules/shiki-B42H6fBV.js";function i(e){return e.startsWith("/")?"/slides/01-online-resources/"+e.slice(1):e}function h(e,s=!1){const t=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const w={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){c();const s=e,t=f(()=>h(s.background,!0));return(o,l)=>(u(),m("div",{class:"slidev-layout cover text-center",style:_(t.value)},[a("div",w,[v(o.$slots,"default")])],4))}}),z={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$clicksContext:t,$frontmatter:o}=c();return t.setup(),(l,n)=>(u(),x(C,k(y(r(b)(r(o),0))),{default:g(()=>[n[1]||(n[1]=a("h1",null,"Functions",-1)),n[2]||(n[2]=a("p",null,"All you wanted to know about functions",-1)),a("div",{onClick:n[0]||(n[0]=(...d)=>r(s).nav.next&&r(s).nav.next(...d)),class:"mt-12 py-1","hover:bg":"white op-10"}," Press Space for next page -> ")]),_:1},16))}};export{z as default};
