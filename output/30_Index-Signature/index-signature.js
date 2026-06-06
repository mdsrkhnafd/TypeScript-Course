"use strict";
// What is an Index Signature?
var userData1 = {
    name: "Mudasir",
    age: 30,
    city: "Rawalpindi",
};
const user21 = {
    name: "Mudasir",
    age: 30,
    //   city: "Rawalpindi", // ❌ Error // TypeScript complains because city is not defined in the interface.
};
const user33 = {
    name: "Mudasir",
    age: 30,
    city: "Rawalpindi",
    country: "Pakistan",
    isEmp: true,
};
const user34 = {
    name: "Mudasir",
    age: 30,
    city: "Rawalpindi",
    experience: 5,
};
// One-Line Summary
// Index Signature is used when you don't know the property names
// in advance but want TypeScript to enforce the type of their values. 🚀
