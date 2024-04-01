const vowels = ["a", "e", "i", "o", "u"];
//Поиск гласных в строке
function findVowels(str) {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      res.push(str[i]);
    } else continue;
  }
  return res.length;
}

function findVowelsCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count += 1;
  }

  return count;
}

function findVowelsMatch(str) {
  const matched = str.match(/[aeiou]/gi); //gi - глобально и независимо от регистра.Возвращает массив совпадений
  return matched ? matched.length : 0;
}

console.log(findVowels("hello"));
console.log(findVowelsCount("hello"));
console.log(findVowelsMatch("hello"));
console.log(findVowels("why"));
