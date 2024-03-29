function sortArray(arr) {
  return arr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name === b.name) {
      return 0;
    }

    return 1;
  });
}

const users = [
  { name: "Yta", age: 20 },
  { name: "Anna", age: 18 },
];

console.log(sortArray(users));
