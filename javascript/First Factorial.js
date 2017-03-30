function FirstFactorial(num) { 

  var total = 1;
  
  for (var i = 1; i <= num; i++) {
      
      total *= i;
      
  }
  
  return total; 
         
} 
   
// keep this function call here 
FirstFactorial(readline());