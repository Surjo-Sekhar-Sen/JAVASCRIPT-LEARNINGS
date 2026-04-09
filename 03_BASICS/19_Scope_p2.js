"use strict";

function one(){
    const username = "Surjo";

    function two(){
        const website = "Youtube";
        console.log(username); //IT'S PARENT VALUES CAN BE USED!!
        //THIS PROPERTY IS CALLED AS CLOSURE BASICALLY!!
    }
    // console.log(website); //PARENT CANNOT GET CHILD'S VALUES!!
    two();
}
one();

if(true){
    const user = "Surjo";

    if(user === "Surjo"){
        const web = "Google";
        console.log(user); //ACCESSIBLE!!
    }
    // console.log(web); //WON'T BE ABLE TO ACCESS!!
    console.log(user); //ACCESSIBLE!!
}
// console.log(user); //NOT ACCESSIBLE!!

//HOISTING!!
console.log(addone(5)); //HOISTING -> EVEN BEFORE DECLARING THE FUNCTION WE CAN ACCESS AND 
//RUN THE FUNCTION!!
function addone(num){
    return num + 1;
}

//BUT WHEN WE DO THIS TYPE OF FUNCTION DECLARATION!!
console.log(addtwo(5)); //DURING THIS THIS HOISTING DOESN'T WORK!!
const addtwo = function(num){ //HERE THE function NAME IS ANONYMOUS!!
    return num + 2;
}