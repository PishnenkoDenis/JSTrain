const nums = [3, 5, -4, 8, 11, 1, -1, 6];
//возвращает массив с двумя числами, сумма которых равна заданной
function sumOfNums(arr, target) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push(arr[i]);
        res.push(arr[j]);
      }
    }
  }

  return res;
}

console.log(sumOfNums(nums, 10));
