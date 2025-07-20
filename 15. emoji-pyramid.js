const count = 8;
const emoji = "⭐";

for (let i = 1; i <= count; i++) {
  const row = " ".repeat(count - i) + emoji.repeat(2 * i - 1);
  console.log(row);
}
/*
       ⭐       
      ⭐⭐⭐      
     ⭐⭐⭐⭐⭐     
    ⭐⭐⭐⭐⭐⭐⭐    
   ⭐⭐⭐⭐⭐⭐⭐⭐⭐   
  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐  
 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
*/
