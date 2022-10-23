// Due date -> Oct 23 eod

/**
 * Q1. Create a function to generate abbreviation for a sentence
 * 
 * Return the final result
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */
//  let str3 = 'you Never waLK ALONe every day';
function abbrString(inputString){
 let abbr1 = '';
 let abbr = inputString.split(' ');
 for (i=0 ; i < abbr.length ; i++) {
abbr1 = abbr1 + abbr[i].charAt(0).toUpperCase()   
 }
   return abbr1
}
     console.log(abbrString('you Never waLK ALONe every day'));


/**
 * Q2. Create a function to reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */
/**
 * 1. what is the purpose of the function?
 *      reverse string word by word (reverseWordString , reverseStringByWord)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (string)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> string (reversedString)
 */
 function reverseStringByWord (userInput) {
    let resultString = '';

    const arr2 = userInput.split(' ');
    for (let i=arr2.length-1 ; i >= 0 ; i--) { 
        resultString = resultString + arr2[i] + ' ';
    }
    return resultString.trim();
}

console.log(reverseStringByWord('have a great day'));


/**
 * Q3. Create a function to convert the string value in to Titlecase
 * 
 * Return the final result
 *  
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */


 function sentTitle (stringInput) {
 let sentenceTitlecase = ''
let stringInputSplit = stringInput.toLowerCase().split(' ')
for ( let i = 0; i < stringInputSplit.length; i++) {
    sentenceTitlecase = sentenceTitlecase + stringInputSplit[i].charAt(0).toUpperCase() + stringInputSplit[i].slice(1) + " "

}
return sentenceTitlecase
}
console.log(sentTitle('you Never waLK ALONe'));
