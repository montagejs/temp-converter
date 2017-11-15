montageDefine("2b669b9","js/release/async",{dependencies:["./schedule","./queue","./util"],factory:function(e,t,i){"use strict";function s(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new a(16),this._normalQueue=new a(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var e=this;this.drainQueues=function(){e._drainQueues()},this._schedule=c}function o(e,t,i){this._lateQueue.push(e,t,i),this._queueTick()}function n(e,t,i){this._normalQueue.push(e,t,i),this._queueTick()}function u(e){this._normalQueue._pushOne(e),this._queueTick()}var r;try{throw new Error}catch(h){r=h}var c=e("./schedule"),a=e("./queue"),l=e("./util");s.prototype.setScheduler=function(e){var t=this._schedule;return this._schedule=e,this._customScheduler=!0,t},s.prototype.hasCustomScheduler=function(){return this._customScheduler},s.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},s.prototype.disableTrampolineIfNecessary=function(){l.hasDevTools&&(this._trampolineEnabled=!1)},s.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},s.prototype.fatalError=function(e,t){t?(process.stderr.write("Fatal "+(e instanceof Error?e.stack:e)+"\n"),process.exit(2)):this.throwLater(e)},s.prototype.throwLater=function(e,t){if(1===arguments.length&&(t=e,e=function(){throw t}),"undefined"!=typeof setTimeout)setTimeout(function(){e(t)},0);else try{this._schedule(function(){e(t)})}catch(i){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},l.hasDevTools?(s.prototype.invokeLater=function(e,t,i){this._trampolineEnabled?o.call(this,e,t,i):this._schedule(function(){setTimeout(function(){e.call(t,i)},100)})},s.prototype.invoke=function(e,t,i){this._trampolineEnabled?n.call(this,e,t,i):this._schedule(function(){e.call(t,i)})},s.prototype.settlePromises=function(e){this._trampolineEnabled?u.call(this,e):this._schedule(function(){e._settlePromises()})}):(s.prototype.invokeLater=o,s.prototype.invoke=n,s.prototype.settlePromises=u),s.prototype._drainQueue=function(e){for(;e.length()>0;){var t=e.shift();if("function"==typeof t){var i=e.shift(),s=e.shift();t.call(i,s)}else t._settlePromises()}},s.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue)},s.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},s.prototype._reset=function(){this._isTickUsed=!1},i.exports=s,i.exports.firstLineError=r}});