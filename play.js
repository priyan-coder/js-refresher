// helpful js tutorials ==> https://academind.com/tutorials/?filter=javascript
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript

// Global variables

// var is a keyword that creates new variables but it is outdated
// If you intend on changing the value assigned to a variable ==> use let
// But if you intend to retain that variable as a constant ==> use const

// string
const name = "Max";
console.log(name);
// number
let age = 29;
// boolean
const hasHobbies = true;

age = 30;

// Function parameteres are local variables
function summarizedUser(userName, ageOfUser, hobbies) {
  return userName + " " + ageOfUser + " " + hobbies;
}

console.log(summarizedUser(name, age, hasHobbies));
