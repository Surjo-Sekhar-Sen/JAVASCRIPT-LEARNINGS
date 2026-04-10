"use strict";

let score1 = 1;
while(score1 <= 10){
    console.log(`Score is: ${score1}`);
    score1++;
}
console.log("Final score: ", score1);
//HERE WE SEE 11 AS AT THE LAST THE score VALUE INCREASES BY 1
//AND THEN COMES OUT OF THE LOOP!!

//WHILE LOOPS IN ARRAYS
const heroes = ["spiderman", "superman", "flash", "batman", "ironman", "thor"];
let i = 0;
while(i < heroes.length){
    console.log(`Hero Number ${i+1}: ${heroes[i]}`);
    i++;
}

//DO-WHILE LOOP
let score2 = 1;
do{
    console.log(`Score is: ${score2}`);
    score2++;
}while(score2 <= 10);

//IMPORTANT THING ABOUT DO-WHILE LOOPS
//IN DO-WHILE LOOPS THE CODE EXECUTION IS DONE FIRST 
//THEN THE CONDITION IS CHECKED!!
let score3 = 12;
do{
    console.log(`Score is: ${score3}`); //FOR ONCE THIS CODE WILL EXECUTE AND DO THE PRINTING!!
    score3++; //ONCE THIS CODE IS DONE EXECUTING!!
}while(score3 <= 10); //IT CHECKS THE CONDITION, IF IT DOESN'T FIT THE LOOP IS BROKEN!!