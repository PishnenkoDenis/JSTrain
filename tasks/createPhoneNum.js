function createPhoneNum(arr) {
  const first = arr.slice(0, 3).join("");
  const second = arr.slice(3, 6).join("");
  const third = arr.slice(6).join("");

  return `(${first}) ${second}-${third}`;
}

console.log(createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //(123) 456-7890
