num1 = 43;
num2 = 21;

console.log(`\n${num1} % ${num2} = ${num1 % num2}`);          // 10 % 20 = 10
 


num1 = 23
num3 = 22

console.log(`\n${num1} / ${num3} = ${num1 * num3}`);

console.log(`\n\n\n${num1} - ${num2} = ${num1 % num2}`);

let name = "Dren";
let age = 32;
age--
console.log(`hi i am ${name} and i am ${age} years old`);


let lvar1 = 10;
let lvar2 = 20;
let lvar3 = 30;
let lvar4 = 40;
let lvar5 = 50;
let lvar6 = 60;
let lvar7 = 70;
let lvar8 = 80;
let lvar9 = 90;

let res1 = lvar1 * (lvar4 % 3) + lvar2-- / ++lvar3;
console.log (res1)
/**
 * let res1 = lvar1 * (lvar4 % 3) + lvar2-- / ++lvar3;
 * 
 *      modules
 * lvar4=1
 * let res1 = lvar1 * 1 + lvar2-- / ++lvar3;
 *      pre-inc,
 * ++lvar3; -> lvar3 = 31
 * let lvar1 * 1 + lvar2-- / 31
 *      multiply,
 * let res1 = lvar1 * 1 + lvar2-- / 31
 * let res1 = 10 + lvar2-- / 31
 *      division,
 * let res1 = 10 + lvar2-- /31
 * let res1 = 10 + 0.645
 *      addition,
 * let res1 = 10 + 0.645
 * let res1 = 10.645
 *      assigment,
 * res1 = 10.645
 * 
 *      post-dec
 * lvar2-- -> lvar2 =19
 *  
 */ 

let res2 = lvar9 + lvar5 / (lvar4 % 11) - lvar8++ * -- lvar7
console.log(res2);
/**
 *      Module
 * let res2 = lvar9 + lvar5 / (lvar4 % 10) - lvar8++ * -- lvar7
 * 
 *       brackets first
 * let res2 = lvar9 + lvar5 / 0 - lvar8++ * -- lvar7
 *      pre-inc
 * let res2 = lvar9 + lvar5 / 0 - lvar8++ * -- lvar7
 * let res2 = lvar9 + lvar5 / 0 - lvar8++ * 69
 *      multiply
 * let res2 = lvar9 + lvar5 / 0 - lvar8++ * 69
 * let res2 = lvar9 + lvar5 / 0 - 5520
 *      division
 * let res2 = lvar9 + lvar5 / - 5520
 * let res2 = lvar9 + -0.0090579710144928
 *      addition
 * let res2 = 90.00905797101449
 * assingment
 * res2 = infinity
 *      post-dec
 *let res2 = lvar8++ = 81

 */


 
let res2 = lvar9 + lvar5 / (lvar4 % 11) - lvar8++ * -- lvar7
console.log(res2);