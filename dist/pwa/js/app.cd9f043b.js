(()=>{var e={22729:(e,t,n)=>{"use strict";var o=n(29104),a=n(69410),i=n(38734),r=n(61758),s=n(58790),l=n(10577);const c=e=>((0,r.Qi)("data-v-28180552"),e=e(),(0,r.jt)(),e),d={key:0,class:"loader-wrapper"},u=c((()=>(0,r.Lk)("div",{class:"loader q-mb-lg"},null,-1))),p={class:"text-white text-body1 no-margin"},f=(0,r.pM)({__name:"Loader",setup(e){const t=(0,l.u)();return(e,n)=>(0,i.R1)(t).globalLoaderActive?((0,r.uX)(),(0,r.CE)("div",d,[u,(0,r.Lk)("p",p,(0,s.v_)((0,i.R1)(t).loaderCurrentAction),1)])):(0,r.Q3)("",!0)}});var v=n(12807);const h=(0,v.A)(f,[["__scopeId","data-v-28180552"]]),m=h,y=(0,r.pM)({__name:"App",setup(e){return(e,t)=>{const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(m),(0,r.bF)(n)],64)}}}),g=y,b=g;var w=n(60604),A=n(12150);const P=(0,w.M_)((()=>{const e=(0,A.Ey)();return e}));var _=n(60455);const k=[{path:"/auth",component:()=>Promise.all([n.e(121),n.e(189)]).then(n.bind(n,75189)),children:[{path:"",component:()=>Promise.all([n.e(121),n.e(996),n.e(575)]).then(n.bind(n,55575))}]},{path:"/",component:()=>Promise.all([n.e(121),n.e(996),n.e(987)]).then(n.bind(n,35987)),children:[{path:"",component:()=>Promise.all([n.e(121),n.e(996),n.e(933)]).then(n.bind(n,38933))},{path:"blocked",component:()=>Promise.all([n.e(121),n.e(996),n.e(496)]).then(n.bind(n,86496))},{path:"notifications",component:()=>Promise.all([n.e(121),n.e(996),n.e(998)]).then(n.bind(n,83998))}]},{path:"/asset",component:()=>Promise.all([n.e(121),n.e(996),n.e(987)]).then(n.bind(n,35987)),children:[{path:":asset_key",component:()=>Promise.all([n.e(121),n.e(996),n.e(514)]).then(n.bind(n,93514))},{path:"receive",component:()=>Promise.all([n.e(121),n.e(996),n.e(890)]).then(n.bind(n,67890))},{path:"send",component:()=>Promise.all([n.e(121),n.e(996),n.e(423)]).then(n.bind(n,32423))},{path:"receive/:asset_key",component:()=>Promise.all([n.e(121),n.e(996),n.e(474)]).then(n.bind(n,35474))},{path:"send/:asset_key",component:()=>Promise.all([n.e(121),n.e(996),n.e(735)]).then(n.bind(n,2735))},{path:"buy",component:()=>Promise.all([n.e(121),n.e(996),n.e(589)]).then(n.bind(n,93589))},{path:"buy/fiat/:asset_key",component:()=>Promise.all([n.e(121),n.e(996),n.e(949)]).then(n.bind(n,36949))},{path:"buy/network/:asset_key",component:()=>Promise.all([n.e(121),n.e(996),n.e(318)]).then(n.bind(n,47318))},{path:"withdrawal",component:()=>Promise.all([n.e(121),n.e(996),n.e(843)]).then(n.bind(n,89843))},{path:"service/bot",component:()=>Promise.all([n.e(121),n.e(996),n.e(800)]).then(n.bind(n,11800))},{path:"service/chicken",component:()=>Promise.all([n.e(121),n.e(996),n.e(376)]).then(n.bind(n,26376))}]},{path:"/p2p",component:()=>Promise.all([n.e(121),n.e(996),n.e(987)]).then(n.bind(n,35987)),children:[{path:"",component:()=>Promise.all([n.e(121),n.e(996),n.e(748)]).then(n.bind(n,22748))},{path:"offer/:offer_id",component:()=>Promise.all([n.e(121),n.e(996),n.e(438)]).then(n.bind(n,93438))},{path:"trade/:trade_uid",component:()=>Promise.all([n.e(121),n.e(996),n.e(148)]).then(n.bind(n,96148))},{path:"settings",component:()=>Promise.all([n.e(121),n.e(996),n.e(872)]).then(n.bind(n,64872))}]},{path:"/exchange",component:()=>Promise.all([n.e(121),n.e(996),n.e(987)]).then(n.bind(n,35987)),children:[{path:"",component:()=>Promise.all([n.e(121),n.e(996),n.e(774)]).then(n.bind(n,94774))},{path:"trade/:b_key/:q_key",component:()=>Promise.all([n.e(121),n.e(996),n.e(120)]).then(n.bind(n,44739))}]},{path:"/person",component:()=>Promise.all([n.e(121),n.e(996),n.e(987)]).then(n.bind(n,35987)),children:[{path:"create/:create_mode",component:()=>Promise.all([n.e(121),n.e(996),n.e(229)]).then(n.bind(n,84229))},{path:"verify",component:()=>Promise.all([n.e(121),n.e(996),n.e(750)]).then(n.bind(n,63750))},{path:"verified_persons",component:()=>Promise.all([n.e(121),n.e(996),n.e(621)]).then(n.bind(n,73621))}]},{path:"/marketplace",component:()=>Promise.all([n.e(121),n.e(996),n.e(987)]).then(n.bind(n,35987)),children:[{path:"vip_reward",component:()=>Promise.all([n.e(121),n.e(996),n.e(436)]).then(n.bind(n,16436))},{path:"taxi",component:()=>Promise.all([n.e(121),n.e(996),n.e(481)]).then(n.bind(n,69481))},{path:"olf_buyback",component:()=>Promise.all([n.e(121),n.e(996),n.e(688)]).then(n.bind(n,46688))},{path:"olf_diamond",component:()=>Promise.all([n.e(121),n.e(996),n.e(391)]).then(n.bind(n,44391))},{path:"olf_exclusive",component:()=>Promise.all([n.e(121),n.e(31)]).then(n.bind(n,26031))},{path:"olf_chance/",component:()=>Promise.all([n.e(121),n.e(996),n.e(739)]).then(n.bind(n,4739))},{path:"olf_chance/chance",component:()=>Promise.all([n.e(121),n.e(996),n.e(743)]).then(n.bind(n,65743))},{path:"easy_profit",component:()=>Promise.all([n.e(121),n.e(996),n.e(801)]).then(n.bind(n,2801))},{path:"pool/hero",component:()=>Promise.all([n.e(121),n.e(996),n.e(916)]).then(n.bind(n,91916))},{path:"pool/lite",component:()=>Promise.all([n.e(121),n.e(996),n.e(556)]).then(n.bind(n,91556))},{path:"pool/fart",component:()=>Promise.all([n.e(121),n.e(996),n.e(461)]).then(n.bind(n,6461))}]},{path:"/scan",component:()=>Promise.all([n.e(121),n.e(996),n.e(987)]).then(n.bind(n,35987)),children:[{path:"",component:()=>Promise.all([n.e(121),n.e(996),n.e(672)]).then(n.bind(n,15672))},{path:"search",component:()=>Promise.all([n.e(121),n.e(996),n.e(826)]).then(n.bind(n,27826))},{path:"search/address/:address",component:()=>Promise.all([n.e(121),n.e(996),n.e(753)]).then(n.bind(n,75753))},{path:"transactions",component:()=>Promise.all([n.e(121),n.e(996),n.e(341)]).then(n.bind(n,92341))},{path:"transactions/:tx",component:()=>Promise.all([n.e(121),n.e(996),n.e(228)]).then(n.bind(n,228))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(121),n.e(544)]).then(n.bind(n,5544))}],x=k,C=(0,w.wE)((function(){const e=_.LA,t=(0,_.aE)({scrollBehavior:()=>({left:0,top:0}),routes:x,history:e("/")});return t}));async function R(e,t){const n=e(b);n.use(a.A,t);const o="function"===typeof P?await P({}):P;n.use(o);const r=(0,i.IG)("function"===typeof C?await C({store:o}):C);return o.use((({store:e})=>{e.router=r})),{app:n,store:o,router:r}}var K=n(2322),T=n(40364);const S={config:{ripple:!1},plugins:{Notify:K.A,Cookies:T.A}};var O=n(29012);(0,O.k)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var I=n(81750);const L="/";async function j({app:e,router:t,store:n},o){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},r=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<o.length;c++)try{await o[c]({app:e,router:t,store:n,ssrContext:null,redirect:r,urlPath:s,publicPath:L})}catch(l){return l&&l.url?void r(l.url):void I.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.mount("#q-app"))}R(o.Ef,S).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;I.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,15960)),Promise.resolve().then(n.bind(n,77854)),Promise.resolve().then(n.bind(n,38861))]).then((t=>{const n=o(t).filter((e=>"function"===typeof e));j(e,n)}))}))},77854:(e,t,n)=>{"use strict";n.r(t),n.d(t,{nodeApi:()=>r,rupayApi:()=>i,scanApi:()=>a});var o=n(94461);const a=o.A.create({baseURL:"https://scan.rupay.pro",timeout:1e4}),i=o.A.create({baseURL:"https://xn--k1affs.xn--p1ai"}),r=o.A.create({baseURL:"https://rupay.pro"})},38861:(e,t,n)=>{"use strict";n.r(t),n.d(t,{era:()=>r});const{EraChain:o}=n(19056),a="https://scan.rupay.pro/api",i=9077,r=new o.API(a,i)},15960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(60604),a=n(59033),i=n(10577),r=n(60027),s=n(77854),l=n(37147),c=n(81750),d=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const u=(0,o.zj)((({app:e,store:t,router:n})=>d(void 0,void 0,void 0,(function*(){const{seed:t}=(0,a.G)(),o=(0,i.u)();l.A.set(!0);try{yield s.rupayApi.post("/api/settings/check_app_version"),o.isRupayNetworkUp=!0}catch(d){c.log("rupay error"),o.isRupayNetworkUp=!1}e.use(r.aj),t||(yield n.push("/auth"))}))))},20359:(e,t,n)=>{"use strict";n.d(t,{s:()=>f});var o=n(59033),a=n(10577),i=n(38734),r=n(77854),s=n(95522),l=n(81750),c=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const{toast:d,Icon:u,Color:p}=(0,s.d)(),f=()=>{const e=(0,o.G)(),t=(0,a.u)(),n=(0,i.KR)([]),s=(0,i.KR)(!1),f=(0,i.KR)(),v=(0,i.KR)([]),h=(0,i.KR)(!1),m=(0,i.KR)([]),y=e=>c(void 0,void 0,void 0,(function*(){const{data:t}=yield(0,r.scanApi)(`/api/addressassets/${e}`);l.log(t),n.value=t,l.log(n.value)})),g=e=>c(void 0,void 0,void 0,(function*(){const{data:t}=yield(0,r.scanApi)(`/apiasset/${e}`);return t})),b=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const{data:o}=yield(0,r.scanApi)(`/api/tx/find?address=${e}&desc=true&limit=${t}&offset=${n}`);return o})),w=e=>c(void 0,void 0,void 0,(function*(){const{data:t}=yield(0,r.scanApi)(`/api/tx/unconfirmed?address=${e}`);return t})),A=(e,t,n,o)=>c(void 0,void 0,void 0,(function*(){s.value=!s.value;let a=[],i=[];const r=yield b(e,n,o),l=r.filter((e=>e.assetKey===parseInt(t)));for(let e in l)l[e].fullDate=new Date(l[e].timestamp).toLocaleString(),l[e].date=new Date(l[e].timestamp).toLocaleDateString();return i=[],a=i.concat(l),s.value=!s.value,a})),P=()=>{f.value=setInterval((()=>c(void 0,void 0,void 0,(function*(){v.value=yield w(e.address),v.value.length>0&&(h.value=!0);for(let e of v.value)m.value.includes(e.timestamp)||(m.value.push(e.timestamp),d("Транзакция обрабатывается",u.info,p.info)),t.activeTxCount=v.value.length;h.value&&0===v.value.length&&(h.value=!1,m.value=[],yield y(e.address),yield e.refreshBalances(),t.activeTxCount=0,d("Транзакции обработаны",u.success,p.success))}))),5e3)},_=()=>{clearInterval(f.value)},k=(e=null)=>c(void 0,void 0,void 0,(function*(){if(e){const{data:t}=yield r.scanApi.get(`/index/blockexplorer.json?transactions=&lang=ru&pageKey=${e}&offset=25`);return t}{const{data:e}=yield r.scanApi.get("/index/blockexplorer.json?transactions&lang=ru");return e}})),x=e=>c(void 0,void 0,void 0,(function*(){return yield r.scanApi.get(`/index/blockexplorer.json?tx=${e}&lang=ru`)}));return{getBalancesByAddress:y,getAssetById:g,transactionsByAssetKey:A,startCheckUnconfirmedTx:P,stopCheckUnconfirmedTx:_,getLastTransactions:k,getTxBySignature:x,balances:n,loading:s,unconfirmedTx:v,haveUnconfirmedTx:h}}},52664:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(38734),a=n(77854),i=n(41640),r=n(59033),s=n(95522),l=n(81750),c=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const{toast:d,sendTgMessage:u,Icon:p,Color:f}=(0,s.d)(),v=()=>{const{getP2PUser:e}=(0,i.P)(),{address:t}=(0,r.G)(),n=(0,o.KR)([]),s=(0,o.KR)(!1),v=()=>c(void 0,void 0,void 0,(function*(){const{data:e}=yield(0,a.rupayApi)("/api/settings/assets");n.value=e})),h=()=>{s.value=!s.value},m=t=>c(void 0,void 0,void 0,(function*(){h();const{data:n}=yield a.rupayApi.post("/api/p2p/delete_payment",{id:t});n.success&&(yield e()),d(n.message,n.success?p.success:p.error,n.success?f.success:f.error),h()}));function y(n){return c(this,void 0,void 0,(function*(){h(),l.log(n);const{data:o}=yield a.rupayApi.post("/api/p2p/add_payment",{wallet:t,selected_method:n.selectedMethod,selected_type:n.selectedType,selected_type_requsites:n.info});yield e(),d("Платежная система добавлена",p.success,f.success),h()}))}function g(n,o){return c(this,void 0,void 0,(function*(){h();const{data:i}=yield a.rupayApi.post("/api/p2p/add_tg",{wallet:t,use_tg:n,chat_id:o});yield e(),d("Изменения сохранены",p.success,f.success),h()}))}const b=e=>c(void 0,void 0,void 0,(function*(){h();const{data:t}=yield a.nodeApi.post("/api/data/create_payment",e);l.log(t),t.success?window.location.href=t.url:d(JSON.stringify(t.message),p.error,f.error),h()})),w=(e,t)=>c(void 0,void 0,void 0,(function*(){const{data:n}=yield a.nodeApi.post("/api/data/rub_withdrawal",e);if(l.log(n),n.success){d("Запрос успешно отправлен",p.success,f.success);let e=`Новый запрос на вывод%0Aот ${t}%0A https://rupay.pro/admincp/data/withdrawal/${n.message}/change/`;yield u(e)}}));return{getRupayAssets:v,deleteP2PPayment:m,addP2PPayment:y,toggleLoading:h,withdrawalRequest:w,addTG:g,newPayment:b,rupayAssets:n,loading:s}}},95522:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var o=n(2322),a=n(94461),i=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const r=()=>{let e,t;(function(e){e["error"]="las la-exclamation-circle",e["info"]="las la-info-circle",e["success"]="las la-check"})(e||(e={})),function(e){e["error"]="negative",e["info"]="info",e["success"]="positive"}(t||(t={}));const n=(e,t,n)=>{o.A.create({timeout:1e3,html:!0,message:e,color:n,icon:t})},r=e=>i(void 0,void 0,void 0,(function*(){yield a.A.get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}`)}));return{toast:n,sendTgMessage:r,Color:t,Icon:e}}},10577:(e,t,n)=>{"use strict";n.d(t,{u:()=>d});var o=n(12150),a=n(38734),i=n(94461),r=n(77854),s=n(81750),l=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const c=["bitcoin","bnb","tether","litecoin","ethereum"],d=(0,o.nY)("common",(()=>{const e=(0,a.KR)(!1),t=(0,a.KR)(),n=(0,a.KR)([]),o=(0,a.KR)(),d=(0,a.KR)(!1),u=(0,a.KR)(!1),p=(0,a.KR)(0),f=e=>{const t=e.data.histPrices["24H"],n=e.data.price.USD-t.USD,o=n/t.USD*100;return+o.toFixed(3)},v=()=>l(void 0,void 0,void 0,(function*(){var e,t;for(let o of c){const{data:a}=yield(0,i.A)(`https://api.cryptorank.io/v0/coins/${o}`);s.log(a),n.value.push({change:f(a),name:a.data.name,image:null===(e=a.data.image)||void 0===e?void 0:e.x60,priceUSD:null===(t=a.data.price)||void 0===t?void 0:t.USD})}s.log("marqueeCoins",n.value)})),h=()=>l(void 0,void 0,void 0,(function*(){const{data:e}=yield(0,r.rupayApi)("/api/settings/data");o.value=e})),m=()=>{e.value=!e.value},y=e=>{t.value=e};return{globalLoaderActive:e,loaderCurrentAction:t,marqueeCoins:n,rupayStats:o,activeTxCount:p,isRupayNetworkUp:d,isBlockChainNetworkUp:u,toggleGlobalLoader:m,setLoaderCurrentAction:y,getCoins:v,getStatistic:h}}))},41640:(e,t,n)=>{"use strict";n.d(t,{P:()=>d});var o=n(12150),a=n(38734),i=n(59033),r=n(77854),s=n(95522),l=n(81750),c=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const d=(0,o.nY)("p2p",(()=>{const{toast:e,Icon:t,Color:n}=(0,s.d)(),o=(0,i.G)(),d=(0,a.KR)(),u=(0,a.KR)(!1),p=(0,a.KR)(!1),f=(0,a.KR)(!1),v=(0,a.KR)([]),h=(0,a.KR)(),m=(0,a.KR)([]),y=(0,a.KR)([]),g=(0,a.KR)([]);let b;(function(e){e["Delete"]="delete",e["NeedHelp"]="need_help",e["TradeAccept"]="trade_accept",e["MoneySend"]="money_send",e["MoneyReceive"]="money_receive",e["AdminStop"]="admin_stop",e["AdminDecline"]="admin_decline",e["FreezeMoney"]="freeze_money"})(b||(b={}));const w=()=>{u.value=!u.value};function A(){var e,t;return c(this,void 0,void 0,(function*(){const{data:n}=yield(0,r.rupayApi)(`/api/p2p/user?wallet=${o.address}`);d.value=n,l.log("payment_types",null===(e=d.value)||void 0===e?void 0:e.payment_types.length),p.value=!(null===(t=d.value)||void 0===t?void 0:t.payment_types.length)}))}function P(){return c(this,void 0,void 0,(function*(){const{data:e}=yield(0,r.rupayApi)(`/api/p2p/notifications?wallet=${o.address}`);v.value=e,f.value=v.value.filter((e=>e.is_new)).length>0}))}function _(){return c(this,void 0,void 0,(function*(){yield r.rupayApi.post("/api/p2p/set_read_notification",{wallet:o.address}),yield P()}))}function k(){return c(this,void 0,void 0,(function*(){const{data:e}=yield(0,r.rupayApi)("/api/p2p/get_payment_methods");h.value=e}))}function x(e,t,n,o=[],a=!1,i=!1){return c(this,void 0,void 0,(function*(){w();const{data:s}=yield(0,r.rupayApi)(`/api/p2p/offers?id=${e}&order_by=${t}&dir=${n}&payments=${o}&online=${a}&verify=${i}`);return w(),s}))}const C=(o,a,i,s)=>c(void 0,void 0,void 0,(function*(){w();let c={wallet:i,asset_key:a,payment_types:s};for(let[e,t]of Object.entries(o))c[e]=t;const{data:d}=yield r.rupayApi.post("/api/p2p/add_offer",c);l.log(d),e(d.message,d.success?t.success:t.error,d.success?n.success:n.error),w()})),R=e=>c(void 0,void 0,void 0,(function*(){w(),l.log(u.value);const{data:t}=yield(0,r.rupayApi)(`/api/p2p/offer?id=${e}`);return w(),l.log(u.value),t})),K=o=>c(void 0,void 0,void 0,(function*(){w();const{data:a}=yield r.rupayApi.post("/api/p2p/create_trade",o);e(a.message,a.success?t.success:t.error,a.success?n.success:n.error),w()})),T=()=>c(void 0,void 0,void 0,(function*(){w();const{data:e}=yield r.rupayApi.get(`/api/p2p/own_offers?wallet=${o.address}`);m.value=e,w()})),S=()=>c(void 0,void 0,void 0,(function*(){w();const{data:e}=yield r.rupayApi.get(`/api/p2p/own_trades?wallet=${o.address}`);y.value=e,w()})),O=()=>c(void 0,void 0,void 0,(function*(){w();const{data:e}=yield r.rupayApi.get("/api/p2p/all_trades");g.value=e,w()})),I=e=>c(void 0,void 0,void 0,(function*(){w();const{data:t}=yield r.rupayApi.get(`/api/p2p/trade?uid=${e}`);return w(),t})),L=(o,a,i,s=null)=>c(void 0,void 0,void 0,(function*(){let c=new FormData;c.set("action",o),s&&c.set("file",s),c.set("wallet",a),c.set("uid",i),l.log(c);const{data:d}=yield(0,r.rupayApi)({method:"post",headers:{"content-type":"multipart/form-data"},url:"/api/p2p/trade_action",data:c});e(d.message,d.success?t.success:t.error,d.success?n.success:n.error)})),j=a=>c(void 0,void 0,void 0,(function*(){const{data:i}=yield r.rupayApi.post("/api/p2p/delete_offer",{wallet:o.address,id:a});e(i.message,i.success?t.success:t.error,i.success?n.success:n.error),yield T()}));return{getPaymentMethods:k,getP2PUser:A,getOffers:x,createOffer:C,getOffer:R,createTrade:K,getOwnOffers:T,getOwnTrades:S,getTrade:I,tradeAction:L,deleteOffer:j,getAllTrades:O,getNotifications:P,setNotificationRead:_,allTrades:g,p2pUser:d,paymentMethods:h,loading:u,TradeActions:b,offers:m,trades:y,showP2PWarning:p,notifications:v,haveNewNotifications:f}}))},59033:(e,t,n)=>{"use strict";n.d(t,{G:()=>f});var o=n(12150),a=n(38734),i=n(61758),r=n(40364),s=n(20359),l=n(52664),c=n(10577),d=n(41640),u=n(81750),p=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((o=o.apply(e,t||[])).next())}))};const f=(0,o.nY)("wallet",(()=>{const{getP2PUser:e,getPaymentMethods:t,getNotifications:n}=(0,d.P)(),o=(0,c.u)(),{getBalancesByAddress:f,getAssetById:v,startCheckUnconfirmedTx:h,stopCheckUnconfirmedTx:m,balances:y}=(0,s.s)(),{getRupayAssets:g,rupayAssets:b}=(0,l.Z)(),w=new Audio("notify.mp3");let A=null;const P=(0,a.KR)(),_=(0,a.KR)(),k=(0,a.KR)(),x=(0,a.KR)(),C=(0,a.KR)([]),R=(0,a.KR)([]),K=(0,i.EW)((()=>{let e=0;for(let t of R.value)e+=t.balance.own*parseFloat(t.course);return e})),T=e=>{x.value=e},S=(0,i.EW)((()=>C.value.filter((e=>e.is_in_p2p)))),O=e=>R.value.find((t=>t.key===parseInt(e))),I=e=>C.value.find((t=>t.key===parseInt(e))),L=e=>{P.value=e},j=(e,t)=>{_.value=e,k.value=t},N=()=>p(void 0,void 0,void 0,(function*(){u.log("ws connecting",_),A=new WebSocket("wss://xn--k1affs.xn--p1ai/ws/user/online"),A.onopen=()=>{var e;u.log("ws connected",_),A.send(JSON.stringify({wallet:_.value,fio:null===(e=x.value)||void 0===e?void 0:e.name})),A.onmessage=e=>p(void 0,void 0,void 0,(function*(){u.log("message",JSON.parse(e.data));let t=JSON.parse(e.data);"update_user_notifications"===t.event&&(yield n(),yield w.play()),t.event}))}})),$=()=>p(void 0,void 0,void 0,(function*(){m(),r.A.remove("hash"),r.A.remove("address"),r.A.remove("publicKey"),window.location.href="/"})),E=()=>p(void 0,void 0,void 0,(function*(){o.toggleGlobalLoader(),u.log("init wallet"),o.setLoaderCurrentAction("Получаем активы..."),yield g(),o.setLoaderCurrentAction("Получаем балансы..."),yield f(_.value),u.log("rupayAssets",b),o.setLoaderCurrentAction("Обновляем балансы..."),C.value=b.value,yield B(),o.setLoaderCurrentAction("Получаем пользователя..."),yield e(),yield n(),o.setLoaderCurrentAction("Получаем платежные системы..."),yield t(),o.setLoaderCurrentAction("Почти все готово..."),h(),u.log("init done"),yield o.getCoins(),yield o.getStatistic(),yield N(),o.setLoaderCurrentAction(""),o.toggleGlobalLoader()})),U=()=>{const e=Object.keys(y.value);for(let t of e){const e=b.value.find((e=>e.key===parseInt(t)));e&&(e.balance.own=y.value[parseInt(t)][0][1],e.balance.debt=y.value[parseInt(t)][1][1],e.balance.hold=y.value[parseInt(t)][2][1],e.balance.spend=y.value[parseInt(t)][3][1],e.balance.pledge=y.value[parseInt(t)][4][1])}},B=()=>p(void 0,void 0,void 0,(function*(){const e=Object.keys(y.value);for(let t of e){const e=yield v(t);if(e.error)u.log("getAsset error. Asset key:",t);else if("Digital asset"===e.type_name){if(0===R.value.filter((t=>t.key===e.key)).length){const e=b.value.find((e=>e.key===parseInt(t)));e&&(e.balance={},e.balance.own=y.value[parseInt(t)][0][1],e.balance.debt=y.value[parseInt(t)][1][1],e.balance.hold=y.value[parseInt(t)][2][1],e.balance.spend=y.value[parseInt(t)][3][1],e.balance.pledge=y.value[parseInt(t)][4][1],R.value.push(e))}}else u.log("skip nft")}}));return{seed:P,address:_,publicKey:k,ownAssets:R,allAssets:C,totalBalanceInRub:K,assetsInP2P:S,person:x,setSeed:L,setWalletData:j,initWallet:E,getOwnAssetByKey:O,getAssetByKey:I,refreshBalances:U,setPerson:T,logout:$}}))},47790:()=>{},73776:()=>{},98285:()=>{},38664:()=>{},21638:()=>{},92668:()=>{},42634:()=>{},15340:()=>{},79838:()=>{},71281:()=>{}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,(()=>{var e=[];n.O=(t,o,a,i)=>{if(!o){var r=1/0;for(d=0;d<e.length;d++){for(var[o,a,i]=e[d],s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,a,i]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+(996===e?"chunk-common":e)+"."+{31:"ecb846a4",120:"1b5ac638",148:"5360dca1",189:"16c14842",228:"431e6328",229:"290b868d",318:"714e28c8",341:"10a0c46b",376:"16543bf9",391:"2321968e",423:"3230902d",436:"bbf30a91",438:"8419a542",461:"3e9ab18d",474:"6557d714",481:"a4b856fd",496:"11b73b90",514:"21595384",544:"2157875d",556:"07916305",575:"487159da",589:"bfd77d15",621:"9788c3ac",672:"5f88d6cd",688:"282aa9cb",735:"765f8959",739:"55e4c05c",743:"947d3d1c",748:"20d4bddc",750:"02db1a8b",753:"6ba9c1b7",774:"0628f9a4",800:"280e2852",801:"8804b3f3",826:"30f6ea60",843:"ac69f8cb",872:"4d86f3c3",890:"593e8e02",916:"e0f5f28d",933:"e14404c6",949:"3c2fb122",987:"84cac0c7",996:"37253476",998:"cf97b328"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{120:"206e9e94",148:"de88c812",228:"7dda027c",438:"091ce356",514:"3dd7c2dc",575:"5fe22078",739:"31b1817a",933:"8ce00ea6",987:"16478eed"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="rupay-wallet:";n.l=(o,a,i,r)=>{if(e[o])e[o].push(a);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[a];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,o,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=n=>{if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=r,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===e||i===t)return a}},o=o=>new Promise(((a,i)=>{var r=n.miniCssF(o),s=n.p+r;if(t(r,s))return a();e(o,s,null,a,i)})),a={524:0};n.f.miniCss=(e,t)=>{var n={120:1,148:1,228:1,438:1,514:1,575:1,739:1,933:1,987:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={524:0};n.f.j=(t,o)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise(((n,o)=>a=e[t]=[n,o]));o.push(a[2]=i);var r=n.p+n.u(t),s=new Error,l=o=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var a,i,[r,s,l]=o,c=0;if(r.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(o);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[121],(()=>n(22729)));o=n.O(o)})();