//удаляет из массива все числа которые больше длины строки
function getLehgthElems(str, arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > str.length) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}

console.log(getLehgthElems("pizza", [2, 3, 5, 8, 10, 5, 6, 5]));
