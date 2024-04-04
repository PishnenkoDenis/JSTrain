//возвращает сумму чисел массива, исключая самое малое и самое большое число
function summNumsReduce(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const amount = arr.reduce((acc, item) => {
    return acc + item;
  });

  return amount - (max + min);
}

console.log(summNumsReduce([1, 2, 3, 4, 5])); //9
console.log(summNumsReduce([6, -2, 1, 8, 10])); //16
