montageDefine("b7b5e36","data/service/data-mapping",{dependencies:["core/core"],factory:function(a,e,t){var i=a("core/core").Montage;e.DataMapping=i.specialize({mapRawDataToObject:{value:function(a,e,t){var i,n,o=Object.keys(a);if(a)for(i=0;n=o[i];++i)e[n]=a[n]}},mapObjectToRawData:{value:function(a,e){}},nullPromise:{get:function(){return this._nullPromise||(this._nullPromise=Promise.resolve(null)),this._nullPromise}},mapFromRawData:{value:function(a,e,t){this.mapRawDataToObject(e,a,t)}},mapToRawData:{value:function(a,e){this.mapObjectToRawData(a,e)}}},{withObjectDescriptor:{value:function(a){var e=new this;return e._descriptor=a,e}}})}});