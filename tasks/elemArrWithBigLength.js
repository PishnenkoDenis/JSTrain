//возвращает элемент массива(строку) с наибоьшим кол-вом слов
function getManyWords(arr) {
  let max = arr[0].split(" ").length;
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    const length = arr[i].split(" ").length;
    if (length > max) {
      max = length;
      maxIndex = i;
    }
  }

  return arr[maxIndex];
}

//возвращает самую большую длину строки элемета
function getElemWithBigLength(arr) {
  if (!arr.length) return arr;

  return Math.max(
    ...arr.reduce((acc, item) => {
      acc.push(item.length);
      return acc;
    }, [])
  );
}

console.log(getElemWithBigLength(["one two three", "one two", "one"])); //13
console.log(getManyWords(["one two three", "one two", "one"])); //"one two three"
