function palindrom(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
}

console.log(palindrom("anna"));
console.log(palindrom("abra"));
