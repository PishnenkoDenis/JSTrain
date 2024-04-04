//возвращает указанное кол-во элементов массива
function takeElems(arr, count) {
  return arr ? arr.slice(0, count) : arr;
}

function takeElemsFor(arr, count) {
  const res = [];

  for (let i = 0; i < arr[count - 1]; i++) {
    res.push(arr[i]);
  }

  return res;
}

console.log(takeElems([1, 2, 3, 4, 5, 6], 3));
console.log(takeElemsFor([1, 2, 3, 4, 5, 6], 3));
