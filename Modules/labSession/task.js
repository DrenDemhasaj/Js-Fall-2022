

/**
 * 
 * 
         * 
         * 
         */
 let studentScore = 112
 let maxScore = 150 
 let percentage = (studentScore / maxScore) * 100;
     if (percentage <= 100 && percentage >= 91) {
     } else if (percentage <= 81 && percentage >= 90.99) {
         grades = "B";
     } else if (percentage <= 71 && percentage >= 80.99) {
         grades = "C";
     } else if (percentage <= 61 && percentage >= 70.99) {
         grades = "D";
     } else if (percentage <= 51 && percentage >= 60.99) {
         grades = "E";
     } else  if(percentage <= 51) {
         grades = "F";
 console.log(percentage)}