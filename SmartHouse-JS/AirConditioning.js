"use strict"

function AirConditioning () {
    Device.call(this);
    this.__temperature = 17;
    this.__fanMode = 'easy';
    this.__modeList = ['easy','normal','turbo'];
}

AirConditioning.prototype = Object.create(Device.prototype);
AirConditioning.prototype.constructor = AirConditioning;

AirConditioning.prototype.temperatureValid = function (temperature) {
    return temperature >= 0 && temperature <= 30;
};

AirConditioning.prototype.getTemperature = function () {
    return this.__temperature;
};

AirConditioning.prototype.setTemperature = function (temperature) {
    if (AirConditioning.prototype.temperatureValid(temperature)){
        this.__temperature = temperature;
    }
};


AirConditioning.prototype.modeValid = function (fanMode) {
    return this.__modeList.includes(fanMode);
};

AirConditioning.prototype.setMode = function (fanMode) {
    if (AirConditioning.prototype.modeValid.call(this, fanMode)) {
        this.__fanMode = fanMode;
    }
};

AirConditioning.prototype.getMode = function () {
    return this.__fanMode;
};

AirConditioning.prototype.modeHelp = function () {
    return "Список режимов: " + this.__modeList;
};

