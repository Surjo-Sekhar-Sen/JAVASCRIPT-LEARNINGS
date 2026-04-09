"use strict";
function surjo(){
    console.log("My name is Surjo");
}
console.log(surjo()); //CALL THE FUNCTION!!
console.log(surjo); //THIS JUST  GIVES THE FUNCTION REFERENCE!!

function sekhar(num1, num2){ //PARAMETERS!!
    console.log(num1 + num2);
}
console.log(sekhar(3, 5)); //ARGUMENTS!!
const result = sekhar(4, 6); //WE STORE THE  VALUE OF THE FUNCTION RETURNED IN THE VARIABLE!!
//BUT THE CATCH IS THAT IT IS NOT REURNING ANYTHING INSTEAD JUST PRINTING!!
console.log("RESULT:", result); //HERE undefined WILL BE PRINTED!!

//FOR GETTING A VALUE WE NEED TO USE return!!
function sen(num1, num2){ //PARAMETERS!!
    return num1 + num2;
}
const res = sen(4, 6);
console.log("RESULT:", res);

function fun(n1, n2){
    console.log("Hello!!"); //THIS WILL GET PRINTED AS IT IS BEFORE return!!
    return n1 + n2;
    console.log("Surjo!!"); //THIS WILL NOT GET PRIBTED AS THE RULE IS THAT NOTHING AFTER 
    //FUNCTION RETURNS GETS EXECUTED!!
}
const sun = fun(3, 7);
console.log(sun);

function login(username){
    return `${username} just logged in!!`
}
login("Surjo"); //HERE NO VALUE WILL BE DISPLAYED AS THE FUNCTION JUST RETURNED IT!!
//THERE IS NO COMMAND OF PRINTING THE VALUE RETURNED!!
//UNLESS YOU STORE IT AND CONSOLE.LOG IT, THE VALUE WON'T GET PRINTED!!
console.log(login("Sekhar")); 

//IMPORTANT
function add(num1, num2){
    console.log(num1 + num2);
}
//WHAT IF WE DON'T PASS NUMBERS INSTEAD SOME DIFFERENT DATATYPES!!
add(3, 4); //NUMBERS
add(3, "4"); //STRING CONVERSION HAPPENS!!
add(3, null); //null GETS CONVERTED TO 0!!
add(3, true); //true TURNS INTO 1!!
add(false, true);
add("a", "bcd");
add(NaN, 1); //NaN stays NaN, and doesn't add to 1 to give value!!

function loggedin(username){
    return `${username} just logged in!!`;
}
console.log(loggedin("Surjo")); //HERE I PASSED AN ARGUMENT!!
//WHAT IF I DON'T PASS A VALUE!!
console.log(loggedin()); //HERE I DIDN'T PROVIDE ANY ARGUMENT -> SO THIS WILL GIVE UNDEFINED!!

//TO AVOID SUCH SITUATIONS!!
//WE USE IF-ELSE OR DEFAULT PARAMETERS!! 
function log(username){
    if(username === undefined){ //HERE WE COULD HAVE ALSO WRITTEN (!username) AS CONDITION!!
        //THIS MEANS IF username NOT GIVEN THEN EXECUTE THIS CODE!!
        console.log("Please enter your username!!");
        return;
    }
    return `${username} just logged in!!`;
}
console.log(log());

function logg(username = "Sam"){
    if(!username){ //THIS IF CONDITION WILL NEVER EXECUTE AS EVEN IF WE DON'T GIVE ARGUMENT
        //THERE IS A DEFAULT PARAMETER VALUE WHICH WILL BE TAKEN WHEN NO VALUE!!
        console.log("Please enter your username!!");
        return;
    }
    return `${username} just logged in!!`;
}
console.log(logg());