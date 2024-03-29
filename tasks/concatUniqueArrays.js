const a = [1, 3, 5, 6, 7];
const b = [2, 4, 6, 7];
//функция,которая возвращает массив с уникальными элементами
function concatUnique(a, b) {
  const arr = Array.from(new Set(a.concat(b)));

  return arr.sort((a, b) => a - b);
}

function concatArrays(a, b) {
  const arr = a.concat(b);
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.includes(arr[i])) continue;
    else res.push(arr[i]);
  }

  return res.sort((a, b) => a - b);
}

console.log(concatUnique(a, b));
console.log(concatArrays(a, b));
