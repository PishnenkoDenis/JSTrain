var o = {};
var i = 0;
(function () {
  (o.a = "a"), i++;
})();

console.log(o, i); //{ a: 'a' } 1
(function (o, i) {
  (o.b = "b"), i++;
})(o, i);

console.log(o, i); //{ a: 'a', b: 'b' } 1

var a = {};
var b = [];

console.log(a === b); //false
console.log(a == b); //false
console.log(typeof a == typeof b); //true
console.log(typeof a === typeof b); //true
