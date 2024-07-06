/**
 * js revision*/

/** 
 * print to console
 * alert
 * declaring variables
 * string
 * template literals
 * string concentation
 * string methods
 * typeof
 * numbers
 * type coercion
 * assignment operators
 * incirmenting and decrimenting
 * comparison operators 
 * logial operators
 * if else
 * ternary expressions
 * for loops
 * while loops
 * do while loops
 * controlling loop iteration
 * arrays
 */

// print to console
//console.log('anything');

//alert
//alert('anything');

//declaring variables
let myVar = 'a variable';
const myVar2 = 'a constant';
var myVar3 = 'a variable';

//string
let myStr = 'this is a string'
let myStr2 = 'use a backslash \\ to...' 
// \t tab \n new line \r carriage return 
// \' single quote \" double quote \\ backslash

//template literals 
let insert = 'this is inserted'
//console.log(`${insert} - into the string`);

//string concentation 
let concat1 = 'first part, '
let concat2 = 'second part.'
//console.log(concat1 + concat2);

// string methods 
let strForMethods = 'abcdefghijklmnop'
//console.log(strForMethods[0]); // a
//there are many more list methods 

//typeof
typeof 1;                        // "number"
typeof 'Hello world!';           // "string"
typeof true;                     // "boolean"
typeof ['a', 'b', 'c'];          // "object"
typeof {name: 'John', age: 30};  // "object"

//numbers
// infinity a constant == approx 1.8x10^308
// NaN == Not a Number 

//type coercion 
//Type coercion in JavaScript is the implicit/automatic 
//conversion of one data type to another. Since JavaScript 
//is a weakly typed language, JavaScript will automatically 
//convert data types to different data types as needed.
//console.log(1 + "1");  // "11"

//assignment operators
let x = 10; 

x += 1;   // 10 + 1 = 11
x -= 1;   // 10 - 1 = 9
x *= 2;   // 10 * 2 = 20
x /= 2;   // 10 / 2 = 5
x %= 3;   // 10 % 3 = 1 (returns the remainder of 10/3 = 1)
x **= 3;  // 10 ** 3 = 1000 

//incirmenting and decrimenting
let numberToIncriment = 1;
numberToIncriment++; // 2

//comparison operators 
/**
 * == equal
 * === equal strict
 * != not equal
 * !== not equal strict
 * > grater
 * < less
 * >= greater equal
 * <= equal
 */

//logical operators
//(5 && 6) >= 4 //true 
//&& and
//(3 || 6) >= 4 // true 
//returns true if either are true 
//!(4 || 3) && (6 || 7)
//! if NOT 

//if else 
if (1 < 2) {
    // code if true
} else {
    // code if false
};

if (1 < 2) {
    //code if true
} else if (1 > 2) {
    //code if this condition met
} else {
    // if both are false
}

//ternary experssions
ternaryA = 5;
ternaryB = 8;
// condition ? code if true : code if flase 
//ternaryA < ternaryB ? console.log(`${ternaryA} is less.`) : console.log(`${ternaryB} is less.`)

//for loops 
let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
let numberOfFruits = fruits.length;

for (let i = 0; i < numberOfFruits; i++) {
  //code to execute
}

//while loops 

let i = 0;
while (i < numberOfFruits) {
  //code to execute
  i++;
}
//used often with gaming to create infinite loop that must be broken while (true)

//do while loops 
let interval = 10;
do {
  //console.log('checking i...');
  //console.log('i is', i);
} while (interval < 10);
//console.log('Loop complete');
//ensures that the do code is always executed regardless of wether
// i is < 10 

//controlling loop iteration 
let loop = 0;
while (loop <= 1000000) {
  if (loop === 5) {
    //console.log('Breaking!');
    break;
  }
  //console.log(loop);
  loop++;
}

//arrays
//arrays yse []
let myArray = ['a', 'b', 'c']
myArray[0] // 'a'
// there are a number of array mehtods
// https://www.w3schools.com/jsref/jsref_obj_array.asp

