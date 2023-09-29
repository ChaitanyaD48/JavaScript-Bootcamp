/*
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
hello     world    my    name   is      raman


After the program runs, the output should be
hello world my name is raman
*/

// const cleanExpression = expression.replace(/\s+/g,'')   reference from Calculator.js

function cleanContent(data){
    var cleanData = data.replace(/\s+/g,' ');
    return cleanData; 
}   

const fs = require('fs');

function readFromFile(err, data){
    if(err){
        console.log(err);
        return;
    }else{
        var content = data;
        var updatedContent = cleanContent(content);
        fs.writeFile('TextFile.txt', updatedContent, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
}

fs.readFile('TextFile.txt', 'utf-8', readFromFile);