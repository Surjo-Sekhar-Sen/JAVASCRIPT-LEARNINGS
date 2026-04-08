"use strict";
const user1 = new Object(); //NON-LITERAL WAY OR CONSTRUCTOR WAY -> CREATES SINGLETON
console.log(user1); //Returns empty object!!

const user2 = {}; //LITERAL WAY -> DOESN NOT CREATE SINGLETON
console.log(user2); //Also returns empty object!!

//NESTED OBJECTS!!
const regularUser = {
    age : 21, 
    fullname : {
        userfullname : {
            firstname : "Surjo",
            middlename : "Sekhar",
            lastname : "Sen"
        }
    },
    hobby : "Singing"
}
console.log(regularUser.fullname); //Returns the inside object!!
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.middlename);
console.log(regularUser.fullname.userfullname.lastname);
console.log(regularUser.fullname?.userfullname.lastname); 
console.log(regularUser.fullname?.userfullname.username);//Usually when we get data from API
// //Sometimes we might not get the values we need thatswhy this ? will act as if scenario that if there
// //is no value then undefined will be returned!!
console.log(regularUser.fullname?.userfullname.username?? "User name not found!!");
//Using ?? operator it will return the value we write if the value is found undefined!!

//.assign() method!!
var user3 = {
    name : "Surjo",
    age : 21,
    location : "Bengaluru"
}
var user3extra = {
    hobby : "Singing",
    degree : "BE"
}
var user3full = Object.assign(user3, user3extra); //Here user3 is the target and source too!!
// //So it user3 will be changed permanently too and the values will be stored in the new variable also!!
console.log(user3full);
console.log(user3);

//BETTER PRACTICE FOR assign()
var user3 = {
    name : "Surjo",
    age : 21,
    location : "Bengaluru"
}
var user3extra = {
    hobby : "Singing",
    degree : "BE"
}
var user3full = Object.assign({}, user3, user3extra); //Here target object is empty!!
//So the user3 object will not get effected!!
console.log(user3full);
console.log(user3);

const obj = {
    name : "Surjo",
    age : 21
}
var val1 = Object.create(obj);

//SHALLOW COPY
const obj1 = { first: "a", second: "b", fifth: {sixth: "e"}};
const obj2 = { third: "c", fourth: "d"};
const obj3 = Object.assign({}, obj1, obj2); //obj1 's 5: {6: "e"} got shallow copied!!
//So only its reference is copied and if we change it in obj1 the obj3 value will also change!!
//Other values will remain same as the copy will not be effected!!

console.log(obj3);
obj1.first = "z"; //THIS WILL BE ONLY CHANGED IN obj1, NO EFFECT IN obj3!!
console.log(obj1);
console.log(obj3);
obj1.fifth.sixth = "f"; //THIS WILL CHANGE IN ALL!!
console.log(obj1);
console.log(obj3); 

var val1 = {a : 1, b : 2, c : 3};
var val2 = {d : 4, e : 5};
var val3 = {...val1, ...val2}; //USING SPREAD OPERATOR WE CAN USE TO ADD OBJECTS!!
// console.log(val3);

const users = [ //WHEN WE GET DATA FROM APIS, USUALLY WE GET IN ARRAYS OR JSON FORM!!
    //LIKE HERE WE ARE GETTING MULTIPLE USER VALUES AND IDS WHICH WE WANT TO ACCESS!!
    {
        id : 1,
        name : "Surjo"
    },
    {
        id : 2,
        name : "Sekhar"
    },
    {
        id : 3,
        name : "Sen"
    }
]
console.log(users[0].id); //WE CAN ACCESS IT IN ARRAY FORM AND THEN WE CAN USE DOT(.)
//TO GO INTO ITS PROPOERTIES!!
console.log(users[2].name);

console.log(Object.hasOwnProperty("name")); //IT CHECKS WHETHER THERE IS A PROPERTY!!
// GIVES TRUE/FALSE VALUE!!
console.log(Object.hasOwnProperty("location"));

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));