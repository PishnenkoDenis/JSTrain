const input1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const input2 = [
  [1, 4],
  [4, 5],
];

function mergeIntervals(arr) {
  if (arr.length < 2) {
    return arr;
  }

  arr.sort((a, b) => a[0] - b[0]);

  let res = [arr[0]];

  for (let item of arr) {
    let recent = res[res.length - 1];

    if (recent[1] >= item[0]) {
      recent[1] = Math.max(recent[1], item[1]);
    } else {
      res.push(item);
    }
  }

  return res;
}

console.log(mergeIntervals(input1));
console.log(mergeIntervals(input2));
