montageDefine("b7b5e36","core/enum",{dependencies:["./core","./logger"],factory:function(e,r,t){var i=e("./core").Montage,n=e("./logger").logger("enum");r.Enum=i.specialize({_value:{value:0},_members:{value:null},members:{get:function(){return this._members||(this._members=Object.keys(this))}},init:{value:function(){return this._logErrorIfAlreadySeal(),this}},initWithMembers:{value:function(){return this._logErrorIfAlreadySeal()?this:(this._addMembers(arguments),Object.seal(this))}},initWithMembersAndValues:{value:function(e,r){if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)throw new Error("the number of members must equal to the number of values");if(this._logErrorIfAlreadySeal())return this;this._addMembers(e,r)}return Object.seal(this)}},addMember:{value:function(e,r){"undefined"==typeof this[e]&&Object.defineProperty(this,e,{writable:!1,configurable:!1,enumerable:!0,value:void 0!==r&&null!==r?r:this._value++})}},seal:{value:function(){if(!Object.isSealed(this))return Object.seal(this)}},_logErrorIfAlreadySeal:{value:function(){return!!Object.isSealed(this)&&(n.error(this,"Object is sealed"),!0)}},_addMembers:{value:function(e,r){var t,i,l;for(i=0;"undefined"!=typeof(t=e[i]);i++)if(null!==t){if(r&&(l=r[i],void 0===l&&null===l))throw new Error("A value of an enumeration cannot be null or undefined");this.addMember(t,l)}else n.error(this,"Member at index "+i+" is null")}}})}});