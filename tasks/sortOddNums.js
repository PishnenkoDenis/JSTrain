//отсортировать четные числа и оставить их на месте
function sortOdd(arr) {
  const sorted = arr.filter((item) => item % 2 === 0).sort((a, b) => a - b);

  return arr.map((item) => {
    if (item % 2 === 0) {
      return sorted.shift();
    }

    return item;
  });
  // .sort((a, b) => a - b);
}

console.log(sortOdd([1, 8, 3, 9, 12, 13, 2, 5, 6]));
