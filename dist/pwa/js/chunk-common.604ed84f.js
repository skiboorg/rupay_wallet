"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[996],{77474:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(19056),o=n(59033),s=n(95522),r=n(38861),i=n(81750),l=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function r(e){try{l(a.next(e))}catch(t){s(t)}}function i(e){try{l(a["throw"](e))}catch(t){s(t)}}function l(e){e.done?n(e.value):o(e.value).then(r,i)}l((a=a.apply(e,t||[])).next())}))};const{toast:d,Icon:c,Color:u}=(0,s.d)();let p={10:"Не хватает средств для оплаты комиссии",31:"Не хватает средств на балансе",11:"Не хватает средств на балансе",238:"Дробная часть имеет слишком много знаков"};const f=()=>{const e=(0,o.G)(),t=.001,n=e=>l(void 0,void 0,void 0,(function*(){if(!e)return{publicKey:null,secretKey:null};const t=yield a.EraChain.Crypt.generateAccountSeed(e,0);return a.EraChain.Crypt.getKeyPairFromSeed(t)}));function s(t){return l(this,void 0,void 0,(function*(){const n=yield r.era.getPersonByAddress(t);n.error?i.log("not person"):(i.log("personByAddress",n),e.setPerson(n))}))}const f=()=>l(void 0,void 0,void 0,(function*(){const t=yield n(e.seed),o=yield a.EraChain.Crypt.addressByPublicKey(t.publicKey),r=yield a.EraChain.Base58.encode(t.publicKey);return e.setWalletData(o,r),yield s(o),Promise.resolve(!0)})),g=()=>l(void 0,void 0,void 0,(function*(){return yield a.EraChain.Crypt.generateSeed()})),v=(t,o,s,i,d)=>l(void 0,void 0,void 0,(function*(){let l={success:!1,fee:0,raw:""};if(!t)return l;const c=!0,u=yield n(e.seed),p=new a.EraChain.Type.KeyPair(u.secretKey,u.publicKey),f={assetKey:t,amount:o},g=yield r.era.tranRawSendAsset(p,f,s,i,d,!1,c);return g.error||(l.success=!0,l.fee=g.fee,l.raw=g.raw),l})),y=t=>l(void 0,void 0,void 0,(function*(){i.log(t);const o=yield n(e.seed),s=new a.EraChain.Type.KeyPair(o.secretKey,o.publicKey),l=yield r.era.tranBySeq(t);return yield r.era.tranRawCancelOrder(s,"",l.signature,!0)})),m=(t,o,s,i)=>l(void 0,void 0,void 0,(function*(){const l=yield n(e.seed),d=new a.EraChain.Type.KeyPair(l.secretKey,l.publicKey);return yield r.era.tranRawOrder(d,"",t,o,s,i,!0)})),b=e=>l(void 0,void 0,void 0,(function*(){const t=yield r.era.broadcast64(e);let n={success:!1,result:null};return t.error?(i.log(t),n.result=t.message,d(p[t.error],c.error,u.error)):(n.success=!0,n.result=t,d("Транзакция создана",c.info,u.info)),n})),h=t=>l(void 0,void 0,void 0,(function*(){const o=yield n(e.seed);i.log(o);const s=new a.EraChain.Type.KeyPair(o.secretKey,o.publicKey),l=yield r.era.tranRawPersonCertify(s,t,!1);return l}));return{TX_COMMISSION:t,getKeyPair:n,addAddress:f,generateSeed:g,getFee:v,cancelOrder:y,createOrder:m,signTransaction:b,registerPersonCertify:h}}},11333:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(12150),o=n(77854),s=n(38734),r=n(59033),i=n(81750),l=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function r(e){try{l(a.next(e))}catch(t){s(t)}}function i(e){try{l(a["throw"](e))}catch(t){s(t)}}function l(e){e.done?n(e.value):o(e.value).then(r,i)}l((a=a.apply(e,t||[])).next())}))};const{address:d}=(0,r.G)(),c=(0,a.nY)("exchange",(()=>{const e=(0,s.KR)(!1),t=(0,s.KR)(),n=(0,s.KR)(),a=(0,s.KR)([]),r=(0,s.KR)(),c=(0,s.KR)(),u=(0,s.KR)(),p=()=>{e.value=!e.value},f=()=>l(void 0,void 0,void 0,(function*(){const{data:e}=yield o.rupayApi.get("/api/settings/volumes");r.value=e})),g=()=>l(void 0,void 0,void 0,(function*(){p(),yield f();const{data:e}=yield o.scanApi.get("/apiexchange/spot/list"),n=Object.keys(e).sort(((e,t)=>"RupayUSDT_RUPAY"===e?-1:"OLF_RupayUSDT"===t?1:e.localeCompare(t))),a={};for(const t of n)a[t]=e[t];t.value=a,p()})),v=()=>l(void 0,void 0,void 0,(function*(){const e=yield o.scanApi.get("/index/blockexplorer.json?exchange&lang=en");i.log(e.data.popularPairs),n.value=e.data.popularPairs,a.value=e.data.lastTrades}));function y(e=0){return l(this,void 0,void 0,(function*(){if(0===e){const{data:e}=yield o.scanApi.get(`/apiexchange/allordersbyaddress/${d}?limit=20&desc`);return e}{const{data:t}=yield o.scanApi.get(`/apiexchange/allordersbyaddress/${d}/${e}?limit=20&desc`);return t}}))}function m(e){return i.log("checkOrdersData",e.length),i.log(e),20===e.length&&e[19].id}const b=()=>l(void 0,void 0,void 0,(function*(){p();let e=yield y(),t=m(e);if(t)do{let n=yield y(t);e=e.concat(n),t=m(n),i.log("do again",t)}while(t);p(),c.value=e})),h=(e,t)=>l(void 0,void 0,void 0,(function*(){const{data:n}=yield o.scanApi.get(`/apiexchange/ordersbook/${t}/${e}?limit=500`);u.value=n})),_=(e,t,n)=>l(void 0,void 0,void 0,(function*(){let a=[];const{data:s}=yield o.scanApi.get(`/apiexchange/trades/${e}/${t}?timestamp=${n}&limit=500`);i.log(s);for(let e of s.reverse())a.push({time:parseInt(e.timestamp)/1e3,value:e.price});return i.log(a),a.filter(((e,t,n)=>n.findIndex((t=>t.time===e.time))===t))}));return{getTradePairs:g,getOwnOrders:b,getOrdersByQuoteBase:h,getTradeHistory:_,getAllTradePairs:v,tradePairs:t,tradePairVolumes:r,ownOrders:c,ordersByQuoteBase:u,loading:e,lastTrades:a,allTradePairs:n}}))},39713:(e,t,n)=>{n.d(t,{$r:()=>_,Rg:()=>b,gs:()=>h,n1:()=>y,rW:()=>v,sF:()=>m,ww:()=>f});var a=n(24974),o=n(40364),s=n(82084),r=n(95522),i=n(81750),l=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function r(e){try{l(a.next(e))}catch(t){s(t)}}function i(e){try{l(a["throw"](e))}catch(t){s(t)}}function l(e){e.done?n(e.value):o(e.value).then(r,i)}l((a=a.apply(e,t||[])).next())}))};const{toast:d,Icon:c,Color:u}=(0,r.d)(),p="https://scan.rupay.pro",f=(e,t)=>e.length===t.length&&e.every(((e,n)=>e===t[n])),g=e=>{const t={status:!0,seed:e.seed},n=a.createCipher("aes192",e.password);return n.update(JSON.stringify(t),"utf8","hex")+n.final("hex")},v=e=>{try{const t=a.createDecipher("aes192",e.password),n=t.update(e.hash,"hex","utf8")+t.final("utf8"),o=JSON.parse(n);return!!o.status&&o.seed}catch(t){return i.log(t),!1}},y=e=>{o.A.set("hash",g(e))},m=e=>e.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}),b=e=>{const t=document.getElementById(e);return i.log(t),i.log(t.offsetHeight),t.offsetHeight},h=e=>p+e;function _(e,t){return l(this,void 0,void 0,(function*(){yield(0,s.A)(e),d(t,c.info,u.info)}))}},60494:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(61758),o=n(58790);const s=["src"],r={class:"col-grow"},i={class:"text-subtitle2 text-weight-bold no-margin"},l={key:0,class:"col-grow text-right"},d={class:"text-subtitle2 text-weight-bold no-margin"},c=(0,a.pM)({__name:"AssetCard",props:{asset:{},onlyIcon:{type:Boolean},disabled:{type:Boolean},caption:{}},setup(e){return(e,t)=>{const n=(0,a.g2)("q-avatar"),c=(0,a.g2)("q-card-section"),u=(0,a.g2)("q-card");return(0,a.uX)(),(0,a.Wv)(u,{flat:"",bordered:"",class:(0,o.C4)({disabled:e.disabled})},{default:(0,a.k6)((()=>[(0,a.bF)(c,{horizontal:"",class:"items-center gap-3 q-pa-sm"},{default:(0,a.k6)((()=>[(0,a.bF)(n,{size:"40px"},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{style:{"border-radius":"100%"},src:e.asset.icon,alt:""},null,8,s)])),_:1}),(0,a.Lk)("div",r,[(0,a.Lk)("p",i,(0,o.v_)(e.asset.name),1)]),e.onlyIcon?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("p",d,(0,o.v_)(e.asset.balance.own),1)]))])),_:1})])),_:1},8,["class"])}}});var u=n(97569),p=n(27066),f=n(53581),g=n(98582),v=n.n(g);const y=c,m=y;v()(c,"components",{QCard:u.A,QCardSection:p.A,QAvatar:f.A})},3388:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(61758),o=n(58790);const s={class:"no-margin text-weight-medium text-body1"},r=(0,a.pM)({__name:"Card",props:{title:{},titleClasses:{},horizontal:{type:Boolean,default:!1},withAction:{type:Boolean,default:!1},slotClasses:{},needActions:{type:Boolean,default:!1},loading:{type:Boolean}},setup(e){return(e,t)=>{const n=(0,a.g2)("q-card-section"),r=(0,a.g2)("q-separator"),i=(0,a.g2)("q-card-actions"),l=(0,a.g2)("q-spinner-bars"),d=(0,a.g2)("q-inner-loading"),c=(0,a.g2)("q-card");return(0,a.uX)(),(0,a.Wv)(c,{flat:"",bordered:"",class:""},{default:(0,a.k6)((()=>[e.title?((0,a.uX)(),(0,a.Wv)(n,{key:0,class:(0,o.C4)(["bg-grey-invert relative-position",[e.titleClasses,e.withAction?"flex items-center justify-between":""]])},{default:(0,a.k6)((()=>[(0,a.Lk)("p",s,(0,o.v_)(e.title),1),(0,a.RG)(e.$slots,"action")])),_:3},8,["class"])):(0,a.Q3)("",!0),e.title?((0,a.uX)(),(0,a.Wv)(r,{key:1})):(0,a.Q3)("",!0),(0,a.bF)(n,{class:(0,o.C4)(["q-pa-sm",e.slotClasses]),horizontal:e.horizontal},{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"default")])),_:3},8,["class","horizontal"]),e.needActions?((0,a.uX)(),(0,a.Wv)(i,{key:2,align:"center"},{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"actions")])),_:3})):(0,a.Q3)("",!0),(0,a.bF)(d,{showing:e.loading},{default:(0,a.k6)((()=>[(0,a.bF)(l,{size:"30px"})])),_:1},8,["showing"])])),_:3})}}});var i=n(97569),l=n(27066),d=n(37015),c=n(16334),u=n(24264),p=n(62669),f=n(98582),g=n.n(f);const v=r,y=v;g()(r,"components",{QCard:i.A,QCardSection:l.A,QSeparator:d.A,QCardActions:c.A,QInnerLoading:u.A,QSpinnerBars:p.A})},79432:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(61758);const o=(0,a.pM)({__name:"PageWrapper",props:{loading:{type:Boolean}},setup(e){return(e,t)=>{const n=(0,a.g2)("q-card-section"),o=(0,a.g2)("q-card"),s=(0,a.g2)("q-spinner-bars"),r=(0,a.g2)("q-inner-loading");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(o,{flat:"",bordered:""},{default:(0,a.k6)((()=>[(0,a.bF)(n,{class:"q-pa-sm"},{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"default")])),_:3})])),_:3}),(0,a.bF)(r,{showing:e.loading},{default:(0,a.k6)((()=>[(0,a.bF)(s,{size:"30px"})])),_:1},8,["showing"])],64)}}});var s=n(97569),r=n(27066),i=n(24264),l=n(62669),d=n(98582),c=n.n(d);const u=o,p=u;c()(o,"components",{QCard:s.A,QCardSection:r.A,QInnerLoading:i.A,QSpinnerBars:l.A})},40702:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(61758),o=n(58790),s=n(39713),r=n(38734),i=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function r(e){try{l(a.next(e))}catch(t){s(t)}}function i(e){try{l(a["throw"](e))}catch(t){s(t)}}function l(e){e.done?n(e.value):o(e.value).then(r,i)}l((a=a.apply(e,t||[])).next())}))};const l={class:"full-height",id:"scroll-area-wrapper"},d=(0,a.pM)({__name:"ScrollArea",props:{offset:{},target_element_id:{},loading:{type:Boolean}},setup(e){const t=(0,r.KR)(0),n=e;return(0,a.sV)((()=>i(this,void 0,void 0,(function*(){t.value=(0,s.Rg)(n.target_element_id||"scroll-area-wrapper")})))),(e,n)=>{const s=(0,a.g2)("q-scroll-area"),r=(0,a.g2)("q-spinner-bars"),i=(0,a.g2)("q-inner-loading");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(s,{style:(0,o.Tr)({height:t.value-e.offset+"px"}),class:"full-width"},{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"default")])),_:3},8,["style"]),(0,a.bF)(i,{showing:e.loading},{default:(0,a.k6)((()=>[(0,a.bF)(r,{size:"30px"})])),_:1},8,["showing"])])}}});var c=n(19600),u=n(24264),p=n(62669),f=n(98582),g=n.n(f);const v=d,y=v;g()(d,"components",{QScrollArea:c.A,QInnerLoading:u.A,QSpinnerBars:p.A})},7757:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(61758),o=n(38734),s=n(58790),r=n(10577);const i=(0,a.pM)({__name:"Button",props:{label:{},isTxButton:{type:Boolean}},setup(e){const t=(0,r.u)();return(e,n)=>{const r=(0,a.g2)("q-btn");return(0,a.uX)(),(0,a.Wv)(r,{"no-caps":"",disable:e.isTxButton&&!!(0,o.R1)(t).activeTxCount,label:e.isTxButton&&(0,o.R1)(t).activeTxCount>0?"Действие недоступно, дождитесь завершения активных транзакций":e.label,unelevated:"",size:"16px",padding:"sm",class:(0,s.C4)({"full-width":e.$q.screen.lt.md})},{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"default")])),_:3},8,["disable","label","class"])}}});var l=n(69001),d=n(98582),c=n.n(d);const u=i,p=u;c()(i,"components",{QBtn:l.A})},7711:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(61758),o=n(58790);const s=(0,a.pM)({__name:"Input",props:{marginBottom:{type:Boolean,default:!0}},setup(e){return(e,t)=>{const n=(0,a.g2)("q-input");return(0,a.uX)(),(0,a.Wv)(n,{"model-value":"",outlined:"","label-color":"primary",color:"primary",class:(0,o.C4)(e.marginBottom?"q-mb-md":""),dense:""},{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"sellBtn")])),_:3},8,["class"])}}});var r=n(68926),i=n(98582),l=n.n(i);const d=s,c=d;l()(s,"components",{QInput:r.A})},24029:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(61758),o=n(58790),s=n(38734);const r=["src"],i={class:"text-positive"},l={class:"text-negative"},d=(0,a.pM)({__name:"RupayAssetSelect",props:{assets:{},isP2PList:{type:Boolean},isSellList:{type:Boolean},isWithdrawalList:{type:Boolean},needSelectFirstAsset:{type:Boolean}},emits:["assetSelected"],setup(e,{emit:t}){const n=(0,s.KR)(),d=e,c=t,u=()=>{c("assetSelected",n.value)};return(0,a.KC)((()=>{d.needSelectFirstAsset&&(n.value=d.assets[0])})),(e,t)=>{const s=(0,a.g2)("q-avatar"),d=(0,a.g2)("q-item-section"),c=(0,a.g2)("q-item-label"),p=(0,a.g2)("q-item"),f=(0,a.g2)("q-select");return(0,a.uX)(),(0,a.Wv)(f,{outlined:"",options:e.assets,modelValue:n.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>n.value=e),u],class:"col-grow",behavior:"menu","option-label":"name","dropdown-icon":"las la-angle-down",label:"Выберите актив"},(0,a.eX)({_:2},[e.isP2PList?{name:"option",fn:(0,a.k6)((e=>[(0,a.bF)(p,(0,o._B)((0,a.Ng)(e.itemProps)),{default:(0,a.k6)((()=>[(0,a.bF)(d,{avatar:""},{default:(0,a.k6)((()=>[(0,a.bF)(s,{rounded:""},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:e.opt.icon},null,8,r)])),_:2},1024)])),_:2},1024),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{class:"text-bold"},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.opt.name),1)])),_:2},1024),(0,a.bF)(c,{caption:""},{default:(0,a.k6)((()=>[(0,a.Lk)("span",i,(0,o.v_)(e.opt.buy_offers),1),(0,a.eW)(" / "),(0,a.Lk)("span",l,(0,o.v_)(e.opt.sell_offers),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),key:"0"}:e.isSellList?{name:"option",fn:(0,a.k6)((e=>[(0,a.bF)(p,(0,o._B)((0,a.Ng)(e.itemProps)),{default:(0,a.k6)((()=>[(0,a.bF)(d,{avatar:""},{default:(0,a.k6)((()=>[(0,a.bF)(s,{rounded:""},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:e.opt.icon},null,8,["src"])])),_:2},1024)])),_:2},1024),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{class:"text-bold"},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.opt.name),1)])),_:2},1024),(0,a.bF)(c,{caption:""},{default:(0,a.k6)((()=>{var t;return[(0,a.eW)("Ваш баланс: "+(0,o.v_)(null===(t=e.opt.balance)||void 0===t?void 0:t.own),1)]})),_:2},1024)])),_:2},1024)])),_:2},1040)])),key:"1"}:e.isWithdrawalList?{name:"option",fn:(0,a.k6)((e=>[(0,a.bF)(p,(0,a.v6)(e.itemProps,{class:{disabled:!e.opt.is_withdaw_enabled}}),{default:(0,a.k6)((()=>[(0,a.bF)(d,{avatar:""},{default:(0,a.k6)((()=>[(0,a.bF)(s,{rounded:""},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:e.opt.icon},null,8,["src"])])),_:2},1024)])),_:2},1024),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{class:"text-bold"},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.opt.name),1)])),_:2},1024),e.opt.is_withdaw_enabled?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(c,{key:0,caption:""},{default:(0,a.k6)((()=>[(0,a.eW)("Вывод временно не доступен")])),_:1}))])),_:2},1024)])),_:2},1040,["class"])])),key:"2"}:{name:"option",fn:(0,a.k6)((e=>[(0,a.bF)(p,(0,o._B)((0,a.Ng)(e.itemProps)),{default:(0,a.k6)((()=>[(0,a.bF)(d,{avatar:""},{default:(0,a.k6)((()=>[(0,a.bF)(s,{rounded:""},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:e.opt.icon},null,8,["src"])])),_:2},1024)])),_:2},1024),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{class:"text-bold"},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.opt.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),key:"3"}]),1032,["options","modelValue"])}}});var c=n(88515),u=n(75329),p=n(63418),f=n(53581),g=n(35779),v=n(98582),y=n.n(v);const m=d,b=m;y()(d,"components",{QSelect:c.A,QItem:u.A,QItemSection:p.A,QAvatar:f.A,QItemLabel:g.A})}}]);