

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
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