montageDefine("4bb46cf","fs-root",{dependencies:["q","./fs-boot","./fs-common"],factory:function(n,t,r){function e(n,t){function r(r){var e;return e=n.isAbsolute(r)?n.relativeFromDirectory(n.ROOT,r):r,e=n.join(n.ROOT,e),e=n.relativeFromDirectory(n.ROOT,e),e=n.join(t,e),n.canonical(e).then(function(n){return n},function(){return e}).then(function(e){return n.contains(t,e)?{inner:n.join(n.ROOT,n.relativeFromDirectory(t,e)),outer:e}:o.reject("Can't find: "+JSON.stringify(r))})}function e(){return n.ROOT}var c=Object.create(i);return u.update(c,e),c.list=function(t){return r(t).then(function(t){return n.list(t.outer)}).then(null,function(n){return o.reject("Can't list "+JSON.stringify(t))})},c.open=function(t,e,i){return r(t).then(function(t){return n.open(t.outer,e,i)}).then(null,function(n){return o.reject("Can't open "+JSON.stringify(t))})},c.stat=function(t){return r(t).then(function(t){return n.stat(t.outer)}).then(null,function(n){return o.reject("Can't stat "+JSON.stringify(t))})},c.statLink=function(t){return r(t).then(function(t){return n.statLink(t.outer)}).then(null,function(n){return o.reject("Can't statLink "+JSON.stringify(t))})},c.canonical=function(n){return r(n).then(function(n){return n.inner}).then(null,function(t){return o.reject("Can't find canonical of "+JSON.stringify(n))})},c.makeDirectory=function(t){return r(t).then(function(t){return n.makeDirectory(t.outer)})["catch"](function(n){throw new Error("Can't make directory "+JSON.stringify(t))})},c.removeDirectory=function(t){return r(t).then(function(t){return n.removeDirectory(t.outer)})["catch"](function(n){throw new Error("Can't remove directory "+JSON.stringify(t))})},c.remove=function(t){return r(t).then(function(t){return n.remove(t.outer)})["catch"](function(n){throw new Error("Can't remove "+JSON.stringify(t))})},c.makeTree=function(t){return r(t).then(function(t){return n.makeTree(t.outer)})["catch"](function(n){throw new Error("Can't make tree "+JSON.stringify(t))})},c.removeTree=function(t){return r(t).then(function(t){return n.removeTree(t.outer)})["catch"](function(n){throw new Error("Can't remove tree "+JSON.stringify(t))})},o.when(n.canonical(t),function(n){return t=n,c})}var o=n("q"),i=n("./fs-boot"),u=n("./fs-common");r.exports=e}});