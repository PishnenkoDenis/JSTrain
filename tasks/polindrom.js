function palindrom(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
}

function isPalindromNumber(num) {
  if (num < 0) return false;
  if (num % 10 === 0) return false;
  if (num < 10) return true;

  let reverse = 0;

  while (num > reverse) {
    reverse *= 10;
    reverse += num % 10;
    num = Math.trunc(num / 10); //обрезает и возвращает дробную часть
  }

  return num === reverse || num === Math.trunc(reverse / 10);
}

console.log(palindrom("anna"));
console.log(palindrom("abra"));

console.log(isPalindromNumber(121));
console.log(isPalindromNumber(-121));
console.log(isPalindromNumber(10));
