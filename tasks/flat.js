function flat(arr) {
  if (arr.length === 0) return arr;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flat(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

function flatReduce(arr) {
  if (arr.length === 0) return arr;
  return arr.reduce((acc, current) => {
    if (Array.isArray(current)) {
      return [...acc, ...flatReduce(current)];
    } else {
      return [...acc, current];
    }
  }, []);
}

console.log(flat([1, [2, 3], 4, [5, 6, 7], [8, [9, 10]]]));
console.log(flatReduce([1, [2, 3], 4, [5, 6, 7], [8, [9, 10]]]));
