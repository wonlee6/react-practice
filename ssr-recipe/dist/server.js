!function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=13)}([function(e,r){e.exports=require("react/jsx-runtime")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(12)},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";t.r(r);var n=t(3),c=t.n(n),o=t(0);function s(e,r,t,n,c,o,s){try{var u=e[o](s),i=u.value}catch(e){return void t(e)}u.done?r(i):Promise.resolve(i).then(n,c)}function u(e){return function(){var r=this,t=arguments;return new Promise((function(n,c){var o=e.apply(r,t);function u(e){s(o,n,c,u,i,"next",e)}function i(e){s(o,n,c,u,i,"throw",e)}u(void 0)}))}}var i=t(1),a=t.n(i),l=t(6),p=t.n(l),f=t(7),d=t.n(f),j=t(2),b=function(){return Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/red",children:"Red"})}),Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/blue",children:"Blue"})}),Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/users",children:"Users"})})]})},x=function(){return Object(o.jsx)("div",{className:"Red",children:"Red"})},O=function(){return Object(o.jsx)(x,{})},h=function(){return Object(o.jsx)("div",{className:"Blue",children:"Blue"})},v=function(){return Object(o.jsx)(h,{})},m=function(e){var r=e.users;return r?Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},y=t(5);function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var P=t(9),_=t.n(P),w=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},R={users:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return E(E({},e),{},{loading:E(E({},e.loading),{},{users:!0}),error:E(E({},e.error),{},{users:null})});case"users/GET_USERS_SUCCESS":return E(E({},e),{},{loading:E(E({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return E(E({},e),{},{loading:E(E({},e.loading),{},{users:!1}),error:E(E({},e.error),{},{users:r.payload})});default:return e}},T=Object(i.createContext)(null),U=T,q=function(e){var r=e.resolve,t=Object(i.useContext)(T);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},D=a.a.useEffect,G=Object(y.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=u(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,_.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(w(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return D((function(){r||t()}),[t,r]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{users:r}),Object(o.jsx)(q,{resolve:t})]})})),N=function(){return Object(o.jsx)(G,{})};var C=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(j.Route,{path:"/red",component:O}),Object(o.jsx)(j.Route,{path:"/blue",component:v}),Object(o.jsx)(j.Route,{path:"/users",component:N})]})},L=t(8),M=t.n(L),A=t(10),F=t.n(A),I=t(4),B=t(11),J=t.n(B),Y=Object(I.combineReducers)({users:k}),$=JSON.parse(F.a.readFileSync(M.a.resolve("./build/asset-manifest.json"),"utf8")),z=Object.keys($.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat($.files[e],'"><\/script>')})).join("");function H(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat($.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,"\n      </div>\n      ").concat(r,'\n      <script src="').concat($.files["runtime-main.js"],'"><\/script>\n      ').concat(z,'\n      <script src="').concat($.files["main.js"],'"><\/script>\n    </body>\n    </html>\n      ')}var K=d()(),Q=function(){var e=u(c.a.mark((function e(r,t,n){var s,u,i,a,l,f,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},u=Object(I.createStore)(Y,Object(I.applyMiddleware)(J.a)),i={done:!1,promises:[]},a=Object(o.jsx)(U.Provider,{value:i,children:Object(o.jsx)(y.Provider,{store:u,children:Object(o.jsx)(j.StaticRouter,{location:r.url,context:s,children:Object(o.jsx)(C,{})})})}),p.a.renderToStaticMarkup(a),e.prev=5,e.next=8,Promise.all(i.promises);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",t.staus(500));case 13:i.done=!0,l=p.a.renderToString(a),f=JSON.stringify(u.getState()).replace(/</g,"\\u003c"),d="<script>__PRELOADED_STATE__ = ".concat(f,"<\/script>"),t.send(H(l,d));case 18:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(r,t,n){return e.apply(this,arguments)}}(),V=d.a.static(M.a.resolve("./build"),{index:!1});K.use(V),K.use(Q),K.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);