const count = 8;
const char = "#";

for (let i = 1; i <= count; i++) {
  let row = "";
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1 || i === count) {
      row += char;
    } else {
      row += " ";
    }
  }
  const spaces = " ".repeat(count - i);
  console.log(spaces + row);
}
/*
       #       
      # #      
     #   #     
    #     #    
   #       #   
  #         #  
 #           # 
###############
*/
