"use strict";
let score = 39;

console.log(typeof(score));

score = "33abc";
console.log(typeof(score));
let valueInscore = Number(score);
console.log(valueInscore); //We see this as NaN which means Not a Number!! Which comes when some value cannot be a number!! This was done for not getting errors while runtime!! SO IT IS MORE LIKELY A DATATYPE!!
console.log(typeof(valueInscore)); //IMPORTANT:- THE TYPE OF NaN is Number, Thatswhy the typeof may confuse and cause trouble if a user puts wrong value as input in the value!!

let scores = 50;
let booleanInscores = Boolean(scores);
console.log(booleanInscores);
console.log(typeof(booleanInscores));

let val1 = "";
let val2 = "Surjo";
let val3 = 0;
let boolval1 = Boolean(val1);
let boolval2 = Boolean(val2);
let boolval3 = Boolean(val3);
console.log(boolval1);
console.log(boolval2);
console.log(boolval3);

let value = null;
let NumInvalue = Number(null);
console.log(NumInvalue); //NOTE:- This will give value as 0!!
console.log(typeof(NumInvalue));

let values; //This means the datatype is Undefined!!
let NumsInvalues = Number(values);
console.log(NumsInvalues); //NOTE:- This will come as NaN!!
console.log(typeof(NumsInvalues));