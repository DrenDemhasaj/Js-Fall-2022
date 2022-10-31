
// Create a function to return the largest string(s) from a given string array.
function largStr (input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let currentString = input[i]
        if (currentString.length > result.length) {
            result = input[i];
        }
    }
    return `Longest word in array -> ${result}`
}
console.log(largStr(['hello', 'laughs', 'live', 'peace', 'hope']));

// function that checks if given array exists in other array
function doesExist(nums, num){
for(let i =0; i<nums.length;i++){
     if(nums[i] === num){
        return true
     }
}
return false
}
console.log(doesExist(['hello', 'laughs', 'live', 'peace', 'hope'], 'peace'));//true

function reverseArray(revArr1){ 
    let rA = []; 
    for (var i = revArr1.length; i > 0; i--) { 
        rA.push(revArr1[i - 1])  
        } return `reveresed array -> ${rA}`
}
console.log(reverseArray(['hello', 'laugh', 'live', 'king', 'queen']));

// // Create a function to return color name(s) appearing maximum number of times in given string array
//     example:
//         input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
//         ans -> red
//         input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
//         ans -> blue, red
//         input -> []
//         ans -> 

// function that shows the amounts of times a string is present in array
  function numOfFreq(array){
let b={};
max='', maxi=0;
for(let k of array) {
  if(b[k]) b[k]++; else b[k]=1;
  if(maxi < b[k]) { max=k; maxi=b[k] }
}
return b
}
console.log(numOfFreq(['green', 'blue', 'red', 'green', 'orange', 'blue', 'red', 'yellow', 'red', 'red']));

// Create a function to return minimum value in the given numbers-array
//     example:
//         input -> [12, 34, 25, 7, 4, 67, 19]
//         ans -> 4
//         input -> [34, 54, 12, -8, 0, 45]
//         ans -> -8
//         input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
//         ans -> 10
const minValue = (num)=>{
    let result1 = num[0]
    for (minimum in num){
    let value = num[minimum]
    result1 = (value < result1) ? value : result1 
    }
    return `result -> ${result1}`
}
console.log(minValue([109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]));

// create abbreviation
function abbrString(inputString){
  let abbr1 = '';
  let abbr = inputString.split(' ');
  for (i=0 ; i < abbr.length ; i++) {
 abbr1 = abbr1 + abbr[i].charAt(0).toUpperCase()   
  }
    return abbr1
 }
      console.log(abbrString('you Never waLK ALONe every day'));
 
//To title case
function sentTitle (stringInput) {
let sentenceTitlecase = ''
let stringInputSplit = stringInput.toLowerCase().split(' ')
for ( let i = 0; i < stringInputSplit.length; i++) {
sentenceTitlecase = sentenceTitlecase + stringInputSplit[i].charAt(0).toUpperCase() + stringInputSplit[i].slice(1) + " "      
}
return sentenceTitlecase
}
 console.log(sentTitle('you Never waLK ALONe'));

 // function to reverse the string
 function reverse( str )
 {
   // variable holds reverse string
   let rev_str = "";
   for( let i = str.length-1 ;i >= 0 ;i--){
     rev_str+= str[i];
   }
   // return reverse string
   return rev_str;
 }
 //  function checking string is palindrome or not
 function is_palindrome( str )
 {
   reverse_str = reverse(str);
   //  condition checking if reverse str is
   // same as string it is palindrome
   // else not a palindrome
   if( reverse_str === str)
   {
     console.log("passed string is palindrome ");
   }
   else
   {
     console.log("passed string is not palindrome")
   }
 }
 is_palindrome('ghj');

 // reverse string word by word
 function reverseStringByWord (userInput) {
  let resultString = '';

  const arr2 = userInput.split(' ');
  for (let i=arr2.length-1 ; i >= 0 ; i--) { 
      resultString = resultString + arr2[i] + ' ';
  }
  return resultString.trim();
}
console.log(reverseStringByWord('have a great day'));

//strContainingLetter_A
function strContainingLetter_A (input){
  let newArray = []
  for (strings in input)
      if (input[strings].toUpperCase().includes('A'))
      newArray += input[strings] + ' '
  return newArray
}
console.log(strContainingLetter_A(['hello', 'laugh', 'live', 'peaceful', 'hopeful', 'Happy','apple']));

