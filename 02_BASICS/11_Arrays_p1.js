"use strict";
let number = [16, 4, "surjo", true, 23.682, null, 'c']; //Different datatypes!!
console.log(number);

number = [16, 4, "surjo", true];
console.log(number);

const names = new Array("Surjo", "Sekhar", "Sen");
console.log(names);

const values1 = [23, 25, 27, 30];
const values2 = values1;
const boolcheck = (values1 === values2); //Shallow Copy -> Call by Reference!!
console.log(values1, values2);
console.log(boolcheck); 

const val = [12, 13, 14, 15];
console.log(val[0], val[1]);
console.log(val.length);

console.log(val.push(16));
console.log(val);

console.log(val.pop());
console.log(val);

console.log(val.unshift(11));
console.log(val);
console.log(val.shift());
console.log(val);


console.log(val.includes(13));
console.log(val.includes(20));
console.log(val.at(2));
console.log(val.indexOf(15));
console.log(val.indexOf(17));
const newArr = val.join();
console.log(val);
console.log(typeof val);
console.log(newArr);
console.log(typeof newArr);

const value = [10, 1, 12, 14, 100];
console.log("A: ", value);

const v1 = value.slice(1, 3); //TEMPORARY CHANGE!!
console.log(v1);
console.log("B: ", value);

const v2 = value.splice(1, 3); //PERMANENT CHANGE!!
console.log(v2);
console.log("C: ", value);