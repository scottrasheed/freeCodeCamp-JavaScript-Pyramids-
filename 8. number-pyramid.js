const count = 8;

for (let i = 1; i <= count; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(" ".repeat(count - i) + row);
}
/*
       1 
      1 2 
     1 2 3 
    1 2 3 4 
   1 2 3 4 5 
  1 2 3 4 5 6 
 1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
*/
