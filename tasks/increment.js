const increment = () => {
  let count = 0;
  return () => (count += 1);
};

const counter = increment();

console.log(counter());
console.log(counter());
console.log(counter());
//1 2 3

console.log(increment()());
console.log(increment()());
console.log(increment()());
1 1 1

var a = {
  b: "123",
  c: function () {
    console.log(this.b);
  },
};

a.b = "321";

var fn = a.c ? a.c : undefined;
fn(); //undefined
