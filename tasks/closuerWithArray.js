//возвращает ф-ию, которая принимает число и возвращает еще одну функцию, которая принимает массив
//и возвращает массив с элементами умноженными на это число

function factoryFunc(n) {
  return function (arr) {
    return arr ? arr.map((item) => item * n) : 0;
  };
}

const factory = (n) => (arr) => arr.map((item) => item * n);

const func = factory(5);
const func2 = factoryFunc(5);
console.log(func([1, 2, 3])); //[5,10,15]
console.log(func2([1, 2, 3])); //[5,10,15]
