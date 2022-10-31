"use strict"

function mul() {
    var result = 1;
    var checkNum = false;
  
    for (var i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) == "number") {
          result *= arguments[i];
        checkNum = true;
        
      }
    }
    if (checkNum == false) {
        return 0;
    }
    
    return result;
    
}
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0