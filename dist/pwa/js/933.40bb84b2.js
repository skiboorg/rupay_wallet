"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[933],{38933:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ge});var n=t(61758),l=t(38734),s=t(58790),r=t(31458),o=t(59033),c=t(10577),i=t(39713);const u=e=>((0,n.Qi)("data-v-0866ff40"),e=e(),(0,n.jt)(),e),m={class:"marquee-wrapper relative-position"},d=["src"],p={class:"no-margin text-body2 text-weight-medium text-dark"},g={class:"marquee-item"},k=u((()=>(0,n.Lk)("p",{class:"marquee-item"},"ВНИМАНИЕ ИДЕТ ОБНОВЛЕНИЕ КОШЕЛЬКА НЕКОТОРЫЕ ФУНКЦИИ МОГУТ БЫТЬ НЕ ДОСТУПНЫ БЛАГОДАРИМ ЗА ПОНИМАНИЕ",-1))),b={class:"flex column items-center justify-around"},v={class:"no-margin text-bold text3d text-h4 text-center"},f={class:"flex items-end justify-center gap-5"},_=(0,n.pM)({__name:"BalanceInfo",setup(e){(0,n.pM)({Vue3Marquee:r.O});const{totalBalanceInRub:a}=(0,o.G)(),{marqueeCoins:t,rupayStats:u}=(0,c.u)();return(e,o)=>{const c=(0,n.g2)("q-avatar"),_=(0,n.g2)("q-btn"),h=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.Wv)(h,{flat:"",bordered:"",class:"info q-py-sm full-height"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",m,[(0,n.bF)((0,l.R1)(r.O),{class:"q-mb-sm",clone:!0,duration:8},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,l.R1)(t),(e=>((0,n.uX)(),(0,n.CE)("div",{class:"marquee-item flex items-center gap-2",key:e.name},[(0,n.bF)(c,{size:"30px"},{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:e.image,alt:""},null,8,d)])),_:2},1024),(0,n.Lk)("div",null,[(0,n.Lk)("p",p,(0,s.v_)(e.name)+" $"+(0,s.v_)(parseFloat(e.priceUSD).toFixed(2)),1),(0,n.Lk)("p",{style:{"line-height":"110%"},class:(0,s.C4)(["text-caption no-margin",parseFloat(e.change)>0?"text-positive":"text-negative"])},(0,s.v_)(e.change)+"%",3)])])))),128))])),_:1}),(0,n.bF)((0,l.R1)(r.O),{clone:!0,duration:30},{default:(0,n.k6)((()=>[(0,n.Lk)("p",g," Всего пользователей: "+(0,s.v_)(parseInt((0,l.R1)(u).total_p2p_users)+3100),1),k])),_:1})]),(0,n.Lk)("div",b,[(0,n.Lk)("p",v,"~ "+(0,s.v_)((0,l.R1)(i.sF)((0,l.R1)(a)))+" ₽",1),(0,n.Lk)("div",f,[(0,n.bF)(_,{icon:"las la-arrow-up",class:"stacked-btn",to:"/asset/send",dense:"","no-caps":"",unelevated:"",stack:"",label:"Отправить"}),(0,n.bF)(_,{icon:"las la-arrow-down",class:"stacked-btn",to:"/asset/receive",dense:"","no-caps":"",unelevated:"",stack:"",label:"Получить"}),(0,n.bF)(_,{icon:"las la-money-bill-wave",class:"stacked-btn",to:"/asset/buy",dense:"","no-caps":"",unelevated:"",stack:"",label:"Пополнить"}),(0,n.bF)(_,{icon:"las la-wallet",class:"stacked-btn",to:"/asset/withdrawal",dense:"","no-caps":"",unelevated:"",stack:"",label:"Вывести"})])])])),_:1})}}});var h=t(12807),F=t(97569),y=t(53581),x=t(77954),w=t(98582),q=t.n(w);const A=(0,h.A)(_,[["__scopeId","data-v-0866ff40"]]),C=A;q()(_,"components",{QCard:F.A,QAvatar:y.A,QBtn:x.A});var Q=t(60494);const U={class:"flex column gap-3"},R=(0,n.pM)({__name:"AssetsTab",setup(e){const{ownAssets:a}=(0,o.G)(),t=(0,l.KR)(0);return(0,n.sV)((()=>{t.value=(0,i.Rg)("index_bottom_container")})),(e,r)=>{const o=(0,n.g2)("q-scroll-area");return(0,n.uX)(),(0,n.Wv)(o,{style:(0,s.Tr)({height:t.value-72+"px"})},{default:(0,n.k6)((()=>[(0,n.Lk)("div",U,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,l.R1)(a),(a=>((0,n.uX)(),(0,n.Wv)(Q.A,{asset:a,key:a.id,onClick:t=>e.$router.push(`/asset/${a.key}`)},null,8,["asset","onClick"])))),128))])])),_:1},8,["style"])}}});var L=t(19600);const X=R,V=X;q()(R,"components",{QScrollArea:L.A});var I=t(7757);const T={key:1},E={class:"row q-col-gutter-md"},P=["href"],K={class:"text-body2 no-margin text-grey-6"},j={class:"text-body2 no-margin text-grey-6"},S=(0,n.pM)({__name:"MarketTab",setup(e){const a=(0,l.KR)(0),t=(0,l.KR)(null),r=[{name:"Торгуй",icon:"las la-exchange-alt",items:[{icon:"/images/marketplace/p2p.png",name:"P2P",innerUrl:"/p2p"},{icon:"/images/marketplace/exchange.png",name:"Биржа",innerUrl:"/exchange"}]},{name:"OLF основа основ - газ блокчейна Rupay",icon:"las la-chart-bar",items:[{icon:"/images/marketplace/otkup.png",name:"Откуп OLF",innerUrl:"/marketplace/olf_buyback"},{icon:"/images/marketplace/shance.webp",name:"OLF шанс",innerUrl:"/marketplace/olf_chance"},{icon:"/images/marketplace/olf-ex.gif",name:"OLF EXCLUSIVE",innerUrl:"/marketplace/olf_exclusive"},{icon:"/images/marketplace/diamond.jpeg",name:"OLF Diamond",innerUrl:"/marketplace/olf_diamond"}]},{name:"Trading pool - твой автоматизированный доход от торговли на крипто бирже, без нервов и хлопот",icon:"las la-chart-line",items:[{icon:"/images/marketplace/pull-hero.jpeg",name:"Trading Pool",innerUrl:"/marketplace/trading_pool"},{icon:"/images/marketplace/pull-lite.jpeg",name:"Trading Pool",innerUrl:"/marketplace/trading_pool"},{icon:"/images/marketplace/pull-fart.jpeg",name:"Trading Pool",innerUrl:"/marketplace/trading_pool"}]},{name:"Токен акция - твой пассивный доход от работы выбранной компании,  без бумажной волокиты",icon:"las la-bookmark",items:[{icon:"/images/marketplace/vip.jpg",name:"VIP Reward",innerUrl:"/marketplace/vip_reward"},{icon:"/images/marketplace/e_profit.jpeg",name:"Easy Profit",innerUrl:"/marketplace/easy_profit"}]},{name:"Игры - делу время потехе час, совмещай профит от мира криптовалют с игровым процессом",icon:"las la-gamepad",items:[{icon:"/images/marketplace/chicken_bro.png",name:"ChickenBRO 2.0",externalUrl:"https://chickenbro.ru/"}]},{name:"Полезный раздел - найдешь то что возможно и не искал(а)",icon:"las la-rss",items:[{icon:"/images/marketplace/bb.jpeg",name:"Бизнес клуб «Вместе выгодней»",externalUrl:"https://t.me/VmesteVygodneeBot?start=action-EQ-SFNU-AND-f-EQ-ec743006-843f-457e-92b5-50d31787"},{icon:"/images/marketplace/news.png",name:"Новостной канал Rupay",externalUrl:"https://t.me/rupayPRO"},{icon:"/images/marketplace/scan.png",name:"RUPAY scan",innerUrl:"/scan"}]}];(0,n.sV)((()=>{a.value=(0,i.Rg)("index_bottom_container")}));const o=e=>{t.value=e};return(e,l)=>{const c=(0,n.g2)("q-icon"),i=(0,n.g2)("q-item-section"),u=(0,n.g2)("q-item-label"),m=(0,n.g2)("q-item"),d=(0,n.g2)("q-list"),p=(0,n.g2)("q-img"),g=(0,n.g2)("router-link"),k=(0,n.g2)("q-scroll-area");return(0,n.uX)(),(0,n.Wv)(k,{style:(0,s.Tr)({height:a.value-72+"px"})},{default:(0,n.k6)((()=>[null===t.value?((0,n.uX)(),(0,n.Wv)(d,{key:0,separator:""},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(r,((e,a)=>(0,n.bF)(m,{clickable:"",key:a,onClick:e=>o(a)},{default:(0,n.k6)((()=>[(0,n.bF)(i,{avatar:""},{default:(0,n.k6)((()=>[(0,n.bF)(c,{color:"accent",name:e.icon},null,8,["name"])])),_:2},1024),(0,n.bF)(i,null,{default:(0,n.k6)((()=>[(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,s.v_)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])),_:1})):((0,n.uX)(),(0,n.CE)("div",T,[(0,n.bF)(I.A,{color:"grey-10 q-mb-sm ",label:"Назад",onClick:l[0]||(l[0]=e=>o(null))}),(0,n.Lk)("div",E,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r[t.value].items,(e=>((0,n.uX)(),(0,n.CE)("div",{class:"col-4",key:e.name},[e.externalUrl?((0,n.uX)(),(0,n.CE)("a",{key:0,href:e.externalUrl,target:"_blank",class:"text-center"},[(0,n.bF)(p,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,n.Lk)("p",K,(0,s.v_)(e.name),1)],8,P)):((0,n.uX)(),(0,n.Wv)(g,{key:1,to:e.innerUrl,class:"text-center"},{default:(0,n.k6)((()=>[(0,n.bF)(p,{fit:"cover",ratio:1,class:"rounded-borders-8 q-mb-sm",src:e.icon},null,8,["src"]),(0,n.Lk)("p",j,(0,s.v_)(e.name),1)])),_:2},1032,["to"]))])))),128))])]))])),_:1},8,["style"])}}});var W=t(54514),O=t(75329),B=t(63418),M=t(24609),$=t(35779),G=t(65287);const D=S,N=D;q()(S,"components",{QScrollArea:L.A,QList:W.A,QItem:O.A,QItemSection:B.A,QIcon:M.A,QItemLabel:$.A,QImg:G.A});var z=t(77854),Y=t(60455),H=t(81750),J=function(e,a,t,n){function l(e){return e instanceof t?e:new t((function(a){a(e)}))}return new(t||(t=Promise))((function(t,s){function r(e){try{c(n.next(e))}catch(a){s(a)}}function o(e){try{c(n["throw"](e))}catch(a){s(a)}}function c(e){e.done?t(e.value):l(e.value).then(r,o)}c((n=n.apply(e,a||[])).next())}))};const Z=(0,n.pM)({__name:"Banner",setup(e){const{rupayStats:a}=(0,c.u)(),t=(0,Y.rd)(),s=(0,l.KR)(0),r=(0,l.KR)([]);(0,n.KC)((()=>J(this,void 0,void 0,(function*(){const e=yield z.rupayApi.get("/api/settings/banner?rupay=1");r.value=e.data}))));const o=e=>{H.log(e),r.value[e].inner_url?t.push(r.value[e].inner_url):window.location.href=r.value[e].outer_url};return(e,a)=>{const t=(0,n.g2)("q-carousel-slide"),l=(0,n.g2)("q-btn"),c=(0,n.g2)("q-carousel-control"),i=(0,n.g2)("q-carousel"),u=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.Wv)(u,{flat:"",bordered:"",class:"full-height"},{default:(0,n.k6)((()=>[(0,n.bF)(i,{swipeable:"",animated:"",ref:"carousel",modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=e=>s.value=e),style:{height:"100%",background:"#000"},infinite:""},{control:(0,n.k6)((()=>[(0,n.bF)(c,{position:"bottom-right",offset:[5,5],class:"q-gutter-md"},{default:(0,n.k6)((()=>[(0,n.bF)(l,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_left",onClick:a[0]||(a[0]=a=>e.$refs.carousel.previous())}),(0,n.bF)(l,{push:"",round:"",dense:"",class:"invertBtn","text-color":"dark",icon:"arrow_right",onClick:a[1]||(a[1]=a=>e.$refs.carousel.next())})])),_:1})])),default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.value,((e,a)=>((0,n.uX)(),(0,n.Wv)(t,{class:"no-padding",onClick:e=>o(a),name:a,"img-src":e.image,key:e.id},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"])])),_:1})}}});var ee=t(79923),ae=t(58264),te=t(49912);const ne=(0,h.A)(Z,[["__scopeId","data-v-8c70e37a"]]),le=ne;q()(Z,"components",{QCard:F.A,QCarousel:ee.A,QCarouselSlide:ae.A,QCarouselControl:te.A,QBtn:x.A});const se=(0,n.pM)({__name:"index",setup(e){const a=(0,l.KR)("assets");return(e,t)=>{const l=(0,n.g2)("q-tab-panel"),s=(0,n.g2)("q-tab-panels"),r=(0,n.g2)("q-tab"),o=(0,n.g2)("q-tabs"),c=(0,n.g2)("q-separator"),i=(0,n.g2)("q-card"),u=(0,n.g2)("q-page"),m=(0,n.gN)("touch-swipe");return(0,n.uX)(),(0,n.Wv)(u,{padding:"",class:"page-wrapper"},{default:(0,n.k6)((()=>[(0,n.bF)(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,n.k6)((()=>[(0,n.bF)(l,{style:{padding:"0"},name:"assets",class:"overflow-hidden"},{default:(0,n.k6)((()=>[(0,n.bF)(C)])),_:1}),(0,n.bF)(l,{style:{padding:"0"},name:"market",class:"overflow-hidden"},{default:(0,n.k6)((()=>[(0,n.bF)(le)])),_:1})])),_:1},8,["modelValue"]),(0,n.bF)(i,{flat:"",bordered:"",class:"overflow-hidden",id:"index_bottom_container"},{default:(0,n.k6)((()=>[(0,n.bo)(((0,n.uX)(),(0,n.Wv)(o,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),"indicator-color":"transparent",class:"shadow-2",align:"justify","active-color":"dark","active-bg-color":"tab"},{default:(0,n.k6)((()=>[(0,n.bF)(r,{"no-caps":"",name:"assets",label:"Активы"}),(0,n.bF)(r,{"no-caps":"",name:"market",label:"Меню"})])),_:1},8,["modelValue"])),[[m]]),(0,n.bF)(c),(0,n.bF)(s,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),animated:"",swipeable:"",infinite:""},{default:(0,n.k6)((()=>[(0,n.bF)(l,{name:"assets",class:"overflow-hidden"},{default:(0,n.k6)((()=>[(0,n.RG)(e.$slots,"default",{},(()=>[(0,n.bF)(V)]))])),_:3}),(0,n.bF)(l,{name:"market"},{default:(0,n.k6)((()=>[(0,n.RG)(e.$slots,"default",{},(()=>[(0,n.bF)(N)]))])),_:3})])),_:3},8,["modelValue"])])),_:3})])),_:3})}}});var re=t(33177),oe=t(64082),ce=t(63815),ie=t(64873),ue=t(26721),me=t(37015),de=t(35724);const pe=se,ge=pe;q()(se,"components",{QPage:re.A,QTabPanels:oe.A,QTabPanel:ce.A,QCard:F.A,QTabs:ie.A,QTab:ue.A,QSeparator:me.A}),q()(se,"directives",{TouchSwipe:de.A})}}]);