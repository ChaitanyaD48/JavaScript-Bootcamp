function reverse(str){
    var rev = "";
    for(var i=str.length-1;i>=0;i--){
      rev += str[i];
    }
    return rev;
  }
  function transform(str){
    var ans = "";
    for(var i=0;i<str.length;i++){
      if(str[i] == " "){  // Add Exemptions accroding to Test cases 
        
      }else{
        ans += str[i];
      }
    }
    return ans;
  }
  function isPalindrome(str) {
    str = str.toLowerCase();
    if(str === reverse(str)){
      return true;
    }else{
      return false;
    }
  }
  
  var ans = isPalindrome("race car");
  console.log(ans);
  
  