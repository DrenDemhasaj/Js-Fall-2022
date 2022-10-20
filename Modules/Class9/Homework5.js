// Due date : Oct-19 EOD

/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */


 let numbers = [23, 12, 43, 10, 5, -10];
 let total = 0;
for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
let avg = total / numbers.length;
console.log(`the average of the numbers is ${avg}`);




 /**
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * 
  * 
  */
 let str2 = 'have a great day'  // day great a have
 str2 = str2.split(' ')
let reverseStr2 = [];
for (let i = str2.length-1 ; i >= 0 ; i--) {
    reverseStr2[str2.length-1-i] = str2[i];
}
console.log(`reverseStr2 -> ${reverseStr2}`);

    // day great a have
 
 
 /**
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */
//  let str3 = 'good Morning';
//  let abbr = '';
//  // code
/**
 * so first we convert everything into uppercase than split it 
 * 
 * 
 * 
 * 
 */
 let str3 = 'you Never waLK ALONe every day';
 let abbr1 = ''
 let abbr = str3.toUpperCase().split(' ')
 console.log(abbr);
 for (let i=0 ; i < abbr.length ; i++) {
     let temp = abbr[i].charAt(0);
     if (i==0){
         abbr1 = temp
     }
     else (
         abbr1 = abbr1.concat(temp)
     )
 }
     console.log(abbr1);