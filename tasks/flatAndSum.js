function flatSum(arr) {
  return arr
    .toString()
    .split(",")
    .reduce((acc, item) => acc + Number(item), 0);
}

function flat(arr) {
  let total = 0;

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      total += flat(item);
    } else {
      total += item;
    }
  });

  return total;
}

console.log(flatSum([1, 1, [1, [1, 2], 1], [1]])); //8
console.log(flat([1, 1, [1, [1, 2], 1], [1]])); //8
