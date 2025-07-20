const count = 8;
const char = "#";

for (let i = 1; i <= count; i++) {
  console.log(" ".repeat(count - i) + char.repeat(i));
}
/*
       #
      ##
     ###
    ####
   #####
  ######
 #######
########
*/
