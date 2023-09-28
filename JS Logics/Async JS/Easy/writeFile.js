const fs = require('fs');

fs.writeFile('read.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

function readFromFile(err, data){
    if(err){
        console.log(err);
        return;
    }else{
        console.log(data);
    }
}

fs.readFile('read.txt', 'utf-8', readFromFile);