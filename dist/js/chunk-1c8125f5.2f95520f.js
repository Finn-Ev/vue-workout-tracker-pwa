(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c8125f5"],{"26d3":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"responsive"},[s("h2",{staticClass:"text-center font-weight-regular my-3"},[e._v("Einstellungen")]),s("v-card",{staticClass:"mx-2"},[s("v-card-text",[s("p",[e._v("Aktives Theme: "+e._s(e.darkTheme?"Dunkel":"Hell"))]),s("v-btn",{staticClass:"mb-4",attrs:{block:"",color:"darkgrey"},on:{click:e.toggleTheme}},[e._v("Theme wechseln")]),s("v-divider"),s("p",{staticClass:"mt-4"},[e._v(" Gespeicherte Trainingseinheiten: "+e._s(e.savedWorkouts.length)+" ")]),s("v-btn",{staticClass:"mb-2",attrs:{block:"",color:"darkgrey",disabled:!e.savedWorkouts.length},on:{click:function(t){return e.setDialogValues({show:!0,title:"Achtung",text:"Willst du deinen Trainingsverlauf wirklich löschen?",textColor:"red",onconfirmMethod:e.clearHistory,confirmText:"Verlauf löschen"})}}},[e._v("Verlauf löschen")])],1)],1)],1)},i=[],r=s("5530"),n=s("2f62"),o={computed:Object(r["a"])({darkTheme:function(){return this.$vuetify.theme.dark}},Object(n["b"])({savedWorkouts:function(e){return e.workouts.savedWorkouts}})),methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("theme",JSON.stringify({dark:this.$vuetify.theme.dark}))},setDialogValues:function(e){var t=Object.assign({},e);this.$store.dispatch("dialog/setDialog",t)},clearHistory:function(){this.$store.dispatch("workouts/clearWorkoutHistory"),this.$store.dispatch("dialog/closeDialog")}}},c=o,l=(s("45da"),s("2877")),u=s("6544"),d=s.n(u),h=s("8336"),v=s("b0af"),f=s("99d9"),k=s("ce7e"),g=Object(l["a"])(c,a,i,!1,null,"3ab449bc",null);t["default"]=g.exports;d()(g,{VBtn:h["a"],VCard:v["a"],VCardText:f["c"],VDivider:k["a"]})},"45da":function(e,t,s){"use strict";var a=s("98ee"),i=s.n(a);i.a},"98ee":function(e,t,s){}}]);
//# sourceMappingURL=chunk-1c8125f5.2f95520f.js.map