// Due date: Oct-13 (Thu) eod

/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * */ 
 const countryName = 'China';
let length = countryName.lastIndexOf('')
console.log(length);


/*let array = countryName
let length = 0;
for (let i of array){
length++;
}
console.log(length)
*/
//console.log([...countryName].reduce(a => a+1, 0));
 // countryName.length;  <-- not allowed

 
  // Q2: find the number of words in the given sentence2

 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let sentence2NumOfWords = sentence2.split(" ")
console.log(`\nnumber of words -> ${sentence2NumOfWords.length}`);

//Q3: Create abbreviation for a 4-word sentence

const sentence3 = 'you Never waLK ALONe';

let abbr =sentence3.substring(0,1).toUpperCase()
let abbr1 =sentence3.substring(4,5).toUpperCase()
let abbr2 =sentence3.substring(10,11).toUpperCase()
let abbr3 =sentence3.substring(15,16).toUpperCase()
let abbr4 = abbr.concat(abbr1, abbr2, abbr3);
console.log(`\nabbr -> ${abbr4}`);     // abbr -> YNWA


 /**
  * Q4: Convert the string value in to Titlecase
  * 
 
  */
 const sentence4 = 'have a GrEAT daY';
 let sentence4_Titlecase = sentence4.toLowerCase().replace('h','H').replace('ave a','ave A').replace('g','G').replace('d','D')
 console.log(`\nsentence4_Titlecase -> ${sentence4_Titlecase}`);
 // sentence4_Titlecase -> Have A Great Day