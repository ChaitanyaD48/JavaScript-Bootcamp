const { log } = require("console");
const fs = require ("fs");

function callBackFn(err, data){
    log(data);
}

fs.readFile("file.txt", "utf-8", callBackFn);

// function sum(counter){
//     var sum = 0;
//     for(let i=0;i<counter;i++){
//         sum = sum + i;
//     }
//     return sum; 
// }

// var calculateSum = sum(100);
// console.log(calculateSum);