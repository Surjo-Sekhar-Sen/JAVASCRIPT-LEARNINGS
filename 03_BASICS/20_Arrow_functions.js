// "use strict";

//USING this IN OBJECTS!!
const username = "Sekhar";
const user = {
    username : "Surjo",
    welcomeMessage : function(){
        // console.log(`${username}, welcome to the website!!`); //HERE THE GLOBAL VARIABLE VALUE WILL BE TAKEN!!
        console.log(`${this.username}, welcome to the website!!`); //HERE THE OBJECT'S CONTEXT
        //WILL BE TAKEN!!
        console.log(this); //RETURNS THE WHOLE OBJECT REFERENCE!!
    }
}

user.welcomeMessage();
user.username = "Sen"; //HERE THE VALUE OF username IS CHANGED FROM THE SAME MEMORY ADDRESS!!
user.welcomeMessage(); //NEW VALUE WILL BE DISPLAYED!!
console.log("\n");
console.log(this); //RETURNS AN EMPTY OBJECT!!

//USING this IN FUNCTIONS!!
function one(){
    let username = "Surjo";
    console.log(this.username); //THIS WILLL COME undefined!!
    console.log(this);
}
one(); //GIVES THE INFO OF THE FUNCTION!!

const two = function(){
    let user = "Surjo";
    console.log(this);
}
two(); //GIVES INFO OF THE FUNCTION!! BCOZ IT TAKES REFERENCE FROM THE FUNCTION OBJECT ITSELF!!

//IN ARROW FUNCTIONS
const three = () => {
    let userrname = "Surjo";
    console.log(this);
}
three(); //GIVES AN EMPTY OBJECT!! BCOZ IT ONLY TAKES REFERENCE FROM ITS PARENT  FUNCTION OBJECT!!
//IF THERE IS NO PARENT THEN this WILL GIVE EMPTY OBJECT!!

//ARROW FUNCTIONS
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3, 7)); //EXPLICIT METHOD 

//IMPLICIT METHOD!!
const sub = (n1, n2) => n1 - n2;
console.log(sub(7, 3));

//OR 
const subs = (n1, n2) => (n1 - n2);
console.log(subs(10, 6));

//WE CANNOT DO THIS:
const subss = (n1, n2) => {n1 - n2}; //IF WE USE {} THEN WE NEED TO WRITE return!!
console.log(subss(10, 5));

const str = (n1, n2) => ({"username" : "Surjo"}); //WE HAVE TO USE PARENTHESIS!!
//IF WE DON'T WRITE return!!
console.log(str(3, 5));