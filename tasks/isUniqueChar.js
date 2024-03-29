function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.lastIndexOf(char) !== i) {
      return false;
    }
  }

  return true;
}

console.log(isUnique("abcdef")); //true
console.log(isUnique("12345")); //true
console.log(isUnique("abcABC")); //true
console.log(isUnique("abcadef")); //false
