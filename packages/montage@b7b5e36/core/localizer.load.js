montageDefine("b7b5e36","core/localizer",{dependencies:["./core","./messageformat","../ui/component","./logger","./serialization/serializer/montage-serializer","./serialization/deserializer/montage-deserializer","./promise","./core","frb/bindings","frb/stringify","frb/expand","collections/map","frb/scope","./messageformat-locale"],factory:function(e,t,i){var a=e("./core").Montage,s=e("./messageformat"),n=e("../ui/component").__root__,o=e("./logger").logger("localizer"),l=e("./serialization/serializer/montage-serializer").MontageSerializer,r=e("./serialization/deserializer/montage-deserializer").MontageDeserializer,c=e("./promise").Promise,u=e("./core").Bindings,h=e("frb/bindings"),d=e("frb/stringify"),f=e("frb/expand"),g=e("collections/map"),_=e("frb/scope");s.locale=e("./messageformat-locale");var m,v="key",z="default",p="montage_locale",y="locale",w="messages",b="manifest.json",L=function(){return""},M=/^[a-zA-Z]+(?:-[a-zA-Z0-9]+)*$/,k=t.Localizer=a.specialize({initWithLocale:{value:function(e){var t;this.storesLocale&&"undefined"!=typeof window&&window.localStorage&&(t=window.localStorage.getItem(p));var i=e||t||window.navigator.userLanguage||window.navigator.language||k.defaultLocale,a=this.callDelegateMethod("localizerWillUseLocale",this,i);return this.locale=a||i,this._isInitialized=!0,this.loadMessages(),this}},initWithLocaleAndDelegate:{value:function(e,t){return this.delegate=t,this.initWithLocale(e)}},storesLocale:{value:!1},component:{value:null},_delegate:{value:null},delegate:{set:function(e){!this._delegate&&e&&"object"==typeof e&&(this._delegate=e)},get:function(){return this._delegate}},_isInitialized:{value:!1},isInitialized:{get:function(){return this._isInitialized}},messageFormat:{serializable:!1,value:null},_messages:{value:null},messages:{get:function(){return this._messages},set:function(e){if(this._messages!==e){if(void 0!==e&&null!==e&&"object"!=typeof e)throw new TypeError(e," is not an object");this._messages=e}}},messagesPromise:{serializable:!1,value:null},_locale:{value:null},locale:{get:function(){return this._locale},set:function(e){if(!M.test(e))throw new TypeError("Language tag '"+e+"' is not valid. It must match http://tools.ietf.org/html/rfc5646 (alphanumeric characters separated by hyphens)");if(this._locale!==e){var t=this._locale;if(this._locale=e,this.messageFormat=new s(e),t&&t!==this._locale){var i=this;this.loadMessages().then(function(){i._dispatchLocaleChange(t)})}if(this.storesLocale&&"undefined"!=typeof window&&window.localStorage)try{window.localStorage.setItem(p,e)}catch(a){}}}},_availableLocales:{value:null},availableLocales:{get:function(){return this._availableLocales?this._availableLocales:(this._availableLocales=this.callDelegateMethod("localizerWillPromiseAvailableLocales",this),this._availableLocales||(this._availableLocales=this._manifest.get("files").get(y).get("files").then(function(e){return Object.keys(e)})),this._availableLocales)}},_require:{value:global.require},require:{serializable:!1,get:function(){return this._require},set:function(e){this._require!==e&&(this.__manifest=null,this._require=e)}},__manifest:{value:null},_manifest:{depends:["require"],get:function(){var e=this.require;return e.packageDescription.manifest===!0?(this.__manifest||(this.__manifest=e.async(b)),this.__manifest):c.reject(new Error("Package has no manifest. "+e.location+'package.json must contain "manifest": true and '+e.location+b+" must exist"))}},loadMessagesTimeout:{value:5e3},loadMessages:{value:function(e,t){if(!this.require)throw new Error("Cannot load messages as",this,"require is not set");"number"!=typeof e&&(e=this.loadMessagesTimeout),this.messages=null;var i=this,a=this.callDelegateMethod("localizerWillLoadMessages",this);return this.hasOwnProperty("loadMessagesTimeout")&&(e=this.loadMessagesTimeout),a=a?a.timeout(e):this._manifest.timeout(e).then(function(e){return i._loadMessageFiles(e.files)}),this.messagesPromise=a.then(function(e){return i._collapseMessages(e)},function(e){throw console.error("Could not load messages for '"+i.locale+"': "+e),e}).then(function(e){return"function"==typeof t&&t(e),e}),this.messagesPromise}},_loadMessageFiles:{value:function(e){var t=this.require;if(!e)return c.reject(new Error(t.location+b+" does not contain a 'files' property"));var i,a,s,n,l=[];if(!(y in e))return c.reject(new Error("Package does not contain a '"+y+"' directory"));for(i=e[y].files,a=this._locale;""!==a;)i.hasOwnProperty(a)&&(s=i[a].files,(n=w+".js")in s||(n=w+".json")in s?l.push(t.async(y+"/"+a+"/"+n)):o.isDebug&&o.debug(this,"Warning: '"+y+"/"+a+"/' does not contain '"+w+".json' or '"+w+".js'")),a=a.substring(0,a.lastIndexOf("-"));if(!l.length)return c.reject(new Error("Could not find any "+w+".json or "+w+".js files"));var r=c.all(l);if(o.isDebug){var u=this;r=r.then(function(e){return o.debug(u,"loaded "+e.length+" message files"),e})}return r}},_collapseMessages:{value:function(e){for(var t={},i=0,a=e.length;i<a;i++){var s=e[i];for(var n in s)s.hasOwnProperty(n)&&(n in t||(t[n]=s[n]))}return this.messages=t,t}},_compiledMessageCache:{value:Object.create(null)},localizeSync:{value:function(e,t){var i,a,n;if(!e&&!t)throw new Error("Key or default message must be truthy, not "+e+" and "+t);if(this._messages&&e in this._messages){if(i=this._messages[e],a=typeof i,"function"===a)return i;if("object"===a){if(!("message"in i))throw new Error(i,"does not contain a 'message' property");i=i.message}}else i=t;if(i||(console.warn("No message or default message for key '"+e+"'"),i=e),i in this._compiledMessageCache)return this._compiledMessageCache[i];var o=this.messageFormat.parse(i);return o.program&&o.program.statements&&1===o.program.statements.length&&"string"===o.program.statements[0].type?(n=function(){return i},n.toString=n):n=new Function("MessageFormat","return "+this.messageFormat.precompile(o))(s),this._compiledMessageCache[i]=n,n}},localize:{value:function(e,t,i,a){i="undefined"==typeof i||i;var s,n=this;if(this._isInitialized)if(this.messagesPromise){var o=function(){var i=n.localizeSync(e,t);return"function"==typeof a&&a(i),i};s=i?this.messagesPromise.then(o,o):this.messagesPromise.then(o)}else s=c.resolve(this.localizeSync(e,t)),s.then(a);else this.initWithLocale(),s=this.messagesPromise.then(function(){return n.localize(e,t,i,a)});return s}},reset:{value:function(){return this.storesLocale&&"undefined"!=typeof window&&window.localStorage&&window.localStorage.removeItem(p),this.initWithLocale(),this._locale}},_dispatchLocaleChangeAsNeeded:{value:function(e,t){return!(!t||null!==t.localizer&&void 0!==t.localizer&&t.localizer!==this)&&("function"==typeof t.localizerDidChangeLocale&&t.localizerDidChangeLocale(this,e,this._locale),!0)}},_dispatchLocaleChange:{value:function(e,t){if(t||(t=this.component||n,this._dispatchLocaleChangeAsNeeded(e,t))){var i=t._childComponents;if(i)for(var a,s=0;s<i.length;s++)a=i[s],this._dispatchLocaleChangeAsNeeded(e,a)&&a._childComponents&&this._dispatchLocaleChange(e,a)}}}},{defaultLocalizer:{value:function(){return m||(m=new k,m.storesLocale=!0),m}},defaultLocalizerWithDelegate:{value:function(e){return this.defaultLocalizer(),m.delegate=e,m}},defaultLocale:{value:"en"}});Object.defineProperty(t,"defaultLocalizer",{get:function(){return k.defaultLocalizer()}});var C;Object.defineProperty(t,"localize",{get:function(){if(!C){var e=k.defaultLocalizer();C=e.bind(e)}return C}});var j=t.Message=a.specialize({constructor:{value:function(){this.addPathChangeListener("localizer.locale",this,"handleLocaleChange")}},init:{value:function(e,t,i){return e&&(this.key=e),t&&(this.defaultMessage=t),i&&(this.data=i),this}},_localizer:{value:null},localizer:{get:function(){return this._localizer||(this._localizer=k.defaultLocalizer()),this._localizer},set:function(e){this._localizer!==e&&(this._localizer=e,this._localize())}},_key:{value:null},key:{get:function(){return this._key},set:function(e){this._key!==e&&(this._key=e,this._localize())}},_defaultMessage:{value:null},defaultMessage:{get:function(){return this._defaultMessage},set:function(e){this._defaultMessage!==e&&(this._defaultMessage=e,this._localize())}},handleLocaleChange:{value:function(){this._key&&this._localizer&&this._localizer.isInitialized&&this._localize()}},_isLocalizeQueued:{value:!1},_localize:{value:function(){if(!this._isLocalizeQueued){this._isLocalizeQueued=!0;var e=this;this._messageFunction=new c(function(t,i){setTimeout(function(){return e._isLocalizeQueued=!1,e._key||e._defaultMessage?void t(e._localizer.localize(e._key,e._defaultMessage)):void t(L)},0)}),this.localized=this._messageFunction.then(function(t){return e._optimizedMessageCallBack(t)})}}},__messageFunction:{value:null},_messageFunction:{set:function(e){this.__messageFunction=e},get:function(){return this.__messageFunction||(this.__messageFunction=c.resolve(L)),this.__messageFunction}},_data:{value:null},data:{get:function(){return this._data||(this._data=new g,this._data.addMapChangeListener(this,"data")),this._data},set:function(e){if(this._data!==e&&e){this._data?(this.data.removeMapChangeListener(this,"data"),this._data.length&&this._data.clear()):this._data=new g;for(var t in e)e.hasOwnProperty(t)&&this.data.set(t,e[t]);this._data.addMapChangeListener(this,"data"),this.handleDataMapChange()}}},__localizedResolved:{value:""},_localizedDeferred:{value:c.resolve()},localized:{get:function(){return this._localize(),this._localizedDeferred},set:function(e){if(e!==this._localized){var t=this;this._localizedDeferred&&(e=c.resolve(e)),e.then(function(e){return t.__localizedResolved=e}),this._localizedDeferred=e}}},handleDataMapChange:{value:function(e){if(this._key){var t=this;this.localized=this._messageFunction.then(function(e){return t._optimizedMessageCallBack(e)})}}},_optimizedMessageCallBack:{value:function(e){return this._data?e(this.data.toObject()):e()}},serializeSelf:{value:function(e){var t={_bindingDescriptors:this._bindingDescriptors};return t.key=this._key,t.defaultMessage=this._defaultMessage,this._localizer!==k.defaultLocalizer()&&(t.localizer=this._localizer),t}},serializeForLocalizations:{value:function(e){var t,i,a={};i=h.getBindings(this),i&&i.get("key")?(a[v]={},this._serializeBinding(this,a[v],i.get("key"),e)):a[v]=this._key,i&&i.defaultMessage?(a[z]={},this._serializeBinding(this,a[z],i.defaultMessage,e)):a[z]=this._defaultMessage;var s=h.getBindings(this.data);t=this.data.toObject();for(var n in t)!t.hasOwnProperty(n)||s&&s[".get('"+n+"')"]||(a.data=a.data||{},a.data[n]=t[n]);for(var o,l,r=s.keys();l=r.next().value;)o=/\.get\('([^']+)'\)/.exec(l)[1],a.data=a.data||{},a.data[o]={},this._serializeBinding(this.data,a.data[o],s.get(l),e);return a}},_serializeBinding:{value:function(e,t,i,a){if(!("serializable"in i)||i.serializable){var s,n=i.sourceSyntax;if(i.source!==e){var o=a.addObjectReference(i.source);s=new _({type:"component",label:o["@"]}),s.components=a,n=f(n,s)}s=new _,s.components=a;var l=d(n,s);i.twoWay?t["<->"]=l:t["<-"]=l,i.converter?t.converter=i.converter:(t.convert=i.convert,t.revert=i.revert),i.trace&&(t.trace=!0)}}}}),P=function(e,t,i,a,s,n){var o=new j;if(s){var l,r,c,h=o._data=new g;for(l in s)s.hasOwnProperty(l)&&(r=s[l],c=typeof r,"string"===c?h.set(l,r):"object"===c&&u.defineBinding(h,".get('"+l+"')",r,{components:n}));h.addMapChangeListener(o,"data")}"object"==typeof i?u.defineBinding(o,"key",i,{components:n}):o.key=i,"object"==typeof a?u.defineBinding(o,"defaultMessage",a,{components:n}):"string"==typeof a&&(o.defaultMessage=a),u.defineBinding(e,t,{"<-":"__localizedResolved",source:o,serializable:!1})};l.defineSerializationUnit("localizations",function(e,t){var i=h.getBindings(t);if(i){var a;for(var s in i)if(i.hasOwnProperty(s)){var n=i[s];if(j.prototype.isPrototypeOf(n.source)){a||(a={});var o=n.source;a[s]=o.serializeForLocalizations(e)}}return a}}),r.defineDeserializationUnit("localizations",function(e,t,i){var a,s,n;for(var l in i)if(i.hasOwnProperty(l)){if(a=i[l],!(v in a)){console.error("localized property '"+l+"' must contain a key property ("+v+"), in ",i[l]);continue}!o.isDebug||z in a||o.debug(this,"Warning: localized property '"+l+"' does not contain a default message property ("+z+"), in ",t),s=a[v],n=a[z],P(t,l,s,n,a.data,e)}})}});