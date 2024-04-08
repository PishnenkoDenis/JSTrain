var x = 10;

function someFn() {
  console.log(x);
}

someFn();

(function () {
  var x = 20;
  someFn();
})();

(function (innerFunc) {
  var x = 30;
  innerFunc();
})(someFn);

//10, 10, 10

var func = function () {
  console.log(x);
  var x = 22;
};

func();

for (var i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i); //6,6,6,6,6
  }, i * 500);
}

for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); //6,6,6,6,6
  }, i * 500);
}

for (let i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i); //0,1,2,3,4,5
  }, i * 500);
}

const some = {
  text: "Hello",

  getText() {
    return `${this.text}`;
  },

  writeText: () => {
    return `${this.text}`;
  },

  consoleText: function () {
    return `${this.text}`;
  },
};

var a = 1;

function first() {
  var a = 2;

  function second() {
    a++;
    var a = 3;
    console.log(a);
  }

  second();
}

first(); //3

console.log("getText", some.getText()); //Hello
console.log("writeText", some.writeText()); //undefined
console.log("consoleText", some.consoleText()); //Hello
