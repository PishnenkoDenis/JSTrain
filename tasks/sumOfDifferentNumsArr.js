//возвращает разницу между парами элементов массива в порядке убывания
function sumOfDifferent(arr) {
  if (!arr.length) return 0;
  const sorted = arr.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 1; i < sorted.length; i++) {
    sum += sorted[i - 1] - sorted[i];
  }

  return sum;
}

console.log(sumOfDifferent([1, 2, 10]));
