!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i={bind:function(){var t=this.descriptor.el;"click"===this.descriptor.arg&&t.addEventListener("click",this.vm[this.descriptor.value].bind(this.vm))}},r={bind:function(){},update:function(t){this.descriptor.el.innerHTML=t}},o={bind:function(){var t=this,e=this.descriptor.el;e.addEventListener("input",(function(){t._watcher.set(e.value)}))},update:function(t){this.descriptor.el.value=t}},s=/^v-on:|^@/,u=/^v-model/,a=/^v-text/,c=/^v-([^:]+)(?:$|:(.*)$)/;var h=function(t,e){return t.hasChildNodes()?function(t,n){var i=p(n,e),r=function t(e,n){for(var i=[],r=0;r<e.length;r++){var o=e[r],s=p(o,n);s&&i.push(s),o.hasChildNodes()&&(s=t(o.childNodes,n))&&i.push(s)}return function(t,e){for(var n=i.length;n--;)i[n](t,e)}}(n.childNodes,e);i&&i(t,n),r&&r(t,n),t._directives.forEach((function(t){t._bind()}))}:function(t,n){p(n,e),t._directives.forEach((function(t){t._bind()}))}};function p(t,e){return function(t,e){if(e){for(var n,h=[],p=e.length,f=function(){var n=e[p],f=n.name,d=n.value,l=f;function v(e,n){h.push({el:t,name:e,rawName:f,def:n,arg:l,value:d,rawValue:d,expression:d})}f.match(c)&&(s.test(f)?(l=f.replace(s,""),v("on",i)):u.test(f)?(l=f.replace(u,""),v("model",o)):a.test(f)&&(l=f.replace(a,""),v("text",r)))};p--;)f();return h.length?(n=h,function(t,e){for(var i=n.length;i--;)t._bindDir(n[i],e)}):void 0}}(t,t.attributes)}var f=0;function d(){this.id=f++,this.subs=[]}d.target=null,d.prototype.addSub=function(t){this.subs.push(t)},d.prototype.removeSub=function(t){this.subs.$remove(t)},d.prototype.depend=function(){d.target.addDep(this)},d.prototype.notify=function(){for(var t=this.subs,e=0,n=t.length;e<n;e++)t[e].update()};var l=0;function v(t,e,n){t._watchers.push(this),this.vm=t,this.expOrFn=e,this.expression=e,this.cb=n,this.id=++l,this.deps=[],this.depIds=new Set,this.getter=function(){return t[e]},this.setter=function(t,n){return t[e]=n},this.value=this.get()}function b(t,e,n){this.descriptor=t,this.vm=e,this.el=n,this.expression=t.expression}v.prototype.update=function(){this.run()},v.prototype.run=function(){var t=this.get(),e=this.value;t!==e&&this.cb.call(this.vm,t,e)},v.prototype.get=function(){d.target=this;var t=this.getter.call(this.vm,this.vm);return d.target=null,t},v.prototype.set=function(t){return this.setter.call(this.vm,this.vm,t)},v.prototype.addDep=function(t){this.depIds.has(t.id)||(this.deps.push(t),this.depIds.add(t.id),t.addSub(this))},b.prototype._bind=function(){var t=this.descriptor.def;if("function"==typeof t?this.update=t:function(t,e){for(var n=Object.keys(e),i=n.length;i--;)t[n[i]]=e[n[i]]}(this,t),this.bind&&this.bind(),this.update&&this.update(),this.update){var e=this;this._update=function(t,n){e.update(t,n)}}else this._update=function(){};var n=this._watcher=new v(this.vm,this.expression,this._update);this.update&&this.update(n.value)};function y(t){this.value=t,this.dep=new d,this.walk(t)}y.prototype.walk=function(t){for(var e=Object.keys(t),n=0,i=e.length;n<i;n++)this.convert(e[n],t[e[n]])},y.prototype.convert=function(t,e){!function(t,e,n){var i=new d,r=Object.getOwnPropertyDescriptor(t,e);if(r&&!1===r.configurable)return;var o=r&&r.get;r&&r.set;Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){console.log("2211observer.get");var e=o?o.call(t):n;return d.target&&i.depend(),e},set:function(e){console.log("2211observer.set:".concat(e)),e!==(o?o.call(t):n)&&(n=e,i.notify())}})}(this.value,t,e)},y.prototype.addVm=function(t){(this.vms||(this.vms=[])).push(t)};function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m,_=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.init(e)}var e,n,i;return e=t,(n=[{key:"init",value:function(t){this._directives=[],this._watchers=[];var e=document.querySelector(t.el);for(var n in t._containerAttrs=function(t,e){e=e||0;for(var n=t.length-e,i=new Array(n);n--;)i[n]=t[n+e];return i}(e.attributes),this.$options=t,t.methods)this[n]=t.methods[n];this._initState(),this._compile(e,t)}}])&&g(e.prototype,n),i&&g(e,i),t}();m=_,Object.defineProperty(m.prototype,"$data",{get:function(){return this._data},set:function(t){t!==this._data&&this._setData(t)}}),m.prototype._initState=function(){this._initData()},m.prototype._initData=function(){var t,e,n,i=this.$options.data,r=this._data=i?"function"==typeof i?i():i:{},o=Object.keys(r);for(t=o.length;t--;)e=o[t],this._proxy(e);n=this,new y(r).addVm(n)},m.prototype._proxy=function(t){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})},function(t){t.prototype._compile=function(t,e){var n=h(t,e);n&&n(this,t)},t.prototype._bindDir=function(t,e){this._directives.push(new b(t,this,e))}}(_),window.MikaVue=_}]);
//# sourceMappingURL=mikavue.js.map