import{d as l,u as r,c as s,b as n,F as _,r as m,i as d,t as p,o as i,_ as f}from"./index-CySF2UUc.js";const k={class:"contacts"},u={class:"contacts__list animation-coming-from-top animation-order-2"},g=["href","aria-label"],h={class:"contacts__item-icon-container"},x=["src","alt"],v={class:"text-main-text-semibold","data-masked":""},y=l({__name:"ContactView",setup(b){const t=r(),o=[{title:"Linkedin",link:t.contacts.linkedIn,icon:"linkedin"},{title:"@eka_yushchenko",link:t.contacts.telegram,icon:"telegram"},{title:t.contacts.email,link:`mailto:${t.contacts.email}`,icon:"email"},{title:"CV (pdf)",link:t.contacts.cv,icon:"cv"}],c=t.appBaseUrl;return(B,a)=>(i(),s("div",k,[a[0]||(a[0]=n("h1",{class:"text-h1 animation-coming-from-top animation-order-1"}," Contact ",-1)),n("div",u,[(i(),s(_,null,m(o,e=>n("a",{key:e.title,href:e.link,target:"_blank",rel:"noopener noreferrer",class:"contacts__list-item","aria-label":`My ${e.title}`},[n("figure",h,[n("img",{src:`${d(c)}contacts-icons/${e.icon}.svg`,alt:e.title,class:"contacts__item-icon"},null,8,x),n("figcaption",v,p(e.title),1)])],8,g)),64))])]))}}),V=f(y,[["__scopeId","data-v-ad3cf490"]]);export{V as default};
