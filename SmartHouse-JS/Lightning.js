"use strict"

function Lightning() {
    Device.call(this);
    this.__power = 0;
}

Lightning.prototype = Object.create(Device.prototype);
Lightning.prototype.constructor = Lightning;

Lightning.prototype.powerValid = function (power) {
    return power >= 0 && power <= 100;
};

Lightning.prototype.setPower = function(power) {
    if (Lightning.prototype.powerValid(power)) {
        this.__power = power;
    }
};

Lightning.prototype.getPower = function() {
    return this.__power;
};
