//разбивает строку с преобразованием
function splitStr(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i].repeat(i + 1);
    res.push(char[0].toUpperCase() + char.slice(1).toLowerCase());
  }
  return res.join("-");
}

function splitStrByStr(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    res +=
      str[i].toUpperCase() +
      str[i].toLowerCase().repeat(i) +
      (i < str.length - 1 ? "-" : "");
  }

  return res;
}

console.log(splitStr("abcd")); //A-Bb-Ccc-Dddd
console.log(splitStr("cwAt")); //C-Ww-Aaa-Tttt

console.log(splitStrByStr("abcd")); //A-Bb-Ccc-Dddd
console.log(splitStrByStr("cwAt")); //C-Ww-Aaa-Tttt
