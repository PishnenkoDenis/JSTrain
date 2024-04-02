const friends = [
  { name: "alex", pizzas: ["cheese", "pepperoni"] },
  { name: "mike", pizzas: ["salsmi", "europe"] },
  { name: "alex", pizzas: ["meat"] },
  { name: "alex", pizzas: ["fish"] },
];
//возвращает массив с элементами pizzas
function getElemsByName(arr) {
  return arr.reduce((acc, item) => {
    return [...acc, ...item.pizzas];
  }, []);
}

console.log(getElemsByName(friends));
