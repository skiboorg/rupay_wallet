"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[933],{38933:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ge});var l=t(61758),n=t(38734),s=t(58790),o=t(31458),r=t(59033),c=t(10577),u=t(41640);const i=e=>((0,l.Qi)("data-v-6dbe09f0"),e=e(),(0,l.jt)(),e),d={class:"marquee-wrapper relative-position"},p=["src"],m={class:"no-margin text-body2 text-weight-medium text-dark"},b={class:"marquee-item"},k=i((()=>(0,l.Lk)("p",{class:"marquee-item"},"ВНИМАНИЕ ИДЕТ ОБНОВЛЕНИЕ КОШЕЛЬКА НЕКОТОРЫЕ ФУНКЦИИ МОГУТ БЫТЬ НЕ ДОСТУПНЫ БЛАГОДАРИМ ЗА ПОНИМАНИЕ",-1))),g={class:"flex column items-center justify-around"},v={key:0,class:"flex items-end justify-center gap-5"},f=(0,l.pM)({__name:"BalanceInfo",setup(e){const{p2pUser:a}=(0,u.P)();(0,l.pM)({Vue3Marquee:o.O});const{totalBalanceInRub:t}=(0,r.G)(),{marqueeCoins:i,rupayStats:f}=(0,c.u)();return(e,t)=>{const r=(0,l.g2)("q-avatar"),c=(0,l.g2)("q-btn"),u=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(u,{flat:"",bordered:"",class:"info q-py-sm full-height"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",d,[(0,l.bF)((0,n.R1)(o.O),{class:"q-mb-sm",clone:!0,duration:8},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,n.R1)(i),(e=>((0,l.uX)(),(0,l.CE)("div",{class:"marquee-item flex items-center gap-2",key:e.name},[(0,l.bF)(r,{size:"30px"},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.image,alt:""},null,8,p)])),_:2},1024),(0,l.Lk)("div",null,[(0,l.Lk)("p",m,(0,s.v_)(e.name)+" $"+(0,s.v_)(parseFloat(e.priceUSD).toFixed(2)),1),(0,l.Lk)("p",{style:{"line-height":"110%"},class:(0,s.C4)(["text-caption no-margin",parseFloat(e.change)>0?"text-positive":"text-negative"])},(0,s.v_)(e.change)+"%",3)])])))),128))])),_:1}),(0,l.bF)((0,n.R1)(o.O),{clone:!0,duration:30},{default:(0,l.k6)((()=>[(0,l.Lk)("p",b," Всего пользователей: "+(0,s.v_)(parseInt((0,n.R1)(f).total_p2p_users)+3100),1),k])),_:1})]),(0,l.Lk)("div",g,[(0,n.R1)(a).is_p2p_admin?((0,l.uX)(),(0,l.CE)("div",v,[(0,l.bF)(c,{icon:"las la-arrow-up",class:"stacked-btn",to:"/asset/send",dense:"","no-caps":"",unelevated:"",stack:"",label:"Отправить"}),(0,l.bF)(c,{icon:"las la-arrow-down",class:"stacked-btn",to:"/asset/receive",dense:"","no-caps":"",unelevated:"",stack:"",label:"Получить"}),(0,l.bF)(c,{icon:"las la-money-bill-wave",class:"stacked-btn",to:"/asset/buy",dense:"","no-caps":"",unelevated:"",stack:"",label:"Пополнить"}),(0,l.bF)(c,{icon:"las la-wallet",class:"stacked-btn",to:"/asset/withdrawal",dense:"","no-caps":"",unelevated:"",stack:"",label:"Вывести"})])):(0,l.Q3)("",!0)])])),_:1})}}});var _=t(12807),h=t(97569),y=t(53581),F=t(69001),q=t(98582),x=t.n(q);const w=(0,_.A)(f,[["__scopeId","data-v-6dbe09f0"]]),A=w;x()(f,"components",{QCard:h.A,QAvatar:y.A,QBtn:F.A});var C=t(60494),Q=t(39713);const X={class:"flex column gap-3"},L=(0,l.pM)({__name:"AssetsTab",setup(e){const{ownAssets:a}=(0,r.G)(),t=(0,n.KR)(0);return(0,l.sV)((()=>{t.value=(0,Q.Rg)("index_bottom_container")})),(e,o)=>{const r=(0,l.g2)("q-scroll-area");return(0,l.uX)(),(0,l.Wv)(r,{style:(0,s.Tr)({height:t.value-72+"px"})},{default:(0,l.k6)((()=>[(0,l.Lk)("div",X,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,n.R1)(a),(a=>((0,l.uX)(),(0,l.Wv)(C.A,{asset:a,key:a.id,onClick:t=>e.$router.push(`/asset/${a.key}`)},null,8,["asset","onClick"])))),128))])])),_:1},8,["style"])}}});var R=t(19600);const I=L,V=I;x()(L,"components",{QScrollArea:R.A});var K=t(7757);const T=(0,l.Lk)("img",{style:{width:"200px",height:"auto","object-fit":"contain"},src:"/images/marketplace/olf_signal_white.png",alt:""},null,-1),U=[T],W={key:1},E={class:"row q-col-gutter-md"},S=["href"],M={class:"text-body2 no-margin text-grey-6"},$={class:"text-body2 no-margin text-grey-6"},B=(0,l.pM)({__name:"MarketTab",setup(e){const a=(0,n.KR)(0),t=(0,n.KR)(null),o=[{name:"Торгуй",icon:"las la-exchange-alt",items:[{icon:"/images/marketplace/exchange.png",name:"Биржа",innerUrl:"/exchange"}]},{name:"OLF основа основ - газ блокчейна Rupay",icon:"las la-chart-bar",items:[{icon:"/images/marketplace/otkup.png",name:"Откуп OLF",innerUrl:"/marketplace/olf_buyback"}]}];(0,l.sV)((()=>{a.value=(0,Q.Rg)("index_bottom_container")}));const r=e=>{t.value=e};return(e,n)=>{const c=(0,l.g2)("q-icon"),u=(0,l.g2)("q-item-section"),i=(0,l.g2)("q-item-label"),d=(0,l.g2)("q-item"),p=(0,l.g2)("q-list"),m=(0,l.g2)("q-img"),b=(0,l.g2)("router-link"),k=(0,l.g2)("q-scroll-area");return(0,l.uX)(),(0,l.Wv)(k,{style:(0,s.Tr)({height:a.value-72+"px"})},{default:(0,l.k6)((()=>[(0,l.Lk)("div",{class:"text-center",onClick:n[0]||(n[0]=a=>e.$router.push("/marketplace/signal"))},U),null===t.value?((0,l.uX)(),(0,l.Wv)(p,{key:0,separator:""},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(o,((e,a)=>(0,l.bF)(d,{clickable:"",key:a,onClick:e=>r(a)},{default:(0,l.k6)((()=>[(0,l.bF)(u,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(c,{color:"accent",name:e.icon},null,8,["name"])])),_:2},1024),(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.bF)(i,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])),_:1})):((0,l.uX)(),(0,l.CE)("div",W,[(0,l.bF)(K.A,{color:"grey-10 q-mb-sm ",label:"Назад",onClick:n[1]||(n[1]=e=>r(null))}),(0,l.Lk)("div",E,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o[t.value].items,(e=>((0,l.uX)(),(0,l.CE)("div",{class:"col-4",key:e.name},[e.externalUrl?((0,l.uX)(),(0,l.CE)("a",{key:0,href:e.externalUrl,target:"_blank",class:"text-center"},[(0,l.bF)(m,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,l.Lk)("p",M,(0,s.v_)(e.name),1)],8,S)):((0,l.uX)(),(0,l.Wv)(b,{key:1,to:e.innerUrl,class:"text-center"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,l.Lk)("p",$,(0,s.v_)(e.name),1)])),_:2},1032,["to"]))])))),128))])]))])),_:1},8,["style"])}}});var j=t(54514),O=t(75329),P=t(63418),G=t(24609),z=t(35779),D=t(65287);const N=B,H=N;x()(B,"components",{QScrollArea:R.A,QList:j.A,QItem:O.A,QItemSection:P.A,QIcon:G.A,QItemLabel:z.A,QImg:D.A});var J=t(77854),Y=t(60455),Z=t(81750),ee=function(e,a,t,l){function n(e){return e instanceof t?e:new t((function(a){a(e)}))}return new(t||(t=Promise))((function(t,s){function o(e){try{c(l.next(e))}catch(a){s(a)}}function r(e){try{c(l["throw"](e))}catch(a){s(a)}}function c(e){e.done?t(e.value):n(e.value).then(o,r)}c((l=l.apply(e,a||[])).next())}))};const ae=(0,l.pM)({__name:"Banner",setup(e){const{rupayStats:a}=(0,c.u)(),t=(0,Y.rd)(),s=(0,n.KR)(0),o=(0,n.KR)([]);(0,l.KC)((()=>ee(this,void 0,void 0,(function*(){const e=yield J.rupayApi.get("/api/settings/banner?rupay=1");o.value=e.data}))));const r=e=>{Z.log(e),o.value[e].inner_url?t.push(o.value[e].inner_url):window.location.href=o.value[e].outer_url};return(e,a)=>{const t=(0,l.g2)("q-carousel-slide"),n=(0,l.g2)("q-btn"),c=(0,l.g2)("q-carousel-control"),u=(0,l.g2)("q-carousel"),i=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(i,{flat:"",bordered:"",class:"full-height"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{swipeable:"",animated:"",ref:"carousel",modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=e=>s.value=e),style:{height:"100%",background:"#000"},infinite:""},{control:(0,l.k6)((()=>[(0,l.bF)(c,{position:"bottom-right",offset:[5,5],class:"q-gutter-md"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_left",onClick:a[0]||(a[0]=a=>e.$refs.carousel.previous())}),(0,l.bF)(n,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_right",onClick:a[1]||(a[1]=a=>e.$refs.carousel.next())})])),_:1})])),default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.value,((e,a)=>((0,l.uX)(),(0,l.Wv)(t,{class:"no-padding",onClick:e=>r(a),name:a,"img-src":e.image,key:e.id},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"])])),_:1})}}});var te=t(79923),le=t(58264),ne=t(49912);const se=(0,_.A)(ae,[["__scopeId","data-v-8c70e37a"]]),oe=se;x()(ae,"components",{QCard:h.A,QCarousel:te.A,QCarouselSlide:le.A,QCarouselControl:ne.A,QBtn:F.A});const re=(0,l.pM)({__name:"index",setup(e){const a=(0,n.KR)("assets");return(e,t)=>{const n=(0,l.g2)("q-tab-panel"),s=(0,l.g2)("q-tab-panels"),o=(0,l.g2)("q-tab"),r=(0,l.g2)("q-tabs"),c=(0,l.g2)("q-separator"),u=(0,l.g2)("q-card"),i=(0,l.g2)("q-page"),d=(0,l.gN)("touch-swipe");return(0,l.uX)(),(0,l.Wv)(i,{padding:"",class:"page-wrapper"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{style:{padding:"0"},name:"assets",class:"overflow-hidden"},{default:(0,l.k6)((()=>[(0,l.bF)(A)])),_:1}),(0,l.bF)(n,{style:{padding:"0"},name:"market",class:"overflow-hidden"},{default:(0,l.k6)((()=>[(0,l.bF)(oe)])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(u,{flat:"",bordered:"",class:"overflow-hidden",id:"index_bottom_container"},{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(r,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),"indicator-color":"transparent",class:"shadow-2",align:"justify","active-color":"dark","active-bg-color":"tab"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{"no-caps":"",name:"assets",label:"Активы"}),(0,l.bF)(o,{"no-caps":"",name:"market",label:"Меню"})])),_:1},8,["modelValue"])),[[d]]),(0,l.bF)(c),(0,l.bF)(s,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{name:"assets",class:"overflow-hidden"},{default:(0,l.k6)((()=>[(0,l.RG)(e.$slots,"default",{},(()=>[(0,l.bF)(V)]))])),_:3}),(0,l.bF)(n,{name:"market"},{default:(0,l.k6)((()=>[(0,l.RG)(e.$slots,"default",{},(()=>[(0,l.bF)(H)]))])),_:3})])),_:3},8,["modelValue"])])),_:3})])),_:3})}}});var ce=t(33177),ue=t(64082),ie=t(63815),de=t(64873),pe=t(26721),me=t(37015),be=t(35724);const ke=re,ge=ke;x()(re,"components",{QPage:ce.A,QTabPanels:ue.A,QTabPanel:ie.A,QCard:h.A,QTabs:de.A,QTab:pe.A,QSeparator:me.A}),x()(re,"directives",{TouchSwipe:be.A})}}]);