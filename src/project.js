window.__require = function e(r, t, o) {
function n(c, i) {
if (!t[c]) {
if (!r[c]) {
var l = c.split("/");
l = l[l.length - 1];
if (!r[l]) {
var s = "function" == typeof __require && __require;
if (!i && s) return s(l, !0);
if (u) return u(l, !0);
throw new Error("Cannot find module '" + c + "'");
}
}
var _ = t[c] = {
exports: {}
};
r[c][0].call(_.exports, function(e) {
return n(r[c][1][e] || e);
}, _, _.exports, e, r, t, o);
}
return t[c].exports;
}
for (var u = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
HelloWorld: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
text: "Hello, World!"
},
onLoad: function() {
this.label.string = this.text;
},
update: function(e) {}
});
cc._RF.pop();
}, {} ],
use_reversed_rotateTo: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "7ee64J1QnZGeYM2rOM1tg59", "use_reversed_rotateTo");
cc.RotateTo._reverse = !0;
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "use_reversed_rotateTo" ]);