"use strict"

function SmartHouse() {
    this.__devices = [];
}

SmartHouse.prototype.addDevice = function (device) {
    this.__devices.push(device);
}

SmartHouse.prototype.removeDevice = function (device) {
    this.__devices.splice(device);
}

