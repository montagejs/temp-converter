function evaluate(e,r,a,o,p){var t;t="string"==typeof e?parse(e):e;var u=compile(t),c=new Scope(r);return c.parameters=a,c.document=o,c.components=p,u(c)}var parse=require("./parse"),compile=require("./compile-evaluator"),Scope=require("./scope");module.exports=evaluate;