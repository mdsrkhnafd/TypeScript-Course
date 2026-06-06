"use strict";
// What is Generic in TypeScript?
// A Generic allows you to write code that works
// with different data types while keeping type safety.
// T  = Type
// K  = Key
// V  = Value
function getData(value) {
    return value;
}
console.log(getData("Mudasir"));
console.log(getData(100));
console.log(getData(true));
// Generic with Arrays
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(["Ali", "Ahmed"]));
function getArrayElement(arr) {
    return arr;
}
let numbers = [1, 2, 3];
let strings = ["Hello", "World"];
console.log(numbers);
console.log(strings);
const userResponse = {
    success: true,
    data: "Mudasir",
};
// OR
const ageResponse = {
    success: true,
    data: 30,
};
const box1 = {
    value: "Hello",
};
const box2 = {
    value: 100,
};
// Generic Class
class Storage1 {
    data;
    constructor(data) {
        this.data = data;
    }
    getData11() {
        return this.data;
    }
}
const user11 = new Storage1("Mudasir");
console.log(user11.getData11());
const response23 = {
    status: 200,
    data: {
        name: "Mudasir",
        age: 30,
    },
};
console.log(response23);
// Interview Definition
// Generics are a TypeScript feature that allows creating reusable components
// that work with multiple data types while maintaining type safety.
// A Generic lets you write one reusable function, interface, type,
// or class that can work with many data types while preserving
// TypeScript's type checking. 🚀
// Memory Tricks
// any
// =
// Accept anything
// Protect nothing ❌
// Generic<T>
// =
// Accept anything
// Protect type ✅
