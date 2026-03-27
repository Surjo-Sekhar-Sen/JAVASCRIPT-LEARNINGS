"use strict";

//Simple comparisons!!
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 == 2);

//Bit difficult because of different Datatypes!!
console.log("2" > 1); //In these implicit conversion is done by JS engine to check!! 
console.log("2" >= 2);

//More Weird 
console.log(null > 0); //During Comparison, conversion is also done! So, 0 > 0? => false
console.log(null < 0); // 0 < 0? => false
console.log(null == 0); //During equality check, conversion is not done! So, IS no value Equal to 0? => false  
console.log(null >= 0); // 0 >= 0? => true
console.log(null <= 0); // 0 <= 0? => true

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

//STRICT CHECK
console.log("2" == 2); //GIVES TRUE, BCOZ THIS IS SIMPLE CHECKING!!
//HERE CONVERSION IS DONE AND ONLY VALUE IS CHECKED WHETHER EQUAL OR NOT!!

console.log("2" === 2); //GIVES FALSE, BCOZ THIS IS STRICT CHECKING!!
//HERE NOT ONLY VALUE BUT ALSO THE DATA TYPE IS CHECKED, AND THATSWHY THIS IS PREFERRED!!