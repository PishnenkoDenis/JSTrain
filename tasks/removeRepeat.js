function removeDupes(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) continue;
    else arr.push(str[i]);
  }

  return arr.join("");
}

console.log(removeDupes("abcd")); // -> 'abcd'
console.log(removeDupes("aabbccdd")); // -> 'abcd'
console.log(removeDupes("abcddbca")); // -> 'abcd'
console.log(removeDupes("abababcdcdcd")); // -> 'abcd'
