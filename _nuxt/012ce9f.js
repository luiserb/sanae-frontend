(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{547:function(e,t,n){"use strict";n.r(t);var r=n(546),l=n(522),o=n(555),c=n(229),d=n(0),v={__name:"AddSchedule",setup:function(e){return{__sfc:!0,showDialog:Object(d.ref)(!1)}}},f=n(60),component=Object(f.a)(v,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(o.a,{staticClass:"elevation-14",attrs:{"max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t(r.a,e._g(e._b({attrs:{fab:"",dark:"",color:"primary"}},"v-btn",o,!1),l),[t(c.a,{attrs:{dark:""}},[e._v("mdi-plus")])],1)]}}]),model:{value:n.showDialog,callback:function(e){n.showDialog=e},expression:"showDialog"}},[e._v(" "),t(l.a)],1)}),[],!1,null,null,null);t.default=component.exports},634:function(e,t,n){"use strict";n.r(t);var r=n(546),l=n(628),o=n(229),c=n(568),d=n(110),v=n(31),f=(n(106),n(0)),m={name:"Meeting",layout:"admin"},h=Object.assign(m,{setup:function(e){var t=Object(f.ref)(null),n=Object(f.ref)(null),r=Object(f.ref)([{text:"Mes",value:"month"},{text:"Semana",value:"week"},{text:"Día",value:"day"}]),l=Object(f.ref)(null),o=Object(f.ref)("month"),c=Object(f.ref)([]);function d(){return(d=Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.value.prev();case 2:l.value=t.value.title;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.value.next();case 2:l.value=t.value.title;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(a,b){return Math.floor((b-a+1)*Math.random())+a}return Object(f.onMounted)((function(){t&&(l.value=t.value.title)})),{__sfc:!0,calendar:t,calendarValue:n,types:r,month:l,type:o,events:c,weekdayFormat:function(e){return 1==e.weekday?"Lunes":2==e.weekday?"Martes":3==e.weekday?"Miercoles":4==e.weekday?"Jueves":5==e.weekday?"Viernes":6==e.weekday?"Sábado":0==e.weekday?"Domingo":void 0},prev:function(){return d.apply(this,arguments)},next:function(){return m.apply(this,arguments)},getEventColor:function(e){return envent.color},rnd:h,getEvents:function(e){for(var t=e.start,n=e.end,r=["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],l=["Rodrigo","Marcelo","José","Miguel","Camila","Alejandra","Ernesto","Maria"],o=[],d=new Date("".concat(t.date,"T00:00:00")),v=new Date("".concat(n.date,"T23:59:59")),f=(v.getTime()-d.getTime())/864e5,m=h(f,f+20),i=0;i<m;i++){var y=0===h(0,3),_=h(d.getTime(),v.getTime()),w=new Date(_-_%9e5),k=9e5*h(2,y?288:8),x=new Date(w.getTime()+k);o.push({name:l[h(0,l.length-1)],start:w,end:x,color:r[h(0,r.length-1)],timed:!y})}c.value=o}}}}),y=h,_=n(60),component=Object(_.a)(y,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",[t("h1",{staticClass:"primary--text my-5"},[e._v("\n        Citas \n    ")]),e._v(" "),t("div",{staticClass:"mt-2"},[t(d.a,{staticClass:"d-flex justify-space-between my-4"},[t("div",{staticClass:"d-flex align-center"},[n.calendar?t(r.a,{attrs:{icon:""},on:{click:n.prev}},[t(o.a,[e._v("mdi-chevron-left")])],1):e._e(),e._v(" "),n.calendar?t(r.a,{attrs:{icon:""},on:{click:n.next}},[t(o.a,[e._v("mdi-chevron-right")])],1):e._e(),e._v(" "),t(c.a,{staticClass:"ma-2",attrs:{items:n.types,dense:"",outlined:"","hide-details":"",label:"Vista del calendario"},model:{value:n.type,callback:function(e){n.type=e},expression:"type"}}),e._v(" "),n.calendar?t("h3",{staticClass:"primary--text ml-6 text-h6"},[e._v("\n                    "+e._s(n.month)+"\n                ")]):e._e()],1),e._v(" "),t("AddSchedule")],1),e._v(" "),t(d.a,{attrs:{height:"600"}},[t(l.a,{ref:"calendar",attrs:{type:n.type,weekdays:[1,2,3,4,5,6,0],"weekday-format":n.weekdayFormat,events:n.events},on:{change:n.getEvents},model:{value:n.calendarValue,callback:function(e){n.calendarValue=e},expression:"calendarValue"}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AddSchedule:n(547).default})}}]);