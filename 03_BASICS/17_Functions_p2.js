"use strict";
function valuelist(num1){
    return num1;
}
console.log(valuelist(200, 300, 400, 500)); //HERE WE WILL SEE ONLY 200
//GETTING PRINTED AS THE num1 CAN ONLY STORE ONE VALUE!!

//TO ALLOW MULTIPLE VALUES WE USE REST OPERATOR!!
function values(...num1){ //HERE THE VALUES WILL BE TAKEN AND STORED IN AN ARRAY!!
    return num1;
}
console.log(values(200, 300, 400, 500, 1000));

//WHAT IF WE WRITE LIKE THIS:
function newvalues(val1, val2, ...num){
    console.log(typeof(num)); //RTEURNS object AS IT IS AN ARRAY!!
    return num;
}
console.log(newvalues(200, 500, 2000, 4000)); //HERE THE VALUE 200 WILL BE STORED IN val1, 
//AND 500 IN val2, THE REST OF THEM WILL GET STORED IN num ARRAY!!

//USING OBJECTS IN FUNCTIONS!!
const val = {
    name : "Surjo",
    price : 199
}

function obj(anyobj){
    return `${anyobj.name} you have purchased of about ${anyobj.price} rupees!!`
}
console.log(obj(val));

//IF WE DON'T PROVIDE CORRECT PROPERTIES TO THE OBJECT IN FUNCTIONS THEN THE VALUES WILL COME AS UNDEFINED!!
function obj1(anyobj){
    return `${anyobj.name} you have purchased of about ${anyobj.prices} rupees!!`
}
console.log(obj1(val));

console.log(obj({ //WE CAN EVEN GIVEN OUR OWN OBJECT DIRECTLY INSTEAD OF TAKING REFERENCE!!
    name : "Sekhar",
    price : 4999
}))

//USING ARRAYS IN FUNCTIONS!!
const arr = [200, 400, 600, 800];
function returnsecondvalue(somearray){
    return `The second value of the array is: ${somearray[1]}`;
}
console.log(returnsecondvalue(arr));
console.log(returnsecondvalue([4000, 50000, 20000, 500]));