//возвращает массив нечетных чисел до num
function getOddNumsFor(num) {
  const res = [];

  for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }

  return res;
}

//возвращает кол-во нечетных чисел в num
function getOddNums(num) {
  return Math.floor(num / 2);
}

console.log(getOddNumsFor(7));
console.log(getOddNumsFor(15));
