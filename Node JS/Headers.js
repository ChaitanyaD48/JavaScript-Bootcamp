const express = require('express');
const app = express();
const port = 3000;

function sum(counter){
    var sum = 0;
    for(let i=0;i<counter;i++){
        sum = sum + i;
    }
    return sum; 
}

function handleRequest(req, res){   
//  var counter = req.query.counter;    // Gets Counter from Query here but as re want to get input through Headers, we need to change the input format from query to header
    var counter  = req.headers.counter;
    console.log(req.headers); 
    var calculateSum = sum(counter);        
    console.log(calculateSum);      
    var ans = "The Sum is " + calculateSum;
    res.send(ans);
}

app.post('/', handleRequest); 

function welcome(req, res){
    res.send("User Route");
}

app.get('/User', welcome);      

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

