const fs = require('fs');

function readFromFile(err, data){
    if(err){
        console.log(err);
        return;
    }else{
        console.log(data);
    }
}

fs.readFile('read.txt', 'utf-8', readFromFile);

var cntr = 0;
for(var i=0;i<10000000000;i++){
    cntr = cntr + 1;
}
console.log(cntr);

// As this expensive Operation keeps on getting more expensive, it takes more time to print the contents of read file as the thread 
// busy doing the expensive operation and the file contents keep waiting in the call stack to enter the thread as soon as the thread 
// completes expensive operation. 
