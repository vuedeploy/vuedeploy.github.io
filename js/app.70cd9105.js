(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],p=0,s=[];p<c.length;p++)a=c[p],o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:"/"}},[e._v("首页")]),n("router-link",{attrs:{to:"/about"}},[e._v("关于我们")]),n("router-view")],1)},u=[],a={name:"App"},c=a,i=n("2877"),l=Object(i["a"])(c,o,u,!1,null,"7c02cf8e",null),f=l.exports,p=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    Home\n    \n")])},d=[],v={name:"Home"},b=v,h=Object(i["a"])(b,s,d,!1,null,"cfab18e6",null),m=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    About\n    \n")])},_=[],g={name:"About"},w=g,O=Object(i["a"])(w,y,_,!1,null,"113a6437",null),j=O.exports;r["a"].use(p["a"]);var x=new p["a"]({mode:"history",routes:[{path:"/",component:m},{path:"/about",component:j}]}),P=x;r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.70cd9105.js.map