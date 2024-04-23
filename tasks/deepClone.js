//неглубокое клонирование
function nonDeepClone(obj) {
  const res = Object.defineProperties(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );

  return res;
}

function deepNoClone(obj) {
  return Object.assign({}, obj);
}

function deepClone(obj) {
  return structuredClone(obj);
}

const a = {
  a: 5,
  b() {
    return this;
  },
  c: {
    d: [1, 2, 3],
    e: 22,
  },
  date: new Date(2022, 10, 22),
  set: new Set([1, 2, 3]),
};

const b = deepClone(a);
b.c.e = 42;

console.log(a);
