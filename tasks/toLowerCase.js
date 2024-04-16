//приводит все символы строки к нижнему регистру, кроме тех, что не яв-ся буквами
function toLowerCase(str) {
  return str.toLowerCase().replace(/\W|\d/g, "");
}

//\W - Соответствует любому символу, который не является символом слова из основного латинского алфавита
//\d-Соответствует любой цифре
//\D - Соответствует любому символу, кроме цифры
// \s- пробел
//\S - Соответствует одному символу, кроме пробела

//приводит все символы строки к нижнему регистру, через методы работы с unicode
function toLowerCaseUnicode(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (
      //коды больших и маленьких букв
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      res += str[i];
    }
  }

  return res.toLowerCase();
}

console.log(toLowerCase("AsssCffgKLL:)??WEWQS"));
console.log(toLowerCase("STR    IN,./012G"));

console.log(toLowerCaseUnicode("AsssCffgKLL:)??WEWQS"));
console.log(toLowerCaseUnicode("STR    IN,./012G"));
