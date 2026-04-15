"use strict";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const check = nums.filter((numbers) => {
    console.log(numbers > 2);
    return numbers > 2;
});
console.log(check);