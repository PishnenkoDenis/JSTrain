function getUniques(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.includes(arr[i])) continue;
    else res.push(arr[i]);
  }

  return res;
}

function getUniqueBySet(arr) {
  return [...new Set(arr)];
}

function mapArray(arr) {
  const map = {};

  return arr.reduce((acc, item) => {
    if (!map[item]) {
      map[item] = true;
      return [...acc, item];
    }

    return acc;
  }, []);
}

console.log(getUniques([1, "asdf", "test", 15, {}, "asdf", {}])); //[1,asdf,test,15,{}, {}]
console.log(getUniqueBySet([1, "asdf", "test", 15, {}, "asdf", {}])); //[1,asdf,test,15,{}, {}]
console.log(mapArray([1, 1, 2, 3, 4, 5, 5, "test", "test"]));
