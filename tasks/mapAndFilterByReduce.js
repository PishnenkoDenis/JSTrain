function map(arr, cb) {
  return arr.reduce((acc, item, index) => {
    return [...acc, cb(item, index, arr)];
  }, []);
}

function filter(arr, cb) {
  return arr.reduce((acc, item, index) => {
    if (cb(item, index, arr)) {
      return [...acc, item];
    }
    return acc;
  }, []);
}
