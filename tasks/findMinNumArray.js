//возвращает самое маленькое число в массиве
function findMinNumMath(arr) {
  return Math.min(...arr);
}

function findMinNum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

console.log(findMinNumMath([34, 15, 88, 2])); //2
console.log(findMinNumMath([34, 15, 88, 2, 1])); //1
console.log(findMinNum([34, 15, 88, 2])); //2
console.log(findMinNum([34, 15, 88, 2, 1])); //1
