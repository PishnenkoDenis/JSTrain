//кастомный promiseAll

function promiseAll(promises) {
  let count = 0; //счетчик для того, чтобы определить, что все промисы выполнены перед тем,
  //как вернуть массив с результатами
  return new Promise((res, rej) => {
    const results = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((val) => {
          count++;
          results[i] = val;
        })
        .catch((err) => rej(err));
    }
    //проверка на то, что все промисы выполнены
    if (count === promises.length) {
      res(results);
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

const results = promiseAll([timer1(), timer2()]);
console.log(results);
