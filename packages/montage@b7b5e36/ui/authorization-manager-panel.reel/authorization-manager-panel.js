var Component=require("ui/component").Component,Promise=require("core/promise").Promise,application=require("core/application").application,Map=require("collections/map");exports.AuthorizationManagerPanel=Component.specialize({authorizationPanels:{get:function(){return this._authorizationPanels||(this._authorizationPanels=[]),this._authorizationPanels},set:function(i){this._authorizationPanels=i}},authorizationManager:{value:void 0},approveAuthorization:{value:function(i,a){var t=this.authorizationPanels.indexOf(a);t!==-1&&this.authorizationPanels.splice(t,1),this._panels.get(a).resolve(i),!this.authorizationPanels.length&&this._authorizationResolve&&this._authorizationResolve(i)}},_panels:{get:function(){return this.__panels||(this.__panels=new Map),this.__panels}},authorizeWithPanel:{value:function(i){var a,t=this;return this._panels.has(i)?a=Promise.resolve(null):(a=new Promise(function(a,o){t._panels.set(i,{resolve:a,reject:o})}),this.authorizationPanels.push(i)),a}},_authorizationResolve:{value:void 0},cancelAuthorization:{value:function(){application.applicationModal&&application.applicationModal.hide(this),this._authorizationResolve&&this._authorizationReject("CANCEL")}},_authorizationReject:{value:void 0},runModal:{value:function(){var i=this;return new Promise(function(a,t){i._authorizationResolve=a,i._authorizationReject=t,application.applicationModal&&application.applicationModal.show(i)})}}});