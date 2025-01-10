async function loop() {
  console.log(1);

  const promise = new Promise((res) => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      res("done");
      console.log(4);
    });
  });

  console.log(5);

  const result = await promise;
  console.log(6);
  console.log(result);

  return "Result";
}

console.log(loop()); //1 2 5 Promise {pending} 7 3 4 6 done
console.log(7);
// console.log(loop().then(console.log)); // 1 2 5  Promise {pending} 7 3 4 6 done Result
