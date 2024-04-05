//разворачивает каждое второе слово в строке
function rewerseSecond(str) {
  if (!str) return null;
  const mapped = str.trim().split(" ");

  for (let i = 0; i < mapped.length; i++) {
    if ((i + 1) % 2 === 0) {
      mapped.splice(i, 1, mapped[i].split("").reverse().join(""));
    }
  }

  return mapped.join(" ");
}

console.log(rewerseSecond("Reverse this string, please!"));
console.log(rewerseSecond("I really don't like reversing string"));
console.log(rewerseSecond(""));
