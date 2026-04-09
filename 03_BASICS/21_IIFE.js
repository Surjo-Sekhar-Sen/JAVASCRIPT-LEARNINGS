"use strict";
//IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION!!
//NAMED IIFE!!
(function connect(){
    console.log("DATABASE CONNECTED!!");
})(); //SEMI-COLON IS NECESSARY TO LET JS ENGINE KNOW WHEN TO STOP THE IIFE EXECUTION!!

//ARROW FUNCTIONS AS IIFE!!
//UN-NAMED IIFE!!
(() => {
    console.log("ANOTHER DATABASE CONNECTED!!");
})();

//PASSING PARAMETERS IN IIFE!!
((name) => {
    console.log(`${name}'s DATABASE CONNECTED!!`);
})("Surjo");