const express = require('express');
const app = express();
const port = 3000;

// Write a iddleware to log number of requests comming into your server.

let numberOfRequests = 0;

function Middleware2(req, res, next){
    if(numberOfRequests >= 4){
        res.send("Max Server Limit reached!");
    }else{
        numberOfRequests = numberOfRequests + 1;
        console.log(numberOfRequests);
        next();
    }
}

app.use(Middleware2);

// ---

function sum(counter){
    var sum = 0;
    for(let i=0;i<counter;i++){
        sum = sum + i;
    }
    return sum; 
}

function handleRequest(req, res){   
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