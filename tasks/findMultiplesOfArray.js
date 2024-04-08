//возвращает массив кратных чисел от a до b
function findMultiples(a, b) {
  const res = [];

  for (let i = a; i <= b; i += a) {
    res.push(i);
  }

  return res;
}

console.log(findMultiples(5, 25)); //[5,10,15,20,25]
console.log(findMultiples(1, 2)); //[1,2]
console.log(findMultiples(5, 7)); //[5]
