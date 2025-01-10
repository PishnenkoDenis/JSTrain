function reverseReduce(str) {
  const words = str.split(" ");

  return words.reduce((acc, item) => {
    const reversed = item.split("").reverse().join("") + " ";

    return acc + reversed;
  }, "");
}

const replacer = (str) => str.trim().split("").reverse().join("") + " ";

function replaceStr(str) {
  return str.replace(/\w+\s|\w+$/g, replacer);
}
console.log(reverseReduce("Some string words"));
console.log(replaceStr("Some string words"));
