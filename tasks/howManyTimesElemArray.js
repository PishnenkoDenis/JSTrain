const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
//Сколько раз каждый элемент встречается в массиве
function howManyTimes(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
}

//вернуть массив с уникальными значениями
function onlyUnique(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.includes(arr[i])) continue;
    else res.push(arr[i]);
  }

  return res;
}

function onlyUniqueForeach(arr) {
  const unique = {};

  arr.forEach((item) => (unique[item] = true));

  return Object.keys(unique);
}
console.log(howManyTimes(fruits));
console.log(onlyUnique(fruits));
console.log(onlyUniqueForeach(fruits));
