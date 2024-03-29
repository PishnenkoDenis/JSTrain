const inp1 = "leetcode";
const inp2 = "loveleetcode";
const inp3 = "aabb";

function firstUniqueChar(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (map.has(current)) {
      map.set(current, map.get(current) + 1);
    } else {
      map.set(current, 1);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqueChar(inp1));
console.log(firstUniqueChar(inp2));
console.log(firstUniqueChar(inp3));
