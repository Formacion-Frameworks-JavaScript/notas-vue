(function(t){function e(e){for(var n,c,u=e[0],i=e[1],s=e[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);b&&b(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},r={app:0},o=[];function c(t){return u.p+"js/"+({estadisticas:"estadisticas"}[t]||t)+"."+{estadisticas:"96925f8b"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(t);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,a[1](s)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var b=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07bf":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("4de4"),a("13d5");var n=a("7a23");function r(t){var e=Object(n["b"])((function(){var e=t.value.reduce((function(t,e){return t+e.nota}),0)/t.value.length,a=t.value.reduce((function(t,e){return t>e.nota?t:e.nota}),0),n=t.value.filter((function(t){return t.nota>=5})).length,r=n/t.value.length*100,o=t.value.length-n,c=100-r;return{media:e,maxima:a,nAprobados:n,pAprobados:r,nSuspensos:o,pSuspensos:c}})),a=function(t){return t>=5?"icono-ok fa-smile":"icono-no-ok fa-frown"};return{totales:e,clasesIconos:a}}},2768:function(t,e,a){"use strict";a("b680");var n=a("7a23"),r={class:"card"},o={class:"card-header"},c={class:"card-body numbers"};function u(t,e,a,u,i,s){return Object(n["p"])(),Object(n["d"])("div",r,[Object(n["g"])("div",o,Object(n["w"])(a.titulo),1),Object(n["g"])("div",c,[Object(n["f"])(Object(n["w"])("undefined"!==typeof a.truncado?a.dato.toFixed(2):a.dato)+" ",1),"undefined"!==typeof a.porcentaje?(Object(n["p"])(),Object(n["d"])(n["a"],{key:0},[Object(n["f"])("("+Object(n["w"])(a.porcentaje.toFixed(2))+"%)",1)],64)):Object(n["e"])("",!0)]),"undefined"===typeof a.porcentaje?(Object(n["p"])(),Object(n["d"])("i",{key:0,class:["fa icono-status",u.clasesIconos]},null,2)):Object(n["e"])("",!0)])}var i={props:["dato","titulo","truncado","porcentaje"],setup:function(t){var e=Object(n["b"])((function(){return t.dato>=5?"icono-ok fa-smile":"icono-no-ok fa-frown"}));return{clasesIconos:e}}};i.render=u;e["a"]=i},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");a("ab8b");function r(t,e,a,r,o,c){var u=Object(n["u"])("Navegacion"),i=Object(n["u"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(u),Object(n["g"])(i)],64)}var o={class:"navbar navbar-default"},c={class:"container-fluid"},u=Object(n["g"])("div",{class:"navbar-header"},[Object(n["g"])("h1",{class:"navbar-brand"},"Notas App")],-1),i={class:"nav navbar-nav navbar-right menu"},s={class:"list-unstyled list-inline"},l={class:"list-inline-item"},b=Object(n["f"])("Listado de notas"),d={class:"list-inline-item"},p=Object(n["f"])("Estadísticas");function f(t,e,a,r,f,j){var O=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("header",o,[Object(n["g"])("div",c,[u,Object(n["g"])("nav",i,[Object(n["g"])("ul",s,[Object(n["g"])("li",l,[Object(n["g"])(O,{to:"/notas"},{default:Object(n["B"])((function(){return[b]})),_:1})]),Object(n["g"])("li",d,[Object(n["g"])(O,{to:"/estadisticas"},{default:Object(n["B"])((function(){return[p]})),_:1})])])])])])}var j={name:"Navegacion"};j.render=f;var O=j,m={components:{Navegacion:O}};a("64be");m.render=r;var v=m,g=(a("d3b7"),a("6c02")),h={class:"container"},N={class:"row"};function y(t,e,a,r,o,c){var u=Object(n["u"])("NuevaNota"),i=Object(n["u"])("Aula"),s=Object(n["u"])("Loading");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("main",h,[r.muestraFormulario?(Object(n["p"])(),Object(n["d"])(u,{key:0,letra:r.muestraFormulario,onCerrarFormulario:r.cierraFormulario},null,8,["letra","onCerrarFormulario"])):Object(n["e"])("",!0),Object(n["g"])("div",N,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(r.letrasAulas,(function(t){return Object(n["p"])(),Object(n["d"])(i,{key:t,letra:t,formularioAbierto:r.muestraFormulario,onAbrirFormulario:r.abreFormulario},null,8,["letra","formularioAbierto","onAbrirFormulario"])})),128))])]),r.cargando?(Object(n["p"])(),Object(n["d"])(s,{key:0})):Object(n["e"])("",!0)],64)}a("4de4"),a("c975"),a("d81d");var w=a("5502"),k={class:"loading"},F=Object(n["g"])("img",{src:"img/loading.svg",alt:"cargando"},null,-1);function x(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("div",k,[F])}var A={};A.render=x;var C=A,S={class:"row form-nueva"},P={class:"col-12 col-lg-8 offset-lg-2"},E={class:"card"},T={class:"card-header"},R={class:"form-group"},_=Object(n["g"])("label",{for:"nombre"},"Nombre:",-1),L={class:"form-group"},M=Object(n["g"])("label",{for:"apellidos"},"Apellidos:",-1),q={class:"form-group"},z=Object(n["g"])("label",{for:"nota"},"Nota:",-1);function B(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("div",S,[Object(n["g"])("div",P,[Object(n["g"])("div",E,[Object(n["g"])("div",T,[Object(n["g"])("span",null,"Nueva nota aula "+Object(n["w"])(a.letra),1),Object(n["g"])("i",{class:"fa fa-minus-circle",onClick:e[1]||(e[1]=function(){return r.onCierraFormulario.apply(r,arguments)})})]),Object(n["g"])("form",{class:"card-body",onSubmit:e[5]||(e[5]=Object(n["D"])((function(){return r.onEnviarFormulario.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",R,[_,Object(n["C"])(Object(n["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.nuevaNota.nombre=t}),type:"text",class:"form-control",id:"nombre",required:""},null,512),[[n["z"],r.nuevaNota.nombre]])]),Object(n["g"])("div",L,[M,Object(n["C"])(Object(n["g"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return r.nuevaNota.apellido=t}),type:"text",class:"form-control",id:"apellidos",required:""},null,512),[[n["z"],r.nuevaNota.apellido]])]),Object(n["g"])("div",q,[z,Object(n["C"])(Object(n["g"])("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.nuevaNota.nota=t}),class:"form-control form-control-sm",id:"nota",required:""},null,512),[[n["z"],r.nuevaNota.nota]])]),Object(n["g"])("button",{class:"btn btn-primary",disabled:!r.valido},"añadir",8,["disabled"])],32),Object(n["g"])("pre",null,Object(n["w"])(r.nuevaNota),1)])])])}var D=a("5530"),J={props:["letra"],setup:function(t,e){var a=e.emit,r=Object(w["b"])(),o=Object(n["s"])({id:0,nombre:"",apellido:"",nota:"",aula:t.letra}),c=function(){return a("cerrar-formulario")},u=function(){r.dispatch("crearNota",Object(D["a"])(Object(D["a"])({},o.value),{},{nota:+o.value.nota})),c()},i=Object(n["b"])((function(){return""!==o.value.nombre&&""!==o.value.apellido&&""!==o.value.nota}));return{nuevaNota:o,valido:i,onCierraFormulario:c,onEnviarFormulario:u}}};J.render=B;var U=J,V={class:"col"},I={class:"card"},G={class:"header row"},H={class:"col-10"},K={key:0,class:"col-2 anyadir"},Q=Object(n["g"])("i",{class:"fa fa-plus-circle"},null,-1),W={class:"card-body"},X={class:"table table-bordered tabla-alumnos"},Y=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Nombre"),Object(n["g"])("th",null,"Apellido"),Object(n["g"])("th",null,"Nota"),Object(n["g"])("th")])],-1);function Z(t,e,a,r,o,c){var u=Object(n["u"])("Nota"),i=Object(n["u"])("Totales");return Object(n["p"])(),Object(n["d"])("div",V,[Object(n["g"])("div",I,[Object(n["g"])("div",G,[Object(n["g"])("h2",H,[Object(n["f"])(" Aula "+Object(n["w"])(a.letra)+" ",1),Object(n["g"])("span",null,"("+Object(n["w"])(r.notas.length)+" alumnos)",1)]),a.formularioAbierto?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",K,[Object(n["g"])("a",{href:"#",onClick:e[1]||(e[1]=Object(n["D"])((function(){return r.onAbrirFormulario.apply(r,arguments)}),["prevent"]))},[Q])]))]),Object(n["g"])("div",W,[Object(n["g"])("table",X,[Y,Object(n["g"])("tbody",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(r.notas,(function(t){return Object(n["p"])(),Object(n["d"])(u,{key:t.id,nota:t},null,8,["nota"])})),128))])])]),Object(n["g"])(i,{notas:r.notas},null,8,["notas"])])])}var $={class:"text-center"},tt={key:0,class:"cambia-nota"},et=Object(n["g"])("i",{class:"fa fa-times-circle"},null,-1);function at(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("tr",{class:{"table-danger":!c.aprobado,"table-success":c.aprobado}},[Object(n["g"])("td",null,Object(n["w"])(a.nota.nombre),1),Object(n["g"])("td",null,Object(n["w"])(a.nota.apellido),1),Object(n["g"])("td",$,[Object(n["g"])("span",{onClick:e[1]||(e[1]=function(){return r.edita.apply(r,arguments)})},Object(n["w"])(a.nota.nota),1),r.editando?(Object(n["p"])(),Object(n["d"])("div",tt,[Object(n["C"])(Object(n["g"])("input",{autoFocus:"","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.nuevaNota=t}),class:"form-control",type:"number"},null,512),[[n["z"],r.nuevaNota]]),Object(n["g"])("i",{onClick:e[3]||(e[3]=function(){return r.desedita.apply(r,arguments)}),class:"fa fa-times-circle"}),Object(n["g"])("i",{onClick:e[4]||(e[4]=function(){return r.onGuardarNota.apply(r,arguments)}),class:"fa fa-check-circle"})])):Object(n["e"])("",!0)]),Object(n["g"])("td",null,[Object(n["g"])("a",{href:"#",class:"borrar",onClick:e[5]||(e[5]=Object(n["D"])((function(){return r.onBorrarNota.apply(r,arguments)}),["prevent"]))},[et])])],2)}var nt={props:["nota"],computed:{aprobado:function(){return this.nota.nota>=5}},setup:function(t){var e=Object(w["b"])(),a=Object(n["s"])(!1),r=Object(n["s"])(0),o=function(){r.value=t.nota.nota,a.value=!0},c=function(){return a.value=!1},u=function(){return e.dispatch("borraNota",t.nota)},i=function(){e.dispatch("modificaNota",{id:t.nota.id,notaNumerica:+r.value}),c()};return{onBorrarNota:u,onGuardarNota:i,nuevaNota:r,editando:a,edita:o,desedita:c}}};nt.render=at;var rt=nt,ot={class:"card-footer totales"},ct={class:"row"},ut={class:"col"},it={class:"col"},st={class:"row"},lt={class:"col"},bt={class:"col"};function dt(t,e,a,r,o,c){var u=Object(n["u"])("Estadistica");return Object(n["p"])(),Object(n["d"])("div",ot,[Object(n["g"])("div",ct,[Object(n["g"])("div",ut,[Object(n["g"])(u,{dato:t.totales.media,titulo:"Nota media",truncado:""},null,8,["dato"])]),Object(n["g"])("div",it,[Object(n["g"])(u,{dato:t.totales.maxima,titulo:"Máxima nota"},null,8,["dato"])])]),Object(n["g"])("div",st,[Object(n["g"])("div",lt,[Object(n["g"])(u,{dato:t.totales.nAprobados,titulo:"Aprobados",porcentaje:t.totales.pAprobados},null,8,["dato","porcentaje"])]),Object(n["g"])("div",bt,[Object(n["g"])(u,{dato:t.totales.nSuspensos,titulo:"Suspensos",porcentaje:t.totales.pSuspensos},null,8,["dato","porcentaje"])])])])}var pt=a("2768"),ft=a("07bf"),jt={props:["notas"],components:{Estadistica:pt["a"]},setup:function(t){return Object(D["a"])({},Object(ft["a"])(Object(n["x"])(t,"notas")))}};jt.render=dt;var Ot=jt,mt={props:["letra","formularioAbierto"],components:{Nota:rt,Totales:Ot},setup:function(t,e){var a=e.emit,r=Object(w["b"])(),o=Object(n["b"])((function(){return r.state.notas.filter((function(e){return e.aula===t.letra}))})),c=function(){a("abrir-formulario",t.letra)};return{notas:o,onAbrirFormulario:c}}};mt.render=Z;var vt=mt;function gt(){var t=Object(n["s"])(""),e=function(e){return t.value=e},a=function(){return t.value=""};return{muestraFormulario:t,abreFormulario:e,cierraFormulario:a}}var ht={name:"PaginaNotas",components:{Loading:C,NuevaNota:U,Aula:vt},setup:function(){var t=Object(w["b"])(),e=Object(n["s"])(!1),a=Object(n["b"])((function(){return t.state.notas})),r=Object(n["b"])((function(){return a.value.map((function(t){return t.aula})).filter((function(t,e,a){return a.indexOf(t)===e})).sort()}));t.dispatch("cargaNotas");var o=gt(),c=o.muestraFormulario,u=o.abreFormulario,i=o.cierraFormulario;return{notas:a,letrasAulas:r,cargando:e,muestraFormulario:c,abreFormulario:u,cierraFormulario:i}}};ht.render=y;var Nt=ht;function yt(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("h3",null,"Página no encontrada")}const wt={};wt.render=yt;var kt=wt,Ft=[{path:"/notas",name:"Notas",component:Nt},{path:"/estadisticas",name:"Estadisticas",component:function(){return a.e("estadisticas").then(a.bind(null,"9edb"))}},{path:"/",redirect:"/notas"},{path:"/:pathMatch(.*)",name:"Not Found",component:kt}],xt=Object(g["a"])({history:Object(g["b"])("/"),routes:Ft}),At=xt,Ct=(a("99af"),a("96cf"),a("1da1")),St=a("2909"),Pt="https://server-notas-api.herokuapp.com/notas/",Et=Object(w["a"])({state:{notas:[]},mutations:{getNotas:function(t,e){t.notas=e},nuevaNota:function(t,e){t.notas=[].concat(Object(St["a"])(t.notas),[e])},borrarNota:function(t,e){t.notas=t.notas.filter((function(t){return t!==e}))},modificarNota:function(t,e){var a=e.id,n=e.notaNumerica;t.notas=t.notas.map((function(t){return t.id===a?Object(D["a"])(Object(D["a"])({},t),{},{nota:n}):t}))}},actions:{cargaNotas:function(t){return Object(Ct["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,fetch(Pt);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,a("getNotas",r);case 8:case"end":return e.stop()}}),e)})))()},crearNota:function(t,e){return Object(Ct["a"])(regeneratorRuntime.mark((function a(){var n,r,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=t.dispatch,a.next=3,fetch(Pt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:if(o=a.sent,201!==o.status){a.next=10;break}return a.next=7,o.json();case 7:c=a.sent,n("nuevaNota",c),r("cargaNotas");case 10:case"end":return a.stop()}}),a)})))()},borraNota:function(t,e){return Object(Ct["a"])(regeneratorRuntime.mark((function a(){var n,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=t.dispatch,a.next=3,fetch(Pt+e.id,{method:"DELETE"});case 3:o=a.sent,200===o.status&&(n("borrarNota",e),r("cargaNotas"));case 5:case"end":return a.stop()}}),a)})))()},modificaNota:function(t,e){return Object(Ct["a"])(regeneratorRuntime.mark((function a(){var n,r,o,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=t.dispatch,o=e.id,c=e.notaNumerica,a.next=4,fetch(Pt+o,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nota:c})});case 4:u=a.sent,200===u.status&&(n("modificarNota",{id:o,notaNumerica:c}),r("cargaNotas"));case 6:case"end":return a.stop()}}),a)})))()}},modules:{}});Object(n["c"])(v).use(Et).use(At).mount("#app")},"64be":function(t,e,a){"use strict";a("c894")},c894:function(t,e,a){}});
//# sourceMappingURL=app.4f04a1f7.js.map