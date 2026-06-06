"use strict";
// Union Types in TypeScript
// A union type allows a variable to hold values of multiple types. It is defined using the pipe (|) symbol.
var studentData = "John Doe";
studentData = "John Doe";
studentData = 12345;
studentData = ["mudasir", "ahmed", "ali"];
console.log(studentData);
function fruitsData() {
    var item = 1;
    if (item > 1) {
        return ["apple", "banana", "mango"];
    }
    else {
        return "apple";
    }
}
console.log(fruitsData());
function studentInfo1(name) {
    return name;
}
console.log(studentInfo1("Mudasir Ahmed"));
console.log(studentInfo1(12345));
console.log(studentInfo1(true));
function studentInfo(name) {
    if (typeof name === "string") {
        return `Student Name: ${name}`;
    }
    else if (typeof name === "number") {
        return `Student ID: ${name}`;
    }
    else if (typeof name === "boolean") {
        return `Is Student Active: ${name}`;
    }
    else {
        return "Invalid input";
    }
}
console.log(studentInfo("Mudasir Ahmed"));
console.log(studentInfo(12345));
console.log(studentInfo(true));
