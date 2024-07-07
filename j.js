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
 * objects / dictionaries
 * object methods
 * this 
 * functions 
 * inbuilt functions 
 * date function
 * manipulating the DOM
 * get
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

//objects / dictionaries
let object = {
    property1: 1,
    property2: 2,
    property3: 3,
  }

//object methods 
//you can use the static methods Object.keys() and Object.values() 
//to get the object's properties (keys) and values, respectively. 

let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  }
};

//console.log(car.ignition);
//car.start();
//console.log(car.ignition);

//functions within the object can be declared to manipulate the object

//this 
//In the above code, this refers to the object it is a part of: the car. 
//The this keyword has different meanings depending on the context in which 
//it is used, but you'll most likely see it used in two main ways:

// 1 // In a method, this refers to the object that owns the method. 
//If the method isn't owned by any object, then this refers to the global object.

// 2 // In an event (like when a user clicks on something), this refers to the 
//element that received the event (e.g. the thing they clicked on).

let car2 = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  },
  drive: function() {
    this.location = 'street';
  },
  park: function() {
    this.location = 'garage';
  },
  refuel: function() {
    this.location = 'gas station';
    this.fueled = true;
  },
  stop: function() {
    this.ignition = 'off';
  },
};

// Now we can "use" the car:
//car.start();
//console.log(car.ignition);
//car.drive();
//console.log(car.location);

// Ran out of gas!
///car.fueled = false;
//car.refuel();
//console.log(car.location);
//console.log(car.fueled);

// Let's go home
//car.drive();
//console.log(car.location);
//car.park();
//console.log(car.location);
//car.stop();
//console.log(car);

// functions 
function myFuncition (parameter) {
  //do something 
}

//calling functions 
// myFunction(a) 

//inbuilt functions 
//Math.PI: The constant pi
//Math.random(): A method for returning a random number between 0 and 1
//Math.abs(): A method for finding the absolute value of a number
//Math.min(): A method for returning the minimum of a series of numbers
//Math.max(): A method for returning the maximum of a series of numbers

//date function
today = new Date();

// Now we can operate on it:
//console.log(today.getFullYear());      // The 4 digit year
//console.log(today.getMonth());         // The month (0-11)
//console.log(today.getDate());          // The day of the month (1-31)
//console.log(today.getDay());           // The day of the week (0-6)
//console.log(today.getHours());         // The hour (0-23)
//console.log(today.getMinutes());       // The minute (0-59)
//console.log(today.getSeconds());       // The seconds (0-59)
//console.log(today.getMilliseconds());  // The milliseconds (0-999)

/**
 * Manipulating the DOM
 */

// basic get 
let q = document.getElementById('myID');

// More complex DOM nagigation is best done using jQuery
