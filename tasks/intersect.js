const a = [1, 2, 2, 1];
const b = [2, 2];

const c = [4, 9, 5];
const d = [9, 4, 9, 8, 4];

function intersect(a, b) {
  const res = [];

  let map = a.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < b.length; i++) {
    const current = b[i];
    let count = map[current];

    if (count && count > 0) {
      res.push(current);
      map[current] -= 1;
    }
  }

  return res;
}

console.log(intersect(a, b));
console.log(intersect(c, d));
