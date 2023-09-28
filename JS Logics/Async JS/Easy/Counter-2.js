var cnt = 0;
function fn(){
  console.clear();
  cnt++;
  console.log(cnt);
}
for(var i=1;i<10;i++){
  setTimeout(fn, i * 1000);
}