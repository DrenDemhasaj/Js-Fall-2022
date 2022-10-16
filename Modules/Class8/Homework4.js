/**
 * Due date: Oct 16 eod
 */


/**
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */

/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
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


/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 */

//                             Q1:


 const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];

 if (sports[2].includes('BASKETBALL')){

    console.log("BASKETBALL is mentioned in the sports array");
 }else if
    (sports[2].includes('BASKETBALL')){
        console.log("BASKETBALL is present at index-2");
    }else(
        sports.fill('BASKETBALL',2,3))
            console.log('Baseball');
 

 //                             Q2:


let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
if (planets = (planets.indexOf('Earth')) === 0){
    console.log("Earth is mentioned in expected index");
}else if(planets = planets.unshift('Earth')){
    console.log(`planets -> ${planets}`)
}

//                              Q3:


let studentScore = 126
let maxScore = 150
let percentage = (studentScore / maxScore) * 100;
    if (percentage <= 100 && percentage >= 91) {
        console.log(`Your percentage is ${percentage}% and your grade is ${'A'}`);
    } else if (percentage <= 90.99 && percentage >= 81) {
        console.log(`Your percentage is ${percentage}% and your grade is ${'B'}`);
    } else if (percentage <= 80.99 && percentage >= 71) {
        console.log(`Your percentage is ${percentage}% and your grade is ${'C'}`);
    } else if (percentage <= 70.99 && percentage >= 61) {
        console.log(`Your percentage is ${percentage}% and your grade is ${'D'}`);
    } else if (percentage <= 60.99 && percentage >= 51) {
        console.log(`Your percentage is ${percentage}% and your grade is ${'E'}`);
    } else if (percentage <= 51) {
        console.log(`Your percentage is ${percentage}% and your grade is ${'F'}`);
} else if(
    studentScore === -1 || studentScore > maxScore
){
    console.log("Invalid student score");
}


                               //Q4:

 let myNumber = 10

 if (myNumber % 5 == 0 && (myNumber % 3) == 0){
    console.log("divisible by 5 and 3");
 }else if(myNumber % 3 == 0){
        console.log("divisible by 3");}
else if(myNumber % 5 == 0){
            console.log("divisible by 5");}
 else{ 
    console.log(myNumber);
 }