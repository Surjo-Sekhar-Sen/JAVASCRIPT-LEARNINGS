"use strict";

// dynamically typed variable..
let name = "Surjo"; //Datatype -> String 
let num = 20; //Datatype -> Number
let nums = 2.45; //Number
let isData = true; //boolean
let isNew = false; //boolean
let value; //undefined -> It means without data, the type cannot be determined!!
let vals = null; //null -> It means empty

console.table([name, num, nums, isData, isNew, value, vals])

//IMPORTANT:-
console.log(typeof(undefined));
console.log(typeof(null));