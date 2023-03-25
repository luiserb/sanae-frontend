(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{535:function(e,t,r){"use strict";var n=r(4),o=(r(73),r(79),r(194),r(13),r(7),r(12),r(74),r(193),r(14),r(15),r(23),r(24),r(19)),l=r(107),c=r(151);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},571:function(e,t,r){"use strict";r.r(t);var n=r(546),o=r(522),l=r(535),c=r(550),d=(r(40),{data:function(){return{name:"",password:"",confirmPassword:"",registerValid:!1,nameRules:[function(e){return!!e||"Campo de nombre de usuario es requerido"},function(e){return e&&e.length>=5||"Su nombre de usuario no válido"}],passwordRules:[function(e){return!!e||"Su contraseña es requerida"},function(e){return e&&e.length>=5||"Contraseña no válida"}]}}}),f=r(60),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"pa-6 rounded-xl",attrs:{elevation:""}},[t("h2",{staticClass:"text-center primary--text"},[e._v("\n        Registrate\n    ")]),e._v(" "),t(l.a,{ref:"form",model:{value:e.registerValid,callback:function(t){e.registerValid=t},expression:"registerValid"}},[t(c.a,{staticClass:"mb-2",attrs:{clearable:"",label:"Nombre de usuario",variant:"underlined",rules:e.nameRules},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),t(c.a,{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",variant:"underlined",label:"Contraseña",placeholder:"Ingresa tu contraseña",clearable:"",rules:e.passwordRules},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),t(c.a,{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",variant:"underlined",label:"Confirma tu contraseña",placeholder:"Confirma tu contraseña",clearable:"",rules:e.passwordRules},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),t("br"),e._v(" "),t(n.a,{attrs:{block:"",color:"primary",variant:"elevated"}},[e._v("\n            Registrar\n        ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);