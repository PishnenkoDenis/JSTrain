//возвращает строку перед заглавными символами которой ставится пробел
function uppercaseSpace(str) {
  if (!str.length) return str;
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      res += ` ${str[i]}`;
    } else {
      res += str[i];
    }
  }

  return res;
}

String.prototype.reduce = function (cb, acc) {
  for (let elem of this) {
    acc += cb(acc, elem);
  }
  return acc;
};

function upperReduce(str) {
  return str.reduce(
    (acc, item) => (item === item.toUpperCase() ? ` ${item}` : item),
    ""
  );
}

function uppercaseSpaceArr(str) {
  return !str.length
    ? str
    : [...str].reduce((acc, item) =>
        item === item.toUpperCase() ? (acc += ` ${item}`) : (acc += item)
      );
}

function upperRegexp(str) {
  return str.replace(/([A-Z])/g, " $1");
}

console.log(uppercaseSpace("camelCasing")); //camel Casing
console.log(uppercaseSpace("identifier")); //identifier
console.log(uppercaseSpace("")); //""

console.log(uppercaseSpaceArr("camelCasing")); //camel Casing
console.log(uppercaseSpaceArr("identifier")); //identifier
console.log(uppercaseSpaceArr("")); //""

console.log(upperReduce("camelCasing")); //camel Casing
console.log(upperReduce("")); //""

console.log(upperRegexp("camelCasing")); //camel Casing
