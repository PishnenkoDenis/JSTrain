function promiseAll(promises) {
  let count = 0;
  return new Promise((res, rej) => {
    const results = [];

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          count++;
          results[i] = result;

          if (count === promises.length) {
            res(results);
          }
        })
        .catch((err) => rej(err));
    }
  });
}

const timer1 = () => {
  return new Promise((res) => {
    setTimeout(() => res("1"), 1000);
  });
};
const timer2 = () => {
  return new Promise((res) => {
    setTimeout(() => res("2"), 3000);
  });
};

promiseAll([timer1(), timer2()]).then(console.log).catch(console.error);
