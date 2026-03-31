"use strict";

const myDate = new Date();
console.log(myDate); //Gives according to International Standard Time!!
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); 
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toISOString()); //Gives similar result like console.log(myDate)
console.log(myDate.toJSON()); 


console.log(myDate.getDate()); 
console.log(myDate.getFullYear()); 
console.log(myDate.getMonth()); //It comes 3, as of now it is April but the start of month in JS
//starts from 0 thatswhy it comes 3!!
console.log(myDate.getDay()); //Wednesday -> 3rd in index!!
console.log(myDate.getTime()); //Total milliseconds passed from the date decided!!

const myCreatedDate1 = new Date(2028, 0, 21);
console.log(myCreatedDate1.toLocaleString());
const myCreatedDate2 = new Date(2028, 0, 21, 5, 4, 10); //Move specifications -> (year, month, date, hour, min, sec)
console.log(myCreatedDate2.toLocaleString());
const myCreatedDate3 = new Date("2027-02-24");
console.log(myCreatedDate3.toLocaleString());
const myCreatedDate4 = new Date("04-16-2029");
console.log(myCreatedDate4.toLocaleString());

const LeavingTime = Date.now();
console.log(LeavingTime);
const ArrivalTime = new Date("03-28-2026");
console.log(ArrivalTime.getTime());

let StayingTime = LeavingTime - ArrivalTime.getTime();
console.log(StayingTime);

console.log(Math.floor(StayingTime / (1000*60*60))); //WE DIVIDED BY 1000 FOR SECONDS THEN 60 FOR MINS
//THEN 60 FOR HOURS!!

console.log(Intl.DateTimeFormat().resolvedOptions().locale); 
// Output: "en-IN" 

console.log(myCreatedDate1.toLocaleString('en-IN'))
console.log(myCreatedDate1.toLocaleString('en-US'))
console.log(myCreatedDate1.toLocaleString('en-GB'))
console.log(myCreatedDate1.toLocaleString('ko-KR'))
console.log(myCreatedDate1.toLocaleString('ar-SA'))

console.log(myCreatedDate1.toLocaleString('hi-IN', {
    weekday : "long",
    timeZone : "Asia/Kolkata",
}));

console.log(myCreatedDate1.toLocaleString('en-IN', {
    weekday : "long",
    timeZone : "Asia/Kolkata",
}));

console.log(myCreatedDate1.toLocaleString('ko-KR', {
    weekday : "long",
}));