function sumItems(arr) {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

function maxOfArray(arr) {
  return Math.max(...arr);
}
console.log(sumItems([1, 2, 3, 4, 5]));
console.log(maxOfArray([1, 2, 3, 4, 5]));
