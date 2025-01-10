function currying(fn) {
  return function cb(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return cb.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const test = currying(sum);

console.log(test(1, 2, 3, 4, 5));//15
console.log(test(1, 2)(3, 4)(5));//15
