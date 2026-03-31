"use strict";
const num1 = 400;
console.log(num1); //Number -> 400(just value)

const num2 = new Number(300);
console.log(num2); //Object -> Number : 300

console.log(num1.toString());
console.log(typeof(num1.toString()));
console.log(num1.toString().length);

console.log(num1.toFixed(2)); //After decimal how many values/numbers to display
// NOTE:- .toFixed() returns a String value!!
const num3 = 500.52461;
console.log(num3.toFixed(3));
console.log(typeof(num3.toFixed(3))); 

console.log(num3.toPrecision(4)); //It basically rounds off the full value 
//and only give the total digits as asked!!
console.log(num3.toPrecision(6));
console.log(typeof(num3.toPrecision(4)));
// NOTE:- .toPrecision() returns String as well just like .toFixed()

const num4 = 1200000000;
console.log(num4.toLocaleString('en-US'));
console.log(num4.toLocaleString('en-IN'));
console.log(num4.length)

// ********************************** MATH ************************************
console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.sqrt(4));

console.log(Math.ceil(4.5));

console.log(Math.floor(4.5));

console.log(Math.round(4.5));

console.log(Math.trunc(4.5));

console.log(Math.pow(3, 4));

console.log(Math.min(4, 3, 5, 10, 25, 2));
console.log(Math.max(4, 3, 5, 10, 25, 2));

console.log(Math.random()); //Gives number between 0 to 0.99999....
console.log(Math.random() * 10); //Increase the range so it will give between 0 to 9.9999....
console.log((Math.random() * 10) + 1); //Make the minimum value 1 and max value 10.9999....
console.log(Math.floor(Math.random() * 10) + 1); //Give the floor integer value so no decimal value!!

const min = 15;
const max = 28;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)