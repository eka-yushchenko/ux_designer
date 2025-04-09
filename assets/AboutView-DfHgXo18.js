import{d as p,c as e,a as g,b as t,t as _,F as f,r as $,e as w,m as I,f as k,o as i,_ as u,u as v,g as T,h as l,i as c,w as b,j as L,k as B}from"./index-CySF2UUc.js";const S="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='20'%20fill='%23131313'/%3e%3cpath%20d='M14.7383%2025.2121L23.9142%2016.0362L16.0492%2016.0362L15.9817%2014.9801H25.7194V24.7178L24.6633%2024.6503L24.6633%2016.7853L15.4874%2025.9612L14.7383%2025.2121Z'%20fill='white'/%3e%3c/svg%3e",V={class:"list"},A={key:0,class:"text-item-headline"},N={class:"list__bottom-container"},C={class:"list__container"},E={key:0,class:"text-main-text"},H={class:"list__items"},D={class:"text-main-text"},j={key:0,class:"list__bottom-icon",src:S,alt:"bottom icon",onerror:"this.remove();"},M=p({__name:"_List",props:{title:{},description:{},list:{},hideBottomIcon:{type:Boolean}},setup(h){return(s,n)=>(i(),e("div",V,[s.title?(i(),e("strong",A,_(s.title),1)):g("",!0),t("div",N,[t("div",C,[s.description?(i(),e("p",E,_(s.description),1)):g("",!0),t("ul",H,[(i(!0),e(f,null,$(s.list,(a,o)=>(i(),e("li",{key:o,class:"list__item"},[n[0]||(n[0]=t("div",{class:"list__item-icon"},null,-1)),t("p",D,[s.$slots.default?w(s.$slots,"default",I({key:0,ref_for:!0},{item:a}),void 0):(i(),e(f,{key:1},[k(_(a),1)],64))])]))),128))])]),s.hideBottomIcon?g("",!0):(i(),e("img",j))])]))}}),m=u(M,[["__scopeId","data-v-1476deef"]]),U={class:"hero"},F={class:"hero__skills animation-coming-from-top animation-order-2",style:{"--list-title-desktop-gap":"24px"}},P=p({__name:"_Hero",setup(h){const s=v();return(n,a)=>(i(),e("div",U,[a[0]||(a[0]=t("div",{class:"hero__top-container animation-coming-from-top animation-order-1"},[t("img",{src:T,alt:"my picture",class:"hero__picture","data-masked":""}),t("div",{class:"hero__title-container"},[t("h1",{class:"hero__title text-h1"},"About me")])],-1)),t("div",F,[l(m,{title:"Hard skills:",list:c(s).hardSkills},null,8,["list"]),l(m,{title:"Soft skills:",list:c(s).softSkills},null,8,["list"])])]))}}),R=u(P,[["__scopeId","data-v-e4284d43"]]),Z={class:"tools-list"},q=["src","alt","onerror"],z={class:"tools-list__item-title text-main-text-semibold"},G={key:0,class:"text-small-text"},J=p({__name:"_ToolsList",setup(h){const s=v(),n=s.tools,a=s.appBaseUrl;function o(r){if(this instanceof HTMLImageElement){const y=`Image not found: "${new URL(this.src).pathname}" for tool: ${r.title}`;console.error(y),this.remove()}}return(r,y)=>(i(),e("div",Z,[(i(!0),e(f,null,$(c(n),d=>(i(),e("div",{key:d.title,class:"tools-list__item"},[t("img",{class:"tools-list__item-icon",src:`${c(a)}tools-icons/${d.icon}.svg`,alt:d.title,onerror:x=>o.call(x==null?void 0:x.target,d)},null,8,q),t("p",z,[k(_(d.title)+" ",1),d.baseLevel?(i(),e("span",G," (Base level) ")):g("",!0)])]))),128))]))}}),K=u(J,[["__scopeId","data-v-1498271b"]]),O={class:"experience-list"},Q={class:"experience-list__item-header"},W={class:"experience-list__item-job-title text-h3"},X={class:"experience-list__item-period text-small-text","data-masked":""},Y={class:"experience-list__item-company","data-masked":""},tt=["href"],st=p({__name:"_Experience",setup(h){const s=v();return(n,a)=>(i(),e("div",O,[(i(!0),e(f,null,$(c(s).experience,o=>(i(),e("div",{key:o._id,class:"experience-list__item"},[t("div",Q,[t("strong",W,_(o.jobTitle),1),t("p",X,_(o._period),1),t("p",Y,[o.link?(i(),e("a",{key:0,href:o.link,target:"_blank",rel:"noopener noreferrer","aria-label":"Company link",class:"experience-list__item-link"},_(o.companyName),9,tt)):(i(),e(f,{key:1},[k(_(o.companyName),1)],64))])]),l(m,{list:o.responsibilities},null,8,["list"])]))),128))]))}}),et=u(st,[["__scopeId","data-v-76cc1aed"]]),it="/ux_designer/certificates/mobile-apps.png",ot="/ux_designer/certificates/ux-design.png",nt={class:"additional-info"},at={class:"additional-info__training-courses"},lt={"data-masked":""},ct={class:"additional-info__education"},_t={"data-masked":""},rt=p({__name:"_AdditionalInfo",setup(h){const s=v();return(n,a)=>{const o=B("purify-html");return i(),e("div",nt,[t("div",at,[l(m,{title:"Training courses",list:c(s).trainingCourses,"hide-bottom-icon":""},{default:b(({item:r})=>[L(t("span",lt,null,512),[[o,r]])]),_:1},8,["list"]),a[0]||(a[0]=t("div",{class:"additional-info__certificates"},[t("img",{class:"additional-info__mobile-apps-certificate",src:it,alt:"mobile apps design certificate","data-masked":""}),t("img",{class:"additional-info__ux-design-certificate",src:ot,alt:"ux design certificate","data-masked":""})],-1))]),t("div",ct,[l(m,{title:"Education",list:c(s).education.list,description:c(s).education["university-title"],"hide-bottom-icon":"","data-masked":""},null,8,["list","description"]),l(m,{title:"Languages",list:c(s).languages,"hide-bottom-icon":""},{default:b(({item:r})=>[L(t("span",_t,null,512),[[o,r]])]),_:1},8,["list"])])])}}}),dt=u(rt,[["__scopeId","data-v-cf10f770"]]),mt={class:"about"},pt={class:"about__section"},ut={class:"about__section animation-coming-from-top animation-order-3"},ht={class:"about__section"},ft={class:"about__section"},gt=p({__name:"AboutView",setup(h){return(s,n)=>(i(),e("div",mt,[t("section",pt,[l(R)]),t("section",ut,[n[0]||(n[0]=t("h2",{class:"text-h2"},"Tools",-1)),l(K)]),t("section",ht,[n[1]||(n[1]=t("h2",{class:"text-h2"},"My experience",-1)),l(et)]),t("section",ft,[n[2]||(n[2]=t("h2",{class:"text-h2"},"Additional info",-1)),l(dt)])]))}}),xt=u(gt,[["__scopeId","data-v-28ff8777"]]);export{xt as default};
