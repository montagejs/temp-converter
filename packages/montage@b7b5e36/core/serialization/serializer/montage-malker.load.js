montageDefine("b7b5e36","core/serialization/serializer/montage-malker",{dependencies:["../../core"],factory:function(t,i,e){var s=t("../../core").Montage,n=i.MontageWalker=s.specialize({_visitHandler:{value:null},_enteredObjects:{value:null},legacyMode:{value:!1},constructor:{value:function(t,i){this._visitHandler=t,this.legacyMode=!!i,this._enteredObjects={}}},_isObjectEntered:{value:function(t){return Object.hash(t)in this._enteredObjects}},_markObjectAsEntered:{value:function(t){this._enteredObjects[Object.hash(t)]=!0}},visit:{value:function(t,i){this._visitValue(t,i)},enumerable:!0},_getTypeOf:{value:function(t){return Array.isArray(t)?"array":RegExp.isRegExp(t)?"regexp":null===t?"null":"object"==typeof t||"function"==typeof t?this._getObjectType(t):typeof t}},_getObjectType:{value:function(t){var i,e=this._visitHandler;return"function"==typeof e.getTypeOf&&(i=e.getTypeOf(t)),"undefined"==typeof i?typeof t:i}},_visitValue:{value:function(t,i){var e=this._getTypeOf(t);"object"===e?this._visitObject(t,i):"array"===e?this._visitArray(t,i):"regexp"===e?this._visitRegExp(t,i):"number"===e?this._visitNumber(t,i):"string"===e?this._visitString(t,i):"boolean"===e?this._visitBoolean(t,i):"null"===e?this._visitNull(i):"undefined"===e?this._visitUndefined(i):this._visitCustomType(e,t,i)}},_visitCustomType:{value:function(t,i,e){this._callVisitorMethod("visit"+t,i,e)}},_enterCustomObject:{value:function(t,i,e){this._callVisitorMethod("enter"+t,i,e),this._callVisitorMethod("exit"+t,i,e)}},_visitObject:{value:function(t,i){var e;this._isObjectEntered(t)?this._callVisitorMethod("visitObject",t,i):(e=this._callVisitorMethod("willEnterObject",t,i),e!==!1&&(this._markObjectAsEntered(t),this._enterObject(t,i)))}},_enterObject:{value:function(t,i){var e,s=Object.keys(t);this._callVisitorMethod("enterObject",t,i);for(var n=0,r=s.length;n<r;n++)e=s[n],this._visitValue(t[e],e);this._callVisitorMethod("exitObject",t,i)}},_visitArray:{value:function(t,i){var e;this._isObjectEntered(t)?this._callVisitorMethod("visitArray",t,i):(e=this._callVisitorMethod("willEnterArray",t,i),e!==!1&&(this._markObjectAsEntered(t),this._enterArray(t,i)))}},_enterArray:{value:function(t,i){this._callVisitorMethod("enterArray",t,i);for(var e=0,s=t.length;e<s;e++)this._visitValue(t[e],""+e);this._callVisitorMethod("exitArray",t,i)}},_visitRegExp:{value:function(t,i){this._callVisitorMethod("visitRegExp",t,i)}},_visitString:{value:function(t,i){this._callVisitorMethod("visitString",t,i)}},_visitNumber:{value:function(t,i){this._callVisitorMethod("visitNumber",t,i)}},_visitBoolean:{value:function(t,i){this._callVisitorMethod("visitBoolean",t,i)}},_visitNull:{value:function(t){this._callVisitorMethod("visitNull",t)}},_visitUndefined:{value:function(t){this._callVisitorMethod("visitUndefined",t)}},_callVisitorMethod:{value:function(t){var i,e=this._visitHandler;if("function"==typeof e[t])return i=Array.prototype.slice.call(arguments,1),i.unshift(this),e[t].apply(e,i)}}});i.visit=function(t,i,e){var s=new n(i,e);s.visit(t)}}});