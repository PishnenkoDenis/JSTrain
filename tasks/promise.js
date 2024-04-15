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
