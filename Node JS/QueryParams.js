//Task - Take input for calculation of Sum 
//3 Ways to Take input - Query Params, Headers, Body

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

function handleRequest(req, res){   //For input part -> req parameter 
    var counter = req.query.counter;    //Input gets catched Here
    var calculateSum = sum(counter);        
    console.log(calculateSum);      // Calculated sum gets logged in Terminal!
    var ans = "The Sum is " + calculateSum;
    res.send(ans);
}

app.get('/', handleRequest); 

function welcome(req, res){
    res.send("User Route");
}

app.get('/User', welcome);      

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

