"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[869],{1869:(e,l,t)=>{t.r(l),t.d(l,{default:()=>fe});var a=t(61758),n=t(38734),i=t(58790),o=t(3388),s=t(7711),u=t(41640),r=t(95522),d=t(39713),c=t(77854),p=t(77474),b=t(81750),k=function(e,l,t,a){function n(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,i){function o(e){try{u(a.next(e))}catch(l){i(l)}}function s(e){try{u(a["throw"](e))}catch(l){i(l)}}function u(e){e.done?t(e.value):n(e.value).then(o,s)}u((a=a.apply(e,l||[])).next())}))};const _=(0,a.pM)({__name:"RefferalLines",props:["user_id"],setup(e){const l=e,t=(0,n.KR)({});return(0,a.KC)((()=>k(this,void 0,void 0,(function*(){const e=yield(0,c.rupayApi)(`/api/p2p/get_signal_lines?id=${l.user_id}`);b.log(e.data),t.value=e.data})))),(e,l)=>{const n=(0,a.g2)("q-item-label"),o=(0,a.g2)("q-item-section"),s=(0,a.g2)("q-item"),u=(0,a.g2)("q-list"),r=(0,a.g2)("q-expansion-item");return(0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.value,((e,l)=>((0,a.uX)(),(0,a.Wv)(r,{key:l,group:"lines","expand-separator":"",label:`${l.replace("line","")} линия (${e.length} рефералов)`},{default:(0,a.k6)((()=>[(0,a.bF)(u,{dense:""},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e,((e,l)=>((0,a.uX)(),(0,a.Wv)(s,{key:l},{default:(0,a.k6)((()=>[(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(n,{overline:""},{default:(0,a.k6)((()=>[(0,a.eW)("Адрес - "+(0,i.v_)(e.wallet),1)])),_:2},1024),(0,a.bF)(n,{caption:"",class:(0,i.C4)(e.is_signal_active?"text-positive":"text-negative")},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.is_signal_active?"Подписка активна":"Подписка не активна"),1)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["label"])))),128)}}});var f=t(76986),g=t(54514),v=t(75329),L=t(63418),m=t(35779),F=t(98582),h=t.n(F);const x=_,y=x;h()(_,"components",{QExpansionItem:f.A,QList:g.A,QItem:v.A,QItemSection:L.A,QItemLabel:m.A});var w=t(81750),A=function(e,l,t,a){function n(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,i){function o(e){try{u(a.next(e))}catch(l){i(l)}}function s(e){try{u(a["throw"](e))}catch(l){i(l)}}function u(e){e.done?t(e.value):n(e.value).then(o,s)}u((a=a.apply(e,l||[])).next())}))};const W=(0,a.Lk)("p",{class:"text-bold"},"Добро пожаловать в OLF Signal!",-1),Q={class:"text-white"},q=(0,a.Lk)("br",null,null,-1),C=(0,a.Lk)("br",null,null,-1),R=(0,a.Lk)("br",null,null,-1),U=(0,a.Lk)("br",null,null,-1),O={href:"/pres_ru.pdf",target:"_blank"},S=(0,a.Lk)("br",null,null,-1),I=(0,a.Lk)("br",null,null,-1),V={href:"/mark_ru.pdf",target:"_blank"},K=(0,a.Lk)("p",{class:"text-bold"},"Welcome to OLF Signal!",-1),X={class:"text-white"},E=(0,a.Lk)("br",null,null,-1),P=(0,a.Lk)("br",null,null,-1),T=(0,a.Lk)("br",null,null,-1),B=(0,a.Lk)("br",null,null,-1),D={href:"/pres_en.pdf",target:"_blank"},M=(0,a.Lk)("br",null,null,-1),$=(0,a.Lk)("br",null,null,-1),G={href:"/mark_en.pdf",target:"_blank"},N=(0,a.Lk)("p",{class:"text-bold"}," OLF Signal-ға қош келдіңіз!",-1),z=(0,a.Lk)("p",{class:"text-white"},[(0,a.eW)(" Бұл сізге ыңғайлы кез келген биржада фьючерстік саудаға деген инновациялық көзқарасыңыз."),(0,a.Lk)("br"),(0,a.eW)(" Біздің нейрондық желіден сауда сигналдары үшін OLF-ті ауыстырыңыз және плюс сауда-саттықты сезініңіз!"),(0,a.Lk)("br"),(0,a.eW)(" Және бұл бәрі емес! 7 деңгейлі серіктестік бағдарлама сізге тек сауда жасауға ғана емес сонымен қатар трейдерлерді шақырудан ақша табуға мүмкіндік береді! ")],-1),J=(0,a.Lk)("p",{class:"text-bold"},"Сизге кош келиңиздер!",-1),Z=(0,a.Lk)("p",{class:"text-white"},[(0,a.eW)(" Бул сен үчүн ыңгайлуу алмашуу боюнча келечеги соодалоого салыштырмалуу сиздин иновациялык мамиле."),(0,a.Lk)("br"),(0,a.eW)(" Жөн гана биздин Нейро тармактан соода үчүн сигналдар Сиздин алмаштыруу жана плюс соода башка!"),(0,a.Lk)("br"),(0,a.eW)(" Дагы көп нерсе бар! 7 деңгээл санаторийи программасы эле плюс соода эмес, мүмкүндүк берет, бирок чакыруу соодагерлерди таап! ")],-1),j={class:"text-bold text-h4"},H={class:"text-bold text-h4"},Y=(0,a.Lk)("p",{class:"text-center"},[(0,a.eW)("Рекомендуем использовать для торговли платформу "),(0,a.Lk)("span",{class:"text-bold"},"MEXC"),(0,a.Lk)("br"),(0,a.eW)(" Для регистрации используйте "),(0,a.Lk)("a",{style:{"text-decoration":"underline","font-weight":"bold"},href:" https://www.mexc.com/register?inviteCode=1eozZ",target:"_blank"},"ссылку")],-1),ee=(0,a.Lk)("p",{class:"text-bold text-h5 text-center"},"Вы не зарегистрированы",-1),le=(0,a.Lk)("p",{class:"text-center"},"Введите код пригласителя",-1),te=(0,a.Lk)("p",{class:"text-bold text-h5 text-center"},"Подписка на сигналы не активна",-1),ae=(0,a.Lk)("p",{class:""},"Выберите тип подписки",-1),ne=(0,a.Lk)("p",{class:""},"Введите Ваш телеграм",-1),ie=(0,a.Lk)("p",{class:""},"Введите желаемое время получения сигналов",-1),oe={class:"text-center"},se={class:"text-bold text-h6"},ue=(0,a.Lk)("p",null,[(0,a.eW)("Что бы получать сигналы по подписке добавь в контакты нашего бота "),(0,a.Lk)("a",{href:"https://t.me/OLF_SIGNAL_BOT",target:"_blank",style:{"text-decoration":"underline","font-weight":"bold"}},"@OLF_SIGNAL_BOT")],-1),re=(0,a.pM)({__name:"index",setup(e){const{getFee:l,signTransaction:t}=(0,p.Z)(),{toast:b,Icon:k,Color:_}=(0,r.d)(),{getP2PUser:f}=(0,u.P)(),g=(0,u.P)(),v=(0,n.KR)(null),L=(0,n.KR)(null),m=(0,n.KR)([]),F=(0,n.KR)({tg:null,time:null,period:null});(0,a.sV)((()=>A(this,void 0,void 0,(function*(){yield f();const e=yield(0,c.rupayApi)("/api/p2p/signal_period");m.value=e.data}))));const h=e=>A(this,void 0,void 0,(function*(){let l,t;if(L.value=!L.value,"activate"===e){const e=yield x();if(w.log(e),!e.success)return;t=e.result.signature,w.log(t)}const{data:a}=yield c.rupayApi.post("/api/p2p/signal_action",{action:e,amount:l,tx:t,activate_data:F.value,wallet:g.p2pUser.wallet,ref_code:v.value});a.success?(b(a.message,k.success,_.success),yield f()):b(a.message,k.error,_.error),v.value=null,L.value=!L.value})),x=()=>A(this,void 0,void 0,(function*(){var e;let a;const n=yield l(2,null===(e=F.value.period)||void 0===e?void 0:e.price,"7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP","Оплата подписки OLF Signal","Оплата подписки OLF Signal");return n.success&&(a=yield t(n.raw)),a}));return(e,l)=>{const t=(0,a.g2)("q-btn"),u=(0,a.g2)("q-card-section"),r=(0,a.g2)("q-card"),c=(0,a.g2)("q-expansion-item"),p=(0,a.g2)("q-item-label"),b=(0,a.g2)("q-item-section"),k=(0,a.g2)("q-item"),_=(0,a.g2)("q-list"),f=(0,a.g2)("q-select"),x=(0,a.g2)("q-page");return(0,a.uX)(),(0,a.Wv)(x,{padding:""},{default:(0,a.k6)((()=>[(0,a.bF)(o.A,{title:"OLF Signal"},{default:(0,a.k6)((()=>{var e;return[(0,a.bF)(c,{"expand-separator":"",icon:"help",label:"Описание раздела"},{default:(0,a.k6)((()=>[(0,a.bF)(r,null,{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[W,(0,a.Lk)("p",Q,[(0,a.eW)(" Это твой иновационный подход к торговле на фьючерсах на любой удобной для тебя бирже."),q,(0,a.eW)(" Просто обменивай свои OLF на сигналы к торговле от нашей нейросети и прочуствуй торговлю в плюс!"),C,(0,a.eW)(" И это еще не все! 7 уровневая партнерская программа позволит тебе не просто торговать в плюс но и заработать на приглашении трейдеров!"),R,U,(0,a.Lk)("a",O,[(0,a.bF)(t,{color:"grey-9",label:"Презентация"})]),S,I,(0,a.Lk)("a",V,[(0,a.bF)(t,{color:"grey-9",label:"Маркетинговый план"})])]),K,(0,a.Lk)("p",X,[(0,a.eW)(" This is your innovative approach to trading futures on any exchange convenient for you."),E,(0,a.eW)(" Just exchange your OLFS for trading signals from our neural network and experience trading in a plus!"),P,(0,a.eW)(" And that's not all! The 7-level affiliate program will allow you not only to trade in a plus, but also to earn money by inviting traders!"),T,B,(0,a.Lk)("a",D,[(0,a.bF)(t,{color:"grey-9",label:"Presentation"})]),M,$,(0,a.Lk)("a",G,[(0,a.bF)(t,{color:"grey-9",label:"Marketing plan"})])]),N,z,J,Z])),_:1})])),_:1})])),_:1}),(0,n.R1)(g).p2pUser.olf_signal_reffer_code?((0,a.uX)(),(0,a.Wv)(c,{key:0,"expand-separator":"",icon:"pin",label:"Рефферальная система",class:"q-mb-md"},{default:(0,a.k6)((()=>[(0,a.bF)(_,{dense:""},{default:(0,a.k6)((()=>[(0,a.bF)(k,{dense:""},{default:(0,a.k6)((()=>[(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.bF)(p,{overline:""},{default:(0,a.k6)((()=>[(0,a.eW)("Ваш реферальный код")])),_:1}),(0,a.bF)(p,{caption:""},{default:(0,a.k6)((()=>[(0,a.Lk)("p",j,(0,i.v_)((0,n.R1)(g).p2pUser.olf_signal_own_reffer_code),1)])),_:1})])),_:1}),(0,a.bF)(b,{side:""},{default:(0,a.k6)((()=>[(0,a.bF)(t,{class:"invertBtn",onClick:l[0]||(l[0]=e=>(0,n.R1)(d.$r)((0,n.R1)(g).p2pUser.olf_signal_own_reffer_code,"Код скопирован")),round:"",dense:"",unelevated:"",icon:"las la-clipboard"})])),_:1})])),_:1}),(0,a.bF)(k,{dense:""},{default:(0,a.k6)((()=>[(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.bF)(p,{overline:""},{default:(0,a.k6)((()=>[(0,a.eW)("Ваш реферальный баланс")])),_:1}),(0,a.bF)(p,{caption:""},{default:(0,a.k6)((()=>[(0,a.Lk)("p",H,(0,i.v_)((0,n.R1)(g).p2pUser.olf_signal_refferal_balance),1)])),_:1})])),_:1}),(0,a.bF)(b,{side:""})])),_:1}),(0,a.bF)(y,{user_id:(0,n.R1)(g).p2pUser.id},null,8,["user_id"])])),_:1})])),_:1})):(0,a.Q3)("",!0),Y,(0,n.R1)(g).p2pUser.olf_signal_reffer_code?((0,a.uX)(),(0,a.CE)(a.FK,{key:2},[(0,n.R1)(g).p2pUser.is_signal_active?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)(a.FK,{key:0},[te,ae,(0,a.bF)(f,{outlined:"",dense:"",class:"q-mb-md",modelValue:F.value.period,"onUpdate:modelValue":l[3]||(l[3]=e=>F.value.period=e),options:m.value},null,8,["modelValue","options"]),ne,(0,a.bF)(s.A,{modelValue:F.value.tg,"onUpdate:modelValue":l[4]||(l[4]=e=>F.value.tg=e),label:"Ваш телеграм"},null,8,["modelValue"]),ie,(0,a.bF)(s.A,{modelValue:F.value.time,"onUpdate:modelValue":l[5]||(l[5]=e=>F.value.time=e),label:"Желаемое время получения"},null,8,["modelValue"]),(0,a.Lk)("p",oe,"Стоимость подписки "+(0,i.v_)((null===(e=F.value.period)||void 0===e?void 0:e.price)||0)+" OLF",1),(0,a.bF)(t,{loading:L.value,"no-caps":"",unelevated:"",color:"positive",disable:!F.value.tg||!F.value.time||!F.value.period,onClick:l[6]||(l[6]=e=>h("activate")),class:"full-width",label:"Оплатить и подключить"},null,8,["loading","disable"])],64)),(0,n.R1)(g).p2pUser.is_signal_active?((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[(0,a.Lk)("p",se,"Подписка на сигналы активна до "+(0,i.v_)(new Date((0,n.R1)(g).p2pUser.olf_signal_payed_to).toLocaleDateString())+" включительно",1),ue],64)):(0,a.Q3)("",!0)],64)):((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[ee,le,(0,a.bF)(s.A,{modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value=e),label:"Код пригласителя"},null,8,["modelValue"]),(0,a.bF)(t,{loading:L.value,"no-caps":"",unelevated:"",color:"positive",disable:!v.value,onClick:l[2]||(l[2]=e=>h("invite")),class:"full-width",label:"Проверить код"},null,8,["loading","disable"])],64))]})),_:1})])),_:1})}}});var de=t(33177),ce=t(97569),pe=t(27066),be=t(69001),ke=t(88515);const _e=re,fe=_e;h()(re,"components",{QPage:de.A,QExpansionItem:f.A,QCard:ce.A,QCardSection:pe.A,QBtn:be.A,QList:g.A,QItem:v.A,QItemSection:L.A,QItemLabel:m.A,QSelect:ke.A})}}]);