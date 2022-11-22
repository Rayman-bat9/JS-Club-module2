"use strict"

var smartHouse1 = new SmartHouse();

var cond1 = new AirConditioning();

var lightning = new Lightning();

var jal = new Jalousie();

smartHouse1.addDevice(cond1);

smartHouse1.addDevice(lightning);

smartHouse1.addDevice(jal);


cond1.setMode('tuossad');
console.log(cond1.getMode());
cond1.setMode('turbo');
console.log(cond1.getMode());


lightning.setPower(93);
console.log(lightning.getPower());
lightning.turnOn();

console.log(jal.getStatus());
jal.timeCheck();
console.log(jal.getStatus());
