function callbackFn(result){
    console.log(result);
}

var sendObj = {
    method: "POST"
};

fetch("http://localhost:3000/", sendObj).then(callbackFn)