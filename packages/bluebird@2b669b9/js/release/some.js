"use strict";module.exports=function(t,e,i){function n(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1}function r(t,e){if((0|e)!==e||e<0)return i("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var r=new n(t),o=r.promise();return r.setHowMany(e),r.init(),o}var o=require("./util"),s=require("./errors").RangeError,h=require("./errors").AggregateError,u=o.isArray,l={};o.inherits(n,e),n.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-5);var t=u(this._values);!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}},n.prototype.init=function(){this._initialized=!0,this._init()},n.prototype.setUnwrap=function(){this._unwrap=!0},n.prototype.howMany=function(){return this._howMany},n.prototype.setHowMany=function(t){this._howMany=t},n.prototype._promiseFulfilled=function(t){return this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0)},n.prototype._promiseRejected=function(t){return this._addRejected(t),this._checkOutcome()},n.prototype._promiseCancelled=function(){return this._values instanceof t||null==this._values?this._cancel():(this._addRejected(l),this._checkOutcome())},n.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var t=new h,e=this.length();e<this._values.length;++e)this._values[e]!==l&&t.push(this._values[e]);return t.length>0?this._reject(t):this._cancel(),!0}return!1},n.prototype._fulfilled=function(){return this._totalResolved},n.prototype._rejected=function(){return this._values.length-this.length()},n.prototype._addRejected=function(t){this._values.push(t)},n.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},n.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},n.prototype._getRangeError=function(t){var e="Input array must contain at least "+this._howMany+" items but contains only "+t+" items";return new s(e)},n.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},t.some=function(t,e){return r(t,e)},t.prototype.some=function(t){return r(this,t)},t._SomePromiseArray=n};