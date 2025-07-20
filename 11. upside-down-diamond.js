const count = 8;
const char = "#";

// Bottom half
for (let i = count; i >= 1; i--) {
  const row = " ".repeat(count - i) + char.repeat(2 * i - 1);
  console.log(row);
}
// Top half
for (let i = 2; i <= count; i++) {
  const row = " ".repeat(count - i) + char.repeat(2 * i - 1);
  console.log(row);
}
/*
###############
 ############# 
  ###########  
   #########   
    #######    
     #####     
      ###      
       #       
      ###      
     #####     
    #######    
   #########   
  ###########  
 ############# 
###############
*/
