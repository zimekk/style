(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[940],{940:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var r=n(784);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var o,c=o||(o={});c.Pop="POP",c.Push="PUSH",c.Replace="REPLACE";function u(t){t.preventDefault(),t.returnValue=""}function i(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}const l=function(t){function e(){var t=s.location,e=f.state||{};return[e.idx,{pathname:t.pathname,search:t.search,hash:t.hash,state:e.usr||null,key:e.key||"default"}]}function n(t){if("string"==typeof t)var e=t;else{e=t.pathname;var n=t.search;e=(void 0===e?"/":e)+(void 0===n?"":n)+(void 0===(t=t.hash)?"":t)}return e}function r(t,e){void 0===e&&(e=null);var n=a,r=d;if("string"==typeof t){var o={};if(t){var c=t.indexOf("#");0<=c&&(o.hash=t.substr(c),t=t.substr(0,c)),0<=(c=t.indexOf("?"))&&(o.search=t.substr(c),t=t.substr(0,c)),t&&(o.pathname=t)}t=o}return n({},r,{},t,{state:e,key:Math.random().toString(36).substr(2,8)})}function c(t){p=t,t=e(),v=t[0],d=t[1],y.call({action:p,location:d})}function l(t){f.go(t)}void 0===t&&(t={});var s=void 0===(t=t.window)?document.defaultView:t,f=s.history,h=null;s.addEventListener("popstate",(function(){if(h)g.call(h),h=null;else{var t=o.Pop,n=e(),r=n[0];if(n=n[1],g.length){if(null!=r){var a=v-r;a&&(h={action:t,location:n,retry:function(){l(-1*a)}},l(a))}}else c(t)}}));var p=o.Pop,v=(t=e())[0],d=t[1],y=i(),g=i();return null==v&&(v=0,f.replaceState(a({},f.state,{idx:v}),"")),{get action(){return p},get location(){return d},createHref:n,push:function t(e,a){var u=o.Push,i=r(e,a);if(!g.length||(g.call({action:u,location:i,retry:function(){t(e,a)}}),0)){var l=[{usr:i.state,key:i.key,idx:v+1},n(i)];i=l[0],l=l[1];try{f.pushState(i,"",l)}catch(t){s.location.assign(l)}c(u)}},replace:function t(e,a){var u=o.Replace,i=r(e,a);g.length&&(g.call({action:u,location:i,retry:function(){t(e,a)}}),1)||(i=[{usr:i.state,key:i.key,idx:v},n(i)],f.replaceState(i[0],"",i[1]),c(u))},go:l,back:function(){l(-1)},forward:function(){l(1)},listen:function(t){return y.push(t)},block:function(t){var e=g.push(t);return 1===g.length&&s.addEventListener("beforeunload",u),function(){e(),g.length||s.removeEventListener("beforeunload",u)}}}}();function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const f=({children:t,...e})=>r.createElement("button",s({style:{color:"red"}},e),t),h=t=>{const[e,n="/"]=decodeURI(t.hash).match(/^#(.+)/)||[];return n},p=()=>{const[t,e]=(0,r.useState)(h(l.location)),[n,a]=(0,r.useState)(0);return(0,r.useEffect)((()=>l.listen((({location:t,action:n,...r})=>e(h(t)))))),r.createElement("section",null,r.createElement("h1",null,"style"),r.createElement("nav",null,r.createElement(f,{onClick:t=>a((t=>t+1))},n)))}}}]);