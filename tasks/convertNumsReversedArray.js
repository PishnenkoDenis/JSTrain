//возвращает массив с обратным порядком от числа
function convertReversed(num) {
  const reversed = Array.from(num.toString()).reverse();

  return reversed.map(Number);
}

console.log(convertReversed(348597)); // [7,9,5,8,4,3]
