"use strict";
// const num1 = 400;
// console.log(num1); //Number -> 400(just value)

// const num2 = new Number(300);
// console.log(num2); //Object -> Number : 300

// console.log(num1.toString());
// console.log(typeof(num1.toString()));
// console.log(num1.toString().length);

// console.log(num1.toFixed(2)); //After decimal how many values/numbers to display
//NOTE:- .toFixed() returns a String value!!
// const num3 = 500.52461;
// console.log(num3.toFixed(3));
// console.log(typeof(num3.toFixed(3))); 
// const num3 = 500.52461;
// console.log(num3.toPrecision(4)); //It basically rounds off the full value 
// //and only give the total digits as asked!!
// console.log(num3.toPrecision(6));
// console.log(typeof(num3.toPrecision(4)));
// NOTE:- .toPrecision() returns String as well just like .toFixed()

const num4 = 1200000000;
console.log(num4.toLocaleString('en-US'));
console.log(num4.toLocaleString('en-IN'));
console.log(num4.length)