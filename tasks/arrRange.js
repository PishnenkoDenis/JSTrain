const range = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);

  if (!sorted.length) {
    return "";
  }
  const res = [String(sorted[0])];
  let interval = false;
  for (let i = 1; i <= sorted.length; i++) {
    let current = sorted[i];
    let prev = sorted[i - 1];
    if (current - prev === 1) {
      interval = true;
      continue;
    }
    if (interval) {
      res[res.length - 1] += `-${prev}`;
      interval = false;
    }

    if (current) {
      res.push(current);
    }
  }

  return res.join();
};

console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); //'0-5,8-9,11'
console.log(range([1, 4, 3, 2])); //'1-4'
