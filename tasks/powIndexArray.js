//возвращает степень элемента по указанному индексу
function findPow(arr, n) {
  return arr[n] ? Math.pow(arr[n], n) : -1;
}

console.log(findPow([1, 2, 3, 4], 2)); //9
console.log(findPow([1, 2], 3)); //-1
