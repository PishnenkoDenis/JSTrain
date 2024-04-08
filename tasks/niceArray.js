//возвращает true/false если элементам в массиве соответствуют правила n - 1 или n + 1
function niceArray(arr) {
  if (!arr.length) return false;
  const map = arr.reduce((acc, item) => {
    acc[item] = 1;
    return acc;
  }, {});

  return arr.every((item) => map[item - 1] || map[item + 1]);
}

console.log(niceArray([2, 10, 9, 3])); //true
console.log(niceArray([3, 4, 5, 7])); //false
