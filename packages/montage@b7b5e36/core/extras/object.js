Object.defineProperty(Object,"getPropertyDescriptor",{value:function(e,t){var r,o=e;do r=Object.getOwnPropertyDescriptor(o,t);while(!r&&(o=o.__proto__||Object.getPrototypeOf(o)));return r},writable:!0,configurable:!0}),Object.defineProperty(Object,"getPrototypeAndDescriptorDefiningProperty",{value:function(e,t){var r,o=e;if(t){do r=Object.getOwnPropertyDescriptor(o,t);while(!r&&(o=o.__proto__||Object.getPrototypeOf(o)));return{prototype:o,propertyDescriptor:r}}},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"clear",{value:function(){for(var e=Object.keys(this),t=e.length;t;)t--,delete this[e[t]];return this},writable:!0,configurable:!0}),Object.hasOwnProperty("deleteBinding")===!1&&Object.defineProperty(Object,"deleteBinding",{value:function(e,t){var r=require("frb");r.cancelBinding(e,t)},writable:!0,configurable:!0});