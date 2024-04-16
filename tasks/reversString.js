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
//разворачивает символы в словах, но оставляет порядок слов в строке прежним
function reverseStandBy(str) {
  const arr = str.split(" ");

  return arr
    .reduce((acc, item) => {
      acc.push(item.split("").reverse().join(""));
      return acc;
    }, [])
    .join(" ");
}

const replacer = (match) => match.trim().split("").reverse().join("") + " ";

//разворачивает символы в словах, но оставляет порядок слов в строке прежним
function reverseReplace(str) {
  return str.replace(/\w*\s|\w*$/g, replacer);
}

console.log(reverseStr("pizza"));
console.log(reverseStrByFor("pizza"));
console.log(reverseStrByFor("pizza string word")); //drow gnirts azzip
console.log(reverseStandBy("pizza string word")); //azzip gnirts drow
console.log(reverseReplace("pizza string word")); //azzip gnirts drow
