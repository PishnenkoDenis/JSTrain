//возвращает числа при каждом вызове на 1 больше
function getId() {
  let id = 0;

  return function () {
    return id++;
  };
}

const id = getId();

console.log(id()); //0
console.log(id()); //1
console.log(id()); //2
console.log(id()); //3
