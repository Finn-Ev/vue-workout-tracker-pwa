(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae2c2da"],{"210b":function(e,n,t){},7366:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"plan-details responsive"},[t("h2",{staticClass:"mt-3 text-center font-weight-regular"},[e._v(" "+e._s("planche"===e.selectedPlan?"Planche":"Front-Lever")+" ")]),t("v-container",[t("v-expansion-panels",e._l(e.workoutData,(function(n){return t("v-expansion-panel",{key:n.id},[t("v-expansion-panel-header",[e._v(" "+e._s(n.name.split("(")[0])+" ")]),t("v-expansion-panel-content",[e._l(n.exercises,(function(n){return t("p",{key:n.name},[e._v(" "+e._s(n.name)+" ")])})),t("v-btn",{attrs:{block:"",text:"",color:"success"},on:{click:function(t){return e.setCurrentWorkout(n.id)}}},[e._v("Dieses Training starten")])],2)],1)})),1)],1)],1)},a=[],i=(t("4de4"),t("5530")),o=t("9da4"),r=t("2f62"),l={components:{},data:function(){return{showDialog:!1}},computed:Object(i["a"])({selectedPlan:function(){return this.$route.params.selectedPlan},workoutData:function(){var e=this;return o["a"].filter((function(n){return n.plan===e.selectedPlan}))}},Object(r["b"])(["workouts"])),methods:{setCurrentWorkout:function(e){this.workouts.ongoingWorkout.isActive?this.$store.dispatch("dialog/setDialog",{show:!0,title:"Achtung",text:"Du musst erst das aktive Training beenden oder speichern.",textColor:"orange",onconfirmMethod:this.onDialogConfirm,confirmText:"Zum aktiven Training"}):(this.$store.dispatch("workouts/mutateOngoingWorkout",{isActive:!0,id:e,startDate:Date.now()}),this.$router.push("/ongoing"))},onDialogConfirm:function(){this.$router.push("/ongoing"),this.$store.dispatch("dialog/closeDialog")}}},c=l,p=t("2877"),u=t("6544"),h=t.n(u),d=t("8336"),v=t("a523"),x=t("4e82"),b=t("3206"),f=t("80d2"),m=t("58df"),g=Object(m["a"])(Object(x["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(b["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(f["q"])(this))}}),w=t("0789"),P=t("9d65"),y=t("a9ad"),k=Object(m["a"])(P["a"],y["a"],Object(b["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),C=k.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(w["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(f["q"])(n))])]})))}}),O=t("9d26"),j=t("5607"),A=Object(m["a"])(y["a"],Object(b["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),B=A.extend().extend({name:"v-expansion-panel-header",directives:{ripple:j["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(f["q"])(this,"actions")||[this.$createElement(O["a"],this.expandIcon)];return this.$createElement(w["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(f["q"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),D=(t("0481"),t("4069"),t("210b"),t("604c")),$=t("d9bd"),E=D["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},D["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object($["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object($["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),s=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(s)}}}),_=Object(p["a"])(c,s,a,!1,null,"59c40e1a",null);n["default"]=_.exports;h()(_,{VBtn:d["a"],VContainer:v["a"],VExpansionPanel:g,VExpansionPanelContent:C,VExpansionPanelHeader:B,VExpansionPanels:E})},"9d26":function(e,n,t){"use strict";var s=t("132d");n["a"]=s["a"]},"9da4":function(e,n,t){"use strict";n["a"]=[{plan:"planche",id:"PLANCHE1",name:"Planche Einheit 1",exercises:[{name:"Planche Push-Ups",sets:4,reps:10,pause:"3",bodyweight:!0},{name:"Planche Hold",sets:4,reps:15,pause:"2",bodyweight:!0},{name:"Dips",sets:4,reps:12,pause:"2",bodyweight:!0},{name:"Planche Lean",sets:3,reps:15,pause:"2",bodyweight:!1}]},{plan:"planche",id:"PLANCHE2",name:"Planche Einheit 2",exercises:[{name:"Planche Hold (mit Band)",sets:4,reps:15,pause:"3",bodyweight:!0},{name:"Planche Push-Ups (mit Band)",sets:4,reps:10,pause:"2",bodyweight:!0},{name:"SB-Dips",sets:4,reps:12,pause:"2",bodyweight:!0},{name:"Planche Lean",sets:3,reps:15,pause:"2",bodyweight:!1}]},{plan:"front-lever",id:"FRONTLEVER1",name:"Front-Lever Einheit 1",exercises:[{name:"Front-Lever Raises",sets:4,reps:12,pause:"3",bodyweight:!0},{name:"Isometric Front-Lever Hold",sets:4,reps:30,pause:"2",bodyweight:!0},{name:"Klimmzüge",sets:4,reps:12,pause:"2",bodyweight:!0},{name:"Scapula Pull Ups",sets:3,reps:15,pause:"2",bodyweight:!0}]},{plan:"front-lever",id:"FRONTLEVER2",name:"Front-Lever Einheit 2",exercises:[{name:"Isometric Front-Lever Hold",sets:4,reps:15,pause:"3",bodyweight:!0},{name:"Front-Lever Raises",sets:4,reps:10,pause:"2",bodyweight:!0},{name:"Chin Ups",sets:4,reps:12,pause:"2",bodyweight:!0},{name:"Body Rows",sets:3,reps:15,pause:"2",bodyweight:!0}]}]}}]);
//# sourceMappingURL=chunk-3ae2c2da.3499e023.js.map