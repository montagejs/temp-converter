var Montage=require("../core").Montage,defaultEventManager=require("./event-manager").defaultEventManager,MutableEvent=require("./mutable-event").MutableEvent,KEYNAMES_TO_KEYCODES={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,"delete":46,arrowup:38,arrowright:39,arrowdown:40,arrowdelete:46,semicolon:186,colon:186,equal:187,plus:187,comma:188,less:188,minus:189,underscore:189,period:190,greater:190,slash:191,questionmark:191,backtick:192,tilde:192,openingsquarebracket:219,openingcurlybracket:219,backslash:220,pipe:220,closingsquarebracket:221,closingcurlybracket:221,singlequote:222,doublequote:222,clear:12,meta:91,contextmenu:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimal:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,f13:124,f14:125,f15:126,f16:127,f17:128,f18:129,f19:130,f20:131,f21:132,f22:133,f23:134,f24:135},KEYCODES_TO_KEYNAMES=null,OPERAMAC_KEYNAMES_TO_KEYCODES={meta:17,control:57392,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259},FIREFOX_KEYNAMES_TO_KEYCODES={f13:44,f14:145,f15:19,f16:63251,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259,meta:224},KEYNAMES_ALIASES={cmd:"command",ctl:"control",ctrl:"control",win:"meta",windows:"meta",opt:"alt",option:"alt"},MODIFIERS={meta:{name:"meta",value:1},alt:{name:"alt",value:2},control:{name:"control",value:4},shift:{name:"shift",value:8}},NORMALIZED_KEYS={semicolon:";",colon:":",equal:"=",plus:"+",comma:",",less:"<",minus:"-",underscore:"_",period:".",greater:">",slash:"/",questionmark:"?",backtick:"`",tilde:"~",openingsquarebracket:"[",openingcurlybracket:"{",backslash:"\\",pipe:"|",closingsquarebracket:"]",closingcurlybracket:"}",singlequote:"'",doublequote:'"',multiply:"*",add:"+",subtract:"-",decimal:".",divide:"/"},NORMALIZED_CHARS=null,KEYPRESS_EVENT_TYPE="keyPress",LONGKEYPRESS_EVENT_TYPE="longKeyPress",KEYRELEASE_EVENT_TYPE="keyRelease",defaultKeyManager=null,KeyManager=exports.KeyManager=Montage.specialize({_keyEventsListenerInstalled:{value:!1},_composerKeyMap:{value:{}},_triggeredKeys:{value:{}},_longPressKeys:{value:{}},_cleanupTimeout:{value:null},_cleanupThreshold:{value:2e3},_longPressThreshold:{value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){e>0&&e!==this._longPressThreshold&&(this._longPressThreshold=e,this._longPressThreshold>this._cleanupThreshold-100?this._cleanupThreshold=this._longPressThreshold+100:this._cleanupThreshold=2e3)}},registerKey:{value:function(e){var t,s,i,r,n,o=this._normalizeKeySequence(e.keys),a=this._composerKeyMap,l=!1;if(o){if(t=this._convertKeysToModifiersAndKeyCode(o),s=a[t.modifiers],s||(s=a[t.modifiers]={}),i=s[t.keyCode]){for(n in i)if(i.hasOwnProperty(n)&&(r=i[n],r.object===e)){r.refCount++,l=!0;break}l||i.push({object:e,refCount:1})}else s[t.keyCode]=[{object:e,refCount:1}];e._modifiers=t.modifiers,e._keyCode=t.keyCode,this._registerListeners()}}},unregisterKey:{value:function(e){var t,s,i,r,n=this._composerKeyMap;if(t=n[e._modifiers]){s=t[e._keyCode];for(r in s)s.hasOwnProperty(r)&&(i=s[r],i.object===e&&(i.refCount--,i.refCount<=0&&(s.splice(r,1),0===s.length&&(delete t[e._keyCode],0===Object.keys(t).length&&(delete n[e._modifiers],0===Object.keys(n).length&&this._unregisterListeners())))))}}},constructor:{value:function(){var e,t=global.navigator?global.navigator.userAgent:"";if(defaultKeyManager&&console.warn("Rather than creating a new KeyManager object, you might want to use the default key manager"),t.match(/ firefox\//i)?this._firefox=!0:t.match(/ appleWebkit\//i)?(this._webkit=!0,t.match(/ chrome\//i)&&(this._chrome=!0)):t.match(/^opera\//i)&&(this._opera=!0),t.match(/macintosh/i)&&(this._mac=!0,this._opera&&(this._operaMac=!0)),this._mac?MODIFIERS.command=MODIFIERS.meta:MODIFIERS.command=MODIFIERS.control,this._operaMac)for(e in OPERAMAC_KEYNAMES_TO_KEYCODES)OPERAMAC_KEYNAMES_TO_KEYCODES.hasOwnProperty(e)&&(KEYNAMES_TO_KEYCODES[e]=OPERAMAC_KEYNAMES_TO_KEYCODES[e]);if(this._firefox)for(e in FIREFOX_KEYNAMES_TO_KEYCODES)FIREFOX_KEYNAMES_TO_KEYCODES.hasOwnProperty(e)&&(KEYNAMES_TO_KEYCODES[e]=FIREFOX_KEYNAMES_TO_KEYCODES[e]);var s;KEYCODES_TO_KEYNAMES={};for(s in KEYNAMES_TO_KEYCODES)KEYNAMES_TO_KEYCODES.hasOwnProperty(s)&&(e=KEYNAMES_TO_KEYCODES[s],void 0===KEYCODES_TO_KEYNAMES[e]&&(KEYCODES_TO_KEYNAMES[e]=s));NORMALIZED_CHARS={};for(s in NORMALIZED_KEYS)NORMALIZED_KEYS.hasOwnProperty(s)&&(e=NORMALIZED_KEYS[s],void 0===NORMALIZED_CHARS[e]&&(NORMALIZED_CHARS[e]=s));this._shiftKey=!1,this._altKey=!1,this._metaKey=!1,this._ctrlKey=!1}},captureKeydown:{value:function(e){var t,s,i,r=e.key||e.keyIdentifier,n=!1;this._preprocessKeyEvent(e),i=this._submap,i&&(t=this._keyCode,t&&i[t]&&(n=this._dispatchComposerKeyMatches(i[t],e)),!n&&r&&(s=KEYNAMES_TO_KEYCODES[r.toLowerCase()]||this._decodeKeyIdentifier(r),s&&s!==t&&i[s]&&this._dispatchComposerKeyMatches(i[s],e))),this._setupCleanupTimer()}},captureKeypress:{value:function(e){var t,s,i,r=e.charCode,n=e.key||e.keyIdentifier,o=!1;this._preprocessKeyEvent(e),i=this._submap,i&&(t=this._keyCode,t&&i[t]&&(o=this._dispatchComposerKeyMatches(i[t],e)),!o&&r&&r!==t&&i[r]&&(o=this._dispatchComposerKeyMatches(i[r],e)),!o&&n&&(s=KEYNAMES_TO_KEYCODES[n.toLowerCase()]||this._decodeKeyIdentifier(n),s&&s!==t&&i[s]&&this._dispatchComposerKeyMatches(i[s],e))),this._setupCleanupTimer()}},captureKeyup:{value:function(e){var t,s,i,r,n=e.keyCode,o=e.key||e.keyIdentifier,a=0,l=!1;if(this._preprocessKeyEvent(e),s=this._submap,s&&(n=this._keyCode,n&&s[n]&&(l=this._dispatchComposerKeyMatches(s[n],e),a=n),!l&&o&&(t=KEYNAMES_TO_KEYCODES[o.toLowerCase()]||this._decodeKeyIdentifier(o),t&&t!==a&&s[t]&&(l=this._dispatchComposerKeyMatches(s[t],e)))),!l)for(r in this._triggeredKeys)this._triggeredKeys.hasOwnProperty(r)&&(i=this._triggeredKeys[r],i._keyCode!==n&&i._keyCode!==t||this._dispatchComposerKeyMatches([i],e));this._cleanup()}},_normalizeKeySequence:{value:function(e){var t,s,i=[MODIFIERS.meta.name,MODIFIERS.alt.name,MODIFIERS.control.name,MODIFIERS.shift.name],r=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),n=r.length,o=[];for(s=0;s<n-1;s++){if(t=r[s],t=KEYNAMES_ALIASES[t]||t,t=MODIFIERS[t],!t)return console.warn("Invalid key sequence (modifier):",e),null;o.push(t.name)}return o.sort(function(e,t){return i.indexOf(e)-i.indexOf(t)}),t=r[n-1],t.length>1&&!KEYNAMES_TO_KEYCODES[t]?(console.warn("Invalid key sequence (key):",e,t),null):o.length?o.join("+")+"+"+t:t}},_preprocessKeyEvent:{value:function(e){var t,s,i=this,r=e.type,n=e.keyCode,o=e.key||e.keyIdentifier;this._operaMac&&this._operaModifierTimeout&&(clearTimeout(this._operaModifierTimeout),this._operaModifierTimeout=null),"keydown"!==r&&"keyup"!==r||(this._operaMac?(s="keydown"===r,n===KEYNAMES_TO_KEYCODES.shift?this._shiftKey=s:n===KEYNAMES_TO_KEYCODES.alt?this._altKey=s:n===KEYNAMES_TO_KEYCODES.meta?this._mac&&(this._metaKey=s):n===KEYNAMES_TO_KEYCODES.control&&(this._ctrlKey=s),"keyup"===r&&(this._operaModifierTimeout=setTimeout(function(){i._shiftKey=!1,i._altKey=!1,i._metaKey=!1,i._ctrlKey=!1,i._operaModifierTimeout=null},this._cleanupThreshold+1e3))):(this._shiftKey=e.shiftKey,this._altKey=e.altKey,this._metaKey=e.metaKey,this._ctrlKey=e.ctrlKey)),this._mac&&this._webkit&&n===KEYNAMES_TO_KEYCODES.contextmenu&&(this._metaKey=!1),this._chrome&&(this._shiftKey||n!==KEYNAMES_TO_KEYCODES.plus||"U+002B"!==o&&"+"!==o||(e.keyCode=KEYNAMES_TO_KEYCODES.add)),this._modifiers=t=(this._shiftKey?MODIFIERS.shift.value:0)+(this._altKey?MODIFIERS.alt.value:0)+(this._metaKey?MODIFIERS.meta.value:0)+(this._ctrlKey?MODIFIERS.control.value:0),this._submap=this._composerKeyMap[t],this._keyCode=e.keyCode,this._keyIdentifier=o}},_registerListeners:{value:function(){this._keyEventsListenerInstalled||(window.addEventListener("keydown",this,!0),window.addEventListener("keypress",this,!0),window.addEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!0)}},_unregisterListeners:{value:function(){this._keyEventsListenerInstalled&&(window.removeEventListener("keydown",this,!0),window.removeEventListener("keypress",this,!0),window.removeEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!1)}},_dispatchComposerKeyMatches:{value:function(e,t){var s,i,r,n,o=this,a=!1,l="keyup"===t.type,u="keydown"===t.type,_=l?KEYRELEASE_EVENT_TYPE:KEYPRESS_EVENT_TYPE,E=e.length;for(e=e.slice(),n=0;n<E&&!a;n++){s=e[n].object||e[n];for(var h=t.target,d=s.element,c=s.element===window;!c&&(c=h===d,h!==document);)h=h.parentElement,h||(h=document);if(c||defaultEventManager.activeTarget===s.component){if(l){if(r=Object.keys(this._triggeredKeys),r.indexOf(s.uuid)===-1)continue;s._longPressTimeout&&(clearTimeout(s._longPressTimeout),s._longPressTimeout=null,delete this._longPressKeys[s.uuid])}else{if(u)delete this._triggeredKeys[s.uuid];else if(this._triggeredKeys[s.uuid])continue;s._shouldDispatchLongPress&&!s._longPressTimeout&&(s._longPressTimeout=setTimeout(function(){var e=MutableEvent.fromEvent(e);e.type=LONGKEYPRESS_EVENT_TYPE,e.activeElement=t.target,e.identifier=s.identifier,s._longPressTimeout=null,s.dispatchEvent(e),delete o._longPressKeys[s.uuid]},this._longPressThreshold),this._longPressKeys[s.uuid]=s)}i=MutableEvent.fromEvent(t),i.type=_,i.activeElement=t.target,i.identifier=s.identifier,i.keyComposer=s,s.dispatchEvent(i),i.propagationStopped&&(a=!0),l?delete this._triggeredKeys[s.uuid]:this._triggeredKeys[s.uuid]=s}}if(a)for(n=l?n:0;n<E;n++)s=e[n].object||e[n],delete this._triggeredKeys[s.uuid],s._longPressTimeout&&(clearTimeout(s._longPressTimeout),s._longPressTimeout=null,delete this._longPressKeys[s.uuid]);return a}},_cleanup:{value:function(){var e,t;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout);for(t in this._triggeredKeys)this._triggeredKeys.hasOwnProperty(t)&&delete this._triggeredKeys[t];for(t in this._longPressKeys)this._longPressKeys.hasOwnProperty(t)&&(e=this._longPressKeys[t],clearTimeout(e._longPressTimeout),e._longPressTimeout=null,delete this._longPressKeys[t]);this._cleanupTimeout=null}},_setupCleanupTimer:{value:function(){var e=this;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout),this._cleanupTimeout=setTimeout(function(){e._cleanup()},this._cleanupThreshold)}},_convertKeysToModifiersAndKeyCode:{value:function(e){var t,s,i,r=0,n=0;for(e=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),t=e.length,i=0;i<t-1;i++){if(s=e[i],s=KEYNAMES_ALIASES[s]||s,s=MODIFIERS[s],!s)return console.warn("Invalid Key sequence:",e),null;n|=s.value}return s=e[t-1],s=NORMALIZED_CHARS[s]||s,s=NORMALIZED_KEYS[s]||s,s.length>1?(r=KEYNAMES_TO_KEYCODES[s],s=MODIFIERS[KEYNAMES_ALIASES[s]||s],s&&(n|=s.value)):r=s.toUpperCase().charCodeAt(0),{modifiers:n,keyCode:r}}},_decodeKeyIdentifier:{value:function(e){if(e.match(/U\+/))return parseInt(e.substring(2),16)}}});Montage.defineProperty(exports,"defaultKeyManager",{get:function(){return defaultKeyManager||(defaultKeyManager=new KeyManager),defaultKeyManager}});