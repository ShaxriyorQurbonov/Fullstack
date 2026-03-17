// function talabaYaratish(ism, yosh, ball, guruh) {
//     return {
//         ism: ism,
//         yosh: yosh,
//         ball: ball,
//         guruh: guruh,
//         baholash: function() {
//             return this.ball >= 90 ? 'A' :
//                 this.ball >= 80 ? 'B' :
//                 this.ball >= 70 ? 'C' :
//                 this.ball >= 60 ? 'D' : 'F';
//         },
//         isAdult: function() {
//             return this.yosh >= 18 ? 'Voyaga yetgan' : 'Voyaga yetmagan';
//         }
    
//     };
// }

// let talaba1 = talabaYaratish('Ali', 20, 85, 203);

// console.log(talaba1);
// console.log('Baholash:', talaba1.baholash());
// console.log('Yosh holati:', talaba1.isAdult());

// console.log('=================================');

// function Mashina(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.start = function() {
//         console.log(this.brand + " " + this.model + " started.");
//     };
// }   

// let mashina1 = new Mashina("Toyota", "Camry", 2020);
// console.log(mashina1);
// mashina1.start();   


// console.log('=================================');
// class Person {
//     constructor(firstName, lastName, age, country) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.country = country;
//     }
//     isAdult() {
//         return this.age >= 18 ? 'Voyaga yetgan' : 'Voyaga yetmagan';
//     }
// }

// let person1 = new Person("Johnny", "Doe", 30, "USA");
// let person2 = new Person("Janney", "Smith", 25, "UK");
// let person3 = new Person("Ali", "Veli", 17, "Uzbekistan");
// let person4 = new Person("Sara", "Connor", 15, "Canada");

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log('Yosh holati:', person1.isAdult());
// console.log('Yosh holati:', person2.isAdult());
// console.log('Yosh holati:', person3.isAdult());
// console.log('Yosh holati:', person4.isAdult());
// console.log('=================================');


console.log('=================================');

class Banka {
    constructor(name, balance,password) {
        this.name = name;
        this.balance = balance;
        this.password = password;
    }
    deposit(amount) {
        if (this.password != "1234") {
            console.log("Invalid password.");
            return;
        }
        this.balance += amount;
        console.log(amount + " deposited. New balance: " + this.balance);
    }
    withdraw(amount) {
        if (this.password != "1234") {
            console.log("Invalid password.");
            return;
        }

        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(amount + " withdrawn. New balance: " + this.balance);
        } else {
            console.log("Insufficient funds.");
        }
    }
    getBalance() {
        console.log("Current balance: " + this.balance);
    }
};

let banka1 = new Banka("My Bank", 1000, "1234");
banka1.getBalance();
banka1.deposit(500);
banka1.withdraw(200);
banka1.withdraw(1500);

const prompt = require('prompt-sync')();

let userPassword = prompt("Enter your password: ");
banka1.password = userPassword;
banka1.getBalance();
banka1.deposit(500);
banka1.withdraw(200);
banka1.withdraw(1500);

console.log('=================================');
