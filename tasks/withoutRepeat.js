const array = [1, 1, 2, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 8];

function withoutRepeat(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.includes(arr[i])) continue;
    else res.push(arr[i]);
  }

  return res;
}

function withoutRepeatLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(arr[i], 1);
      i--;
    }
  }

  return arr.length;
}
console.log(withoutRepeat(array));
console.log(withoutRepeatLength(array));
