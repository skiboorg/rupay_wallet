"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[743],{65743:(e,t,l)=>{l.r(t),l.d(t,{default:()=>K});var a=l(61758),n=l(38734),u=l(58790),s=l(3388),o=l(60455),i=l(41640),r=l(77854),c=l(59033),d=l(95522),p=l(77474),k=l(81750),v=function(e,t,l,a){function n(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,u){function s(e){try{i(a.next(e))}catch(t){u(t)}}function o(e){try{i(a["throw"](e))}catch(t){u(t)}}function i(e){e.done?l(e.value):n(e.value).then(s,o)}i((a=a.apply(e,t||[])).next())}))};const _={class:"text-caption"},b={class:"text-bold"},f={class:"text-bold text-center text-positive"},F=(0,a.Lk)("p",{class:"text-bold text-center text-positive text-body1"},"Теперь Вы можете забрать монеты не дожидаясь откупа по выбранному курсу, но за возврат взымается комиссия 5%",-1),g={key:1,class:"text-positive no-margin text-center"},y=(0,a.pM)({__name:"chance",setup(e){const{p2pUser:t,getP2PUser:l}=(0,i.P)(),{address:y,getOwnAssetByKey:h}=(0,c.G)(),{toast:m,Icon:q,Color:x}=(0,d.d)(),{getFee:R,signTransaction:W}=(0,p.Z)(),w=(0,o.lq)(),A=(0,o.rd)(),L=(0,n.KR)([]),K=(0,n.KR)([]),C=((0,n.KR)(0),(0,n.KR)(!1)),I=((0,n.KR)(""),(0,n.KR)());(0,a.KC)((()=>v(this,void 0,void 0,(function*(){k.log(w.query.i),k.log(w.query.ip),L.value=null===t||void 0===t?void 0:t.shance_holds.filter((e=>e.price.id===parseInt(w.query.i)));const e=yield(0,r.rupayApi)("/api/p2p/shances");K.value=e.data,I.value=h("2")}))));const Q=e=>v(this,void 0,void 0,(function*(){C.value=!0;const{data:t}=yield r.rupayApi.post("/api/p2p/withrawal_shance_ex",{deposit:"chance",tx:e});k.log(t),t.success?(m(t.message,q.success,x.success),yield l(),A.back()):m(t.message,q.error,x.error),C.value=!1}));return(e,t)=>{const l=(0,a.g2)("q-item-label"),o=(0,a.g2)("q-item-section"),i=(0,a.g2)("q-item"),r=(0,a.g2)("q-btn"),c=(0,a.g2)("q-list"),d=(0,a.g2)("q-page");return(0,a.uX)(),(0,a.Wv)(d,{padding:""},{default:(0,a.k6)((()=>[(0,a.bF)(s.A,{title:`Шанс по ${(0,n.R1)(w).query.ip} руб`},{default:(0,a.k6)((()=>{var e;return[(0,a.Lk)("p",_,"Просто выбери количество монет и получи откуп отправленных тобой монет по цене "+(0,u.v_)((0,n.R1)(w).query.ip)+" RUB за каждую монету.",1),(0,a.Lk)("p",b,"Ваш баланс OLF: "+(0,u.v_)(null===(e=I.value)||void 0===e?void 0:e.balance.own),1),(0,a.Lk)("p",f,"Начат процесс выплат по "+(0,u.v_)((0,n.R1)(w).query.ip)+" RUB",1),F]})),_:1},8,["title"]),L.value.length>0?((0,a.uX)(),(0,a.Wv)(s.A,{key:0,title:"Текущие выкупы",class:"q-mt-sm"},{default:(0,a.k6)((()=>[L.value.length>0?((0,a.uX)(),(0,a.Wv)(c,{key:0,dense:"",separator:""},{default:(0,a.k6)((()=>[(0,a.bF)(i,{dense:""},{default:(0,a.k6)((()=>[(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,null,{default:(0,a.k6)((()=>[(0,a.eW)("Дата")])),_:1})])),_:1}),(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,null,{default:(0,a.k6)((()=>[(0,a.eW)("Остаток")])),_:1})])),_:1}),(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,null,{default:(0,a.k6)((()=>[(0,a.eW)("Выкуплено")])),_:1})])),_:1}),(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l)])),_:1})])),_:1}),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(L.value,(e=>((0,a.uX)(),(0,a.Wv)(i,{dense:"",key:e.id},{default:(0,a.k6)((()=>[(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,{overline:""},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,a.bF)(l,{caption:""},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(parseFloat(e.amount)*parseInt((0,n.R1)(w).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,a.bF)(l,{caption:""},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(parseFloat(e.ostatok)*parseInt((0,n.R1)(w).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,null,{default:(0,a.k6)((()=>[e.is_return?((0,a.uX)(),(0,a.CE)("p",g,"Выведено на баланс")):((0,a.uX)(),(0,a.Wv)(r,{key:0,loading:C.value,"no-caps":"",unelevated:"",onClick:t=>Q(e.tx),label:`Вернуть ${parseFloat(e.amount)} OLF`},null,8,["loading","onClick","label"]))])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,a.Q3)("",!0)])),_:1})):(0,a.Q3)("",!0)])),_:1})}}});var h=l(33177),m=l(54514),q=l(75329),x=l(63418),R=l(35779),W=l(77954),w=l(98582),A=l.n(w);const L=y,K=L;A()(y,"components",{QPage:h.A,QList:m.A,QItem:q.A,QItemSection:x.A,QItemLabel:R.A,QBtn:W.A})}}]);