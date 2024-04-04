//возвращает строку, овторяющуюся определенное кол-во раз
function repeatString(count, str) {
  return str.repeat(count);
}

console.log(repeatString(6, "1")); //'111111'
console.log(repeatString(2, "Hello")); //'HelloHello'
