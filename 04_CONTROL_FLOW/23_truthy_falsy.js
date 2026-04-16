"use strict";
//FALSY -> false, 0, -0, 0n(Big Int), null, undefined, ""(empty string), NaN !!
// TRUTHY -> true, " "(non-empty string), [], {}, function(){}, other than the falsy values!!
const value1 = "Hello";
if(value1){
    console.log("Executed 1");
}
const value2 = "";
if(value2){
    console.log("Executed 2");
}
const value3 = 0;
if(value3){
    console.log("Executed 3");
}
const value4 = []; //EMPTY ARRAY
if(value4){
    console.log("Executed 4");
}
const value5 = null;
if(value5){
    console.log("Executed 5");
}

//IF EMPTY ARRAY, OBJECT, FUNCTION GIVES TRUE VALUES THEN HOW TO CHECK 
//WHETHER THEY  ARE EMPTY OR NOT!! 
//FOR CHECKING WHETHER ARRAY IS EMPTY!!
const arr = [];
if(arr.length === 0){
    console.log("Array is Empty!!");
}else{
    console.log("Array is not Empty!!");
}

//FOR CHECKING WHETHER OBJECT IS EMPTY!!
const obj = {};
if(Object.keys(obj).length === 0){
    //Object.keys(obj) -> This returns an array containing keys!
    //But since the object is empty no key is returned and thus empty array!!
    //Then we apply the length property of array and check it!!!
    console.log("Object is Empty!!");
}else{
    console.log("Object is not Empty!!");
}

//NULLISH COALESCING OPERATOR
let val1;
val1 = 5 ?? 10; //This takes the first value!!
console.log(val1);
val1 = null ?? 5; //Null is not taken!! Instead 5 is taken!!
console.log(val1);
val1 = undefined ?? 16; //Undefined is not taken!!
console.log(val1);
val1 = null ?? "The value is not present!!";
console.log(val1);

//TERNARY OPERATOR
let price = 500;
const result = price >=300 ? "Price is greater than 300!!" : "Price is lesser than 300!!";
console.log(result);