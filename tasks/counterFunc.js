function createCount() {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  return {
    count, //count передан по значению, а не по ссылке,
    //поэтому значение его изменяться не будет при вызове ф-ий
    //они будут изменять значение в своем замыкании
    increment,
    decrement,
  };
}

const res = createCount();

res.increment();
res.increment();

console.log(res.count); //0
