//проверяет все ли символы в строке в верхнем регистре

String.prototype.isUppercase = function () {
  const arr = this.split("");
  if (!arr.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toUpperCase()) {
      return false;
    }
  }
  return true;
};

String.prototype.isUpper = function () {
  return this.toUpperCase() === this.toString();
};

console.log("UPPER".isUppercase());
console.log("lower".isUppercase());
console.log("NaN".isUppercase());
console.log("".isUppercase());
