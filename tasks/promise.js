Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "c") //не выполняется
  .then((p) => p + "d")
  .finally((p) => p + "e") //ничего не возвращает
  .then((p) => console.log(p)); //abd

Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "c")
  .then((p) => p + "d")
  .finally((p) => p + "e")
  .then((p) => console.log(p));

Promise.resolve("foo")
  .then(Promise.resolve("bar"))
  .then(function (result) {
    console.log(result);
  });

Promise.resolve("foo")
  .then(function () {
    return Promise.resolve("bar");
  })
  .then(function (result) {
    console.log(result);
  });

Promise.resolve("foo")
  .then(() => Promise.resolve("bar"))
  .then(function (result) {
    console.log(result);
  });

//Event Loop
console.log(1);
new Promise((res, rej) => {
  console.log(2);
  setTimeout(() => console.log(3), -1);
}).then(() => console.log(4)); //Promise не резолвится и ничего не возвращает.
//Остается в состоянии pending
Promise.resolve(5)
  .then(console.log) //первый выполняется из очереди
  .then(() => console.log(6)); //третий
Promise.reject(7)
  .catch(console.log) //второй выполняется из очереди
  .then(() => console.log(8)); //четвертый
setTimeout(() => console.log(9), 0);
console.log(10);

//1,2,10, 5, 7, 6, 8, 3, 9
