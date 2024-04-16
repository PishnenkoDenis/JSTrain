//возвращает true если строка содержит одинаковое кол-во букв x и o

function isSameAmount(str) {
  str = str.toLowerCase();

  let x = "";
  let o = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x += str[i];
    }
    if (str[i] === "o") {
      o += str[i];
    }
  }

  return x.length === o.length;
}

function isSameAmountSplit(str) {
  str = str.toLowerCase();
  return str.split("x").length === str.split("o").length;
}

console.log(isSameAmount("xo")); //true
console.log(isSameAmount("xxOo")); //true
console.log(isSameAmount("xxxm")); //false
console.log(isSameAmount("Oo")); //false

console.log(isSameAmountSplit("xo")); //true
console.log(isSameAmountSplit("xxOo")); //true
console.log(isSameAmountSplit("xxxm")); //false
console.log(isSameAmountSplit("Oo")); //false
