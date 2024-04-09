//определяет правильную последовательность скобок
function getClosuers(str) {
  let stack = [];
  let breackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    if (isClosedBracket(curr)) {
      if (breackets[curr] !== stack.pop()) return false;
    } else {
      stack.push(curr);
    }
  }

  return stack.length === 0;
}

function isClosedBracket(char) {
  return [")", "}", "]"].indexOf(char) > -1;
}

console.log(getClosuers("()")); //true
console.log(getClosuers("()[]{}")); //true
console.log(getClosuers("(]")); //false
console.log(getClosuers("{[]}")); //true
console.log(getClosuers("([)]")); //false
console.log(getClosuers("{[[]{}]}()()")); //true
