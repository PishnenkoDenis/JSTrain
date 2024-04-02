//возвращает перевернутую строку

function reverseStr(str) {
  return !str ? str : str.split("").reverse().join("");
}

function reverseStrByFor(str) {
  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return res;
}

console.log(reverseStr("pizza"));
console.log(reverseStrByFor("pizza"));
