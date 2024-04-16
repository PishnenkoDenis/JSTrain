//сортирует массив имен в соответствии с масиивом роста
function sortByHeight(names, heights) {
  const map = names.reduce((acc, name, index) => {
    acc[name] = heights[index];
    return acc;
  }, {});

  return [...names].sort((a, b) => map[b] - map[a]); //не мутирует исходный массив
}

console.log(sortByHeight(["Mary", "Jhon", "Emma"], [180, 165, 170])); //[Mary, Emma, Jhon]
