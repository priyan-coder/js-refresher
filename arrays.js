// Arrays can contain items of different types like other arrays, objects, etc
// Several Key built in methods ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// By adding a new element or changing stuff within this array we dont violate the const
// Because arrays / objects are reference types and the changes that we do ==> dont change the address held by the pointer hobbies

// Unpacking an object or an aray ==> spread operator
// mergin up the arguments into an array ==> rest operator

const hobbies = ["Sports", "Cooking"];

// looping through
for (let hobby of hobbies) {
  console.log(hobby);
}
hobbies.push("Programming");
console.log(hobbies);

const copiedArray = [...hobbies];
copiedArray.push("excercise");

console.log(copiedArray);
console.log(hobbies);

const getTheArgs = (...args) => {
  return args;
};

console.log(getTheArgs(1, 2, 55, 8));
