"use strict";
const name = "Surjo";
const hobby = "singing";

console.log("Hello my name is "+ name + " and my hobby is " + hobby); //Old practice -> Not preferred!!
console.log(`Hello my name is ${name} and my hobby is ${hobby}`); //Better practice -> STRING INTERPOLATION!!

const gameName1 = "SurjoGame01"; //String
const gameName2 = new String("SurjoGame2"); //Object
console.log(typeof(gameName1));
console.log(typeof(gameName2));

console.log(gameName1.length) //EVEN THOUGH gameName1 IS A STRING, IT STILL CAN WORK WITH METHODS BCOZ
//OF AUTOBOXING!!
console.log(gameName2.length) //gameName2 IS ALREADY AN OBJECT!!

console.log(gameName1[0]); //accessing like array elements, but it is not array!!
console.log(gameName1[2]);

console.log(gameName1.endsWith(2));
console.log(gameName1.startsWith(2));

console.log(gameName1.toUpperCase());
console.log(gameName1.toLowerCase());
console.log(gameName1.toLocaleLowerCase());

console.log(gameName1.charAt(2));
console.log(gameName1.indexOf('o'));

const newstring1 = gameName1.substring(0, 5);
console.log(newstring1);

console.log(gameName2.slice(-9, 5)); 
console.log(gameName2.slice(-5, -1)); 
console.log(gameName2.slice(-1,));  //Here there is no step value like python, only start and end!!

const variable = "     Surjo  ";
console.log(variable.trim());
console.log(variable.trimStart());
console.log(variable.trimEnd());
console.log(variable.trimRight());
console.log(variable.trimLeft());

const value = "https://surjosen@gmail.com//surjo%20sen" //Usually in browser if u write
//surjo sen, so there is a space in between, this is filled up with %20 by the browser by default!!
//To avoid this we can basically use replace method in objects!!
console.log(value.replace("%20", "-"));

console.log(value.includes("@gmail.com"));
console.log(value.includes("@yahoo.com"));

const str = "surjo-sekhar-sen";
console.log(str.split("-")); //This gets displaayed in form of array!!
console.log(str.split("-", 2)); //We can also put limit using limit parameter to how many elements to get printed!!

const a = "a";
const b = "B";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}