"use strict";
//STACK MEMORY!! -> (CALL BY VALUE)
let val1 = 2005;
let val2 = val1;
console.log(val1);
console.log(val2, "\n");

val2 = 2010; //val2 is changed, but bcoz the val2 had a copy of val1 value thatswhy this change won't 
//affect the original value of val1!!
console.log(val1);
console.log(val2, "\n");

//ALSO
val1 = 2001; //Re-assign
console.log(val1);
console.log(val2, "\n"); 

//HEAP MEMORY!! -> (CALL BY REFERENCE) -> BCOZ HERE OBJECTS ARE PRESENT, SO KINDOF LIKE PYTHON!!
let obj1 = {
    name : "Surjo",
    age : 21
};
let obj2 = obj1;
console.log(obj1, obj2);

obj2.name = "Sekhar"; //Changed the object's attribute name in obj2 -> This will affect 
//the name attribute in obj1 too!!
console.log(obj1, obj2); //Both will be same!!