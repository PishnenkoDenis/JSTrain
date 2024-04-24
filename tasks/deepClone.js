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

function deepStructClone(obj) {
  return structuredClone(obj);
}

function deepClone(obj) {
  const primitives = ["number", "symbol", "string", "boolean", "function"];
  if (primitives.includes(typeof obj)) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map((val) => {
      return deepClone(val);
    });
  } else if (typeof obj === "object" && obj !== null) {
    let res = {};
    for (let k in obj) {
      res[k] = deepClone(obj[k]);
    }
    return res;
  }
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
console.log(b);
