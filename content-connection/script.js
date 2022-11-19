'use strict'
var user = {
    name: "Tom",
};

function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
 
user.func = format;

var tomFormat = (function(){
    user.func("<<<",">>>");
})// Ваш код

tomFormat("<<<", ">>>"); // "<<<Tom>>>"
