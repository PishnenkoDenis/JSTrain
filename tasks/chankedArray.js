//возвращает массив с подмассивами из элементов
function chankArr(arr, n) {
  const res = [];
  for (i = 0; i <= arr.length - n; i++) {
    const chunk = [];
    for (let j = i; j < i + n; j++) {
      chunk.push(arr[j]);
    }
    res.push(chunk);
  }

  return res;
}

console.log(chankArr([3, 5, 8, 13], 3)); //[[3,5,8], [5,8,13]]
console.log(chankArr([3, 5, 8, 13], 2)); //[[3,5], [5,8], [8,13]]
