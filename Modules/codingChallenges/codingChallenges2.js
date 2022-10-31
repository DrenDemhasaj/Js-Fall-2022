// Create a function to return reverse a given array (without using reverse-function from array-class)
//     example:
//         input -> [hello, laugh, live, peaceful, hopeful]
//         ans -> [hopeful, peaceful, live, laugh, hello]
//         input -> [hello, laugh, live, king, queen]
//         ans -> [queen, king, live, laugh, hello]
// Create a function to return the largest string(s) from a given string array.
//     example:
//         input -> [hello, laugh, live, peaceful, hopeful]
//         ans -> peaceful
//         input -> [hello, laugh, live, king, queen]
//         ans -> hello, laugh, queen
// // Create a function to return color name(s) appearing maximum number of times in given string array
//     example:
//         input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
//         ans -> red
//         input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
//         ans -> blue, red
//         input -> []
//         ans -> 
// Create a function to return minimum value in the given numbers-array
//     example:
//         input -> [12, 34, 25, 7, 4, 67, 19]
//         ans -> 4
//         input -> [34, 54, 12, -8, 0, 45]
//         ans -> -8
//         input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
//         ans -> 10

// function revArr()
// let revArr1 = revArr.split(' ')
// let input = ''
// for (let i=revArr1.length-1 ; i >= 0 ; i--){
//     input += revArr1[i] + ' ';
//     return input.trim()
// }
// console.log(revArr([hello, laugh, live, peaceful, hopeful]));


/**
 * first creating the function than giving it a name 
 * 
 * than we split the arrray
 * 
 * we create our loop
 * 
 * 
 */


// function to return reverse a given array (without using reverse-function from array-class)

function reverseArray(revArr1){   // created a function name with with the input
     let rA = [];   // than assigned an empty array
     for (var i = revArr1.length; i > 0; i--) {  // created my loop
         rA.push(revArr1[i - 1]) // here is the magic here im pushing im pushing the elements that im adding   
         } return rA;// returning the result
         }
       console.log(reverseArray(['hello', 'laugh', 'live', 'king', 'queen']));



// Create a function to return the largest string(s) from a given string array.
//     example:
//         input -> [hello, laugh, live, peaceful, hopeful]
//         ans -> peaceful
//         input -> [hello, laugh, live, king, queen]
//         ans -> hello, laugh, queen


let people = ['joe', 'john']
for(let person of people){
    console.log(person);
}

function catGreeter(){
console.log('Hey cat! you are a fine animal');
console.log("Meowwwwwww");
}
catGreeter()
catGreeter()
catGreeter()
catGreeter()
// run, call, invoke, execute


function specialGreeter(Name){
    console.log("Hey " + Name + "! You have a cool attitude");
}
specialGreeter("Jezindipuss")

function adder (a,b,c,d){
    console.log(a+b+c+d);
}
adder(2,3,4,1)

function printerArray(arr){
    for(i =0; i<arr.length;i++)
    console.log(arr[i]);
}

printerArray(['cat','mamagoose','lepri'])

// function adder (num1,num2){
//     return num1 + num2
// }
// adder(2,4)
// let result = adder (2,4) *78

// console.log(result);

function doesExist(nums, num){
for(let i =0; i<nums.length;i++){
     if(nums[i] === num){
        return true
     }
}
return false
}
console.log(doesExist([1,3,5,7], 1));//true



// Create a function to return the largest string(s) from a given string array.
//     example:
//         input -> [hello, laugh, live, peaceful, hopeful]
//         ans -> peaceful
//         input -> [hello, laugh, live, king, queen]
//         ans -> hello, laugh, queen


function largestStr(lStr){
    let strr = []
    for (let i = 0; i < lStr.length; i++){
        strr = lStr[i]
    }
    return strr
} 
console.log(largestStr(['hello', 'laugh', 'live', 'peaceful', 'hopeful']));




// 11
// function getLongestString(qwe) {
  

//    index = 0; 
//    elementLength = qwe[0].length();
//   for(let i=1; i< qwe.length(); i++) {
//       if(qwe[i].length() > elementLength) {
//           index = i; elementLength = qwe[i].length();
//       }
//   }
//   return qwe[index];
// }
//   console.log(getLongestString("cat","chicken","horse","ooooooooo"))

const numbers =[1,2,3,4,5]
numbers.forEach(consoleItem)

function consoleItem(item, index, arr) {
    console.log('a[' + item + '] =' + index);
}

