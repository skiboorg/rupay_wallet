"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[843],{89843:(e,l,a)=>{a.r(l),a.d(l,{default:()=>pe});var u=a(61758),t=a(38734),n=a(58790),s=a(59033),o=a(24029),d=a(29104),r=a(7711),i=a(7757),v=a(77474),c=a(52664),m=a(81750),p=function(e,l,a,u){function t(e){return e instanceof a?e:new a((function(l){l(e)}))}return new(a||(a=Promise))((function(a,n){function s(e){try{d(u.next(e))}catch(l){n(l)}}function o(e){try{d(u["throw"](e))}catch(l){n(l)}}function d(e){e.done?a(e.value):t(e.value).then(s,o)}d((u=u.apply(e,l||[])).next())}))};const b={class:"text-weight-medium no-margin"},y=(0,u.Lk)("p",{class:"text-grey-7 q-mb-sm"},"Выберите платежную систему",-1),k=(0,u.Lk)("p",{class:"text-grey-7 q-mb-sm"},"Введите номер карты",-1),g=(0,u.Lk)("p",{class:"text-grey-7 q-mb-sm"},"Введите номер телефона получателя",-1),f=(0,u.Lk)("p",{class:"text-grey-7 q-mb-sm"},"Введите название банка получателя",-1),_=(0,u.Lk)("p",{class:"text-grey-7 q-mb-sm"},"Введите ФИО получателя",-1),h=(0,u.Lk)("p",{class:"text-grey-7 q-mb-sm"},"Введите сумму вывода RupayRub",-1),F={key:2,class:"text-bold"},w={class:"text-negative"},V=.025,x=5e3,A=(0,u.pM)({__name:"Rub",setup(e){(0,t.KR)("form");const{getFee:l,signTransaction:a}=(0,v.Z)(),{getAssetByKey:o,address:A,person:q}=(0,s.G)(),{withdrawalRequest:R}=(0,c.Z)(),Q=(0,t.KR)(),U=(0,t.KR)(!1),W=(0,t.KR)(),X=[{label:"Карта любого банка РФ",value:"card"},{label:"СБП",value:"sbp"}],K=((0,t.KR)([]),(0,t.Kh)({asset:null,amount:null,wallet_rupay:null,card:null,phone:null,bank:null,fio:null,payment_details:null})),$=(0,t.Kh)({asset_key:null,wallet:A,amount:null,amount_init:null,payment_details:null,payment_type:null,id:null}),C=(0,u.EW)((()=>{if(K.amount&&parseFloat(K.amount)>=x){let e=parseFloat(K.amount)*V;return parseInt(parseFloat(K.amount)-e)}}));(0,u.sV)((()=>p(this,void 0,void 0,(function*(){var e;Q.value=o("1048643"),$.asset_key=null===(e=Q.value)||void 0===e?void 0:e.key}))));const L=()=>p(this,void 0,void 0,(function*(){var e;U.value=!U.value;const u=yield l(null===(e=Q.value)||void 0===e?void 0:e.key,K.amount,"7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP","Вывод RUB","Вывод RUB");if(u.success){const e=yield a(u.raw);e.success&&("card"===W.value.value?$.payment_details=K.card:$.payment_details=`${K.phone},${K.bank},${K.fio}`,$.id=e.result.signature,$.amount=C.value,$.amount_init=K.amount,$.payment_type=W.value.value,m.log($),yield R($,null===q||void 0===q?void 0:q.name))}U.value=!U.value}));return(e,l)=>{const a=(0,u.g2)("q-select"),t=(0,u.g2)("q-input"),s=(0,u.g2)("q-form");return(0,u.uX)(),(0,u.Wv)(s,{onSubmit:(0,d.D$)(L,["prevent"])},{default:(0,u.k6)((()=>{var e;return[(0,u.Lk)("p",b," Доступный баланс для вывода: "+(0,n.v_)(null===(e=Q.value)||void 0===e?void 0:e.balance.own)+" RupayRub",1),(0,u.Lk)("p",{class:"text-weight-medium"}," Минимальная сумма вывода "+(0,n.v_)(x)+" RupayRub"),y,(0,u.bF)(a,{outlined:"",dense:"",options:X,modelValue:W.value,"onUpdate:modelValue":l[0]||(l[0]=e=>W.value=e),behavior:"menu","lazy-rules":"",rules:[e=>e||"Это обязательное поле"]},null,8,["modelValue","rules"]),W.value&&"card"===W.value.value?((0,u.uX)(),(0,u.CE)(u.FK,{key:0},[k,(0,u.bF)(t,{dense:"",outlined:"",modelValue:K.card,"onUpdate:modelValue":l[1]||(l[1]=e=>K.card=e),mask:"#### #### #### ####","fill-mask":"#","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"])],64)):(0,u.Q3)("",!0),W.value&&"sbp"===W.value.value?((0,u.uX)(),(0,u.CE)(u.FK,{key:1},[g,(0,u.bF)(t,{dense:"",outlined:"",modelValue:K.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>K.phone=e),mask:"+7###########","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),f,(0,u.bF)(t,{dense:"",outlined:"",modelValue:K.bank,"onUpdate:modelValue":l[3]||(l[3]=e=>K.bank=e),"lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),_,(0,u.bF)(t,{dense:"",outlined:"",modelValue:K.fio,"onUpdate:modelValue":l[4]||(l[4]=e=>K.fio=e),"lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"])],64)):(0,u.Q3)("",!0),h,(0,u.bF)(r.A,{modelValue:K.amount,"onUpdate:modelValue":l[5]||(l[5]=e=>K.amount=e),clearable:"","lazy-rules":"",marginBottom:!1,rules:[e=>e&&e.length>0||"Это обязательное поле",e=>e&&e>=x||`Не менее ${x}₽`]},null,8,["modelValue","rules"]),C.value?((0,u.uX)(),(0,u.CE)("p",F,[(0,u.eW)("Внимание! Вы получите "),(0,u.Lk)("span",w,(0,n.v_)(C.value)+" RUB",1)])):(0,u.Q3)("",!0),(0,u.bF)(i.A,{"is-tx-button":"",class:"full-width invertBtn",loading:U.value,label:"Запрос на вывод",type:"submit"},null,8,["loading"])]})),_:1})}}});var q=a(21565),R=a(88515),Q=a(68926),U=a(98582),W=a.n(U);const X=A,K=X;W()(A,"components",{QForm:q.A,QSelect:R.A,QInput:Q.A});var $=a(77854),C=a(95522),L=a(94461),z=a(81750),E=function(e,l,a,u){function t(e){return e instanceof a?e:new a((function(l){l(e)}))}return new(a||(a=Promise))((function(a,n){function s(e){try{d(u.next(e))}catch(l){n(l)}}function o(e){try{d(u["throw"](e))}catch(l){n(l)}}function d(e){e.done?a(e.value):t(e.value).then(s,o)}d((u=u.apply(e,l||[])).next())}))};const B={key:0,class:""},T={key:1,class:""},S={class:"q-mb-sm text-caption text-bold"},P={key:2,class:""},D={class:"q-mb-sm text-caption text-bold"},I={key:3},G={class:"q-mb-sm text-caption"},N={class:"q-mb-sm text-caption"},j=500,M=(0,u.pM)({__name:"NonRub",props:{asset:{}},setup(e){const{toast:l,Icon:a,Color:o}=(0,C.d)(),{getFee:r,signTransaction:i}=(0,v.Z)(),c=(0,s.G)(),m=e,p=[{label:"На адрес кошелька в другой сети",value:"address"},{label:"Конвертировать в Рубли и перевести на карту любого банка РФ",value:"card"},{label:"Конвертировать в Рубли и перевести по СБП",value:"sbp"}],b=(0,t.KR)(),y=(0,t.KR)(null),k=(0,t.KR)(!1),g=(0,t.KR)({asset:null,amount:null,wallet_rupay:null,address:null,network:null,card:null,phone:null,bank:null,fio:null,payment_details:null}),f=(0,u.EW)((()=>{if(m.asset)return parseFloat(parseFloat(m.asset.course)-parseFloat(m.asset.course)*parseFloat(m.asset.buy_commission)).toFixed(0)})),_=()=>E(this,void 0,void 0,(function*(){k.value=!k.value;const e=yield r(m.asset.key,y.value,"7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP","Вывод","Вывод");if(e.success){const u=yield i(e.raw);if(z.log(u),u.success){let e="";if("address"===b.value.value)e=`\nЗапрос на вывод c кошелька ${c.address}:%0A\nНа адрес  ${g.value.address}%0A\nСеть ${g.value.network}%0A\nСумма ${y.value} ${m.asset.name}%0A`;else{let t;e=`\nЗапрос на вывод в РУБЛЯХ c кошелька ${c.address}:%0A\nСумма ${y.value} ${m.asset.name}%0A\nСумма в RUB исходная ${parseFloat(y.value*m.asset.course).toFixed(0)} %0A\nСумма в RUB к получению ${parseFloat(y.value*f.value).toFixed(0)} %0A\n`,t="card"===b.value.value?g.value.card:`${g.value.phone},${g.value.bank},${g.value.fio}`,z.log(e),z.log(t);const n=yield $.nodeApi.post("/api/data/rub_withdrawal",{asset_key:m.asset.key,wallet:c.address,amount:parseFloat(y.value*f.value).toFixed(0),amount_init:y.value,payment_details:t,payment_type:b.value.value,id:u.result.signature});n.data.success?l("Ваша заявка на вывод принята.<br>Ваши средства будут отправлены на указанные вами реквизиты<br> в течении нескольких дней",a.success,o.success):l(n.data.message.message,a.error,o.error)}yield L.A.get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}`),l("Запрос успешно отправлен",a.success,o.success)}}k.value=!k.value}));return(e,l)=>{const a=(0,u.g2)("q-select"),t=(0,u.g2)("q-input"),s=(0,u.g2)("q-btn"),o=(0,u.g2)("q-form");return(0,u.uX)(),(0,u.Wv)(o,{onSubmit:(0,d.D$)(_,["prevent"])},{default:(0,u.k6)((()=>{var o;return[(0,u.bF)(a,{outlined:"",options:p,modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value=e),behavior:"menu",label:"Выберите тип вывода","lazy-rules":"",rules:[e=>e||"Это обязательное поле"]},null,8,["modelValue","rules"]),b.value&&"address"===b.value.value?((0,u.uX)(),(0,u.CE)("div",B,[(0,u.bF)(t,{class:"q-mb-sm",outlined:"",modelValue:g.value.network,"onUpdate:modelValue":l[1]||(l[1]=e=>g.value.network=e),label:"Название сети","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.bF)(t,{class:"q-mb-sm",outlined:"",modelValue:g.value.address,"onUpdate:modelValue":l[2]||(l[2]=e=>g.value.address=e),label:"Адрес кошелька","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"])])):(0,u.Q3)("",!0),b.value&&"card"===b.value.value?((0,u.uX)(),(0,u.CE)("div",T,[(0,u.bF)(t,{outlined:"",modelValue:g.value.card,"onUpdate:modelValue":l[3]||(l[3]=e=>g.value.card=e),mask:"#### #### #### ####","fill-mask":"#",label:"Введите номер карты","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Lk)("p",S,"Вы получите "+(0,n.v_)(parseFloat(y.value*f.value).toFixed(0))+" RUB",1)])):(0,u.Q3)("",!0),b.value&&"sbp"===b.value.value?((0,u.uX)(),(0,u.CE)("div",P,[(0,u.bF)(t,{outlined:"",modelValue:g.value.phone,"onUpdate:modelValue":l[4]||(l[4]=e=>g.value.phone=e),mask:"+7###########",label:"Введите номер телефона получателя","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.bF)(t,{outlined:"",modelValue:g.value.bank,"onUpdate:modelValue":l[5]||(l[5]=e=>g.value.bank=e),label:"Введите название банка получателя","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.bF)(t,{outlined:"",modelValue:g.value.fio,"onUpdate:modelValue":l[6]||(l[6]=e=>g.value.fio=e),label:"Введите ФИО получателя","lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Lk)("p",D,"Вы получите "+(0,n.v_)(parseFloat(y.value*f.value).toFixed(0))+" RUB",1)])):(0,u.Q3)("",!0),b.value?((0,u.uX)(),(0,u.CE)("div",I,[(0,u.Lk)("p",G,"Ваш баланс "+(0,n.v_)((null===(o=e.asset.balance)||void 0===o?void 0:o.own)?e.asset.balance.own:"0")+" "+(0,n.v_)(e.asset.name),1),(0,u.Lk)("p",N,"Минимальная сумма вывода "+(0,n.v_)(j/f.value)+" "+(0,n.v_)(e.asset.name),1),(0,u.bF)(t,{class:"q-mb-md",outlined:"",modelValue:y.value,"onUpdate:modelValue":l[7]||(l[7]=e=>y.value=e),type:"number",step:"0.00001",label:"Сумма вывода"},null,8,["modelValue"]),(0,u.bF)(s,{color:"primary",loading:k.value,type:"submit",disable:!y.value||parseFloat(y.value*f.value)<j,unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):(0,u.Q3)("",!0)]})),_:1})}}});var Z=a(69001);const H=M,J=H;W()(M,"components",{QForm:q.A,QSelect:R.A,QInput:Q.A,QBtn:Z.A});var O=function(e,l,a,u){function t(e){return e instanceof a?e:new a((function(l){l(e)}))}return new(a||(a=Promise))((function(a,n){function s(e){try{d(u.next(e))}catch(l){n(l)}}function o(e){try{d(u["throw"](e))}catch(l){n(l)}}function d(e){e.done?a(e.value):t(e.value).then(s,o)}d((u=u.apply(e,l||[])).next())}))};const Y={key:0,class:"text-bold text-center"},ee=(0,u.Lk)("p",{class:"text-grey-7 q-mb-sm"},"Выберите актив",-1),le=(0,u.pM)({__name:"index",setup(e){const{person:l,allAssets:a,address:d}=(0,s.G)(),r=(0,t.KR)(),i=(0,t.KR)("withdrawal"),v=(0,t.KR)([]);return(0,u.KC)((()=>O(this,void 0,void 0,(function*(){const e=yield $.nodeApi.get(`/api/data/withdrawal_history/${d}`);v.value=e.data})))),(e,s)=>{const d=(0,u.g2)("q-tab"),c=(0,u.g2)("q-tabs"),m=(0,u.g2)("q-separator"),p=(0,u.g2)("q-tab-panel"),b=(0,u.g2)("q-item-section"),y=(0,u.g2)("q-item"),k=(0,u.g2)("q-list"),g=(0,u.g2)("q-tab-panels"),f=(0,u.g2)("q-card"),_=(0,u.g2)("q-page"),h=(0,u.gN)("touch-swipe"),F=(0,u.gN)("auto-animate");return(0,u.bo)(((0,u.uX)(),(0,u.Wv)(_,{padding:"",class:"page"},{default:(0,u.k6)((()=>[(0,u.bF)(f,{flat:"",bordered:"",class:"full-height"},{default:(0,u.k6)((()=>[(0,u.bo)(((0,u.uX)(),(0,u.Wv)(c,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=e=>i.value=e),"indicator-color":"transparent",class:"shadow-2",align:"justify","active-color":"dark","active-bg-color":"tab"},{default:(0,u.k6)((()=>[(0,u.bF)(d,{"no-caps":"",name:"withdrawal",label:"Вывод"}),(0,u.bF)(d,{"no-caps":"",name:"history",label:"История"})])),_:1},8,["modelValue"])),[[h]]),(0,u.bF)(m),(0,u.bF)(g,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=e=>i.value=e),animated:""},{default:(0,u.k6)((()=>[(0,u.bF)(p,{name:"withdrawal"},{default:(0,u.k6)((()=>[(0,t.R1)(l)?((0,u.uX)(),(0,u.CE)(u.FK,{key:1},[ee,(0,u.bF)(o.A,{class:"q-mb-md",assets:(0,t.R1)(a).filter((e=>e.can_withdrawal)),"is-withdrawal-list":"",onAssetSelected:s[1]||(s[1]=e=>r.value=e)},null,8,["assets"])],64)):((0,u.uX)(),(0,u.CE)("p",Y,"Вывод доступен только верифицированным пользователям")),r.value?((0,u.uX)(),(0,u.CE)(u.FK,{key:2},[1048643===r.value.key?((0,u.uX)(),(0,u.Wv)(K,{key:0})):((0,u.uX)(),(0,u.Wv)(J,{key:1,asset:r.value},null,8,["asset"]))],64)):(0,u.Q3)("",!0)])),_:1}),(0,u.bF)(p,{name:"history"},{default:(0,u.k6)((()=>[(0,u.bF)(k,null,{default:(0,u.k6)((()=>[(0,u.bF)(y,null,{default:(0,u.k6)((()=>[(0,u.bF)(b,null,{default:(0,u.k6)((()=>[(0,u.eW)("Дата/Время")])),_:1}),(0,u.bF)(b,null,{default:(0,u.k6)((()=>[(0,u.eW)("Актив")])),_:1}),(0,u.bF)(b,null,{default:(0,u.k6)((()=>[(0,u.eW)("Сумма RUB")])),_:1}),(0,u.bF)(b,null,{default:(0,u.k6)((()=>[(0,u.eW)("Статус")])),_:1})])),_:1}),(0,u.bF)(m),((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(v.value,(e=>((0,u.uX)(),(0,u.Wv)(y,{key:e.id},{default:(0,u.k6)((()=>[(0,u.bF)(b,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,n.v_)(new Date(e.created_at).toLocaleString()),1)])),_:2},1024),(0,u.bF)(b,null,{default:(0,u.k6)((()=>{var l;return[(0,u.eW)((0,n.v_)(null===(l=e.asset)||void 0===l?void 0:l.name),1)]})),_:2},1024),(0,u.bF)(b,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,n.v_)(e.amount)+" RUB",1)])),_:2},1024),null===e.is_done?((0,u.uX)(),(0,u.Wv)(b,{key:0,class:"text-grey-5"},{default:(0,u.k6)((()=>[(0,u.eW)((0,n.v_)(e.status),1)])),_:2},1024)):(0,u.Q3)("",!0),!0===e.is_done?((0,u.uX)(),(0,u.Wv)(b,{key:1,class:"text-positive"},{default:(0,u.k6)((()=>[(0,u.eW)((0,n.v_)(e.status),1)])),_:2},1024)):(0,u.Q3)("",!0),!1===e.is_done?((0,u.uX)(),(0,u.Wv)(b,{key:2,class:"text-negative"},{default:(0,u.k6)((()=>[(0,u.eW)((0,n.v_)(e.status),1)])),_:2},1024)):(0,u.Q3)("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})),[[F]])}}});var ae=a(33177),ue=a(97569),te=a(64873),ne=a(26721),se=a(37015),oe=a(64082),de=a(63815),re=a(54514),ie=a(75329),ve=a(63418),ce=a(35724);const me=le,pe=me;W()(le,"components",{QPage:ae.A,QCard:ue.A,QTabs:te.A,QTab:ne.A,QSeparator:se.A,QTabPanels:oe.A,QTabPanel:de.A,QList:re.A,QItem:ie.A,QItemSection:ve.A}),W()(le,"directives",{TouchSwipe:ce.A})}}]);