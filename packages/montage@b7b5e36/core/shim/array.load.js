montageDefine("b7b5e36","core/shim/array",{dependencies:[],factory:function(t,e,r){Array.isArray||Object.defineProperty(Array,"isArray",{value:function(t){return"[object Array]"===Object.prototype.toString.call(t)},writable:!0,configurable:!0}),Object.defineProperty(Array.prototype,"compact",{value:function(){for(var t,e=-1,r=-1,i=this.length;++r<i;)this[r]!==t&&(this[++e]=this[r]);this.length=++e},writable:!0,configurable:!0}),Object.defineProperty(Array.prototype,"removeObjects",{value:function(t,e){var r,i,n=-1,o=-1,h=this.length,a=0;if(e=2!==arguments.length||e,"function"==typeof t.has)for(;++o<h;)t.has(this[o])?e&&t["delete"](this[o]):this[++n]=this[o];else if("function"==typeof t.hasOwnProperty)for(;++o<h;)t.hasOwnProperty(this[o])?e&&delete t[this[o]]:this[++n]=this[o];else if("function"==typeof t.indexOf){for(;++o<h;)(i=t.indexOf(this[o]))===-1?this[++n]=this[o]:(t[i]=r,a++);t.length===a?t.length=0:t.compact()}this.length=++n},writable:!0,configurable:!0})}});