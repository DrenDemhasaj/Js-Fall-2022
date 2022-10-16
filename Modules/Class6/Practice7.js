const sentence3 = 'trimi mir me shok';
let sentence3Array = sentence3.toUpperCase().split(" ");
let abbr = sentence3Array[0].charAt(0)
let abbr1 = sentence3Array[1].charAt(0)
let abbr2 = sentence3Array[2].charAt(0)
let abbr3 = sentence3Array[3].charAt(0)
let abbr4 = abbr.concat(abbr1,abbr2,abbr3)
console.log(`abbr ->${abbr4}`);

const sentence4 = 'jeta e shkurt babik'
let sentence4Array = sentence4.toUpperCase().split(" ");
let abbr5 = sentence4Array[0].charAt(0)
let abbr6 = sentence4Array[1].charAt(0)
let abbr7 = sentence4Array[2].charAt(0)
let abbr8 = sentence4Array[3].charAt(0)
let abbr9 = abbr5.concat(abbr6,abbr7,abbr8);
console.log(`abbr ->${abbr9}`);

let sentence6 = 'qka bone a jemir'
sentence6 = sentence6.toUpperCase();
let arr6 = sentence6.split(' ')
let firstWord6 = arr6[0].charAt(0) + arr6[0].substring(1).toLowerCase();
let secondWord6 = arr6[1].charAt(0) + arr6[1].substring(1).toLowerCase();
let thirdWord6 = arr6[2].charAt(0) + arr6[2].substring(1).toLowerCase();
let fourthWord6 = arr6[3].charAt(0) + arr6[3].substring(1).toLowerCase();
let word6 = firstWord6.concat(secondWord6+' '+thirdWord6+' '+fourthWord6)
console.log(`the sendtence that we looked for -> ${word6}`);

// learn about sudo coding

                  