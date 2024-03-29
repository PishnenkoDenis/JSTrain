function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function allAnagrams(arr) {
  const sorted = arr.map((item) => item.split("").sort().join(""));

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[0] !== sorted[i]) return false;
  }
  return true;
}

function isArrayAnagrams(arr) {
  const res = {};

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i].split("").sort().join();
    if (res[key]) {
      res[key].push(arr[i]);
    } else {
      res[key] = [];
      res[key].push(arr[i]);
    }
  }

  return Object.values(res);
}

console.log(isAnagrams("abcd", "bdac"));
console.log(isAnagrams("abcd", "bdaf"));
console.log(isAnagrams("abcd", "bdafas"));

console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false

console.log(isArrayAnagrams(["abcd", "dcba", "erty", "ytre"]));
