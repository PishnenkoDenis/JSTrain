function sumOfNums(arr, target) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push(arr[i]);
        res.push(arr[j]);
      }
    }
  }

  return res;
}

console.log(sumOfNums([2, 7, 11, 15], 9));
