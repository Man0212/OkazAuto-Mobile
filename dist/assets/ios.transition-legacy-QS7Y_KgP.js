!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,o,n){var r;return r=function(e,o){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,o||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)}(o,"string"),(o="symbol"==t(r)?r:String(r))in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function o(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,l=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw l}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}System.register(["./index-legacy-UwzI3uLo.js"],(function(t,n){"use strict";var r,a;return{setters:[function(t){r=t.j,a=t.k}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
var n=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},l=t("shadow",(function(t){return t.shadowRoot||t})),i=function(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){var n=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=n?n.querySelector(o):null}return t.querySelector(o)},c=function(t,e){var n="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),r=[];if(null!=n){var a=n.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=a&&(r=a.querySelectorAll("ion-buttons"))}else r=t.querySelectorAll("ion-buttons");var l,i=o(r);try{for(i.s();!(l=i.n()).done;){var c=l.value,s=c.closest("ion-header"),f=s&&!s.classList.contains("header-collapse-condense-inactive"),d=c.querySelector("ion-back-button"),u=c.classList.contains("buttons-collapse"),m="start"===c.slot||""===c.slot;if(null!==d&&m&&(u&&f&&e||!u))return d}}catch(y){i.e(y)}finally{i.f()}return null},s=function(t,o,a,i,c,s,f,u,m){var y,p,b=o?"calc(100% - ".concat(c.right+4,"px)"):"".concat(c.left-4,"px"),v=o?"right":"left",S=o?"left":"right",g=o?"right":"left",h=(null===(y=s.textContent)||void 0===y?void 0:y.trim())===(null===(p=u.textContent)||void 0===p?void 0:p.trim()),T=m.width/f.width,q=(m.height-d)/f.height,x=h?"scale(".concat(T,", ").concat(q,")"):"scale(".concat(q,")"),A="scale(1)",E=l(i).querySelector("ion-icon").getBoundingClientRect(),X="".concat(o?E.width/2-(E.right-c.right):c.left-E.width/2,"px"),C=o?"-".concat(window.innerWidth-c.right,"px"):"".concat(c.left,"px"),w="".concat(m.top,"px"),k="".concat(c.top,"px"),P=[{offset:0,transform:"translate3d(".concat(X,", ").concat(w,", 0)")},{offset:1,transform:"translate3d(".concat(C,", ").concat(k,", 0)")}],B=[{offset:0,transform:"translate3d(".concat(C,", ").concat(k,", 0)")},{offset:1,transform:"translate3d(".concat(X,", ").concat(w,", 0)")}],R=a?B:P,j=a?[{offset:0,opacity:1,transform:A},{offset:1,opacity:0,transform:x}]:[{offset:0,opacity:0,transform:x},{offset:1,opacity:1,transform:A}],L=a?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],W=r(),I=r(),N=r(),O=n("ion-back-button"),z=l(O).querySelector(".button-text"),D=l(O).querySelector("ion-icon");O.text=i.text,O.mode=i.mode,O.icon=i.icon,O.color=i.color,O.disabled=i.disabled,O.style.setProperty("display","block"),O.style.setProperty("position","fixed"),I.addElement(D),W.addElement(z),N.addElement(O),N.beforeStyles(e({position:"absolute",top:"0px"},g,"0px")).keyframes(R),W.beforeStyles({"transform-origin":"".concat(v," top")}).beforeAddWrite((function(){i.style.setProperty("display","none"),O.style.setProperty(v,b)})).afterAddWrite((function(){i.style.setProperty("display",""),O.style.setProperty("display","none"),O.style.removeProperty(v)})).keyframes(j),I.beforeStyles({"transform-origin":"".concat(S," center")}).keyframes(L),t.addAnimation([W,I,N])},f=function(t,o,a,l,i,c,s,f){var u,m,y=o?"right":"left",p=o?"calc(100% - ".concat(i.right,"px)"):"".concat(i.left,"px"),b="".concat(i.top,"px"),v=o?"-".concat(window.innerWidth-f.right-8,"px"):"".concat(f.x-8,"px"),S="".concat(f.y-2,"px"),g=(null===(u=s.textContent)||void 0===u?void 0:u.trim())===(null===(m=l.textContent)||void 0===m?void 0:m.trim()),h=f.width/c.width,T=f.height/(c.height-d),q="scale(1)",x=g?"scale(".concat(h,", ").concat(T,")"):"scale(".concat(T,")"),A=[{offset:0,opacity:0,transform:"translate3d(".concat(v,", ").concat(S,", 0) ").concat(x)},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(".concat("0px",", ").concat(b,", 0) ").concat(q)}],E=[{offset:0,opacity:.99,transform:"translate3d(".concat("0px",", ").concat(b,", 0) ").concat(q)},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(v,", ").concat(S,", 0) ").concat(x)}],X=a?A:E,C=n("ion-title"),w=r();C.innerText=l.innerText,C.size=l.size,C.color=l.color,w.addElement(C),w.beforeStyles(e({"transform-origin":"".concat(y," top"),height:"".concat(i.height,"px"),display:"",position:"relative"},y,p)).beforeAddWrite((function(){l.style.setProperty("opacity","0")})).afterAddWrite((function(){l.style.setProperty("opacity",""),C.style.setProperty("display","none")})).keyframes(X),t.addAnimation(w)},d=(t("iosTransitionAnimation",(function(t,e){var o;try{var n="opacity",d="transform",u="0%",m="rtl"===t.ownerDocument.dir,y=m?"-99.5%":"99.5%",p=m?"33%":"-33%",b=e.enteringEl,v=e.leavingEl,S="back"===e.direction,g=b.querySelector(":scope > ion-content"),h=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=b.querySelectorAll(":scope > ion-header > ion-toolbar"),q=r(),x=r();if(q.addElement(b).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),v&&null!=t){var A=r();A.addElement(t),q.addAnimation(A)}if(g||0!==T.length||0!==h.length?(x.addElement(g),x.addElement(h)):x.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(x),S?x.beforeClearStyles([n]).fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(u,")")).fromTo(n,.8,1):x.beforeClearStyles([n]).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(u,")")),g){var E=l(g).querySelector(".transition-effect");if(E){var X=E.querySelector(".transition-cover"),C=E.querySelector(".transition-shadow"),w=r(),k=r(),P=r();w.addElement(E).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),k.addElement(X).beforeClearStyles([n]).fromTo(n,0,.1),P.addElement(C).beforeClearStyles([n]).fromTo(n,.03,.7),w.addAnimation([k,P]),x.addAnimation([w])}}var B=b.querySelector("ion-header.header-collapse-condense"),R=function(t,e,o,n,r){var a=c(n,o),d=i(r),u=i(n),m=c(r,o),y=null!==a&&null!==d&&!o,p=null!==u&&null!==m&&o;if(y){var b=d.getBoundingClientRect(),v=a.getBoundingClientRect(),S=l(a).querySelector(".button-text"),g=S.getBoundingClientRect(),h=l(d).querySelector(".toolbar-title").getBoundingClientRect();f(t,e,o,d,b,h,S,g),s(t,e,o,a,v,S,g,d,h)}else if(p){var T=u.getBoundingClientRect(),q=m.getBoundingClientRect(),x=l(m).querySelector(".button-text"),A=x.getBoundingClientRect(),E=l(u).querySelector(".toolbar-title").getBoundingClientRect();f(t,e,o,u,T,E,x,A),s(t,e,o,m,q,x,A,u,E)}return{forward:y,backward:p}}(q,m,S,b,v),j=R.forward,L=R.backward;if(T.forEach((function(t){var e=r();e.addElement(t),q.addAnimation(e);var o=r();o.addElement(t.querySelector("ion-title"));var a,i=r(),c=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),s=t.closest("ion-header"),f=null==s?void 0:s.classList.contains("header-collapse-condense-inactive");a=S?c.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!f||!e})):c.filter((function(t){return!t.classList.contains("buttons-collapse")})),i.addElement(a);var d=r();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=r();b.addElement(l(t).querySelector(".toolbar-background"));var v=r(),g=t.querySelector("ion-back-button");if(g&&v.addElement(g),e.addAnimation([o,i,d,b,v]),i.fromTo(n,.01,1),d.fromTo(n,.01,1),S)f||o.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(u,")")).fromTo(n,.01,1),d.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(u,")")),v.fromTo(n,.01,1);else if(B||o.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(u,")")).fromTo(n,.01,1),d.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(u,")")),b.beforeClearStyles([n,"transform"]),(null==s?void 0:s.translucent)?b.fromTo("transform",m?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(n,.01,"var(--opacity)"),j||v.fromTo(n,.01,1),g&&!j){var h=r();h.addElement(l(g).querySelector(".button-text")).fromTo("transform",m?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(h)}})),v){var W=r(),I=v.querySelector(":scope > ion-content"),N=v.querySelectorAll(":scope > ion-header > ion-toolbar"),O=v.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(I||0!==N.length||0!==O.length?(W.addElement(I),W.addElement(O)):W.addElement(v.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(W),S){W.beforeClearStyles([n]).fromTo("transform","translateX(".concat(u,")"),m?"translateX(-100%)":"translateX(100%)");var z=a(v);q.afterAddWrite((function(){"normal"===q.getDirection()&&z.style.setProperty("display","none")}))}else W.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(p,")")).fromTo(n,1,.8);if(I){var D=l(I).querySelector(".transition-effect");if(D){var M=D.querySelector(".transition-cover"),U=D.querySelector(".transition-shadow"),$=r(),F=r(),G=r();$.addElement(D).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),F.addElement(M).beforeClearStyles([n]).fromTo(n,.1,0),G.addElement(U).beforeClearStyles([n]).fromTo(n,.7,.03),$.addAnimation([F,G]),W.addAnimation([$])}}N.forEach((function(t){var e=r();e.addElement(t);var o=r();o.addElement(t.querySelector("ion-title"));var a=r(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),c=t.closest("ion-header"),s=null==c?void 0:c.classList.contains("header-collapse-condense-inactive"),f=Array.from(i).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!s||!e}));a.addElement(f);var y=r(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&y.addElement(b);var v=r();v.addElement(l(t).querySelector(".toolbar-background"));var g=r(),h=t.querySelector("ion-back-button");if(h&&g.addElement(h),e.addAnimation([o,a,y,g,v]),q.addAnimation(e),g.fromTo(n,.99,0),a.fromTo(n,.99,0),y.fromTo(n,.99,0),S){if(s||o.fromTo("transform","translateX(".concat(u,")"),m?"translateX(-100%)":"translateX(100%)").fromTo(n,.99,0),y.fromTo("transform","translateX(".concat(u,")"),m?"translateX(-100%)":"translateX(100%)"),v.beforeClearStyles([n,"transform"]),(null==c?void 0:c.translucent)?v.fromTo("transform","translateX(0px)",m?"translateX(-100%)":"translateX(100%)"):v.fromTo(n,"var(--opacity)",0),h&&!L){var T=r();T.addElement(l(h).querySelector(".button-text")).fromTo("transform","translateX(".concat(u,")"),"translateX(".concat((m?-124:124)+"px",")")),e.addAnimation(T)}}else s||o.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(p,")")).fromTo(n,.99,0).afterClearStyles([d,n]),y.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(p,")")).afterClearStyles([d,n]),g.afterClearStyles([n]),o.afterClearStyles([n]),a.afterClearStyles([n])}))}return q}catch(H){throw H}})),10)}}}))}();
