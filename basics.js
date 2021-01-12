// helpful js tutorials ==> https://academind.com/tutorials/?filter=javascript
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript

// Global variables

// var is a keyword that creates new variables but it is outdated
// If you intend on changing the value assigned to a variable ==> use let
// But if you intend to retain that variable as a constant ==> use const

// Strins, numbers, booleans, undefines and null are primitive types ==> stored in a stack
// Objects and arrays are reference types ==> the pointer is stored in a stack while the object or the array itself is stored in the heap
// Checkout this article and video for full understanding on mutability, primitive vs reference types ==> https://academind.com/tutorials/reference-vs-primitive-values/
// Basically for objects, nested objects or arrays and nested arrays, etc ==> You need to copy out every layer and then make changes to the copy
// Else, changes to the copied obejct/ array or the original object/ array for its nested reference types will reflect on both and cause issues
// This is solved using immer, a library or using redux ==> createReducer

// arrow functions help to ensure that the this keyword refers to the object which calls the function
// lets say addName is a function within a class
// method 1 ==> this.addName.bind(this)
// method 2 ==> () => {this.addName()}
// this keyword is used to access any variable or method stated within the class
// Checkout ==> https://academind.com/tutorials/this-keyword-function-references/

// string
const name = "Max";
console.log(name);
// number
let age = 29;
// boolean
const hasHobbies = true;

age = 30;

// Function parameteres are local variables
// changed to arrow fn
const summarizedUser = (userName, ageOfUser, hobbies) => {
  return userName + " " + ageOfUser + " " + hobbies;
};

console.log(summarizedUser(name, age, hasHobbies));
