const debounce = (cb, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      cb(args);
    }, delay);
  };
};

const sum = (a) => console.log(a * 2);

const debouncedSum = debounce(sum, 1000);

debouncedSum(2);
console.log("b" + "a" + +"a" + "a");
console.log(2 + "2");
