"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[933],{38933:(e,a,t)=>{t.r(a),t.d(a,{default:()=>be});var l=t(61758),n=t(38734),s=t(58790),r=t(31458),o=t(59033),c=t(10577),i=t(39713);const u=e=>((0,l.Qi)("data-v-0866ff40"),e=e(),(0,l.jt)(),e),d={class:"marquee-wrapper relative-position"},m=["src"],p={class:"no-margin text-body2 text-weight-medium text-dark"},g={class:"marquee-item"},k=u((()=>(0,l.Lk)("p",{class:"marquee-item"},"ВНИМАНИЕ ИДЕТ ОБНОВЛЕНИЕ КОШЕЛЬКА НЕКОТОРЫЕ ФУНКЦИИ МОГУТ БЫТЬ НЕ ДОСТУПНЫ БЛАГОДАРИМ ЗА ПОНИМАНИЕ",-1))),b={class:"flex column items-center justify-around"},v={class:"no-margin text-bold text3d text-h4 text-center"},f={class:"flex items-end justify-center gap-5"},_=(0,l.pM)({__name:"BalanceInfo",setup(e){(0,l.pM)({Vue3Marquee:r.O});const{totalBalanceInRub:a}=(0,o.G)(),{marqueeCoins:t,rupayStats:u}=(0,c.u)();return(e,o)=>{const c=(0,l.g2)("q-avatar"),_=(0,l.g2)("q-btn"),h=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(h,{flat:"",bordered:"",class:"info q-py-sm full-height"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",d,[(0,l.bF)((0,n.R1)(r.O),{class:"q-mb-sm",clone:!0,duration:8},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,n.R1)(t),(e=>((0,l.uX)(),(0,l.CE)("div",{class:"marquee-item flex items-center gap-2",key:e.name},[(0,l.bF)(c,{size:"30px"},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.image,alt:""},null,8,m)])),_:2},1024),(0,l.Lk)("div",null,[(0,l.Lk)("p",p,(0,s.v_)(e.name)+" $"+(0,s.v_)(parseFloat(e.priceUSD).toFixed(2)),1),(0,l.Lk)("p",{style:{"line-height":"110%"},class:(0,s.C4)(["text-caption no-margin",parseFloat(e.change)>0?"text-positive":"text-negative"])},(0,s.v_)(e.change)+"%",3)])])))),128))])),_:1}),(0,l.bF)((0,n.R1)(r.O),{clone:!0,duration:30},{default:(0,l.k6)((()=>[(0,l.Lk)("p",g," Всего пользователей: "+(0,s.v_)(parseInt((0,n.R1)(u).total_p2p_users)+3100),1),k])),_:1})]),(0,l.Lk)("div",b,[(0,l.Lk)("p",v,"~ "+(0,s.v_)((0,n.R1)(i.sF)((0,n.R1)(a)))+" ₽",1),(0,l.Lk)("div",f,[(0,l.bF)(_,{icon:"las la-arrow-up",class:"stacked-btn",to:"/asset/send",dense:"","no-caps":"",unelevated:"",stack:"",label:"Отправить"}),(0,l.bF)(_,{icon:"las la-arrow-down",class:"stacked-btn",to:"/asset/receive",dense:"","no-caps":"",unelevated:"",stack:"",label:"Получить"}),(0,l.bF)(_,{icon:"las la-money-bill-wave",class:"stacked-btn",to:"/asset/buy",dense:"","no-caps":"",unelevated:"",stack:"",label:"Пополнить"}),(0,l.bF)(_,{icon:"las la-wallet",class:"stacked-btn",to:"/asset/withdrawal",dense:"","no-caps":"",unelevated:"",stack:"",label:"Вывести"})])])])),_:1})}}});var h=t(12807),F=t(97569),y=t(53581),x=t(69001),w=t(98582),q=t.n(w);const A=(0,h.A)(_,[["__scopeId","data-v-0866ff40"]]),C=A;q()(_,"components",{QCard:F.A,QAvatar:y.A,QBtn:x.A});var L=t(60494);const Q={class:"flex column gap-3"},R=(0,l.pM)({__name:"AssetsTab",setup(e){const{ownAssets:a}=(0,o.G)(),t=(0,n.KR)(0);return(0,l.sV)((()=>{t.value=(0,i.Rg)("index_bottom_container")})),(e,r)=>{const o=(0,l.g2)("q-scroll-area");return(0,l.uX)(),(0,l.Wv)(o,{style:(0,s.Tr)({height:t.value-72+"px"})},{default:(0,l.k6)((()=>[(0,l.Lk)("div",Q,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,n.R1)(a),(a=>((0,l.uX)(),(0,l.Wv)(L.A,{asset:a,key:a.id,onClick:t=>e.$router.push(`/asset/${a.key}`)},null,8,["asset","onClick"])))),128))])])),_:1},8,["style"])}}});var U=t(19600);const X=R,I=X;q()(R,"components",{QScrollArea:U.A});var V=t(7757);const T=(0,l.Lk)("img",{style:{width:"200px",height:"auto","object-fit":"contain"},src:"/images/marketplace/olf_signal_white.png",alt:""},null,-1),K=[T],P={key:1},E={class:"row q-col-gutter-md"},W=["href"],j={class:"text-body2 no-margin text-grey-6"},S={class:"text-body2 no-margin text-grey-6"},O=(0,l.pM)({__name:"MarketTab",setup(e){const a=(0,n.KR)(0),t=(0,n.KR)(null),r=[{name:"Торгуй",icon:"las la-exchange-alt",items:[{icon:"/images/marketplace/p2p.png",name:"P2P",innerUrl:"/p2p"},{icon:"/images/marketplace/exchange.png",name:"Биржа",innerUrl:"/exchange"}]},{name:"OLF основа основ - газ блокчейна Rupay",icon:"las la-chart-bar",items:[{icon:"/images/marketplace/otkup.png",name:"Откуп OLF",innerUrl:"/marketplace/olf_buyback"},{icon:"/images/marketplace/shance.webp",name:"OLF шанс",innerUrl:"/marketplace/olf_chance"},{icon:"/images/marketplace/olf-ex.gif",name:"OLF EXCLUSIVE",innerUrl:"/marketplace/olf_exclusive"},{icon:"/images/marketplace/diamond.jpeg",name:"OLF Diamond",innerUrl:"/marketplace/olf_diamond"}]},{name:"Trading pool - твой автоматизированный доход от торговли на крипто бирже, без нервов и хлопот",icon:"las la-chart-line",items:[{icon:"/images/marketplace/pull-hero.jpeg",name:"Trading Pool",innerUrl:"/marketplace/pool/hero"},{icon:"/images/marketplace/pull-lite.jpeg",name:"Trading Pool",innerUrl:"/marketplace/pool/lite"},{icon:"/images/marketplace/pull-fart.jpeg",name:"Trading Pool",innerUrl:"/marketplace/pool/fart"}]},{name:"Токен акция - твой пассивный доход от работы выбранной компании,  без бумажной волокиты",icon:"las la-bookmark",items:[{icon:"/images/marketplace/vip.jpg",name:"VIP Reward",innerUrl:"/marketplace/vip_reward"}]},{name:"Полезный раздел - найдешь то что возможно и не искал(а)",icon:"las la-rss",items:[{icon:"/images/marketplace/news.png",name:"Новостной канал Rupay",externalUrl:"https://t.me/rupayPRO"},{icon:"/images/marketplace/scan.png",name:"RUPAY scan",innerUrl:"/scan"}]}];(0,l.sV)((()=>{a.value=(0,i.Rg)("index_bottom_container")}));const o=e=>{t.value=e};return(e,n)=>{const c=(0,l.g2)("q-icon"),i=(0,l.g2)("q-item-section"),u=(0,l.g2)("q-item-label"),d=(0,l.g2)("q-item"),m=(0,l.g2)("q-list"),p=(0,l.g2)("q-img"),g=(0,l.g2)("router-link"),k=(0,l.g2)("q-scroll-area");return(0,l.uX)(),(0,l.Wv)(k,{style:(0,s.Tr)({height:a.value-72+"px"})},{default:(0,l.k6)((()=>[(0,l.Lk)("div",{class:"text-center",onClick:n[0]||(n[0]=a=>e.$router.push("/marketplace/signal"))},K),null===t.value?((0,l.uX)(),(0,l.Wv)(m,{key:0,separator:""},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(r,((e,a)=>(0,l.bF)(d,{clickable:"",key:a,onClick:e=>o(a)},{default:(0,l.k6)((()=>[(0,l.bF)(i,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(c,{color:"accent",name:e.icon},null,8,["name"])])),_:2},1024),(0,l.bF)(i,null,{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])),_:1})):((0,l.uX)(),(0,l.CE)("div",P,[(0,l.bF)(V.A,{color:"grey-10 q-mb-sm ",label:"Назад",onClick:n[1]||(n[1]=e=>o(null))}),(0,l.Lk)("div",E,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r[t.value].items,(e=>((0,l.uX)(),(0,l.CE)("div",{class:"col-4",key:e.name},[e.externalUrl?((0,l.uX)(),(0,l.CE)("a",{key:0,href:e.externalUrl,target:"_blank",class:"text-center"},[(0,l.bF)(p,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,l.Lk)("p",j,(0,s.v_)(e.name),1)],8,W)):((0,l.uX)(),(0,l.Wv)(g,{key:1,to:e.innerUrl,class:"text-center"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,l.Lk)("p",S,(0,s.v_)(e.name),1)])),_:2},1032,["to"]))])))),128))])]))])),_:1},8,["style"])}}});var M=t(54514),$=t(75329),B=t(63418),G=t(24609),D=t(35779),z=t(65287);const N=O,Y=N;q()(O,"components",{QScrollArea:U.A,QList:M.A,QItem:$.A,QItemSection:B.A,QIcon:G.A,QItemLabel:D.A,QImg:z.A});var H=t(77854),J=t(60455),Z=t(81750),ee=function(e,a,t,l){function n(e){return e instanceof t?e:new t((function(a){a(e)}))}return new(t||(t=Promise))((function(t,s){function r(e){try{c(l.next(e))}catch(a){s(a)}}function o(e){try{c(l["throw"](e))}catch(a){s(a)}}function c(e){e.done?t(e.value):n(e.value).then(r,o)}c((l=l.apply(e,a||[])).next())}))};const ae=(0,l.pM)({__name:"Banner",setup(e){const{rupayStats:a}=(0,c.u)(),t=(0,J.rd)(),s=(0,n.KR)(0),r=(0,n.KR)([]);(0,l.KC)((()=>ee(this,void 0,void 0,(function*(){const e=yield H.rupayApi.get("/api/settings/banner?rupay=1");r.value=e.data}))));const o=e=>{Z.log(e),r.value[e].inner_url?t.push(r.value[e].inner_url):window.location.href=r.value[e].outer_url};return(e,a)=>{const t=(0,l.g2)("q-carousel-slide"),n=(0,l.g2)("q-btn"),c=(0,l.g2)("q-carousel-control"),i=(0,l.g2)("q-carousel"),u=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(u,{flat:"",bordered:"",class:"full-height"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{swipeable:"",animated:"",ref:"carousel",modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=e=>s.value=e),style:{height:"100%",background:"#000"},infinite:""},{control:(0,l.k6)((()=>[(0,l.bF)(c,{position:"bottom-right",offset:[5,5],class:"q-gutter-md"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_left",onClick:a[0]||(a[0]=a=>e.$refs.carousel.previous())}),(0,l.bF)(n,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_right",onClick:a[1]||(a[1]=a=>e.$refs.carousel.next())})])),_:1})])),default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.value,((e,a)=>((0,l.uX)(),(0,l.Wv)(t,{class:"no-padding",onClick:e=>o(a),name:a,"img-src":e.image,key:e.id},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"])])),_:1})}}});var te=t(79923),le=t(58264),ne=t(49912);const se=(0,h.A)(ae,[["__scopeId","data-v-8c70e37a"]]),re=se;q()(ae,"components",{QCard:F.A,QCarousel:te.A,QCarouselSlide:le.A,QCarouselControl:ne.A,QBtn:x.A});const oe=(0,l.pM)({__name:"index",setup(e){const a=(0,n.KR)("assets");return(e,t)=>{const n=(0,l.g2)("q-tab-panel"),s=(0,l.g2)("q-tab-panels"),r=(0,l.g2)("q-tab"),o=(0,l.g2)("q-tabs"),c=(0,l.g2)("q-separator"),i=(0,l.g2)("q-card"),u=(0,l.g2)("q-page"),d=(0,l.gN)("touch-swipe");return(0,l.uX)(),(0,l.Wv)(u,{padding:"",class:"page-wrapper"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{style:{padding:"0"},name:"assets",class:"overflow-hidden"},{default:(0,l.k6)((()=>[(0,l.bF)(C)])),_:1}),(0,l.bF)(n,{style:{padding:"0"},name:"market",class:"overflow-hidden"},{default:(0,l.k6)((()=>[(0,l.bF)(re)])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(i,{flat:"",bordered:"",class:"overflow-hidden",id:"index_bottom_container"},{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(o,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),"indicator-color":"transparent",class:"shadow-2",align:"justify","active-color":"dark","active-bg-color":"tab"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{"no-caps":"",name:"assets",label:"Активы"}),(0,l.bF)(r,{"no-caps":"",name:"market",label:"Меню"})])),_:1},8,["modelValue"])),[[d]]),(0,l.bF)(c),(0,l.bF)(s,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,l.k6)((()=>[(0,l.bF)(n,{name:"assets",class:"overflow-hidden"},{default:(0,l.k6)((()=>[(0,l.RG)(e.$slots,"default",{},(()=>[(0,l.bF)(I)]))])),_:3}),(0,l.bF)(n,{name:"market"},{default:(0,l.k6)((()=>[(0,l.RG)(e.$slots,"default",{},(()=>[(0,l.bF)(Y)]))])),_:3})])),_:3},8,["modelValue"])])),_:3})])),_:3})}}});var ce=t(33177),ie=t(64082),ue=t(63815),de=t(64873),me=t(26721),pe=t(37015),ge=t(35724);const ke=oe,be=ke;q()(oe,"components",{QPage:ce.A,QTabPanels:ie.A,QTabPanel:ue.A,QCard:F.A,QTabs:de.A,QTab:me.A,QSeparator:pe.A}),q()(oe,"directives",{TouchSwipe:ge.A})}}]);