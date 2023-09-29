// Time Format - HH:MM:SS

function fn(){
    console.clear();
    var hrs = new Date().getHours();
    var mins = new Date().getMinutes();
    var sec = new Date().getSeconds();
    console.log("24 Hrs Format - " + hrs + ":" + mins + ":" + sec);

    if(hrs > 12){
        console.log("12 Hrs Format - " + (hrs - 12) + ":" + mins + ":" + sec + " PM");
    }else{
        console.log("12 Hrs Format - " + hrs + ":" + mins + ":" + sec + " AM");
    }   
}
setInterval(fn, 1000);
