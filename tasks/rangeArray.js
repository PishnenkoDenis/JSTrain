//возвращает массив с диапазоном с указанными параметрами
function range(start, end, step = 1) {
  const args = Object.values(arguments);
  if (args.length === 1) {
    start = 0;
    end = args[0];
  }
  const arr = [];

  for (let i = start; i < end; i += !step ? 1 : step) {
    arr.push(!step ? start : i);
  }

  return arr;
}

console.log(range(10)); //[0,1,2,3,4,5,6,7,8,9]
console.log(range(1, 11)); //[1,2,3,4,5,6,7,8,9,10]
console.log(range(0, 30, 5)); //[0,5,10,15,20,25]
console.log(range(1, 4, 0)); //[1,1,1]
