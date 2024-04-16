//взвращает строку в обратном порядке
function reverse(targ) {
  for (var i = targ.length - 1, o = ""; i >= 0; o += targ[i], i--) {}
  return o;
}

console.log(reverse("string")); //gnirts
console.log(reverse([1, 2, 3, 4, 5])); //54321
console.log(reverse("some string of words")); //54321
