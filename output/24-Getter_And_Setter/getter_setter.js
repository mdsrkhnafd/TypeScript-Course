"use strict";
// Getter and Setter in TypeScript (Simple Explanation)
// Getter and Setter are special methods used to control
// how we read and update object properties.
// Think of them like a security gate:
// Getter → reads value (GET 🔍)
// Setter → updates value (SET ✏️)
class User6 {
    _name;
    constructor(name) {
        this._name = name;
    }
    // Getter (READ)
    get name() {
        return this._name;
    }
    // Setter (WRITE)
    set name(value) {
        this._name = value;
    }
}
const u = new User6("Mudasir");
console.log(u.name); // getter runs
u.name = "Ali"; // setter runs
console.log(u.name);
class User7 {
    _age = 0;
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            console.error("Age cannot be negative.");
            return;
        }
        this._age = value;
    }
}
const user7 = new User7();
user7.age = 34; // OK
console.log(user7.age);
// user7.age = -5; ❌ Error
