(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c81a654"],{"0d1e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plans responsive",staticStyle:{maxWidth:"800px"}},[n("h2",{staticClass:"mt-3 text-center font-weight-regular"},[t._v(" Verfügbare Trainingspläne ")]),n("v-container",[n("v-row",[n("PlanPreview",{attrs:{title:"Planche",description:"3 Planche Einheiten pro Woche",url:"planche"}}),n("PlanPreview",{attrs:{title:"Front Lever",description:"2 Front-Lever Einheiten pro Woche",url:"front-lever"}})],1)],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6",lg:"6"}},[n("v-card",{staticClass:"mx-auto "},[n("v-card-title",[t._v(t._s(t.title))]),n("v-card-text",[t._v(t._s(t.description))]),n("v-card-actions",[n("v-btn",{attrs:{color:"darkgrey",block:"",to:"plans/"+t.url}},[t._v("Zum Plan")])],1)],1)],1)},o=[],c={props:["title","description","url"]},u=c,l=n("2877"),s=n("6544"),f=n.n(s),d=n("8336"),v=n("b0af"),p=n("99d9"),g=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),h=n("5530"),b=(n("4b85"),n("2b0e")),y=n("d9f7"),j=n("80d2"),x=["sm","md","lg","xl"],w=function(){return x.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),O=function(){return x.reduce((function(t,e){return t["offset"+Object(j["C"])(e)]={type:[String,Number],default:null},t}),{})}(),m=function(){return x.reduce((function(t,e){return t["order"+Object(j["C"])(e)]={type:[String,Number],default:null},t}),{})}(),C={col:Object.keys(w),offset:Object.keys(O),order:Object.keys(m)};function S(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var k=new Map,z=b["a"].extend({name:"v-col",functional:!0,props:Object(h["a"])(Object(h["a"])(Object(h["a"])(Object(h["a"])({cols:{type:[Boolean,String,Number],default:!1}},w),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,a=e.children,i=(e.parent,"");for(var o in n)i+=String(n[o]);var c=k.get(i);return c||function(){var t,e;for(e in c=[],C)C[e].forEach((function(t){var r=n[t],a=S(e,t,r);a&&c.push(a)}));var r=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!r||!n.cols},Object(g["a"])(t,"col-".concat(n.cols),n.cols),Object(g["a"])(t,"offset-".concat(n.offset),n.offset),Object(g["a"])(t,"order-".concat(n.order),n.order),Object(g["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(i,c)}(),t(n.tag,Object(y["a"])(r,{class:c}),a)}}),E=Object(l["a"])(u,i,o,!1,null,"17b7e0c2",null),_=E.exports;f()(E,{VBtn:d["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:z});var P={data:function(){return{}},components:{PlanPreview:_}},V=P,N=n("a523"),B=(n("99af"),n("2532"),["sm","md","lg","xl"]),F=["start","end","center"];function L(t,e){return B.reduce((function(n,r){return n[t+Object(j["C"])(r)]=e(),n}),{})}var W=function(t){return[].concat(F,["baseline","stretch"]).includes(t)},M=L("align",(function(){return{type:String,default:null,validator:W}})),R=function(t){return[].concat(F,["space-between","space-around"]).includes(t)},T=L("justify",(function(){return{type:String,default:null,validator:R}})),G=function(t){return[].concat(F,["space-between","space-around","stretch"]).includes(t)},I=L("alignContent",(function(){return{type:String,default:null,validator:G}})),J={align:Object.keys(M),justify:Object.keys(T),alignContent:Object.keys(I)},$={align:"align",justify:"justify",alignContent:"align-content"};function A(t,e,n){var r=$[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var D=new Map,K=b["a"].extend({name:"v-row",functional:!0,props:Object(h["a"])(Object(h["a"])(Object(h["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:W}},M),{},{justify:{type:String,default:null,validator:R}},T),{},{alignContent:{type:String,default:null,validator:G}},I),render:function(t,e){var n=e.props,r=e.data,a=e.children,i="";for(var o in n)i+=String(n[o]);var c=D.get(i);return c||function(){var t,e;for(e in c=[],J)J[e].forEach((function(t){var r=n[t],a=A(e,t,r);a&&c.push(a)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(g["a"])(t,"align-".concat(n.align),n.align),Object(g["a"])(t,"justify-".concat(n.justify),n.justify),Object(g["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),D.set(i,c)}(),t(n.tag,Object(y["a"])(r,{staticClass:"row",class:c}),a)}}),Q=Object(l["a"])(V,r,a,!1,null,"4851535a",null);e["default"]=Q.exports;f()(Q,{VContainer:N["a"],VRow:K})},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),o=n("0366"),c=n("19aa"),u=n("2266"),l=n("7dd0"),s=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,l){var s=t((function(t,r){c(t,s,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&u(r,t[l],t,n)})),v=g(e),h=function(t,e,n){var r,a,i=v(t),o=b(t,e);return o?o.value=n:(i.last=o={index:a=d(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),f?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},b=function(t,e){var n,r=v(t),a=d(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(s.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=b(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(s.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),f&&r(s.prototype,"size",{get:function(){return v(this).size}}),s},setStrong:function(t,e,n){var r=e+" Iterator",a=g(e),i=g(r);l(t,e,(function(t,e){p(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),s(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),o=n("6eeb"),c=n("f183"),u=n("2266"),l=n("19aa"),s=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),b=g?"set":"add",y=a[t],j=y&&y.prototype,x=y,w={},O=function(t){var e=j[t];o(j,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!s(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!s(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!s(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof y||!(h||j.forEach&&!f((function(){(new y).entries().next()})))))x=n.getConstructor(e,t,g,b),c.REQUIRED=!0;else if(i(t,!0)){var m=new x,C=m[b](h?{}:-0,1)!=m,S=f((function(){m.has(1)})),k=d((function(t){new y(t)})),z=!h&&f((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(x=e((function(e,n){l(e,x,t);var r=p(new y,e,x);return void 0!=n&&u(n,r[b],r,g),r})),x.prototype=j,j.constructor=x),(S||z)&&(O("delete"),O("has"),g&&O("get")),(z||C)&&O(b),h&&j.clear&&delete j.clear}return w[t]=x,r({global:!0,forced:x!=y},w),v(x,t),h||n.setStrong(x,t,g),x}}}]);
//# sourceMappingURL=chunk-6c81a654.f6eb8e42.js.map