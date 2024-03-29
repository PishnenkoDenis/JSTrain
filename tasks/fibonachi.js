function fibonachi(num) {
  if (num <= 0) return 0;
  if (num <= 2) return 1;

  return fibonachi(num - 1) + fibonachi(num - 2);
}

console.log(fibonachi(7));
