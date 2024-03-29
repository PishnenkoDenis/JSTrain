const input = [4, 1, 2, 1, 2];
const input2 = [1, 2, 1, 2, 3, 3];

function singleNumber(arr) {
  const map = arr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      return arr[i];
    }
  }

  return -1;
}

console.log(singleNumber(input));
console.log(singleNumber(input2));
