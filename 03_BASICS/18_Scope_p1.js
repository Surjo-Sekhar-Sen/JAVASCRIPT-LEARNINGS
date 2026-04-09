"use strict";
let a = 10;
var b = 12;
const c = 14;

console.log(a); //GLOBAL SCOPE AS THE VARIABLES ARE DECLARED GLOBALLY!!
console.log(b);
console.log(c);

if(true){
    let d = 4;
    var e = 5; //EVEN IF YOU WRITE WITHOUT var LIKE SIMPLY e = 5; STILL THIS WILL NOT FOLLOW BLOCK SCOPE!!
    const f = 6; 
}
// console.log(d); //THIS WON'T GET PRINTED INSTEAD WOULD THROWAN ERROR!!
console.log(e); //THIS WILL GET PRINTED AS var DOESN'T FOLLOW BLOCK SCOPE
// console.log(f); //THIS ALSO WON'T ALLOW AS IT FOLLOWS BLOCK SCOPE!!

//THE PROBLEM
var val = 200;
let wal = 100;
console.log("Before outside(val): ", val);
console.log("Before outside(wal): ", wal);

if(true){
    var val = 300;
    let wal = 250;
    console.log("Inside(val): ",val); //GETS OVERWRITTEN!!
    console.log("Inside(wal): ",wal); //GETS OVERWRITTEN IN THE BLOCK!!
}
console.log("After outside(val): ",val); //WE SEE THE VALUE OF val GETS OVERWRITTEN!! AND REMAINS SAME, OUTSIDE TOO!!
console.log("After outside(wal): ",wal); //THE VALUE OF wal ONLY WHEN IN BLOCK GETS OVERWRITTEN BUT OUTSIDE ITS SAME!!