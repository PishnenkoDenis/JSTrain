function convertStr(obj) {
  //O(n2)
  const result = [];

  for (let i = 0; i < obj.length; i++) {
    if (result.includes(obj[i])) {
      continue;
    } else {
      result.push(obj[i]);
    }
  }

  return result;
}

function convert(obj) {
  //O(n)
  const result = [];
  let lastitem = null;

  for (let i = 0; i < obj.length; i++) {
    if (lastitem !== obj[i]) {
      result.push(obj[i]);
      lastitem = obj[i];
    }
  }

  return result;
}

console.log(convertStr("AAABBBCCCD")); //[A, B, C, D]
console.log(convertStr("AAAaBbCCCcD")); //[A, a, B, b, C, c, D]
console.log(convertStr([1, 1, 2, 2, 3, 4, 4])); // [1,2,3,4]

console.log(convert("AAABBBCCCD")); //[A, B, C, D]
console.log(convert("AAAaBbCCCcD")); //[A, a, B, b, C, c, D]
console.log(convert([1, 1, 2, 2, 3, 4, 4])); // [1,2,3,4]
