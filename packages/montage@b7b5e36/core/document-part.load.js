montageDefine("b7b5e36","core/document-part",{dependencies:["./core","./logger","./promise","./event/event-manager"],factory:function(e,n,t){var o=e("./core").Montage,a=(e("./logger").logger("document-part"),e("./promise").Promise),l=e("./event/event-manager").defaultEventManager,r=o.specialize({parentDocumentPart:{value:null},template:{value:null},fragment:{value:null},objects:{value:null},childComponents:{value:null},parameters:{value:null},initWithTemplateAndFragment:{value:function(e,n){this.template=e,this.fragment=n,this.objects=null,this.childComponents=[],this.parameters=null}},startActingAsTopComponent:{value:function(){this.fragment&&l.registerEventHandlerForElement(this,this.fragment)}},stopActingAsTopComponent:{value:function(){this.fragment&&l.unregisterEventHandlerForElement(this.fragment)}},addChildComponent:{value:function(e){this.childComponents.indexOf(e)===-1&&this.childComponents.push(e)}},removeChildComponent:{value:function(e){var n=this.childComponents,t=n.indexOf(e);t>-1&&(n.splice(t,1),e._parentComponent=null,e._alternateParentComponent=null)}},_addToDrawList:{value:Function.noop},_componentTreeLoadedDeferred:{value:null},loadComponentTree:{value:function(){if(!this._componentTreeLoadedDeferred){for(var e=[],n=this.childComponents,t=0,o=n.length;t<o;t++)e.push(n[t].loadComponentTree());this._componentTreeLoadedDeferred=a.all(e)}return this._componentTreeLoadedDeferred}}});n.DocumentPart=r}});