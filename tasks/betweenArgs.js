//Функция, которая принимая аргументами два целых числа, возвращает массив чисел от первого аргумента до второго

function betweenArgs(a, b) {
  const res = [];

  for (let i = a; i <= b; i++) {
    res.push(i);
  }

  return res;
}

console.log(betweenArgs(2, 22));
