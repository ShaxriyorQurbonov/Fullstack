// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
// }

const { version } = require("react");


// // Object literal
// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     start: function () {
//         console.log("Car started");
// }};

// console.log(person.firstName);
// console.log(car.brand);
// car.start();

// // New Object
// let person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 30;
// person.greet = function () {
//     console.log("Hello, My name is " + this.firstName);
// };

// console.log(person.firstName);
// person.greet();

// // Factory function
// function createPerson(firstName, lastName, age, country) {
//     return {
//         firstName,
//         lastName,
//         age,
//         country,
//         greet() {
//             console.log("Hello,  " + this.firstName + " " + this.lastName,"I am " + this.age + " years old", "I am from " + this.country);
//         } 
//     };
// }

// let person1 = createPerson("John", "Doe", 30, "USA");
// let person2 = createPerson("Jane", "Smith", 25, "UK");
// console.log(person1);
// console.log(person2);
// person1.greet();
// person2.greet();


/// Constructor function
// function Person(firstName, lastName, age, country) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.greet = function () {
//         return "Hello,  " + this.firstName + " " + this.lastName + ", I am " + this.age + " years old, I am from " + this.country;
//     };
// }

// let person1 = new Person("John", "Doe", 30, "USA");
// let person2 = new Person("Jane", "Smith", 25, "UK");
// console.log(person1);
// console.log(person2);
// console.log(person1.greet());
// console.log(person2.greet());


// /// ES6 Class
// class Person {
//     constructor(firstName, lastName, age, country) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.country = country;
//     }
//     greet() {
//         return `Hello,  ${this.firstName} ${this.lastName}, I am ${this.age} years old, I am from ${this.country}`;
//     }
// }

// let person1 = new Person("John", "Doe", 30, "USA");
// let person2 = new Person("Jane", "Smith", 25, "UK");
// console.log(person1);
// console.log(person2);
// console.log(person1.greet());
// console.log(person2.greet());


/// Using Object.create
// let animal = {
//     type: "Animal",
//     sound() {
//         return "Some sound";
//     }
// };

// let dog = Object.create(animal);
// dog.type = "Dog";
// dog.sound = function () {
//     return "Woof!";
// };
// console.log(dog.type);
// console.log(dog.sound());


/// Singleton Object.create
const config = Object.freeze({
    theme: "dark",
    version: "1.0.0",
});

console.log(config.theme);
console.log(config.version);
// config.theme = "light"; // This will not change the theme because the object is frozen
