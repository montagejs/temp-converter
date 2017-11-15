function makeLiteralObserver(e){return function(r){return r(e)}}function observeValue(e,r){return e(r.value)}function observeParameters(e,r){return e(r.parameters)}function makeElementObserver(e){return function(r,n){return r(n.document.getElementById(e))}}function makeComponentObserver(e,r){return function(r,n){var t=n.components,a=t.getObjectByLabel||t.getComponentByLabel,o=a.call(t,e);return r(o)}}function observeProperty(e,r,n,t){function a(e,r,t){o&&o(),o=n(e,r,t)}if(null==e)return n();var o;return PropertyChanges.addOwnPropertyChangeListener(e,r,a,t.beforeChange),a(e[r],r,e),function(){o&&o(),PropertyChanges.removeOwnPropertyChangeListener(e,r,a,t.beforeChange)}}function makePropertyObserver(e,r){return function(n,t){return r(function(r){function a(e){return null==e?a.emit():e.observeProperty?e.observeProperty(r,a.emit,a.scope):a.observeProperty(e,r,a.emit,a.scope)}return"string"!=typeof r&&"number"!=typeof r?n():(a.observeProperty=_observeProperty,a.emit=n,a.scope=t,e(a,t))},t)}}function observeGet(e,r,n,t){function a(e,t,a){s(r,t)&&(o&&o(),o=n(e,r,a))}var o,s=e.contentEquals||Object.equals;return a(e.get(r),r,e),e.addMapChangeListener(a,t.beforeChange),function(){o&&o(),e.removeMapChangeListener(a)}}function makeGetObserver(e,r){return function(n,t){return e(function(e){function a(r){return null==r?n():e.observeGet?e.observeGet(r,n,t):a.observeGet(e,r,n,t)}return e?(a.observeGet=_observeGet,r(a,t)):n()},t)}}function makeHasObserver(e,r){return function(n,t){return n=makeUniq(n),r(function(r){return e(function(e){return e?e.addRangeChangeListener?observeRangeChange(e,function(){return n((e.has||e.contains).call(e,r))},t):e.addMapChangeListener?observeMapChange(e,function(){return n(e.has(r))},t):n():n()},t)},t)}}function makeObserversObserver(e){return function(r,n){for(var t=[],a=[],o=0,s=e.length;o<s;o++)t[o]=void 0,a[o]=function(e,r){return e(function(e){t.set(r,e)},n)}(e[o],o);var u=r(t);return function(){u&&u();for(var e=0,r=a.length;e<r;e++)u=a[e],u&&u()}}}function makeObjectObserver(e){return function(r,n){var t,a={},o={},s=Object.keys(e);for(t=0;name=s[t];t++)!function(e,r){o[e]=void 0,a[e]=r(function(r){o[e]=r},n)}(name,e[name]);var u=r(o);return function(){u&&u();var e,r=Object.keys(a);for(e=0;name=r[e];e++)u=a[name],u&&u()}}}function makeArrayObserver(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return makeObserversObserver(e)}function makeOperatorObserverMaker(e){return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];var t=makeObserversObserver(r),a=makeRangeContentObserver(t);return function(r,n){return a(function(n){return n.every(Operators.defined)?r(1===n.length?e.call(void 0,n[0]):2===n.length?e.call(void 0,n[0],n[1]):e.apply(void 0,n)):r()},n)}}}function makeMethodObserverMaker(e){var r=e.slice(0,1).toUpperCase();r+=e.slice(1);var n="make";n+=r,n+="Observer";var t="observe";return t+=r,function(){var r=arguments[0],a=Array.prototype.slice.call(arguments,1),o=makeObserversObserver(a),s=makeRangeContentObserver(o);return function(o,u){return r(function(r){return r?r[n]?1===a.length?r[n].call(r,a[0])(o,u):2===a.length?r[n].call(r,a[0],a[1])(o,u):r[n].apply(r,a)(o,u):r[t]?r[t](o,u):s(function(n){return n.every(Operators.defined)&&"function"==typeof r[e]?o(1===n.length?r[e].call(r,n[0]):2===n.length?r[e].call(r,n[0],n[1]):r[e].apply(r,n)):o()},u):o()},u)}}}function makeNotObserver(e){return function(r,n){return e(function(e){return r(!e)},n)}}function makeAndObserver(e,r){return function(n,t){return e(function(e){return e?r(n,t):n(e)},t)}}function makeOrObserver(e,r){return function(n,t){return e(function(e){return e?n(e):r(n,t)},t)}}function makeConditionalObserver(e,r,n){return function(t,a){return e(function(e){return null==e?t():e?r(t,a):n(t,a)},a)}}function makeDefinedObserver(e){return function(r,n){return e(function(e){return r(null!=e)},n)}}function makeDefaultObserver(e,r){return function(n,t){return e(function(e){return null==e?r(n,t):n(e)},t)}}function makeReplacingMapBlockObserver(e,r){return function(n,t){return e(function(e){function a(r){for(var n=0,t=e.length;n<t;n++)u[n].index=n}function o(e,n,o){function v(e,r,n,t,a,o,s,u){function i(e){f?a.set(v.index,e):o[r]=e}var v=t[n+r];return s(i,u.nest(e))}var c,l,b=[];for(c=0,l=e.length;c<l;c++)b[c]={index:o+c};swap(u,o,n.length,b),a(o+e.length);var f,m,p=[],k=o,O=o+n.length;for(k=o,O=o+n.length;k<O;k++)m=i[k],m&&m();for(c=0,l=e.length;c<l;c++)b[c]=v(e[c],c,o,u,s,p,r,t);swap(i,o,n.length,b),f=!0,s.swap(o,n.length,p)}if(!e)return n();var s=[],u=[],i=[],v=observeRangeChange(e,o,t),c=n(s,e);return function(){c&&c();for(var e=0,r=i.length;e<r;e++)c=i[e],c&&c();v()}},t)}}function makeReplacingFilterBlockObserver(e,r){var n=makeReplacingMapBlockObserver(e,r);return function(e,r){return n(function(n,t){function a(e){for(;e<n.length;e++)i[e+1]=i[e]+!!n[e]}function o(e,r,n){var o=t.slice(n,n+e.length),u=r.map(Boolean).sum(),v=o.filter(function(r,n){return e[n]}),c=i[n],l=s.slice(c,c+u);(l.length!==v.length||l.some(function(e,r){return e!==v[r]}))&&s.swap(c,u,v),a(c)}if(!t)return e();var s=[],u=[],i=[0],v=observeRangeChange(n,o,r),c=e(s);return function(){c&&c();for(var e=0,r=u.length;e<r;e++)c=u[e],c&&c();v()}},r)}}function makeSortedBlockObserver(e,r){var n=makeRelationEntryObserver(r),t=makeReplacingMapBlockObserver(e,n),a=function(e,r){return t(function(n){function t(e,r){o.deleteEach(r),o.addEach(e)}if(!n)return e();var a=[],o=SortedArray(a,entryValueEquals,entryValueCompare),s=observeRangeChange(n,t,r),u=e(a);return function(){u&&u(),s()}},r)};return makeMapBlockObserver(a,observeEntryKey)}function entryValueEquals(e,r){return Object.equals(e[1],r[1])}function entryValueCompare(e,r){return Object.compare(e[1],r[1])}function makeRelationEntryObserver(e){return function(r,n){return e(function(e){return r([n.value,e])},n)}}function makeSortedSetBlockObserver(e,r){var n=makeRelationEntryObserver(r),t=makeReplacingMapBlockObserver(e,n),a=makeGroupBlockObserver(t,observeEntryValue),o=makeReplacingMapBlockObserver(a,makeLastObserver(observeEntryValue));return function(e,r){function n(e,r){return e=u.get(e),r=u.get(r),Object.compare(e,r)}function t(e,r){return e=u.get(e),r=u.get(r),Object.equals(e,r)}function a(e,r){var n,t,a;for(n=0,t=r.length;n<t;n++)a=r[n],i["delete"](a[0]),u["delete"](a[0]);for(n=0,t=e.length;n<t;n++)a=e[n],u.set(a[0],a[1]),i.add(a[0])}function s(e){return i.clear(),observeRangeChange(e,a,r)}var u=new Map,i=new SortedSet(null,t,n),v=e(i),c=o(s,r);return function(){v&&v(),c()}}}function makeReplacingReversedObserver(e){return function(r,n){return e(function(e){function t(e,r,n){var t=a.length-n-r.length;a.swap(t,r.length,e.reversed())}if(!e)return r();var a=[],o=observeRangeChange(e,t,n),s=r(a);return function(){s&&s(),o()}},n)}}function makeReplacingFlattenObserver(e){return function(r,n){return e(function(e){function t(r){for(var n=r;n<e.length;n++)i[n].index=n,e[n]?u[n+1]=u[n]+e[n].length:u[n+1]=u[n]}function a(e,r,a){var v=u[a],c=u[a+r.length],l=c-v;o.swap(v,l,[]),swap(i,a,r.length,e.map(function(){return{index:null}})),t(a);for(var b,f=a,c=a+r.length;f<c;f++)b=s[f],b&&b();swap(s,a,r.length,e.map(function(e,r){function s(e,r,n){t(v.index);var a=u[v.index]+n,s=u[v.index]+n+r.length,i=s-a;o.swap(a,i,e)}var v=i[a+r];return observeRangeChange(e,s,n)}))}if(!e)return r();var o=[],s=[],u=[0],i=[],v=observeRangeChange(e,a,n),c=r(o);return function(){c&&c();for(var e=0,r=s.length;e<r;e++)c=s[e],c&&c();v()}},n)}}function makeConcatObserver(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return makeFlattenObserver(makeObserversObserver(e))}function makeSomeBlockObserver(e,r){var n=makeFilterBlockObserver(e,r),t=makePropertyObserver(n,observeLengthLiteral);return makeConverterObserver(t,Boolean)}function makeEveryBlockObserver(e,r){var n=makeConverterObserver(r,Operators.not),t=makeFilterBlockObserver(e,n),a=makePropertyObserver(t,observeLengthLiteral);return makeConverterObserver(a,Operators.not)}function makeGroupBlockObserver(e,r){var n=makeGroupMapBlockObserver(e,r);return makeEntriesObserver(n)}function makeGroupMapBlockObserver(e,r){var n=makeRelationEntryObserver(r),t=makeReplacingMapBlockObserver(e,n);return function(e,r){return t(function(n,t){function a(e,r,n){var a,s,u,i,v;for(a=0,s=r.length;a<s;a++)u=r[a],i=o.get(u[1]),1===i.length?o["delete"](u[1]):i["delete"](u[0]);for(a=0,s=e.length;a<s;a++)u=e[a],v=!o.has(u[1]),i=v?t.constructClone():o.get(u[1]),i.add(u[0]),v&&o.set(u[1],i)}if(!n)return e();var o=new Map,s=observeRangeChange(n,a,r),u=e(o);return function(){s(),u&&u()}},r)}}function makeHeapBlockObserver(e,r,n){function t(e,r){return Object.compare(e[1],r[1])*n}var a=makeRelationEntryObserver(r),o=makeReplacingMapBlockObserver(e,a);return function(e,r){return o(function(n){function a(e,r){s.addEach(e),s.deleteEach(r)}function o(r,n){if(0===n)return r?e(r[0]):e()}if(!n)return e();var s=new Heap(null,entryValueEquals,t),u=observeRangeChange(n,a,r),i=observeMapChange(s,o,r);return function(){u(),i()}},r)}}function makeMaxBlockObserver(e,r){return makeHeapBlockObserver(e,r,1)}function makeMinBlockObserver(e,r){return makeHeapBlockObserver(e,r,-1)}function makeMaxObserver(e){return makeHeapBlockObserver(e,observeValue,1)}function makeMinObserver(e){return makeHeapBlockObserver(e,observeValue,-1)}function makeCollectionObserverMaker(e){return function(r){return function(n,t){return n=makeUniq(n),r(function(r){if(!r)return n();var a=e(r,n);return observeRangeChange(r,function(e,r,t){return n(a(e,r,t))},t)},t)}}}function isNumber(e){return"number"==typeof e&&!isNaN(e)}function makeReplacingViewObserver(e,r,n){return n||(n=r,r=observeZero),function(t,a){return e(function(e){function o(r,n,t){if(l){var a=r.length-n.length;t<=u?a>0?(c.swap(0,0,e.slice(u,u+a)),c.splice(s,c.length-s)):(c.splice(0,-a),c.swap(c.length,0,e.slice(u+c.length,u+s))):t<u+s&&(c.swap(t-u,n.length,r),a>0?c.splice(s,c.length-s):c.swap(c.length,0,e.slice(u+c.length,u+s)))}}if(!e)return t();var s,u,i,v,c=[],l=!1,b=observeRangeChange(e,o,a),f=n(function(r){r=+r,isNaN(r)&&(r=void 0);var n="number"==typeof r&&"number"==typeof u,t=Math.max(0,r);"number"==typeof v&&(t=Math.min(t,e.length-v)),l!==n?(n?c.swap(0,0,e.slice(v,v+t)):c.clear(),l=n):l&&i!==t&&(t<i?c.splice(r,i-t):c.swap(i,0,e.slice(v+i,v+t))),s=r,i=t},a),m=r(function(r){r=+r,isNaN(r)&&(r=void 0);var n="number"==typeof s&&"number"==typeof r,t=Math.max(0,r);"number"==typeof s&&(t=Math.min(t,e.length));var a=Math.max(0,s);if("number"==typeof t&&(a=Math.min(a,e.length-t)),l!==n)n?c.swap(0,c.length,e.slice(t,t+a)):c.clear(),l=n;else if(l&&v!==t){var o=Math.abs(t-v);o<i&&t<v?(c.swap(0,0,e.slice(t,v)),c.splice(a,c.length-a)):o<i&&t>v?(c.swap(c.length,0,e.slice(v+i,t+a)),c.splice(0,c.length-a)):c.swap(0,c.length,e.slice(t,t+a))}u=r,v=t,i=a},a),p=t(c);return function(){p&&p(),f(),m(),b()}},a)}}function makeReplacingEnumerateObserver(e){return function(r,n){return e(function(e){function t(e){for(;e<o.length;e++)o[e].set(0,e)}function a(e,r,n){o.swap(n,r.length,e.map(function(e,r){return[n+r,e]})),t(n+e.length)}if(!e)return r();var o=[],s=observeRangeChange(e,a,n),u=r(o);return function(){u&&u(),s()}},n)}}function makeRangeObserver(e){return function(r,n){var t=[],a=r(t),o=e(function(e){if(e>>>=0,null==e)t.clear();else if(e>t.length){for(var r=[],n=t.length;n<e;n++)r.push(n);t.swap(t.length,0,r)}else e<t.length&&t.splice(e,t.length)},n);return function(){a&&a(),o&&o()}}}function makeStartsWithObserver(e,r){return function(n,t){return r(function(r){if("string"!=typeof r)return n();var a=new RegExp("^"+RegExp.escape(r));return e(function(e){return"string"!=typeof e?n():n(a.test(e))},t)},t)}}function makeEndsWithObserver(e,r){return function(n,t){return r(function(r){if("string"!=typeof r)return n();var a=new RegExp(RegExp.escape(r)+"$");return e(function(e){return"string"!=typeof e?n():n(a.test(e))},t)},t)}}function makeContainsObserver(e,r){return function(n,t){return r(function(r){if("string"!=typeof r)return n();var a=new RegExp(RegExp.escape(r));return e(function(e){return"string"!=typeof e?n():n(a.test(e))},t)},t)}}function makeJoinObserver(e,r){return r=r||observeNullString,function(n,t){return e(function(e){return e?r(function(r){function a(){o&&o(),o=n(e.join(r))}if("string"!=typeof r)return n();var o,s=observeRangeChange(e,a,t);return function(){s(),o&&o()}},t):n()},t)}}function observeRangeChange(e,r,n){function t(e,n,t){a&&a(),a=r(e,n,t)}if(!e||!e.toArray||!e.addRangeChangeListener)return Function.noop;var a,o;return t(Array.isArray(e)?e:e.toArray(),Array.empty,0),o=e.addRangeChangeListener(t,null,n.beforeChange),function(){a&&a(),o()}}function makeLastObserver(e){return function(r,n){return e(function(e){return _observeLast(e,r,n)},n)}}function observeLast(e,r,n){function t(n,t,u){if(o+=n.length-t.length,!(u+t.length<o&&u+n.length<o)){var i=o<0?null:e.get(o);a&&a(),a=r(i),s=i}}var a,o=-1,s=null,u=observeRangeChange(e,t,n);return function(){a&&a(),u&&u()}}function makeOnlyObserver(e){return function(r,n){return e(makeUniq(function(e){return observeOnly(e,r,n)}),n)}}function observeOnly(e,r,n){function t(n,t,o){return a+=n.length-t.length,1!==a?r():r(e.only())}var a=0;return observeRangeChange(e,t,n)}function makeOneObserver(e){return function(r,n){return e(makeUniq(function(e){return observeOne(e,r,n)}),n)}}function observeOne(e,r,n){function t(n,t,o){return a+=n.length-t.length,0===a?r():r(e.one())}var a=0;return observeRangeChange(e,t,n)}function makeRangeContentObserver(e){return function(r,n){return e(function(e){return e&&e.addRangeChangeListener?observeRangeChange(e,function(){return r(e)},n):r(e)},n)}}function makeMapContentObserver(e){return function(r,n){return e(function(e){return e&&e.addMapChangeListener?observeMapChange(e,function(){return r(e)},n):r(e)},n)}}function observeMapChange(e,r,n){function t(e,n,t){var o=a.get(n);a["delete"](n),o&&o(),o=r(e,n,t),void 0===e?o&&o():a.set(n,o)}if(e.addMapChangeListener){var a=new Map;e.forEach(t);var o=e.addMapChangeListener(t,n.beforeChange);return function(){a.forEach(function(e){e&&e()}),o()}}}function makeReplacingEntriesObserver(e){return function(r,n){return e(function(e){return e?observeEntries(e,r,n):r()},n)}}function observeEntries(e,r,n){function t(e,r,n){var t,s;o.has(r)?null==e?(t=o.get(r),o["delete"](r),s=a.indexOf(t),a.splice(s,1)):(t=o.get(r),t.set(1,e)):(t=[r,e],o.set(r,t),a.push(t))}var a=[],o=new Map,s=r(a),u=observeMapChange(e,t,n);return function(){s&&s(),u&&u()}}function makeKeysObserver(e){var r=makeEntriesObserver(e);return makeMapBlockObserver(r,observeEntryKey)}function observeEntryKey(e,r){return r.value?e(r.value[0]):e()}function makeValuesObserver(e){var r=makeEntriesObserver(e);return makeMapBlockObserver(r,observeEntryValue)}function observeEntryValue(e,r){return r.value?e(r.value[1]):e()}function makeToMapObserver(e){return function(r,n){var t=new Map,a=r(t),o=e(function(e){if(t.clear(),e&&"object"==typeof e){if(e.addRangeChangeListener)return observeUniqueEntries(function(e){function r(e,r){var n,a;for(n=0,a=r.length;n<a;n++)t["delete"](r[n][0]);for(n=0,a=e.length;n<a;n++)t.set(e[n][0],e[n][1])}return observeRangeChange(e,r,n)},n.nest(e));if(e.addMapChangeListener)return observeMapChange(e,function(e,r){void 0===e?t["delete"](r):t.set(r,e)},n);var r=[],a=0;for(var o in e)r[a++]=_observeProperty(e,o,function(e){void 0===e?t["delete"](o):t.set(o,e)},n);return function(){for(var e=0,n=r.length;e<n;e++)r[e]()}}},n)||Function.noop;return function(){a&&a(),o()}}}function makeParentObserver(e){return function(r,n){return n.parent?e(r,n.parent):r()}}function makeConverterObserver(e,r,n){return function(t,a){return t=makeUniq(t),e(function(e){return t(r.call(n,e))},a)}}function makeComputerObserver(e,r,n){return function(t,a){return t=makeUniq(t),e(function(e){if(e&&e.every(Operators.defined))return t(1===e.length?r.call(n,e[0]):2===e.length?r.call(n,e[0],e[1]):r.apply(n,e))},a)}}function makeExpressionObserver(e,r){var n=require("./parse"),t=require("./compile-observer");return function(a,o){return a=makeUniq(a),r(function(r){if(null==r)return a();var s,u;try{s=n(r),u=t(s)}catch(i){return a()}return e(function(e){return u(a,o.nest(e))},o)},o)}}function makeWithObserver(e,r){return function(n,t){return e(function(e){return null==e?n():r(function(e){return null==e?n():n(e)},t.nest(e))},t)}}function makeNonReplacing(e){return function(){var r;return r=1===arguments.length?e.call(this,arguments[0]):2===arguments.length?e.call(this,arguments[0],arguments[1]):e.apply(this,arguments),function(e,n){var t=[],a=r(function(e){function r(e,r,n){t.swap(n,r.length,e)}return e&&e.addRangeChangeListener?(merge(t,e),e.addRangeChangeListener(r,null,n.beforeChange),function(){e.removeRangeChangeListener(r,null,n.beforeChange)}):void t.clear()},n),o=e(t);return function(){a&&a(),o&&o()}}}}function makeUniq(e){var r;return function(n){if(n!==r){var t;return t=1===arguments.length?e.call(this,arguments[0]):2===arguments.length?e.apply(this,arguments[0],arguments[1]):e.apply(this,arguments),r=n,t}}}function cancelEach(e){e.forEach(function(e){e&&e()})}function autoCancelPrevious(e){var r;return function(){if(r&&r(),1===arguments.length)r=e.call(void 0,arguments[0]);else if(2===arguments.length)r=e.call(void 0,arguments[0],arguments[1]);else if(3===arguments.length)r=e.call(void 0,arguments[0],arguments[1],arguments[2]);else{for(var n=new Array(arguments.length),t=0,a=arguments.length;t<a;t++)n[t]=arguments[t];r=e.apply(void 0,n)}return function(){r&&r(),r=void 0}}}function swap(e,r,n,t){r<0?r=e.length+r:r>e.length&&(e.length=r),r+n>e.length?n=e.length-r:n<0&&(n=0);var a=t.length-n,o=e.length,s=e.length+a;if(a>0)for(var u=o-1;u>=r+n;u--){var i=u+a;u in e?e[i]=e[u]:(e[i]=void 0,delete e[i])}for(var u=0;u<t.length;u++)u in t?e[r+u]=t[u]:(e[r+u]=void 0,delete e[r+u]);if(a<0)for(var u=r+t.length;u<o-a;u++){var i=u-a;i in e?e[u]=e[i]:(e[u]=void 0,delete e[u])}e.length=s}require("collections/shim");var PropertyChanges=require("collections/listen/property-changes");require("collections/listen/array-changes");var SortedArray=require("collections/sorted-array"),SortedSet=require("collections/sorted-set"),Map=require("collections/map"),Set=require("collections/set"),Heap=require("collections/heap"),Scope=require("./scope"),Operators=require("./operators");exports.makeLiteralObserver=makeLiteralObserver,exports.observeValue=observeValue,exports.observeParameters=observeParameters,exports.makeElementObserver=makeElementObserver,exports.makeComponentObserver=makeComponentObserver,exports.observeProperty=observeProperty;var _observeProperty=observeProperty;exports.makePropertyObserver=makePropertyObserver,exports.observeKey=observeGet,exports.observeGet=observeGet;var _observeGet=observeGet;exports.makeGetObserver=makeGetObserver,exports.makeHasObserver=makeHasObserver,exports.makeObserversObserver=makeObserversObserver,exports.makeRecordObserver=makeObjectObserver,exports.makeObjectObserver=makeObjectObserver,exports.makeTupleObserver=makeArrayObserver,exports.makeArrayObserver=makeArrayObserver,exports.makeOperatorObserverMaker=makeOperatorObserverMaker,exports.makeMethodObserverMaker=makeMethodObserverMaker,exports.makeNotObserver=makeNotObserver,exports.makeAndObserver=makeAndObserver,exports.makeOrObserver=makeOrObserver,exports.makeConditionalObserver=makeConditionalObserver,exports.makeDefinedObserver=makeDefinedObserver,exports.makeDefaultObserver=makeDefaultObserver;var makeMapBlockObserver=exports.makeMapBlockObserver=makeNonReplacing(makeReplacingMapBlockObserver),makeFilterBlockObserver=exports.makeFilterBlockObserver=makeNonReplacing(makeReplacingFilterBlockObserver);exports.makeSortedBlockObserver=makeSortedBlockObserver,exports.makeSortedSetBlockObserver=makeSortedSetBlockObserver,exports.makeReversedObserver=makeNonReplacing(makeReplacingReversedObserver);var makeFlattenObserver=exports.makeFlattenObserver=makeNonReplacing(makeReplacingFlattenObserver);exports.makeConcatObserver=makeConcatObserver,exports.makeSomeBlockObserver=makeSomeBlockObserver,exports.makeEveryBlockObserver=makeEveryBlockObserver,exports.makeGroupBlockObserver=makeGroupBlockObserver,exports.makeGroupMapBlockObserver=makeGroupMapBlockObserver,exports.makeMaxBlockObserver=makeMaxBlockObserver,exports.makeMinBlockObserver=makeMinBlockObserver,exports.makeMaxObserver=makeMaxObserver,exports.makeMinObserver=makeMinObserver;var observeLengthLiteral=makeLiteralObserver("length");exports.makeSumObserver=makeCollectionObserverMaker(function(){var e=0;return function(r,n,t){return r=r.filter(isNumber),n=n.filter(isNumber),e+=r.sum()-n.sum()}}),exports.makeAverageObserver=makeCollectionObserverMaker(function(){var e=0,r=0;return function(n,t,a){return n=n.filter(isNumber),t=t.filter(isNumber),e+=n.sum()-t.sum(),r+=n.length-t.length,e/r}}),exports.makeViewObserver=makeNonReplacing(makeReplacingViewObserver);var observeZero=makeLiteralObserver(0);exports.makeEnumerateObserver=makeNonReplacing(makeReplacingEnumerateObserver),exports.makeEnumerationObserver=exports.makeEnumerateObserver,exports.makeRangeObserver=makeRangeObserver,exports.makeStartsWithObserver=makeStartsWithObserver,exports.makeEndsWithObserver=makeEndsWithObserver,exports.makeContainsObserver=makeContainsObserver,exports.makeJoinObserver=makeJoinObserver;var observeNullString=makeLiteralObserver("");exports.observeRangeChange=observeRangeChange,exports.makeLastObserver=makeLastObserver,exports.observeLast=observeLast;var _observeLast=observeLast;exports.makeOnlyObserver=makeOnlyObserver,exports.observeOnly=observeOnly,exports.makeOneObserver=makeOneObserver,exports.observeOne=observeOne,exports.makeRangeContentObserver=makeRangeContentObserver,exports.makeMapContentObserver=makeMapContentObserver,exports.observeMapChange=observeMapChange;var makeEntriesObserver=exports.makeEntriesObserver=makeNonReplacing(makeReplacingEntriesObserver);exports.observeEntries=observeEntries,exports.makeKeysObserver=makeKeysObserver,exports.observeEntryKey=observeEntryKey,exports.makeValuesObserver=makeValuesObserver,exports.observeEntryValue=observeEntryValue,exports.makeToMapObserver=makeToMapObserver;var observeUniqueEntries=makeMapBlockObserver(makeGroupBlockObserver(observeValue,observeEntryKey),makeLastObserver(observeEntryValue));exports.makeParentObserver=makeParentObserver,exports.makeConverterObserver=makeConverterObserver,exports.makeComputerObserver=makeComputerObserver,exports.makePathObserver=makeExpressionObserver,exports.makeExpressionObserver=makeExpressionObserver,exports.makeWithObserver=makeWithObserver,exports.makeToArrayObserver=makeNonReplacing(Function.identity),exports.makeAsArrayObserver=exports.makeToArrayObserver;var merge=require("./merge").merge;exports.makeUniq=makeUniq,exports.cancelEach=cancelEach,exports.autoCancelPrevious=autoCancelPrevious;