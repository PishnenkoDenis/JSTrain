//Преобразовывает каждую четную букву в заглавную каждую нечетную в строчную
function setCases(str) {
  str = str.toUpperCase();
  let res = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count = 0;
      res += str[i];
      continue;
    }
    if (count % 2 !== 0) {
      res += str[i].toLowerCase();
    } else {
      res += str[i];
    }
    count += 1;
  }

  return res;
}

function setCasesByArr(str) {
  return str.split(" ").map(mapWord).join(" ");
}

const mapWord = (word) => word.split("").map(mapChar).join("");
const mapChar = (char, i) => (i % 2 === 0 ? char.toUpperCase() : char);

function setCasesByRegexp(str) {
  return str.replace(
    /(\w{1,2})/g,
    (match) => match[0].toUpperCase() + (match[1] ? match[1] : "")
  );
}

console.log(setCases("String")); //StRiNg
console.log(setCases("Weird String Case")); //WeIrD StRiNg CaSe

console.log(setCasesByArr("String")); //StRiNg
console.log(setCasesByArr("Weird String Case")); //WeIrD StRiNg CaSe

console.log(setCasesByRegexp("String")); //StRiNg
console.log(setCasesByRegexp("Weird String Case")); //WeIrD StRiNg CaSe
