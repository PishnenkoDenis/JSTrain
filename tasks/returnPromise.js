const p = new Promise(() => {
  return 1;
});

p.then((a) => console.log(a)); //исполнение кода не дойдет до console.log/Ничего

const pr = new Promise((res) => {
  console.log(1);
  res(2);
});

pr.then((a) => console.log(a));
console.log(3);
//1 3 2
