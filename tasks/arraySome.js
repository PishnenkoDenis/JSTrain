Array.prototype.mySome = function (cb) {
  this.forEach((item, index, arr) => {
    if (cb(item, index, arr)) {
      return true;
    }
    return false;
  });
};

console.log([2, 5, 8, 1, 4].mySome((el) => el > 10)); //false
console.log([12, 5, 8, 1, 4].mySome((el) => el > 10)); //true
