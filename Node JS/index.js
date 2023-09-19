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
    var calculateSum = sum(100);        //Here 100 is hardCoded so, we'll try to take user input for calculation of sum in next part.
    console.log(calculateSum);
    var ans = "The Sum is " + calculateSum;
    res.send(ans);
}

app.get('/', handleRequest);    //Route : '/' on which the callback Function handleRequest needs to be called

function welcome(req, res){
    res.send("User Route");
}

app.get('/User', welcome);       //Route : '/User' on which the callback Function welcome needs to be called      

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);