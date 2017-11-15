montageDefine("b7b5e36","composer/key-composer",{dependencies:["../core/core","./composer"],factory:function(e,t,i){var s=e("../core/core").Montage,a=e("./composer").Composer,n=null,r=s.specialize({_defaultKeyManager:{value:null},_loadingDefaultKeyManager:{value:!1},_keysToRegister:{value:[]},registerKey:{value:function(t){var i=this;this._defaultKeyManager?this._defaultKeyManager.registerKey(t):(this._keysToRegister.push(t),this._loadingDefaultKeyManager||(this._loadingDefaultKeyManager=!0,e.async("core/event/key-manager").then(function(e){var t=i._defaultKeyManager=e.defaultKeyManager;i._keysToRegister.forEach(function(e){t.registerKey(e)}),i._keysToRegister.length=0})))}},unregisterKey:{value:function(e){this._defaultKeyManager&&this._defaultKeyManager.unregisterKey(e)}}},{defaultKeyManager:{get:function(){return n||(n=new r),this._defaultKeyManager?this._defaultKeyManager:n}}}),o="keyPress",l="longKeyPress",u="keyRelease",d=t.KeyComposer=a.specialize({_shouldDispatchEvent:{value:!1},shouldDispatchLongPress:{value:!1},_longPressTimeout:{value:null},_keyRegistered:{value:!1},_keys:{value:null},keys:{get:function(){return this._keys},set:function(e){this._keyRegistered?(r.defaultKeyManager.unregisterKey(this),this._keys=e,r.defaultKeyManager.registerKey(this)):this._keys=e}},load:{value:function(){this._shouldDispatchEvent&&!this._keyRegistered&&(r.defaultKeyManager.registerKey(this),this._keyRegistered=!0)}},unload:{value:function(){r.defaultKeyManager.unregisterKey(this),this._keyRegistered=!1}},addEventListener:{value:function(e,t,i){var s=this.component;a.prototype.addEventListener.call(this,e,t,i),e!==o&&e!==l&&e!==u||(this._shouldDispatchEvent=!0,e===l&&(this._shouldDispatchLongPress=!0),this._isLoaded?this._keyRegistered||(r.defaultKeyManager.registerKey(this),this._keyRegistered=!0):s&&"function"!=typeof s.addComposer&&(this.element||(this.element=window),this.component.loadComposer(this)))}},deserializedFromTemplate:{value:function(){var e=this.component;null===this.identifier&&(this.identifier=s.getInfoForObject(this).label),e&&("function"==typeof e.addComposer?e.addComposer(this):this._isLoaded||(this.element||(this.element=window),this.component.loadComposer(this)))}}},{createKey:{value:function(e,t,i){var s=this;return this===d&&(s=new d),i||(i=e.identifier?e.identifier+t.toLowerCase().replace(/[ +]/g).toCapitalized():t.toLowerCase().replace(/[ +]/g)),s.keys=t,s.identifier=i,e.addComposer(s),s}},createGlobalKey:{value:function(e,t,i){var s=this;return this===d&&(s=new d),s.keys=t,s.identifier=i,e.addComposerForElement(s,window),s}}})}});