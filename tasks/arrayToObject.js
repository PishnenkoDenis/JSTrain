function arrToObj(arr) {
  return arr.reduceRight((acc, item) => {
    const map = {};
    map[item] = acc;

    return map;
  }, {});
}

const array = ["first", "second", "third"];

console.log(arrToObj(array)); //{ first: { second: { third: {} } } }
