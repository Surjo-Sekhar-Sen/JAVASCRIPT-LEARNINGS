"use strict";

let arr = [1, 2, 3, 4, 5];
//FOR-OF LOOP IN ARRAYS
for(let num of arr){ //HERE arr IS AN OBJECT!!
    console.log(num);
}

let str = "Hello Surjo!!";
//FOR-OF LOOP IN STRINGS
for(let val of str){
    if(val == " "){
        continue;
    }
    console.log(`String's Character: ${val}`);
}

//WELL WE CAN ALSO GET THE INDEX VALUES IF WE WANT!!
//INCORRECT WAY:-
let arr2 = ["spiderman", "superman", "batman", "thor", "ironman", "flash"];
for(let [i, val] of arr2){
    console.log(`Hero Number ${i+1}: ${val}`);
}

//CORRECT WAY:-
let arr3 = ["spiderman", "superman", "batman", "thor", "ironman", "flash"];
for(let [i, val] of arr3.entries()){
    console.log(`Hero Number ${i+1}: ${val}`);
}

//MAP AND FOR-OF LOOP
const map1 = new Map();
map1.set("IN", "India");
map1.set("AUS", "Australia");
map1.set("FR", "France");
map1.set("USA", "United States Of America");
map1.set("IN", "India"); //WON'T BE ADDED TO THE MAP 
// AS IT IS THE SAME VALUE!!
console.log(map1);

for(let [key, value] of map1){
    console.log(`${key} stands for: ${value}`);
}

//DOES for..of WORK WITH OBJECT
const games1 = {
    game1 : "Spiderman 2",
    game2 : "Prince of Persia",
    game3 : "Tomb Raider",
    game4 : "RDR2"
}
// for(let [key, value] of games1){
//     console.log(`${key}: ${value}`); 
//     //THIS WILL THROW AN ERROR AS object IS NOT ITERABLE!!
//     //THEY ARE UNORDERED AND DON'T HAVE Symbol.iterator PROPERTY!!
// }

//FOR-IN LOOP
const games2 = {
    game1 : "Spiderman 2",
    game2 : "Prince of Persia",
    game3 : "Tomb Raider",
    game4 : "RDR2"
}

for(let key in games2){
    console.log(`${key}: ${games2[key]}`);
    //HERE WE CAN ONLY ACCESS ITS KEYS USING FOR-IN LOOP!!
    //AND BY USING KEYS WE CAN ACCESS THE VALUES INSIDE IT!!
    //THIS HAPPENS BCOZ objects HAVE ENUMERABLE PROPERTY WITH THEM!! 
}

//FOR-IN LOOPS WITH ARRAYS
const arr4 = ["spiderman", "ironman", "superman", "batman"];
for(let key in arr4){
    console.log(`${Number(key)+1}: ${arr4[key]}`);
    //HERE THE INDICES OF THE ARRAY IS THE KEY!!
    //THE KEY COMES IN FORM OF STRING THATSWHY WE CONVERT IT TO 
    //NUMBER FIRST!!
}

//FOR-IN LOOPS WITH MAP
const map2 = new Map();
map2.set("IN", "India");
map2.set("AUS", "Australia");
map2.set("FR", "France");
map2.set("USA", "United States Of America");

for(let key in map2){
    console.log(`${key}: ${map2[key]}`);
    //THIS GIVES NO RESULT AS MAPS ARE NOT ENUMERABLE!!
    //BUT OBJECT AND ARRAYS ARE!!
}