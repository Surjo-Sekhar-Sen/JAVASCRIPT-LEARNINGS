"use strict";
// const name = "Surjo";
// const hobby = "singing";

// console.log("Hello my name is "+ name + " and my hobby is " + hobby); //Old practice -> Not preferred!!
// console.log(`Hello my name is ${name} and my hobby is ${hobby}`); //Better practice -> STRING INTERPOLATION!!

const gameName1 = "SurjoGame01"; //String
const gameName2 = new String("SurjoGame2"); //Object
// console.log(typeof(gameName1));
// console.log(typeof(gameName2));

// console.log(gameName1.length) //EVEN THOUGH gameName1 IS A STRING, IT STILL CAN WORK WITH METHODS BCOZ
// //OF AUTOBOXING!!
// console.log(gameName2.length) //gameName2 IS ALREADY AN OBJECT!!

// console.log(gameName1[0]); //accessing like array elements, but it is not array!!
// console.log(gameName1[2]);
// console.log(gameName1.endsWith(2));
// console.log(gameName1.startsWith(2));
// console.log(gameName1.toUpperCase());
// console.log(gameName1.toLowerCase());
// console.log(gameName1.toLocaleLowerCase());

console.log(gameName1.charAt(2));
console.log(gameName1.indexOf('o'));