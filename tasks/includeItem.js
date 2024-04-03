function includeItem(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }

  return false;
}

console.log(includeItem([1, 2, 3, 4], 4));
