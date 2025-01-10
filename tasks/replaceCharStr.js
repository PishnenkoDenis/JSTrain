function replaceChar(str) {
  const separators = ["-", "_"];
  let result = "";
  let upper = false;

  for (let i = 0; i < str.length; i++) {
    if (separators.includes(str[i])) {
      if (str.length > 0) {
        upper = true;
      }
      continue;
    } else {
      upper || (i === 0 && str[i] !== str[i].toUpperCase())
        ? (result += str[i].toUpperCase())
        : (result += str[i]);
      upper = false;
    }
  }

  return result;
}

console.log(replaceChar("what-a-nice-day-today")); //WhatANiceDayToday
console.log(replaceChar("What_A_Nice_Day_today")); //WhatANiceDayToday
console.log(replaceChar("What-a_Nice-Day_today")); //WhatANiceDayToday
