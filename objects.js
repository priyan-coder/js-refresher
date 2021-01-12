// this refers to the object
// to access the methods, variables in the object
// key pair values

const person = {
  name: " max",
  age: 29,
  greet() {
    console.log("Hi I am " + this.name);
  },
};

person.greet();

// Object destructuring ==> specifying what we just need from that object
// pull them out using key name

const printName = ({ name, age }) => {
  console.log(name, age);
};

printName(person);

// In a similar way this can be applied to do array destructuring as well
const { name, age } = person;
console.log("Another way " + name + " " + age);
