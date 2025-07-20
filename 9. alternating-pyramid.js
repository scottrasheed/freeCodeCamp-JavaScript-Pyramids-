const count = 8;

for (let i = 1; i <= count; i++) {
  const char = i % 2 === 0 ? "*" : "#";
  const row = " ".repeat(count - i) + char.repeat(2 * i - 1);
  console.log(row);
}
/*
       #       
      ***      
     #####     
    *******    
   #########   
  ***********  
 ############# 
***************
*/
