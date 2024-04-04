//возвращает средне-фрифметическое массива

function getAvarageReduce(arr) {
  return Math.floor(
    arr.reduce((acc, item) => {
      return acc + item;
    }) / arr.length
  );
}

function getAvarage(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return Math.floor(res / arr.length);
}

console.log(getAvarageReduce([2, 2, 2, 2])); //2
console.log(getAvarageReduce([1, 2, 3, 4, 5])); //3
console.log(getAvarageReduce([1, 1, 1, 1, 1, 1, 2])); //1
console.log(getAvarage([2, 2, 2, 2]));
console.log(getAvarage([1, 2, 3, 4, 5]));
console.log(getAvarage([1, 1, 1, 1, 1, 1, 2]));
