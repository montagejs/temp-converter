montageDefine("b7b5e36","core/event/event-manager",{dependencies:["../core","./mutable-event","../serialization/serializer/montage-serializer","../serialization/deserializer/montage-deserializer","collections/map","collections/weak-map","../environment"],factory:function(e,t,n){var i,r=e("../core").Montage,o=e("./mutable-event").MutableEvent,a=e("../serialization/serializer/montage-serializer").MontageSerializer,s=e("../serialization/deserializer/montage-deserializer").MontageDeserializer,l=e("collections/map"),u=e("collections/weak-map"),v=e("../environment").currentEnvironment;"undefined"!=typeof document&&"undefined"!=typeof window&&"undefined"!=typeof Event&&"function"!=typeof CustomEvent&&(CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},CustomEvent.prototype=Event.prototype,window.CustomEvent=CustomEvent),"undefined"!=typeof document&&"undefined"!=typeof window&&"undefined"==typeof Touch&&"ontouchstart"in window&&(Touch=function(){},function(){var e;document.addEventListener("touchstart",e=function t(e){window.Touch=e.touches[0].constructor,document.nativeRemoveEventListener?document.nativeRemoveEventListener("touchstart",t,!0):document.removeEventListener("touchstart",t,!0),i&&i.isStoringPointerEvents&&(i.isStoringPointerEvents=!1,i.isStoringPointerEvents=!0)},!0)}(),window.Touch=Touch);var d=r.specialize({_identifier:{enumerable:!1,writable:!0,value:null},initWithIdentifier:{value:function(e){return this._identifier=e,this}},clearCache:{value:function(){return this._data=this._x=this._y=this._speed=this._angle=null,this}},_data:{enumerable:!1,writable:!0,value:null},_x:{enumerable:!1,writable:!0,value:null},_y:{enumerable:!1,writable:!0,value:null},_speed:{enumerable:!1,writable:!0,value:null},_angle:{enumerable:!1,writable:!0,value:null},x:{get:function(){return null===this._x&&(null===this._data&&(this._data=i._getPointerVelocityData(this._identifier)),this._x=i._calculatePointerVelocity(this._data.time,this._data.x)),this._x},set:function(){}},y:{get:function(){return null===this._y&&(null===this._data&&(this._data=i._getPointerVelocityData(this._identifier)),this._y=i._calculatePointerVelocity(this._data.time,this._data.y)),this._y},set:function(){}},speed:{get:function(){return null===this._speed&&(this._speed=Math.sqrt(this.x*this.x+this.y*this.y)),this._speed},set:function(){}},angle:{get:function(){return null===this._angle&&(this._angle=Math.atan2(this.y,this.x)),this._angle},set:function(){}}}),c=(r.specialize({constructor:{value:function(e){return this.data=new Array(32),this.velocity={velocity:(new d).initWithIdentifier(e)},this}},data:{enumerable:!1,writable:!0,value:null},size:{enumerable:!1,writable:!0,value:0},pos:{enumerable:!1,writable:!0,value:0},velocity:{enumerable:!1,writable:!0,value:0}}),r.specialize({constructor:{value:function(e,t,n){return this.clientX=e,this.clientY=t,this.timeStamp=n,this}},clientX:{enumerable:!1,writable:!0,value:null},clientY:{enumerable:!1,writable:!0,value:0},timeStamp:{enumerable:!1,writable:!0,value:0}}),function(e,t,n,i,r){var o,a,s,l,u,v,d;for(d=n.keys();s=d.next().value;)if(l=n.get(s),u=l&&l.get(t),Array.isArray(u)&&u.length>0)for(o=0,a=u.length;o<a;o++)v=u[o],i.push({type:s,listener:e.addObjectReference(v),capture:r});else u&&i.push({type:s,listener:e.addObjectReference(u),capture:r})});a.defineSerializationUnit("listeners",function(e,t){var n=i,r=[];if(c(e,t,n._registeredCaptureEventListeners,r,!0),c(e,t,n._registeredBubbleEventListeners,r,!1),r.length>0)return r}),s.defineDeserializationUnit("listeners",function(e,t,n){for(var i,r=0;i=n[r];r++)t.addEventListener(i.type,i.listener,i.capture)});var h=t.EventManager=r.specialize({constructor:{value:function(){return this._trackingTouchStartList=new l,this._trackingTouchEndList=new l,this._findActiveTargetMap=new l,this._eventPathForTargetMap=new l,this._claimedPointers=new l,this._registeredCaptureEventListeners=new l,this._registeredBubbleEventListeners=new l,this._observedTarget_byEventType_=Object.create(null),this._currentDispatchedTargetListeners=new l,this._elementEventHandlerByElement=new u,this.environment=v,this._trackingTouchTimeoutIDs=new l,this}},spliceOne:{value:function(e,t){var n=e.length;if(n){for(;t<n;)e[t]=e[t+1],t++;e.length--}}},eventDefinitions:{value:{abort:{bubbles:!1,cancelable:!1},beforeunload:{bubbles:!1},blur:{bubbles:!1,cancelable:!1},change:{bubbles:!0,cancelable:!1},click:{bubbles:!0,cancelable:!0},close:{bubbles:!1,cancelable:!1},compositionend:{bubbles:!0,cancelable:!1},compositionstart:{bubbles:!0,cancelable:!0},compositionupdate:{bubbles:!0,cancelable:!1},contextmenu:{bubbles:!0,cancelable:!0},copy:{bubbles:!0,cancelable:!0},cut:{bubbles:!0,cancelable:!0},dblclick:{bubbles:!0,cancelable:!1},DOMActivate:{bubbles:!0,cancelable:!0,deprecated:!0},DOMMouseScroll:{bubbles:!0},drag:{bubbles:!0,cancelable:!0},dragend:{bubbles:!0,cancelable:!1},dragenter:{bubbles:!0,cancelable:!0},dragleave:{bubbles:!0,cancelable:!1},dragover:{bubbles:!0,cancelable:!0},dragstart:{bubbles:!0,cancelable:!0},drop:{bubbles:!0,cancelable:!0},error:{bubbles:function(e){return!(XMLHttpRequest.prototype.isPrototypeOf(e)||e.tagName&&"VIDEO"===e.tagName.toUpperCase()||e.tagName&&"AUDIO"===e.tagName.toUpperCase())},cancelable:!1},focus:{bubbles:!1,cancelable:!1},focusin:{bubbles:!0,cancelable:!1},focusout:{bubbles:!0,cancelable:!1},input:{bubbles:!0,cancelable:!1},keydown:{bubbles:!0,cancelable:!1},keypress:{bubbles:!0,cancelable:!1},keyup:{bubbles:!0,cancelable:!1},load:{bubbles:!1,cancelable:!1},loadend:{bubbles:!1,cancelable:!1},loadstart:{bubbles:!1,cancelable:!1},message:{bubbles:!1,cancelable:!1},mousedown:{bubbles:!0,cancelable:!0},mouseenter:{bubbles:!1,cancelable:!1},mouseleave:{bubbles:!1,cancelable:!1},mousemove:{bubbles:!0,cancelable:!0},mouseout:{bubbles:!0,cancelable:!0},mouseover:{bubbles:!0,cancelable:!0},mouseup:{bubbles:!0,cancelable:!0},mousewheel:{bubbles:!0},orientationchange:{bubbles:!1},paste:{bubbles:!0,cancelable:!0},progress:{bubbles:!1,cancelable:!1},reset:{bubbles:!0,cancelable:!1},resize:{bubbles:!1,cancelable:!1},scroll:{bubbles:function(e){return!!e.defaultView},cancelable:!1},select:{bubbles:!0,cancelable:!1},submit:{bubbles:!0,cancelable:!0},touchcancel:{bubbles:!0,cancelable:!1},touchend:{bubbles:!0,cancelable:!0},touchmove:{bubbles:!0,cancelable:!0},touchstart:{bubbles:!0,cancelable:!0},unload:{bubbles:!1,cancelable:!1},wheel:{bubbles:!0,cancelable:!0},pointerdown:{bubbles:!0,cancelable:!0},pointerup:{bubbles:!0,cancelable:!0},pointerenter:{bubbles:!1,cancelable:!0},pointercancel:{bubbles:!0,cancelable:!0},pointerout:{bubbles:!0,cancelable:!0},pointerover:{bubbles:!0,cancelable:!0},pointerleave:{bubbles:!1,cancelable:!0},pointermove:{bubbles:!0,cancelable:!0},MSPointerDown:{bubbles:!0,cancelable:!0},MSPointerMove:{bubbles:!0,cancelable:!0},MSPointerUp:{bubbles:!0,cancelable:!0},MSPointerOver:{bubbles:!0,cancelable:!0},MSPointerOut:{bubbles:!0,cancelable:!0},MSPointerHover:{bubbles:!0,cancelable:!0}}},_DOMPasteboardElement:{value:null,enumerable:!1},_delegate:{value:null,enumerable:!1},delegate:{enumerable:!1,get:function(){return this._delegate},set:function(e){this._delegate=e}},_application:{value:null,enumerable:!1},application:{enumerable:!1,get:function(){return this._application},set:function(e){this._application=e}},_registeredWindows:{value:null,enumerable:!1},_windowsAwaitingFinalRegistration:{value:new u,enumerable:!1},initWithWindow:{enumerable:!1,value:function(e){if(this._registeredWindows)throw"EventManager has already been initialized";return this.registerWindow(e),this}},registerWindow:{enumerable:!1,value:function(e){if(e.defaultEventManager&&e.defaultEventManager!==this)throw Error("EventManager cannot register a window already registered to another EventManager");if(this._registeredWindows&&this._registeredWindows.indexOf(e)>=0)throw new Error("EventManager cannot register a window more than once");if(this._registeredWindows||(this._registeredWindows=[]),!this._windowsAwaitingFinalRegistration.has(e)){if(e.Element.prototype.nativeAddEventListener=e.Element.prototype.addEventListener,Object.defineProperty(e,"nativeAddEventListener",{configurable:!0,value:e.addEventListener}),e.document.nativeAddEventListener=e.document.addEventListener,e.XMLHttpRequest.prototype.nativeAddEventListener=e.XMLHttpRequest.prototype.addEventListener,e.DocumentFragment&&(e.DocumentFragment.prototype.nativeAddEventListener=e.DocumentFragment.prototype.addEventListener),e.ShadowRoot&&(e.ShadowRoot.prototype.nativeAddEventListener=e.ShadowRoot.prototype.addEventListener),e.Worker&&(e.Worker.prototype.nativeAddEventListener=e.Worker.prototype.addEventListener),e.MediaController&&(e.MediaController.prototype.nativeAddEventListener=e.MediaController.prototype.addEventListener),e.Element.prototype.nativeRemoveEventListener=e.Element.prototype.removeEventListener,Object.defineProperty(e,"nativeRemoveEventListener",{configurable:!0,value:e.removeEventListener}),e.document.nativeRemoveEventListener=e.document.removeEventListener,e.XMLHttpRequest.prototype.nativeRemoveEventListener=e.XMLHttpRequest.prototype.removeEventListener,e.DocumentFragment&&(e.DocumentFragment.prototype.nativeRemoveEventListener=e.DocumentFragment.prototype.removeEventListener),e.ShadowRoot&&(e.ShadowRoot.prototype.nativeRemoveEventListener=e.ShadowRoot.prototype.removeEventListener),e.Worker&&(e.Worker.prototype.nativeRemoveEventListener=e.Worker.prototype.removeEventListener),e.MediaController&&(e.MediaController.prototype.nativeRemoveEventListener=e.MediaController.prototype.removeEventListener),Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.addEventListener=e.Element.prototype.addEventListener=e.document.addEventListener=function(t,n,i){return e.defaultEventManager.registerEventListener(this,t,n,!!i)}}),e.Worker&&(e.Worker.prototype.addEventListener=e.addEventListener),e.MediaController&&(e.MediaController.prototype.addEventListener=e.addEventListener),Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.removeEventListener=e.Element.prototype.removeEventListener=e.document.removeEventListener=function(t,n,i){return e.defaultEventManager.unregisterEventListener(this,t,n,!!i)}}),e.Worker&&(e.Worker.prototype.removeEventListener=e.removeEventListener),e.MediaController&&(e.MediaController.prototype.removeEventListener=e.removeEventListener),e.HTMLDivElement.prototype.addEventListener!==e.Element.prototype.nativeAddEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype){var n,o,a=Object.getOwnPropertyNames(e),s=0,l=a.length;for(s;s<l;s++)n=a[s],n.match(/^HTML\w*Element$/)&&"function"==typeof n&&(o=n.prototype,o.nativeAddEventListener=o.addEventListener,o.addEventListener=e.Element.prototype.addEventListener,o.nativeRemoveEventListener=o.removeEventListener,o.removeEventListener=e.Element.prototype.removeEventListener)}r.defineProperty(e.Element.prototype,"component",{get:function(){return i._elementEventHandlerByElement.get(this)},enumerable:!1}),i=e.defaultEventManager=t.defaultEventManager=this,this._registeredWindows.push(e),this._windowsAwaitingFinalRegistration.set(e,e),/loaded|complete|interactive/.test(e.document.readyState)?this._finalizeWindowRegistration(e):e.document.addEventListener("DOMContentLoaded",this,!0),this._evaluateShouldDispatchEventCondition()}}},_finalizeWindowRegistration:{enumerable:!1,value:function(e){if(!this._windowsAwaitingFinalRegistration.has(e))throw"EventManager wasn't expecting to register this window";this._windowsAwaitingFinalRegistration["delete"](e),this._listenToWindow(e)}},unregisterWindow:{enumerable:!1,value:function(e){if(this._registeredWindows.indexOf(e)<0)throw"EventManager cannot unregister an unregistered window";if(this._registeredWindows=this._registeredWindows.filter(function(t){return e!==t}),delete e.defaultEventManager,e.Element.prototype.addEventListener=e.Element.prototype.nativeAddEventListener,Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.nativeAddEventListener}),e.document.addEventListener=e.document.nativeAddEventListener,e.XMLHttpRequest.prototype.addEventListener=e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&(e.Worker.prototype.addEventListener=e.Worker.prototype.nativeAddEventListener),e.Element.prototype.removeEventListener=e.Element.prototype.nativeRemoveEventListener,Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.nativeRemoveEventListener}),e.document.removeEventListener=e.document.nativeRemoveEventListener,e.XMLHttpRequest.prototype.removeEventListener=e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&(e.Worker.prototype.removeEventListener=e.Worker.prototype.nativeRemoveEventListener),e.HTMLDivElement.prototype.nativeAddEventListener!==e.Element.prototype.addEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype&&e.Components&&e.Components.interfaces){var t,n;for(t in Components.interfaces)t.match(/^nsIDOMHTML\w*Element$/)&&(t=t.replace(/^nsIDOM/,""),(t=window[t])&&(n=t.prototype,n.addEventListener=n.nativeAddEventListener,delete n.nativeAddEventListener,n.removeEventListener=n.nativeRemoveEventListener,delete n.nativeRemoveEventListener))}delete e.Element.prototype.nativeAddEventListener,delete e.nativeAddEventListener,delete e.document.nativeAddEventListener,delete e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&delete e.Worker.prototype.nativeAddEventListener,delete e.Element.prototype.nativeRemoveEventListener,delete e.nativeRemoveEventListener,delete e.document.nativeRemoveEventListener,delete e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&delete e.Worker.prototype.nativeRemoveEventListener,delete e.Element.prototype.component,this._stopListeningToWindow(e)}},unregisterWindows:{enumerable:!1,value:function(){this._registeredWindows.forEach(this.unregisterWindow)}},registeredEventListeners:{enumerable:!1,value:{}},registeredEventListenersForEventType_:{value:function(e){var t=this._registeredCaptureEventListeners.get(e),n=this._registeredBubbleEventListeners.get(e),i=null;return t&&t.forEach(function(e,t,n){e&&e.length>0&&(i=i||[],e.forEach(function(e){i.push(e)}))}),n&&n.forEach(function(e,t,n){e&&e.length>0&&(i=i||[],e.forEach(function(e){i.push(e)}))}),i}},registeredEventListenersForEventType_onTarget_:{enumerable:!1,value:function(e,t){var n,i=this._registeredCaptureEventListeners.get(e),r=this._registeredBubbleEventListeners.get(e),o=null;return e&&t&&(i||r)?(n=i?i.get(t):null,n&&(o||(o=n)),n=r?r.get(t):null,n&&(o=o?o.union(n):n),o):null}},registeredEventListenersForEventType_onTarget_phase_:{enumerable:!1,value:function(e,t,n){return t?this._registeredEventListenersForEventType_onTarget_registeredEventListeners_(e,t,n?this._registeredCaptureEventListeners:this._registeredBubbleEventListeners):null}},_registeredEventListenersForEventType_onTarget_registeredEventListeners_:{value:function(e,t,n){var i=n.get(e);return i?i.get(t):null},enumerable:!1},registeredEventListenersOnTarget_:{value:function(e){var t,n,i,r=this._registeredCaptureEventListeners,o=this._registeredBubbleEventListeners,a=[];for(i=r.keys();t=i.next().value;)n=r.get(t),n.has(e)&&a.push(t);for(i=o.keys();t=i.next().value;)n=o.get(t),n.has(e)&&a.push(t);return a}},_registeredCaptureEventListeners:{value:null},_registeredBubbleEventListeners:{value:null},registerEventListener:{enumerable:!1,value:function(e,t,n,i){var r;return r=this._registerEventListener(e,t,n,i?this._registeredCaptureEventListeners:this._registeredBubbleEventListeners)}},_registerEventListener:{enumerable:!1,value:function(e,t,n,i){var r,o=i.get(t),a=!1,s=!1;return o?o.has(e)?(r=o.get(e),Array.isArray(r)?r.indexOf(n)!==-1?s=!0:(r.push(n),s=!0):(r!==n&&(r=[r,n],o.set(e,r)),s=!0)):(o.set(e,n),a=!0):(i.set(t,o=new l),o.set(e,n),a=!0,s=!0),a&&"function"==typeof e.nativeAddEventListener&&this._observeTarget_forEventType_(e,t),s}},unregisterEventListener:{enumerable:!1,value:function(e,t,n,i){return i?this._unregisterEventListener(e,t,n,this._registeredCaptureEventListeners,this._registeredBubbleEventListeners):this._unregisterEventListener(e,t,n,this._registeredBubbleEventListeners,this._registeredCaptureEventListeners)}},_unregisterEventListener:{enumerable:!1,value:function(e,t,n,i,r){var o,a,s=i.get(t);if(s&&(o=s.get(e)))return o===n?(s.set(e,null),void this._unregisterTargetForEventTypeIfNeeded(e,t,o,i,r)):void(Array.isArray(o)&&o.indexOf(n)!==-1&&(this._currentDispatchedTargetListeners.has(o)?(a=this._currentDispatchedTargetListeners.get(o),a||this._currentDispatchedTargetListeners.set(o,a=new l),a.set(n,!0)):(this.spliceOne(o,o.indexOf(n)),this._unregisterTargetForEventTypeIfNeeded(e,t,o,i,r))))}},_unregisterTargetForEventTypeIfNeeded:{value:function(e,t,n,i,r){if(!Array.isArray(n)||0===n.length){var o=i.get(t),a=r.get(t);o["delete"](e),0===o.size&&(!a||a&&0===a.size)&&this._stopObservingTarget_forEventType_(e,t)}}},actualDOMTargetForEventTypeOnTarget:{value:function(e,t){if(t.nativeAddEventListener){if(t.defaultView)return t;var n,i=this.eventDefinitions[e];if(!i)return t;if(n="function"==typeof i.bubbles?i.bubbles(t):i.bubbles){var r;return t.screen?t.document:(r=this.shawdowRootFromNode(t))?r:t.ownerDocument}return t}return null}},shawdowRootFromNode:{value:function(e){if(window.ShadowRoot)for(;e;){if("[object ShadowRoot]"===e.toString())return e;e=e.parentNode}}},_observedTarget_byEventType_:{value:null},_scrollBlockingEvents:{value:["wheel","mousewheel","touchstart","touchmove","scroll"]},_observeTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;if((n=this.actualDOMTargetForEventTypeOnTarget(t,e))&&(!this._observedTarget_byEventType_[t]||!this._observedTarget_byEventType_[t].has(n))){this._observedTarget_byEventType_[t]||(this._observedTarget_byEventType_[t]=new l),this._observedTarget_byEventType_[t].set(n,this);var i=this._scrollBlockingEvents.indexOf(t)!==-1,r=!i||{passive:!0};n.nativeAddEventListener(t,this,r)}}},_stopObservingTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;n=this.actualDOMTargetForEventTypeOnTarget(t,e),n&&(this._observedTarget_byEventType_[t]["delete"](n),n.nativeRemoveEventListener(t,this,!0))}},_activationHandler:{enumerable:!0,value:null},_listenToWindow:{enumerable:!1,value:function(e){if(!this._activationHandler){var t=this;this._activationHandler=function(e){var n,i=e.type,r="mouseenter"!==i&&"pointerenter"!==i;if(e.changedTouches){n=e.changedTouches.length;for(var o=0;o<n;o++)t._prepareComponentsForActivation(e.changedTouches[o].target,r)}else t._prepareComponentsForActivation(e.target,r)}}if(this.registerTargetForActivation(e),this.application){var n,i=this.registeredEventListenersOnTarget_(this.application);for(n in i)i.hasOwnProperty(n)&&this._observeTarget_forEventType_(e,n)}}},registerTargetForActivation:{value:function(e){var t=e instanceof Window?e.document:e;window.PointerEvent?(e.nativeAddEventListener("pointerdown",this._activationHandler,!0),t.nativeAddEventListener("pointerenter",this._activationHandler,!0)):window.MSPointerEvent&&window.navigator.msPointerEnabled?(e.nativeAddEventListener("MSPointerDown",this._activationHandler,!0),t.nativeAddEventListener("mouseenter",this._activationHandler,!0)):(e.nativeAddEventListener("touchstart",this._activationHandler,!0),e.nativeAddEventListener("mousedown",this._activationHandler,!0),t.nativeAddEventListener("mouseenter",this._activationHandler,!0)),e.nativeAddEventListener("focus",this._activationHandler,!0)}},_stopListeningToWindow:{enumerable:!1,value:function(e){var t,n,i=this.registeredEventListenersOnTarget_(this.application),r=this.registeredEventListenersOnTarget_(e);for(t in i)i.hasOwnProperty(t)&&this._stopObservingTarget_forEventType_(e,t);for(t in r)r.hasOwnProperty(t)&&this._stopObservingTarget_forEventType_(e,t);(n=this._listeningWindowOnTouchCancel.indexOf(e))>-1&&this.spliceOne(this._listeningWindowOnTouchCancel,n)}},_resetRegisteredEventListeners:{enumerable:!1,value:function(e){var t,n,i,r,o,a=this;for(r in e)if(e.hasOwnProperty(r)&&(o=e.get(r),o&&o.length>0))for(t=0,n=o.length;t<n;t++)i=o[t],a._stopObservingTarget_forEventType_(i,r)}},reset:{enumerable:!1,value:function(){this._resetRegisteredEventListeners(this._registeredCaptureEventListeners),this._resetRegisteredEventListeners(this._registeredBubbleEventListeners),this._claimedPointers=new l,this._registeredCaptureEventListeners=new l,this._registeredBubbleEventListeners=new l}},unload:{enumerable:!1,value:function(){this._stopListening()}},_bubbleMethodNameByEventType_:{value:new l},_bubbleMethodNameByEventTypeIdentifier_:{value:new l},methodNameForBubblePhaseOfEventType:{enumerable:!1,value:function(e,t,n,i){var r;return t?(r=this._bubbleMethodNameByEventTypeIdentifier_.get(e)||this._bubbleMethodNameByEventTypeIdentifier_.set(e,new l).get(e),r.get(t)||r.set(t,"handle"+(i||t.toCapitalized())+(n||e.toCapitalized())).get(t)):this._bubbleMethodNameByEventType_.get(e)||this._bubbleMethodNameByEventType_.set(e,"handle"+(n||e.toCapitalized())).get(e)}},_captureMethodNameByEventType_:{value:new l},_catptureMethodNameByEventTypeIdentifier_:{value:new l},methodNameForCapturePhaseOfEventType:{enumerable:!1,value:function(e,t,n,i){var r;return t?(r=this._catptureMethodNameByEventTypeIdentifier_.get(e)||this._catptureMethodNameByEventTypeIdentifier_.set(e,new l).get(e),r.get(t)||r.set(t,"capture"+(i||t.toCapitalized())+(n||e.toCapitalized())).get(t)):this._captureMethodNameByEventType_.get(e)||this._captureMethodNameByEventType_.set(e,"capture"+(n||e.toCapitalized())).get(e)}},_claimedPointers:{enumerable:!1,value:null},componentClaimingPointer:{value:function(e){return this._claimedPointers.get(e)}},isPointerClaimedByComponent:{value:function(e,t){if(!t)throw"Must specify a valid component to see if it claims the specified pointer, '"+t+"' is not valid.";return this._claimedPointers.get(e)===t}},claimPointer:{value:function(e,t){if(!e&&0!==e)throw"Must specify a valid pointer to claim, '"+e+"' is not valid.";if(!t)throw"Must specify a valid component to claim a pointer, '"+t+"' is not valid.";var n=this._claimedPointers.get(e);return n===t||(n?!!n.surrenderPointer(e,t)&&(this._claimedPointers.set(e,t),!0):(this._claimedPointers.set(e,t),!0))}},forfeitPointer:{value:function(e,t){if(t!==this._claimedPointers.get(e))throw"Not allowed to forfeit pointer '"+e+"' claimed by another component";this._claimedPointers["delete"](e)}},forfeitAllPointers:{value:function(e){for(var t,n,i=this._claimedPointers.keys();t=i.next().value;)n=this._claimedPointers.get(t),e===n&&this._claimedPointers["delete"](t)}},_isStoringPointerEvents:{enumerable:!1,value:!1},isStoringPointerEvents:{enumerable:!0,get:function(){return this._isStoringPointerEvents},set:function(e){e===!0?this._isStoringPointerEvents||(this._isStoringPointerEvents=!0,"undefined"!=typeof PointerEvent||"undefined"!=typeof MSPointerEvent&&"undefined"!=typeof navigator&&navigator.msPointerEnabled?Object.defineProperty(o.prototype,"velocity",{get:function(){return i.pointerMotion(this.pointerId).velocity}}):"undefined"!=typeof Touch&&Object.defineProperty(Touch.prototype,"velocity",{get:function(){return i.pointerMotion(this.identifier).velocity}})):(this._isStoringPointerEvents=!1,this._pointerStorage.memory={},this._isMouseDragging=!1)}},_isStoringMouseEventsWhileDraggingOnly:{enumerable:!1,value:!0},isStoringMouseEventsWhileDraggingOnly:{enumerable:!0,get:function(){return this._isStoringMouseEventsWhileDraggingOnly},set:function(e){this._isStoringMouseEventsWhileDraggingOnly=e===!0}},_isMouseDragging:{enumerable:!1,value:!1},_pointerStorage:{enumerable:!1,value:{memory:{},velocity:{},add:function(e,t){this.memory[e]||(this.memory[e]={data:new Array(32),size:0,pos:0}),this.memory[e].data[this.memory[e].pos]=t,this.memory[e].size<this.memory[e].data.length&&this.memory[e].size++,this.memory[e].pos=(this.memory[e].pos+1)%this.memory[e].data.length},remove:function(e){delete this.memory[e]},clear:function(e){this.memory[e]&&(this.memory[e].size=0)},getMemory:function(e){return this.memory[e]},isStored:function(e){return this.memory[e]&&this.memory[e].size>0},storeEvent:function(e){var t=v.isBrowserSupportPointerEvents,n=e instanceof o?e._event:e,r=n.pointerType;if(t&&("mouse"===r||window.MSPointerEvent&&r===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE)||!t&&n instanceof MouseEvent)switch(e.type){case"pointerdown":case"MSPointerDown":case"mousedown":i._isMouseDragging=!0;case"pointermove":case"MSPointerMove":case"mousemove":i._isStoringMouseEventsWhileDraggingOnly?i._isMouseDragging&&this._storeMouse(e):this._storeMouse(e);break;case"pointerup":case"MSPointerUp":case"mouseup":this._storeMouse(e)}else if(t&&("touch"===r||window.MSPointerEvent&&r===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)||void 0!==window.TouchEvent&&!t&&n instanceof TouchEvent)switch(n.type){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":this._storeTouch(n.pointerId,n.clientX,n.clientY,n.timeStamp);break;case"touchstart":case"touchmove":this._storeTouches(n.touches,n.timeStamp);break;case"touchend":this._storeTouches(n.changedTouches,n.timeStamp)}},removeEvent:function(e){var t=v.isBrowserSupportPointerEvents,n=e instanceof o?e._event:e;if(t&&("mouse"===e.pointerType||window.MSPointerEvent&&e.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE)||!t&&n instanceof MouseEvent)"mouseup"!==e.type&&"pointerup"!==e.type&&"MSPointerUp"!==e.type||(i._isMouseDragging=!1,i._isStoringMouseEventsWhileDraggingOnly&&this.clear("mouse"));else if((t&&("touch"===e.pointerType||window.MSPointerEvent&&e.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)||void 0!==window.TouchEvent&&!t&&n instanceof TouchEvent)&&("touchend"===e.type||"pointerup"===e.type||"MSPointerUp"===e.type))if(e.changedTouches)for(var r,a=0,s=e.changedTouches;r=s[a];a++)this.remove(r.identifier);else this.remove(e.pointerId)},_storeMouse:function(e){this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return i.pointerMotion("mouse").velocity}})},_storeTouches:function(e,t){for(var n,i=0;n=e[i];i++)this._storeTouch(n.identifier,n.clientX,n.clientY,t)},_storeTouch:function(e,t,n,i){this.add(e,{clientX:t,clientY:n,timeStamp:i})}}},_getPointerVelocityData:{enumerable:!1,value:function(e){var t,n,r,o,a,s,l,u,v,d=0,c=!0,h={x:[],y:[],time:[]};for(t=i._pointerStorage.getMemory(e),n=t.data.length,r=t.data[(t.pos-1+n)%n],o=a=s=r.timeStamp,l=r.clientX,u=r.clientY;c&&a>o-350&&d<t.size;)r=t.data[(t.pos-d-1+n)%n],a=r.timeStamp,v=l*l+u*u,v>2&&s-a<=50?(h.x.push(r.clientX),h.y.push(r.clientY),h.time.push(a),s=a,l=r.clientX,u=r.clientY,d++):c=!1;return h}},_fitPointerCurve:{enumerable:!1,value:function(e,t){var n,i,r,o,a,s,l,u,v,d,c,h,p,b,m,g,E,f,_,y,T,w,L,M,P,S,O,D,A,C,k,W,R,F,H,B,z,N,I=1e-4,x=t.length;do{for(c=h=p=b=m=g=f=_=y=T=w=L=P=S=O=D=A=C=W=R=F=H=B=z=0,d=0;d<x;d++)a=t[d],s=a.t,u=s*s,v=u*s,l=a.v,E=I*(6*(u-s)-v+2),M=6*I*(v-2*u+s),k=6*I*(u-v),N=2*I*v,g+=E*E,L+=M*M,C+=k*k,z+=N*N,c+=l*E,f+=l*M,P+=l*k,W+=l*N,p-=E,y-=M,O-=k,F-=N,h-=E*s,_-=M*s,S-=k*s,R-=N*s,b-=E*u,T-=M*u,D-=k*u,H-=N*u,m-=E*v,w-=M*v,A-=k*v,B-=N*v;I*=2}while(0===g||0===L||0===C||0===z);for(s=I/g,c*=s,h*=3*s,p*=s,b*=3*s,m*=s,s=I/L,f*=s,_*=3*s,y*=s,T*=3*s,w*=s,s=I/C,P*=s,S*=3*s,O*=s,D*=3*s,A*=s,s=I/z,W*=s,R*=3*s,F*=s,H*=3*s,B*=s,g=e[0],L=e[1],C=e[2],z=e[3],n=3*(L-C)+z-g,i=g+C-2*L,r=L-g,o=g,d=0;d<20;d++)s=c+o*p+r*h+i*b+n*m,g+=s,o+=s,n-=s,i+=s,r-=s,s=f+o*y+r*_+i*T+n*w,L+=s,n+=3*s,i-=s+s,r+=s,s=P+o*O+r*S+i*D+n*A,C+=s,n-=3*s,i+=s,s=W+o*F+r*R+i*H+n*B,z+=s,n+=s;e[0]=g,e[1]=L,e[2]=C,e[3]=z}},_pointerBezierValue:{enumerable:!1,value:function(e,t){var n=1-e;return n*n*n*t[0]+3*n*n*e*t[1]+3*n*e*e*t[2]+e*e*e*t[3]}},_calculatePointerVelocity:{enumerable:!1,value:function(e,t){var n,i,r=e.length,o=e[0],a=e[0],s=0;for(i=1;i<r;i++)e[i]<o&&(o=e[i],s=i);if(n=a-o){if(r>5){var l,u,v,d=[];for(i=0;i<r;i++)d[i]={v:t[i],t:(e[i]-o)/n};return l=d[s].v,u=d[0].v,v=[l,(2*l+u)/3,(l+2*u)/3,u],this._fitPointerCurve(v,d),5e3*(this._pointerBezierValue(.8,v)-this._pointerBezierValue(.6,v))/n}return r>1?1e3*(t[0]-t[s])/n:0}return 0}},pointerMotion:{value:function(e){return i._pointerStorage.isStored(e)?{velocity:(new d).initWithIdentifier(e)}:void 0}},monitorDOMModificationInEventHandling:{value:!1},domModificationEventHandler:{value:r.specialize({handleEvent:{value:function(e){throw"DOM Modified"}},captureDOMSubtreeModified:{value:function(e){throw"DOMSubtreeModified"}},captureDOMAttrModified:{value:function(e){throw"DOMAttrModified"}},captureDOMCharacterDataModified:{value:function(e){throw"DOMCharacterDataModified"}}})},_trackingTouchStartList:{value:null},_trackingTouchEndList:{value:null},_trackingTouchTimeoutIDs:{value:null},_wouldTouchTriggerSimulatedEvent:{value:function(e){switch(e.type){case"touchstart":case"touchend":return!0;default:return!1}}},_couldEventBeSimulated:{value:function(e){switch(e.type){case"mousedown":case"mouseup":case"click":return!0;default:return!1}}},_listeningWindowOnTouchCancel:{value:[]},_findWindowFromEvent:{value:function(e){var t,n=e.target;return n&&(t=n instanceof Window?n:n.defaultView instanceof Window?n.defaultView:n.ownerDocument&&n.ownerDocument.defaultView?n.ownerDocument.defaultView:null),t}},_isWindowListeningOnTouchCancel:{value:function(e){return this._registeredWindows.indexOf(e)>-1&&this._listeningWindowOnTouchCancel.indexOf(e)>-1}},_listenToTouchCancelIfNeeded:{value:function(e){var t=this._findWindowFromEvent(e);if(t&&!this._isWindowListeningOnTouchCancel(t)){var n=this;t.addEventListener("touchcancel",function(e){for(var t,i=e.changedTouches,r=n._trackingTouchStartList,o=0,a=i.length;o<a;o++)t=i[o].identifier,r.has(t)&&r["delete"](t)},!0),this._listeningWindowOnTouchCancel.push(t)}}},_blocksEmulatedEvents:{value:!0},blocksEmulatedEvents:{get:function(){return this._blocksEmulatedEvents},set:function(e){e!==this._blocksEmulatedEvents&&(this._blocksEmulatedEvents=e,this._evaluateShouldDispatchEventCondition())}},_shouldDispatchEventCondition:{value:void 0},_evaluateShouldDispatchEventCondition:{value:function(){this._shouldDispatchEventCondition=this.blocksEmulatedEvents&&!window.PointerEvent&&!(window.MSPointerEvent&&window.navigator.msPointerEnabled)}},_shouldDispatchEvent:{value:function(e){if(this._shouldDispatchEventCondition){if(this.environment.isIOSDevice&&this.environment.isWKWebView){if(0===e.timeStamp)return!1;if(this._couldEventBeSimulated(e)&&!e.hasOwnProperty("movementX"))return!1}if(this.environment.isAndroidDevice&&this._couldEventBeSimulated(e))return!1;if(this._wouldTouchTriggerSimulatedEvent(e)){var t=e.changedTouches;this._listenToTouchCancelIfNeeded(e);for(var n=0,i=t.length;n<i;n++)this._trackTouch(e,t[n])}else if(this._couldEventBeSimulated(e))return!this._isEmulatedEvent(e)}return!0}},_trackTouch:{value:function(e,t){var n=this._trackingTouchTimeoutIDs,i=this._trackingTouchStartList,r=this._trackingTouchEndList,o=t.identifier;if(t.timeStamp=e.timeStamp,"touchstart"===e.type){var a=n.get(o);a&&(clearTimeout(a),n["delete"](o)),i.set(o,t)}else n.set(o,setTimeout(function(){r["delete"](o),delete n[o]},400)),i["delete"](o),r.set(o,t)}},_isEmulatedEvent:{value:function(e){var t=this._findEmulatedEventIdentifierWithEventAndTrackingTouchList(e,this._trackingTouchStartList)>-1;if(!t){var n=this._trackingTouchEndList,i=this._findEmulatedEventIdentifierWithEventAndTrackingTouchList(e,n);if((t=i>-1)&&"click"===e.type){var r=this._trackingTouchTimeoutIDs,o=r.get(i);o&&(clearTimeout(o),n["delete"](i),r["delete"](i))}}return t}},_emulatedEventTimestampThreshold:{value:20},_emulatedEventRadiusThreshold:{value:20},_findEmulatedEventIdentifierWithEventAndTrackingTouchList:{value:function(e,t){var n,i,r,o=e.target,a=-1;for(r=t.keys();n=r.next().value;)if(i=t.get(n),
i.target===o||this._couldEmulatedEventHaveWrongTarget(i,e,this._emulatedEventRadiusThreshold,this._emulatedEventTimestampThreshold)){a=n;break}return a}},_couldEmulatedEventHaveWrongTarget:{value:function(e,t,n,i){if(t.timeStamp-e.timeStamp<=i){var r=e.clientX-t.clientX,o=e.clientY-t.clientY;return r*r+o*o<=n*n}return!1}},_currentDispatchedTargetListeners:{value:null},_processCurrentDispatchedTargetListenersToRemove:{value:function(e,t,n,i){var r,o,a=this._currentDispatchedTargetListeners.get(i);a&&a.size>0&&(i.removeObjects(a),r=n?this._registeredCaptureEventListeners:this._registeredBubbleEventListeners,o=n?this._registeredBubbleEventListeners:this._registeredCaptureEventListeners,this._unregisterTargetForEventTypeIfNeeded(e,t,i,r,o))}},handleEvent:{enumerable:!1,value:function(e){if(!(window.MontageElement&&e.target instanceof MontageElement||e instanceof UIEvent&&!this._shouldDispatchEvent(e))){this.monitorDOMModificationInEventHandling&&(document.body.addEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0));var t,n,i,r,a,s,l,u,v,d,c,h,p,b,m=e.type,g=m.toCapitalized(),E=e.bubbles,f=this._currentDispatchedTargetListeners,_=this._registeredCaptureEventListeners,y=this._registeredBubbleEventListeners;for("DOMContentLoaded"===m&&(t=e.target.defaultView,t&&this._windowsAwaitingFinalRegistration.has(t)&&(this._finalizeWindowRegistration(t),e.target.removeEventListener("DOMContentLoaded",this,!0))),p="boolean"!=typeof e.propagationStopped?o.fromEvent(e):e,b=p.target,l=Element.isElement(b)||b instanceof Document||b===window?this._eventPathForDomTarget(b):this._eventPathForTarget(b),b.identifier?(h=b.identifier.toCapitalized(),d=this.methodNameForCapturePhaseOfEventType(m,b.identifier,g,h),c=this.methodNameForBubblePhaseOfEventType(m,b.identifier,g,h)):(d=null,c=null),u=this.methodNameForCapturePhaseOfEventType(m,null,g),v=this.methodNameForBubblePhaseOfEventType(m,null,g),this.delegate&&"function"==typeof this.delegate.willDistributeEvent&&this.delegate.willDistributeEvent(p),this._isStoringPointerEvents&&this._pointerStorage.storeEvent(p),p.eventPhase=Event.CAPTURING_PHASE,n=l.length-1;!p.propagationStopped&&(r=l[n]);n--)if(p.currentTarget=r,a=this._registeredEventListenersForEventType_onTarget_registeredEventListeners_(m,r,_))if(Array.isArray(a)){for(i=0,f.set(a,null);(s=a[i++])&&!p.immediatePropagationStopped;)this._invokeTargetListenerForEvent(r,s,p,d,u);this._processCurrentDispatchedTargetListenersToRemove(r,m,!0,a),f["delete"](a)}else this._invokeTargetListenerForEvent(r,a,p,d,u);if(!p.propagationStopped){if(p.eventPhase=Event.AT_TARGET,p.currentTarget=r=b,a=this._registeredEventListenersForEventType_onTarget_registeredEventListeners_(m,r,_))if(Array.isArray(a)){for(i=0,f.set(a,null);(s=a[i++])&&!p.immediatePropagationStopped;)this._invokeTargetListenerForEvent(r,s,p,d,u);this._processCurrentDispatchedTargetListenersToRemove(r,m,!0,a),f["delete"](a)}else this._invokeTargetListenerForEvent(r,a,p,d,u);if(a=this._registeredEventListenersForEventType_onTarget_registeredEventListeners_(m,r,y))if(Array.isArray(a)){for(i=0,f.set(a,null);(s=a[i++])&&!p.immediatePropagationStopped;)this._invokeTargetListenerForEvent(r,s,p,c,v);this._processCurrentDispatchedTargetListenersToRemove(r,m,!1,a),f["delete"](a)}else this._invokeTargetListenerForEvent(r,a,p,c,v)}for(p.eventPhase=Event.BUBBLING_PHASE,n=0;E&&!p.propagationStopped&&(r=l[n]);n++)if(p.currentTarget=r,a=this._registeredEventListenersForEventType_onTarget_registeredEventListeners_(m,r,y))if(Array.isArray(a)){for(i=0,f.set(a,null);(s=a[i++])&&!p.immediatePropagationStopped;)this._invokeTargetListenerForEvent(r,s,p,c,v);this._processCurrentDispatchedTargetListenersToRemove(r,m,!1,a),f["delete"](a)}else this._invokeTargetListenerForEvent(r,a,p,c,v);p.eventPhase=Event.NONE,p.currentTarget=null,this._isStoringPointerEvents&&this._pointerStorage.removeEvent(e),this.monitorDOMModificationInEventHandling&&(document.body.removeEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0))}}},_invokeTargetListenerForEvent:{value:function(e,t,n,i,r){var o="function";typeof t===o?t.call(e,n):i&&typeof t[i]===o?t[i](n):typeof t[r]===o?t[r](n):typeof t.handleEvent===o&&t.handleEvent(n)}},_prepareComponentsForActivation:{value:function(e,t){var n,i,r=e,o=r&&r.defaultView?r.defaultView:window,a=o.document?o.document:document,s=!1,l=null;do switch(r&&(i=this.eventHandlerForElement(r),i&&(s||(s=!0,l=this._findActiveTarget(i)),i.preparedForActivationEvents||i._prepareForActivationEvents())),n=r,r){case o:r=null;break;case a:r=o;break;case a.documentElement:r=a;break;default:r=r.parentNode}while(r&&n!==r);t&&(this.activeTarget=l)}},_findActiveTargetMap:{value:void 0},_findActiveTarget:{value:function(e){var t=null,n=this._findActiveTargetMap;for(n.clear();!t&&e&&!n.has(e);)n.set(e,!0),e.acceptsActiveTarget?t=e:e=e.nextTarget;return t}},_eventPathForTargetMap:{value:void 0},_eventPathForTarget:{enumerable:!1,value:function(e){if(!e)return[];var t=e,n=this.application,i=[],r=this._eventPathForTargetMap;r.clear(),r.set(e,!0);do r.has(t)||(i.push(t),r.set(t,!0)),t=t.nextTarget,t&&!r.has(t)||(t=n),t&&r.has(t)&&(t=null);while(t);return i}},_eventPathForDomTarget:{enumerable:!1,value:function(e){if(!e)return[];var t,n=e,i=n&&n.defaultView?n.defaultView:window,r=i.document?i.document:document,o=this.application,a=[];do switch(n!==e&&a.push(n),t=n,n){case o:n=n.parentApplication,n&&(o=n);break;case i:n=o;break;case r:n=i;break;case r.documentElement:n=r;break;default:n=n.parentNode,n||(n=o)}while(n&&t!==n);return a}},_elementEventHandlerByElement:{enumerable:!1,value:null},registerEventHandlerForElement:{enumerable:!1,value:function(e,t){var n=this.eventHandlerForElement(t);n&&this.unregisterEventHandlerForElement(t),this._elementEventHandlerByElement.set(t,e)}},unregisterEventHandlerForElement:{enumerable:!1,value:function(e){this._elementEventHandlerByElement["delete"](e)}},eventHandlerForElement:{enumerable:!1,value:function(e){return this._elementEventHandlerByElement.get(e)}},_activeTarget:{value:null},activeTarget:{get:function(){return this._activeTarget||this.application},set:function(e){e||(e=this.application),e===this._activeTarget||this.activeTarget&&!this.activeTarget.surrendersActiveTarget(e)||e&&(e.willBecomeActiveTarget(this.activeTarget),this._activeTarget=e,e.didBecomeActiveTarget())}}});Object.defineProperty(t,"defaultEventManager",{get:function(){return"undefined"==typeof i&&(i=new h,"undefined"!=typeof window&&i.initWithWindow(window)),i}})}});