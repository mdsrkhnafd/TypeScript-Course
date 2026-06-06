"use strict";
// Interview Definition
// Inheritance is an OOP feature that allows a class to
// inherit properties and methods from another class using the extends keyword.
class Person2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Employee2 extends Person2 {
    salary;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    // Method Overriding
    // greet(): void {
    //   console.log(
    //     `Hello, I am ${this.name}, a ${this.age}-year-old employee earning $${this.salary}.`,
    //   );
    // }
    work() {
        console.log(`${this.name} is working.`);
    }
}
const emp2 = new Employee2("Mudasir", 25, 50000);
console.log(emp2);
emp2.greet(); // Method from Person2
// emp2.greet(); // Method from Employee2 (if overridden)
emp2.work(); // Method from Employee2
