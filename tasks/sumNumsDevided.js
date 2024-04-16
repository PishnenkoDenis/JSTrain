//возвращает сумму всех чисел от единицы до указанного числа,
//которые делятся на 3, 5, 7

function sumDevided(num, deviders) {
  if (num < deviders[0]) return -1;
  let sum = 0;

  for (let i = deviders[0]; i <= num; i++) {
    if (deviders.some((item) => i % item === 0)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumDevided(7, [3, 5, 7])); //21
