
// let ,const and var example

function get(){
var a=10;
var a=20;
// function scoped redeclared and assigned again
console.log(a);

let b=10;
// let b=20;  gives error redeclared not allowed
 b=40;  // reassigned again 
console.log(b);

const c=10;
// const c=20;  gives error redeclared not allowed
//c=20;  // Error: Assignment to constant variable
console.log(c);
}
get();


// Spread Operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3); 

//Destructuring Assignment
const myObj = {
  id: 1,
  name: "abc",
  price: 100
};

// Destructure the object
const { price, name } = myObj;
console.log(`Price: ${price},Name: ${name}`);


//Arrow Functions
const sub = (a, b) => a - b;
console.log(sub(5, 3)); 


// Using for...of to iterate  array
const numbers = [10,30,20,50];

const showNumbers = () => {
  for (const number of numbers) {
    console.log(number);
  }
};

showNumbers();
// Using default parameters for function
const myfun = (a = 10) => {
  return a;
};
console.log(myfun(20)); // output: 20
console.log(myfun());   //output: 10



//Parent class 
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  // Override the speak method
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Create an instance of Dog
const dog1 = new Dog('Labrador', 'Rottweilers');
dog1.speak();  // output: "Labrador barks."