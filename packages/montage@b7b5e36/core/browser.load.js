montageDefine("b7b5e36","core/browser",{dependencies:["montage"],factory:function(e,n,a){var l=e("montage").Montage,r=new RegExp(/AppleWebKit\/([\d.]+)/),i=l.specialize({constructor:{value:function(e){this._userAgent=e,this._analyze(e)}},_analyze:{value:function(e){if(e.indexOf("Android")>-1&&e.indexOf("Mozilla/5.0")>-1&&e.indexOf("AppleWebKit")>-1){this.android={};var n=r.exec(e),a=null===n?null:parseFloat(r.exec(e)[1]);this.android.androidBrowser=null!==a&&a<537}}},_userAgent:{value:null}}),o=null;l.defineProperties(n,{browser:{get:function(){return null===o&&(o=new i(global.navigator?global.navigator.userAgent:"")),o}},Browser:{value:i}})}});