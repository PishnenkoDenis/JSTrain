function exchangeWord(str) {
  return !str
    ? str
    : str
        .split(" ")
        .map(() => "string")
        .join(" ");
}

console.log(exchangeWord(""));
console.log(exchangeWord("sting some new"));
