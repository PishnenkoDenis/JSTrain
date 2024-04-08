//возвращает сумму чисел массива
function sumOfArray(arr) {
  return arr.length ? arr.reduce((acc, item) => acc + item) : arr;
}

console.log(sumOfArray([1, 5.2, 4, 0, -1])); //9.2
console.log([]); //0
