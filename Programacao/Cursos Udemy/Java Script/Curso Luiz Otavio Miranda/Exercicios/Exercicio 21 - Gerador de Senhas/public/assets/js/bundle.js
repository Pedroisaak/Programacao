!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=58)}([function(t,r,n){var e=n(5),o=n(46).f,i=n(16),c=n(47),u=n(30),a=n(65),f=n(69);t.exports=function(t,r){var n,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(n=h?e:y?e[d]||u(d,{}):(e[d]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,r,n){var e=n(5),o=n(43),i=n(7),c=n(44),u=n(52),a=n(72),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,r,n){var e=n(11),o=n(4),i=n(7),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,r){if(i(u,t))return u[t];r||(r={});var n=[][t],f=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:a,l=i(r,1)?r[1]:void 0;return u[t]=!!n&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,l)}))}},function(t,r,n){var e=n(15),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||Function("return this")()}).call(this,n(63))},function(t,r,n){var e=n(28);t.exports=function(t){return Object(e(t))}},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r,n){"use strict";var e=n(4);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,n){var e=n(1),o=n(53),i=n(12),c=e("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,r,n){var e=n(4);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r,n){var e=n(11),o=n(41),i=n(17),c=n(31),u=Object.defineProperty;r.f=e?u:function(t,r,n){if(i(t),r=c(r,!0),i(n),o)try{return u(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(25),o=n(28);t.exports=function(t){return e(o(t))}},function(t,r,n){var e=n(38),o=n(25),i=n(6),c=n(3),u=n(22),a=[].push,f=function(t){var r=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,y){for(var g,x,m=i(v),b=o(m),_=e(d,h,3),O=c(b.length),S=0,w=y||u,A=r?w(v,O):n?w(v,0):void 0;O>S;S++)if((p||S in b)&&(x=_(g=b[S],S,m),t))if(r)A[S]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:a.call(A,g)}else if(s)return!1;return l?-1:f||s?s:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},function(t,r,n){var e=n(11),o=n(12),i=n(24);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(9);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var e=n(35);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,r,n){var e=n(15),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r){t.exports={}},function(t,r,n){"use strict";var e=n(31),o=n(12),i=n(24);t.exports=function(t,r,n){var c=e(r);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,r,n){var e=n(9),o=n(18),i=n(1)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},function(t,r,n){var e=n(4),o=n(1),i=n(55),c=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(4),o=n(35),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r,n){var e=n(48),o=n(5),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,n){var e,o,i,c=n(62),u=n(5),a=n(9),f=n(16),s=n(7),l=n(32),p=n(34),v=u.WeakMap;if(c){var d=new v,h=d.get,y=d.has,g=d.set;e=function(t,r){return g.call(d,t,r),r},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var x=l("state");p[x]=!0,e=function(t,r){return f(t,x,r),r},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(5),o=n(16);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(9);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,n){var e=n(43),o=n(44),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports=!1},function(t,r){t.exports={}},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r,n){var e=n(13),o=n(3),i=n(19),c=function(t){return function(r,n,c){var u,a=e(r),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,n){var e=n(27);t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},function(t,r,n){var e=n(40),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,r,n){var e=n(5),o=n(30),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,n){var e=n(11),o=n(4),i=n(42);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(5),o=n(9),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,r,n){var e=n(33),o=n(40);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},function(t,r,n){"use strict";var e=n(0),o=n(70),i=n(51),c=n(76),u=n(54),a=n(16),f=n(47),s=n(1),l=n(33),p=n(20),v=n(50),d=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,y=s("iterator"),g=function(){return this};t.exports=function(t,r,n,s,v,x,m){o(n,r,s);var b,_,O,S=function(t){if(t===v&&C)return C;if(!h&&t in j)return j[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},w=r+" Iterator",A=!1,j=t.prototype,E=j[y]||j["@@iterator"]||v&&j[v],C=!h&&E||S(v),k="Array"==r&&j.entries||E;if(k&&(b=i(k.call(new t)),d!==Object.prototype&&b.next&&(l||i(b)===d||(c?c(b,d):"function"!=typeof b[y]&&a(b,y,g)),u(b,w,!0,!0),l&&(p[w]=g))),"values"==v&&E&&"values"!==E.name&&(A=!0,C=function(){return E.call(this)}),l&&!m||j[y]===C||a(j,y,C),p[r]=C,v)if(_={values:S("values"),keys:x?C:S("keys"),entries:S("entries")},m)for(O in _)(h||A||!(O in j))&&f(j,O,_[O]);else e({target:r,proto:!0,forced:h||A},_);return _}},function(t,r,n){var e=n(11),o=n(64),i=n(24),c=n(13),u=n(31),a=n(7),f=n(41),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=c(t),r=u(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r,n){var e=n(5),o=n(16),i=n(7),c=n(30),u=n(39),a=n(29),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,r,n,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof r||i(n,"name")||o(n,"name",r),s(n).source=l.join("string"==typeof r?r:"")),t!==e?(a?!p&&t[r]&&(f=!0):delete t[r],f?t[r]=n:o(t,r,n)):f?t[r]=n:c(r,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,r,n){var e=n(5);t.exports=e},function(t,r,n){var e=n(7),o=n(13),i=n(36).indexOf,c=n(34);t.exports=function(t,r){var n,u=o(t),a=0,f=[];for(n in u)!e(c,n)&&e(u,n)&&f.push(n);for(;r.length>a;)e(u,n=r[a++])&&(~i(f,n)||f.push(n));return f}},function(t,r,n){"use strict";var e,o,i,c=n(51),u=n(16),a=n(7),f=n(1),s=n(33),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||u(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,r,n){var e=n(7),o=n(6),i=n(32),c=n(71),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,r,n){var e=n(4);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,r,n){var e,o=n(17),i=n(73),c=n(37),u=n(34),a=n(75),f=n(42),s=n(32),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;d=e?function(t){t.write(v("")),t.close();var r=t.parentWindow.Object;return t=null,r}(e):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete d.prototype[c[n]];return d()};u[l]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=d(),void 0===r?n:i(n,r)}},function(t,r,n){var e=n(12).f,o=n(7),i=n(1)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},function(t,r,n){var e,o,i=n(5),c=n(89),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,r,n){"use strict";var e=n(18),o=n(3),i=n(38),c=function(t,r,n,u,a,f,s,l){for(var p,v=a,d=0,h=!!s&&i(s,l,3);d<u;){if(d in n){if(p=h?h(n[d],d,r):n[d],f>0&&e(p))v=c(t,r,p,o(p.length),v,f-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[v]=p}v++}d++}return v};t.exports=c},function(t,r,n){var e=n(27),o=n(6),i=n(25),c=n(3),u=function(t){return function(r,n,u,a){e(n);var f=o(r),s=i(f),l=c(f.length),p=t?l-1:0,v=t?-1:1;if(u<2)for(;;){if(p in s){a=s[p],p+=v;break}if(p+=v,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=v)p in s&&(a=n(a,s[p],p,f));return a}};t.exports={left:u(!1),right:u(!0)}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var core_js_es_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59),core_js_es_array__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_es_array__WEBPACK_IMPORTED_MODULE_0__),_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(120),_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__);function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,r,n){return r&&_defineProperties(t.prototype,r),n&&_defineProperties(t,n),t}var inputQtdCaracteres=document.querySelector(".numeroDeCaracteres"),resultado=document.querySelector(".resultado"),formulario=document.querySelector(".formulario"),GeradorDeSenha=function(){function GeradorDeSenha(){_classCallCheck(this,GeradorDeSenha),this.eventos()}return _createClass(GeradorDeSenha,[{key:"eventos",value:function(t){var r=this;formulario.addEventListener("submit",(function(t){t.preventDefault(),r.valoresCheckbox(),r.geraSenha()}))}},{key:"geraSenha",value:function geraSenha(){this.number="0123456789",this.uppercase="ABCDEFGHIJKLMNOPQRSTUVWXTZ",this.lowercase="abcdefghiklmnopqrstuvwxyz",this.simbolos="*+?^$&()-/!;~[]#@_",this.ValoresCheckbox=this.valoresCheckbox(),this.ValoresCheckbox=this.ValoresCheckbox.toString(),this.ValoresCheckbox=this.ValoresCheckbox.replace(/,/g," + "),this.ValoresCheckbox=eval(this.ValoresCheckbox);var gerador=function(t,r){return Array.from(crypto.getRandomValues(new Uint32Array(t))).map((function(t){return r[t%r.length]})).join("")};resultado.innerHTML=gerador(inputQtdCaracteres.value,this.ValoresCheckbox)}},{key:"valoresCheckbox",value:function(){for(var t=formulario.querySelectorAll(".checkbox"),r=[],n=0;n<t.length;n++)t[n].checked&&r.push(t[n].value);return r}}]),GeradorDeSenha}(),s1=new GeradorDeSenha},function(t,r,n){n(60),n(78),n(86),n(87),n(88),n(90),n(92),n(93),n(95),n(96),n(97),n(98),n(99),n(100),n(102),n(103),n(104),n(105),n(106),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(117),n(118),n(119);var e=n(48);t.exports=e.Array},function(t,r,n){"use strict";var e=n(61).charAt,o=n(29),i=n(45),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,r=u(this),n=r.string,o=r.index;return o>=n.length?{value:void 0,done:!0}:(t=e(n,o),r.index+=t.length,{value:t,done:!1})}))},function(t,r,n){var e=n(15),o=n(28),i=function(t){return function(r,n){var i,c,u=String(o(r)),a=e(n),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,r,n){var e=n(5),o=n(39),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(7),o=n(66),i=n(46),c=n(12);t.exports=function(t,r){for(var n=o(r),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||u(t,s,a(r,s))}}},function(t,r,n){var e=n(26),o=n(67),i=n(68),c=n(17);t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(c(t)),n=i.f;return n?r.concat(n(t)):r}},function(t,r,n){var e=n(49),o=n(37).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(4),o=/#|\.prototype\./,i=function(t,r){var n=u[c(t)];return n==f||n!=a&&("function"==typeof r?e(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,r,n){"use strict";var e=n(50).IteratorPrototype,o=n(53),i=n(24),c=n(54),u=n(20),a=function(){return this};t.exports=function(t,r,n){var f=r+" Iterator";return t.prototype=o(e,{next:i(1,n)}),c(t,f,!1,!0),u[f]=a,t}},function(t,r,n){var e=n(4);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,n){var e=n(52);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){var e=n(11),o=n(12),i=n(17),c=n(74);t.exports=e?Object.defineProperties:function(t,r){i(t);for(var n,e=c(r),u=e.length,a=0;u>a;)o.f(t,n=e[a++],r[n]);return t}},function(t,r,n){var e=n(49),o=n(37);t.exports=Object.keys||function(t){return e(t,o)}},function(t,r,n){var e=n(26);t.exports=e("document","documentElement")},function(t,r,n){var e=n(17),o=n(77);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,i){return e(n),o(i),r?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,r,n){var e=n(9);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,n){var e=n(0),o=n(79);e({target:"Array",stat:!0,forced:!n(85)((function(t){Array.from(t)}))},{from:o})},function(t,r,n){"use strict";var e=n(38),o=n(6),i=n(80),c=n(81),u=n(3),a=n(21),f=n(82);t.exports=function(t){var r,n,s,l,p,v,d=o(t),h="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,x=void 0!==g,m=f(d),b=0;if(x&&(g=e(g,y>2?arguments[2]:void 0,2)),null==m||h==Array&&c(m))for(n=new h(r=u(d.length));r>b;b++)v=x?g(d[b],b):d[b],a(n,b,v);else for(p=(l=m.call(d)).next,n=new h;!(s=p.call(l)).done;b++)v=x?i(l,g,[s.value,b],!0):s.value,a(n,b,v);return n.length=b,n}},function(t,r,n){var e=n(17);t.exports=function(t,r,n,o){try{return o?r(e(n)[0],n[1]):r(n)}catch(r){var i=t.return;throw void 0!==i&&e(i.call(t)),r}}},function(t,r,n){var e=n(1),o=n(20),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,r,n){var e=n(83),o=n(20),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,r,n){var e=n(84),o=n(35),i=n(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?n:c?o(r):"Object"==(e=o(r))&&"function"==typeof r.callee?"Arguments":e}},function(t,r,n){var e={};e[n(1)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,r,n){var e=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var n=!1;try{var i={};i[e]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,r,n){n(0)({target:"Array",stat:!0},{isArray:n(18)})},function(t,r,n){"use strict";var e=n(0),o=n(4),i=n(21);e({target:"Array",stat:!0,forced:o((function(){function t(){}return!(Array.of.call(t)instanceof t)}))},{of:function(){for(var t=0,r=arguments.length,n=new("function"==typeof this?this:Array)(r);r>t;)i(n,t,arguments[t++]);return n.length=r,n}})},function(t,r,n){"use strict";var e=n(0),o=n(4),i=n(18),c=n(9),u=n(6),a=n(3),f=n(21),s=n(22),l=n(23),p=n(1),v=n(55),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var r=t[d];return void 0!==r?!!r:i(t)};e({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var r,n,e,o,i,c=u(this),l=s(c,0),p=0;for(r=-1,e=arguments.length;r<e;r++)if(g(i=-1===r?c:arguments[r])){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,r,n){var e=n(26);t.exports=e("navigator","userAgent")||""},function(t,r,n){var e=n(0),o=n(91),i=n(10);e({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},function(t,r,n){"use strict";var e=n(6),o=n(19),i=n(3),c=Math.min;t.exports=[].copyWithin||function(t,r){var n=e(this),u=i(n.length),a=o(t,u),f=o(r,u),s=arguments.length>2?arguments[2]:void 0,l=c((void 0===s?u:o(s,u))-f,u-a),p=1;for(f<a&&a<f+l&&(p=-1,f+=l-1,a+=l-1);l-- >0;)f in n?n[a]=n[f]:delete n[a],a+=p,f+=p;return n}},function(t,r,n){"use strict";var e=n(0),o=n(14).every,i=n(8),c=n(2),u=i("every"),a=c("every");e({target:"Array",proto:!0,forced:!u||!a},{every:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){var e=n(0),o=n(94),i=n(10);e({target:"Array",proto:!0},{fill:o}),i("fill")},function(t,r,n){"use strict";var e=n(6),o=n(19),i=n(3);t.exports=function(t){for(var r=e(this),n=i(r.length),c=arguments.length,u=o(c>1?arguments[1]:void 0,n),a=c>2?arguments[2]:void 0,f=void 0===a?n:o(a,n);f>u;)r[u++]=t;return r}},function(t,r,n){"use strict";var e=n(0),o=n(14).filter,i=n(23),c=n(2),u=i("filter"),a=c("filter");e({target:"Array",proto:!0,forced:!u||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){"use strict";var e=n(0),o=n(14).find,i=n(10),c=n(2),u=!0,a=c("find");"find"in[]&&Array(1).find((function(){u=!1})),e({target:"Array",proto:!0,forced:u||!a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,r,n){"use strict";var e=n(0),o=n(14).findIndex,i=n(10),c=n(2),u=!0,a=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),e({target:"Array",proto:!0,forced:u||!a},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(t,r,n){"use strict";var e=n(0),o=n(56),i=n(6),c=n(3),u=n(15),a=n(22);e({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=i(this),n=c(r.length),e=a(r,0);return e.length=o(e,r,r,n,0,void 0===t?1:u(t)),e}})},function(t,r,n){"use strict";var e=n(0),o=n(56),i=n(6),c=n(3),u=n(27),a=n(22);e({target:"Array",proto:!0},{flatMap:function(t){var r,n=i(this),e=c(n.length);return u(t),(r=a(n,0)).length=o(r,n,n,e,0,1,t,arguments.length>1?arguments[1]:void 0),r}})},function(t,r,n){"use strict";var e=n(0),o=n(101);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r,n){"use strict";var e=n(14).forEach,o=n(8),i=n(2),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,r,n){"use strict";var e=n(0),o=n(36).includes,i=n(10);e({target:"Array",proto:!0,forced:!n(2)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,r,n){"use strict";var e=n(0),o=n(36).indexOf,i=n(8),c=n(2),u=[].indexOf,a=!!u&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:a||!f||!s},{indexOf:function(t){return a?u.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){"use strict";var e=n(13),o=n(10),i=n(20),c=n(29),u=n(45),a=c.set,f=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,r){a(this,{type:"Array Iterator",target:e(t),index:0,kind:r})}),(function(){var t=f(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,r,n){"use strict";var e=n(0),o=n(25),i=n(13),c=n(8),u=[].join,a=o!=Object,f=c("join",",");e({target:"Array",proto:!0,forced:a||!f},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},function(t,r,n){var e=n(0),o=n(107);e({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},function(t,r,n){"use strict";var e=n(13),o=n(15),i=n(3),c=n(8),u=n(2),a=Math.min,f=[].lastIndexOf,s=!!f&&1/[1].lastIndexOf(1,-0)<0,l=c("lastIndexOf"),p=u("indexOf",{ACCESSORS:!0,1:0}),v=s||!l||!p;t.exports=v?function(t){if(s)return f.apply(this,arguments)||0;var r=e(this),n=i(r.length),c=n-1;for(arguments.length>1&&(c=a(c,o(arguments[1]))),c<0&&(c=n+c);c>=0;c--)if(c in r&&r[c]===t)return c||0;return-1}:f},function(t,r,n){"use strict";var e=n(0),o=n(14).map,i=n(23),c=n(2),u=i("map"),a=c("map");e({target:"Array",proto:!0,forced:!u||!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){"use strict";var e=n(0),o=n(57).left,i=n(8),c=n(2),u=i("reduce"),a=c("reduce",{1:0});e({target:"Array",proto:!0,forced:!u||!a},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){"use strict";var e=n(0),o=n(57).right,i=n(8),c=n(2),u=i("reduceRight"),a=c("reduce",{1:0});e({target:"Array",proto:!0,forced:!u||!a},{reduceRight:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){"use strict";var e=n(0),o=n(18),i=[].reverse,c=[1,2];e({target:"Array",proto:!0,forced:String(c)===String(c.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},function(t,r,n){"use strict";var e=n(0),o=n(9),i=n(18),c=n(19),u=n(3),a=n(13),f=n(21),s=n(1),l=n(23),p=n(2),v=l("slice"),d=p("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),y=[].slice,g=Math.max;e({target:"Array",proto:!0,forced:!v||!d},{slice:function(t,r){var n,e,s,l=a(this),p=u(l.length),v=c(t,p),d=c(void 0===r?p:r,p);if(i(l)&&("function"!=typeof(n=l.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[h])&&(n=void 0):n=void 0,n===Array||void 0===n))return y.call(l,v,d);for(e=new(void 0===n?Array:n)(g(d-v,0)),s=0;v<d;v++,s++)v in l&&f(e,s,l[v]);return e.length=s,e}})},function(t,r,n){"use strict";var e=n(0),o=n(14).some,i=n(8),c=n(2),u=i("some"),a=c("some");e({target:"Array",proto:!0,forced:!u||!a},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){"use strict";var e=n(0),o=n(27),i=n(6),c=n(4),u=n(8),a=[],f=a.sort,s=c((function(){a.sort(void 0)})),l=c((function(){a.sort(null)})),p=u("sort");e({target:"Array",proto:!0,forced:s||!l||!p},{sort:function(t){return void 0===t?f.call(i(this)):f.call(i(this),o(t))}})},function(t,r,n){n(116)("Array")},function(t,r,n){"use strict";var e=n(26),o=n(12),i=n(1),c=n(11),u=i("species");t.exports=function(t){var r=e(t),n=o.f;c&&r&&!r[u]&&n(r,u,{configurable:!0,get:function(){return this}})}},function(t,r,n){"use strict";var e=n(0),o=n(19),i=n(15),c=n(3),u=n(6),a=n(22),f=n(21),s=n(23),l=n(2),p=s("splice"),v=l("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,h=Math.min;e({target:"Array",proto:!0,forced:!p||!v},{splice:function(t,r){var n,e,s,l,p,v,y=u(this),g=c(y.length),x=o(t,g),m=arguments.length;if(0===m?n=e=0:1===m?(n=0,e=g-x):(n=m-2,e=h(d(i(r),0),g-x)),g+n-e>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=a(y,e),l=0;l<e;l++)(p=x+l)in y&&f(s,l,y[p]);if(s.length=e,n<e){for(l=x;l<g-e;l++)v=l+n,(p=l+e)in y?y[v]=y[p]:delete y[v];for(l=g;l>g-e+n;l--)delete y[l-1]}else if(n>e)for(l=g-e;l>x;l--)v=l+n-1,(p=l+e-1)in y?y[v]=y[p]:delete y[v];for(l=0;l<n;l++)y[l+x]=arguments[l+2];return y.length=g-e+n,s}})},function(t,r,n){n(10)("flat")},function(t,r,n){n(10)("flatMap")},function(t,r,n){var e=n(121),o=n(122);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);t.exports=o.locals||{}},function(t,r,n){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var t={};return function(r){if(void 0===t[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[r]=n}return t[r]}}(),c=[];function u(t){for(var r=-1,n=0;n<c.length;n++)if(c[n].identifier===t){r=n;break}return r}function a(t,r){for(var n={},e=[],o=0;o<t.length;o++){var i=t[o],a=r.base?i[0]+r.base:i[0],f=n[a]||0,s="".concat(a," ").concat(f);n[a]=f+1;var l=u(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(p)):c.push({identifier:s,updater:y(p,r),references:1}),e.push(s)}return e}function f(t){var r=document.createElement("style"),e=t.attributes||{};if(void 0===e.nonce){var o=n.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(t){r.setAttribute(t,e[t])})),"function"==typeof t.insert)t.insert(r);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(r)}return r}var s,l=(s=[],function(t,r){return s[t]=r,s.filter(Boolean).join("\n")});function p(t,r,n,e){var o=n?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(t.styleSheet)t.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),c=t.childNodes;c[r]&&t.removeChild(c[r]),c.length?t.insertBefore(i,c[r]):t.appendChild(i)}}function v(t,r,n){var e=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var d=null,h=0;function y(t,r){var n,e,o;if(r.singleton){var i=h++;n=d||(d=f(r)),e=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=f(r),e=v.bind(null,n,r),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else o()}}t.exports=function(t,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var n=a(t=t||[],r);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<n.length;e++){var o=u(n[e]);c[o].references--}for(var i=a(t,r),f=0;f<n.length;f++){var s=u(n[f]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=i}}}},function(t,r,n){(r=n(123)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),r.push([t.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\n button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n  width: 100px;\n  margin-left: 40%;\n  \n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n\n.container {\n  width: 640px;\n  overflow: auto;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  line-height: 60px;\n\n}\n\n.formulario {\n  width: 600px;\n}\n\n.resultado {\n  color: var(--primary-color);\n  font-size: 50px;\n\nflex-wrap:wrap;\n  font-weight: bold;\n  height: 150px;\n  text-align: center;\n  \n}\n\n.numeroDeCaracteres {\n  width: 50px;\n}\n\n",""]),t.exports=r},function(t,r,n){"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var n=function(t,r){var n=t[1]||"",e=t[3];if(!e)return n;if(r&&"function"==typeof btoa){var o=(c=e,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var c,u,a;return[n].join("\n")}(r,t);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(t,n,e){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);e&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),r.push(a))}},r}}]);
//# sourceMappingURL=bundle.js.map