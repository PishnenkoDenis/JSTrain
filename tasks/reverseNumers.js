//возвращает перевернутое число
function reverseNum(num) {
  const isPositive = num >= 0;
  const arr = Array.from(Math.abs(num).toString()).reverse();

  const res = arr.reduce((acc, item) => {
    return acc + item;
  });

  return isPositive ? +res : -res;
}

console.log(reverseNum(123)); //321
console.log(reverseNum(-456)); //-654
console.log(reverseNum(1000)); //1
