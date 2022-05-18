(function(){"use strict";var t={348:function(t,e,n){var s=n(9242),o=n(3396);const l=(0,o._)("h1",{id:"page-title",class:"title-font"},"Anton Skoting",-1),i=(0,o.Uk)("Om Mig"),r=(0,o.Uk)("Datakunskaper"),a=(0,o.Uk)("Utbilding"),u={class:"contact"},m=(0,o._)("h4",{class:"title"},"Kontact Information:",-1);function c(t,e,n,s,c,d){const f=(0,o.up)("router-link"),g=(0,o.up)("router-view"),p=(0,o.up)("ContactInfo");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[l,(0,o._)("nav",null,[(0,o.Wm)(f,{class:"title-font",to:{name:"about"}},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(f,{class:"title-font",to:{name:"skills"}},{default:(0,o.w5)((()=>[r])),_:1}),(0,o.Wm)(f,{class:"title-font",to:{name:"education"}},{default:(0,o.w5)((()=>[a])),_:1})])]),(0,o._)("main",null,[(0,o.Wm)(g)]),(0,o._)("footer",null,[(0,o._)("div",u,[m,(0,o.Wm)(p)])])],64)}const d={class:"contact-info"},f=(0,o._)("h4",null,"E-mail:",-1),g=(0,o._)("p",null,"skotinganton@gmail.com",-1),p=(0,o._)("h4",null,"Telefon:",-1),v=(0,o._)("p",null,"070 432 98 55",-1),b=(0,o._)("h4",null,"Adress:",-1),k=(0,o._)("p",null,"Vädursgatan 7 Säffle, 66 133",-1),h=[f,g,p,v,b,k];function x(t,e){return(0,o.wg)(),(0,o.iD)("div",d,h)}var I=n(89);const K={},w=(0,I.Z)(K,[["render",x]]);var _=w,W={components:{ContactInfo:_}};const y=(0,I.Z)(W,[["render",c]]);var D=y,U=n(678);const A={class:"catch-all flex-column"},j=(0,o._)("h1",{class:"title-font"},"404",-1),C=(0,o._)("h4",{class:"title-font"},"Page not found",-1),S=(0,o._)("p",null,"Plese, check the URL again or try one of the links above.",-1),O=[j,C,S];function L(t,e){return(0,o.wg)(),(0,o.iD)("div",A,O)}const E={},P=(0,I.Z)(E,[["render",L]]);var M=P,N=n(7139),Z=n.p+"img/photo.085304d8.jpg";const T={class:"about"},F=(0,o._)("h1",{class:"title-font"},"Lite allmänt om mig...",-1),H=(0,o._)("img",{src:Z,alt:"Foto"},null,-1),J={class:"general-info"},R=(0,o._)("h4",null,"Pronomen:",-1),B=(0,o._)("p",null,"Han / Honom",-1),V=(0,o._)("h4",null,"Ålder:",-1),z=(0,o._)("h4",null,"Körkort:",-1),Y=(0,o._)("p",null,[(0,o.Uk)("B "),(0,o._)("span",null,"✔")],-1),$=(0,o._)("h4",null,"Referenser:",-1),q=(0,o._)("p",null,"Lämnas på begäran.",-1),G=(0,o._)("h4",null,"Vaccinerad mot Covid-19:",-1),X=(0,o._)("p",null,[(0,o.Uk)("3 ggr "),(0,o._)("span",null,"✔")],-1),Q=(0,o._)("p",{class:"text"},"Jag läste till ingenjör på Karlstad Universitet när jag först fick pröva på programmering, sedan dess har jag velat bli programmerare. Efter universitetet har fortsatt att lära mig så mycket som möjligt och hållit mig upptagen med små jobb och egna projekt så gott jag kan. Mitt mål i nuläget är att hitta ett jobb där jag kan finna mig till rätta och trivas, och få en chans att använda det jag har lärt mig i praktiken.",-1);function tt(t,e,n,s,l,i){return(0,o.wg)(),(0,o.iD)("div",T,[F,H,(0,o._)("div",J,[R,B,V,(0,o._)("p",null,(0,N.zw)(i.age)+" år",1),z,Y,$,q,G,X]),Q])}var et={computed:{age:function(){return new Date(Date.now()-new Date("1993-03-23")).getFullYear()-1970}}};const nt=(0,I.Z)(et,[["render",tt]]);var st=nt;const ot={class:"skills"},lt=(0,o._)("div",{class:"txt flex-column"},[(0,o._)("h1",{class:"title-font"},"Data-kunskaper"),(0,o._)("h4",{class:"title-font"},"Programmspråk och Ramvärk"),(0,o._)("p",null,"Alla värden är uppskattingar so kan komma att ändras när som helst.")],-1);function it(t,e,n,s,l,i){const r=(0,o.up)("Skills");return(0,o.wg)(),(0,o.iD)("div",ot,[lt,(0,o.Wm)(r)])}const rt={class:"skill-list"};function at(t,e,n,s,l,i){const r=(0,o.up)("Item");return(0,o.wg)(),(0,o.iD)("div",rt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.skills,((t,e)=>((0,o.wg)(),(0,o.j4)(r,{key:e,skill:t},null,8,["skill"])))),128))])}const ut={class:"skill-item"},mt={class:"name"},ct={class:"percentage-bar"},dt=(0,o._)("div",{class:"label"},"Färdighet",-1),ft={class:"percentage"};function gt(t,e,n,s,l,i){return(0,o.wg)(),(0,o.iD)("div",ut,[(0,o._)("div",mt,(0,N.zw)(i.name),1),(0,o._)("div",ct,[(0,o._)("div",{class:"bar",style:(0,N.j5)({width:i.proficiency+"%"})},null,4)]),dt,(0,o._)("div",ft,(0,N.zw)(i.proficiency)+"%",1)])}var pt={props:{skill:Object},computed:{name:function(){return this.skill.name||"Name"},proficiency:function(){let t=this.skill.proficiency;return t=!isNaN(t)&&t>=0&&t<=1?t:.5,Math.floor(100*t)},image:function(){return this.skill.img?`url(<%= BASE_URL %>${this.skill.img})`:"none"}}};const vt=(0,I.Z)(pt,[["render",gt]]);var bt=vt,kt={components:{Item:bt},data(){return{listOfSkills:[{name:"C"},{name:"C#",proficiency:.75},{name:".Net"},{name:"html",proficiency:.9},{name:"CSS",proficiency:.7},{name:"JavaScript",proficiency:.8},{name:"Java",proficiency:.2},{name:"Phython",proficiency:.3},{name:"React"},{name:"NodeJS & Express"},{name:"Vue",proficiency:.9}]}},computed:{skills:function(){return this.listOfSkills.sort(((t,e)=>{var{name:n,proficiency:s}=t,{name:o,proficiency:l}=e;return n="string"===typeof n?n:"",o="string"===typeof o?o:"",s=isNaN(s)?.5:s,l=isNaN(l)?.5:l,l-s!==0?l-s:n.localeCompare(o)}))}}};const ht=(0,I.Z)(kt,[["render",at]]);var xt=ht,It={components:{Skills:xt}};const Kt=(0,I.Z)(It,[["render",it]]);var wt=Kt;const _t=t=>((0,o.dD)("data-v-31837707"),t=t(),(0,o.Cn)(),t),Wt={class:"education flex-column"},yt=_t((()=>(0,o._)("div",{class:"txt flex-column"},[(0,o._)("h1",{class:"title-font"},"Utbildning"),(0,o._)("p",null,"Lista av kurser, sorterad efter lärosäte och ämne; expanderar när man klickar på dem.")],-1))),Dt={class:"lists"},Ut={class:"single-item"};function At(t,e,n,s,l,i){const r=(0,o.up)("Course"),a=(0,o.up)("DropDown");return(0,o.wg)(),(0,o.iD)("div",Wt,[yt,(0,o._)("div",Dt,[(0,o.Wm)(a,null,{header:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"title",boxItems:["Lexicon","Java-Scrpt, Front-end","2022"]})])),default:(0,o.w5)((()=>[(0,o.Wm)(r,{"box-items":["Lexicon","Säkerhet på nätet","2022"]}),(0,o.Wm)(r,{"box-items":["Lexicon","Agila metoder","2022"]}),(0,o.Wm)(r,{"box-items":["Lexicon","UX/UI-Design","2022"]}),(0,o.Wm)(r,{"box-items":["Lexicon","Webbutveckling med Vue.js","2022"]},null,8,["box-items"]),(0,o.Wm)(r,{"box-items":["Lexicon","Webbutveckling med React","2021"]}),(0,o.Wm)(r,{"box-items":["Lexicon","Backend för frontendutvecklare","2021"]}),(0,o.Wm)(r,{"box-items":["Lexicon","HTML, CSS & Javascript","2021"]})])),_:1}),(0,o.Wm)(a,{closed:""},{header:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"title",boxItems:["Konvux, NTI-skolan","Programmering, C#","2021"]})])),default:(0,o.w5)((()=>[(0,o.Wm)(r,{"box-items":["Konvux, NTI-skolan","Programmering I, C#","2021"]}),(0,o.Wm)(r,{"box-items":["Konvux, NTI-skolan","Programmering II, C#","2021"]})])),_:1}),(0,o.Wm)(a,null,{header:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"title",boxItems:["Karlstad universitet (KAU)","Blandat (202,5 hp)","2019"]},null,8,["boxItems"])])),default:(0,o.w5)((()=>[(0,o.Wm)(a,null,{header:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Datakunskap","2019"]},null,8,["boxItems"])])),default:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Datastrukturer och algoritmer","2019"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Digitalteknik","2018"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Kretsteknik","2018"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Programutvecklingsmetodik","2018"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Programmeringsteknik","2017"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Datorn som ingenjörsverktyg","2014"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Elteknik","2014"]},null,8,["boxItems"])])),_:1}),(0,o.Wm)(a,{closed:""},{header:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Design","2018"]},null,8,["boxItems"])])),default:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Skissteknik I","2018"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Skissteknik II","2018"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Design och hållbar utveckling","2016"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Ergonomi","2016"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Integrerad produktutveckling","2016"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Tillverkningsteknik, Innovation och Design","2016"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Kommunikationsverktyg i designarbete","2015"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Konstruktionsteknik I, IoD","2014"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Konstruktionsteknik II, IoD","2015"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Produktionssystem IoD","2015"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Visuellt tänkande och gestaltning","2015"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Introduktionskurs IoD","2013"]},null,8,["boxItems"])])),_:1}),(0,o.Wm)(a,{closed:""},{header:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Maskinteknik","2016"]},null,8,["boxItems"])])),default:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Hållfasthetslära","2016"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Maskinelement","2015"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Materialteknik I","2016"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Materialteknik II","2015"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Energiteknik","2014"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Mekanik","2014"]},null,8,["boxItems"])])),_:1}),(0,o.Wm)(a,{closed:""},{header:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Matematik","2016"]},null,8,["boxItems"])])),default:(0,o.w5)((()=>[(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Matematik för ingenjörer I","2014"]},null,8,["boxItems"]),(0,o.Wm)(r,{boxItems:["Karlstad universitet (KAU)","Matematik för ingenjörer II","2016"]},null,8,["boxItems"])])),_:1})])),_:1}),(0,o._)("div",Ut,[(0,o.Wm)(r,{class:"title",boxItems:["Älvkullegymnasiet","Gymnasie-ingengör: Samhällsbyggande Eltekik","2013"]})])])])}const jt={class:"drop-down"},Ct=(0,o._)("h4",{class:"default"},"Open / Close",-1),St={class:"body"},Ot=(0,o._)("p",{class:"default"},"body",-1);function Lt(t,e,n,l,i,r){return(0,o.wg)(),(0,o.iD)("div",jt,[(0,o._)("div",{class:"header",onClick:e[0]||(e[0]=(...t)=>r.toggleDropDown&&r.toggleDropDown(...t))},[(0,o.WI)(t.$slots,"header",{},(()=>[Ct]))]),(0,o.Wm)(s.uT,{name:"accordion",onEnter:r.enter,onAfterEnter:r.afterEnter,onLeave:r.leave},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",St,[(0,o.WI)(t.$slots,"default",{},(()=>[Ot]))],512),[[s.F8,t.showDropDown]])])),_:3},8,["onEnter","onAfterEnter","onLeave"])])}var Et={props:{closed:Boolean},data:function(){return{showDropDown:!1}},methods:{toggleDropDown:function(){this.showDropDown=!this.showDropDown},enter:function(t){t.style.height="auto";const e=getComputedStyle(t).height;t.style.height=0,getComputedStyle(t),requestAnimationFrame((()=>{t.style.height=e}))},afterEnter:function(t){t.style.height="auto"},leave:function(t){t.style.height=getComputedStyle(t).height,getComputedStyle(t),requestAnimationFrame((()=>{t.style.height=0}))}},mounted:function(){this.showDropDown=!this.closed}};const Pt=(0,I.Z)(Et,[["render",Lt]]);var Mt=Pt;const Nt={class:"course"};function Zt(t,e,n,s,l,i){return(0,o.wg)(),(0,o.iD)("div",Nt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.items,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},(0,N.zw)(t),1)))),128))])}var Tt={props:{boxItems:Array},computed:{items:function(){return this.boxItems?this.boxItems.filter((t=>"string"===typeof t)):[]}}};const Ft=(0,I.Z)(Tt,[["render",Zt]]);var Ht=Ft,Jt={components:{DropDown:Mt,Course:Ht}};const Rt=(0,I.Z)(Jt,[["render",At],["__scopeId","data-v-31837707"]]);var Bt=Rt;const Vt=[{path:"/",name:"about",component:st},{path:"/skills",name:"skills",component:wt},{path:"/education",name:"education",component:Bt},{path:"/about",redirect:"/"},{path:"/:catchall(.*)",name:"catchall",component:M}],zt=(0,U.p7)({history:(0,U.PO)("/home/"),routes:Vt});var Yt=zt;(0,s.ri)(D).use(Yt).mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var l=e[s]={exports:{}};return t[s](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,l){if(!s){var i=1/0;for(m=0;m<t.length;m++){s=t[m][0],o=t[m][1],l=t[m][2];for(var r=!0,a=0;a<s.length;a++)(!1&l||i>=l)&&Object.keys(n.O).every((function(t){return n.O[t](s[a])}))?s.splice(a--,1):(r=!1,l<i&&(i=l));if(r){t.splice(m--,1);var u=o();void 0!==u&&(e=u)}}return e}l=l||0;for(var m=t.length;m>0&&t[m-1][2]>l;m--)t[m]=t[m-1];t[m]=[s,o,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/home/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,l,i=s[0],r=s[1],a=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(a)var m=a(n)}for(e&&e(s);u<i.length;u++)l=i[u],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(m)},s=self["webpackChunkmy_webbpage"]=self["webpackChunkmy_webbpage"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(348)}));s=n.O(s)})();
//# sourceMappingURL=app.2ae9960b.js.map