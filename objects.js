// this refers to the object
// to access the methods, variables in the object

const person = {
  name: " max",
  age: 29,
  greet() {
    console.log("Hi I am " + this.name);
  },
};

person.greet();
