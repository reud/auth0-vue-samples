(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],h=0,d=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e95":function(t,e,a){"use strict";var n=a("c2e9"),r=a.n(n);r.a},"34ba":function(t,e,a){"use strict";var n=a("7dbb"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n,r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[a("nav-bar"),a("div",{staticClass:"container flex-grow-1"},[a("error"),a("div",{staticClass:"mt-5"},[a("router-view")],1)],1),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bg-light text-center p-3"},[a("div",{staticClass:"logo"}),a("p",[t._v("\n      Sample project provided by\n      "),a("a",{attrs:{href:"https://auth0.com"}},[t._v("Auth0")])])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-container mb-3"},[a("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand logo"}),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/external-api"}},[t._v("秘密")])],1):t._e()]),a("ul",{staticClass:"navbar-nav d-none d-md-block"},[t.$auth.isAuthenticated||t.$auth.loading?t._e():a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-primary btn-margin",attrs:{id:"qsLoginBtn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login")])]),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"profileDropDown","data-toggle":"dropdown"}},[a("img",{staticClass:"nav-user-profile rounded-circle",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}})]),a("div",{staticClass:"dropdown-menu dropdown-menu-right"},[a("div",{staticClass:"dropdown-header"},[t._v(t._s(t.$auth.user.name))]),a("router-link",{staticClass:"dropdown-item dropdown-profile",attrs:{to:"/profile"}},[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),t._v("Profile\n              ")],1),a("a",{staticClass:"dropdown-item",attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),t._v("Log out\n              ")],1)],1)]):t._e()]),t.$auth.isAuthenticated||t.$auth.loading?t._e():a("ul",{staticClass:"navbar-nav d-md-none"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"qsLoginBtn"},on:{click:t.login}},[t._v("Log in")])]),t.$auth.isAuthenticated?a("ul",{staticClass:"navbar-nav d-md-none d-flex",attrs:{id:"mobileAuthNavBar"}},[a("li",{staticClass:"nav-item"},[a("span",{staticClass:"user-info"},[a("img",{staticClass:"nav-user-profile d-inline-block rounded-circle mr-3",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}}),a("h6",{staticClass:"d-inline-block"},[t._v(t._s(t.$auth.user.name))])])]),a("li",[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),a("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),a("li",[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),a("a",{attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Log out")])],1)]):t._e()])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"NavBar",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout(),this.$router.push({path:"/"})}}},u=l,h=(a("34ba"),a("2877")),d=Object(h["a"])(u,o,c,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v("\n  "+t._s(t.msg)+"\n  "),t._m(0)]):t._e()},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],m={name:"Error",methods:{msg:function(){return this.$auth.error}},computed:{show:function(){return null!==this.$auth.error}}},g=m,b=Object(h["a"])(g,f,v,!1,null,null,null),C=b.exports,_={components:{NavBar:p,Error:C}},w=_,x=Object(h["a"])(w,i,s,!1,null,null,null),y=x.exports,k=a("bc3a"),$=a.n(k),j={install:function(){r["a"].prototype.$http=$.a}},O=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hero"),a("hr"),a("home-content")],1)},S=[],E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center hero"},[a("img",{staticClass:"mb-3 app-logo",attrs:{src:"/logo.png",alt:"Vue.js logo",width:"120"}}),a("h1",{staticClass:"mb-4"},[t._v("Vue.js Sample Project")]),a("p",{staticClass:"lead"},[t._v("\n    This is a sample application that demonstrates an authentication flow for an SPA, using\n    "),a("a",{attrs:{href:"https://vuejs.org"}},[t._v("Vue.js")])])])}],P={name:"Hero"},T=P,M=Object(h["a"])(T,E,R,!1,null,null,null),N=M.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"next-steps"},[a("h2",{staticClass:"my-5 text-center"},[t._v("What can I do next?")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/connections"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Configure other identity providers\n        ")],1)]),a("p",[t._v("Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server.")])]),a("div",{staticClass:"col-md"}),a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/multifactor-authentication"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Enable Multifactor Authentication\n        ")],1)]),a("p",[t._v("Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported.")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/anomaly-detection"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Anomaly Detection\n        ")],1)]),a("p",[t._v("Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts.")])]),a("div",{staticClass:"col-md"}),a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/rules"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Learn About Rules\n        ")],1)]),a("p",[t._v("Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities.")])])])])},U=[],B={name:"HomeContent"},W=B,q=Object(h["a"])(W,L,U,!1,null,null,null),J=q.exports,D={name:"home",components:{Hero:N,HomeContent:J}},I=D,V=(a("0e95"),Object(h["a"])(I,A,S,!1,null,"7a563414",null)),H=V.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center profile-header"},[a("div",{staticClass:"col-md-2 mb-3"},[a("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})]),a("div",{staticClass:"col-md text-center text-md-left"},[a("h2",[t._v(t._s(t.$auth.user.name))]),a("p",{staticClass:"lead text-muted"},[t._v(t._s(t.$auth.user.email))])])]),a("div",{staticClass:"row"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:JSON.stringify(t.$auth.user,null,2),expression:"JSON.stringify($auth.user, null, 2)"}],staticClass:"rounded w-100"},[t._v("      "),a("code",{staticClass:"json"}),t._v("\n    ")])])])},F=[],G={},X=Object(h["a"])(G,z,F,!1,null,null,null),Y=X.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mb-5"},[a("h1",[t._v("ようこそ秘密のページへ")]),a("p",[t._v("\n      ここは秘密のページだよ\n    ")]),a("button",{staticClass:"btn btn-primary mt-5",on:{click:t.callApi}},[t._v("Call API")])]),a("div",{staticClass:"result-block-container"},[a("div",{class:["result-block",t.executed?"show":""]},[a("h6",{staticClass:"muted"},[t._v("Result")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:JSON.stringify(t.apiMessage,null,2),expression:"JSON.stringify(apiMessage, null, 2)"}]},[t._v("        "),a("code",{staticClass:"js rounded"}),t._v("\n      ")])])])])},Q=[],Z=(a("673e"),a("96cf"),a("3b8d")),tt={name:"Api",data:function(){return{apiMessage:null,executed:!1}},methods:{callApi:function(){var t=Object(Z["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,console.log(e),t.prev=4,a="himitu-api-server",t.next=8,this.$http.get("https://".concat(a,".herokuapp.com/himitu/").concat(this.$auth.user.sub),{headers:{Authorization:"Bearer ".concat(e)}});case 8:n=t.sent,r=n.data,this.apiMessage=r,this.executed=!0,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),this.apiMessage="Error: the server responded with '".concat(t.t0.response.status,": ").concat(t.t0.response.statusText,"'");case 17:case"end":return t.stop()}},t,this,[[4,14]])}));function e(){return t.apply(this,arguments)}return e}()}},et=tt,at=Object(h["a"])(et,K,Q,!1,null,null,null),nt=at.exports,rt=(a("386d"),a("6762"),a("2fdb"),a("a8db")),it=a("5891"),st=a.n(it),ot=function(){return window.history.replaceState({},document.title,window.location.pathname)},ct=function(){return n},lt=function(t){var e=t.onRedirectCallback,a=void 0===e?ot:e,i=t.redirect_uri,s=void 0===i?window.location.origin:i,o=Object(rt["a"])(t,["onRedirectCallback","redirect_uri"]);return n||(n=new r["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(){var t=Object(Z["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.error(t.t0);case 9:return t.prev=9,this.popupOpen=!1,t.finish(9);case 12:return t.next=14,this.auth0Client.getUser();case 14:this.user=t.sent,this.isAuthenticated=!0;case 16:case"end":return t.stop()}},t,this,[[1,6,9,12]])}));function e(e){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(Z["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:this.user=t.sent,this.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),this.error=t.t0;case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}},t,this,[[1,10,13,16]])}));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=Object(Z["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,st()({domain:o.domain,client_id:o.clientId,audience:o.audience,scope:"read:current_user",redirect_uri:s});case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=10;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:e=t.sent,n=e.appState,a(n);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),this.error=t.t0;case 15:return t.prev=15,t.next=18,this.auth0Client.isAuthenticated();case 18:return this.isAuthenticated=t.sent,t.next=21,this.auth0Client.getUser();case 21:return this.user=t.sent,this.loading=!1,t.finish(15);case 24:case"end":return t.stop()}},t,this,[[3,12,15,24]])}));function e(){return t.apply(this,arguments)}return e}()}),n)},ut={install:function(t,e){t.prototype.$auth=lt(e)}},ht=function(t,e,a){var n=ct(),r=function(){if(n.isAuthenticated)return a();n.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!n.loading)return r();n.$watch("loading",function(t){if(!1===t)return r()})};r["a"].use(O["a"]);var dt=new O["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/profile",name:"profile",component:Y,beforeEnter:ht},{path:"/external-api",component:nt,beforeEnter:ht}]}),pt=dt,ft=(a("ac6a"),a("a70e")),vt=a.n(ft),mt=a("5ad2"),gt=a.n(mt);a("6e2e");vt.a.registerLanguage("json",gt.a);var bt={deep:!0,bind:function(t,e){var a=t.querySelectorAll("code");a.forEach(function(t){e.value&&(t.textContent=e.value),vt.a.highlightBlock(t)})},componentUpdated:function(t,e){var a=t.querySelectorAll("code");a.forEach(function(t){e.value&&(t.textContent=e.value,vt.a.highlightBlock(t))})}},Ct=a("ecee"),_t=a("c074"),wt=a("ad3d"),xt=a("8160");r["a"].config.productionTip=!1,r["a"].use(ut,{domain:xt["c"],clientId:xt["b"],audience:xt["a"],onRedirectCallback:function(t){pt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),r["a"].use(j),r["a"].directive("highlightjs",bt),Ct["c"].add(_t["a"],_t["c"],_t["b"]),r["a"].component("font-awesome-icon",wt["a"]),new r["a"]({router:pt,render:function(t){return t(y)}}).$mount("#app")},"7dbb":function(t,e,a){},8160:function(t){t.exports=JSON.parse('{"c":"reud-mi.auth0.com","a":"https://reud-mi.auth0.com/api/v2/","b":"3pl2GTPnaVnvwVXLqPm5eVelvpM6F2ok"}')},c2e9:function(t,e,a){}});
//# sourceMappingURL=app.cd66fa22.js.map