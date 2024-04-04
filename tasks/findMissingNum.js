//возвращает число, которое отсутствует во втором массиве
function findMissingNumReduce(arr1, arr2) {
  const sum1 = arr1.reduce((acc, item) => {
    return acc + item;
  });

  const sum2 = arr2.reduce((acc, item) => {
    return acc + item;
  });

  return Math.abs(sum1 - sum2);
}

function findMissingNum(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    } else return arr1[i];
  }
}

console.log(findMissingNumReduce([1, 2, 2, 3], [1, 2, 3])); //2
console.log(findMissingNumReduce([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])); //8
console.log(findMissingNumReduce([6, 1, 3], [6, 1])); //3

console.log(findMissingNum([1, 2, 2, 3], [1, 2, 3])); //2
console.log(findMissingNum([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])); //8
console.log(findMissingNum([6, 1, 3], [6, 1])); //3
