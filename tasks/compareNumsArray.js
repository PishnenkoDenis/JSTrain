//сравнивает массивы элементы одного из которых возведены в квадрат
function compare(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr2.length; i++) {
    const idx = arr1.indexOf(Math.sqrt(arr2[i]));
    if (idx === -1) return false;
    arr1[idx] = null;
  }
  return true;
}

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(compare(a, b)); //true
console.log(compare([2, 3], [4, 9])); //true
