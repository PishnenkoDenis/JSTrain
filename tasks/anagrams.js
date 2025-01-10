function getAnagrams(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i].split("").sort().join("");
    if (map[key]) {
      map[key].push(arr[i]);
    } else {
      map[key] = [];
      map[key].push(arr[i]);
    }
  }

  return Object.values(map).sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    }
    if (a.length === b.length) {
      return 1;
    }
    return 0;
  });

  // return Object.entries(map)
  //   .sort((a, b) => a[1] - b[1])
  //   .map((item) => item[0]); //['агир', 'агор', 'аикр']
}

console.log(getAnagrams(["гора", "раки", "каир", "рога", "ирак", "игра"]));
