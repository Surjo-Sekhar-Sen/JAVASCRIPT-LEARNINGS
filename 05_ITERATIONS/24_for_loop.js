"use strict";

for(let i = 0; i < 10; i++){
    const element = i;
    console.log(element);
}

//NESTED LOOPS -> MULTIPLICATION TABLE
for(let i = 1; i <= 5; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

//LOOPS IN ARRAYS
const heroes = ["spiderman", "superman", "flash", "batman", "ironman", "thor"];
for(let i = 0; i < heroes.length; i++){
    console.log(`Hero Number ${i+1}: ${heroes[i]}`);
}

//LOOPS IN STRINGS
const str = "Surjo";
for(let i = 0; i < str.length; i++){
    console.log(`String's letter ${i+1} is: ${str[i]}`);
}

//BREAK
for(let i = 1; i < 10; i++){
    if(i == 5){ //IT WILL COME OUT OF THE LOOP ONCE 5 IS DETECTED!! 
        console.log("Detected 5");
        break;
    }
    console.log(`Loop Value: ${i}`);
}

//CONTINUE
for(let i = 1; i < 10; i++){
    if(i == 5){ //IT WILL NOT COME OUT OF THE LOOP, INSTEAD IGNORE THE VALUE
    //AFTER THE IF STATEMENT AND MOVE TO THE NEXT INDEX AND RUN THE LOOP!! 
        console.log("Detected 5");
        continue;
    }
    console.log(`Loop Value: ${i}`);
}