montageDefine("b7b5e36","core/converter/invert-converter",{dependencies:["./converter","../deprecate"],factory:function(e,n,t){var r,o=e("./converter").Converter,c=e("../deprecate"),i=!1,v=n.InvertConverter=o.specialize({constructor:{value:function(){return this.constructor===v?(r||(r=this),i||c.deprecationWarning("Instantiating InvertConverter is deprecated, use its singleton instead"),r):this}},convert:{value:function(e){return!e}},revert:{value:function(e){return!e}}});Object.defineProperty(n,"singleton",{get:function(){return r||(i=!0,r=new v,i=!1),r}})}});