(function(e){function t(t){for(var r,o,a=t[0],s=t[1],l=t[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Toolbar/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ResponsiveNavbar"),n("Table")],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("BurgerBtn",{on:{change:function(t){e.menu=t}}}),e._m(0),n("ul",{class:[!!e.menu&&"active"]},e._l(e.navLinks,(function(t,r){return n("li",{key:r,class:e.linkActive==r?"active":"",on:{click:function(t){return e.linkToggle(r)}}},[n("i",{class:t.icon}),n("a",{attrs:{href:"#!"}},[e._v(" "+e._s(t.text)+" "),t.children?n("i",{staticClass:"ion-ios-arrow-down"}):e._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.children,expression:"link.children"}],staticClass:"children-links"},e._l(t.children,(function(t,r){return n("a",{key:r,on:{mouseenter:function(e){e.currentTarget.style.background="green",e.currentTarget.style.color="white"},mouseleave:function(e){e.currentTarget.style.background="",e.currentTarget.style.color=""}}},[e._v(" "+e._s(t.text)+" ")])})),0)])})),0)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("cf05"),alt:""}})])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{active:e.isOpen},attrs:{id:"burger"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._t("default",[e._m(0)])],2)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[n("span",{staticClass:"burger-bar burger-bar--1"}),n("span",{staticClass:"burger-bar burger-bar--2"}),n("span",{staticClass:"burger-bar burger-bar--3"})])}],u={data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,this.$emit("change",this.isOpen)}}},f=u,d=(n("8200"),n("2877")),v=Object(d["a"])(f,s,l,!1,null,null,null),b=v.exports,A={data:function(){return{menu:!1,linkActive:"",navLinks:[{text:"Офисы",icon:"ion-ios-briefcase"},{text:"Оборудование",icon:"ion-ios-desktop"},{text:"Phones",icon:"ion-ios-phone-portrait",children:[{text:"Телефоны Инфо"},{text:"Телефоны по ФИО"},{text:"Телефон с переадресацией"}]},{text:"IP Planning",icon:"ion-ios-clipboard",children:[{text:"IPAM"}]},{text:"Reports",icon:"ion-ios-alert"},{text:"Phone Reports",icon:"ion-ios-browsers",children:[{text:"По моделям"},{text:"По кластерам"},{text:"По не используемым"},{text:"По Agent Licenses"}]},{text:"Tools",icon:"ion-ios-hammer",children:[{text:"Поиск незарегистрированных телефонов"},{text:"CUCM маршрутизация"},{text:"Testing CORS Requests"}]},{text:"Справочники",icon:"ion-ios-information-circle-outline",children:[{text:"Рег. центры (mapping)"},{text:"Регионы"},{text:"Города"},{text:"Статусы офисов"},{text:"Оборудование"},{text:"Типы портов"},{text:"VRF"},{text:"Networks(Table)"},{text:"Networks(Tree)"},{text:"Логи HardWare"},{text:"Логи Phones"}]}]}},methods:{linkToggle:function(e){this.linkActive===e?this.linkActive=null:this.linkActive=e}},components:{BurgerBtn:b}},p=A,x=(n("ce67"),Object(d["a"])(p,o,a,!1,null,"15863c6e",null)),w=x.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-table",{attrs:{hover:"",items:e.items,fields:e.fields}})],1)},m=[],g={data:function(){return{fields:[{key:"platform",label:"Платформа",sortable:!0},{key:"maker",label:"Производитель",sortable:!0},{key:"devices",label:"Всего устройств",sortable:!0},{key:"active",label:"Активных",sortable:!0},{key:"activeN",label:"Активных (not inUse)",sortable:!0},{key:"notActive",label:"Неактивных",sortable:!0},{key:"notInterviewed",label:"Не опрошенных",sortable:!0}],items:[{isActive:!0,platform:"c1",maker:"A",devices:30,active:13,activeN:124,notActive:151,notInterviewed:1241},{isActive:!0,platform:"c2",maker:"B",devices:12,active:1254,activeN:123,notActive:1111,notInterviewed:151},{isActive:!0,platform:"c3",maker:"C",devices:123,active:14,activeN:124,notActive:1511,notInterviewed:1},{isActive:!0,platform:"c3",maker:"D",devices:213,active:153,activeN:241,notActive:163,notInterviewed:14},{isActive:!0,platform:"c4",maker:"E",devices:21,active:25,activeN:21,notActive:16,notInterviewed:124},{isActive:!0,platform:"c5",maker:"F",devices:11,active:1267,activeN:712,notActive:3561,notInterviewed:14}]}}},O=g,k=(n("a9ac"),Object(d["a"])(O,h,m,!1,null,"3fc33f71",null)),y=k.exports,M={name:"App",components:{ResponsiveNavbar:w,Table:y}},C=M,P=(n("034f"),Object(d["a"])(C,i,c,!1,null,null,null)),j=P.exports,T=n("5f5b"),X=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(T["a"]),r["default"].use(X["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(j)}}).$mount("#app")},"5b03":function(e,t,n){},7030:function(e,t,n){},8200:function(e,t,n){"use strict";n("5b03")},"85ec":function(e,t,n){},"867e":function(e,t,n){},a9ac:function(e,t,n){"use strict";n("867e")},ce67:function(e,t,n){"use strict";n("7030")},cf05:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.20d732bf.js.map