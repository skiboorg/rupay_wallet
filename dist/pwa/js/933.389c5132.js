"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[933],{38933:(e,a,l)=>{l.r(a),l.d(a,{default:()=>ge});var t=l(61758),n=l(38734),s=l(58790),r=l(31458),o=l(59033),c=l(10577),i=l(39713);const u=e=>((0,t.Qi)("data-v-0866ff40"),e=e(),(0,t.jt)(),e),d={class:"marquee-wrapper relative-position"},m=["src"],p={class:"no-margin text-body2 text-weight-medium text-dark"},k={class:"marquee-item"},g=u((()=>(0,t.Lk)("p",{class:"marquee-item"},"ВНИМАНИЕ ИДЕТ ОБНОВЛЕНИЕ КОШЕЛЬКА НЕКОТОРЫЕ ФУНКЦИИ МОГУТ БЫТЬ НЕ ДОСТУПНЫ БЛАГОДАРИМ ЗА ПОНИМАНИЕ",-1))),b={class:"flex column items-center justify-around"},v={class:"no-margin text-bold text3d text-h4 text-center"},f={class:"flex items-end justify-center gap-5"},_=(0,t.pM)({__name:"BalanceInfo",setup(e){(0,t.pM)({Vue3Marquee:r.O});const{totalBalanceInRub:a}=(0,o.G)(),{marqueeCoins:l,rupayStats:u}=(0,c.u)();return(e,o)=>{const c=(0,t.g2)("q-avatar"),_=(0,t.g2)("q-btn"),h=(0,t.g2)("q-card");return(0,t.uX)(),(0,t.Wv)(h,{flat:"",bordered:"",class:"info q-py-sm full-height"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",d,[(0,t.bF)((0,n.R1)(r.O),{class:"q-mb-sm",clone:!0,duration:8},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,n.R1)(l),(e=>((0,t.uX)(),(0,t.CE)("div",{class:"marquee-item flex items-center gap-2",key:e.name},[(0,t.bF)(c,{size:"30px"},{default:(0,t.k6)((()=>[(0,t.Lk)("img",{src:e.image,alt:""},null,8,m)])),_:2},1024),(0,t.Lk)("div",null,[(0,t.Lk)("p",p,(0,s.v_)(e.name)+" $"+(0,s.v_)(parseFloat(e.priceUSD).toFixed(2)),1),(0,t.Lk)("p",{style:{"line-height":"110%"},class:(0,s.C4)(["text-caption no-margin",parseFloat(e.change)>0?"text-positive":"text-negative"])},(0,s.v_)(e.change)+"%",3)])])))),128))])),_:1}),(0,t.bF)((0,n.R1)(r.O),{clone:!0,duration:30},{default:(0,t.k6)((()=>[(0,t.Lk)("p",k," Всего пользователей: "+(0,s.v_)(parseInt((0,n.R1)(u).total_p2p_users)+3100),1),g])),_:1})]),(0,t.Lk)("div",b,[(0,t.Lk)("p",v,"~ "+(0,s.v_)((0,n.R1)(i.sF)((0,n.R1)(a)))+" ₽",1),(0,t.Lk)("div",f,[(0,t.bF)(_,{icon:"las la-arrow-up",class:"stacked-btn",to:"/asset/send",dense:"","no-caps":"",unelevated:"",stack:"",label:"Отправить"}),(0,t.bF)(_,{icon:"las la-arrow-down",class:"stacked-btn",to:"/asset/receive",dense:"","no-caps":"",unelevated:"",stack:"",label:"Получить"}),(0,t.bF)(_,{icon:"las la-money-bill-wave",class:"stacked-btn",to:"/asset/buy",dense:"","no-caps":"",unelevated:"",stack:"",label:"Пополнить"}),(0,t.bF)(_,{icon:"las la-wallet",class:"stacked-btn",to:"/asset/withdrawal",dense:"","no-caps":"",unelevated:"",stack:"",label:"Вывести"})])])])),_:1})}}});var h=l(12807),F=l(97569),y=l(53581),x=l(69001),q=l(98582),w=l.n(q);const A=(0,h.A)(_,[["__scopeId","data-v-0866ff40"]]),C=A;w()(_,"components",{QCard:F.A,QAvatar:y.A,QBtn:x.A});var Q=l(60494);const L={class:"flex column gap-3"},R=(0,t.pM)({__name:"AssetsTab",setup(e){const{ownAssets:a}=(0,o.G)(),l=(0,n.KR)(0);return(0,t.sV)((()=>{l.value=(0,i.Rg)("index_bottom_container")})),(e,r)=>{const o=(0,t.g2)("q-scroll-area");return(0,t.uX)(),(0,t.Wv)(o,{style:(0,s.Tr)({height:l.value-72+"px"})},{default:(0,t.k6)((()=>[(0,t.Lk)("div",L,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,n.R1)(a),(a=>((0,t.uX)(),(0,t.Wv)(Q.A,{asset:a,key:a.id,onClick:l=>e.$router.push(`/asset/${a.key}`)},null,8,["asset","onClick"])))),128))])])),_:1},8,["style"])}}});var U=l(19600);const X=R,I=X;w()(R,"components",{QScrollArea:U.A});var V=l(7757);const T=(0,t.Lk)("img",{src:"/images/marketplace/sig1.png",alt:""},null,-1),K={key:1},P={class:"row q-col-gutter-md"},W=["href"],E={class:"text-body2 no-margin text-grey-6"},S={class:"text-body2 no-margin text-grey-6"},O=(0,t.pM)({__name:"MarketTab",setup(e){const a=(0,n.KR)(0),l=(0,n.KR)(null),r=[{name:"Торгуй",icon:"las la-exchange-alt",items:[{icon:"/images/marketplace/p2p.png",name:"P2P",innerUrl:"/p2p"},{icon:"/images/marketplace/exchange.png",name:"Биржа",innerUrl:"/exchange"}]},{name:"OLF основа основ - газ блокчейна Rupay",icon:"las la-chart-bar",items:[{icon:"/images/marketplace/otkup.png",name:"Откуп OLF",innerUrl:"/marketplace/olf_buyback"},{icon:"/images/marketplace/shance.webp",name:"OLF шанс",innerUrl:"/marketplace/olf_chance"},{icon:"/images/marketplace/olf-ex.gif",name:"OLF EXCLUSIVE",innerUrl:"/marketplace/olf_exclusive"},{icon:"/images/marketplace/diamond.jpeg",name:"OLF Diamond",innerUrl:"/marketplace/olf_diamond"}]},{name:"Trading pool - твой автоматизированный доход от торговли на крипто бирже, без нервов и хлопот",icon:"las la-chart-line",items:[{icon:"/images/marketplace/pull-hero.jpeg",name:"Trading Pool",innerUrl:"/marketplace/pool/hero"},{icon:"/images/marketplace/pull-lite.jpeg",name:"Trading Pool",innerUrl:"/marketplace/pool/lite"},{icon:"/images/marketplace/pull-fart.jpeg",name:"Trading Pool",innerUrl:"/marketplace/pool/fart"}]},{name:"Токен акция - твой пассивный доход от работы выбранной компании,  без бумажной волокиты",icon:"las la-bookmark",items:[{icon:"/images/marketplace/vip.jpg",name:"VIP Reward",innerUrl:"/marketplace/vip_reward"}]},{name:"Полезный раздел - найдешь то что возможно и не искал(а)",icon:"las la-rss",items:[{icon:"/images/marketplace/news.png",name:"Новостной канал Rupay",externalUrl:"https://t.me/rupayPRO"},{icon:"/images/marketplace/scan.png",name:"RUPAY scan",innerUrl:"/scan"}]}];(0,t.sV)((()=>{a.value=(0,i.Rg)("index_bottom_container")}));const o=e=>{l.value=e};return(e,n)=>{const c=(0,t.g2)("q-avatar"),i=(0,t.g2)("q-item-section"),u=(0,t.g2)("q-item-label"),d=(0,t.g2)("q-item"),m=(0,t.g2)("q-icon"),p=(0,t.g2)("q-list"),k=(0,t.g2)("q-img"),g=(0,t.g2)("router-link"),b=(0,t.g2)("q-scroll-area");return(0,t.uX)(),(0,t.Wv)(b,{style:(0,s.Tr)({height:a.value-72+"px"})},{default:(0,t.k6)((()=>[null===l.value?((0,t.uX)(),(0,t.Wv)(p,{key:0,separator:""},{default:(0,t.k6)((()=>[(0,t.bF)(d,{clickable:"",to:"/marketplace/signal"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(c,{size:"24px"},{default:(0,t.k6)((()=>[T])),_:1})])),_:1}),(0,t.bF)(i,null,{default:(0,t.k6)((()=>[(0,t.bF)(u,null,{default:(0,t.k6)((()=>[(0,t.eW)("OLF Signal")])),_:1})])),_:1})])),_:1}),((0,t.uX)(),(0,t.CE)(t.FK,null,(0,t.pI)(r,((e,a)=>(0,t.bF)(d,{clickable:"",key:a,onClick:e=>o(a)},{default:(0,t.k6)((()=>[(0,t.bF)(i,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(m,{color:"accent",name:e.icon},null,8,["name"])])),_:2},1024),(0,t.bF)(i,null,{default:(0,t.k6)((()=>[(0,t.bF)(u,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,s.v_)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])),_:1})):((0,t.uX)(),(0,t.CE)("div",K,[(0,t.bF)(V.A,{color:"grey-10 q-mb-sm ",label:"Назад",onClick:n[0]||(n[0]=e=>o(null))}),(0,t.Lk)("div",P,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r[l.value].items,(e=>((0,t.uX)(),(0,t.CE)("div",{class:"col-4",key:e.name},[e.externalUrl?((0,t.uX)(),(0,t.CE)("a",{key:0,href:e.externalUrl,target:"_blank",class:"text-center"},[(0,t.bF)(k,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,t.Lk)("p",E,(0,s.v_)(e.name),1)],8,W)):((0,t.uX)(),(0,t.Wv)(g,{key:1,to:e.innerUrl,class:"text-center"},{default:(0,t.k6)((()=>[(0,t.bF)(k,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,t.Lk)("p",S,(0,s.v_)(e.name),1)])),_:2},1032,["to"]))])))),128))])]))])),_:1},8,["style"])}}});var j=l(54514),M=l(75329),B=l(63418),$=l(35779),G=l(24609),z=l(65287);const D=O,N=D;w()(O,"components",{QScrollArea:U.A,QList:j.A,QItem:M.A,QItemSection:B.A,QAvatar:y.A,QItemLabel:$.A,QIcon:G.A,QImg:z.A});var Y=l(77854),H=l(60455),J=l(81750),Z=function(e,a,l,t){function n(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,s){function r(e){try{c(t.next(e))}catch(a){s(a)}}function o(e){try{c(t["throw"](e))}catch(a){s(a)}}function c(e){e.done?l(e.value):n(e.value).then(r,o)}c((t=t.apply(e,a||[])).next())}))};const ee=(0,t.pM)({__name:"Banner",setup(e){const{rupayStats:a}=(0,c.u)(),l=(0,H.rd)(),s=(0,n.KR)(0),r=(0,n.KR)([]);(0,t.KC)((()=>Z(this,void 0,void 0,(function*(){const e=yield Y.rupayApi.get("/api/settings/banner?rupay=1");r.value=e.data}))));const o=e=>{J.log(e),r.value[e].inner_url?l.push(r.value[e].inner_url):window.location.href=r.value[e].outer_url};return(e,a)=>{const l=(0,t.g2)("q-carousel-slide"),n=(0,t.g2)("q-btn"),c=(0,t.g2)("q-carousel-control"),i=(0,t.g2)("q-carousel"),u=(0,t.g2)("q-card");return(0,t.uX)(),(0,t.Wv)(u,{flat:"",bordered:"",class:"full-height"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{swipeable:"",animated:"",ref:"carousel",modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=e=>s.value=e),style:{height:"100%",background:"#000"},infinite:""},{control:(0,t.k6)((()=>[(0,t.bF)(c,{position:"bottom-right",offset:[5,5],class:"q-gutter-md"},{default:(0,t.k6)((()=>[(0,t.bF)(n,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_left",onClick:a[0]||(a[0]=a=>e.$refs.carousel.previous())}),(0,t.bF)(n,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_right",onClick:a[1]||(a[1]=a=>e.$refs.carousel.next())})])),_:1})])),default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.value,((e,a)=>((0,t.uX)(),(0,t.Wv)(l,{class:"no-padding",onClick:e=>o(a),name:a,"img-src":e.image,key:e.id},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"])])),_:1})}}});var ae=l(79923),le=l(58264),te=l(49912);const ne=(0,h.A)(ee,[["__scopeId","data-v-8c70e37a"]]),se=ne;w()(ee,"components",{QCard:F.A,QCarousel:ae.A,QCarouselSlide:le.A,QCarouselControl:te.A,QBtn:x.A});const re=(0,t.pM)({__name:"index",setup(e){const a=(0,n.KR)("assets");return(e,l)=>{const n=(0,t.g2)("q-tab-panel"),s=(0,t.g2)("q-tab-panels"),r=(0,t.g2)("q-tab"),o=(0,t.g2)("q-tabs"),c=(0,t.g2)("q-separator"),i=(0,t.g2)("q-card"),u=(0,t.g2)("q-page"),d=(0,t.gN)("touch-swipe");return(0,t.uX)(),(0,t.Wv)(u,{padding:"",class:"page-wrapper"},{default:(0,t.k6)((()=>[(0,t.bF)(s,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,t.k6)((()=>[(0,t.bF)(n,{style:{padding:"0"},name:"assets",class:"overflow-hidden"},{default:(0,t.k6)((()=>[(0,t.bF)(C)])),_:1}),(0,t.bF)(n,{style:{padding:"0"},name:"market",class:"overflow-hidden"},{default:(0,t.k6)((()=>[(0,t.bF)(se)])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(i,{flat:"",bordered:"",class:"overflow-hidden",id:"index_bottom_container"},{default:(0,t.k6)((()=>[(0,t.bo)(((0,t.uX)(),(0,t.Wv)(o,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),"indicator-color":"transparent",class:"shadow-2",align:"justify","active-color":"dark","active-bg-color":"tab"},{default:(0,t.k6)((()=>[(0,t.bF)(r,{"no-caps":"",name:"assets",label:"Активы"}),(0,t.bF)(r,{"no-caps":"",name:"market",label:"Меню"})])),_:1},8,["modelValue"])),[[d]]),(0,t.bF)(c),(0,t.bF)(s,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,t.k6)((()=>[(0,t.bF)(n,{name:"assets",class:"overflow-hidden"},{default:(0,t.k6)((()=>[(0,t.RG)(e.$slots,"default",{},(()=>[(0,t.bF)(I)]))])),_:3}),(0,t.bF)(n,{name:"market"},{default:(0,t.k6)((()=>[(0,t.RG)(e.$slots,"default",{},(()=>[(0,t.bF)(N)]))])),_:3})])),_:3},8,["modelValue"])])),_:3})])),_:3})}}});var oe=l(33177),ce=l(64082),ie=l(63815),ue=l(64873),de=l(26721),me=l(37015),pe=l(35724);const ke=re,ge=ke;w()(re,"components",{QPage:oe.A,QTabPanels:ce.A,QTabPanel:ie.A,QCard:F.A,QTabs:ue.A,QTab:de.A,QSeparator:me.A}),w()(re,"directives",{TouchSwipe:pe.A})}}]);