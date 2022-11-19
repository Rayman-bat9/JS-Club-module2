"use strict"
function Volume(number) {
    this.__number = 0;
    if (this.__volumeValid(number)) {
        this.__number = number;
    }
}

// Volume.prototype.getVolume = function () {
//     return this.__number;
// };

// Volume.prototype.setVolume = function (number) {
//     if (this.__volumeValid(number)) {
//         this.__number = number;
//     }
// };

Volume.prototype.volume = function (number) {
    if (number === undefined) {
        return this.__number;
    }
    else {
        if (this.__volumeValid(number)) {
            this.__number = number;
        }
    }
}

Volume.prototype.__volumeValid = function (number) {
    if (number >= 0 && number <= 100) {
        return true;
    }
    else {
        return false;
    }
};

var player = new Volume(32);
// console.log(player.getVolume());
// player.setVolume(109);
// console.log(player.getVolume());
// player.setVolume(-4);
// console.log(player.getVolume());
player.volume(4);
console.log(player.volume());