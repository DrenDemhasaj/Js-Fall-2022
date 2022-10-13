
 /* discussed string-functions:;
 * 
 * startsWith()
 * endsWith
 * includes()
 * replace()
 * 
 * (localeCompare, substring, slice, substr)
Array (length, []-notation)
 * 
 * let est1 = 23;
let est2 = '23';

est1 === est2;
res1 = est1.localeCompare(est2);
console.log(res1);
 * 
 * 
 * 
 * 
 */





let stmt1 = 'hello World!';
let stmt2 = 'Hello World!';
// to compare if stmt1 and stmt2 are equal  -> boolean
stmt1 === stmt2

// to compare if stmt1 and stmt2 are equal  -> 0, 1, -1
let isEqual1 = stmt1.localeCompare(stmt2);
console.log(`\n\nis stmt1 equal to stmt2 -> ${isEqual1}\n\n`);




