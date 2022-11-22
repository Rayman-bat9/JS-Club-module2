"use strict"

function Jalousie() {
    Device.call(this);
    this.__timeToOpen = 10; 
    this.__timeToClose = 16;
    setInterval(Jalousie.prototype.timeCheck.bind(this), 5000);
}

Jalousie.prototype = Object.create(Device.prototype);
Jalousie.prototype.constructor = Jalousie;

Jalousie.prototype.open = function () {
    this.__status = true;
};

Jalousie.prototype.close = function () {
    this.__status = false;
};


Jalousie.prototype.setTime = function (open, close) {
    this.__timeToOpen = open;
    this.__timeToClose = close;
};

Jalousie.prototype.timeCheck = function () {
    var a = new Date().toString();
    var arrTime = a.split(' ');
    var time = arrTime[4].slice(0,2);
    if (Number(time) > this.__timeToClose) {
        this.__status = false;
    }
    else if (Number(time) > this.__timeToOpen) {
        this.__status = true;
    }
};



