function sum(a, b) {
  if (b) return a + b;
  else {
    return function (b) {
      return a + b;
    };
  }
}

function eternalSum(num) {
  let res = num;
  console.log(res);
  return function func() {
    res = res + arguments[0];
    console.log(res);
    return func;
  };
}

function careerCall(a) {
  let res = a;

  return function func(b) {
    if (b) {
      res += b;
      return func;
    } else {
      return res;
    }
  };
}

function add(a, b) {
  if (typeof a === "undefined") return add;
  if (typeof b === "undefined") {
    return function func(c) {
      if (typeof c === "undefined") {
        return func;
      }
      return a + c;
    };
  }

  return a + b;
}

console.log(sum(20, 2));
console.log(sum(20)(2));

eternalSum(1);
eternalSum(1)(2)(3)(4);

console.log(careerCall(1)(2)());
console.log(careerCall(1)(2)(3)(4)());

console.log(add(1, 2));
console.log(add(1)(2));
console.log(add(1)()()()(2));
