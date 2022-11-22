"use strict"
function Summator(firstN, secondN) {
    this.__firstNumber = 0;
    this.__secondNumber = 0;
    this.result = 0;
    if (this.sumValid(firstN, secondN)) {
        this.__firstNumber = firstN;
        this.__secondNumber = secondN;
    }
    this.__calc = function () {
        this.result = this.__firstNumber + this.__secondNumber;
    }
}

Summator.prototype.sumGS = function (firstN, secondN) {
    if (this.sumValid(firstN, secondN)) {
        this.__firstNumber = firstN;
        this.__secondNumber = secondN;
        this.__calc();
    }
    else {
        return this.result;
    }
};

Summator.prototype.sumValid = function (firstN, secondN) {
    if (typeof(firstN) === 'number' && typeof(secondN) === 'number') {
        return true;
    }
    else {
        return false;
    }
};

var sum = new Summator(3, 4);

sum.sumGS(4,4);
console.log(sum.sumGS());
sum.sumGS(10,3);
console.log(sum.sumGS());