//возвращает последовательность от параметра до 1 в массиве

function reverseSequence(num) {
  const res = [];

  for (let i = num; i > 0; i--) {
    res.push(i);
  }

  return res;
}

console.log(reverseSequence(5)); //[5,4,3,2,1]
