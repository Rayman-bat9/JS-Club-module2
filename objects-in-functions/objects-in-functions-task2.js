"use strict"
var max = 0;
var maxSalaries = function (obj) {
    for (var key in obj) {
        if (obj[key] > max) {
            max = obj[key];
        }
    }
    return max;
};

var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};

console.log(maxSalaries(salaries));
