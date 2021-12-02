window.__require = function t(e, n, i) {
function r(c, s) {
if (!n[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(a, !0);
if (o) return o(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
}
var u = n[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return r(e[c][1][t] || t);
}, u, u.exports, t, e, n, i);
}
return n[c].exports;
}
for (var o = "function" == typeof __require && __require, c = 0; c < i.length; c++) r(i[c]);
return r;
}({
Day2: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6d2330aUMFMUp5X9oVqB6Yo", "Day2");
cc.Class({
extends: cc.Component,
properties: {
point1: {
default: 1,
displayName: "Player's point",
serializable: !0,
type: cc.Integer,
visible: !0,
set: function(t) {
this._point1 = t;
},
get: function() {
return this._point1;
}
},
point2: {
default: 2,
displayName: "Oppenent's point",
serializable: !1,
type: cc.Integer,
visible: !0,
set: function(t) {
this._point2 = t;
},
get: function() {
return this._point2;
}
}
},
onLoad: function() {
cc.log("property with serialization true " + this.point1);
cc.log("property with serialization false " + this.point2);
var t = new (cc.Class({
name: "booker",
ctor: function() {
this.name = "booker";
}
}))();
cc.log(t.name);
cc.log(this.children);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Day2" ]);