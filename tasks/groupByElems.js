const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "stas", age: 18 },
];
//возвращает объект с сгруппированными по определенному ключу эллементами
function groupByElems(arr) {
  const res = {};

  arr.forEach((item) => {
    if (res[item.age]) {
      res[item.age].push(item);
    } else {
      res[item.age] = [];
      res[item.age].push(item);
    }
  });

  return res;
}

console.log(groupByElems(students));
