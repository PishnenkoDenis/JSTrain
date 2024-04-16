const regex = new RegExp(/(\w)(\w*)(\s|$)/g);

function pigItByRegExp(str) {
  return str.replace(regex, "$2$1ay$3");
}

//меняет слова в строке местами
function replaceWords(str) {
  return str.replace(/(\w+)\s(\w+)/, "$2 $1");
}

//вставляет пробел перед словом с заглавной буквы
function upperRegexp(str) {
  return str.replace(/([A-Z]|[А-Я])/g, " $1");
}

console.log(pigItByRegExp("Pig latin is cool")); // igPay atinlay siay oolcay

console.log(replaceWords("Santa Fe")); //Fe Santa
console.log(upperRegexp("santaFe")); //santa Fe
console.log(upperRegexp("русскоеСлово")); //русское Слово
