//возвращает сумму двух самых малых чисел массива
function sumOfSmall(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

console.log(sumOfSmall([5, 8, 12, 19, 22])); //13
console.log(sumOfSmall([15, 28, 4, 2, 43])); //6
