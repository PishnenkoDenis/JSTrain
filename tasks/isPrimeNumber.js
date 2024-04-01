//Поиск простых чисел
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function getPrimes(num) {
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return primes;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(getPrimes(120));
