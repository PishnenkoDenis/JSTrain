function reverseArray(arr) {
  const res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }

  return res;
}

function reverseByMap(arr) {
  return [...arr].map(arr.pop, arr); //второй аргумент значение, используемое как this при вызове коллбэка
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseByMap([1, 2, 3, 4, 5]));
