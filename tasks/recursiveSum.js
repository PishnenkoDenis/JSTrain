function recursiveSum(n) {
  if (n < 10) {
    return n;
  }

  const sum = Array.from(n.toString()).reduce(
    (acc, item) => acc + Number(item),
    0
  );

  return recursiveSum(sum);
}

console.log(recursiveSum(16));//7
console.log(recursiveSum(942));//15 -> 6
console.log(recursiveSum(132189));
