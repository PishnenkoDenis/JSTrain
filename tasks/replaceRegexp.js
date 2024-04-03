const regex = new RegExp(/(\w)(\w*)(\s|$)/g);

function pigItByRegExp(str) {
  return str.replace(regex, "$2$1ay$3");
}
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigItByRegExp("Pig latin is cool")); // igPay atinlay siay oolcay
