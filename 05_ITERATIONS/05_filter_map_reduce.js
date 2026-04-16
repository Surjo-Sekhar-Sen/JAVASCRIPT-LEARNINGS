"use strict";

//filter() METHOOD!!
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const check = nums.filter((numbers) => {
//     console.log(numbers > 2);
//     return numbers > 2;
// });
// console.log(check);

//HOW TO USE forEach() METHOD FOR OPERATIONS
const val = [1, 2, 3, 4, 5];
const newval = [];
val.forEach((item) => {
    newval.push(item * 2);
});
// console.log(val);
// console.log(newval);

const books = [
    {name: "Alice in wonderland", published: 1990, edition: 2018, genre: "Fiction"},
    {name: "Gulliver Travels", published: 1992, edition: 2019, genre: "Fiction"},
    {name: "Theory of Everything", published: 2010, edition: 2022, genre: "Sci-Fi"},
    {name: "Ikigai", published: 2005, edition: 2024, genre: "Non-Fiction"},
    {name: "A Song of Ice and Fire", published: 2006, edition: 2016, genre: "Fantasy"},
    {name: "Metamorphosis", published: 1957, edition: 2020, genre: "Fiction"},
    {name: "Kite Runner", published: 2001, edition: 2025, genre: "History"},
    {name: "ET", published: 1988, edition: 2024, genre: "Sci-Fi"}
];
let selected = books.filter( (book) => {
    return book.genre === "Sci-Fi";
})
// console.log(selected);

//map() METHOD!!
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newvalues = values.map((num) => {
    return num+ 10;
});
// console.log(newvalues);