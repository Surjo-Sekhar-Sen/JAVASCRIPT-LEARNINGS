"use strict";
//PRIMITIVE DATA TYPES!! -> Call By Value
let score = 200; //Number
let name = "Surjo"; //String
let boolval = true | false; //Boolean
let bigNum = 37282872818738193n; //BigInt
let value; //Undefined
let sum = null; //Null

let s1 = Symbol(123); //Symbol
let s2 = Symbol(123); //Both the values look same but are different bcoz of the Symbol datatype!!
let s3 = s1 == s2; //Simple checking
let s4 = s1 === s2; //Strict checking
console.log(s3, s4);

//NON PRIMITIVE DATA TYPES!! -> Call By Reference
let arr = ["Surjo", 23, [24, 45, 68]]; //Array
console.log(arr, "\n");

let obj = {
    name : "Surjo",
    age : 21,
    marks : {
        physics : 68,
        maths : 78,
        chemistry: 57
    }
}; //Object
console.log(obj, "\n");

let vals = function(){
    console.log("Hello World!!");
}
console.log(vals());

console.log(typeof(score)); //Number
console.log(typeof(name)); //String
console.log(typeof(boolval)); //Boolean
console.log(typeof(bigNum)); //BigInt
console.log(typeof(value)); //Undefined -> undefined
console.log(typeof(sum)); //Null -> object
console.log(typeof(s1)); //Symbol
console.log(typeof(s2)); //Symbol

console.log(typeof(arr)); //Array -> object
console.log(typeof(obj));  //Object -> object
console.log(typeof(vals)); //Function -> function
