"use strict";

//FOREACH
let arr3 = ["spiderman", "superman", "batman", "thor", "ironman", "flash"];
arr3.forEach(function (hero){
    console.log(hero);
})

//USING ARROW FUNCTION AS CALLBACK FUNCTION!!
arr3.forEach((heroes) => {
    console.log(heroes);
})

//EXTERNAL FUNCTION AS CALLBACK FUNCTION
let arr4 = ["spiderman", "superman", "batman", "thor", "ironman", "flash"];
function heroess(item){
    console.log(item);
}
arr4.forEach(heroess);

let arr5 = ["spiderman", "superman", "batman", "thor", "ironman", "flash"];
arr5.forEach((item, index, array) => {
    console.log(item, index, array);
})

// GETTING OBJECT ENTRIES FORM AN ARRAY USING FOREACH!!
let arrvalue = [
    {
        lang: "Javascript",
        langfile: "js"
    },
    {
        lang: "C++",
        langfile: "cpp"
    },
    {
        lang: "Python",
        langfile: "py"
    }
]
arrvalue.forEach((item) => {
    console.log(`${item.lang}'s file extension is: .${item.langfile}`);
})

//PROBLEM WITH forEach()
const simple = ["hii", "namaste", "hello", "greetings"];
const check = simple.forEach((item) => {
    return item; //THIS ACTUALLY RETURNS undefined!! 
    //THIS IS THE PROBLEM WITH forEach() THAT IT DOES NOT ALLOW ANY
    //PROPER CODE TO BE PERFORMED ON THE ELEMENTS AND JUST CONSOLE.LOG THEM MOSTLY!!
});
console.log(check);