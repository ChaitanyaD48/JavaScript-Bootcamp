const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.json());

function sum(counter){
    var sum = 0;
    for(let i=0;i<counter;i++){
        sum = sum + i;
    }
    return sum; 
}

function handleRequest(req, res){   
    var counter  = req.body.counter;
    // console.log(req.body); 
    var calculateSum = sum(counter);        
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