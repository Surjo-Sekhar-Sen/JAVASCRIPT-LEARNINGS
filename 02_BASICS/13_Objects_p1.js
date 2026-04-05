"user strict";

const sym1 = Symbol("Key1"); //Simple Symbol creation!!
const sym2 = Symbol("Key2");
const sym3 = Symbol("Key3");

const obj1 = {
    name :  "Surjo",
    "full name" : "Surjo Sekhar Sen",
    age : 21,
    sym2 : "mykey2",
    [sym3] : "mykey3", //We need to write the symbol as this to make it a Symbol!!
    gender : "male",
    location : "bengaluru",
    email : "surjosen400@gmail.com"
};

console.log(obj1["sym2"]);
console.log(typeof obj1["sym2"]); //This will not come as a symbol, instead as a string!!
//So to make it as a symbol, we need to declare it in a different way in the object!!
console.log(obj1[sym3]); //This will print the inner string written in the symbol value!!
console.log(obj1); //Here we can see the sym3 is a symbol!!

console.log(obj1.name); //This can not print key mentioned with  " "
console.log(obj1["name"]); //This can print key mentioned with " "
// console.log(obj1[name]); //Here without " " it will not work!! 
// console.log(onj1."full name");
console.log(obj1["full name"]);

obj1.email = "surjo@gmail.com"
Object.freeze(obj1);
obj1.email = "surjo@yahoo.com" //This will not change as the object keys and values are frozen and cannot change!!
console.log(obj1);

obj1.greeting = function(){
    console.log("Hello JS user!!");
}

console.log(obj1.greeting); //This gives a function reference or function definition!
console.log(obj1.greeting()); //This runs the function and runs the code inside it!!
//There is one undefined value which is also returned after the execution of the function!!

obj1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}!!`); //this IS USED TO REFER TO THE PROPERTY OF
    //THE SAME OBJECT!!
}
obj1.greetingTwo(); //DOING THIS WILL NOT PRINT UNDEFINED!!
console.log("\n");
console.log(obj1.greetingTwo());