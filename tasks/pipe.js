const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const minus = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const first = pipe([times(2), times(3)]);

console.log(first(2)); //12

const second = pipe([times(2), plus(3), times(4)]);

console.log(second(2)); //28

function pipe(arr) {
  return function (arg) {
    return arr.reduce((acc, item, index) => {
      acc += item(acc);
      return acc;
    }, 0);
  };
}
