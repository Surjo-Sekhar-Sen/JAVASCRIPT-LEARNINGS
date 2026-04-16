"use strict";

//reduce() METHOD!!
const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = val.reduce(function(acc, curr) {
    //HERE IN THE PARAMETER WE NEED TO TWO VALUES:
    // ACCUMULATOR AND CURRENTVALUE!!
    return acc + curr;
}, 0);
console.log(total);

//SAME THING WITH forEach()!!
const val2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
val2.forEach((item) => {
    sum = sum + item;
});
console.log(sum);

//SAME THING USING map()!!
const val3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum2 = 0;
const newtotal = val3.map((item) => {
    sum2 = sum2 + item;
    return sum2;
});
console.log(newtotal); //WE GET EVERY STEP OF ADDITION HERE!!

//PRACTICAL USE OF reduce()!!
const shoppinglist = [
    {course: "JS course", price: 299},
    {course: "PY course", price: 399},
    {course: "CPP course", price: 499},
    {course: "WEB DEV course", price: 899},
];
//HERE I FIRST TOOK OUT THE PRICE PROPERTY FROM THE OBJECT!!
const prices = [];
shoppinglist.forEach((item) => {
    return prices.push(item.price)
});
//THEN I APPLIED THE reduce() METHOD!!
console.log(prices);
const totalsum = prices.reduce(function(acc, currval) {
    return acc + currval;
}, 0);
console.log(totalsum);

//DIRECT WAY!!
const totalsum2 = shoppinglist.reduce(function(acc, item) {
    return acc + item.price;
}, 0);
console.log(totalsum2);