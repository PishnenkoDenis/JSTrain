const pow = (a) => a * a;

const memo = (fn) => {
  const cache = new Map();

  return function (...args) {
    const argStr = args.join(""); //привести массив аргументов к строке, так как ссылка на массив аргументов
    if (cache.has(argStr)) {
      //всегда будет разной и проверка не состоится
      console.log("cache");
      return cache.get(argStr);
    }
    console.log("func");
    const res = fn(...args);
    cache.set(argStr, res);
    return res;
  };
};

const memoized = memo(pow);

console.log(memoized(4));
console.log(memoized(4));
