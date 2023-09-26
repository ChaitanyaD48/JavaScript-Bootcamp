const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.json());

function sum(counter){
    var sum = 0;
    for(let i=0;i<=counter;i++){
        sum = sum + i;
    }
    return sum; 
}

function mul(counter){
    var sum = 1;
    for(let i=1;i<=counter;i++){
        sum = sum * i;
    }
    return sum; 
}

function handleRequest(req, res){ 
    var counter = req.query.counter;
    var calculateSum = sum(counter);
    var calculateMul = mul(counter);
    var answerObject = {
        Sum: calculateSum,
        Multiplication: calculateMul
    }
    res.status(200).send(answerObject);
}

app.get('/', handleRequest); 

// Way to to pass HTML as response body

function giveHtml(req, res){
    // res.send("Hi There!")   -> Simple HTML
    res.send(`<head>
                <title> Hi There </title>
            </head>
            <body>
                <i>Hi There!</i>
            </body>`)
    
    // res.sendFile(__dirname + "/index.html");   -> Another way to send HTML File Directly
}

app.get('/getHTML', giveHtml);

function welcome(req, res){
    res.send("User Route");
}

app.get('/User', welcome);      

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);