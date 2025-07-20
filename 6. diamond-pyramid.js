const count = 8;
const char = "#";

// Top half
for (let i = 1; i <= count; i++) {
  const row = " ".repeat(count - i) + char.repeat(2 * i - 1);
  console.log(row);
}
// Bottom half
for (let i = count - 1; i >= 1; i--) {
  const row = " ".repeat(count - i) + char.repeat(2 * i - 1);
  console.log(row);
}
/*
       #       
      ###      
     #####     
    #######    
   #########   
  ###########  
 ############# 
###############
 ############# 
  ###########  
   #########   
    #######    
     #####     
      ###      
       #       
*/
