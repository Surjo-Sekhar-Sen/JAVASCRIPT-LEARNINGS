"use strict";

const userLoggedin = true;
if(userLoggedin){
    console.log("Executed inside 1");
}

if(2 == "2"){ //not strict checking, just checks values!!
    console.log("Executed inside 2");
}

if(2 === "2"){ //Strict checking!!
    console.log("Executed inside 3");
}

if(3 != 2){
    console.log("Executed inside 4");
}

if(3 <= 2){
    console.log("Executed inside 5");
}

const temperature = 32;
if(temperature > 40){
    console.log("Temperature greater than 40");
} 
else if(temperature > 30 && temperature < 35){
    console.log("Temperature is between 30 to 35");
}
else{
    console.log("Temperature less than 40");
}

// SCOPING IDEA WITH IF-ELSE!!
const score = 200;
if(score > 100){
    let power = "fly";
    console.log(`Your power is: ${power}`);
}
// console.log(`Your power is: ${power}`); //IT CANNOT BE ACCESSED AS power IS DECLARED
// USING let WHICH IS BLOCK SCOPED AND CANNOT BE ACCESSED GLOBALLY!! 

if(score > 150){
    var power = "fly";
    console.log(`Your power is: ${power}`);
}
console.log(`Your power is: ${power}`); //THIS WILL NOT THROW ERROR AS power IS
// DECLARED IN var WHICH MAKES IT GLOBALLY AVAILABLE WHICH IS IN PRACTICE NOT GOOD!!

const balance = 1000;
if(balance > 500) console.log("Balance is more than 500"), console.log("Maintain balance"); 
// HERE THIS IS CALLED AS AN IMPLICIT SCOPE AS WE DON'T PUT {} BRACES TO SURROUND THE CODE!!
// THIS CAN BE USED IF CODE IN THE IF-ELSE IS OF ONE LINE BUT STILL WE CAN WRITE MULTIPLE
// LINES USING COMMA(,) AND AT THE END PUT SEMI-COLON(;)!!

// LOGICAL OPERATORS!!
const aadharcard = true;
const digilocker = true;
const account = false;
if(aadharcard && digilocker && account){
    console.log("Logged in");
}
else if((aadharcard && digilocker) || account){
    console.log("Create an account first!!");
}

//SWITCH STATEMENT
const month = 3;
switch (month){
    case 1:
        console.log("January");
        break; //BREAK IS NECESSARY TO WRITE!!
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        //WE DIDN'T WRITE break HERE!!
    case 4:
        console.log("April");
        break;
    default:
        console.log("Enter valid value");
        break;
}