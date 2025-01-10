//кастомный promiseRace

function promiseRace(promises) {
  return new Promise((res, rej) => {
    let result = null;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((val) => {
          result = val;

          res(result);
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
}

const timer1 = () => {
  return new Promise((res) => {
    setTimeout(() => res("1"), 3000);
  });
};
const timer2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => rej("2"), 1000);
  });
};

promiseRace([timer1(), timer2()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
