//возвращает массив из интрвала a * b

function interval(a, b) {
  const res = [];
  let times = b;
  for (let i = a; times > 0; i += a) {
    res.push(i);
    times--;
  }
  return res;
}

console.log(interval(2, 5)); //[2,4,6,8,10]
console.log(interval(1, 10)); //[1,2,3,4,5,6,7,8,9,10]
