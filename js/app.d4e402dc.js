(function(e){function n(n){for(var o,i,c=n[0],s=n[1],d=n[2],u=0,l=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"1b6df7d7","chunk-0206bfa0":"7eb1678d","chunk-0c047e41":"da2700f5","chunk-13a6037e":"b9b550ab","chunk-18f95272":"d078ffd9","chunk-25b302c8":"7e764b51","chunk-26fc7596":"0223e8d0","chunk-2c06842c":"ae56870c","chunk-2d0e96ec":"e2ca181d","chunk-2d208d90":"760c08b7","chunk-2d21d0e2":"bfeb6d2c","chunk-2d22c123":"a644a972","chunk-2d2747e2":"013e6804","chunk-2e80bb9a":"24a52a86","chunk-319206de":"4c787e88","chunk-32334cb6":"38590270","chunk-3c57cd7b":"e27cc4b3","chunk-3d6834f6":"019d9612","chunk-4cdd78c0":"49699030","chunk-4f2d402a":"301ae45e","chunk-4fde0a08":"7c15f751","chunk-515a8379":"37cc02fe","chunk-53ccb27e":"98af84a3","chunk-55d286b8":"1e2df45a","chunk-59974754":"6385320f","chunk-6e1e538a":"c4319b8c","chunk-766a929b":"1ad13c3d","chunk-c796899c":"cca6ec61","chunk-e8a7823a":"9f284bb7","chunk-f2df7d2c":"de9c9556","chunk-fde47172":"cdad90b9",comple:"70009075",creditos:"82550b37",glosario:"47612b4b",intro:"1098b42c",referencias:"47129696",sintesis:"01a004c5",tema1:"1edf1e35",tema2:"604b897d",tema3:"d103ebc1",tema4:"ec127188"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"694963e5","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"5ecd64df","chunk-6e1e538a":"126808df","chunk-766a929b":"81912bde","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"33c8a175",creditos:"6b410c65",glosario:"a5f9c882",intro:"31d6cfe0",referencias:"0f1ea7b4",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===t))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===o||u===t)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),a(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(m);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"2cad":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.6c00c3da.png"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=a("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),u=d.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");l["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"ef72"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Planeación de eventos ",descripcionCurso:"En la planeación de eventos se deben tener en cuenta varios factores que intervienen en las etapas de preproducción, producción y postproducción, uno de los más importantes se trata de la ficha técnica, documento que describe todas las características del evento, adicionalmente se debe definir los medios de comunicación para la adecuada difusión y divulgación de la actividad.",imagenBannerPrincipal:a("74b5"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("2cad")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Fases y producción del evento",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Ficha técnica de un evento",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Plan de trabajo de un evento",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Organigrama",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Flujograma",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Cronograma",hash:"t_3_3"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Divulgación y comunicaciones",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Ficha técnica del evento",referencia:"Venustiano Carranza. (Sin fecha). Ficha Técnica Jefatura Delegacional. Venustiano Carranza",tipo:"Documento",link:"https://www.vcarranza.cdmx.gob.mx/transparencia/documentos_2018/art_124/23_F_XXIII/ANIV_MERC_MERCED_SONORA.pdf "},{tema:"Ficha técnica del evento",referencia:"Gobierno de Coahuila. (Sin fecha). Ficha Técnica de evento. Docplayer.es",tipo:"Documento",link:"https://docplayer.es/15537767-Ficha-tecnica-de-evento.html "},{tema:"Plan de trabajo de un evento - Organigrama",referencia:"Luisa Fernanda Roa Martínez. (Sin fecha). Estructura Organizacional de los eventos. Yumpu.com",tipo:"Enlace web",link:"https://www.yumpu.com/es/document/read/65302521/estructura-organizacional-de-los-eventos "},{tema:"Plan de trabajo de un evento - Flujograma",referencia:"González, Otto (2022). ¿Qué es un diagrama de flujo y para qué sirve? [Web log post] Crehana.",tipo:"Blog",link:"https://www.crehana.com/blog/negocios/que-es-un-diagrama-de-flujo/ "},{tema:"Plan de trabajo – cronograma",referencia:"Asana Team. (2021). El diagrama de pert: qué es y cómo crearlo. Asana.",tipo:"Página web",link:"https://asana.com/es/resources/pert-chart "},{tema:"Plantillas para planificación de eventos",referencia:"Plantillas gratis para planificación de un evento en Excel, Google Sheets y GanttPRO. Ganttpro. ",tipo:"Página web",link:"https://ganttpro.com/es/event-planning-templates/ "}],glosario:[{termino:"Backline",significado:"equipo electrónico de amplificación de audio."},{termino:"Briefing",significado:"herramienta de comunicación que sirve para vender el evento."},{termino:"Camerino",significado:"lugar donde se prepara al artista para salir a escena."},{termino:"Comité",significado:"grupo de profesionales expertos en un hacer."},{termino:"Free Press",significado:"comunicado de prensa que busca dar a conocer información clave."},{termino:"Landig page",significado:"es una página web que redirecciona a los usuarios a un sitio donde encuentra oferta de productos, servicios o eventos."},{termino:"Negociación",significado:"llegar a acuerdos que favorezcan las partes."},{termino:"Página web",significado:"es un sitio o documento en internet donde los usuarios encuentran información en línea de un tema en texto, imágenes, audio, vídeo, hipervínculos entre otros."},{termino:"Producción",significado:"realizar todas las gestiones previas de un evento."},{termino:"Rider técnico",significado:"conoce las necesidades técnicas de los artistas en un espectáculo."},{termino:"Streaming",significado:"tecnología que permite transmitir contenido multimedia, vídeos o audios ya sea en vivo o diferido a dispositivos móviles, computadoras, tablets, portátiles."},{termino:"Target Group",significado:"grupo objetivo al cual se dirige en específico un producto, servicio o evento."}],referencias:[{referencia:"Cesae Bussines & Tourism School. (2018). Cómo organizar un evento: ideas, fases y recomendaciones para tener éxito. Cesae ",link:"https://www.cesae.es/blog/como-organizar-un-evento-ideas-fases-y-recomendaciones-para-tener-exito"},{referencia:"Divulgación dinámica The Education Club. (2020). <em>Etapas de la organización de eventos.</em> Divulgación dinámica",link:"https://www.divulgaciondinamica.es/etapas-de-la-organizacion-de-eventos/ "},{referencia:"Euroforum. (2018). <em>¿Cuáles son las funciones de un organizador de eventos?</em> Euroforum",link:"https://www.euroforum.es/blog/funciones-de-un-organizador-de-eventos/ "},{referencia:"Fundación Evolución y Wormhole (2018). <em>Estrategias de diseño e implementación de eventos online.</em> Wormhole Live Learning plarform ",link:"https://www.wormholeit.com/wp-content/uploads/2018/10/Estrategias-de-diseno-e-implementacion-de-eventos-online.pdf"},{referencia:"Madison Experience Marketing. (2018). <em>Comunicación en los eventos, organiza tu estrategia.</em> Madison Experience Marketing ",link:""},{referencia:"Natinnova. (2021). <em>Difusión de eventos: todo lo que debes tener en cuenta</em>. Natinnova",link:""},{referencia:"Peewah. (2016). <em>Medios de comunicación que no pueden faltar para lograr la asistencia esperada a tu evento.</em> Peewah",link:""},{referencia:"Marketer Colombia (2021). <em>¿Qué debes tener en cuenta para crear un evento digital exitoso?</em> Mks Colombia",link:"https://www.mkscolombia.com/in-the-eye-of-the-marketer/que-debes-tener-en-cuenta-para-crear-un-evento-digital-exitoso/"},{referencia:"Meardon, Eddi. (Sin fecha). <em>Todo sobre los diagramas de Gantt</em>. Atlassian",link:"https://www.atlassian.com/es/agile/project-management/gantt-chart"},{referencia:"Navarro Almuedo, L. (2018). <em>Planificación, organización y control de eventos.</em> IC Editorial. ",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/129553"},{referencia:"Rico, D. G. (2017). <em>Gestión de eventos de marketing y comunicación.</em> Ediciones de la U. ",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7127"},{referencia:"Sabater, F. y Ato, Ó. (2020). <em>Planificación de la comunicación de eventos: estrategia e innovación en tiempos de inmediatez.</em> Editorial UOC. ",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/169695"},{referencia:"Universidad Empresarial Siglo 21. (Sin fecha). <em>Ficha Técnica de un Evento</em>. Coursehero ",link:"https://www.coursehero.com/u/file/81186680/1-Ficha-tecnica-de-un-eventopdf/#comments"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},"74b5":function(e,n,a){e.exports=a.p+"img/banner-princiapal.3d3777ba.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.359cf3d6.png"}});
//# sourceMappingURL=app.d4e402dc.js.map