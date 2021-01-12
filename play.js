// helpful js tutorials ==> https://academind.com/tutorials/?filter=javascript
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript

// Global variables
// string
var name = "Max";
console.log(name);
// number
var age = 29;
// boolean
var hasHobbies = true;

// Function parameteres are local variables
function summarizedUser(userName, ageOfUser, hobbies) {
  return userName + " " + ageOfUser + " " + hobbies;
}

console.log(summarizedUser(name, age, hasHobbies));
