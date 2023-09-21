const express = require('express');
const app = express();
const port = 3000;

function middleware1(req, res, next){
    console.log("From inside Middleware " + req.headers.counter);
    next();     //IMP
}

app.use(middleware1); //Way to register Middleware -> Specifies that each request must go through `middleware1`

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