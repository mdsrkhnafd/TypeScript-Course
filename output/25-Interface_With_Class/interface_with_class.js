"use strict";
// 🧠 Easy Interview Definition
// Implementing the User interface in a class
class Student8 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old`;
    }
    welcome() {
        return `Welcome, ${this.name}!`;
    }
    getStudentList() {
        return ["Student A", "Student B", "Student C"];
    }
}
const s1 = new Student8("Mudasir", 30);
console.log(s1.getDetails());
console.log(s1.welcome());
console.log(s1.getStudentList());
// Output:
// Mudasir is 30 years old
// Welcome, Mudasir!
