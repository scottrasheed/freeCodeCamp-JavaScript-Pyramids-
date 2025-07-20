const count = 8;
const char = "#";

for (let i = 1; i <= count; i++) {
  const spaces = " ".repeat(count - i);
  const chars = char.repeat(2 * i - 1);
  console.log(spaces + chars + spaces + " " + spaces + chars + spaces);
}
/*
       #               #       
      ###             ###      
     #####           #####     
    #######         #######    
   #########       #########   
  ###########     ###########  
 #############   ############# 
############### ###############
*/
