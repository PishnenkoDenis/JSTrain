//возвращает массив с диапазоном нечетных чисел
function fillArray(num) {
  const res = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }

  return res;
}

console.log(fillArray(3)); //[1,3]
console.log(fillArray(5)); //[1,3,5]
console.log(fillArray(7)); //[1,3,5,7]
