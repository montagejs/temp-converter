montageDefine("b7b5e36","core/serialization/bindings",{dependencies:["frb","frb/stringify","frb/assign","frb/evaluate","frb/expand","frb/scope","../serialization/serializer/montage-serializer","../serialization/deserializer/montage-deserializer"],factory:function(e,i,r){var n=e("frb"),a=e("frb/stringify"),t=e("frb/assign"),o=e("frb/evaluate"),s=e("frb/expand"),l=e("frb/scope"),f=e("../serialization/serializer/montage-serializer").MontageSerializer,c=e("../serialization/deserializer/montage-deserializer").MontageDeserializer,b="=",d="<-",g="<->",z=i.serializeObjectBindings=function(e,i){for(var r,t,o=n.getBindings(i),f={},c=o.keys();t=c.next().value;){var b=o.get(t),z={};if((!("serializable"in b)||b.serializable)&&b.sourceSyntax){var v,u=b.sourcePath,p=b.sourceSyntax;if(b.source&&b.source!==i){var y=e.getObjectLabel(b.source);v=new l({type:"component",label:y}),v.components=e,p=s(p,v)}v=new l,v.components=e,u=a(p,v),b.twoWay?z[g]=u:z[d]=u,b.converter?z.converter=b.converter:(z.convert=b.convert,z.revert=b.revert),b.trace&&(z.trace=!0),f[t]=z,r=!0}}return r?f:void 0};f.defineSerializationUnit("bindings",z);var v=i.deserializeObjectBindings=function(e,i,r){var a,s,l={components:e};for(a in r){if(s=r[a],"object"!=typeof s){if(a.indexOf(".")===-1)throw new Error("Binding descriptor must be an object, not "+typeof s);s={"=":""+s}}if(b in s){var f=s[b];t(i,a,"string"==typeof f?o(f,i,null,null,e):f,null,null,e)}else n.defineBinding(i,a,s,l)}};c.defineDeserializationUnit("bindings",v)}});