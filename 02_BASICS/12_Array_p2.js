const marvel_heroes = ["Spiderman", "thor", "hulk", "ironman"];
const dc_heroes = ["batman", "flash", "superman", "wonderwoman"];

const mixed = marvel_heroes.push(dc_heroes);
console.log(mixed); //returns length 
console.log(marvel_heroes); //returns array
//It basically becomes array inside an array!! OR 2D array!!

console.log(marvel_heroes[4][0], marvel_heroes[4][3]);
//Accessing the elements of the 2D array!!
console.log(marvel_heroes[3][0], marvel_heroes[3][3]);
//This will also give result, but it will go inside the 3rd element of the array
//which is ironman and in that it will see the string's 0th and 3rd element and return!!

//FOR ADDING THE ARRAY ELEMENTS ACTUALLY!!
const m_heroes = ["Spiderman", "thor", "hulk", "ironman"];
const d_heroes = ["batman", "flash", "superman", "wonderwoman"];

const mixed_heroes = m_heroes.concat(d_heroes);
//This is a temporary operation which means it returns a new array 
//instead of changing the main array!! NON-MUTATING METHOD!!
console.log(mixed_heroes); 
console.log(m_heroes); //It doesn't change the main array!!

//SPREAD OPERATOR
const heroes = [...m_heroes, ...d_heroes];
console.log(heroes);

//.flat() operator
let nums = [1, 2, 3, 4, [5, 6, 7], [8, [9, 10], [11, 12]]];
console.log(nums.flat(1)); //THIS IS A TEMPORARY METHOD!! NON-MUTATING METHOD!!
console.log(nums.flat(2));
console.log(nums.flat(Infinity)); 
console.log(nums); //REMAINS SAME!!

//.from() operation
let str = "Surjo";
console.log(Array.isArray("Surjo")); //THIS IS STATIC METHOS WHICH CHECKS IF ARRAY OR NOT!!
console.log(Array.from(str)); //THIS IS TOO STATIC METHOD AND CHANGES OBJECT WHICH HAS LENGTH 
//INTO AN ARRAY!!

const obj = {name : "Surjo", age: 21};
console.log(Array.isArray(obj));
console.log(Array.from(obj)); //RETURNS EMPTY ARRAY BCOZ THERE IS NO  LENGTH PROPERTY 
//IN THIS OBJECT OR ELSE WE CAN SAY THERE ARE KEYS AND VALUES AND DURING CONVERSION WE SHOULD SPECIFY 
//WHICH TO CONVERT INTO ARRAY!!
const obj_keys = Object.keys(obj); //THIS ACTUALLY RETURNS AN ARRAY!!
console.log(obj_keys); //IF WE SIMPLY PRINT THIS, IT WILL GIVE US THE ARRAY!
console.log(Array.from(obj_keys)); //THIS IS JUST NOT TOTALLY NECESSARY AS IT IS ALREADY AN ARRAY!!\
//PROOF:-
console.log(typeof obj_keys); //THIS RETURNS OBJECT(ARRAY'S TYPE)!!!!
const obj_values = Object.values(obj);
console.log(Array.from(obj_values));
const obj_all = Object.entries(obj);
console.log(Array.from(obj_all));

//.of() operation
const val1 = 100;
const val2 = 200;
const val3 = [120, 450];
const val4 = 400;
console.log(Array.of(val1, val2, ...val3, val4));