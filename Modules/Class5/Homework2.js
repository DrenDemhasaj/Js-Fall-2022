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

let sentence3Contains_Body = sentence3.toLowerCase().includes('Body'.toLowerCase());
console.log(`\n\sentence3Contains_Body = ${sentence3Contains_Body}`);

let sentence3IndexOf_Body = sentence3.toLowerCase().indexOf('Body'.toLowerCase());
console.log(`\n\sentence3IndexOf_Body = ${sentence3IndexOf_Body}`);

let sentence3Lastcharacter = sentence3.charAt(sentence3.length - 1);
console.log(`\n\sentence3Lastcharacter = ${sentence3Lastcharacter}`);

console.log(`\nsentence3Contains_BodyOnce = ${sentence3.split(/BoDy/gi).length-1 === 1}`)

