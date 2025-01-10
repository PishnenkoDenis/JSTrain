// let a = "Hello";

// function first() {
//   console.log("first");
// }

// first();

// console.log(a);
//first Hello

let b = {
  firstName: "Jhon",
  lastName: "Week",
  sayName: function () {
    console.log(this.firstName);
  },
  sayLastName: () => {
    console.log(this.lastName);
  },

  say() {
    console.log(this.firstName);
  },
};

b.sayName(); //Jhon
b.say(); //Jhon

let c = b.sayName;

c(); //undefined | error

b.sayName.bind({ firstName: "Den" })(); //Den

b.sayName(); //Jhon
b.sayLastName(); //undefined

b.sayName.bind({ firstName: "Den" }).bind({ firstName: "Rick" })(); //Den
b.sayLastName.bind({ firstName: "Strong" })(); //undefind
