/**
 * Due date : Oct-9 (Sun) eod
 * 
 *  
//                          Task 1.
 /**
  * if the length of sentence1 is greater than or equals to 10
  *      assign 15 in the result1
  * otherwise
  *      assign 10 in the result1
  */
const sentence1 = 'Hello Dear, how are you doing?';
let result1 = 0;

console.log(` sentence1 -< ${sentence1}`);
result1 = sentence1.length >= 10 ? 15 : 10
console.log(`\nsentence length result1 -> ${result1}`);

//                         Task 2.
   /**
   * replace all instances of a or A with 'Alpha', print the result in console.
   */  

  const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
  console.log(`\nsentence2 -<  ${sentence2}`)

  let sentence2Replace_a,A_Alpha = sentence2.replace(/a/ig, 'Alpha');
  console.log(`\nsentence2Replace_a,A_Alpha ->  ${sentence2Replace_a,A_Alpha}`)

   //                    Task 3. 
 /**
  * print the result in console:
  * 1. the length of sentence-3
  * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
  * 3. does sentence-3 contains with 'Body' (ignore cases)
  * 4. index of 'BoDy' in sentence3  (ignore cases)
  * 5. the last-character in sentence-3
  * 6. word 'BoDy' is present only once. (true or false)
  */

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

 console.log(`\nsentence3 -< ${sentence3}`);
 console.log(`\nLength of sentence3 = ${sentence3.length}`);

let sentence3StartsWith_HeaLTh = sentence3.toLowerCase().startsWith('HeaLTh'.toLowerCase());
console.log(`\nsentence3StartsWith_HeaLTh = ${sentence3StartsWith_HeaLTh}`);

let sentence3Contains_Body = sentence3.toLowerCase().includes('Body'.toLowerCase()1);
console.log(`\n\sentence3Contains_Body = ${sentence3Contains_Body}`);

let sentence3IndexOf_Body = sentence3.toLowerCase().indexOf('Body'.toLowerCase());
console.log(`\n\sentence3IndexOf_Body = ${sentence3IndexOf_Body}`);

let sentence3Lastcharacter = sentence3.charAt(sentence3.length - 1);
console.log(`\n\sentence3Lastcharacter = ${sentence3Lastcharacter}`);

console.log(`\nsentence3Contains_BodyOnce = ${sentence3.split(/BoDy/gi).length-1 === 1}`)

// 5. the last-character in sentence-3
/**
 * last character is present at last-index
 * 1. length of sentence3 (L)
 * 2. lastIndex=L-1
 * 3. find char at index(L-1) (charAt)
 */
// let lastIndex = sentence3.length-1
let charAtLastIndex = sentence3.charAt(sentence3.length-1);
console.log(`\n\nChar at index-${sentence3.length-1} is '${charAtLastIndex}'\n\n`);


// 6. word 'BoDy' is present only once. (true or false)
/**
 * 1. convert sentence3 in to lowercase
 * 2. convert 'BoDy' in to lowercase
 * 3. find index of 'body'
 * 4. find last index of 'body'
 * 5. compare indexOf-value === lastIndexOf-value and indexOf-value>=0
 * 
 */

/*
sentence3 = "BODies is bodbody our temple";
let sentence3_L = sentence3.toLowerCase();
let BoDy_L = 'BoDy'.toLowerCase();
let indexOf_value = sentence3_L.indexOf(BoDy_L); 
let lastIndexOf_value = sentence3_L.lastIndexOf(BoDy_L);
let result = indexOf_value === lastIndexOf_value && indexOf_value >= 0;
console.log(`is word 'BoDy' present only once -> ${result}`);*/